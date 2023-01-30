import { test } from '@playwright/test';
// import RegionsUtils from '../../utils/regions.utils';
import { CheckoutConfirmationPage } from '../../page-objects-refactored/checkout/checkout-confirmation.page';
import DataUtils from '../../utils/Tests.Data';
import UrlsUtils from '../../utils/urls.utils';

// create instance of Page
let checkoutConfirmationPage: CheckoutConfirmationPage;

test.describe('Verify the confirmation page of a purchase for IDS Individual on IDS Canada with BankDraft', () => {
  // Setup environment before each test
  test.beforeEach(async ({ context, page }) => {
    test.slow();
    checkoutConfirmationPage = new CheckoutConfirmationPage(context, page, 'IDShieldUS', ['IDSI']); // can change to LS, different plan(s)
    await checkoutConfirmationPage.checkoutPaymentsPage.navigateToPaymentsPage(
      page,
      'Virginia',
      UrlsUtils.testHarnessUrls.d2c.url,
      'IDShieldUS',
      '3',
      [DataUtils.data.testingHarness.plans.us.IDShieldIndividual]
    );
  });

  test('Verify FreeTrial purchase for IDS Individual on IDS US with BankDraft', async () => {
    test.slow();
    await test.step('Using a bank account to pay for the plan', async () => {
      await checkoutConfirmationPage.paymentsLocBtnBankDraft.click();
      await checkoutConfirmationPage.checkoutPaymentsBankDraftPage.fillUsBankDraftFormAndSubmit();
    });
    await test.step('Verify that the purchased plan is: IDShield Individual with the price of: $ 14.95 ', async () => {
      await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName('IDShield Individual', '$14.95');
    });
  });

  test('Verify FreeTrial purchase for IDS Family on IDS Canada with CreditCard', async () => {
    test.slow();
    await test.step('Using a credit card to pay for the plan', async () => {
      await checkoutConfirmationPage.paymentsLocBtnBankDraft.click();
      await checkoutConfirmationPage.checkoutPaymentsBankDraftPage.fillUsBankDraftFormAndSubmit();
    });
    await test.step('Verify that the purchased plan is: IDShield Individual with the price of: $ 14.95 ', async () => {
      await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName('IDShield Individual', '$14.95');
    });
  });
});
test.describe('Verify the confirmation page of a purchase for US Lagalshield line of business and  legal plan with credit card ', () => {
  // Setup environment before each test
  test.beforeEach(async ({ context, page }) => {
    test.slow();
    checkoutConfirmationPage = new CheckoutConfirmationPage(context, page, 'legalShield', [DataUtils.data.testingHarness.plans.us.LegalPlan]);
    await checkoutConfirmationPage.checkoutPaymentsPage.navigateToPaymentsPage(
      page,
      'Virginia',
      UrlsUtils.testHarnessUrls.d2c.url,
      'legalShield',
      '2',
      [DataUtils.data.testingHarness.plans.us.LegalPlan]
    );
  });

  test('Verify FreeTrial purchase for IDS Individual on IDS Canada with credit card ', async () => {
    test.slow();
    await test.step('Using a credit card  to pay for the plan', async () => {
      await checkoutConfirmationPage.checkoutPaymentsCreditCardPage.fillCreditCardForm();
    });
    await test.step('Verify that the purchased plan is: legalshield with the price of: $ 29.95 ', async () => {
      await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName('Legal Plan', '$29.95');
    });
  });

  test('Verify FreeTrial purchase for IDS Family on IDS Canada with CreditCard', async () => {
    console.log('Test Case: Verify FreeTrial purchase for IDS Family on IDS Canada - Personal Info Page');
    test.slow();
    await test.step('Using a credit card  to pay for the plan', async () => {
      await checkoutConfirmationPage.checkoutPaymentsCreditCardPage.fillCreditCardForm();
    });
    await test.step('Verify that the purchased plan is: legalshield with the price of: $ 29.95 ', async () => {
      await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName('Legal Plan', '$29.95');
    });
  });
});
