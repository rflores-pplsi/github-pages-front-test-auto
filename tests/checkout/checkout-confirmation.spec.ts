import { test } from '@playwright/test';
import { CheckoutConfirmationPage } from '../../page-objects/checkout/checkout-confirmation.page';
import { LoginForgotEmailUsernamePage } from '../../page-objects/login/login-forgot-email-username.page';
import { LoginPage } from '../../page-objects/login/login.page';
import RegionsUtils from '../../utils/regions.utils';
import { basicUser } from '../../utils/user.utils';

// create instance of Page
let checkoutConfirmationPage: CheckoutConfirmationPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  checkoutConfirmationPage = new CheckoutConfirmationPage(page);
  // test.slow triples the default wait times
  test.slow();
  // await checkoutConfirmationPage.navigateToCheckoutConfirmationPage('Alaska');
});

// test.skip('Welcome to Legal Shield Family Header is displayed', async ({ page }) => {
//   await checkoutConfirmationPage.assertWelcomeToLegalshiledFamilyPage();
//   await checkoutConfirmationPage.assertOrderSummaryPlanLabelConfirmationPage('IDShield Individual');
//   await checkoutConfirmationPage.assertOrderSummaryPlanPriceConfirmationPage();
// });

test.describe('', () => {});
for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  const groupPayConfig = 'Self-Pay';
  const groupNumber = 'nnlegaltest7';
  const planName = 'IDShield Individual';
  const payFrequency = 'Monthly';
  const planCost = '$12.95';
  const totalCost = '$12.95';
  test(`${groupPayConfig} (${planName}) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: ${groupPayConfig} (${planName}) - ${state.name}`);
    await checkoutConfirmationPage.navigateToPersonalInfoPageSinglePlan(
      basicUser.email,
      basicUser.password,
      groupNumber,
      state.name,
      payFrequency,
      planName,
      state.validAddress.street,
      state.validAddress.city,
      state.validAddress.postalCode
    );
    // Personal Info Assertions
    await checkoutConfirmationPage.assertPlanNameAndCost(planName, planCost);
    await checkoutConfirmationPage.assertPayPeriodTotal(totalCost);
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage();
    // Payment Assertions
    await checkoutConfirmationPage.assertPlanNameAndCost(planName, planCost);
    await checkoutConfirmationPage.assertPayPeriodTotal(totalCost);
    await checkoutConfirmationPage.navigateFromPaymentBankDraftPageToConfirmationPage();
    // Confirmation Assertions
    await checkoutConfirmationPage.assertIdShieldMembershipIsDisplayed();
    await checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(planName);
    await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(planName);
  });
}

// for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
//   const groupPayConfig = 'Self-Pay';
//   const planName = 'Legal Plan Family';
//   const groupNumber = 'nnlegaltest7';
//   const payFrequency = 'Monthly';
//   const planCost = '$23.95';
//   const totalCost = '$23.95';
//   test(`${groupPayConfig} (${planName}) - ${state.name}`, async ({ page }) => {
//     console.log(`Test Case: ${groupPayConfig} (${planName}) - ${state.name}`);
//     await checkoutConfirmationPage.navigateToPersonalInfoPageSinglePlan(
//       basicUser.email,
//       basicUser.password,
//       groupNumber,
//       state.name,
//       payFrequency,
//       planName,
//       state.validAddress.street,
//       state.validAddress.city,
//       state.validAddress.postalCode
//     );
//     // Personal Info Assertions
//     await checkoutConfirmationPage.assertPlanNameAndCost(planName, planCost);
//     await checkoutConfirmationPage.assertPayPeriodTotal(totalCost);
//     await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage();
//     // Payment Assertions
//     await checkoutConfirmationPage.assertPlanNameAndCost(planName, planCost);
//     await checkoutConfirmationPage.assertPayPeriodTotal(totalCost);
//     await checkoutConfirmationPage.navigateFromPaymentBankDraftPageToConfirmationPage();
//     // Confirmation Assertions
//     await checkoutConfirmationPage.assertLegalShieldMembershipIsDisplayed();
//     await checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed();
//     await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(planName);
//     await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(planName);
//   });
// }

