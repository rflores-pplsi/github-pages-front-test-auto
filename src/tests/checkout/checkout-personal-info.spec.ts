import { test } from '@playwright/test';
// eslint-disable-next-line no-unused-vars
import RegionsUtils from '../../utils/regions.utils';
import { CheckoutPersonalInfoPage } from '../../page-objects/checkout/checkout-personal-info.page';
// eslint-disable-next-line no-unused-vars
import { basicUser } from '../../utils/user.utils';

// define the instance of Page declaration
let checkoutPersonalInfoPage: CheckoutPersonalInfoPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  test.slow();
  checkoutPersonalInfoPage = new CheckoutPersonalInfoPage(page);
});

test('Verify Personal Information Section Header Displays', async ({ page }) => {
  console.log('Test Case: Verify Personal Information Section Header Displays');
  await checkoutPersonalInfoPage.navigateToPersonalInfoPageFromPlanalyzer();
  await checkoutPersonalInfoPage.assertPersonalInfoHeaderIsDisplayed();
});

test('Verify Error for all fields on Personal Info Page Displays', async ({ page }) => {
  console.log('Test Case: Verify Error for all fields on Personal Info Page Displays');
  await checkoutPersonalInfoPage.navigateToPersonalInfoPageFromPlanalyzer();
  await checkoutPersonalInfoPage.clearAllFieldsOnPersonalInfoPageAndSave();
  await checkoutPersonalInfoPage.assertPersonalInfoPageErrorsAreDisplayed();
});

// for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'CA' && state.priority == true)) {
//   test(`Select IDShield Individual and validate the order summary on the Checkout Personal Info page - ${state.name}`, async ({ page }) => {
//     console.log(`Test Case: Select IDShield Individual and validate the order summary on the Checkout Personal Info page - ${state.name}`);
//     await checkoutPersonalInfoPage.navigateToShieldBenefitsPricingPage('nnlegaltest7');
//     await checkoutPersonalInfoPage.selectPlanFromShieldBenefitsPricingPage(state.name, 'Monthly', 'IDShield Individual', '');
//     // await checkoutPersonalInfoPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
//     // await checkoutPersonalInfoPage.captureOrderSummary();
//     // await checkoutPersonalInfoPage.assertPlanNameAndCost('IDShield Individual', '$12.95');
//     await checkoutPersonalInfoPage.assertPayPeriodTotal('$12.95');
//   };);
// }

// for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'CA' && state.priority == true)) {
//   test(`Select Legal Plan Family and validate the order summary on the Checkout Personal Info page - ${state.name}`, async ({ page }) => {
//     console.log(`Test Case: Select Legal Plan Family and validate the order summary on the Checkout Personal Info page - ${state.name}`);
//     await checkoutPersonalInfoPage.navigateToShieldBenefitsPricingPage('nnlegaltest7');
//     await checkoutPersonalInfoPage.selectPlanFromShieldBenefitsPricingPage(state.name, 'Monthly', 'Legal Plan Family');
//     await checkoutPersonalInfoPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
//     await checkoutPersonalInfoPage.captureOrderSummary();
//     await checkoutPersonalInfoPage.assertPlanNameAndCost('Legal Plan Family', '$23.95');
//     await checkoutPersonalInfoPage.assertPayPeriodTotal('$23.95');
//   });
// }

// for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'CA' && state.priority == true)) {
//   test(`Select IDShield Family and validate the order summary on the Checkout Personal Info page - ${state.name}`, async ({ page }) => {
//     console.log(`Test Case: Select IDShield Family and validate the order summary on the Checkout Personal Info page - ${state.name}`);
//     await checkoutPersonalInfoPage.navigateToShieldBenefitsPricingPage('nnlegaltest7');
//     await checkoutPersonalInfoPage.selectPlanFromShieldBenefitsPricingPage(state.name, 'Monthly', 'IDShield Family');
//     await checkoutPersonalInfoPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
//     await checkoutPersonalInfoPage.captureOrderSummary();
//     await checkoutPersonalInfoPage.assertPlanNameAndCost('IDShield Family', '$22.95');
//     await checkoutPersonalInfoPage.assertPayPeriodTotal('$22.95');
//   });
// }

