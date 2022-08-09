import { test } from '@playwright/test';
import { ShieldAtWorkGroupManagement } from '../../page-objects/shield-at-work/shield-at-work-group-management.page';

let shieldAtWorkGroupManagement: ShieldAtWorkGroupManagement;

test.beforeEach(async ({ page }) => {
  shieldAtWorkGroupManagement = new ShieldAtWorkGroupManagement(page);
  await shieldAtWorkGroupManagement.navigateToShieldAtWorkGroupManagementPage();
});

test('Search group by group number', async ({ page }) => {
  await shieldAtWorkGroupManagement.groupSearchByGroupNumber('111452');
  await shieldAtWorkGroupManagement.assertTextGroup();
});

test('Home button takes to the group management page', async ({ page }) => {
  await shieldAtWorkGroupManagement.groupSearchByGroupNumber('111452');
  await shieldAtWorkGroupManagement.clickNameIcon();
  await shieldAtWorkGroupManagement.clickBtnHome();
  await shieldAtWorkGroupManagement.assertGroupManagementPageIsDisplayed();
});