// for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
//   const groupPayConfig = 'Self-Pay';
//   const groupNumber = 'nnlegaltest7';
//   const planName = 'IDShield Family';
//   const payFrequency = 'Monthly';
//   const planCost = '$22.95';
//   const totalCost = '$22.95';
//   test(`${groupPayConfig} (${planName}) - ${state.name}`, async ({ page }) => {
//     console.log(`Test Case: ${groupPayConfig} (${planName}) - ${state.name}`);
//     await checkoutConfirmationPage.navigateToPersonalInfoPageSinglePlan(
//       basicUser.email,
//       basicUser.password,
//       groupNumber,
//       state.name,
//       payFrequency,
//       planName,
//       state.validAddress.street,
//       state.validAddress.city,
//       state.validAddress.postalCode
//     );
//     // Personal Info Assertions
//     await checkoutConfirmationPage.assertPlanNameAndCost(planName, planCost);
//     await checkoutConfirmationPage.assertPayPeriodTotal(totalCost);
//     await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage();
//     // Payment Assertions
//     await checkoutConfirmationPage.assertPlanNameAndCost(planName, planCost);
//     await checkoutConfirmationPage.assertPayPeriodTotal(totalCost);
//     await checkoutConfirmationPage.navigateFromPaymentBankDraftPageToConfirmationPage();
//     // Confirmation Assertions
//     await checkoutConfirmationPage.assertIdShieldMembershipIsDisplayed();
//     await checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed();
//     await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(planName);
//     await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(planName);
//   });
// }

// for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
//   const groupPayConfig = 'Self-Pay';
//   const groupNumber = 'nnlegaltest7';
//   const planName = 'Legal Plan Family';
//   const plan2Name = 'IDShield Family';
//   const planCost = '$23.95';
//   const plan2Cost = '$19.95';
//   const totalCost = '$43.90';
//   const payFrequency = 'Monthly';
//   test.only(`${groupPayConfig} (${planName}/${plan2Name}) - ${state.name}`, async ({ page }) => {
//     console.log(`Test Case: ${groupPayConfig} (${planName}/${plan2Name}) - ${state.name}`);
//     await checkoutConfirmationPage.navigateToPersonalInfoPageComboPlan(
//       basicUser.email,
//       basicUser.password,
//       groupNumber,
//       state.name,
//       payFrequency,
//       planName,
//       plan2Name,
//       state.validAddress.street,
//       state.validAddress.city,
//       state.validAddress.postalCode
//     );
//     // Personal Info Assertions
//     await checkoutConfirmationPage.assertPlanNameAndCost(planName, planCost);
//     await checkoutConfirmationPage.assertPlanNameAndCost(plan2Name, plan2Cost);
//     await checkoutConfirmationPage.assertPayPeriodTotal(totalCost);
//     await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage();
//     // Payment Assertions
//     await checkoutConfirmationPage.assertPlanNameAndCost(planName, planCost);
//     await checkoutConfirmationPage.assertPlanNameAndCost(plan2Name, plan2Cost);
//     await checkoutConfirmationPage.assertPayPeriodTotal(totalCost);
//     await checkoutConfirmationPage.navigateFromPaymentBankDraftPageToConfirmationPage();
//     // Confirmation Assertions
//     await checkoutConfirmationPage.assertIdShieldMembershipIsDisplayed();
//     await checkoutConfirmationPage.assertLegalShieldMembershipIsDisplayed();
//     await checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed();
//     await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(planName);
//     await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(planName);
//     await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(plan2Name);
//     await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(plan2Name);

//     // await checkoutConfirmationPage.assertNoPlanCostsAreDisplayedInConfirmationPageOrderSummary();
//   });
// }

