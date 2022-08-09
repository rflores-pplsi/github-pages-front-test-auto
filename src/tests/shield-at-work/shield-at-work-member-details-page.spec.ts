import { test } from '@playwright/test';

import { ShieldAtWorkMemberDetailsPage } from '../../page-objects/shield-at-work/shield-at-work-member-details-page.page';

let shieldAtWorkMemberDetailsPage: ShieldAtWorkMemberDetailsPage;

test.beforeEach(async ({ page }) => {
  shieldAtWorkMemberDetailsPage = new ShieldAtWorkMemberDetailsPage(page);
  test.slow();
});

test.only('Member information is displayed after clicking on member name on the member details page', async ({ page }) => {
  console.log('Member information is displayed after clicking on member name on the member details page');
  await shieldAtWorkMemberDetailsPage.navigateToShieldAtWorkMemberDetailsPage();
  await shieldAtWorkMemberDetailsPage.clickMemberName();
  await shieldAtWorkMemberDetailsPage.assertMemberInformationIsDisplayed();
});

test('Error message "There are no family members to display" is displayed for family section on the member details page', async ({ page }) => {
  console.log('Error message "There are no family members to display" is displayed for family section on the member details page');
  await shieldAtWorkMemberDetailsPage.navigateToShieldAtWorkMemberDetailsPage();
  await shieldAtWorkMemberDetailsPage.clickMemberName();
  await shieldAtWorkMemberDetailsPage.assertErrorMessageIsDisplayed();
});
