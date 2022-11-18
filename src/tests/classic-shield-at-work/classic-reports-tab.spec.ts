import { test } from '@playwright/test';
import { ClassicShieldAtWorkReportsTab } from '../../page-objects/classic-shield-at-work/classic-reports-tab.page';

let classicShieldAtWorkReportsTab: ClassicShieldAtWorkReportsTab;

test.beforeEach(async ({ page }) => {
  classicShieldAtWorkReportsTab = new ClassicShieldAtWorkReportsTab(page);
  await classicShieldAtWorkReportsTab.navigateToClassicShieldAtWork();
});

test('Reports page is displayed, Submit button is enabled', async () => {
  await classicShieldAtWorkReportsTab.loginWithCredentials();
  await classicShieldAtWorkReportsTab.assertReportsPage();
});
