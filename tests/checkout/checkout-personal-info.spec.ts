import { test } from '@playwright/test';
import RegionsUtils from '../../utils/regions.utils';
import { CheckoutPersonalInfoPage } from '../../page-objects/checkout/checkout-personal-info.page';
import { basicUser } from '../../utils/user.utils';

// create instance of Page
let checkoutPersonalInfoPage: CheckoutPersonalInfoPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  checkoutPersonalInfoPage = new CheckoutPersonalInfoPage(page);
});

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv != 'MA' && state.priority == true)) {
  test(`Select IDShield Individual and validate the order summary on the Checkout Personal Info page - ${state.name}`, async ({
    page,
  }) => {
    console.log(
      `Test Case: Select IDShield Individual and validate the order summary on the Checkout Personal Info page - ${state.name}`
    );
    await checkoutPersonalInfoPage.navigateToBusinessSolutionsLegalPricingPage('nnlegaltest7');
    await checkoutPersonalInfoPage.selectPlanFromBusinessSolutionsLegalPricingPage(state.name, 'Monthly', 'IDShield Individual');
    await checkoutPersonalInfoPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
    await checkoutPersonalInfoPage.assertPlanNameAndCost('IDShield Individual', '$12.95');
    await checkoutPersonalInfoPage.assertPayPeriodTotal('$12.95');
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv != 'MA' && state.priority == true)) {
  test(`Select Legal Plan Family and validate the order summary on the Checkout Personal Info page - ${state.name}`, async ({
    page,
  }) => {
    console.log(
      `Test Case: Select Legal Plan Family and validate the order summary on the Checkout Personal Info page - ${state.name}`
    );
    await checkoutPersonalInfoPage.navigateToBusinessSolutionsLegalPricingPage('nnlegaltest7');
    await checkoutPersonalInfoPage.selectPlanFromBusinessSolutionsLegalPricingPage(state.name, 'Monthly', 'Legal Plan Family');
    await checkoutPersonalInfoPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
    await checkoutPersonalInfoPage.assertPlanNameAndCost('Legal Plan Family', '$23.95');
    await checkoutPersonalInfoPage.assertPayPeriodTotal('$23.95');
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv != 'MA' && state.priority == true)) {
  test(`Select IDShield Family and validate the order summary on the Checkout Personal Info page - ${state.name}`, async ({
    page,
  }) => {
    console.log(
      `Test Case: Select IDShield Family and validate the order summary on the Checkout Personal Info page - ${state.name}`
    );
    await checkoutPersonalInfoPage.navigateToBusinessSolutionsLegalPricingPage('nnlegaltest7');
    await checkoutPersonalInfoPage.selectPlanFromBusinessSolutionsLegalPricingPage(state.name, 'Monthly', 'IDShield Family');
    await checkoutPersonalInfoPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
    await checkoutPersonalInfoPage.assertPlanNameAndCost('IDShield Family', '$22.95');
    await checkoutPersonalInfoPage.assertPayPeriodTotal('$22.95');
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'CA' && state.priority == true)) {
  test(`Select Legal Plan Family/IDShield Family Combination and validate the order summary on the Checkout Personal Info page - ${state.name}`, async ({
    page,
  }) => {
    console.log(
      `Test Case: Select Legal Plan Family/IDShield Family Combination and validate the order summary on the Checkout Personal Info page - ${state.name}`
    );
    await checkoutPersonalInfoPage.navigateToBusinessSolutionsLegalPricingPage('nnlegaltest7');
    await checkoutPersonalInfoPage.selectCombinationPlanFromBusinessSolutionsLegalPricingPage(
      state.name,
      'Monthly',
      'Legal Plan Family',
      'IDShield Family'
    );
    await checkoutPersonalInfoPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
    await checkoutPersonalInfoPage.assertPlanNameAndCost('Legal Plan Family', '$23.95');
    await checkoutPersonalInfoPage.assertPlanNameAndCost('IDShield Family', '$19.95');
    await checkoutPersonalInfoPage.assertPayPeriodTotal('$43.90');
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv != 'MA' && state.priority == true)) {
  test(`Select Legal Plan Family/IDShield Individual Combination and validate the order summary on the Checkout Personal Info page - ${state.name}`, async ({
    page,
  }) => {
    console.log(
      `Test Case: Select Legal Plan Family/IDShield Individual Combination and validate the order summary on the Checkout Personal Info page - ${state.name}`
    );
    await checkoutPersonalInfoPage.navigateToBusinessSolutionsLegalPricingPage('nnlegaltest7');
    await checkoutPersonalInfoPage.selectCombinationPlanFromBusinessSolutionsLegalPricingPage(
      state.name,
      'Monthly',
      'Legal Plan Family',
      'IDShield Individual'
    );
    await checkoutPersonalInfoPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
    await checkoutPersonalInfoPage.assertPlanNameAndCost('Legal Plan Family', '$23.95');
    await checkoutPersonalInfoPage.assertPlanNameAndCost('IDShield Individual', '$12.95');
    await checkoutPersonalInfoPage.assertPayPeriodTotal('$36.90');
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv != 'MA' && state.priority == true)) {
  test(`Select IDShield Individual Plan and validate the order summary on the Checkout Personal Info page - ${state.name}`, async ({
    page,
  }) => {
    console.log(
      `Test Case: Select IDShield Individual Plan and validate the order summary on the Checkout Personal Info page - ${state.name}`
    );
    await checkoutPersonalInfoPage.navigateToBusinessSolutionsIdentityPricingPage('nnidstest3');
    await checkoutPersonalInfoPage.selectPlanFromBusinessSolutionsIdentityPricingPage(
      state.name,
      'Monthly',
      'IDShield Individual'
    );
    await checkoutPersonalInfoPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
    await checkoutPersonalInfoPage.assertPlanNameAndCost('IDShield Individual', '$12.95');
    await checkoutPersonalInfoPage.assertPayPeriodTotal('$12.95');
  });
}

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv != 'MA' && state.priority == true)) {
  test(`Select IDShield Family Plan and validate the order summary on the Checkout Personal Info page - ${state.name}`, async ({
    page,
  }) => {
    console.log(
      `Test Case: Select IDShield Family Plan and validate the order summary on the Checkout Personal Info page - ${state.name}`
    );
    await checkoutPersonalInfoPage.navigateToBusinessSolutionsIdentityPricingPage('nnidstest3');
    await checkoutPersonalInfoPage.selectPlanFromBusinessSolutionsIdentityPricingPage(state.name, 'Monthly', 'IDShield Family');
    await checkoutPersonalInfoPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
    await checkoutPersonalInfoPage.assertPlanNameAndCost('IDShield Family', '$22.95');
    await checkoutPersonalInfoPage.assertPayPeriodTotal('$22.95');
  });
}
