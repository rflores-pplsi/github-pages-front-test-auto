import { test } from '@playwright/test';
import { basicUser } from '../../utils/user.utils';
import { AccountNavigationPage } from '../../page-objects/account/account-navigation.page';

// Page Definition
let accountNavigationPage: AccountNavigationPage;

test.beforeEach(async ({ page }) => {
  // Create instance of this page
  accountNavigationPage = new AccountNavigationPage(page);
  await accountNavigationPage.navigateToAccountPlansPage();
  await accountNavigationPage.login(basicUser.email, basicUser.password);
  // Wait for page to finish loading
});

// Navigate to Plans Page from Account Navigation
test('Navigate to plans page', async ({ page }) => {
  console.log('Test Case: Navigate to plans page');
  // Verify the Plans Link Works. Click Plans Link
  await accountNavigationPage.clickProfileLink();
  await accountNavigationPage.clickPlansLink();
  // Confirm URL of the Profile Page
  await accountNavigationPage.assertAccountPlansUrl();
});

// Navigate to Profile Page from Account Navigation
test('Navigate to profile page', async ({ page }) => {
  console.log('Test Case: Navigate to profile page');
  // Click Profile Link
  await accountNavigationPage.clickProfileLink();
  // Confirm URL of the Profile Page
  await accountNavigationPage.assertAccountProfileUrl();
});

// Navigate to Payments Page from Account Navigation
test('Navigate to payments page', async ({ page }) => {
  console.log('Test Case: Navigate to payments page');
  // Click Payments Link
  await accountNavigationPage.clickPaymentsLink();
  // Confirm URL of the Profile Page
  await accountNavigationPage.assertAccountPaymentsUrl();
});

// Navigate to Security Page from Account Navigation
test('Navigate to security page', async ({ page }) => {
  console.log('Test Case: Navigate to security page');
  // Click Security Link
  await accountNavigationPage.clickSecurityLink();
  // Confirm URL of the Profile Page
  await accountNavigationPage.assertAccountSecurityUrl();
});

// Navigate to Resources Page from Account Navigation
test('Navigate to resources page', async ({ page }) => {
  console.log('Test Case: Navigate to resources page');
  // Click Resources Link
  await accountNavigationPage.clickResourcesLink();
  // Confirm URL of the Profile Page
  await accountNavigationPage.assertAccountResourcesUrl();
});

// Navigate to Preferences Page from Account Navigation
test('Navigate to preferences page', async ({ page }) => {
  console.log('Test Case: Navigate to preferences resources page');
  // Click Preferences Link
  await accountNavigationPage.clickPreferencesLink();
  // Confirm URL of the Profile Page
  await accountNavigationPage.assertAccountPreferencesUrl();
});

// Navigate to MultiFactor Page from Account Navigation
test('Navigate to multifactor page', async ({ page }) => {
  console.log('Test Case: Navigate to multifactor page');
  // Click Resources Link
  await accountNavigationPage.clickMfaLink();
  // Confirm URL of the Profile Page
  await accountNavigationPage.assertAccountMultifactorUrl();
});
