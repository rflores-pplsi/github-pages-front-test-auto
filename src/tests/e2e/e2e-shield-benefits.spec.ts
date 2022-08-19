import { test } from '@playwright/test';
import { CheckoutConfirmationPage } from '../../page-objects/checkout/checkout-confirmation.page';
import RegionsUtils from '../../utils/regions.utils';
import { basicUser } from '../../utils/user.utils';
import selfPayData from './data/shield-benefits/e2e-shield-benefits-us-self-pay.json';
import payrollDeductData from './data/e2e-checkout-group-payroll-deduct.json';
import fringeData from './data/e2e-checkout-group-fringe.json';
import partialFringeData from './data/e2e-checkout-group-partial-fringe.json';

// create instance of Page
let checkoutConfirmationPage: CheckoutConfirmationPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  console.log('Before Each:');
  checkoutConfirmationPage = new CheckoutConfirmationPage(page);
  // test.slow triples the default wait times
  test.slow();
});

// Self-Pay Configurations - Single Plan
for (const tc of selfPayData.filter((tc) => tc.disabled == false)) {
  for (const state of tc.regions) {
    test.only(`${tc.testCaseName} - ${state} @selfPay @shieldBenefits @checkoutRegression`, async ({ page }) => {
      console.log(`Test Case: ${tc.testCaseName} - ${state}`);
      // Crete Cart from Pricing Page and Continue to Personal Info Page
      await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage(tc.groupNumber);
      await checkoutConfirmationPage.selectStateOrProvince(state);
      await checkoutConfirmationPage.selectPaymentFrequency(tc.payFrequency);
      await checkoutConfirmationPage.clickEnrollNowButtonFromShieldBenefitsPricingPage(tc.planName, tc.tierName);
      await checkoutConfirmationPage.login(basicUser.email, basicUser.password);
      await checkoutConfirmationPage.captureOrderSummaryWithoutTier();
      // Personal Info Page Assertions
      await checkoutConfirmationPage.assertPlanNameAndCost(tc.orderSummaryPlanName, tc.planCost);
      await checkoutConfirmationPage.assertPayPeriodTotal(tc.totalCost);
      // Complete Necessary Forms and Continue to Payment Page
      await checkoutConfirmationPage.changeAddressUs(state);
      await checkoutConfirmationPage.completeBusinessInfoForm();
      await checkoutConfirmationPage.clickSaveAndContinueButton();
      // Payment Page Assertions
      await checkoutConfirmationPage.assertPlanNameAndCost(tc.orderSummaryPlanName, tc.planCost);
      await checkoutConfirmationPage.assertPayPeriodTotal(tc.totalCost);
      // Fill out Payment Method and Continue to Confirmation Page
      await checkoutConfirmationPage.clickBankDraftBtn();
      // await checkoutConfirmationPage.fillBankDraftFormAndSubmit();
      // // Confirmation Assertions
      // await checkoutConfirmationPage.assertMembershipTileIsDisplayed(tc.planType);
      // await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(tc.planName);
      // await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(tc.planName);
    });
  }
}

// Fringe Group Configurations - Single Plan
for (const tc of fringeData.filter((tc) => tc.disabled == false)) {
  for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
    test(`${tc.testCaseName} - ${state.name} @fringe @groups @checkoutRegression`, async ({ page }) => {
      console.log(`Test Case: ${tc.testCaseName} - ${state.name}`);
      // Crete Cart from Pricing Page and Continue to Personal Info Page
      await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage(tc.groupNumber);
      await checkoutConfirmationPage.selectPlanFromShieldBenefitsPricingPage(state.name, tc.payFrequency, tc.planName, tc.tierName);
      await checkoutConfirmationPage.login(basicUser.email, basicUser.password);
      await checkoutConfirmationPage.captureOrderSummaryWithoutTier();
      // Personal Info Page Assertions
      await checkoutConfirmationPage.assertPlanNameAndCost(tc.orderSummaryPlanName, tc.planCost);
      await checkoutConfirmationPage.assertPayPeriodTotal(tc.totalCost);
      // Complete Necessary Forms and Continue to Payment Page
      await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
      await checkoutConfirmationPage.completeBusinessInfoForm();
      await checkoutConfirmationPage.clickSaveAndContinueButton();
      // Payment Page Assertions
      await checkoutConfirmationPage.assertPlanNameAndCost(tc.orderSummaryPlanName, tc.planCost);
      await checkoutConfirmationPage.assertPayPeriodTotal(tc.totalCost);
      // Fill out Payment Method and Continue to Confirmation Page
      await checkoutConfirmationPage.clickBankDraftBtn();
      await checkoutConfirmationPage.fillBankDraftFormAndSubmit();
      // Confirmation Assertions
      await checkoutConfirmationPage.assertMembershipTileIsDisplayed(tc.planType);
      await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(tc.planName);
      await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(tc.planName);
    });
  }
}

