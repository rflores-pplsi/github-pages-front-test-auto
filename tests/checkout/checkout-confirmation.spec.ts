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

test.only('Verify FreeTrial purchase for IDS Individual on IDS Canada ', async ({ page }) => {
  console.log('Test Case: Verify FreeTrial purchase IDS Individual on IDS Canada - Personal Info Page');
  await checkoutConfirmationPage.navigateToPersonalInfoPageFromPlanalyzer('D2C', 'IDShield', 'Ontario', 'en-CA', '', 'F30', ['IDShield Individual']);
  // await checkoutConfirmationPage.assertPlanNameDisplayedInSummary('IDShield Individual');
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
  await checkoutConfirmationPage.page.pause();
  await checkoutConfirmationPage.fillBankDraftFormForCa();
  await checkoutConfirmationPage.page.pause();

  // assert anything else you want on Payment Page page

  // await checkoutConfirmationPage.navigateConfirm...
  // await checkoutConfirmationPage.assert...
  await checkoutConfirmationPage.assertPlanNameDisplayed('IDShield Individual');
  await checkoutConfirmationPage.assertPlanCostDisplayed('IDShield Individual');

  // assert anything else you want on Confirmation page
});

test.only('Verify FreeTrial purchase for IDS Family on IDS Canada ', async ({ page }) => {
  console.log('Test Case: Verify FreeTrial purchase for IDS Family on IDS Canada - Personal Info Page');
  await checkoutConfirmationPage.navigateToPersonalInfoPageFromPlanalyzer('D2C', 'IDShield', 'Ontario', 'en-CA', '', 'F30', ['IDShield Family']);
  // await checkoutConfirmationPage.assertPlanNameDisplayedInSummary('IDShield Individual');
  await checkoutConfirmationPage.assertMonthlyLabelAndTotal('$29.95');
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
  await checkoutConfirmationPage.assertMonthlyLabelAndTotal('$29.95');
  await checkoutConfirmationPage.assertTotalDueToday('$0.00');
  await checkoutConfirmationPage.fillCreditCardFormForCa();

  // await checkoutConfirmationPage.clickBankDraftBtn();
  // await checkoutConfirmationPage.fillBankDraftFormForCa();
  await checkoutConfirmationPage.page.pause();

  // assert anything else you want on Payment Page page

  // await checkoutConfirmationPage.navigateConfirm...
  // await checkoutConfirmationPage.assert...
  await checkoutConfirmationPage.assertPlanNameDisplayed('IDShield Family');
  await checkoutConfirmationPage.assertPlanCostDisplayed('IDShield Family');

  // assert anything else you want on Confirmation page
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

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  test(`Self-Pay (IDShield Individual) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: Self-Pay (IDShield Individual) - ${state.name}`);
    await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('nnlegaltest7');
    await checkoutConfirmationPage.selectPlanFromShieldBenefitsPricingPage(state.name, 'Monthly', 'IDShield Individual');
    await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
    await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
    await checkoutConfirmationPage.clickSaveAndContinueButton();
    await checkoutConfirmationPage.clickBankDraftBtn();
    await checkoutConfirmationPage.fillBankDraftForm();
    await checkoutConfirmationPage.assertMemberNumberDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayed('IDShield Individual');
    await checkoutConfirmationPage.assertPlanCostDisplayed('IDShield Individual');
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  test(`Self-Pay (Legal Plan Family) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: Self-Pay (Legal Plan Family) - ${state.name}`);
    await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('nnlegaltest7');
    await checkoutConfirmationPage.selectPlanFromShieldBenefitsPricingPage(state.name, 'Monthly', 'Legal Plan Family');
    await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
    await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
    await checkoutConfirmationPage.clickSaveAndContinueButton();
    await checkoutConfirmationPage.clickBankDraftBtn();
    await checkoutConfirmationPage.fillBankDraftForm();
    await checkoutConfirmationPage.assertMemberNumberDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayed('Legal Plan Family');
    await checkoutConfirmationPage.assertPlanCostDisplayed('Legal Plan Family');
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  test(`Self-pay group (IDShield Family) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: Self-Pay (IDShield Family) - ${state.name}`);
    await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('nnlegaltest7');
    await checkoutConfirmationPage.selectPlanFromShieldBenefitsPricingPage(state.name, 'Monthly', 'IDShield Family');
    await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
    await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
    await checkoutConfirmationPage.clickSaveAndContinueButton();
    await checkoutConfirmationPage.clickBankDraftBtn();
    await checkoutConfirmationPage.fillBankDraftForm();
    await checkoutConfirmationPage.assertMemberNumberDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayed('IDShield Family');
    await checkoutConfirmationPage.assertPlanCostDisplayed('IDShield Family');
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  test(`Self-Pay Group (Legal Plan Family/IDShield Family Combo) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: Self-Pay Group (Legal Plan Family/IDShield Family Combo) - ${state.name}`);
    await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('nnlegaltest7');
    await checkoutConfirmationPage.selectCombinationPlanFromShieldBenefitsPricingPage(state.name, 'Monthly', 'Legal Plan Family', 'IDShield Family');
    await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
    await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
    await checkoutConfirmationPage.clickSaveAndContinueButton();
    await checkoutConfirmationPage.clickBankDraftBtn();
    await checkoutConfirmationPage.fillBankDraftForm();
    await checkoutConfirmationPage.assertMemberNumberDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayed('Legal Plan Family');
    await checkoutConfirmationPage.assertPlanCostDisplayed('Legal Plan Family');
    await checkoutConfirmationPage.assertPlanNameDisplayed('IDShield Family');
    await checkoutConfirmationPage.assertPlanCostDisplayed('IDShield Family');
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  test(`Self-Pay Group (Legal Plan Family/IDShield Individual Combo) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: Self-Pay Group (Legal Plan Family/IDShield Individual Combo) - ${state.name}`);
    await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('nnlegaltest7');
    await checkoutConfirmationPage.selectCombinationPlanFromShieldBenefitsPricingPage(
      state.name,
      'Monthly',
      'Legal Plan Family',
      'IDShield Individual'
    );
    await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
    await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
    await checkoutConfirmationPage.clickSaveAndContinueButton();
    await checkoutConfirmationPage.clickBankDraftBtn();
    await checkoutConfirmationPage.fillBankDraftForm();
    await checkoutConfirmationPage.assertMemberNumberDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayed('Legal Plan Family');
    await checkoutConfirmationPage.assertPlanCostDisplayed('Legal Plan Family');
    await checkoutConfirmationPage.assertPlanNameDisplayed('IDShield Individual');
    await checkoutConfirmationPage.assertPlanCostDisplayed('IDShield Individual');
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  test(`Self-Pay ID Only (IDShield Individual) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: Self-Pay ID Only (IDShield Individual) - ${state.name}`);
    await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('nnidstest3');
    await checkoutConfirmationPage.selectPlanFromShieldBenefitsPricingPage(state.name, 'Monthly', 'IDShield Individual');
    await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
    await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
    await checkoutConfirmationPage.clickSaveAndContinueButton();
    await checkoutConfirmationPage.clickBankDraftBtn();
    await checkoutConfirmationPage.fillBankDraftForm();
    await checkoutConfirmationPage.assertMemberNumberDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayed('IDShield Individual');
    await checkoutConfirmationPage.assertPlanCostDisplayed('IDShield Individual');
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  test(`Self-Pay ID Only (IDShield Family) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: Self-Pay ID Only (IDShield Family) - ${state.name}`);
    await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('nnidstest3');
    await checkoutConfirmationPage.selectPlanFromShieldBenefitsPricingPage(state.name, 'Monthly', 'IDShield Family');
    await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
    await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
    await checkoutConfirmationPage.clickSaveAndContinueButton();
    await checkoutConfirmationPage.clickBankDraftBtn();
    await checkoutConfirmationPage.fillBankDraftForm();
    await checkoutConfirmationPage.assertMemberNumberDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayed('IDShield Family');
    await checkoutConfirmationPage.assertPlanCostDisplayed('IDShield Family');
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  test(`Payroll Deduct (IDShield Individual) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: Payroll Deduct (IDShield Individual) - ${state.name}`);
    await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('test11');
    await checkoutConfirmationPage.selectPlanFromShieldBenefitsPricingPage(state.name, 'Monthly', 'IDShield Individual');
    await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
    await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
    await checkoutConfirmationPage.clickSaveAndContinueButton();
    await checkoutConfirmationPage.clickAgreementCheckbox();
    await checkoutConfirmationPage.clickCompleteEnrollmentButton();
    await checkoutConfirmationPage.assertMemberNumberDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayed('IDShield Individual');
    await checkoutConfirmationPage.assertPlanCostDisplayed('IDShield Individual');
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  test(`Payroll Deduct (Legal Plan Family) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: Payroll Deduct (Legal Plan Family) - ${state.name}`);
    await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('test11');
    await checkoutConfirmationPage.selectPlanFromShieldBenefitsPricingPage(state.name, 'Monthly', 'Legal Plan Family');
    await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
    await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
    await checkoutConfirmationPage.clickSaveAndContinueButton();
    await checkoutConfirmationPage.clickAgreementCheckbox();
    await checkoutConfirmationPage.clickCompleteEnrollmentButton();
    await checkoutConfirmationPage.assertMemberNumberDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayed('Legal Plan Family');
    await checkoutConfirmationPage.assertPlanCostDisplayed('Legal Plan Family');
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  test(`Payroll Deduct (IDShield Family) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: Payroll Deduct (IDShield Family) - ${state.name}`);
    await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('test11');
    await checkoutConfirmationPage.selectPlanFromShieldBenefitsPricingPage(state.name, 'Monthly', 'IDShield Family');
    await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
    await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
    await checkoutConfirmationPage.clickSaveAndContinueButton();
    await checkoutConfirmationPage.clickAgreementCheckbox();
    await checkoutConfirmationPage.clickCompleteEnrollmentButton();
    await checkoutConfirmationPage.assertMemberNumberDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayed('IDShield Family');
    await checkoutConfirmationPage.assertPlanCostDisplayed('IDShield Family');
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  test(`Payroll Deduct (Legal Plan Family/IDShield Family Combo) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: Payroll Deduct (Legal Plan Family/IDShield Family Combo) - ${state.name}`);
    await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('test11');
    await checkoutConfirmationPage.selectCombinationPlanFromShieldBenefitsPricingPage(state.name, 'Monthly', 'Legal Plan Family', 'IDShield Family');
    await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
    await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
    await checkoutConfirmationPage.clickSaveAndContinueButton();
    await checkoutConfirmationPage.clickAgreementCheckbox();
    await checkoutConfirmationPage.clickCompleteEnrollmentButton();
    await checkoutConfirmationPage.assertMemberNumberDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayed('Legal Plan Family');
    await checkoutConfirmationPage.assertPlanCostDisplayed('Legal Plan Family');
    await checkoutConfirmationPage.assertPlanNameDisplayed('IDShield Family');
    await checkoutConfirmationPage.assertPlanCostDisplayed('IDShield Family');
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  test(`Payroll Deduct (Legal Plan Family/IDShield Individual Combo) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: Payroll Deduct (Legal Plan Family/IDShield Individual Combo) - ${state.name}`);
    await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('test11');
    await checkoutConfirmationPage.selectCombinationPlanFromShieldBenefitsPricingPage(
      state.name,
      'Monthly',
      'Legal Plan Family',
      'IDShield Individual'
    );
    await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
    await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
    await checkoutConfirmationPage.clickSaveAndContinueButton();
    await checkoutConfirmationPage.clickAgreementCheckbox();
    await checkoutConfirmationPage.clickCompleteEnrollmentButton();
    await checkoutConfirmationPage.assertMemberNumberDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayed('Legal Plan Family');
    await checkoutConfirmationPage.assertPlanCostDisplayed('Legal Plan Family');
    await checkoutConfirmationPage.assertPlanNameDisplayed('IDShield Individual');
    await checkoutConfirmationPage.assertPlanCostDisplayed('IDShield Individual');
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  test(`Fringe (Legal Plan Family) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: Fringe (Legal Plan Family) - ${state.name}`);
    await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('nnlegaltest23');
    await checkoutConfirmationPage.selectPlanWithoutPaymentFrequencyFromShieldBenefitsPricingPage(state.name, 'Monthly', 'Legal Plan Family');
    await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
    await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
    await checkoutConfirmationPage.clickSaveAndContinueButton();
    await checkoutConfirmationPage.clickAgreementCheckbox();
    await checkoutConfirmationPage.clickCompleteEnrollmentButton();
    await checkoutConfirmationPage.assertMemberNumberDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayed('Legal Plan Family');
    await checkoutConfirmationPage.assertPlanCostDisplayed('Legal Plan Family');
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  test(`Fringe (IDShield Individual) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: Fringe (IDShield Individual) - ${state.name}`);
    await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('idshieldtest19');
    await checkoutConfirmationPage.selectPlanWithoutPaymentFrequencyFromShieldBenefitsPricingPage(state.name, 'Monthly', 'IDShield Individual');
    await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
    await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
    await checkoutConfirmationPage.clickSaveAndContinueButton();
    await checkoutConfirmationPage.clickAgreementCheckbox();
    await checkoutConfirmationPage.clickCompleteEnrollmentButton();
    await checkoutConfirmationPage.assertMemberNumberDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayed('IDShield Individual');
    await checkoutConfirmationPage.assertPlanCostDisplayed('IDShield Individual');
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  test(`Fringe (IDShield Family) - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: Fringe (IDShield Family) - ${state.name}`);
    await checkoutConfirmationPage.navigateToShieldBenefitsPricingPage('idshieldtest19');
    await checkoutConfirmationPage.selectPlanWithoutPaymentFrequencyFromShieldBenefitsPricingPage(state.name, 'Monthly', 'IDShield Family');
    await checkoutConfirmationPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
    await checkoutConfirmationPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
    await checkoutConfirmationPage.clickSaveAndContinueButton();
    await checkoutConfirmationPage.clickAgreementCheckbox();
    await checkoutConfirmationPage.clickCompleteEnrollmentButton();
    await checkoutConfirmationPage.assertMemberNumberDisplayed();
    await checkoutConfirmationPage.assertPlanNameDisplayed('IDShield Family');
    await checkoutConfirmationPage.assertPlanCostDisplayed('IDShield Family');
  });
}
