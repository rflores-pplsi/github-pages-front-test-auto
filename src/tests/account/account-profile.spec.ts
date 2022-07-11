import { expect, test } from '@playwright/test';
import { AccountProfilePage } from '../../page-objects/account/account-profile.page';

// create instance of Page
let accountProfilePage: AccountProfilePage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  accountProfilePage = new AccountProfilePage(page);
  await accountProfilePage.navigateToProfilePage();
});

// Navigate to the Profile Name page
// Added .fixme since the Edit Name button is now disabled
test.fixme('Navigate to the Profile Name page by clicking the Name Edit button', async ({ page }) => {
  console.log('Test Case: Navigate to the Profile Name page by clicking the Name Edit button');
  // Clicking the Name Edit button
  await accountProfilePage.clickEditNameButton();
  // Verify the landing on the Profile Name page
  await accountProfilePage.assertProfileNamePage();
  expect(
    await page.screenshot({
      fullPage: true,
    })
  ).toMatchSnapshot('ProfileNamePage.png');
});

// Navigate to the Profile Date of Birth page
test('Navigate to the Profile Date of Birth page by clicking the Date of Birth Edit button @smoke @visual', async ({ page }) => {
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
test('Navigate to the Profile Phone Number page by clicking the Phone Number Edit button @smoke @ visual', async ({ page }) => {
  console.log('Test Case: Navigate to the Profile Phone Number page by clicking the Phone Number Edit button');
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

// Navigate to the Profile Address page
// Added .fixme since the Edit Address button is now disabled
test.fixme('Navigate to the Profile Address page by clicking the Address Edit button', async ({ page }) => {
  console.log('Test Case: Navigate to the Profile Address page by clicking the Address Edit button');
  // Clicking the Address button
  await accountProfilePage.clickEditAddressButton();
  // Verify the landing on the Profile Address page
  await accountProfilePage.assertProfileAddressPageUrl();
  expect(
    await page.screenshot({
      fullPage: true,
    })
  ).toMatchSnapshot('ProfileAddressPage.png');
});

// Navigate to the Profile Email page
test('Navigate to the Profile Email Address page by clicking the Email Address Edit button @smoke @visual', async ({ page }) => {
  console.log('Test Case: Navigate to the Profile Email Address page by clicking the Email Address Edit button');
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
