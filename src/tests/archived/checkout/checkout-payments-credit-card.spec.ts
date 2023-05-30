import { test } from '@playwright/test';
import { CheckoutPaymentsCreditCardPage } from '../../../page-objects/checkout/checkout-payments-credit-card.page';
import UrlsUtils from '../../../utils/urls.utils';
import DataUtils from '../../../utils/Tests.Data';
let checkoutPaymentsCreditCardPage: CheckoutPaymentsCreditCardPage;

test.beforeEach(async ({ context, page }) => {
  test.slow();

  checkoutPaymentsCreditCardPage = new CheckoutPaymentsCreditCardPage(context, page, 'LegalShield', ['DSCF2']);
  await checkoutPaymentsCreditCardPage.navigateToPaymentsPage(page, 'Virginia', UrlsUtils.testHarnessUrls.d2c.url, 'legalShield', '2', [
    DataUtils.data.testingHarness.plans.us.LegalPlan,
  ]);
});

test('Verify that the Credit card number input is displayed and it is taking an input', async () => {
  test.slow(); // Easy way to triple the default timeout
  await checkoutPaymentsCreditCardPage.creditCardLocTxtCardNumber.fill(DataUtils.data.testingHarness.us.cc.cn);
  await checkoutPaymentsCreditCardPage.creditCardLocTxtCardNumber.isDisabled;
});
test('Verify that the Credit card expiration date input is displayed and it is taking an input', async () => {
  test.slow(); // Easy way to triple the default timeout
  await checkoutPaymentsCreditCardPage.creditCardLocTxtExpirationDate.fill(DataUtils.data.testingHarness.us.cc.exp);
  await checkoutPaymentsCreditCardPage.creditCardLocTxtExpirationDate.isDisabled;
});
test('Verify that the Credit card cvv input is displayed and it is taking an input', async () => {
  test.slow(); // Easy way to triple the default timeout
  await checkoutPaymentsCreditCardPage.creditCardLocTxtSecurityCode.fill(DataUtils.data.testingHarness.us.cc.cvv);
  await checkoutPaymentsCreditCardPage.creditCardLocTxtSecurityCode.isDisabled;
});
test('Verify that the Credit card Holder name input is displayed and it is taking an input', async () => {
  test.slow(); // Easy way to triple the default timeout
  await checkoutPaymentsCreditCardPage.creditCardLocTxtCardholderName.fill(DataUtils.data.testingHarness.us.cc.name);
  await checkoutPaymentsCreditCardPage.creditCardLocTxtCardholderName.isDisabled;
});
test('Verify that the Credit card postal code input is displayed and it is taking an input', async () => {
  test.slow(); // Easy way to triple the default timeout
  await checkoutPaymentsCreditCardPage.creditCardLocTxtBillingPostalCode.fill(DataUtils.data.testingHarness.us.cc.postalCode);
  await checkoutPaymentsCreditCardPage.creditCardLocTxtBillingPostalCode.isDisabled;
});
test('Verify that the user can make a payment by using the credit card form', async () => {
  test.slow(); // Easy way to triple the default timeout
  await checkoutPaymentsCreditCardPage.fillCreditCardForm();
  await checkoutPaymentsCreditCardPage.assertWelcomeToLegalShieldFamilyPage();
});
