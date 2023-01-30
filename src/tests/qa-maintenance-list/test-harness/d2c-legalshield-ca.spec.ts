import { test } from '@playwright/test';
import { CheckoutPaymentsBankDraftPage } from '../../../page-objects/checkout/checkout-payments-bank-draft.page';
import { CheckoutPersonalInfoPage } from '../../../page-objects/checkout/checkout-personal-info.page';
import { D2CLegalShieldCaPage } from '../../../page-objects-refactored/qa-maintenance-list/d2c-legalshield-ca.page';
import { D2CLegalShieldUSPage } from '../../../page-objects-refactored/qa-maintenance-list/d2c-legalshield-us.page';
import { CommonLoginPage } from '@legalshield/frontend-automation-commons';
import DataUtils from '../../../utils/Tests.Data';
import { basicUser } from '../../../utils/user.utils';

// create instance of Page
let d2CLegalShieldCaPage: D2CLegalShieldCaPage;
let d2CLegalShieldUSPage: D2CLegalShieldUSPage;
let checkoutPersonalInfoPage: CheckoutPersonalInfoPage;
let checkoutPaymentsBankDraftPage: CheckoutPaymentsBankDraftPage;
let commonLoginPage: CommonLoginPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  d2CLegalShieldCaPage = new D2CLegalShieldCaPage(page);
  checkoutPersonalInfoPage = new CheckoutPersonalInfoPage(page);
  checkoutPaymentsBankDraftPage = new CheckoutPaymentsBankDraftPage(page);
  d2CLegalShieldUSPage = new D2CLegalShieldUSPage(page);
  commonLoginPage = new CommonLoginPage(page);
  // test.slow triples the default wait times
  test.slow();
  // await checkoutConfirmationPage.navigateToCheckoutConfirmationPage('Alaska');
});
test('D2E LegalShield CA using Testing Harness', async () => {
  test.slow;
  await test.step('Navigate to Testing Harness', async () => {
    await d2CLegalShieldCaPage.navigateToTestingHarnessPage('d2cLegalShieldCA');
  });
  await test.step('Select Direct to Consumer', async () => {
    await d2CLegalShieldCaPage.selectDirecttoConsumerD2C('0');
  });
  await test.step('Click Legalshield Canada', async () => {
    await d2CLegalShieldUSPage.clickOnALineOfBusiness(DataUtils.data.testingHarness.lineOfBusiness.LegalShieldCanada, 'LegalShieldCanada');
  });
  await test.step('Select your region', async () => {
    await d2CLegalShieldCaPage.selectYourRegion(DataUtils.data.testingHarness.ca.bd.province.BC);
  });
  await test.step('Add Plan and some Supplements', async () => {
    await d2CLegalShieldCaPage.addPlanAndSomeSupplements('d2cLegalShieldCA', [
      DataUtils.data.testingHarness.plans.ca.LegalPlan,
      DataUtils.data.testingHarness.plans.ca.LegalPlanRideShareandDeliverySupplement,
      DataUtils.data.testingHarness.plans.ca.LegalPlanTrialDefenceSupplement,
    ]);
  });
  await test.step('Select Checkout, create a new account or sign in as an existing user. > Verify URL is correct', async () => {
    await d2CLegalShieldCaPage.selectCheckout('LegalShieldCA');
  });
  await test.step('Sign in as an existing user', async () => {
    await commonLoginPage.login(basicUser.email as string, basicUser.password as string);
  });
  await test.step('Complete BD transaction and continue to confirmation page.', async () => {
    await checkoutPersonalInfoPage.changeAddressCanada(DataUtils.data.testingHarness.ca.bd.province.BC);
    await checkoutPaymentsBankDraftPage.clickSaveAndContinue();
    await checkoutPaymentsBankDraftPage.clickBankDraftBtn();
    await checkoutPaymentsBankDraftPage.fillCaBankDraftFormAndSubmit();
    await d2CLegalShieldCaPage.assertWelcomelabel();
  });
});
test('D2C LegalShield CA Regions from Dropdown in Test Harness', async () => {
  test.slow;
  await test.step('Navigate to Testing Harness', async () => {
    await d2CLegalShieldCaPage.navigateToTestingHarnessPage('d2cLegalShieldCA');
  });
  await test.step('Select Direct to Consumer', async () => {
    await d2CLegalShieldCaPage.selectDirecttoConsumerD2C('0');
  });
  await test.step('Click Legalshield Canada', async () => {
    await d2CLegalShieldUSPage.clickOnALineOfBusiness(DataUtils.data.testingHarness.lineOfBusiness.LegalShieldCanada, 'LegalShieldCanada');
  });
  await test.step('Select your region', async () => {
    await d2CLegalShieldCaPage.selectYourRegion(DataUtils.data.testingHarness.ca.bd.province.BC);
  });
  await test.step('Assert region dropdown values are displaying as expected', async () => {
    await d2CLegalShieldCaPage.assertRegionsDropdown();
  });
});
