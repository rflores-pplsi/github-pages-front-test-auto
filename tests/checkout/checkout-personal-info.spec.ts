import { test } from "@playwright/test";
import RegionsUtils from "../../utils/regions.utils";
import { CheckoutPersonalInfoPage } from "../../page-objects/checkout/checkout-personal-info.page";
import { basicUser } from '../../utils/user.utils';

// create instance of Page
let checkoutPersonalInfoPage: CheckoutPersonalInfoPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  checkoutPersonalInfoPage = new CheckoutPersonalInfoPage(page);
});

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv != 'MA' && state.priority == true)) {
  test.only(`Update address and continue to payment page -  ${state.name}`, async ({ page }) => {
    console.log(`Test Case: Update address and continue to payment page -  ${state.name}`);
    await checkoutPersonalInfoPage.createOrderRedirectToCheckout('D2C', 'LegalShield', state.name, 'en-US', '', '', ['Legal Plan']);
    await checkoutPersonalInfoPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
    await checkoutPersonalInfoPage.assertPlanNameAndCost('Legal Plan', '$29.95');
    await checkoutPersonalInfoPage.assertMonthlyLabelAndTotal('$29.95');
    await checkoutPersonalInfoPage.changeAddress(state.validAddress.street, state.validAddress.city, state.validAddress.postalCode);
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
  test.only(`Select Legal Plan Family/IDShield Family Combination and validate the order summary on the Checkout Personal Info page - ${state.name}`, async ({
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
      'IDShield Individual'
    );
    await checkoutPersonalInfoPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
    await checkoutPersonalInfoPage.assertPlanNameAndCost('Legal Plan Family', '$23.95');
    await checkoutPersonalInfoPage.assertPlanNameAndCost('IDShield Individual', '$12.95');
    await checkoutPersonalInfoPage.assertPayPeriodTotal('$36.90');
  });
}
