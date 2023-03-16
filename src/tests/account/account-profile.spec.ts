import { expect, test } from '@playwright/test';
import { AccountProfilePage } from '../../page-objects (Archived)/account/account-profile.page';

// create instance of Page
let accountProfilePage: AccountProfilePage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  accountProfilePage = new AccountProfilePage(page);
  await accountProfilePage.navigateToProfilePage();
});

// Edit Profile Name button should be disabled
test('Verify the Edit button for Name should be disabled', async () => {
  console.log('Test Case: Verify the Edit button for Name should be disabled');
  // Verify the landing on the Profile Name page
  await accountProfilePage.assertNameEditButtonIsDisabled();
});

// Navigate to the Profile Date of Birth page
test('Navigate to the Profile Date of Birth page by clicking the Date of Birth Edit button @visual', async ({ page }) => {
  test.skip();
  // TODO: improve reliability by ensuring a protected account is used OR do not use snapshot
  console.log('Test Case: Navigate to the Profile Date of Birth page by clicking the Date of Birth Edit button');
  // Clicking the Date of Birth Edit button
  await accountProfilePage.clickEditDateOfBirthButton();
  // Verify the landing on the Profile Date of Birth page
  await accountProfilePage.assertProfileDateOfBirthPageUrl();
  expect(
    await page.screenshot({
      fullPage: true,
    })
  ).toMatchSnapshot('ProfileDOBPage.png');
});

// Navigate to the Profile Phone Number page
test('Navigate to the Profile Phone Number page by clicking the Phone Number Edit button @ visual', async ({ page }) => {
  console.log('Test Case: Navigate to the Profile Phone Number page by clicking the Phone Number Edit button');
  test.skip();
  // TODO: improve reliability by ensuring a protected account is used OR do not use snapshot
  // Clicking the Phone Number button
  await accountProfilePage.clickEditPhoneNumberButton();
  // Verify the landing on the Profile Phone Number page
  await accountProfilePage.assertProfilePhoneNumberPageUrl();
  expect(
    await page.screenshot({
      fullPage: true,
    })
  ).toMatchSnapshot('ProfilePhoneNumberPage.png');
});

// Edit Profile Address button should be disabled
test('Verify the Edit button for Address should be disabled', async () => {
  console.log('Test Case: Verify the Edit button for Address should be disabled');
  // Verify the landing on the Profile Address page
  await accountProfilePage.assertAddressButtonIsDisabled();
});

// Navigate to the Profile Email page
test('Navigate to the Profile Email Address page by clicking the Email Address Edit button @visual', async ({ page }) => {
  console.log('Test Case: Navigate to the Profile Email Address page by clicking the Email Address Edit button');
  test.skip();
  // TODO: improve reliability by ensuring a protected account is used OR do not use snapshot
  // Clicking the Email button
  await accountProfilePage.clickEditEmailButton();
  // Verify the landing on the Profile Email page
  await accountProfilePage.assertProfileEmailPageUrl();
  expect(
    await page.screenshot({
      fullPage: true,
    })
  ).toMatchSnapshot('ProfileEmailAddressPage.png');
});
