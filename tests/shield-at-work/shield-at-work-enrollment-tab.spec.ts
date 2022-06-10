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
  await shieldAtWorkEnrollmentTab.groupSearchByGroupNumber('207196');
  await shieldAtWorkEnrollmentTab.clickEnrollmentTab();
  await shieldAtWorkEnrollmentTab.assertManageSiteButtonIsVisible();
});

test('Enrollment information is displayed on the enrollment page', async ({ page }) => {
  console.log('Enrollment information is displayed on the enrollment page');
  await shieldAtWorkEnrollmentTab.groupSearchByGroupNumber('207196');
  await shieldAtWorkEnrollmentTab.clickEnrollmentTab();
  await shieldAtWorkEnrollmentTab.assertEnrollmentInformation();
});

test('Message "There are no members to display for group based on status filter" is displayed on the enrollment page ', async ({ page }) => {
  console.log('Message "There are no members to display for group based on status filter" is displayed on the enrollment page ');
  await shieldAtWorkEnrollmentTab.groupSearchByGroupNumber('207196');
  await shieldAtWorkEnrollmentTab.clickEnrollmentTab();
  await shieldAtWorkEnrollmentTab.assertMessageIsDisplayed();
});
