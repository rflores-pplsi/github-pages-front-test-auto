import { test } from '@playwright/test';
import { CommonCheckoutService } from '@legalshield/frontend-automation-commons';
import { TestHarnessD2cPage } from '../../../../archived/page-objects-oldest/qa-maintenance-list/test-harness.page';
import DataUtils from '../../../../utils/Tests.Data';
import { basicUser } from '../../../../utils/user.utils';
// create instance of Page
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let testHarnessD2cPage: TestHarnessD2cPage;
let commonCheckoutService: CommonCheckoutService;

// Setup environment before each test
test.beforeEach(async ({ context, page }) => {
  // test.slow triples the default wait times
  testHarnessD2cPage = new TestHarnessD2cPage(page);
  commonCheckoutService = new CommonCheckoutService(context, page);
  test.slow();
  // await checkoutConfirmationPage.navigateToCheckoutConfirmationPage('Alaska');
});
test('D2E LegalShield US using Testing Harness', async ({ page }) => {
  test.slow;
  await test.step('Navigate to Testing Harness', async () => {
    await testHarnessD2cPage.navigateToTestingHarnessPage('d2cLegalShieldUS');
  });
  await test.step('Select "Direct to Consumer" box', async () => {
    await testHarnessD2cPage.selectDirecttoConsumerD2C('0');
  });
  await test.step('Test from Legalshield', async () => {
    await testHarnessD2cPage.clickOnALineOfBusiness(DataUtils.data.testingHarness.lineOfBusiness.LegalShield, 'd2cLegalShieldUS');
  });
  await test.step('Select a Region', async () => {
    await testHarnessD2cPage.selectYourCity(DataUtils.data.testingHarness.us.city.VA);
  });
  await test.step('Add Plan and some Supplements', async () => {
    await testHarnessD2cPage.addProductsByNameAndShortCode([
      { name: 'Legal Plan', shortCode: 'LPUS21' },
      { name: 'Commercial Drivers Legal Plan', shortCode: 'CDLP' },
    ]);
  });
  await test.step('Select "Checkout" button to proceed with Checkout Process', async () => {
    await testHarnessD2cPage.testHarnessD2cLocBtnCheckout.click();
  });
  await test.step('Login Page > Sign-in as an existing account.', async () => {
    await testHarnessD2cPage.login(basicUser.email as string, basicUser.password as string);
  });
  await test.step('Proceed with Checkout Process Flow > Personal Information Page > Fill out Form', async () => {
    await commonCheckoutService.personalInfoPage.fillRequiredAddressFields(
      DataUtils.data.testingHarness.us.city.Street,
      DataUtils.data.testingHarness.us.city.City,
      DataUtils.data.testingHarness.us.city.ZipCode
    );
    await testHarnessD2cPage.personalInfoLocBtnSaveAndContinue.click();
  });
  await test.step('Proceed to Payment Page > Complete Payment with BD transaction ', async () => {
    // await checkoutPaymentsBankDraftPage.clickSaveAndContinue();
    await commonCheckoutService.paymentPage.bankDraftComponent.completeBankDraftFormUnitedStates(
      DataUtils.data.testingHarness.us.bd.Account,
      DataUtils.data.testingHarness.us.bd.Routing,
      DataUtils.data.testingHarness.us.bd.name
    );
  });
  await test.step('Continue to Confirmation Page.', async () => {
    await testHarnessD2cPage.assertWelcomelabel();
  });
});
