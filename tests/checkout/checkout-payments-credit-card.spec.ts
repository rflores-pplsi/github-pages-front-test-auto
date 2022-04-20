import { test } from '@playwright/test';
import { CheckoutPaymentsCreditCardPage } from '../../page-objects/checkout/checkout-payments-credit-card.page';
let checkoutPaymentsCreditCardPage: CheckoutPaymentsCreditCardPage;

test.beforeEach(async ({ page }) => {
  test.slow();

  checkoutPaymentsCreditCardPage = new CheckoutPaymentsCreditCardPage(page);
  await checkoutPaymentsCreditCardPage.navigateToPaymentsCreditCardPage('Virginia');
});

test('Payments page header is displayed', async ({ page }) => {
  test.slow(); // Easy way to triple the default timeout
  console.log(page.title);
  await checkoutPaymentsCreditCardPage.fillCreditCardForm();
  await checkoutPaymentsCreditCardPage.assertWelcomeToLegalshiledFamilyPage();
});
