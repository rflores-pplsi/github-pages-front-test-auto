import { test } from '@playwright/test';
import RegionsUtils from '../../utils/regions.utils';
import { CheckoutConfirmationPage } from '../../page-objects/checkout/checkout-confirmation.page';

// create instance of Page
let checkoutConfirmationPage: CheckoutConfirmationPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  checkoutConfirmationPage = new CheckoutConfirmationPage(page);
  // test.slow triples the default wait times
  test.slow();
  // await checkoutConfirmationPage.navigateToCheckoutConfirmationPage('Alaska');
});

test('Verify FreeTrial purchase for IDS Individual on IDS Canada ', async ({ page }) => {
  console.log('Test Case: Verify FreeTrial purchase IDS Individual on IDS Canada - Personal Info Page');
  await checkoutConfirmationPage.navigateToPersonalInfoPageFromPlanalyzer('D2C', 'IDShield', 'Ontario', 'en-CA', '', 'F30', ['IDShield Individual']);
  await checkoutConfirmationPage.assertPlanNameDisplayedInSummary('IDShield Individual');
  await checkoutConfirmationPage.assertMonthlyLabelAndTotal('$14.95');
  await checkoutConfirmationPage.assertTotalDueToday('$0.00');
  const regionObj = RegionsUtils.caProvinces;
  const stateObj = 'Ontario';
  for (const obj of regionObj) {
    if (obj.name == stateObj)
      await checkoutConfirmationPage.changeAddress(obj.validAddress.street, obj.validAddress.city, obj.validAddress.postalCode);
  }
  await checkoutConfirmationPage.clickSaveAndContinueButton();
  // assert anything else you want on personal info page

  // await checkoutConfirmationPage.navigatePayment...
  // await checkoutConfirmationPage.assert...

  await checkoutConfirmationPage.assertMonthlyLabelAndTotal('$14.95');
  await checkoutConfirmationPage.assertTotalDueToday('$0.00');

  // await checkoutConfirmationPage.fillCreditCardFormForCa();

  await checkoutConfirmationPage.clickBankDraftBtn();
  await checkoutConfirmationPage.fillBankDraftFormForCa();

  // assert anything else you want on Payment Page page

  // await checkoutConfirmationPage.navigateConfirm...
  // await checkoutConfirmationPage.assert...
  await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary('IDShield Individual');
  await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName('IDShield Individual');

  // assert anything else you want on Confirmation page
});

test.only('Verify FreeTrial purchase for IDS Family on IDS Canada ', async ({ page }) => {
  console.log('Test Case: Verify FreeTrial purchase for IDS Family on IDS Canada - Personal Info Page');
  // Navigate to Personal Info Page
  await checkoutConfirmationPage.navigateToPersonalInfoPageFromPlanalyzer('D2C', 'IDShield', 'Ontario', 'en-CA', '', 'F30', ['IDShield Family']);
  // Personal Info Page Assertion
  await checkoutConfirmationPage.assertPlanNameDisplayedInSummary('IDShield Family');
  await checkoutConfirmationPage.assertMonthlyLabelAndTotal('$29.95');
  await checkoutConfirmationPage.assertTotalDueToday('$0.00');
  // Navigate to Payment Page
  const regionObj = RegionsUtils.caProvinces;
  const stateObj = 'Ontario';
  for (const obj of regionObj) {
    if (obj.name == stateObj)
      await checkoutConfirmationPage.changeAddress(obj.validAddress.street, obj.validAddress.city, obj.validAddress.postalCode);
  }
  await checkoutConfirmationPage.clickSaveAndContinueButton();
  // Payment Page Assertions
  await checkoutConfirmationPage.assertMonthlyLabelAndTotal('$29.95');
  await checkoutConfirmationPage.assertTotalDueToday('$0.00');
  // Navigate to Confirmation Page using CC
  await checkoutConfirmationPage.fillCreditCardFormForCa();
  // Confirmation Page assertions
  await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary('IDShield Family');
  await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName('IDShield Family');
});

test('Self-Pay (IDShield Individual) using Planalyzer and Bank Draft', async ({ page }) => {
  test.slow();
  await checkoutConfirmationPage.navigateToCheckoutConfirmationPageUsingPlanalyzer('Virginia', 'BD');
  await checkoutConfirmationPage.assertWelcomeToLegalshiledFamilyPage();
  await checkoutConfirmationPage.assertOrderSummaryPlanLabelConfirmationPage('Legal Plan');
  await checkoutConfirmationPage.assertOrderSummaryPlanPriceConfirmationPage();
});
test('Self-Pay (IDShield Individual) using Planalyzer and Credit Card', async ({ page }) => {
  test.slow();
  await checkoutConfirmationPage.navigateToCheckoutConfirmationPageUsingPlanalyzer('Virginia', 'CC');
  await checkoutConfirmationPage.assertWelcomeToLegalshiledFamilyPage();
  await checkoutConfirmationPage.assertOrderSummaryPlanLabelConfirmationPage('Legal Plan');
  await checkoutConfirmationPage.assertOrderSummaryPlanPriceConfirmationPage();
});
