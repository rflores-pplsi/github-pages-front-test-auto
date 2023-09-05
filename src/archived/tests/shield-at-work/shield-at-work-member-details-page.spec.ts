import { test } from '@playwright/test';

import { ShieldAtWorkMemberDetailsPage } from '../../../archived/page-objects-old/shield-at-work/shield-at-work-member-details-page.page';

let shieldAtWorkMemberDetailsPage: ShieldAtWorkMemberDetailsPage;

test.beforeEach(async ({ page }) => {
  shieldAtWorkMemberDetailsPage = new ShieldAtWorkMemberDetailsPage(page);
  test.slow();
});

test('Member information is displayed after clicking on member name on the member details page', async () => {
  console.log('Member information is displayed after clicking on member name on the member details page');
  await shieldAtWorkMemberDetailsPage.navigateToGroupPage();
  await shieldAtWorkMemberDetailsPage.clickMemberName();
  await shieldAtWorkMemberDetailsPage.assertMemberInformationIsDisplayed();
});

test.skip('Error message "There are no family members to display" is displayed for family section on the member details page', async () => {
  console.log('Error message "There are no family members to display" is displayed for family section on the member details page');
  await shieldAtWorkMemberDetailsPage.navigateToGroupPage();
  await shieldAtWorkMemberDetailsPage.clickMemberName();
  await shieldAtWorkMemberDetailsPage.assertErrorMessageIsDisplayed();
});
