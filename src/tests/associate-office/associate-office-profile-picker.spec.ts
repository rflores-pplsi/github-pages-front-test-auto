import { test } from '@playwright/test';
import { ProfilePickerPage } from '../../page-objects (Archived)/associate-office/associate-office-profile-picker.page';

// prod and uat only, not available in dev
// create instance of Page
let profilePickerPage: ProfilePickerPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  profilePickerPage = new ProfilePickerPage(page);
  await profilePickerPage.navigateToProfilePickerPage();
});

test('The Profile Picker Page is loading and the Left Nav Menu is not appearing', async () => {
  await profilePickerPage.assertProfilePickerPage();
  await profilePickerPage.assertNoLeftNavMenuOnPage();
});

test('Verify that the Profile Picker has multiple accounts', async () => {
  await profilePickerPage.assertAssociateAccounts(1);
  await profilePickerPage.assertAssociateAccounts(2);
  await profilePickerPage.assertAssociateAccounts(3);
  await profilePickerPage.assertAssociateAccounts(4);
  await profilePickerPage.assertAssociateAccounts(5);
  await profilePickerPage.assertAssociateAccounts(6);
  await profilePickerPage.assertAssociateAccounts(7);
  await profilePickerPage.assertAssociateAccounts(8);
  await profilePickerPage.assertAssociateAccounts(9);
});

test('One of the Profile Picker accounts is redirecting correctly', async () => {
  await profilePickerPage.assertProfilePickerPage();
  // await profilePickerPage.clickOnAccount(3);
  await profilePickerPage.assertLSEngagePage();
});

test('One of the Profile Picker accounts is redirecting correctly 2', async () => {
  await profilePickerPage.assertProfilePickerPage();
  // await profilePickerPage.clickOnAccount(8);
  await profilePickerPage.assertLSEngagePage();
});
