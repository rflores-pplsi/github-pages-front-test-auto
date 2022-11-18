import { test } from '@playwright/test';
import { CheckoutPaymentsBankDraftPage } from '../../../page-objects/checkout/checkout-payments-bank-draft.page';
import { CheckoutPersonalInfoPage } from '../../../page-objects/checkout/checkout-personal-info.page';
import { D2CLegalShieldCaPage } from '../../../page-objects/qa-maintenance-list/d2c-legalshield-ca.page';
import { D2CLegalShieldUSPage } from '../../../page-objects/qa-maintenance-list/d2c-legalshield-us.page';
import DataUtils from '../../../utils/Tests.Data';
// create instance of Page
let d2CLegalShieldUSPage: D2CLegalShieldUSPage;
let d2CLegalShieldCaPage: D2CLegalShieldCaPage;
let checkoutPersonalInfoPage: CheckoutPersonalInfoPage;
let checkoutPaymentsBankDraftPage: CheckoutPaymentsBankDraftPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  d2CLegalShieldUSPage = new D2CLegalShieldUSPage(page);
  d2CLegalShieldCaPage = new D2CLegalShieldCaPage(page);
  checkoutPersonalInfoPage = new CheckoutPersonalInfoPage(page);
  checkoutPaymentsBankDraftPage = new CheckoutPaymentsBankDraftPage(page);
  // test.slow triples the default wait times
  test.slow();
  // await checkoutConfirmationPage.navigateToCheckoutConfirmationPage('Alaska');
});
test('D2E IDShield US using Testing Harness', async () => {
  test.slow;
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
  await test.step('Proceed with Checkout Process Flow > Personal Information Page > Fill out Form', async () => {
    await checkoutPersonalInfoPage.changeAddressUs(DataUtils.data.testingHarness.us.city.VA);
  });
  await test.step('Proceed to Payment Page > Complete Payment with BD transaction ', async () => {
    await checkoutPaymentsBankDraftPage.clickSaveAndContinue();
    await checkoutPaymentsBankDraftPage.clickBankDraftBtn();
    await checkoutPaymentsBankDraftPage.fillUsBankDraftFormAndSubmit();
  });
  await test.step('Continue to Confirmation Page.', async () => {
    await d2CLegalShieldUSPage.assertWelcomelabel('d2cIDShieldUS');
  });
});
