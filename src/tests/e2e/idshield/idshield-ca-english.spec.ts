import RegionsUtils from '../../../utils/regions.utils';
import { basicUser } from '../../../utils/user.utils';
import { test, expect } from '@playwright/test';
import { IdshieldPage } from '../../../page-objects-refactored/marketing-sites/idshield/idshield.page';
import { CommonLoginPage, CommonCheckoutPage } from '@legalshield/frontend-automation-commons';
import UrlsUtils from '../../../utils/urls.utils';

let idshieldPage: IdshieldPage;
let loginPage: CommonLoginPage;
let checkoutPage: CommonCheckoutPage;

test.beforeEach(async ({ page }) => {
  test.setTimeout(120000);
  loginPage = new CommonLoginPage(page);
  idshieldPage = new IdshieldPage(page);
  checkoutPage = new CommonCheckoutPage(page);
});

const regionsUnderTest = ['Manitoba'];
for (const regionUnderTest of regionsUnderTest) {
  test(`${regionUnderTest} - Can purchase any idshield plan for market=en-CA @smoke`, async ({ page }) => {
    console.log(`${regionUnderTest} - Can purchase any idshield plan for market=en-CA`);
    const regionInfo = RegionsUtils.caProvinces.filter((region) => region.name == regionUnderTest)[0];
    const homeAddress = regionInfo.validAddress.street;
    const city = regionInfo.validAddress.city;
    const postalCode = regionInfo.validAddress.postalCode;
    const regionAbbreviation = regionInfo.abbrv;

    await test.step(`Navigate to idshield canada page`, async () => {
      await page.goto(UrlsUtils.marketingSitesUrls.idShieldCAUrl);
    });
    await test.step(`Change Region`, async () => {
      await idshieldPage.selectRegion(regionUnderTest, regionAbbreviation);
      await idshieldPage.locUpdateRegionButton.click();
      await page.waitForSelector(`//div[(@id="page-container") and contains(.,"${regionsUnderTest}")]`);
    });
    await test.step(`Click on the Sign Up button`, async () => {
      await idshieldPage.clickGetStartedButton('Individual Plan');
    });
    await test.step(`Log in to reach checkout service`, async () => {
      await loginPage.login(basicUser.email, basicUser.password);
    });
    await test.step(`Validate Order Summary on Personal Info Page`, async () => {
      expect(await checkoutPage.locOrderSummaryComponentTotalAmount.innerText()).toContain('$14.95');
    });
    await test.step(`Change Address to match region and continue to Payment Page`, async () => {
      await checkoutPage.changeAddress(homeAddress, city, postalCode);
      await checkoutPage.locPersonalInfoSaveAndContinueButton.click();
    });
    await test.step(`Validate Order Summary on Payment Info Page`, async () => {
      expect(await checkoutPage.locOrderSummaryComponentTotalAmount.innerText()).toContain('$14.95');
    });
    await test.step(`Fill out Bank Draft form and Submit`, async () => {
      await checkoutPage.completeBankDraftFormCanada('0000000', '11242', '260', 'Tester');
    });
    await test.step(`Click on the Let's go button`, async () => {
      await checkoutPage.locConfirmationPageLetsGoButton.click();
    });
    await test.step(`Assert Accounts Page URL`, async () => {
      await expect(page).toHaveURL(new RegExp('accounts'));
    });
  });
}
