import { test } from '@playwright/test';
import { ClassicShieldAtWorkAccountTab } from '../../page-objects/classic-shield-at-work/classic-account-tab.page';

let classicShieldAtWorkAccountTab: ClassicShieldAtWorkAccountTab;

test.beforeEach(async ({ page }) => {
  classicShieldAtWorkAccountTab = new ClassicShieldAtWorkAccountTab(page);
  await classicShieldAtWorkAccountTab.navigateToClassicShieldAtWork();
});

test('Security page is displayed on the account information page', async ({ page }) => {
  await classicShieldAtWorkAccountTab.loginWithCredentials();
  await classicShieldAtWorkAccountTab.assertSecurityPage();
});
