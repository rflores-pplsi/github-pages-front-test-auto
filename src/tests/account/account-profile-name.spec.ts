import { test } from '@playwright/test';
import { AccountProfileNamePage } from '../../page-objects/account/account-profile.name.page';

// create instance of Page
let accountProfileNamePage: AccountProfileNamePage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  accountProfileNamePage = new AccountProfileNamePage(page);
  accountProfileNamePage.navigateToProfileNamePage();
});

// Navigate to the Profile Name page
test('Edit Names', async ({ page }) => {
  console.log('Test Case: Edit Names');
  // Edit First Name Text Box
  await accountProfileNamePage.editNameForm();
  // Verify the landing on the Profile Name page
  await accountProfileNamePage.assertProfileNamePage();
});
