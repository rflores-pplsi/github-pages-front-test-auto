import { test } from '@playwright/test';
import { AccountProfilePage } from '../../page-objects/account/account-profile.page';

// create instance of Page
let accountProfilePage: AccountProfilePage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  accountProfilePage = new AccountProfilePage(page);
  await accountProfilePage.navigateToProfilePage();
});

// Edit Profile Name button should be disabled
test('Verify the Edit button for Name should be disabled', async ({ page }) => {
  console.log('Test Case: Verify the Edit button for Name should be disabled');
  // Verify the landing on the Profile Name page
  await accountProfilePage.assertNameEditButtonIsDisabled();
});

// Navigate to the Profile Date of Birth page
test('Navigate to the Profile Date of Birth page by clicking the Date of Birth Edit button', async ({ page }) => {
  console.log('Test Case: Navigate to the Profile Date of Birth page by clicking the Date of Birth Edit button');
  // Clicking the Date of Birth Edit button
  await accountProfilePage.clickEditDateOfBirthButton();
  // Verify the landing on the Profile Date of Birth page
  await accountProfilePage.assertProfileDateOfBirthPageUrl();
});

// Navigate to the Profile Phone Number page
test('Navigate to the Profile Phone Number page by clicking the Phone Number Edit button', async ({ page }) => {
  console.log('Test Case: Navigate to the Profile Phone Number page by clicking the Phone Number Edit button');
  // Clicking the Phone Number button
  await accountProfilePage.clickEditPhoneNumberButton();
  // Verify the landing on the Profile Phone Number page
  await accountProfilePage.assertProfilePhoneNumberPageUrl();
});

// Edit Profile Address button should be disabled
test('Verify the Edit button for Address should be disabled', async ({ page }) => {
  console.log('Test Case: Verify the Edit button for Address should be disabled');
  // Verify the landing on the Profile Address page
  await accountProfilePage.assertAddressButtonIsDisabled();
});

// Navigate to the Profile Email page
test('Navigate to the Profile Email Address page by clicking the Email Address Edit button', async ({ page }) => {
  console.log('Test Case: Navigate to the Profile Email Address page by clicking the Email Address Edit button');
  // Clicking the Email button
  await accountProfilePage.clickEditEmailButton();
  // Verify the landing on the Profile Email page
  await accountProfilePage.assertProfileEmailPageUrl();
});
