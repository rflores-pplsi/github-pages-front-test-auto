import { test } from "@playwright/test";
import { CheckoutPaymentsBankDraftPage } from "../../page-objects/checkout/checkout-payments-bank-draft.page";
let checkoutPaymentsBankDraftPage: CheckoutPaymentsBankDraftPage;

test.beforeEach(async ({ page }) => {
  test.slow();

  checkoutPaymentsBankDraftPage = new CheckoutPaymentsBankDraftPage(page);
  await checkoutPaymentsBankDraftPage.navigateToPaymentsPage("Virginia");
});

test("Payments page header is displayed", async ({ page }) => {
  test.slow(); // Easy way to triple the default timeout
  console.log(page.title);
  await checkoutPaymentsBankDraftPage.fillBankDraftForm();
  await checkoutPaymentsBankDraftPage.assertWelcomeToLegalshiledFamilyPage();
});
