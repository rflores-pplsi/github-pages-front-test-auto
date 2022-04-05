import { test } from "@playwright/test";
import { CheckoutPaymentsBankDraftPage } from "../../page-objects/checkout/checkout-payments-bank-draft.page";
let checkoutPaymentsBankDraftPage: CheckoutPaymentsBankDraftPage;

test.beforeEach(async ({ page }) => {
  checkoutPaymentsBankDraftPage = new CheckoutPaymentsBankDraftPage(page);
  await checkoutPaymentsBankDraftPage.navigateToPaymentsPage();
});

test("Payments page header is displayed", async ({ page }) => {
  console.log(page.title);
  await checkoutPaymentsBankDraftPage.fillBankDraftForm();
  // await checkoutPaymentsBankDraftPage.assertWelcomeToLegalshiledFamilyPage();
});