// for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
//   const groupPayConfig = 'Self-Pay';
//   const groupNumber = 'nnlegaltest7';
//   const payFrequency = 'Monthly';
//   const planName = 'Legal Plan Family';
//   const plan2Name = 'IDShield Individual';
//   const planCost = '$23.95';
//   const plan2Cost = '$12.95';
//   const totalCost = '$36.90';
//   test(`${groupPayConfig} (${planName}/${plan2Name}) - ${state.name}`, async ({ page }) => {
//     console.log(`Test Case: ${groupPayConfig} (${planName}/${plan2Name}) - ${state.name}`);
//     await checkoutConfirmationPage.navigateToPersonalInfoPageComboPlan(
//       basicUser.email,
//       basicUser.password,
//       groupNumber,
//       state.name,
//       payFrequency,
//       planName,
//       plan2Name,
//       state.validAddress.street,
//       state.validAddress.city,
//       state.validAddress.postalCode
//     );
//     // Personal Info Assertions
//     await checkoutConfirmationPage.assertPlanNameAndCost(planName, planCost);
//     await checkoutConfirmationPage.assertPlanNameAndCost(plan2Name, plan2Cost);
//     await checkoutConfirmationPage.assertPayPeriodTotal(totalCost);
//     await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage();
//     // Payment Assertions
//     await checkoutConfirmationPage.assertPlanNameAndCost(planName, planCost);
//     await checkoutConfirmationPage.assertPlanNameAndCost(plan2Name, plan2Cost);
//     await checkoutConfirmationPage.assertPayPeriodTotal(totalCost);
//     await checkoutConfirmationPage.navigateFromPaymentBankDraftPageToConfirmationPage();
//     // Confirmation Assertions
//     await checkoutConfirmationPage.assertLegalShieldMembershipIsDisplayed();
//     await checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed();
//     await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(planName);
//     await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(planName);
//     await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(plan2Name);
//     await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(plan2Name);
//   });
// }

// for (const state of RegionsUtils.usStates.filter((state) => state.abbrv != 'MA' && state.priority == true)) {
//   test(`Self-Pay (Legal Plan Family) - ${state.name}`, async ({ page }) => {
//     console.log(`Test Case: Self-Pay (Legal Plan Family) - ${state.name}`);
//     await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('nnlegaltest7');
//     await checkoutConfirmationPage.selectPlanFromShieldBenefitsPricingPage(state.name, 'Monthly', 'Legal Plan Family');
//     await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
//     await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
//     await checkoutConfirmationPage.clickSaveAndContinueButton();
//     await checkoutConfirmationPage.clickBankDraftBtn();
//     await checkoutConfirmationPage.fillBankDraftForm();
//     await checkoutConfirmationPage.assertMemberNumberIsDisplayed();
//     await checkoutConfirmationPage.assertPlanNameDisplayed('Legal Plan Family');
//     await checkoutConfirmationPage.assertPlanCostIsDisplayed('Legal Plan Family');
//   });
// }

// for (const state of RegionsUtils.usStates.filter((state) => state.abbrv != 'MA' && state.priority == true)) {
//   test(`Self-pay group (IDShield Family) - ${state.name}`, async ({ page }) => {
//     console.log(`Test Case: Self-Pay (IDShield Family) - ${state.name}`);
//     await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('nnlegaltest7');
//     await checkoutConfirmationPage.selectPlanFromShieldBenefitsPricingPage(state.name, 'Monthly', 'IDShield Family');
//     await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
//     await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
//     await checkoutConfirmationPage.clickSaveAndContinueButton();
//     await checkoutConfirmationPage.clickBankDraftBtn();
//     await checkoutConfirmationPage.fillBankDraftForm();
//     await checkoutConfirmationPage.assertMemberNumberIsDisplayed();
//     await checkoutConfirmationPage.assertPlanNameDisplayed('IDShield Family');
//     await checkoutConfirmationPage.assertPlanCostIsDisplayed('IDShield Family');
//   });
// }

