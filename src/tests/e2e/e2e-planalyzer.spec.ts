import { test } from '@playwright/test';
import { CheckoutConfirmationPage } from '../../page-objects/checkout/checkout-confirmation.page';
import { basicUser } from '../../utils/user.utils';
import idshieldCanadaData from './data/idshield/e2e-idshield-canada-monthly.json';
import legalshieldUsData from './data/e2e-checkout-legalshield.json';

// create instance of Page
let checkoutConfirmationPage: CheckoutConfirmationPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  console.log('Before Each:');
  checkoutConfirmationPage = new CheckoutConfirmationPage(page);
  // test.slow triples the default wait times
  test.slow();
});

// Free Trial for IDShield CA using Bank Draft
for (const tc of idshieldCanadaData.filter((tc) => tc.disabled == false)) {
  test(`${tc.testCaseName} - ${tc.province} @IdShield @Canada @checkoutRegression`, async ({ page }) => {
    console.log(`Test Case: ${tc.testCaseName} - ${tc.province}`);
    // Navigate to personal Info page through planalyzer
    // Note: TODO: Convert this method to one that uses the marketing site instead of planalyzer
    await checkoutConfirmationPage.navigateToPlanalyzerCsrCheckoutOktaLogin();
    await checkoutConfirmationPage.loginThroughOkta();
    await checkoutConfirmationPage.createOrderRedirectToCheckoutFromPlanalyzer('D2C', 'IDShield', tc.province, 'en-CA', '', 'F30', [tc.planName]);
    await checkoutConfirmationPage.login(basicUser.email, basicUser.password);
    await checkoutConfirmationPage.changeAddressCanada(tc.province);
    await checkoutConfirmationPage.captureOrderSummaryWithoutTier();
    // Personal Info Assertions
    await checkoutConfirmationPage.assertPlanNameAndCost(tc.planName, tc.planCost);
    await checkoutConfirmationPage.assertPlanNameDisplayedInSummary(tc.planName);
    await checkoutConfirmationPage.assertTermLabelAndTotal(tc.totalCost);
    await checkoutConfirmationPage.assertTotalDueToday(tc.totalDueToday);
    await checkoutConfirmationPage.clickSaveAndContinueButton();
    await checkoutConfirmationPage.captureOrderSummaryWithoutTier();
    // Payment Assertions
    await checkoutConfirmationPage.assertPlanNameDisplayedInSummary(tc.planName);
    await checkoutConfirmationPage.assertTermLabelAndTotal(tc.totalCost);
    await checkoutConfirmationPage.assertTotalDueToday(tc.totalDueToday);
    await checkoutConfirmationPage.navigateFromPaymentBankDraftPageToConfirmationPageCanada();
    // Confirmation Assertions
    await checkoutConfirmationPage.assertMembershipTileIsDisplayed(tc.planType);
    await checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(tc.planName);
    await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(tc.planName);
  });
}

// Free Trial for IDShield CA using Credit Card
// Need to create a separate data sheet for CC - currently erring with duplicate names
// for (const tc of idshieldCanadaData.filter((tc) => tc.run == true)) {
//   test(`${tc.testCaseName} - ${tc.province} @IdShield @Canada @checkoutRegression`, async ({ page }) => {
//     console.log(`Test Case: ${tc.testCaseName} - ${tc.province}`);
//     // Navigate to personal Info page through planalyzer
//     // Note: TODO: Convert this method to one that uses the marketing site instead of planalyzer
//     await checkoutConfirmationPage.navigateToPersonalInfoPageFromPlanalyzer('D2C', 'IDShield', tc.province, 'en-CA', '', 'F30', [tc.planName]);
//     await checkoutConfirmationPage.changeAddressCanada(tc.province);
//     await checkoutConfirmationPage.captureOrderSummaryWithoutTier();
//     // Personal Info Assertions
//     // await checkoutConfirmationPage.assertPlanNameAndCost(tc.planName, tc.planCost); -> want to use but not working as expected
//     await checkoutConfirmationPage.assertPlanNameDisplayedInSummary(tc.planName);
//     await checkoutConfirmationPage.assertMonthlyLabelAndTotal(tc.totalCost);
//     await checkoutConfirmationPage.assertTotalDueToday(tc.totalDueToday);
//     await checkoutConfirmationPage.clickSaveAndContinueButton();
//     await checkoutConfirmationPage.captureOrderSummaryWithoutTier();
//     // Payment Assertions
//     // await checkoutConfirmationPage.assertPlanNameAndCost(tc.planName, tc.planCost); -> want to use but not working as expected
//     await checkoutConfirmationPage.assertPlanNameDisplayedInSummary(tc.planName);
//     await checkoutConfirmationPage.assertMonthlyLabelAndTotal(tc.totalCost);
//     await checkoutConfirmationPage.assertTotalDueToday(tc.totalDueToday);
//     await checkoutConfirmationPage.navigateFromPaymentCreditCardPageToConfirmationPageCanada();
//     // Confirmation Assertions
//     await checkoutConfirmationPage.assertMembershipTileIsDisplayed(tc.planType);
//     await checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed();
//     await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(tc.planName);
//     await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(tc.planName);
//   });
// }

// Legal Shield
for (const tc of legalshieldUsData.filter((tc) => tc.run == true)) {
  test(`${tc.testCaseName} - ${tc.region} @LegalShield @MA @Massachusetts`, async ({ page }) => {
    console.log(`Test Case: ${tc.testCaseName} - ${tc.region}`);
    // Navigate to personal Info page through planalyzer
    // Note: TODO: Convert this method to one that uses the marketing site instead of planalyzer
    await checkoutConfirmationPage.navigateToPersonalInfoPageFromPlanalyzer('D2C', 'LegalShield', 'Massachusetts', 'en-US', '', '', [tc.planName]);
    await checkoutConfirmationPage.changeAddressUs(tc.region);
    await checkoutConfirmationPage.captureOrderSummaryWithoutTier();
    // Personal Info Assertions
    // await checkoutConfirmationPage.assertPlanNameAndCost(tc.planName, tc.planCost); -> want to use but not working as expected
    await checkoutConfirmationPage.assertPlanNameDisplayedInSummary(tc.planName);
    await checkoutConfirmationPage.assertTermLabelAndTotal(tc.totalCost);
    await checkoutConfirmationPage.clickSaveAndContinueButton();
    await checkoutConfirmationPage.captureOrderSummaryWithoutTier();
    // Payment Assertions
    // await checkoutConfirmationPage.assertPlanNameAndCost(tc.planName, tc.planCost); -> want to use but not working as expected
    await checkoutConfirmationPage.assertPlanNameDisplayedInSummary(tc.planName);
    await checkoutConfirmationPage.assertTermLabelAndTotal(tc.totalCost);
    await checkoutConfirmationPage.navigateFromPaymentBankDraftPageToConfirmationPage();
    // Confirmation Assertions
    await checkoutConfirmationPage.assertMembershipTileIsDisplayed(tc.planType);
    await checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(tc.planName);
    await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(tc.planName);
  });
}