// for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'CA' && state.priority == true)) {
//   test(`Select Legal Plan Family/IDShield Family Combination and validate the order summary on the Checkout Personal Info page - ${state.name}`, async ({
//     page,
//   }) => {
//     console.log(
//       `Test Case: Select Legal Plan Family/IDShield Family Combination and validate the order summary on the Checkout Personal Info page - ${state.name}`
//     );
//     await checkoutPersonalInfoPage.navigateToShieldBenefitsPricingPage('nnlegaltest7');
//     await checkoutPersonalInfoPage.selectCombinationPlanFromShieldBenefitsPricingPage(state.name, 'Monthly', 'Legal Plan Family', 'IDShield Family');
//     await checkoutPersonalInfoPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
//     await checkoutPersonalInfoPage.captureOrderSummary();
//     await checkoutPersonalInfoPage.assertPlanNameAndCost('Legal Plan Family', '$23.95');
//     await checkoutPersonalInfoPage.assertPlanNameAndCost('IDShield Family', '$19.95');
//     await checkoutPersonalInfoPage.assertPayPeriodTotal('$43.90');
//   });
// }

// for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'CA' && state.priority == true)) {
//   test(`Select Legal Plan Family/IDShield Individual Combination and validate the order summary on the Checkout Personal Info page - ${state.name}`, async ({
//     page,
//   }) => {
//     console.log(
//       `Test Case: Select Legal Plan Family/IDShield Individual Combination and validate the order summary on the Checkout Personal Info page - ${state.name}`
//     );
//     await checkoutPersonalInfoPage.navigateToShieldBenefitsPricingPage('nnlegaltest7');
//     await checkoutPersonalInfoPage.selectCombinationPlanFromShieldBenefitsPricingPage(
//       state.name,
//       'Monthly',
//       'Legal Plan Family',
//       'IDShield Individual'
//     );
//     await checkoutPersonalInfoPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
//     await checkoutPersonalInfoPage.captureOrderSummary();
//     await checkoutPersonalInfoPage.assertPlanNameAndCost('Legal Plan Family', '$23.95');
//     await checkoutPersonalInfoPage.assertPlanNameAndCost('IDShield Individual', '$12.95');
//     await checkoutPersonalInfoPage.assertPayPeriodTotal('$36.90');
//   });
// }

// for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'CA' && state.priority == true)) {
//   test(`Select IDShield Individual Plan and validate the order summary on the Checkout Personal Info page - ${state.name}`, async ({ page }) => {
//     console.log(`Test Case: Select IDShield Individual Plan and validate the order summary on the Checkout Personal Info page - ${state.name}`);
//     await checkoutPersonalInfoPage.navigateToShieldBenefitsPricingPage('nnidstest3');
//     await checkoutPersonalInfoPage.selectPlanFromShieldBenefitsPricingPage(state.name, 'Monthly', 'IDShield Individual');
//     await checkoutPersonalInfoPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
//     await checkoutPersonalInfoPage.captureOrderSummary();
//     await checkoutPersonalInfoPage.assertPlanNameAndCost('IDShield Individual', '$12.95');
//     await checkoutPersonalInfoPage.assertPayPeriodTotal('$12.95');
//   });
// }

// for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'CA' && state.priority == true)) {
//   test(`Select IDShield Family Plan and validate the order summary on the Checkout Personal Info page - ${state.name}`, async ({ page }) => {
//     console.log(`Test Case: Select IDShield Family Plan and validate the order summary on the Checkout Personal Info page - ${state.name}`);
//     await checkoutPersonalInfoPage.navigateToShieldBenefitsPricingPage('nnidstest3');
//     await checkoutPersonalInfoPage.selectPlanFromShieldBenefitsPricingPage(state.name, 'Monthly', 'IDShield Family');
//     await checkoutPersonalInfoPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
//     await checkoutPersonalInfoPage.captureOrderSummary();
//     await checkoutPersonalInfoPage.assertPlanNameAndCost('IDShield Family', '$22.95');
//     await checkoutPersonalInfoPage.assertPayPeriodTotal('$22.95');
//   });
// }
