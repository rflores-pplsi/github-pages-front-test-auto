import { test } from '@playwright/test';
import { AccountPlansPage } from '../../page-objects/account/account-plans.page';
import { PlansTable } from '../../page-objects/account/account.helpers';
import { withPlans } from '../../utils/user.utils';

// Define Pages
let accountPlansPage: AccountPlansPage;
let plansTable: PlansTable;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  accountPlansPage = new AccountPlansPage(page);
  // Login with accounts that have all necessary plans and navigate to accounts plan page
  await accountPlansPage.loginToNavigateToAccountsPlanPage(withPlans.email, withPlans.password);
  // Capture a table of available plans for the account logged in
  plansTable = await accountPlansPage.createPlansTable();
});

// Click website link for a ID Shield for Business plan and redirect to IDS4B page
test('Click website link for an ID Shield for Business plan and redirect to IDS4B application', async ({ page }) => {
  console.log('Test Case: Click website link for an ID Shield for Business plan and redirect to IDS4B application');
  // Click on the website link based on the plan name
  await accountPlansPage.clickGoToWebsiteLink(plansTable, 'IDShield for Business');
  // Confirm redirect to IDShield for Business App
  await accountPlansPage.assertIdShieldForBusinessPageUrl();
});

test('Click website link for a Legal Plan Family plan and redirect to Legal application', async ({ page }) => {
  console.log('Test Case: Click website link for a ID Shield for Business plan and redirect to the Legal application');
  // Click on the website link based on the plan name
  await accountPlansPage.clickGoToWebsiteLink(plansTable, 'Legal Plan Family');
  // Confirm redirect to Legal App
  await accountPlansPage.assertLegalPageUrl();
});

test('Click website link for a IDShield Individual plan and redirect to IDS application', async ({ page }) => {
  console.log('Test Case: Click website link for a IDShield Individual plan and redirect to the IDS application');
  // Click on the website link based on the plan name
  await accountPlansPage.clickGoToWebsiteLink(plansTable, 'IDShield Individual');
  // Confirm redirect to IDShield App
  await accountPlansPage.assertIdShieldPageUrl();
});

test('Click website link for a Launch plan and redirect to mybusiness application', async ({ page }) => {
  console.log('Test Case: Click website link for a Launch plan and redirect to mybusiness application');
  // Click on the website link based on the plan name
  await accountPlansPage.clickGoToWebsiteLink(plansTable, 'Launch');
  // Confirm redirect to My Business App
  await accountPlansPage.assertLaunchPageUrl();
});
