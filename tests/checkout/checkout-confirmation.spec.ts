import { test } from '@playwright/test';
import { CheckoutConfirmationPage } from '../../page-objects/checkout/checkout-confirmation.page';

// create instance of Page
let checkoutConfirmationPage: CheckoutConfirmationPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  checkoutConfirmationPage = new CheckoutConfirmationPage(page);
  // test.slow triples the default wait times
  test.slow();
  // await checkoutConfirmationPage.navigateToCheckoutConfirmationPage('Alaska');
});

test('Self-Pay (IDShield Individual) using Planalyzer and Bank Draft', async ({ page }) => {
  test.slow();
  await checkoutConfirmationPage.navigateToCheckoutConfirmationPageUsingPlanalyzer('Virginia', 'BD');
  await checkoutConfirmationPage.assertWelcomeToLegalshiledFamilyPage();
  await checkoutConfirmationPage.assertOrderSummaryPlanLabelConfirmationPage('Legal Plan');
  await checkoutConfirmationPage.assertOrderSummaryPlanPriceConfirmationPage();
});
test('Self-Pay (IDShield Individual) using Planalyzer and Credit Card', async ({ page }) => {
  test.slow();
  await checkoutConfirmationPage.navigateToCheckoutConfirmationPageUsingPlanalyzer('Virginia', 'CC');
  await checkoutConfirmationPage.assertWelcomeToLegalshiledFamilyPage();
  await checkoutConfirmationPage.assertOrderSummaryPlanLabelConfirmationPage('Legal Plan');
  await checkoutConfirmationPage.assertOrderSummaryPlanPriceConfirmationPage();
});
