import { test } from '@playwright/test';
import { LoginPage } from '../../../page-objects (Archived)/login/login.page';
import { ProfilePickerPage } from '../../../page-objects (Archived)/associate-office/associate-office-profile-picker.page';
import UrlsUtils from '../../../utils/urls.utils';
import { associateBasic, associateLegacy, associateAdvantagePlus } from '../../../utils/user.utils';

// Declare Page Variable for This Page
let loginPage: LoginPage;
let profilePickerPage: ProfilePickerPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  // Create instance of This Page Object
  loginPage = new LoginPage(page);
  profilePickerPage = new ProfilePickerPage(page);
  await loginPage.goTo(UrlsUtils.channelsUrls.taxForm.url);
});

test('BASIC tier level associate logs in with valid username and password', async () => {
  console.log('Test Case: BASIC tier level associate log in');
  await loginPage.login(associateBasic.username, associateBasic.password);
  // Confirm that login is successful
  await profilePickerPage.assertLoginUrl();
});

test('LEGACY tier level associate logs in with valid username and password', async () => {
  console.log('Test Case: LEGACY tier level associate log in');
  await loginPage.login(associateLegacy.username, associateLegacy.password);
  // Confirm that login is successful
  await profilePickerPage.assertLoginUrl();
});

test('ADVANTAGE PLUS tier level associate logs in with valid username and password', async () => {
  console.log('Test Case: ADVANTAGE PLUS tier level associate log in');
  await loginPage.login(associateAdvantagePlus.username, associateAdvantagePlus.password);
  // Confirm that login is successful
  await profilePickerPage.assertLoginUrl();
});
