import { test } from '@playwright/test';
import { CheckoutConfirmationPage } from '../../page-objects/checkout/checkout-confirmation.page';
import UrlsUtils from '../../utils/urls.utils';
import { basicUser } from '../../utils/user.utils';
import legalshieldTestHarnessData from './data/legalshield-idshield/e2e-legalshield-idshield.json';
// create instance of Page
let checkoutConfirmationPage: CheckoutConfirmationPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  checkoutConfirmationPage = new CheckoutConfirmationPage(page);
  // test.slow triples the default wait times
  test.slow();
});

// LegalShield
for (const tc of legalshieldTestHarnessData.filter((tc) => tc.disabled == false)) {
  for (const region of tc.regions) {
    test.only(`${tc.testCaseName} - ${region} @legalshield @testHarnessCheckoutRegression`, async ({ page }) => {
      console.log(`Test Case: ${tc.testCaseName} - ${region}`);

      // Select Plans and get to Personal Info Page
      await test.step(`Navigate to Test Harness - LegalShield}`, async () => {
        await checkoutConfirmationPage.goTo(UrlsUtils.testHarnessUrls.legalShield.url);
      });
      await test.step(`Select Region: ${region}`, async () => {
        await checkoutConfirmationPage.addProducts(region, tc.productNamesAndCosts);
      });
      await test.step(`Click Checkout Button`, async () => {
        await checkoutConfirmationPage.clickCheckoutButton();
      });
      await test.step(`Login with Credentials - Email:  ${basicUser.email}, Password: ${basicUser.password}`, async () => {
        await checkoutConfirmationPage.login(basicUser.email, basicUser.password);
      });
      await test.step(`Capture the Order Summary used for assertions - Personal Info Page`, async () => {
        await checkoutConfirmationPage.captureOrderSummaryWithoutTier();
      });
      // Personal Info Assertions
      await test.step(`Assert Product Names and Costs - Personal Info Page: ${tc.productNamesAndCosts}`, async () => {
        await checkoutConfirmationPage.assertAllProductNamesAndCosts(tc.productNamesAndCosts);
      });
      await test.step(`Assert Total Cost - Personal Info Page: ${tc.monthlyTotal}`, async () => {
        await checkoutConfirmationPage.assertMonthlyLabelAndTotal(tc.monthlyTotal);
      });
      // Complete Necessary Forms and Continue to Payment Page
      await test.step(`Change Address to a valid one for Region: ${region}`, async () => {
        await checkoutConfirmationPage.changeAddressUs(region);
      });
      await test.step(`Complete Business Form if Necessary`, async () => {
        await checkoutConfirmationPage.completeBusinessInfoForm();
      });
      await test.step(`Click Save and Continue Button`, async () => {
        await checkoutConfirmationPage.clickSaveAndContinueButton();
      });
      await test.step(`Capture the Order Summary used for assertions - Payment Page:`, async () => {
        await checkoutConfirmationPage.captureOrderSummaryWithoutTier();
      });
      // Payment Page Assertions
      await test.step(`Assert Product Names and Costs - Payment Page: ${tc.productNamesAndCosts}`, async () => {
        await checkoutConfirmationPage.assertAllProductNamesAndCosts(tc.productNamesAndCosts);
      });
      await test.step(`Assert Total Cost - Payment Page: `, async () => {
        await checkoutConfirmationPage.assertMonthlyLabelAndTotal(tc.monthlyTotal);
      });
      // Fill out Payment Method and Continue to Confirmation Page
      await test.step(`Click Bank Draft Tab`, async () => {
        await checkoutConfirmationPage.clickBankDraftBtn();
      });
      await checkoutConfirmationPage.fillMarketBankDraftFormAndSubmit(tc.market);
      // // Confirmation Assertions
      await test.step(`Assert ${tc.planType} Tile is Displayed}`, async () => {
        await checkoutConfirmationPage.assertMembershipTileIsDisplayed(tc.planType);
      });
      await test.step(`Assert Plan Tiles Displayed on Confirmation Page for: ${tc.productNamesAndCosts}`, async () => {
        await checkoutConfirmationPage.assertAllPlanTilesOnConfirmationPage(tc.productNamesAndCosts);
      });
    });
  }
}
