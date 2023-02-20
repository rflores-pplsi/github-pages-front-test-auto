import { test } from '@playwright/test';
import { CheckoutPaymentsPage } from '../../page-objects/checkout/checkout-payments.page';
import UrlsUtils from '../../utils/urls.utils';
import DataUtils from '../../utils/Tests.Data';
let checkoutPaymentsPage: CheckoutPaymentsPage;

test.beforeEach(async ({ context, page }) => {
  test.slow();
  checkoutPaymentsPage = new CheckoutPaymentsPage(context, page, 'LegalShield', ['DSCF2']);
  await checkoutPaymentsPage.navigateToPaymentsPage(page, 'Virginia', UrlsUtils.testHarnessUrls.d2c.url, 'legalShield', '2', [
    DataUtils.data.testingHarness.plans.us.LegalPlan,
  ]);
});

test('Using LegalShield Testing Harness to test Payments page header is displayed', async () => {
  test.slow();
  await checkoutPaymentsPage.assertAccountPaymentsPage();
});
test('Using LegalShield Testing Harness to test Payments page Terms of Service Link is Clickable', async () => {
  await checkoutPaymentsPage.assertTermsOfServiceNewTab();
});
test('Using LegalShield Testing Harness to test Bank Draft Terms Of Service Agreement', async () => {
  await checkoutPaymentsPage.assertPurchaseAgreementVerbiage('$29.95.');
});
