import { expect, test } from '@playwright/test';
import { CheckoutPaymentsBankDraftPage } from '../../page-objects/checkout/checkout-payments-bank-draft.page';
let checkoutPaymentsBankDraftPage: CheckoutPaymentsBankDraftPage;

test.beforeEach(async ({ page }) => {
  test.slow();

  checkoutPaymentsBankDraftPage = new CheckoutPaymentsBankDraftPage(page);
  await checkoutPaymentsBankDraftPage.navigateToPaymentsBankDraftPage('Virginia');
});

test('Payments page header is displayed', async ({ page }) => {
  console.log(page.title);
  await checkoutPaymentsBankDraftPage.fillBankDraftFormAndSubmit();
  test.slow(); // Easy way to triple the default timeout
  await checkoutPaymentsBankDraftPage.assertWelcomeToLegalshiledFamilyPage();
});
test('Payments bank draft page is displayed', async ({ page }) => {
  expect(
    await page.screenshot({
      fullPage: true,
    })
  ).toMatchSnapshot('bankDraftPage.png');
});
