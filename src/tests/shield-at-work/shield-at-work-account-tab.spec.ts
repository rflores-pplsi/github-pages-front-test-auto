import { test } from '@playwright/test';

import { ShieldAtWorkAccountTab } from '../../page-objects/shield-at-work/shield-at-work-account-tab.page';

let shieldAtWorkAccountTab: ShieldAtWorkAccountTab;

test.beforeEach(async ({ page }) => {
  shieldAtWorkAccountTab = new ShieldAtWorkAccountTab(page);
});

test('Company information is displayed on account tab', async () => {
  console.log('Company information is displayed on account tab');
  await shieldAtWorkAccountTab.navigateToGroupPage();
  await shieldAtWorkAccountTab.assertCompanyInformation();
});

test('Contact information is displayed on account tab', async () => {
  console.log('Contact information is displayed on account tab');
  await shieldAtWorkAccountTab.navigateToGroupPage();
  await shieldAtWorkAccountTab.assertContactInformation();
});

test('Address is displayed on account tab', async () => {
  console.log('Address is displayed on account tab');
  await shieldAtWorkAccountTab.navigateToGroupPage();
  await shieldAtWorkAccountTab.assertAddress();
});

test('Available Plan Offerings is displayed on account tab', async () => {
  console.log('Available Plan Offerings is displayed on account tab');
  await shieldAtWorkAccountTab.navigateToGroupPage();
  await shieldAtWorkAccountTab.assertAvailablePlanOfferings();
});

test('State is displayed on the account tab', async () => {
  console.log('State and payment frequency are displayed on the account tab');
  await shieldAtWorkAccountTab.navigateToGroupPage();
  await shieldAtWorkAccountTab.assertStateIsDisplayed();
});

test('Payment frequency are displayed on the account tab', async () => {
  console.log('Payment frequency are displayed on the account tab');
  await shieldAtWorkAccountTab.navigateToGroupPage();
  await shieldAtWorkAccountTab.assertPaymentFrequencyIsDisplayed();
});

test('Benefits details displays after clicking on hyperlink in available plan offerings section', async () => {
  console.log('Benefits details displays after clicking on hyperlink in available plan offerings section');
  await shieldAtWorkAccountTab.navigateToGroupPage();
  await shieldAtWorkAccountTab.clickLnkLegalPlusPlan();
  await shieldAtWorkAccountTab.assertBenefitsDetailsPage();
});
