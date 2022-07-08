import { test } from '@playwright/test';

import { ShieldAtWorkAccountTab } from '../../page-objects/shield-at-work/shield-at-work-account-tab.page';

let shieldAtWorkAccountTab: ShieldAtWorkAccountTab;

test.beforeEach(async ({ page }) => {
  shieldAtWorkAccountTab = new ShieldAtWorkAccountTab(page);
  await shieldAtWorkAccountTab.navigateToShieldAtWorkAccountTab();
});

test('Company information is displayed on account tab', async ({ page }) => {
  console.log('Company information is displayed on account tab');
  await shieldAtWorkAccountTab.navigateToShieldAtWorkAccountTab();
  await shieldAtWorkAccountTab.assertCompanyInformation();
});

test('Contact information is displayed on account tab', async ({ page }) => {
  console.log('Contact information is displayed on account tab');
  await shieldAtWorkAccountTab.navigateToShieldAtWorkAccountTab();
  await shieldAtWorkAccountTab.assertContactInformation();
});

test('Address is displayed on account tab', async ({ page }) => {
  console.log('Address is displayed on account tab');
  await shieldAtWorkAccountTab.navigateToShieldAtWorkAccountTab();
  await shieldAtWorkAccountTab.assertAddress();
});

test('Available Plan Offerings is displayed on account tab', async ({ page }) => {
  console.log('Available Plan Offerings is displayed on account tab');
  await shieldAtWorkAccountTab.navigateToShieldAtWorkAccountTab();
  await shieldAtWorkAccountTab.assertAvailablePlanOfferings();
});

test('State is displayed on the account tab', async ({ page }) => {
  console.log('State and payment frequency are displayed on the account tab');
  await shieldAtWorkAccountTab.navigateToShieldAtWorkAccountTab();
  await shieldAtWorkAccountTab.assertStateIsDisplayed();
});

test('Payment frequency are displayed on the account tab', async ({ page }) => {
  console.log('Payment frequency are displayed on the account tab');
  await shieldAtWorkAccountTab.navigateToShieldAtWorkAccountTab();
  await shieldAtWorkAccountTab.assertPaymentFrequencyIsDisplayed();

});
