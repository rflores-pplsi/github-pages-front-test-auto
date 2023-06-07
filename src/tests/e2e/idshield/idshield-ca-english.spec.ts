import RegionsUtils from '../../../utils/regions.utils';
import { basicUser } from '../../../utils/user.utils';
import { test, expect } from '@playwright/test';
import { IdshieldPage } from '../../../page-objects-refactored/marketing-sites/idshield/idshield.page';
import { CommonLoginService, CommonCheckoutService } from '@legalshield/frontend-automation-commons';
import UrlsUtils from '../../../utils/urls.utils';

let idshieldPage: IdshieldPage;
let commonLoginService: CommonLoginService;
let commonCheckoutService: CommonCheckoutService;

test.beforeEach(async ({ context, page }) => {
  test.setTimeout(120000);
  commonLoginService = new CommonLoginService(page);
  idshieldPage = new IdshieldPage(page);
  commonCheckoutService = new CommonCheckoutService(context, page);
});

const regionsUnderTest = ['Manitoba'];
for (const regionUnderTest of regionsUnderTest) {
  test(`IdShield (Individual Plan, en-CA, ${regionUnderTest}) -> Checkout -> Accounts @smoke`, async ({ page }) => {
    console.log(`Test Case: IdShield (Individual Plan, en-CA, ${regionUnderTest}) -> Checkout -> Accounts`);
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
      await commonLoginService.loginPage.login(basicUser.email, basicUser.password);
    });
    await test.step(`Validate Order Summary on Personal Info Page`, async () => {
      expect(await commonCheckoutService.personalInfoPage.orderSummaryComponent.locTotalContainer.innerText()).toContain('$14.95');
    });
    await test.step(`Update Personal Info to match region`, async () => {
      await commonCheckoutService.personalInfoPage.fillAllNonBusinessFormFields(
        'Automation',
        'Tester',
        '5555555555',
        'Mobile',
        homeAddress,
        city,
        postalCode,
        '10',
        '10',
        '2001',
        '3333'
      );
    });
    await test.step(`Click Save and Continue and wait for Payment page to load`, async () => {
      await commonCheckoutService.personalInfoPage.clickSaveAndContinueAndWaitForPaymentPageToLoad();
    });
    await test.step(`Validate Order Summary on Payment Info Page`, async () => {
      expect(await commonCheckoutService.paymentsPage.orderSummaryComponent.locTotalContainer.innerText()).toContain('$14.95');
    });
    await test.step(`Click on the Bank Draft Toggle`, async () => {
      await commonCheckoutService.paymentsPage.bankDraftComponent.locCreditCardBankDraftToggle.click();
    });
    await test.step(`Fill out Bank Draft form and Submit`, async () => {
      await commonCheckoutService.paymentsPage.bankDraftComponent.completeBankDraftFormCanada('0000000', '11242', '260', 'Tester');
    });
    await test.step(`Click on the Purchase button`, async () => {
      await commonCheckoutService.paymentsPage.bankDraftComponent.locPurchaseButton.click();
    });
    await test.step(`Click on the My account option in the header dropdown`, async () => {
      await commonCheckoutService.paymentsPage.globalHeaderComponent.navigateToAccountsProfilePageThroughMyAccountsLink();
    });
    await test.step(`Assert Accounts Page URL`, async () => {
      await expect(page).toHaveURL(new RegExp('accounts'));
    });
  });
}
