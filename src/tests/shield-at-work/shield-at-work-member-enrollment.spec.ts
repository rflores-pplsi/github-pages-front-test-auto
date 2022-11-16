import { test } from '@playwright/test';
import { ShieldAtWorkMemberEnrollment } from '../../page-objects/shield-at-work/shield-at-work-member-enrollment.page';

let shieldAtWorkMemberEnrollment: ShieldAtWorkMemberEnrollment;

test.beforeEach(async ({ page }) => {
  shieldAtWorkMemberEnrollment = new ShieldAtWorkMemberEnrollment(page);
});

test('Contact information, available plan offerings section, member information , personal and small business sections are displayed on the member enrollment page', async ({}) => {
  await shieldAtWorkMemberEnrollment.navigateToGroupPage();
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
  await shieldAtWorkMemberEnrollment.assertPersonalSectionIsDisplayed();
  await shieldAtWorkMemberEnrollment.assertFamilyMemberSectionIsDisplayed();
  await shieldAtWorkMemberEnrollment.assertSmallBusinessSectionIsDisplayed();
});

test('New member has been successfully enrolled on the member enrollment page', async ({}) => {
  await shieldAtWorkMemberEnrollment.navigateToGroupPage();
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
  await shieldAtWorkMemberEnrollment.fillOutPersonalInformationSection('09091992', '444444444');
  await shieldAtWorkMemberEnrollment.fillOutSmallBusinessInformationSection('Tester', '555555555', '08122022', 'bakery');
  await shieldAtWorkMemberEnrollment.clickNoPubliclyTradedCompanyRadioButton();
  await shieldAtWorkMemberEnrollment.clickNonProfitBusinessRadioButton();
  await shieldAtWorkMemberEnrollment.clickContinueButtonAssociateInfo();
  await shieldAtWorkMemberEnrollment.selectAnAssociate();
  await shieldAtWorkMemberEnrollment.clickSubmitButton();
  await shieldAtWorkMemberEnrollment.assertGroupManagementPage();
});
