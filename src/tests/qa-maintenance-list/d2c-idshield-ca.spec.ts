/* eslint-disable no-undef */
import { test } from '@playwright/test';
import { CheckoutPaymentsBankDraftPage } from '../../page-objects/checkout/checkout-payments-bank-draft.page';
import { CheckoutPersonalInfoPage } from '../../page-objects/checkout/checkout-personal-info.page';
import { D2CLegalShieldCaPage } from '../../page-objects/qa-maintenance-list/d2c-legalshield-ca.page';
import { D2CLegalShieldUSPage } from '../../page-objects/qa-maintenance-list/d2c-legalshield-us.page';
import DataUtils from '../../utils/Tests.Data';
// let interceptedRequest: any;
// create instance of Page
let d2CLegalShieldUSPage: D2CLegalShieldUSPage;
let d2CLegalShieldCaPage: D2CLegalShieldCaPage;
let checkoutPersonalInfoPage: CheckoutPersonalInfoPage;
let checkoutPaymentsBankDraftPage: CheckoutPaymentsBankDraftPage;

// Setup environment before each test
test.beforeEach(async ({ page, request }) => {
  d2CLegalShieldUSPage = new D2CLegalShieldUSPage(page);
  d2CLegalShieldCaPage = new D2CLegalShieldCaPage(page);
  checkoutPersonalInfoPage = new CheckoutPersonalInfoPage(page);
  checkoutPaymentsBankDraftPage = new CheckoutPaymentsBankDraftPage(page);
  // test.slow triples the default wait times
  test.slow();
  // await checkoutConfirmationPage.navigateToCheckoutConfirmationPage('Alaska');
});
test.only('D2E IDShield CA using Testing Harness', async ({ page }) => {
  test.slow;
  await test.step('Navigate to Testing Harness', async () => {
    await d2CLegalShieldCaPage.navigateToTestingHarnessPage('d2cIDShieldCA');
  });
  await test.step('Select "Direct to Consumer" box', async () => {
    await d2CLegalShieldCaPage.selectDirecttoConsumerD2C('0');
  });
  await test.step('Test from IDShield Canada', async () => {
    await d2CLegalShieldUSPage.clickOnALineOfBusiness(DataUtils.data.testingHarness.lineOfBusiness.IDShieldCanada, 'IDShieldCA');
  });
  await test.step('Select a Region', async () => {
    page.on('response', (response) => {
      const url = ' https://orders.api.dev-legalshield.com/v1/orders';
      if (response.url() === url) {
        // interceptedRequest = response;
        console.log('<<', response.url());
      }
    });
    await d2CLegalShieldCaPage.selectYourRegion(DataUtils.data.testingHarness.ca.bd.province.BC);
  });
  await test.step('Add Plan and some Supplements', async () => {
    await d2CLegalShieldCaPage.addPlanAndSomeSupplements('d2cIDShieldCA', [DataUtils.data.testingHarness.plans.ca.IDShieldIndividual]);
  });
  await test.step('Login Page > Sign-in as an existing account.', async () => {
    await d2CLegalShieldCaPage.loginLegalShieldCA('d2cIDShieldCA');
  });
  await test.step('Select "Checkout" button to proceed with Checkout Process', async () => {
    await d2CLegalShieldCaPage.selectCheckout('d2cIDShieldCA');
  });
  await test.step('Proceed with Checkout Process Flow > Personal Information Page > Fill out Form', async () => {
    await checkoutPersonalInfoPage.changeAddressCanada(DataUtils.data.testingHarness.ca.bd.province.BC);
  });
  await test.step('Proceed to Payment Page > Complete Payment with BD transaction ', async () => {
    await checkoutPaymentsBankDraftPage.clickBankDraftBtn();
    await checkoutPaymentsBankDraftPage.fillBankDraftFormForCanada();
  });
  await test.step('Continue to Confirmation Page.', async () => {
    await d2CLegalShieldUSPage.assertWelcomelabel('d2cIDShieldUS');
  });
});
