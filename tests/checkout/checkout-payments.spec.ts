import { test } from '@playwright/test';
import { CheckoutPaymentsPage } from '../../page-objects/checkout/checkout-payments.page';

let checkoutPaymentsPage: CheckoutPaymentsPage;

test.beforeEach(async ({ page }) => {
  test.slow();
  checkoutPaymentsPage = new CheckoutPaymentsPage(page);
  await checkoutPaymentsPage.navigateToPaymentsPage('Virginia');
});

test('Payments page header is displayed', async ({ page }) => {
  await checkoutPaymentsPage.assertAccoutPaymentsPage();
});
test('Payments page Terms of Service Link is Clickable', async ({ page }) => {
<<<<<<< HEAD
  await checkoutPaymentsPage.clickTermsOfServiceLnk();
  await checkoutPaymentsPage.assertTermsOfServiceNewTab();
});
test('Payments page Terms of Service Link is Clickable', async ({ page }) => {
=======
>>>>>>> 6a44b0426dcc0c01ce1a70dfd3fd1d434cadf1ee
  await checkoutPaymentsPage.clickTermsOfServiceLnk();
  await checkoutPaymentsPage.assertTermsOfServiceNewTab();
});
