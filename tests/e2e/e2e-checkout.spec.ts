import { test } from '@playwright/test';
import { CheckoutConfirmationPage } from '../../page-objects/checkout/checkout-confirmation.page';
import RegionsUtils from '../../utils/regions.utils';
import { basicUser } from '../../utils/user.utils';
import selfPayData from '../e2e/data/e2e-checkout-group-self-pay.json';
import payrollDeductData from '../e2e/data/e2e-checkout-group-payroll-deduct.json';
import fringeData from '../e2e/data/e2e-checkout-group-fringe.json';
import partialFringeData from '../e2e/data/e2e-checkout-group-partial-fringe.json';
import idshieldCanadaData from '../e2e/data/e2e-checkout-idshield-canada.json';

// create instance of Page
let checkoutConfirmationPage: CheckoutConfirmationPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  checkoutConfirmationPage = new CheckoutConfirmationPage(page);
  // test.slow triples the default wait times
  test.slow();
});

// Free Trial fro IDShield CA using bank draft - for all Provinces
for (const tc of idshieldCanadaData.filter((tc) => tc.run == true)) {
  for (const province of RegionsUtils.caProvinces.filter((province) => province.abbrv == 'ON' && province.priority == true)) {
    // test.only(`${tc.testCaseName} - ${province.name} @IdShield @Canada`, async ({ page }) => {
    test(`${tc.testCaseName} - ${province.name} @IdShield @Canada`, async ({ page }) => {
      console.log(`Test Case: ${tc.testCaseName} - ${province.name}`);
      // Navigate to personal Info page through planalyzer
      await checkoutConfirmationPage.navigateToPersonalInfoPageFromPlanalyzer('D2C', 'IDShield', province.name, 'en-CA', '', 'F30', [tc.planName]);
      await checkoutConfirmationPage.changeAddress(province.validAddress.street, province.validAddress.city, province.validAddress.postalCode);
      // TODO: make captureOrderSummary generic, and create a groupconfig specific captureOrderSummary method
      await checkoutConfirmationPage.captureOrderSummary('Not Applicable');
      // Personal Info Assertions
      // await checkoutConfirmationPage.assertPlanNameTierNameAndCost(tc.planName, tc.tierName, tc.planCost);
      // await checkoutConfirmationPage.assertPayPeriodTotal(tc.totalCost);
      // TODO: make captureOrderSummary generic, and create a groupconfig specific captureOrderSummary method
      await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPageNoBusiness('Not Applicable');
      await page.pause();
      // // Payment Assertions
      // await checkoutConfirmationPage.assertPlanNameTierNameAndCost(tc.planName, tc.tierName, tc.planCost);
      // await checkoutConfirmationPage.assertPayPeriodTotal(tc.totalCost);
      // await checkoutConfirmationPage.navigateFromPaymentBankDraftPageToConfirmationPage();
      // // Confirmation Assertions
      // await checkoutConfirmationPage.assertMembershipTileIsDisplayed(tc.planType);
      // await checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed();
      // await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(tc.planName);
      // await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(tc.planName);
    });
  }
}

// Self-Pay Group Configurations - Single Plan
for (const tc of selfPayData.filter((tc) => tc.run == true)) {
  for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
    test(`${tc.testCaseName} - ${state.name} @selfPay @groups`, async ({ page }) => {
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
      await checkoutConfirmationPage.assertPlanNameTierNameAndCost(tc.planName, tc.tierName, tc.planCost);
      await checkoutConfirmationPage.assertPayPeriodTotal(tc.totalCost);
      await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(tc.groupPayConfig, tc.planName);
      // Payment Assertions
      await checkoutConfirmationPage.assertPlanNameTierNameAndCost(tc.planName, tc.tierName, tc.planCost);
      await checkoutConfirmationPage.assertPayPeriodTotal(tc.totalCost);
      await checkoutConfirmationPage.navigateFromPaymentBankDraftPageToConfirmationPage();
      // Confirmation Assertions
      await checkoutConfirmationPage.assertMembershipTileIsDisplayed(tc.planType);
      await checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed();
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
      await checkoutConfirmationPage.assertPlanNameTierNameAndCost(tc.planName, tc.tierName, tc.planCost);
      await checkoutConfirmationPage.assertPayPeriodTotal(tc.totalCost);
      await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(tc.groupPayConfig, tc.planCost);
      // Payment Assertions
      await checkoutConfirmationPage.assertPlanNameTierNameAndCost(tc.planName, tc.tierName, tc.planCost);
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
for (const tc of fringeData.filter((tc) => tc.run == true)) {
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
      await checkoutConfirmationPage.assertPlanNameTierNameAndCost(tc.planName, tc.tierName, tc.planCost);
      await checkoutConfirmationPage.assertPayPeriodTotal(tc.totalCost);
      await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(tc.groupPayConfig, tc.planCost);
      // Payment Assertions
      await checkoutConfirmationPage.assertPlanNameTierNameAndCost(tc.planName, tc.tierName, tc.planCost);
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
