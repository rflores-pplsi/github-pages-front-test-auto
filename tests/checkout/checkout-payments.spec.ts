import { test } from "@playwright/test";
import { CheckoutPaymentsPage } from "../../page-objects/checkout/checkout-payments.page";

let checkoutPaymentsPage: CheckoutPaymentsPage;

test.beforeEach(async ({ page }) => {
  checkoutPaymentsPage = new CheckoutPaymentsPage(page);
  await checkoutPaymentsPage.navigateToPaymentsPage();
});

test("Payments page header is displayed", async ({ page }) => {
  await checkoutPaymentsPage.assertAccoutPaymentsPage();
});
