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

test('Welcome to Legal Shield Family Header is displayed', async ({ page }) => {
  await checkoutConfirmationPage.assertWelcomeToLegalshiledFamilyPage();
  await checkoutConfirmationPage.assertOrderSummaryPlanLabelConfirmationPage('IDShield Individual');
  await checkoutConfirmationPage.assertOrderSummaryPlanPriceConfirmationPage();
});

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv == 'NY' && state.priority == true)) {
  test.only(`Select IDShield Individual and validate the order summary on the Checkout Personal Info page - ${state.name}`, async ({ page }) => {
    console.log(`Test Case: Select IDShield Individual and validate the order summary on the Checkout Personal Info page - ${state.name}`);
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
