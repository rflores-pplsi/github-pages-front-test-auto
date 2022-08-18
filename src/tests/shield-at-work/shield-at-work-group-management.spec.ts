import { test } from '@playwright/test';
import { ShieldAtWorkGroupManagement } from '../../page-objects/shield-at-work/shield-at-work-group-management.page';

let shieldAtWorkGroupManagement: ShieldAtWorkGroupManagement;

test.beforeEach(async ({ page }) => {
  shieldAtWorkGroupManagement = new ShieldAtWorkGroupManagement(page);
});

test('Home button takes to the group management page', async ({ page }) => {
  await shieldAtWorkGroupManagement.navigateToGroupPage('111452');
  await shieldAtWorkGroupManagement.groupSearchByGroupNumber('111452');
  await shieldAtWorkGroupManagement.clickNameIcon();
  await shieldAtWorkGroupManagement.clickBtnHome();
  await shieldAtWorkGroupManagement.assertGroupManagementPageIsDisplayed();
});
