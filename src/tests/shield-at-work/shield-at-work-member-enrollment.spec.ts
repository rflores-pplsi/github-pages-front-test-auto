import { test } from '@playwright/test';
import { ShieldAtWorkMemberEnrollment } from '../../page-objects/shield-at-work/shield-at-work-member-enrollment.page';

let shieldAtWorkMemberEnrollment: ShieldAtWorkMemberEnrollment;

test.beforeEach(async ({ page }) => {
  shieldAtWorkMemberEnrollment = new ShieldAtWorkMemberEnrollment(page);
  await shieldAtWorkMemberEnrollment.navigateToShieldAtWork();
});

test('Edit button for contact information should be enabled', async ({ page }) => {
  // Login with your credentials
  await shieldAtWorkMemberEnrollment.loginWithCredentials();
  // Click on Enroll new member button
  await shieldAtWorkMemberEnrollment.clickEnrollNewMember();
  // Fill out contact information
  await shieldAtWorkMemberEnrollment.fillOutContactInformation();
  // Click on Continue button
  await shieldAtWorkMemberEnrollment.clickContinueButtonContactInfo();
  // Verify that Edit button is enabled
  await shieldAtWorkMemberEnrollment.assertEditButton();
});
