import { test } from '@playwright/test';
import { AccountPlansPage } from '../../page-objects (Archived)/account/account-plans.page';
import { withPlans } from '../../utils/user.utils';

// Define Pages
let accountPlansPage: AccountPlansPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  console.log('Before Each:');
  accountPlansPage = new AccountPlansPage(page);
  // Login with accounts that have all necessary plans and navigate to accounts plan page
  await accountPlansPage.loginToNavigateToAccountsPlanPage(withPlans.email, withPlans.password);
  // Capture a table of available plans for the account logged in
  await accountPlansPage.createPlansTable();
});

// Click website link for a ID Shield for Business plan and redirect to IDS4B page
test('Click website link for an ID Shield for Business plan and redirect to IDS4B application', async () => {
  console.log('Test Case: Click website link for an ID Shield for Business plan and redirect to IDS4B application');
  // Click on the website link based on the plan name
  await accountPlansPage.clickGoToWebsiteLink('IDShield for Business');
  // Confirm redirect to IDShield for Business App
  await accountPlansPage.assertIdShieldForBusinessPageUrl();
});

test('Click website link for a Legal Plan Family plan and redirect to Legal application', async () => {
  console.log('Test Case: Click website link for a ID Shield for Business plan and redirect to the Legal application');
  // Click on the website link based on the plan name
  await accountPlansPage.clickGoToWebsiteLink('Legal Plan Family');
  // Confirm redirect to Legal App
  await accountPlansPage.assertLegalPageUrl();
});

test('Click website link for a IDShield Individual plan and redirect to IDS application', async () => {
  console.log('Test Case: Click website link for a IDShield Individual plan and redirect to the IDS application');
  // Click on the website link based on the plan name
  await accountPlansPage.clickGoToWebsiteLink('IDShield Individual');
  // Confirm redirect to IDShield App
  await accountPlansPage.assertIdShieldPageUrl();
});

test('Click website link for a Launch plan and redirect to mybusiness application', async () => {
  console.log('Test Case: Click website link for a Launch plan and redirect to mybusiness application');
  // Click on the website link based on the plan name
  await accountPlansPage.clickGoToWebsiteLink('Small Business Launch Supplement');
  // Confirm redirect to My Business App
  await accountPlansPage.assertLaunchPageUrl();
});
