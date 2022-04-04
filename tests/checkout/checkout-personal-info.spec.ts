import { test } from '@playwright/test';
import RegionsUtils from '../../utils/regions.utils';
import { CheckoutPersonalInfoPage } from '../../page-objects/checkout/checkout-personal-info.page';
import { basicUser } from '../../utils/user.utils';

// create instance of Page
let checkoutPersonalInfoPage: CheckoutPersonalInfoPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  checkoutPersonalInfoPage = new CheckoutPersonalInfoPage(page);
  await checkoutPersonalInfoPage.navigateToPlanalyzerCsrCheckoutOktaLogin();
  await checkoutPersonalInfoPage.loginThroughOkta();
});

for (const state of RegionsUtils.usStates.filter((state) => state.abbrv != 'MA' && state.priority == true)) {
  test.only(`Update address and continue to payment page -  ${state.name}`, async ({ page }) => {
    console.log(`Test Case: Update address and continue to payment page -  ${state.name}`);
    await checkoutPersonalInfoPage.createOrderRedirectToCheckout('D2C', 'LegalShield', state.name, 'en-US', '', '', [
      'Legal Plan',
    ]);
    await checkoutPersonalInfoPage.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
    await checkoutPersonalInfoPage.assertPlanNameAndCost('Legal Plan', '$29.95');
    await checkoutPersonalInfoPage.assertMonthlyLabelAndTotal('$29.95');
    await checkoutPersonalInfoPage.changeAddress(
      state.validAddress.street,
      state.validAddress.city,
      state.validAddress.postalCode
    );
    await checkoutPersonalInfoPage.clickSaveAndContinueButton();
  });
}
