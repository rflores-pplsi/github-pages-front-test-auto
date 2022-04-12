import { test } from '@playwright/test';
import { CheckoutConfirmationPage } from '../../page-objects/checkout/checkout-confirmation.page';

// create instance of Page
let checkoutConfirmationPage: CheckoutConfirmationPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  checkoutConfirmationPage = new CheckoutConfirmationPage(page);
  test.slow();
  await checkoutConfirmationPage.navigateToCheckoutConfirmationPage('Alaska');
});

test('Welcome to Legal Shield Family Header is displayed', async ({ page }) => {
  test.slow();
  await checkoutConfirmationPage.assertWelcomeToLegalshiledFamilyPage();
  await checkoutConfirmationPage.assertOrderSummaryPlanLabelConfirmationPage();
  await checkoutConfirmationPage.assertOrderSummaryPlanPriceConfirmationPage();
});