// for (const state of RegionsUtils.usStates.filter((state) => state.abbrv != 'MA' && state.priority == true)) {
//   test(`Self-Pay Group (Legal Plan Family/IDShield Family Combo) - ${state.name}`, async ({ page }) => {
//     console.log(`Test Case: Self-Pay Group (Legal Plan Family/IDShield Family Combo) - ${state.name}`);
//     await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('nnlegaltest7');
//     await checkoutConfirmationPage.selectCombinationPlanFromShieldBenefitsPricingPage(state.name, 'Monthly', 'Legal Plan Family', 'IDShield Family');
//     await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
//     await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
//     await checkoutConfirmationPage.clickSaveAndContinueButton();
//     await checkoutConfirmationPage.clickBankDraftBtn();
//     await checkoutConfirmationPage.fillBankDraftForm();
//     await checkoutConfirmationPage.assertMemberNumberIsDisplayed();
//     await checkoutConfirmationPage.assertPlanNameDisplayed('Legal Plan Family');
//     await checkoutConfirmationPage.assertPlanCostIsDisplayed('Legal Plan Family');
//     await checkoutConfirmationPage.assertPlanNameDisplayed('IDShield Family');
//     await checkoutConfirmationPage.assertPlanCostIsDisplayed('IDShield Family');
//   });
// }

// for (const state of RegionsUtils.usStates.filter((state) => state.abbrv != 'MA' && state.priority == true)) {
//   test(`Self-Pay Group (Legal Plan Family/IDShield Individual Combo) - ${state.name}`, async ({ page }) => {
//     console.log(`Test Case: Self-Pay Group (Legal Plan Family/IDShield Individual Combo) - ${state.name}`);
//     await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('nnlegaltest7');
//     await checkoutConfirmationPage.selectCombinationPlanFromShieldBenefitsPricingPage(
//       state.name,
//       'Monthly',
//       'Legal Plan Family',
//       'IDShield Individual'
//     );
//     await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
//     await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
//     await checkoutConfirmationPage.clickSaveAndContinueButton();
//     await checkoutConfirmationPage.clickBankDraftBtn();
//     await checkoutConfirmationPage.fillBankDraftForm();
//     await checkoutConfirmationPage.assertMemberNumberIsDisplayed();
//     await checkoutConfirmationPage.assertPlanNameDisplayed('Legal Plan Family');
//     await checkoutConfirmationPage.assertPlanCostIsDisplayed('Legal Plan Family');
//     await checkoutConfirmationPage.assertPlanNameDisplayed('IDShield Individual');
//     await checkoutConfirmationPage.assertPlanCostIsDisplayed('IDShield Individual');
//   });
// }

// for (const state of RegionsUtils.usStates.filter((state) => state.abbrv != 'MA' && state.priority == true)) {
//   test(`Self-Pay ID Only (IDShield Individual) - ${state.name}`, async ({ page }) => {
//     console.log(`Test Case: Self-Pay ID Only (IDShield Individual) - ${state.name}`);
//     await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('nnidstest3');
//     await checkoutConfirmationPage.selectPlanFromShieldBenefitsPricingPage(state.name, 'Monthly', 'IDShield Individual');
//     await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
//     await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
//     await checkoutConfirmationPage.clickSaveAndContinueButton();
//     await checkoutConfirmationPage.clickBankDraftBtn();
//     await checkoutConfirmationPage.fillBankDraftForm();
//     await checkoutConfirmationPage.assertMemberNumberIsDisplayed();
//     await checkoutConfirmationPage.assertPlanNameDisplayed('IDShield Individual');
//     await checkoutConfirmationPage.assertPlanCostIsDisplayed('IDShield Individual');
//   });
// }

