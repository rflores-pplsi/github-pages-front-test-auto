import { test } from '@playwright/test';
import { CheckoutPaymentsPage } from '../../page-objects/checkout/checkout-payments.page';

let checkoutPaymentsPage: CheckoutPaymentsPage;

test.beforeEach(async ({ page }) => {
  test.slow();
  checkoutPaymentsPage = new CheckoutPaymentsPage(page);
  await checkoutPaymentsPage.navigateToPaymentsPage('Virginia');
});

test('Payments page header is displayed', async () => {
  await checkoutPaymentsPage.assertAccountPaymentsPage();
});
test('Payments page Terms of Service Link is Clickable', async () => {
  // await checkoutPaymentsPage.clickTermsOfServiceLnk();
  await checkoutPaymentsPage.assertTermsOfServiceNewTab();
});