// Payroll Deduct Group Configurations
for (const tc of payrollDeductData.filter((tc) => tc.run == true)) {
  for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
    test(`${tc.testCaseName} ${tc.groupPayConfig} (${tc.planName}) - ${state.name} @payrollDeduct @groups`, async ({ page }) => {
      console.log(`Test Case: ${tc.testCaseName} - ${state.name}`);
      await checkoutConfirmationPage.navigateToPersonalInfoPageSinglePlan(
        basicUser.email,
        basicUser.password,
        tc.groupNumber,
        tc.groupPayConfig,
        state.name,
        tc.payFrequency,
        tc.tierName,
        tc.planName,
        state.validAddress.street,
        state.validAddress.city,
        state.validAddress.postalCode
      );
      // Personal Info Assertions
      await checkoutConfirmationPage.assertPlanNameFriendlyTierNameAndCost(tc.planName, tc.tierName, tc.planCost);
      await checkoutConfirmationPage.assertPayPeriodTotal(tc.totalCost);
      await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(tc.groupPayConfig, tc.planCost);
      // Payment Assertions
      await checkoutConfirmationPage.assertPlanNameFriendlyTierNameAndCost(tc.planName, tc.tierName, tc.planCost);
      await checkoutConfirmationPage.assertPayPeriodTotal(tc.totalCost);
      await checkoutConfirmationPage.navigateFromPaymentAgreementPageToConfirmationPage();
      // Confirmation Assertions
      await checkoutConfirmationPage.assertMembershipTileIsDisplayed(tc.planType);
      await checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed();
      await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(tc.planName);
      await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(tc.planName);
    });
  }
}

// Fringe Group Configurations
for (const tc of fringeData.filter((tc) => tc.disabled == false)) {
  for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
    test(`${tc.testCaseName} ${tc.groupPayConfig} (${tc.planName}) - ${state.name} @Fringe @groups`, async ({ page }) => {
      console.log(`Test Case: ${tc.testCaseName} - ${state.name}`);
      await checkoutConfirmationPage.navigateToPersonalInfoPageSinglePlanNoPaymentFrequency(
        basicUser.email,
        basicUser.password,
        tc.groupNumber,
        tc.groupPayConfig,
        state.name,
        tc.planName,
        tc.tierName,
        state.validAddress.street,
        state.validAddress.city,
        state.validAddress.postalCode
      );
      // Personal Info Assertions
      // await page.pause();
      await checkoutConfirmationPage.assertPlanNameAndTierName(tc.planName, tc.tierName);
      await checkoutConfirmationPage.assertPlanCostsNotDisplayed(tc.planName);
      await checkoutConfirmationPage.assertPayPeriodTotalIsNotDisplayed();
      await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(tc.groupPayConfig, tc.planName);
      // Payment Assertions
      await checkoutConfirmationPage.assertDisclaimerLanguage(tc.groupPayConfig, tc.totalCost);
      await checkoutConfirmationPage.assertTermsOfServiceLanguageAndLink();
      await checkoutConfirmationPage.assertPlanNameAndTierName(tc.planName, tc.tierName);
      await checkoutConfirmationPage.assertPayPeriodTotalIsNotDisplayed();
      await checkoutConfirmationPage.navigateFromPaymentAgreementPageToConfirmationPage();
      // Confirmation Assertions
      await checkoutConfirmationPage.assertMembershipTileIsDisplayed(tc.planType);
      await checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed();
      await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(tc.planName);
      await checkoutConfirmationPage.assertPlanCostIsHidden(tc.planName);
    });
  }
}

// Partial-Fringe Group Configurations
for (const tc of partialFringeData.filter((tc) => tc.run == true)) {
  for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
    test(`${tc.testCaseName} ${tc.groupPayConfig} (${tc.planName}) - ${state.name} @partialFringe @groups`, async ({ page }) => {
      console.log(`Test Case: ${tc.testCaseName} - ${state.name}`);
      await checkoutConfirmationPage.navigateToPersonalInfoPageSinglePlan(
        basicUser.email,
        basicUser.password,
        tc.groupNumber,
        tc.groupPayConfig,
        state.name,
        tc.payFrequency,
        tc.planName,
        tc.tierName,
        state.validAddress.street,
        state.validAddress.city,
        state.validAddress.postalCode
      );
      // Personal Info Assertions
      await checkoutConfirmationPage.assertPlanNameFriendlyTierNameAndCost(tc.planName, tc.tierName, tc.planCost);
      await checkoutConfirmationPage.assertPayPeriodTotal(tc.totalCost);
      await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(tc.groupPayConfig, tc.planCost);
      // Payment Assertions
      await checkoutConfirmationPage.assertPlanNameFriendlyTierNameAndCost(tc.planName, tc.tierName, tc.planCost);
      await checkoutConfirmationPage.assertPayPeriodTotal(tc.totalCost);
      await checkoutConfirmationPage.navigateFromPaymentAgreementPageToConfirmationPage();
      // Confirmation Assertions
      await checkoutConfirmationPage.assertMembershipTileIsDisplayed(tc.planType);
      await checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed();
      await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(tc.planName);
      await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(tc.planName);
    });
  }
}
