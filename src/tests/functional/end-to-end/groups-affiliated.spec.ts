import { expect } from '@playwright/test';
import { test } from '../../../fixtures/frontend-ui.fixture';

test('Groups Affiliated (Agent: 12345, Primerica, en-US, New York) -> Checkout Service @smoke ', async ({ page, groupsAffiliatedService }) => {
  console.log('Test Case: Groups Affiliated (Agent: 12345, Primerica, en-US, New York) -> Classic Checkout Service');
  test.slow();
  await test.step(`Navigate to primerica Affiliated groups page`, async () => {
    await groupsAffiliatedService.groupsAffiliatedPage.navigateToGroupsAffiliatedPage('primerica');
  });
  await test.step(`Select language and market`, async () => {
    await groupsAffiliatedService.groupsAffiliatedPage.locEnrollNowButton.click();
  });
  await test.step(`Enter Agent ID`, async () => {
    await groupsAffiliatedService.groupsAffiliatedPage.fillAgentId('12345');
  });
  await test.step(`Click Continue to Enrollment button`, async () => {
    await groupsAffiliatedService.groupsAffiliatedPage.locContinueToEnrollmentButton.click();
  });
  await test.step(`Navigate to idshield pricing and coverage page`, async () => {
    await groupsAffiliatedService.groupsAffiliatedAgentPage.selectStateOrProvince('New York');
  });
  await test.step(`Select Plan Checkbox`, async () => {
    await groupsAffiliatedService.groupsAffiliatedEnrollmentPage.selectPlan('New York Legal Plan');
  });
  await test.step(`Click Begin Enrollment Button`, async () => {
    await groupsAffiliatedService.groupsAffiliatedEnrollmentPage.locBeginEnrollmentButton.click();
  });
  await test.step(`Assert navigation to checkout`, async () => {
    await expect(page).toHaveURL(new RegExp('checkoutv3.legalshield'));
  });
});
