import { test } from '@playwright/test';

import { ShieldAtWorkEnrollmentTab } from '../../page-objects/shield-at-work/shield-at-work-enrollment-tab.page';

let shieldAtWorkEnrollmentTab: ShieldAtWorkEnrollmentTab;

test.beforeEach(async ({ page }) => {
  shieldAtWorkEnrollmentTab = new ShieldAtWorkEnrollmentTab(page);
  test.slow();
  await shieldAtWorkEnrollmentTab.navigateToShieldAtWorkEnrollmentTab();
});

test('Manage Site button is enabled on the enrollment tab', async ({ page }) => {
  console.log('Manage Site button is enabled on the enrollment tab');
  await shieldAtWorkEnrollmentTab.navigateToShieldAtWorkEnrollmentTab();
  await shieldAtWorkEnrollmentTab.clickEnrollmentTab();
  await shieldAtWorkEnrollmentTab.assertManageSiteButtonIsVisible();
});

test('Enrollment information is displayed on the enrollment page', async ({ page }) => {
  console.log('Enrollment information is displayed on the enrollment page');
  await shieldAtWorkEnrollmentTab.navigateToShieldAtWorkEnrollmentTab();
  await shieldAtWorkEnrollmentTab.clickEnrollmentTab();
  await shieldAtWorkEnrollmentTab.assertEnrollmentInformationIsDisplayed();
});
