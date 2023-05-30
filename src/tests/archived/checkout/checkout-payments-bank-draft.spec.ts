import { test } from '@playwright/test';
import { CheckoutPaymentsBankDraftPage } from '../../../page-objects/checkout/checkout-payments-bank-draft.page';
import DataUtils from '../../../utils/Tests.Data';
import UrlsUtils from '../../../utils/urls.utils';
let checkoutPaymentsBankDraftPage: CheckoutPaymentsBankDraftPage;

test.describe('Test bank draft payment page using Lagalshield line of business and  legal plan', () => {
  test.beforeEach(async ({ context, page }) => {
    test.slow();

    checkoutPaymentsBankDraftPage = new CheckoutPaymentsBankDraftPage(context, page, 'LegalShield', ['DSCF2']);
    await checkoutPaymentsBankDraftPage.navigateToPaymentsPage(page, 'Virginia', UrlsUtils.testHarnessUrls.d2c.url, 'legalShield', '2', [
      DataUtils.data.testingHarness.plans.us.LegalPlan,
    ]);
    await checkoutPaymentsBankDraftPage.paymentsLocBtnBankDraft.click();
  });

  test('Verify that the bank account input is displayed and it is taking an input', async () => {
    test.slow(); // Easy way to triple the default timeout
    await checkoutPaymentsBankDraftPage.bankDraftLocTxtAccountNumber.fill(DataUtils.data.testingHarness.us.bd.Account);
    await checkoutPaymentsBankDraftPage.bankDraftLocTxtAccountNumber.isDisabled;
  });
  test('Verify that the routing number input is displayed and it is taking an input', async () => {
    test.slow(); // Easy way to triple the default timeout
    await checkoutPaymentsBankDraftPage.bankDraftLocTxtRoutingNumber.fill(DataUtils.data.testingHarness.us.bd.Routing);
    await checkoutPaymentsBankDraftPage.bankDraftLocTxtRoutingNumber.isDisabled;
  });
  test('Verify that the account holder name input is displayed and it is taking an input', async () => {
    test.slow(); // Easy way to triple the default timeout
    await checkoutPaymentsBankDraftPage.bankDraftLocTxtAccountHolderName.fill(DataUtils.data.testingHarness.us.bd.Account);
    await checkoutPaymentsBankDraftPage.bankDraftLocTxtAccountHolderName.isDisabled;
  });
  test('Verify that the user can make a payment by using the bank draft form', async () => {
    test.slow(); // Easy way to triple the default timeout
    await checkoutPaymentsBankDraftPage.fillUsBankDraftFormAndSubmit();
    await checkoutPaymentsBankDraftPage.assertWelcomeToLegalShieldFamilyPage();
  });
});
test.describe('Test bank draft payment page using IDshield line of business and  IDShield Individual', () => {
  test.beforeEach(async ({ context, page }) => {
    test.slow();

    checkoutPaymentsBankDraftPage = new CheckoutPaymentsBankDraftPage(context, page, 'IDShield', ['IDSI']);
    await checkoutPaymentsBankDraftPage.navigateToPaymentsPage(page, 'Virginia', UrlsUtils.testHarnessUrls.d2c.url, 'IDShield', '3', [
      DataUtils.data.testingHarness.plans.us.IDShieldIndividual,
    ]);
    await checkoutPaymentsBankDraftPage.paymentsLocBtnBankDraft.click();
  });

  test('Verify that the bank account input is displayed and it is taking an input', async () => {
    test.slow(); // Easy way to triple the default timeout
    await checkoutPaymentsBankDraftPage.bankDraftLocTxtAccountNumber.fill(DataUtils.data.testingHarness.us.bd.Account);
    await checkoutPaymentsBankDraftPage.bankDraftLocTxtAccountNumber.isDisabled;
  });
  test('Verify that the routing number input is displayed and it is taking an input', async () => {
    test.slow(); // Easy way to triple the default timeout
    await checkoutPaymentsBankDraftPage.bankDraftLocTxtRoutingNumber.fill(DataUtils.data.testingHarness.us.bd.Routing);
    await checkoutPaymentsBankDraftPage.bankDraftLocTxtRoutingNumber.isDisabled;
  });
  test('Verify that the account holder name input is displayed and it is taking an input', async () => {
    test.slow(); // Easy way to triple the default timeout
    await checkoutPaymentsBankDraftPage.bankDraftLocTxtAccountHolderName.fill(DataUtils.data.testingHarness.us.bd.Account);
    await checkoutPaymentsBankDraftPage.bankDraftLocTxtAccountHolderName.isDisabled;
  });
  test('Verify that the user can make a payment by using the bank draft form', async () => {
    test.slow(); // Easy way to triple the default timeout
    await checkoutPaymentsBankDraftPage.fillUsBankDraftFormAndSubmit();
    await checkoutPaymentsBankDraftPage.assertWelcomeToLegalShieldFamilyPage();
  });
});
