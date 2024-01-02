import { expect, test } from '@playwright/test';
import { GroupsAffiliatedPage } from '../../../page-objects/groups-affiliated/groups-affiliated.page';
import { GroupsAffiliatedAgentPage } from '../../../page-objects/groups-affiliated/groups-affiliated-agent.page';
import { GroupsAffiliatedEnrollmentPage } from '../../../page-objects/groups-affiliated/groups-affiliated-enrollment.page';

let groupsAffiliatedPage: GroupsAffiliatedPage;
let groupsAffiliatedAgentPage: GroupsAffiliatedAgentPage;
let groupsAffiliatedEnrollmentPage: GroupsAffiliatedEnrollmentPage;

test.beforeEach(async ({ page }) => {
  groupsAffiliatedPage = new GroupsAffiliatedPage(page);
  groupsAffiliatedAgentPage = new GroupsAffiliatedAgentPage(page);
  groupsAffiliatedEnrollmentPage = new GroupsAffiliatedEnrollmentPage(page);
  test.slow();
});
test('Groups Affiliated (Agent: 12345, Primerica, en-US, New York) -> Checkout Service @smoke @e2e', async ({ page }) => {
  console.log('Test Case: Groups Affiliated (Agent: 12345, Primerica, en-US, New York) -> Classic Checkout Service');
  await test.step(`Navigate to primerica Affiliated groups page`, async () => {
    await groupsAffiliatedPage.navigateToGroupsAffiliatedPage('primerica');
  });
  await test.step(`Select language and market`, async () => {
    await groupsAffiliatedPage.locEnrollNowButton.click();
  });
  await test.step(`Enter Agent ID`, async () => {
    await groupsAffiliatedPage.fillAgentId('12345');
  });
  await test.step(`Click Continue to Enrollment button`, async () => {
    await groupsAffiliatedPage.locContinueToEnrollmentButton.click();
  });
  await test.step(`Navigate to idshield pricing and coverage page`, async () => {
    await groupsAffiliatedAgentPage.selectStateOrProvince('New York');
  });
  await test.step(`Select Plan Checkbox`, async () => {
    await groupsAffiliatedEnrollmentPage.selectPlan('New York Legal Plan');
  });
  await test.step(`Click Begin Enrollment Button`, async () => {
    await groupsAffiliatedEnrollmentPage.locBeginEnrollmentButton.click();
  });
  await test.step(`Assert navigation to classic checkout`, async () => {
    await expect(page).toHaveURL(new RegExp('checkoutv3.legalshield'));
  });
});
