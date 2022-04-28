import { test } from '@playwright/test';
import { CheckoutConfirmationPage } from '../../page-objects/checkout/checkout-confirmation.page';
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

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  const groupPayConfig = 'Self-Pay';
  const groupNumber = 'nnlegaltest7';
  const planName = 'IDShield Individual';
  const payFrequency = 'Monthly';
  const planCost = '$12.95';
  const totalCost = '$12.95';
  test(`Legal/ID Config ${groupPayConfig} (${planName}) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: Legal/ID Config ${groupPayConfig} (${planName}) - ${state.name}`);
    await checkoutConfirmationPage.navigateToPersonalInfoPageSinglePlan(
      basicUser.email,
      basicUser.password,
      groupNumber,
      groupPayConfig,
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
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(groupPayConfig);
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

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  const groupPayConfig = 'Self-Pay';
  const planName = 'Legal Plan Family';
  const groupNumber = 'nnlegaltest7';
  const payFrequency = 'Monthly';
  const planCost = '$23.95';
  const totalCost = '$23.95';
  test(`Legal/ID Config ${groupPayConfig} (${planName}) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: Legal/ID Config ${groupPayConfig} (${planName}) - ${state.name}`);
    await checkoutConfirmationPage.navigateToPersonalInfoPageSinglePlan(
      basicUser.email,
      basicUser.password,
      groupNumber,
      groupPayConfig,
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
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(groupPayConfig);
    // Payment Assertions
    await checkoutConfirmationPage.assertPlanNameAndCost(planName, planCost);
    await checkoutConfirmationPage.assertPayPeriodTotal(totalCost);
    await checkoutConfirmationPage.navigateFromPaymentBankDraftPageToConfirmationPage();
    // Confirmation Assertions
    await checkoutConfirmationPage.assertLegalShieldMembershipIsDisplayed();
    await checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(planName);
    await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(planName);
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  const groupPayConfig = 'Self-Pay';
  const groupNumber = 'nnlegaltest7';
  const planName = 'IDShield Family';
  const payFrequency = 'Monthly';
  const planCost = '$22.95';
  const totalCost = '$22.95';
  test(`Legal/ID Config ${groupPayConfig} (${planName}) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: Legal/ID Config ${groupPayConfig} (${planName}) - ${state.name}`);
    await checkoutConfirmationPage.navigateToPersonalInfoPageSinglePlan(
      basicUser.email,
      basicUser.password,
      groupNumber,
      groupPayConfig,
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
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(groupPayConfig);
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
test.only('Self-Pay (IDShield Individual) using Planalyzer and Bank Draft', async ({ page }) => {
  test.slow();
  await checkoutConfirmationPage.navigateToCheckoutConfirmationPageUsingPlanalyzer('Virginia', 'BD');
  await checkoutConfirmationPage.assertWelcomeToLegalshiledFamilyPage();
  await checkoutConfirmationPage.assertOrderSummaryPlanLabelConfirmationPage('Legal Plan');
  await checkoutConfirmationPage.assertOrderSummaryPlanPriceConfirmationPage();
});
test.only('Self-Pay (IDShield Individual) using Planalyzer and Credit Card', async ({ page }) => {
  test.slow();
  await checkoutConfirmationPage.navigateToCheckoutConfirmationPageUsingPlanalyzer('Virginia', 'CC');
  await checkoutConfirmationPage.assertWelcomeToLegalshiledFamilyPage();
  await checkoutConfirmationPage.assertOrderSummaryPlanLabelConfirmationPage('Legal Plan');
  await checkoutConfirmationPage.assertOrderSummaryPlanPriceConfirmationPage();
});

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  const groupPayConfig = 'Self-Pay';
  const groupNumber = 'nnlegaltest7';
  const planName = 'Legal Plan Family';
  const plan2Name = 'IDShield Family';
  const planCost = '$23.95';
  const plan2Cost = '$19.95';
  const totalCost = '$43.90';
  const payFrequency = 'Monthly';
  test(`Legal/ID Config ${groupPayConfig} (${planName}/${plan2Name}) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: Legal/ID Config${groupPayConfig} (${planName}/${plan2Name}) - ${state.name}`);
    await checkoutConfirmationPage.navigateToPersonalInfoPageComboPlan(
      basicUser.email,
      basicUser.password,
      groupNumber,
      groupPayConfig,
      state.name,
      payFrequency,
      planName,
      plan2Name,
      state.validAddress.street,
      state.validAddress.city,
      state.validAddress.postalCode
    );
    // Personal Info Assertions
    await checkoutConfirmationPage.assertPlanNameAndCost(planName, planCost);
    await checkoutConfirmationPage.assertPlanNameAndCost(plan2Name, plan2Cost);
    await checkoutConfirmationPage.assertPayPeriodTotal(totalCost);
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(groupPayConfig);
    // Payment Assertions
    await checkoutConfirmationPage.assertPlanNameAndCost(planName, planCost);
    await checkoutConfirmationPage.assertPlanNameAndCost(plan2Name, plan2Cost);
    await checkoutConfirmationPage.assertPayPeriodTotal(totalCost);
    await checkoutConfirmationPage.navigateFromPaymentBankDraftPageToConfirmationPage();
    // Confirmation Assertions
    await checkoutConfirmationPage.assertIdShieldMembershipIsDisplayed();
    await checkoutConfirmationPage.assertLegalShieldMembershipIsDisplayed();
    await checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(planName);
    await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(planName);
    await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(plan2Name);
    await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(plan2Name);
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  const groupPayConfig = 'Self-Pay';
  const groupNumber = 'nnlegaltest7';
  const payFrequency = 'Monthly';
  const planName = 'Legal Plan Family';
  const plan2Name = 'IDShield Individual';
  const planCost = '$23.95';
  const plan2Cost = '$12.95';
  const totalCost = '$36.90';
  test(`Legal/ID Config ${groupPayConfig} (${planName}/${plan2Name}) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: Legal/ID Config${groupPayConfig} (${planName}/${plan2Name}) - ${state.name}`);
    await checkoutConfirmationPage.navigateToPersonalInfoPageComboPlan(
      basicUser.email,
      basicUser.password,
      groupNumber,
      groupPayConfig,
      state.name,
      payFrequency,
      planName,
      plan2Name,
      state.validAddress.street,
      state.validAddress.city,
      state.validAddress.postalCode
    );
    // Personal Info Assertions
    await checkoutConfirmationPage.assertPlanNameAndCost(planName, planCost);
    await checkoutConfirmationPage.assertPlanNameAndCost(plan2Name, plan2Cost);
    await checkoutConfirmationPage.assertPayPeriodTotal(totalCost);
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(groupPayConfig);
    // Payment Assertions
    await checkoutConfirmationPage.assertPlanNameAndCost(planName, planCost);
    await checkoutConfirmationPage.assertPlanNameAndCost(plan2Name, plan2Cost);
    await checkoutConfirmationPage.assertPayPeriodTotal(totalCost);
    await checkoutConfirmationPage.navigateFromPaymentBankDraftPageToConfirmationPage();
    // Confirmation Assertions
    await checkoutConfirmationPage.assertLegalShieldMembershipIsDisplayed();
    await checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(planName);
    await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(planName);
    await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(plan2Name);
    await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(plan2Name);
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  const groupPayConfig = 'Self-Pay';
  const groupNumber = 'nnidstest3';
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
      groupPayConfig,
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
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(groupPayConfig);
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

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  const groupPayConfig = 'Self-Pay';
  const groupNumber = 'nnidstest3';
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
      groupPayConfig,
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
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(groupPayConfig);
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

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  const groupPayConfig = 'Self-Pay';
  const groupNumber = 'test48';
  const planName = 'IDShield for Business - Essentials';
  const payFrequency = 'Monthly';
  const planCost = '$79.95';
  const totalCost = '$79.95';
  test(`${groupPayConfig} (${planName}) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: ${groupPayConfig} (${planName}) - ${state.name}`);
    await checkoutConfirmationPage.navigateToPersonalInfoPageSinglePlan(
      basicUser.email,
      basicUser.password,
      groupNumber,
      groupPayConfig,
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
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(groupPayConfig);
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

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  const groupPayConfig = 'Self-Pay';
  const groupNumber = 'test48';
  const planName = 'Commercial Drivers Legal Plan';
  const payFrequency = 'Monthly';
  const planCost = '$29.95';
  const totalCost = '$29.95';
  test.only(`${groupPayConfig} (${planName}) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: ${groupPayConfig} (${planName}) - ${state.name}`);
    await checkoutConfirmationPage.navigateToPersonalInfoPageSinglePlan(
      basicUser.email,
      basicUser.password,
      groupNumber,
      groupPayConfig,
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
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(groupPayConfig);
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

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  const groupPayConfig = 'Self-Pay';
  const groupNumber = 'test48';
  const planName = 'Small Business - Small Business Plus';
  const payFrequency = 'Monthly';
  const planCost = '$99.00';
  const totalCost = '$99.00';
  test(`${groupPayConfig} (${planName}) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: ${groupPayConfig} (${planName}) - ${state.name}`);
    await checkoutConfirmationPage.navigateToPersonalInfoPageSinglePlan(
      basicUser.email,
      basicUser.password,
      groupNumber,
      groupPayConfig,
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
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(groupPayConfig);
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

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  const groupPayConfig = 'Self-Pay';
  const groupNumber = 'test48';
  const planName = 'Small Business - Small Business Essentials';
  const payFrequency = 'Monthly';
  const planCost = '$49.00';
  const totalCost = '$49.00';
  test(`${groupPayConfig} (${planName}) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: ${groupPayConfig} (${planName}) - ${state.name}`);
    await checkoutConfirmationPage.navigateToPersonalInfoPageSinglePlan(
      basicUser.email,
      basicUser.password,
      groupNumber,
      groupPayConfig,
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
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(groupPayConfig);
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

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  const groupPayConfig = 'Self-Pay';
  const groupNumber = 'test48';
  const planName = 'Small Business - Small Business Pro';
  const payFrequency = 'Monthly';
  const planCost = '$169.00';
  const totalCost = '$169.00';
  test(`${groupPayConfig} (${planName}) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: ${groupPayConfig} (${planName}) - ${state.name}`);
    await checkoutConfirmationPage.navigateToPersonalInfoPageSinglePlan(
      basicUser.email,
      basicUser.password,
      groupNumber,
      groupPayConfig,
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
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(groupPayConfig);
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

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  const groupPayConfig = 'Self-Pay';
  const groupNumber = 'test48';
  const planName = 'IDShield for Business - Plus';
  const payFrequency = 'Monthly';
  const planCost = '$149.95';
  const totalCost = '$149.95';
  test(`${groupPayConfig} (${planName}) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: ${groupPayConfig} (${planName}) - ${state.name}`);
    await checkoutConfirmationPage.navigateToPersonalInfoPageSinglePlan(
      basicUser.email,
      basicUser.password,
      groupNumber,
      groupPayConfig,
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
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(groupPayConfig);
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

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  const groupPayConfig = 'Self-Pay';
  const groupNumber = 'test48';
  const planName = 'Commercial Drivers Legal Plan';
  const plan2Name = 'IDShield Individual';
  const planCost = '$42.90';
  const plan2Cost = '$19.95';
  const totalCost = '$62.85';
  const payFrequency = 'Monthly';
  test(`Legal/ID Config ${groupPayConfig} (${planName}/${plan2Name}) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: Legal/ID Config${groupPayConfig} (${planName}/${plan2Name}) - ${state.name}`);
    await checkoutConfirmationPage.navigateToPersonalInfoPageComboPlan(
      basicUser.email,
      basicUser.password,
      groupNumber,
      groupPayConfig,
      state.name,
      payFrequency,
      planName,
      plan2Name,
      state.validAddress.street,
      state.validAddress.city,
      state.validAddress.postalCode
    );
    // Personal Info Assertions
    await checkoutConfirmationPage.assertPlanNameAndCost(planName, planCost);
    await checkoutConfirmationPage.assertPlanNameAndCost(plan2Name, plan2Cost);
    await checkoutConfirmationPage.assertPayPeriodTotal(totalCost);
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(groupPayConfig);
    // Payment Assertions
    await checkoutConfirmationPage.assertPlanNameAndCost(planName, planCost);
    await checkoutConfirmationPage.assertPlanNameAndCost(plan2Name, plan2Cost);
    await checkoutConfirmationPage.assertPayPeriodTotal(totalCost);
    await checkoutConfirmationPage.navigateFromPaymentBankDraftPageToConfirmationPage();
    // Confirmation Assertions
    await checkoutConfirmationPage.assertIdShieldMembershipIsDisplayed();
    await checkoutConfirmationPage.assertLegalShieldMembershipIsDisplayed();
    await checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(planName);
    await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(planName);
    await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(plan2Name);
    await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(plan2Name);
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  const groupPayConfig = 'Self-Pay';
  const groupNumber = 'test48';
  const planName = 'Commercial Drivers Legal Plan';
  const plan2Name = 'IDShield Family';
  const planCost = '$34.90';
  const plan2Cost = '$19.95';
  const totalCost = '$54.85';
  const payFrequency = 'Monthly';
  test(`Legal/ID Config ${groupPayConfig} (${planName}/${plan2Name}) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: Legal/ID Config${groupPayConfig} (${planName}/${plan2Name}) - ${state.name}`);
    await checkoutConfirmationPage.navigateToPersonalInfoPageComboPlan(
      basicUser.email,
      basicUser.password,
      groupNumber,
      groupPayConfig,
      state.name,
      payFrequency,
      planName,
      plan2Name,
      state.validAddress.street,
      state.validAddress.city,
      state.validAddress.postalCode
    );
    // Personal Info Assertions
    await checkoutConfirmationPage.assertPlanNameAndCost(planName, planCost);
    await checkoutConfirmationPage.assertPlanNameAndCost(plan2Name, plan2Cost);
    await checkoutConfirmationPage.assertPayPeriodTotal(totalCost);
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(groupPayConfig);
    // Payment Assertions
    await checkoutConfirmationPage.assertPlanNameAndCost(planName, planCost);
    await checkoutConfirmationPage.assertPlanNameAndCost(plan2Name, plan2Cost);
    await checkoutConfirmationPage.assertPayPeriodTotal(totalCost);
    await checkoutConfirmationPage.navigateFromPaymentBankDraftPageToConfirmationPage();
    // Confirmation Assertions
    await checkoutConfirmationPage.assertIdShieldMembershipIsDisplayed();
    await checkoutConfirmationPage.assertLegalShieldMembershipIsDisplayed();
    await checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(planName);
    await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(planName);
    await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(plan2Name);
    await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(plan2Name);
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  const groupPayConfig = 'Payroll Deduct';
  const groupNumber = 'test11';
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
      groupPayConfig,
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
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(groupPayConfig);
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

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  const groupPayConfig = 'Payroll Deduct';
  const groupNumber = 'test11';
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
      groupPayConfig,
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
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(groupPayConfig);
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

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  const groupPayConfig = 'Payroll Deduct';
  const groupNumber = 'test11';
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
      groupPayConfig,
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
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(groupPayConfig);
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

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  const groupPayConfig = 'Payroll Deduct';
  const groupNumber = 'test11';
  const planName = 'Legal Plan Family';
  const plan2Name = 'IDShield Family';
  const planCost = '$21.95';
  const plan2Cost = '$19.95';
  const totalCost = '$41.90';
  const payFrequency = 'Monthly';
  test(`${groupPayConfig} (${planName}/${plan2Name}) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: ${groupPayConfig} (${planName}/${plan2Name}) - ${state.name}`);
    await checkoutConfirmationPage.navigateToPersonalInfoPageComboPlan(
      basicUser.email,
      basicUser.password,
      groupNumber,
      groupPayConfig,
      state.name,
      payFrequency,
      planName,
      plan2Name,
      state.validAddress.street,
      state.validAddress.city,
      state.validAddress.postalCode
    );
    // Personal Info Assertions
    await checkoutConfirmationPage.assertPlanNameAndCost(planName, planCost);
    await checkoutConfirmationPage.assertPlanNameAndCost(plan2Name, plan2Cost);
    await checkoutConfirmationPage.assertPayPeriodTotal(totalCost);
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(groupPayConfig);
    // Payment Assertions
    await checkoutConfirmationPage.assertDisclaimerLanguage(groupPayConfig, totalCost);
    await checkoutConfirmationPage.assertTermsOfServiceLanguageAndLink();
    await checkoutConfirmationPage.assertPlanNameAndCost(planName, planCost);
    await checkoutConfirmationPage.assertPlanNameAndCost(plan2Name, plan2Cost);
    await checkoutConfirmationPage.assertPayPeriodTotal(totalCost);
    await checkoutConfirmationPage.navigateFromPaymentAgreementPageToConfirmationPage();

    // Confirmation Assertions
    await checkoutConfirmationPage.assertIdShieldMembershipIsDisplayed();
    await checkoutConfirmationPage.assertLegalShieldMembershipIsDisplayed();
    await checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(planName);
    await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(planName);
    await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(plan2Name);
    await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(plan2Name);
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  const groupPayConfig = 'Payroll Deduct';
  const groupNumber = 'test11';
  const planName = 'Legal Plan Family';
  const plan2Name = 'IDShield Individual';
  const planCost = '$21.95';
  const plan2Cost = '$12.95';
  const totalCost = '$34.90';
  const payFrequency = 'Monthly';
  test(`${groupPayConfig} (${planName}/${plan2Name}) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: ${groupPayConfig} (${planName}/${plan2Name}) - ${state.name}`);
    await checkoutConfirmationPage.navigateToPersonalInfoPageComboPlan(
      basicUser.email,
      basicUser.password,
      groupNumber,
      groupPayConfig,
      state.name,
      payFrequency,
      planName,
      plan2Name,
      state.validAddress.street,
      state.validAddress.city,
      state.validAddress.postalCode
    );
    // Personal Info Assertions
    await checkoutConfirmationPage.assertPlanNameAndCost(planName, planCost);
    await checkoutConfirmationPage.assertPlanNameAndCost(plan2Name, plan2Cost);
    await checkoutConfirmationPage.assertPayPeriodTotal(totalCost);
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(groupPayConfig);
    // Payment Assertions
    await checkoutConfirmationPage.assertDisclaimerLanguage(groupPayConfig, totalCost);
    await checkoutConfirmationPage.assertTermsOfServiceLanguageAndLink();
    await checkoutConfirmationPage.assertPlanNameAndCost(planName, planCost);
    await checkoutConfirmationPage.assertPlanNameAndCost(plan2Name, plan2Cost);
    await checkoutConfirmationPage.assertPayPeriodTotal(totalCost);
    await checkoutConfirmationPage.navigateFromPaymentAgreementPageToConfirmationPage();

    // Confirmation Assertions
    await checkoutConfirmationPage.assertIdShieldMembershipIsDisplayed();
    await checkoutConfirmationPage.assertLegalShieldMembershipIsDisplayed();
    await checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(planName);
    await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(planName);
    await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(plan2Name);
    await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName(plan2Name);
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  const groupPayConfig = 'Fringe';
  const groupNumber = 'nnlegaltest23';
  const planName = 'Legal Plan Family';
  const totalCost = '$23.95';
  test(`${groupPayConfig} (${planName}) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: ${groupPayConfig} (${planName}) - ${state.name}`);
    await checkoutConfirmationPage.navigateToPersonalInfoPageSinglePlanNoPaymentFrequency(
      basicUser.email,
      basicUser.password,
      groupNumber,
      groupPayConfig,
      state.name,
      planName,
      state.validAddress.street,
      state.validAddress.city,
      state.validAddress.postalCode
    );
    // Personal Info Assertions
    await checkoutConfirmationPage.assertPlanName(planName);
    await checkoutConfirmationPage.assertPlanCostsNotDisplayed(planName);
    await checkoutConfirmationPage.assertPayPeriodTotalIsNotDisplayed();
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(groupPayConfig);
    // Payment Assertions
    await checkoutConfirmationPage.assertDisclaimerLanguage(groupPayConfig, totalCost);
    await checkoutConfirmationPage.assertTermsOfServiceLanguageAndLink();
    await checkoutConfirmationPage.assertPlanName(planName);
    await checkoutConfirmationPage.assertPayPeriodTotalIsNotDisplayed();
    await checkoutConfirmationPage.navigateFromPaymentAgreementPageToConfirmationPage();
    // Confirmation Assertions
    await checkoutConfirmationPage.assertLegalShieldMembershipIsDisplayed();
    await checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(planName);
    await checkoutConfirmationPage.assertPlanCostIsHidden(planName);
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  const groupPayConfig = 'Fringe';
  const groupNumber = 'idshieldtest19';
  const planName = 'IDShield Individual';
  const totalCost = '$12.95';
  test(`${groupPayConfig} (${planName}) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: ${groupPayConfig} (${planName}) - ${state.name}`);
    await checkoutConfirmationPage.navigateToPersonalInfoPageSinglePlanNoPaymentFrequency(
      basicUser.email,
      basicUser.password,
      groupNumber,
      groupPayConfig,
      state.name,
      planName,
      state.validAddress.street,
      state.validAddress.city,
      state.validAddress.postalCode
    );
    // Personal Info Assertions
    await checkoutConfirmationPage.assertPlanName(planName);
    await checkoutConfirmationPage.assertPlanCostsNotDisplayed(planName);
    await checkoutConfirmationPage.assertPayPeriodTotalIsNotDisplayed();
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(groupPayConfig);
    // Payment Assertions
    await checkoutConfirmationPage.assertDisclaimerLanguage(groupPayConfig, totalCost);
    await checkoutConfirmationPage.assertTermsOfServiceLanguageAndLink();
    await checkoutConfirmationPage.assertPlanName(planName);
    await checkoutConfirmationPage.assertPayPeriodTotalIsNotDisplayed();
    await checkoutConfirmationPage.navigateFromPaymentAgreementPageToConfirmationPage();
    // Confirmation Assertions
    await checkoutConfirmationPage.assertIdShieldMembershipIsDisplayed();
    await checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(planName);
    await checkoutConfirmationPage.assertPlanCostIsHidden(planName);
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  const groupPayConfig = 'Fringe';
  const groupNumber = 'idshieldtest19';
  const planName = 'IDShield Family';
  const totalCost = '$22.95';
  test(`${groupPayConfig} (${planName}) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: ${groupPayConfig} (${planName}) - ${state.name}`);
    await checkoutConfirmationPage.navigateToPersonalInfoPageSinglePlanNoPaymentFrequency(
      basicUser.email,
      basicUser.password,
      groupNumber,
      groupPayConfig,
      state.name,
      planName,
      state.validAddress.street,
      state.validAddress.city,
      state.validAddress.postalCode
    );
    // Personal Info Assertions
    await checkoutConfirmationPage.assertPlanName(planName);
    await checkoutConfirmationPage.assertPlanCostsNotDisplayed(planName);
    await checkoutConfirmationPage.assertPayPeriodTotalIsNotDisplayed();
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(groupPayConfig);
    // Payment Assertions
    await checkoutConfirmationPage.assertDisclaimerLanguage(groupPayConfig, totalCost);
    await checkoutConfirmationPage.assertTermsOfServiceLanguageAndLink();
    await checkoutConfirmationPage.assertPlanName(planName);
    await checkoutConfirmationPage.assertPayPeriodTotalIsNotDisplayed();
    await checkoutConfirmationPage.navigateFromPaymentAgreementPageToConfirmationPage();
    // Confirmation Assertions
    await checkoutConfirmationPage.assertIdShieldMembershipIsDisplayed();
    await checkoutConfirmationPage.assertNoMemberNumbersAreDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary(planName);
    await checkoutConfirmationPage.assertPlanCostIsHidden(planName);
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
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
      groupPayConfig,
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
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(groupPayConfig);
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

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
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
      groupPayConfig,
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
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(groupPayConfig);
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

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
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
      groupPayConfig,
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
    await checkoutConfirmationPage.navigateFromPersonalInfoPageToPaymentPage(groupPayConfig);
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