// for (const state of RegionsUtils.usStates.filter((state) => state.abbrv != 'MA' && state.priority == true)) {
//   test(`Self-Pay ID Only (IDShield Family) - ${state.name}`, async ({ page }) => {
//     console.log(`Test Case: Self-Pay ID Only (IDShield Family) - ${state.name}`);
//     await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('nnidstest3');
//     await checkoutConfirmationPage.selectPlanFromShieldBenefitsPricingPage(state.name, 'Monthly', 'IDShield Family');
//     await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
//     await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
//     await checkoutConfirmationPage.clickSaveAndContinueButton();
//     await checkoutConfirmationPage.clickBankDraftBtn();
//     await checkoutConfirmationPage.fillBankDraftForm();
//     await checkoutConfirmationPage.assertMemberNumberIsDisplayed();
//     await checkoutConfirmationPage.assertPlanNameDisplayed('IDShield Family');
//     await checkoutConfirmationPage.assertPlanCostIsDisplayed('IDShield Family');
//   });
// }

// for (const state of RegionsUtils.usStates.filter((state) => state.abbrv != 'MA' && state.priority == true)) {
//   test(`Payroll Deduct (IDShield Individual) - ${state.name}`, async ({ page }) => {
//     console.log(`Test Case: Payroll Deduct (IDShield Individual) - ${state.name}`);
//     await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('test11');
//     await checkoutConfirmationPage.selectPlanFromShieldBenefitsPricingPage(state.name, 'Monthly', 'IDShield Individual');
//     await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
//     await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
//     await checkoutConfirmationPage.clickSaveAndContinueButton();
//     await checkoutConfirmationPage.clickAgreementCheckbox();
//     await checkoutConfirmationPage.clickCompleteEnrollmentButton();
//     await checkoutConfirmationPage.assertMemberNumberIsDisplayed();
//     await checkoutConfirmationPage.assertPlanNameDisplayed('IDShield Individual');
//     await checkoutConfirmationPage.assertPlanCostIsDisplayed('IDShield Individual');
//   });
// }

// for (const state of RegionsUtils.usStates.filter((state) => state.abbrv != 'MA' && state.priority == true)) {
//   test(`Payroll Deduct (Legal Plan Family) - ${state.name}`, async ({ page }) => {
//     console.log(`Test Case: Payroll Deduct (Legal Plan Family) - ${state.name}`);
//     await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('test11');
//     await checkoutConfirmationPage.selectPlanFromShieldBenefitsPricingPage(state.name, 'Monthly', 'Legal Plan Family');
//     await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
//     await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
//     await checkoutConfirmationPage.clickSaveAndContinueButton();
//     await checkoutConfirmationPage.clickAgreementCheckbox();
//     await checkoutConfirmationPage.clickCompleteEnrollmentButton();
//     await checkoutConfirmationPage.assertMemberNumberIsDisplayed();
//     await checkoutConfirmationPage.assertPlanNameDisplayed('Legal Plan Family');
//     await checkoutConfirmationPage.assertPlanCostIsDisplayed('Legal Plan Family');
//   });
// }

// for (const state of RegionsUtils.usStates.filter((state) => state.abbrv != 'MA' && state.priority == true)) {
//   test(`Payroll Deduct (IDShield Family) - ${state.name}`, async ({ page }) => {
//     console.log(`Test Case: Payroll Deduct (IDShield Family) - ${state.name}`);
//     await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('test11');
//     await checkoutConfirmationPage.selectPlanFromShieldBenefitsPricingPage(state.name, 'Monthly', 'IDShield Family');
//     await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
//     await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
//     await checkoutConfirmationPage.clickSaveAndContinueButton();
//     await checkoutConfirmationPage.clickAgreementCheckbox();
//     await checkoutConfirmationPage.clickCompleteEnrollmentButton();
//     await checkoutConfirmationPage.assertMemberNumberIsDisplayed();
//     await checkoutConfirmationPage.assertPlanNameDisplayed('IDShield Family');
//     await checkoutConfirmationPage.assertPlanCostIsDisplayed('IDShield Family');
//   });
// }

