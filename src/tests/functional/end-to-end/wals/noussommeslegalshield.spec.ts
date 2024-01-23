import RegionsUtils from '../../../../utils/regions.utils';
import { expect } from '@playwright/test';
import { basicUser } from '../../../../utils/user.utils';
import { test } from '../../../../fixtures/frontend-ui.fixture';

test.beforeEach(async ({ context, page }) => {
  test.slow();
});

const regionsUnderTest = ['Ontario'];
for (const regionUnderTest of regionsUnderTest) {
  test('Noussommeslegalshield (Legal Plan, fr-CA, ${regionUnderTest}) -> Checkout -> Accounts @smoke @e2e', async ({ page, walsService }) => {
    console.log(`Test Case: Noussommeslegalshield (Legal Plan, fr-CA, ${regionUnderTest}) -> Checkout -> Accounts`);
    const regionInfo = RegionsUtils.caFrenchProvinces.filter((region) => region.name == regionUnderTest)[0];
    const homeAddress = regionInfo.validAddress.street;
    const city = regionInfo.validAddress.city;
    const postalCode = regionInfo.validAddress.postalCode;
    await test.step('Navigate to noussommeslegalshield.com', async () => {
      await walsService.walsAffiliatedPage.navigateToAffiliatedWalsPage('lstestauto', 'noussommeslegalshield', 'ca');
    });
    await test.step('Select a region', async () => {
      await walsService.walsAffiliatedPage.walsGeolocateMenuComponent.changeRegion(regionUnderTest);
    });
    await test.step('Click on GET A PLAN button', async () => {
      await walsService.walsAffiliatedPage.clickOnGetAPlanButton('Legal Plan');
    });
    await test.step('Click Continue button in shopping cart', async () => {
      await walsService.walsAffiliatedPage.walsCartComponent.locContinueButton.click();
    });
    await test.step('Click Checkout button in shopping cart', async () => {
      await walsService.walsAffiliatedPage.walsCartComponent.locCheckoutButton.click();
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
    // if (process.env.USE_PROD == 'true') {
    //   console.log('* Do not finish transaction in PRODUCTION environment *');
    // } else {
    //   await test.step(`Fill out Bank Draft form and Submit`, async () => {
    //     await checkoutPage.completeBankDraftFormUnitedStates('1000123546', '103000648', 'Test', 'Test Bank');
    //   });
    //   await test.step(`Assert Confirmation Page URL`, async () => {
    //     await expect(checkoutPage.locConfirmationPageWelcomeHeader).toBeVisible({ timeout: 100000 });
    //   });
    // }
  });
}
