import { test } from '@playwright/test';
import RegionsUtils from '../../utils/regions.utils';
import { CheckoutConfirmationPage } from '../../page-objects-refactored/checkout/checkout-confirmation.page';
import { CheckoutPersonalInfoPage } from '../../page-objects-refactored/checkout/checkout-personal-info.page';
import { CheckoutOrderSummaryComponent } from '../../page-objects/checkout/checkout-order-summary.component';
import { CheckoutPaymentsPage } from '../../page-objects/checkout/checkout-payments.page';
import { CheckoutPaymentsBankDraftPage } from '../../page-objects/checkout/checkout-payments-bank-draft.page';
import { CheckoutPaymentsCreditCardPage } from '../../page-objects/checkout/checkout-payments-credit-card.page';
import DataUtils from '../../utils/Tests.Data';
import { D2CLegalShieldCaPage } from '../../page-objects/qa-maintenance-list/d2c-legalshield-ca.page';
import { D2CLegalShieldUSPage } from '../../page-objects/qa-maintenance-list/d2c-legalshield-us.page';

// create instance of Page
let checkoutConfirmationPage: CheckoutConfirmationPage;
let checkoutPersonalInfoPage: CheckoutPersonalInfoPage;
let checkoutOrderSummaryComponent: CheckoutOrderSummaryComponent;
let checkoutPaymentsPage: CheckoutPaymentsPage;
let checkoutPaymentsBankDraftPage: CheckoutPaymentsBankDraftPage;
let checkoutPaymentsCreditCardPage: CheckoutPaymentsCreditCardPage;
let d2CLegalShieldCaPage: D2CLegalShieldCaPage;
let d2CLegalShieldUSPage: D2CLegalShieldUSPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  checkoutConfirmationPage = new CheckoutConfirmationPage(page);
  checkoutPersonalInfoPage = new CheckoutPersonalInfoPage(page, 'd2cIdShieldUS', ['IDSF3']);
  checkoutOrderSummaryComponent = new CheckoutOrderSummaryComponent(page);
  checkoutPaymentsPage = new CheckoutPaymentsPage(page);
  checkoutPaymentsBankDraftPage = new CheckoutPaymentsBankDraftPage(page);
  checkoutPaymentsCreditCardPage = new CheckoutPaymentsCreditCardPage(page);
  d2CLegalShieldCaPage = new D2CLegalShieldCaPage(page);
  d2CLegalShieldUSPage = new D2CLegalShieldUSPage(page);

  // test.slow triples the default wait times
  test.slow();
});

test('Verify confirmation page of purchase for LS plan and supplement', async ({}) => {
  // Navigate to Personal Info Page
  await test.step('Navigate to Testing Harness', async () => {
    await d2CLegalShieldCaPage.navigateToTestingHarnessPage('d2cIDShieldUS');
  });
  await test.step('Select "Direct to Consumer" box', async () => {
    await d2CLegalShieldCaPage.selectDirecttoConsumerD2C('0');
  });
  await test.step('Test from IDShield', async () => {
    await d2CLegalShieldUSPage.clickOnALineOfBusiness(DataUtils.data.testingHarness.lineOfBusiness.IDShield, 'IDShieldUS');
  });
  await test.step('Select a Region', async () => {
    await d2CLegalShieldUSPage.selectYourCity(DataUtils.data.testingHarness.us.city.VA);
  });
  await test.step('Add Plan and some Supplements', async () => {
    await d2CLegalShieldCaPage.addPlanAndSomeSupplements('d2cIDShieldUS', [DataUtils.data.testingHarness.plans.us.IDShieldIndividual]);
  });
  await test.step('Select "Checkout" button to proceed with Checkout Process', async () => {
    await d2CLegalShieldCaPage.selectCheckout('IDShieldUS');
  });
  await test.step('Login Page > Sign-in as an existing account.', async () => {
    await d2CLegalShieldCaPage.loginLegalShieldCA('IDShieldUS');
  });
  // Navigate to Payment Page
  const regionObj = RegionsUtils.usStates;
  const STATE_OBJ = 'Virginia';
  for (const obj of regionObj) {
    if (obj.name == STATE_OBJ) await checkoutPersonalInfoPage.changeAddressUs(obj.name);
  }
  await checkoutConfirmationPage.btnSaveAndContinue.click();
  // Payment Page Assertions
  // await checkoutOrderSummaryComponent.assertTermLabelAndTotal('$14.95', '$14.95');
  // await checkoutOrderSummaryComponent.assertTotalDueToday('$0.00');
  // Navigate to Confirmation Page using BankDraft
  await checkoutPaymentsPage.clickBankDraftBtn();
  await checkoutPaymentsBankDraftPage.fillBankDraftFormAndSubmit();
  // Confirmation Page assertions
  await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary('IDShield Individual');
  await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName('IDShield Individual');
});

test('Verify FreeTrial purchase for IDS Family on IDS Canada with CreditCard', async ({}) => {
  console.log('Test Case: Verify FreeTrial purchase for IDS Family on IDS Canada - Personal Info Page');
  // Navigate to Personal Info Page
  await checkoutPersonalInfoPage.navigateToPersonalInfoPageFromPlanalyzer('D2C', 'IDShield', 'Ontario', 'en-CA', '', 'F30', ['IDShield Family']);
  // Personal Info Page Assertion
  await checkoutPaymentsBankDraftPage.assertPlanNameDisplayedInSummary('IDShield Family');
  await checkoutOrderSummaryComponent.assertTermLabelAndTotal('$29.95', '$29.95');
  await checkoutOrderSummaryComponent.assertTotalDueToday('$0.00');
  // Navigate to Payment Page
  const regionObj = RegionsUtils.caProvinces;
  const STATE_OBJ = 'Ontario';
  for (const obj of regionObj) {
    if (obj.name == STATE_OBJ) await checkoutPersonalInfoPage.changeAddressCanada(obj.name);
  }
  await checkoutConfirmationPage.btnSaveAndContinue.click();
  // Payment Page Assertions
  await checkoutOrderSummaryComponent.assertTermLabelAndTotal('$29.95', '$29.95');
  await checkoutOrderSummaryComponent.assertTotalDueToday('$0.00');
  // Navigate to Confirmation Page using CC
  await checkoutPaymentsCreditCardPage.fillCreditCardFormForCanada();
  // Confirmation Page assertions
  await checkoutConfirmationPage.assertPlanNameDisplayedInConfirmationPageOrderSummary('IDShield Family');
  await checkoutConfirmationPage.assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName('IDShield Family');
});

test('Self-Pay (IDShield Individual) using Planalyzer and Bank Draft', async ({}) => {
  test.slow();
  await checkoutConfirmationPage.navigateToCheckoutConfirmationPageUsingPlanalyzer('Virginia', 'BD');
  await checkoutConfirmationPage.assertWelcomeToLegalShieldFamilyPage();
  await checkoutConfirmationPage.assertOrderSummaryPlanLabelConfirmationPage('Legal Plan');
  await checkoutConfirmationPage.assertOrderSummaryPlanPriceConfirmationPage();
});
test('Self-Pay (IDShield Individual) using Planalyzer and Credit Card', async ({}) => {
  test.slow();
  await checkoutConfirmationPage.navigateToCheckoutConfirmationPageUsingPlanalyzer('Virginia', 'CC');
  await checkoutConfirmationPage.assertWelcomeToLegalShieldFamilyPage();
  await checkoutConfirmationPage.assertOrderSummaryPlanLabelConfirmationPage('Legal Plan');
  await checkoutConfirmationPage.assertOrderSummaryPlanPriceConfirmationPage();
});
