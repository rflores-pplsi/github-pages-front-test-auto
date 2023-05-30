import { test } from '@playwright/test';
import { AccountProfileDoBPage } from '../../../page-objects (Archived)/account/account-profile-dob.page';

// create instance of Page
let accountProfileDoBPage: AccountProfileDoBPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  // Initialize an instance of AccountProfileDoBPage class
  accountProfileDoBPage = new AccountProfileDoBPage(page);
  // Navigate to Profile page
  accountProfileDoBPage.navigateProfileDateOfBirthPage();
});

// Edit Date Of Birth
test('Edit Date of Birth', async () => {
  console.log('Test Case: Edit Date of Birth');
  // Edit Date of Birth Text Box
  await accountProfileDoBPage.editDateOfBirthTxtBox();
  // Click on save button
  await accountProfileDoBPage.clickSaveDateOfBirthButton();
  // Verify that the date of birth is updated
  await accountProfileDoBPage.assertDateOfBirthOnProfileDOBPage();
});
