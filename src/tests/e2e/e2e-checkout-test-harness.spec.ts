import { test } from '@playwright/test';
import { check } from 'prettier';
import { CheckoutConfirmationPage } from '../../page-objects/checkout/checkout-confirmation.page';
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
  test.only(`${tc.testCaseName} - ${tc.region} @legalshield @testHarnessCheckoutRegression`, async ({ page }) => {
    console.log(`Test Case: ${tc.testCaseName} - ${tc.region}`);

    // Select Plans and get to Personal Info Page
    await checkoutConfirmationPage.goTo(UrlsUtils.testHarnessUrls.legalShield.url);
    await checkoutConfirmationPage.addProducts(region, tc.productNamesAndCosts);
    await page.pause();
    await checkoutConfirmationPage.clickCheckoutButton();
    await checkoutConfirmationPage.login(basicUser.email, basicUser.password);
    await checkoutConfirmationPage.changeAddressUs(tc.region);
    await checkoutConfirmationPage.captureOrderSummaryWithoutTier();
    // Personal Info Assertions
    await checkoutConfirmationPage.assertAllPlanNamesAndCosts(tc.productNamesAndCosts);
    await checkoutConfirmationPage.assertMonthlyLabelAndTotal(tc.monthlyTotal);
    // Save and continue to the Payment Page
    await checkoutConfirmationPage.clickSaveAndContinueButton();
    await checkoutConfirmationPage.captureOrderSummaryWithoutTier();
    // Payment Assertions
    await checkoutConfirmationPage.assertAllPlanNamesAndCosts(tc.productNamesAndCosts);
    await checkoutConfirmationPage.assertMonthlyLabelAndTotal(tc.monthlyTotal);
    // Fill out payment info and continue to Confirmation Page
    await checkoutConfirmationPage.navigateFromPaymentBankDraftPageToConfirmationPage();

    // // Confirmation Assertions
    await checkoutConfirmationPage.assertMembershipTileIsDisplayed(tc.planType);
    await checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed();
    await checkoutConfirmationPage.assertAllPlanTilesOnConfirmationPage(tc.productNamesAndCosts);
  });
}
