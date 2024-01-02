import { test, expect } from '@playwright/test';
import RegionsUtils from '../../../../utils/regions.utils';
import { basicUser } from '../../../../utils/user.utils';
import { WalsAffiliatedPage } from '../../../../page-objects/wals/wals-affiliated.page';
import { CommonLoginService, CommonCheckoutService } from '@legalshield/frontend-automation-commons';

let walsAffiliatedPage: WalsAffiliatedPage;
let loginPage: CommonLoginService;
let checkoutPage: CommonCheckoutService;

test.beforeEach(async ({ context, page }) => {
  loginPage = new CommonLoginService(page);
  checkoutPage = new CommonCheckoutService(context, page);
  walsAffiliatedPage = new WalsAffiliatedPage(page);
  test.slow();
});

const regionsUnderTest = ['Texas'];
for (const regionUnderTest of regionsUnderTest) {
  test(`Wearelegalshield (Legal Plan, en-US, ${regionUnderTest}) -> Checkout -> Accounts @smoke @e2e`, async ({ page }) => {
    console.log(`Test Case: Wearelegalshield (Legal Plan, en-US, ${regionUnderTest}) -> Checkout -> Accounts`);
    const regionInfo = RegionsUtils.usStates.filter((region) => region.name == regionUnderTest)[0];
    const homeAddress = regionInfo.validAddress.street;
    const city = regionInfo.validAddress.city;
    const postalCode = regionInfo.validAddress.postalCode;

    await test.step('Navigate to weareleglshield.com', async () => {
      await walsAffiliatedPage.navigateToAffiliatedWalsPage('lstestauto', 'wearelegalshield', 'com');
    });
    await test.step('Select a region', async () => {
      await walsAffiliatedPage.walsGeolocateMenuComponent.changeRegion(regionUnderTest);
    });
    await test.step('Click on GET A PLAN button', async () => {
      await walsAffiliatedPage.clickOnGetAPlanButton('Legal Plan');
    });
    await test.step('Click Continue button in shopping cart', async () => {
      await walsAffiliatedPage.walsCartComponent.locCartContainer.waitFor();
      await walsAffiliatedPage.walsCartComponent.locContinueButton.click();
    });
    await test.step('Click Checkout button in shopping cart', async () => {
      await walsAffiliatedPage.walsCartComponent.locCheckoutButton.click();
    });
    //TODO:Uncomment as soon as WALS is hitting checkout v3
    // await test.step(`Log in to reach checkout service`, async () => {
    //   await loginPage.login(basicUser.email, basicUser.password);
    // });
    // await test.step(`Validate Order Summary on Personal Info Page`, async () => {
    //   expect(await checkoutPage.locOrderSummaryComponentTotalAmount.innerText()).toContain('$29.95');
    // });
    // await test.step(`Change Address to match region and continue to Payment Page`, async () => {
    //   await checkoutPage.changeAddress(homeAddress, city, postalCode);
    //   await checkoutPage.locPersonalInfoSaveAndContinueButton.click();
    // });
    // await test.step(`Validate Order Summary on Payment Info Page`, async () => {
    //   expect(await checkoutPage.locOrderSummaryComponentTotalAmount.innerText()).toContain('$29.95');
    // });
    // await test.step(`Fill out Bank Draft form and Submit`, async () => {
    //   await checkoutPage.completeBankDraftFormUnitedStates('1000123546', '103000648', 'Test', 'Test Bank');
    // });
    // await test.step(`Assert Confirmation Page URL`, async () => {
    //   await expect(checkoutPage.locConfirmationPageWelcomeHeader).toBeVisible({ timeout: 100000 });
    // });
  });
}
