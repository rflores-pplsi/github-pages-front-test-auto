import { test } from "@playwright/test";
import { ShieldAtWorkGroupManagement } from "../../page-objects/shield-at-work/shield-at-work-group-management.page";

let shieldAtWorkGroupManagement: ShieldAtWorkGroupManagement;

test.beforeEach(async ({ page }) => {
  shieldAtWorkGroupManagement = new ShieldAtWorkGroupManagement(page);
  await shieldAtWorkGroupManagement.navigateToShieldAtWorkGroupManagementPage();
});

test("Search group by group number", async ({ page }) => {
  // Type in the search field 111452 group number and click on Search button
  await shieldAtWorkGroupManagement.groupSearchByGroupNumber();
  // Verify that the group is displayed on the group management page
  await shieldAtWorkGroupManagement.assertTextGroup();
});
