import { test } from '@playwright/test';
import { CheckoutConfirmationPage } from '../../page-objects/checkout/checkout-confirmation.page';
import RegionsUtils from '../../utils/regions.utils';
import UrlsUtils from '../../utils/urls.utils';
import { basicUser } from '../../utils/user.utils';
import legalshieldTestHarnessData from '../e2e/data/e2e-checkout-legalshield-test-harness.json';
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
  const region = tc.region;
  test(`${tc.testCaseName} - ${tc.region} @legalshield @testHarnessCheckoutRegression`, async ({ page }) => {
    console.log(`Test Case: ${tc.testCaseName} - ${tc.region}`);

    // Select Plans and get to Personal Info Page
    await checkoutConfirmationPage.goTo(UrlsUtils.testHarnessUrls.legalShield.url);
    await checkoutConfirmationPage.selectTestHarnessRegion(region);
    await checkoutConfirmationPage.addProducts(tc.productNames);
    await checkoutConfirmationPage.clickCheckoutButton();
    await checkoutConfirmationPage.login(basicUser.email, basicUser.password);
    await page.pause();

    // // 4. Capture Order Summary
    // await checkoutConfirmationPage.captureOrderSummary;

    // // OLD CODE FOR REFERENCE ======================================================
    // // Navigate to personal Info page through planalyzer
    // // Note: TODO: Convert this method to one that uses the marketing site instead of planalyzer
    // await checkoutConfirmationPage.navigateToPersonalInfoPageFromPlanalyzer('D2C', 'IDShield', tc.province, 'en-CA', '', 'F30', [tc.planName]);
    // await checkoutConfirmationPage.changeAddressCanada(tc.province);
    // await checkoutConfirmationPage.captureOrderSummaryWithoutTier();
    // // Personal Info Assertions
    // // await checkoutConfirmationPage.assertPlanNameAndCost(tc.planName, tc.planCost); -> want to use but not working as expected
    // await checkoutConfirmationPage.assertPlanNameDisplayedInSummary(tc.planName);
    // await checkoutConfirmationPage.assertMonthlyLabelAndTotal(tc.totalCost);
    // await checkoutConfirmationPage.assertTotalDueToday(tc.totalDueToday);
    // await checkoutConfirmationPage.clickSaveAndContinueButton();
    // await checkoutConfirmationPage.captureOrderSummaryWithoutTier();
    // // Payment Assertions
    // // await checkoutConfirmationPage.assertPlanNameAndCost(tc.planName, tc.planCost); -> want to use but not working as expected
    // await checkoutConfirmationPage.assertPlanNameDisplayedInSummary(tc.planName);
    // await checkoutConfirmationPage.assertMonthlyLabelAndTotal(tc.totalCost);
    // await checkoutConfirmationPage.assertTotalDueToday(tc.totalDueToday);
    // await checkoutConfirmationPage.navigateFromPaymentBankDraftPageToConfirmationPageCanada();
    // // Confirmation Assertions
    // await checkoutConfirmationPage.assertMembershipTileIsDisplayed(tc.planType);
    // await checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed();
    // await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(tc.planName);
    // await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(tc.planName);
  });
}
