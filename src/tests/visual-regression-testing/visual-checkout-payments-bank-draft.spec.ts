import { test } from '@playwright/test';
import { CheckoutPaymentsBankDraftPage } from '../../page-objects (Archived)/checkout/checkout-payments-bank-draft.page';
let checkoutPaymentsBankDraftPage: CheckoutPaymentsBankDraftPage;

test.beforeEach(async ({ page }) => {
  test.slow();

  checkoutPaymentsBankDraftPage = new CheckoutPaymentsBankDraftPage(page);
  await checkoutPaymentsBankDraftPage.navigateToPaymentsBankDraftPage('Virginia');
});
// test('Payments bank draft page is displayed @smoke', async ({ page }) => {
//   expect(
//     await page.screenshot({
//       fullPage: true,
//     })
//   ).toMatchSnapshot('bankDraftPage.png');
// });
