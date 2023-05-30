import { test } from '@playwright/test';
import { ClassicShieldAtWorkAccountTab } from '../../../page-objects (Archived)/classic-shield-at-work/classic-account-tab.page';

let classicShieldAtWorkAccountTab: ClassicShieldAtWorkAccountTab;

test.beforeEach(async ({ page }) => {
  classicShieldAtWorkAccountTab = new ClassicShieldAtWorkAccountTab(page);
  await classicShieldAtWorkAccountTab.navigateToClassicShieldAtWork();
});

test('Security page is displayed on the account information page', async () => {
  await classicShieldAtWorkAccountTab.loginWithCredentials();
  await classicShieldAtWorkAccountTab.assertSecurityPage();
});

test('Edit Employee button redirects to the correct page to update the number of employees', async () => {
  await classicShieldAtWorkAccountTab.loginWithCredentials();
  await classicShieldAtWorkAccountTab.assertEditEmployeePage();
});
