import { test } from '@playwright/test';
import { CheckoutPersonalInfoPage } from '../../page-objects-refactored/checkout/checkout-personal-info.page';
import DataUtils from '../../utils/Tests.Data';
import UrlsUtils from '../../utils/urls.utils';

// define the instance of Page declaration
let checkoutPersonalInfoPage: CheckoutPersonalInfoPage;

// Setup environment before each test
test.beforeEach(async ({ context, page }) => {
  test.slow();
  checkoutPersonalInfoPage = new CheckoutPersonalInfoPage(context, page, 'd2cIdShieldUS', ['IDSF3']);
  await checkoutPersonalInfoPage.navigateToPersonalInfoPage(page, 'Virginia', UrlsUtils.testHarnessUrls.d2c.url, 'legalShield', '2', [
    DataUtils.data.testingHarness.plans.us.LegalPlan,
  ]);
  // await checkoutPersonalInfoPage.selectRegionFromDropdown('Colorado');
  // await checkoutPersonalInfoPage.clickProductButtonByShortCode('LPUS21');
  // await checkoutPersonalInfoPage.clickCheckoutButton();
  // await checkoutPersonalInfoPage.login(basicUser.email, basicUser.password);
});

test('Verify Personal Information Section Header Displays', async () => {
  await checkoutPersonalInfoPage.assertPersonalInfoHeaderIsDisplayed();
});

test('Verify Error for all fields on Personal Info Page Displays', async () => {
  console.log('Test Case: Verify Error for all fields on Personal Info Page Displays');
  await checkoutPersonalInfoPage.clearAllFieldsOnPersonalInfoPageAndSave();
  await checkoutPersonalInfoPage.assertPersonalInfoPageErrorsAreDisplayed();
});
