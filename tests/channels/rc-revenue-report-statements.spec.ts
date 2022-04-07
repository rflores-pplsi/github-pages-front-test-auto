import { test } from '@playwright/test';
import { ReportsCommissionsPage } from '../../page-objects/channels/reports-commissions.page';

// create instance of Page
let reportsCommissionsPage: ReportsCommissionsPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  reportsCommissionsPage = new ReportsCommissionsPage(page);
  await reportsCommissionsPage.navigateToReportsCommissionsPage();
});

test('SC-xxxx - The Revenue Report Statements functionality:', async ({ page }) => {
  await reportsCommissionsPage.assertReportsReportsCommissionsPageShow();
});

test('SC-1276 - Add tab for Revenue Report', async ({ page }) => {
    await reportsCommissionsPage.assertReportsReportsCommissionsPageShow();
    await reportsCommissionsPage.assertTabFastStartStatementIsDisplayed();
});