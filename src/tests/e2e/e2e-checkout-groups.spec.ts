import { test } from '@playwright/test';
import { CheckoutConfirmationPage } from '../../page-objects/checkout/checkout-confirmation.page';
import { basicUser } from '../../utils/user.utils';
import checkoutGroupsData from './data/e2e-checkout-groups.json';
// create instance of Page
let checkoutConfirmationPage: CheckoutConfirmationPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  checkoutConfirmationPage = new CheckoutConfirmationPage(page);
  // test.slow triples the default wait times
  test.slow();
});

// Self-pay Canada One Plan
for (const tc of checkoutGroupsData.filter((tc) => tc.disabled == false)) {
  test(`${tc.testCaseName} - ${tc.region} @legalshield @testHarnessCheckoutRegression`, async ({ page }) => {
    console.log(`Test Case: ${tc.testCaseName} - ${tc.region}`);

    // Select Plans and get to Personal Info Page
    await checkoutConfirmationPage.navigateToShieldBenefitsGroupOverview(tc.groupNameOrNumber);
    await checkoutConfirmationPage.clickShieldBenefitsPricingTab();
    await checkoutConfirmationPage.selectProvince(tc.region);
    await checkoutConfirmationPage.clickPricingPageSinglePlanEnrollNowButton(tc.planSupplementName);
    await checkoutConfirmationPage.login(basicUser.email, basicUser.password);
    await checkoutConfirmationPage.changeAddressCanada(tc.region);
    await checkoutConfirmationPage.captureOrderSummaryWithoutTier();

    // // Personal Info Assertions
    await checkoutConfirmationPage.assertAllProductNamesAndCosts(tc.productNamesAndCosts);
    await checkoutConfirmationPage.assertMonthlyLabelAndTotal(tc.monthlyTotal);
    // // Save and continue to the Payment Page
    // await checkoutConfirmationPage.completeBusinessInfoForm();
    // await checkoutConfirmationPage.clickSaveAndContinueButton();
    // await checkoutConfirmationPage.captureOrderSummaryWithoutTier();
    // // Payment Assertions
    // await checkoutConfirmationPage.assertAllProductNamesAndCosts(tc.productNamesAndCosts);
    // await checkoutConfirmationPage.assertMonthlyLabelAndTotal(tc.monthlyTotal);
    // // Fill out payment info and continue to Confirmation Page
    // await checkoutConfirmationPage.navigateFromPaymentBankDraftPageToConfirmationPage();
    // // // Confirmation Assertions
    // await checkoutConfirmationPage.assertMembershipTileIsDisplayed(tc.planType);
    // await checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed();
    // await checkoutConfirmationPage.assertAllPlanTilesOnConfirmationPage(tc.productNamesAndCosts);
  });
}
