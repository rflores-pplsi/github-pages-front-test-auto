import { test } from '@playwright/test';
import { CheckoutConfirmationPage } from '../../page-objects/checkout/checkout-confirmation.page';
import { basicUser } from '../../utils/user.utils';

// create instance of Page
let checkoutConfirmationPage: CheckoutConfirmationPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  checkoutConfirmationPage = new CheckoutConfirmationPage(page);
  await checkoutConfirmationPage.navigateToPlanalyzerCsrCheckoutOktaLogin();
  await checkoutConfirmationPage.loginThroughOkta();
});

// Purchase Legal Plan for Oklahoma
test.only('Can purchase Legal Plan for all States', async ({ page }) => {
  await checkoutConfirmationPage.createOrderRedirectToCheckout('D2C', 'LegalShield', 'Alaska', 'en-US', '', '', ['Legal Plan']);
  await checkoutConfirmationPage.login(basicUser.email, basicUser.password);
  await checkoutConfirmationPage.clickOnElement('button:has-text("Save & Continue")');
  await page.pause();
});
