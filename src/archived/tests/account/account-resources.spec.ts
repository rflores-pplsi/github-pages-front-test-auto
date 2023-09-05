import { test } from '@playwright/test';
import { AccountResourcesPage } from '../../page-objects-old/account/account-resources.page';
import { basicUser } from '../../../utils/user.utils';

// Define Pages
let accountResourcesPage: AccountResourcesPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  accountResourcesPage = new AccountResourcesPage(page);
  // Attempt to reach Accounts Resource Page
  await accountResourcesPage.navigateToAccountResourcesPage();
  // Login when prompted and successful login redirects to Accounts Resource Page
  await accountResourcesPage.login(basicUser.email, basicUser.password);
});

test('Forms Logo is displayed', async () => {
  console.log('Test Case: Forms Logo is displayed');
  // Confirm Forms Logo is displayed
  await accountResourcesPage.assertFormsLogoIsDisplayed();
});

test('Forms label is displayed', async () => {
  console.log('Test Case: Forms label is displayed');
  // Confirm Forms Label is displayed
  await accountResourcesPage.assertFormsLabelIsDisplayed();
});

test('Click website link for Forms resources and redirect to Forms application', async () => {
  console.log('Test Case: Click website link for Forms resources and redirect to Forms application');
  // Click on the website link for Forms resources
  await accountResourcesPage.clickFormsGoToWebsiteLink();
  // Confirm redirect to Forms application
  await accountResourcesPage.assertFormsPageUrl();
});

test('Member Perks Logo is displayed', async () => {
  console.log('Test Case: Member Perks Logo is displayed');
  // Confirm Member Perks Logo is displayed
  await accountResourcesPage.assertMemberPerksLogoIsDisplayed();
});

test('Member Perks label is displayed', async () => {
  console.log('Test Case: Member Perks label is displayed');
  // Confirm Member Perks Logo is displayed
  await accountResourcesPage.assertMemberPerksLabelIsDisplayed();
});

test('Click website link for Member Perks resources and redirect to Member Perks application', async () => {
  console.log('Test Case: Click website link for Member Perks resources and redirect to Member Perks application');
  // Click on the website link based for Member Perks
  await accountResourcesPage.clickMemberPerksGoToWebsiteLink();
  // Confirm redirect to IDShield App
  await accountResourcesPage.assertMemberPerksPageUrl();
});
