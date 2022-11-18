import { test } from '@playwright/test';
import { CheckoutPersonalInfoPage } from '../../page-objects/checkout/checkout-personal-info.page';
import { basicUser } from '../../utils/user.utils';
import UrlsUtils from '../../utils/urls.utils';

// define the instance of Page declaration
let checkoutPersonalInfoPage: CheckoutPersonalInfoPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  test.slow();
  checkoutPersonalInfoPage = new CheckoutPersonalInfoPage(page, 'd2cIdShieldUS', ['IDSF3']);
});

test('Verify Personal Information Section Header Displays', async () => {
  console.log('Test Case: Verify Personal Information Section Header Displays');
  await checkoutPersonalInfoPage.goTo(UrlsUtils.testHarnessUrls.legalShield.url);
  await checkoutPersonalInfoPage.selectRegionFromDropdown('Colorado');
  await checkoutPersonalInfoPage.clickProductButtonByShortCode('LPUS21');
  await checkoutPersonalInfoPage.clickCheckoutButton();
  await checkoutPersonalInfoPage.login(basicUser.email, basicUser.password);
  await checkoutPersonalInfoPage.assertPersonalInfoHeaderIsDisplayed();
});

test('Verify Error for all fields on Personal Info Page Displays', async () => {
  console.log('Test Case: Verify Error for all fields on Personal Info Page Displays');
  await checkoutPersonalInfoPage.clearAllFieldsOnPersonalInfoPageAndSave();
  await checkoutPersonalInfoPage.assertPersonalInfoPageErrorsAreDisplayed();
});
