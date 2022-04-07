import { test } from '@playwright/test';
import { ReportsCommissionsPage } from '../../page-objects/channels/reports-commissions.page';

// create instance of Page
let reportsCommissionsPage: ReportsCommissionsPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  reportsCommissionsPage = new ReportsCommissionsPage(page);
  await reportsCommissionsPage.navigateToReportsCommissionsPagePage();
});

test('SC-xxxx - Verify the base page is show', async ({ page }) => {
  await reportsCommissionsPage.assertPageShow();
});

test('SC-1264 - OBR - FE - Routing', async ({ page }) => {
  await reportsCommissionsPage.assertBreadcrumbLinkIsDisplayed();
  await reportsCommissionsPage.assertOrganizationalBusinessReportTaIsDisplayed();
});

test('SC-1305 - OBR - FE - Create Search Component', async ({ page }) => {
  await reportsCommissionsPage.assertPageShow();
  await reportsCommissionsPage.fillTxtBoxSearch('AssociateIds');
  await reportsCommissionsPage.assertTxaAssociateNumberIsDisplayed();
});

test('SC-1306 - OBR - FE - Associate Name and Number Titles', async ({ page }) => {
  await reportsCommissionsPage.assertPageShow();
  await reportsCommissionsPage.fillTxtBoxSearch('AssociateIds');
  await reportsCommissionsPage.assertTxaAssociateNumberIsDisplayed();
  await reportsCommissionsPage.clickSearchResult();
  await reportsCommissionsPage.assertTabPersonalBusinessReportIsDisplayed();
});