// for (const state of RegionsUtils.usStates.filter((state) => state.abbrv != 'MA' && state.priority == true)) {
//   test(`Payroll Deduct (Legal Plan Family/IDShield Family Combo) - ${state.name}`, async ({ page }) => {
//     console.log(`Test Case: Payroll Deduct (Legal Plan Family/IDShield Family Combo) - ${state.name}`);
//     await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('test11');
//     await checkoutConfirmationPage.selectCombinationPlanFromShieldBenefitsPricingPage(state.name, 'Monthly', 'Legal Plan Family', 'IDShield Family');
//     await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
//     await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
//     await checkoutConfirmationPage.clickSaveAndContinueButton();
//     await checkoutConfirmationPage.clickAgreementCheckbox();
//     await checkoutConfirmationPage.clickCompleteEnrollmentButton();
//     await checkoutConfirmationPage.assertMemberNumberIsDisplayed();
//     await checkoutConfirmationPage.assertPlanNameDisplayed('Legal Plan Family');
//     await checkoutConfirmationPage.assertPlanCostIsDisplayed('Legal Plan Family');
//     await checkoutConfirmationPage.assertPlanNameDisplayed('IDShield Family');
//     await checkoutConfirmationPage.assertPlanCostIsDisplayed('IDShield Family');
//   });
// }

// for (const state of RegionsUtils.usStates.filter((state) => state.abbrv != 'MA' && state.priority == true)) {
//   test(`Payroll Deduct (Legal Plan Family/IDShield Individual Combo) - ${state.name}`, async ({ page }) => {
//     console.log(`Test Case: Payroll Deduct (Legal Plan Family/IDShield Individual Combo) - ${state.name}`);
//     await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('test11');
//     await checkoutConfirmationPage.selectCombinationPlanFromShieldBenefitsPricingPage(
//       state.name,
//       'Monthly',
//       'Legal Plan Family',
//       'IDShield Individual'
//     );
//     await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
//     await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
//     await checkoutConfirmationPage.clickSaveAndContinueButton();
//     await checkoutConfirmationPage.clickAgreementCheckbox();
//     await checkoutConfirmationPage.clickCompleteEnrollmentButton();
//     await checkoutConfirmationPage.assertMemberNumberIsDisplayed();
//     await checkoutConfirmationPage.assertPlanNameDisplayed('Legal Plan Family');
//     await checkoutConfirmationPage.assertPlanCostIsDisplayed('Legal Plan Family');
//     await checkoutConfirmationPage.assertPlanNameDisplayed('IDShield Individual');
//     await checkoutConfirmationPage.assertPlanCostIsDisplayed('IDShield Individual');
//   });
// }

// for (const state of RegionsUtils.usStates.filter((state) => state.abbrv != 'MA' && state.priority == true)) {
//   test(`Fringe (Legal Plan Family) - ${state.name}`, async ({ page }) => {
//     console.log(`Test Case: Fringe (Legal Plan Family) - ${state.name}`);
//     await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('nnlegaltest23');
//     await checkoutConfirmationPage.selectPlanWithoutPaymentFrequencyFromShieldBenefitsPricingPage(state.name, 'Monthly', 'Legal Plan Family');
//     await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
//     await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
//     await checkoutConfirmationPage.clickSaveAndContinueButton();
//     await checkoutConfirmationPage.clickAgreementCheckbox();
//     await checkoutConfirmationPage.clickCompleteEnrollmentButton();
//     await checkoutConfirmationPage.assertMemberNumberIsDisplayed();
//     await checkoutConfirmationPage.assertPlanNameDisplayed('Legal Plan Family');
//     await checkoutConfirmationPage.assertPlanCostIsDisplayed('Legal Plan Family');
//   });
// }

