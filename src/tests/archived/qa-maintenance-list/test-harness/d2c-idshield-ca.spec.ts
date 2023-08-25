import { test } from '@playwright/test';
import { CommonCheckoutService } from '@legalshield/frontend-automation-commons';
import { TestHarnessD2cPage } from '../../../../page-objects/qa-maintenance-list/test-harness.page';
import DataUtils from '../../../../utils/Tests.Data';
import { basicUser } from '../../../../utils/user.utils';
// create instance of Page
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let testHarnessD2cPage: TestHarnessD2cPage;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let commonCheckoutService: CommonCheckoutService;
// Setup environment before each test
test.beforeEach(async ({ context, page }) => {
  // test.slow triples the default wait times
  testHarnessD2cPage = new TestHarnessD2cPage(page);
  commonCheckoutService = new CommonCheckoutService(context, page);
  test.slow();
  // await checkoutConfirmationPage.navigateToCheckoutConfirmationPage('Alaska');
});
test('D2E IDShield CA using Testing Harness', async () => {
  test.slow;
  await test.step('Navigate to Testing Harness', async () => {
    await testHarnessD2cPage.navigateToTestingHarnessPage('d2cIDShieldCA');
  });
  await test.step('Select "Direct to Consumer" box', async () => {
    await testHarnessD2cPage.selectDirecttoConsumerD2C('0');
  });
  await test.step('Test from IDShield Canada', async () => {
    await testHarnessD2cPage.clickOnALineOfBusiness(DataUtils.data.testingHarness.lineOfBusiness.IDShieldCanada, 'IDShieldCA');
  });
  await test.step('Select a Region', async () => {
    await testHarnessD2cPage.selectYourRegion(DataUtils.data.testingHarness.ca.city.ON);
  });
  await test.step('Add Plan and some Supplements', async () => {
    await testHarnessD2cPage.addPlanAndSomeSupplements('d2cIDShieldCA', [DataUtils.data.testingHarness.plans.ca.IDShieldIndividual]);
  });
  await test.step('Sign in as an existing user', async () => {
    await testHarnessD2cPage.login(basicUser.email as string, basicUser.password as string);
  });
  await test.step('Login Page > Sign-in as an existing account.', async () => {
    // await testHarnessD2cPage.selectCheckout('LegalShieldCA');
  });
  await test.step('change address', async () => {
    await commonCheckoutService.personalInfoPage.fillRequiredAddressFields(
      DataUtils.data.testingHarness.ca.city.Street,
      DataUtils.data.testingHarness.ca.city.City,
      DataUtils.data.testingHarness.ca.city.ZipCode
    );
    await testHarnessD2cPage.personalInfoLocBtnSaveAndContinue.click();
  });

  await test.step('Select "Checkout" button to proceed with Checkout Process', async () => {
    // await d2CLegalShieldCaPage.selectCheckout('d2cIDShieldCA');
  });
  await test.step('Proceed to Payment Page > Complete Payment with BD transaction ', async () => {
    await commonCheckoutService.paymentPage.bankDraftComponent.completeBankDraftFormCanada(
      DataUtils.data.testingHarness.ca.bd.Account,
      DataUtils.data.testingHarness.ca.bd.Transit,
      DataUtils.data.testingHarness.ca.bd.Institution,
      DataUtils.data.testingHarness.ca.bd.name
    );
  });
  await test.step('Continue to Confirmation Page.', async () => {
    await testHarnessD2cPage.assertWelcomelabel();
  });
});
