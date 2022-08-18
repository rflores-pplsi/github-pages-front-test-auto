import { test } from '@playwright/test';
import { ShieldAtWorkMemberEnrollment } from '../../page-objects/shield-at-work/shield-at-work-member-enrollment.page';

let shieldAtWorkMemberEnrollment: ShieldAtWorkMemberEnrollment;

test.beforeEach(async ({ page }) => {
  shieldAtWorkMemberEnrollment = new ShieldAtWorkMemberEnrollment(page);
});

test.skip('Contact information, available plan offerings section, member information  are displayed on the member enrollment page', async ({
  page,
}) => {
  await shieldAtWorkMemberEnrollment.navigateToGroupPage('111452');
  await shieldAtWorkMemberEnrollment.fillOutContactInformation(
    'Test',
    'Tester',
    '5555555555',
    'tester93@gmail.com',
    '1666 Raleigh',
    'Dallas',
    '77494'
  );
  await shieldAtWorkMemberEnrollment.clickContinueButtonContactInfo();
  await shieldAtWorkMemberEnrollment.assertEditButton();
  await shieldAtWorkMemberEnrollment.assertEffectiveDateField();
  await shieldAtWorkMemberEnrollment.selectEffectiveDate();
  await shieldAtWorkMemberEnrollment.selectPlan();
  await shieldAtWorkMemberEnrollment.clickContinueButtonPlanOfferings();
  await shieldAtWorkMemberEnrollment.selectDateOfBirth();
  await shieldAtWorkMemberEnrollment.selectSSN();
  await shieldAtWorkMemberEnrollment.assertFamilyMemberSectionIsDisplayed();
});