// for (const state of RegionsUtils.usStates.filter((state) => state.abbrv != 'MA' && state.priority == true)) {
//   test(`Fringe (IDShield Individual) - ${state.name}`, async ({ page }) => {
//     console.log(`Test Case: Fringe (IDShield Individual) - ${state.name}`);
//     await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('idshieldtest19');
//     await checkoutConfirmationPage.selectPlanWithoutPaymentFrequencyFromShieldBenefitsPricingPage(state.name, 'Monthly', 'IDShield Individual');
//     await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
//     await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
//     await checkoutConfirmationPage.clickSaveAndContinueButton();
//     await checkoutConfirmationPage.clickAgreementCheckbox();
//     await checkoutConfirmationPage.clickCompleteEnrollmentButton();
//     await checkoutConfirmationPage.assertMemberNumberIsDisplayed();
//     await checkoutConfirmationPage.assertPlanNameDisplayed('IDShield Individual');
//     await checkoutConfirmationPage.assertPlanCostIsDisplayed('IDShield Individual');
//   });
// }

// for (const state of RegionsUtils.usStates.filter((state) => state.abbrv != 'MA' && state.priority == true)) {
//   test(`Fringe (IDShield Family) - ${state.name}`, async ({ page }) => {
//     console.log(`Test Case: Fringe (IDShield Family) - ${state.name}`);
//     await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('idshieldtest19');
//     await checkoutConfirmationPage.selectPlanWithoutPaymentFrequencyFromShieldBenefitsPricingPage(state.name, 'Monthly', 'IDShield Family');
//     await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
//     await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
//     await checkoutConfirmationPage.clickSaveAndContinueButton();
//     await checkoutConfirmationPage.clickAgreementCheckbox();
//     await checkoutConfirmationPage.clickCompleteEnrollmentButton();
//     await checkoutConfirmationPage.assertMemberNumberIsDisplayed();
//     await checkoutConfirmationPage.assertPlanNameDisplayed('IDShield Family');
//     await checkoutConfirmationPage.assertPlanCostIsDisplayed('IDShield Family');
//   });
// }

