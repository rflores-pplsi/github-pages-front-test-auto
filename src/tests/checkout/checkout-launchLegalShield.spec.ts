import { test } from '@playwright/test';
import { CheckoutLaunchLegalShieldPage } from '../../page-objects/checkout/checkout-launchLegalShield.page';
import { CheckoutPaymentsBankDraftPage } from '../../page-objects/checkout/checkout-payments-bank-draft.page';
import { CheckoutPersonalInfoPage } from '../../page-objects/checkout/checkout-personal-info.page';
import { LoginPage } from '../../page-objects/login/login.page';
import { basicUser } from '../../utils/user.utils';

// create instance of Page
let checkoutLaunchLegalShieldPage: CheckoutLaunchLegalShieldPage;
let checkoutPersonalInfoPage: CheckoutPersonalInfoPage;
let checkoutPaymentsBankDraftPage: CheckoutPaymentsBankDraftPage;
let loginPage: LoginPage;

// Setup environment before each test
test.beforeEach(async ({ context, page }) => {
  checkoutLaunchLegalShieldPage = new CheckoutLaunchLegalShieldPage(context, page);
  checkoutPersonalInfoPage = new CheckoutPersonalInfoPage(context, page, 'd2cIdShieldUS', ['IDSF3']);
  checkoutPaymentsBankDraftPage = new CheckoutPaymentsBankDraftPage(context, page, 'd2cIdShieldUS', ['IDSF3']);
  loginPage = new LoginPage(context, page);
  await checkoutLaunchLegalShieldPage.navigateToLaunch();
});
// Start your business test
test('Start your business button', async ({ page }) => {
  await checkoutLaunchLegalShieldPage.selectYourRegionMenu(page, 'Virginia');
  await checkoutLaunchLegalShieldPage.launchLegalShieldStartYourBusinessBtn.click();
  await checkoutLaunchLegalShieldPage.launchLegalCheckoutBtn.click();
  await loginPage.login(basicUser.email as string, basicUser.password as string);
  await checkoutPersonalInfoPage.changeAddressUs('Virginia');
  await checkoutPersonalInfoPage.btnSaveAndContinue.click();
  await checkoutPaymentsBankDraftPage.paymentsLocBtnBankDraft.click();
  await checkoutPaymentsBankDraftPage.fillUsBankDraftFormAndSubmit();
  await checkoutLaunchLegalShieldPage.assertWelcomeText();
});
