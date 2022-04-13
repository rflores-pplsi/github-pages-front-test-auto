import { test } from '@playwright/test';

import { ShieldAtWorkAccountTab } from '../../page-objects/shield-at-work/shield-at-work-account-tab.page';

let shieldAtWorkAccountTab: ShieldAtWorkAccountTab;

test.beforeEach(async ({ page }) => {
  shieldAtWorkAccountTab = new ShieldAtWorkAccountTab(page);
  await shieldAtWorkAccountTab.navigateToShieldAtWorkAccountTab();
});

test('Company information is displayed on account tab', async ({ page }) => {
  await shieldAtWorkAccountTab.navigateToShieldAtWorkAccountTab();
  // Verify that company information  is displayed
  await shieldAtWorkAccountTab.assertCompanyInformation();
});

test('Contact information is displayed on account tab', async ({ page }) => {
  await shieldAtWorkAccountTab.navigateToShieldAtWorkAccountTab();
  // Verify that contact information  is displayed
  await shieldAtWorkAccountTab.assertContactInformation();
});

test('Address is displayed on account tab', async ({ page }) => {
  await shieldAtWorkAccountTab.navigateToShieldAtWorkAccountTab();
  // Verify that address is displayed
  await shieldAtWorkAccountTab.assertAddress();
});

test('Available Plan Offerings is displayed on account tab', async ({ page }) => {
  await shieldAtWorkAccountTab.navigateToShieldAtWorkAccountTab();
  // Verify that available plan offerings is displayed
  await shieldAtWorkAccountTab.assertAvailablePlanOfferings();
});

test('State drop down is selectable on account tab', async ({ page }) => {
  await shieldAtWorkAccountTab.navigateToShieldAtWorkAccountTab();
  // Verify that TX state is selectable from drop down
  await shieldAtWorkAccountTab.selectState();
});