// for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
//   test(`Partial Fringe (IDShield Individual
// ) - ${state.name}`, async ({ page }) => {
//     console.log(`Test Case: Partial Fringe (IDShield Individual
// ) - ${state.name}`);
//     await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('nnidstest27');
//     await checkoutConfirmationPage.selectPlanFromShieldBenefitsPricingPage(state.name, 'Monthly', 'IDShield Individual');
//     await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
//     await checkoutConfirmationPage.captureOrderSummary();
//     await checkoutConfirmationPage.assertPlanNameAndCost('IDShield Individual', '$12.95');
//     await checkoutConfirmationPage.assertPayPeriodTotal('$12.95');
//     await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
//     await checkoutConfirmationPage.clickSaveAndContinueButton();
//     await checkoutConfirmationPage.clickAgreementCheckbox();
//     await checkoutConfirmationPage.clickCompleteEnrollmentButton();
//     await checkoutConfirmationPage.assertMemberNumberIsDisplayed();
//     await checkoutConfirmationPage.assertPlanNameDisplayed('IDShield Individual');
//     await checkoutConfirmationPage.assertPlanCostIsHidden('IDShield Individual');
//   });
// }

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv != 'MA' && state.priority == true)) {
  const groupPayConfig = 'Partial Fringe';
  const groupNumber = 'nnidstest27';
  const planName = 'IDShield Individual';
  const payFrequency = 'Monthly';
  const planCost = '$12.95';
  const totalCost = '$12.95';
  test(`${groupPayConfig} (${planName}) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: ${groupPayConfig} (${planName}) - ${state.name}`);
    await checkoutConfirmationPage.navigateToPersonalInfoPageSinglePlan(
      basicUser.email,
      basicUser.password,
      groupNumber,
      state.name,
      payFrequency,
      planName,
      state.validAddress.street,
      state.validAddress.city,
      state.validAddress.postalCode
    );
    // Personal Info Assertions
    await checkoutConfirmationPage.assertPlanNameAndCost(planName, planCost);
    await checkoutConfirmationPage.assertPayPeriodTotal(totalCost);
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage();
    // Payment Assertions
    await checkoutConfirmationPage.assertDisclaimerLanguage(groupPayConfig, totalCost);
    await checkoutConfirmationPage.assertTermsOfServiceLanguageAndLink();
    await checkoutConfirmationPage.assertPlanNameAndCost(planName, planCost);
    await checkoutConfirmationPage.assertPayPeriodTotal(totalCost);
    await checkoutConfirmationPage.navigateFromPaymentAgreementPageToConfirmationPage();
    // Confirmation Assertions
    await checkoutConfirmationPage.assertIdShieldMembershipIsDisplayed();
    await checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(planName);
    await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(planName);
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv != 'MA' && state.priority == true)) {
  const groupPayConfig = 'Partial Fringe';
  const groupNumber = 'nnidstest27';
  const planName = 'IDShield Family';
  const payFrequency = 'Monthly';
  const planCost = '$22.95';
  const totalCost = '$22.95';
  test(`${groupPayConfig} (${planName}) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: ${groupPayConfig} (${planName}) - ${state.name}`);
    await checkoutConfirmationPage.navigateToPersonalInfoPageSinglePlan(
      basicUser.email,
      basicUser.password,
      groupNumber,
      state.name,
      payFrequency,
      planName,
      state.validAddress.street,
      state.validAddress.city,
      state.validAddress.postalCode
    );
    // Personal Info Assertions
    await checkoutConfirmationPage.assertPlanNameAndCost(planName, planCost);
    await checkoutConfirmationPage.assertPayPeriodTotal(totalCost);
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage();
    // Payment Assertions
    await checkoutConfirmationPage.assertDisclaimerLanguage(groupPayConfig, totalCost);
    await checkoutConfirmationPage.assertTermsOfServiceLanguageAndLink();
    await checkoutConfirmationPage.assertPlanNameAndCost(planName, planCost);
    await checkoutConfirmationPage.assertPayPeriodTotal(totalCost);
    await checkoutConfirmationPage.navigateFromPaymentAgreementPageToConfirmationPage();
    // Confirmation Assertions
    await checkoutConfirmationPage.assertIdShieldMembershipIsDisplayed();
    await checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(planName);
    await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(planName);
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv != 'MA' && state.priority == true)) {
  const groupPayConfig = 'Partial Fringe';
  const groupNumber = 'nnlegaltest31';
  const planName = 'Legal Plan Family';
  const payFrequency = 'Monthly';
  const planCost = '$21.95';
  const totalCost = '$21.95';
  test(`${groupPayConfig} (${planName}) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: ${groupPayConfig} (${planName}) - ${state.name}`);
    await checkoutConfirmationPage.navigateToPersonalInfoPageSinglePlan(
      basicUser.email,
      basicUser.password,
      groupNumber,
      state.name,
      payFrequency,
      planName,
      state.validAddress.street,
      state.validAddress.city,
      state.validAddress.postalCode
    );
    // Personal Info Assertions
    await checkoutConfirmationPage.assertPlanNameAndCost(planName, planCost);
    await checkoutConfirmationPage.assertPayPeriodTotal(totalCost);
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage();
    // Payment Assertions
    await checkoutConfirmationPage.assertDisclaimerLanguage(groupPayConfig, totalCost);
    await checkoutConfirmationPage.assertTermsOfServiceLanguageAndLink();
    await checkoutConfirmationPage.assertPlanNameAndCost(planName, planCost);
    await checkoutConfirmationPage.assertPayPeriodTotal(totalCost);
    await checkoutConfirmationPage.navigateFromPaymentAgreementPageToConfirmationPage();
    // Confirmation Assertions
    await checkoutConfirmationPage.assertLegalShieldMembershipIsDisplayed();
    await checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(planName);
    await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(planName);
  });
}
