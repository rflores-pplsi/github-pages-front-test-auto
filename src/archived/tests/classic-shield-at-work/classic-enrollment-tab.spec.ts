import { test } from '@playwright/test';
import { ClassicShieldAtWorkEnrollmentTab } from '../../../archived/page-objects-old/classic-shield-at-work/classic-enrollment-tab.page';

let classicShieldAtWorkEnrollmentTab: ClassicShieldAtWorkEnrollmentTab;

test.beforeEach(async ({ page }) => {
  classicShieldAtWorkEnrollmentTab = new ClassicShieldAtWorkEnrollmentTab(page);
  await classicShieldAtWorkEnrollmentTab.navigateToClassicShieldAtWork();
});

test('Member list is displayed on the enrollment page', async () => {
  await classicShieldAtWorkEnrollmentTab.loginWithCredentials();
  await classicShieldAtWorkEnrollmentTab.assertMemberList();
});

test('Enrollment form is displayed on the enrollment page', async () => {
  await classicShieldAtWorkEnrollmentTab.loginWithCredentials();
  await classicShieldAtWorkEnrollmentTab.assertMemberEnrollmentForm();
});
