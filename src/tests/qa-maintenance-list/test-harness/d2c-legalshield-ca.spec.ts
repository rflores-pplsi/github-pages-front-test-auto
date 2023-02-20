import { test } from '@playwright/test';
import { CommonCheckoutPage } from '../../../../node_modules/@legalshield/frontend-automation-commons';
import { TestHarnessD2cPage } from '../../../page-objects/qa-maintenance-list/test-harness.page';
import DataUtils from '../../../utils/Tests.Data';
import { basicUser } from '../../../utils/user.utils';
// create instance of Page
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let testHarnessD2cPage: TestHarnessD2cPage;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let commonCheckoutPage: CommonCheckoutPage;
// Setup environment before each test
test.beforeEach(async ({ page }) => {
  // test.slow triples the default wait times
  testHarnessD2cPage = new TestHarnessD2cPage(page);
  commonCheckoutPage = new CommonCheckoutPage(page);
  test.slow();
  // await checkoutConfirmationPage.navigateToCheckoutConfirmationPage('Alaska');
});
test('D2E LegalShield CA using Testing Harness', async () => {
  test.slow;
  await test.step('Navigate to Testing Harness', async () => {
    await testHarnessD2cPage.navigateToTestingHarnessPage('d2cLegalShieldCA');
  });
  await test.step('Select Direct to Consumer', async () => {
    await testHarnessD2cPage.selectDirecttoConsumerD2C('0');
  });
  await test.step('Click Legalshield Canada', async () => {
    await testHarnessD2cPage.clickOnALineOfBusiness(DataUtils.data.testingHarness.lineOfBusiness.LegalShieldCanada, 'LegalShieldCanada');
  });
  await test.step('Select your region', async () => {
    await testHarnessD2cPage.selectYourRegion(DataUtils.data.testingHarness.ca.city.ON);
  });
  await test.step('Add Plan and some Supplements', async () => {
    await testHarnessD2cPage.addPlanAndSomeSupplements('d2cLegalShieldCA', [
      DataUtils.data.testingHarness.plans.ca.LegalPlan,
      DataUtils.data.testingHarness.plans.ca.LegalPlanRideShareandDeliverySupplement,
      DataUtils.data.testingHarness.plans.ca.LegalPlanTrialDefenceSupplement,
    ]);
  });
  await test.step('Select Checkout, create a new account or sign in as an existing user. > Verify URL is correct', async () => {
    await testHarnessD2cPage.selectCheckout('LegalShieldCA');
  });
  await test.step('Sign in as an existing user', async () => {
    await testHarnessD2cPage.login(basicUser.email as string, basicUser.password as string);
  });
  await test.step('Complete BD transaction and continue to confirmation page.', async () => {
    await commonCheckoutPage.changeAddress(
      DataUtils.data.testingHarness.ca.city.Street,
      DataUtils.data.testingHarness.ca.city.City,
      DataUtils.data.testingHarness.ca.city.ZipCode
    );
    await testHarnessD2cPage.personalInfoLocBtnSaveAndContinue.click();
  });
  await test.step('Proceed to Payment Page > Complete Payment with BD transaction ', async () => {
    // await checkoutPaymentsBankDraftPage.clickSaveAndContinue();
    await commonCheckoutPage.completeBankDraftFormCanada(
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
