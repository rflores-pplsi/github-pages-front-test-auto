import { test } from '@playwright/test';
import { ReportsBusinessOrganizationalPage } from '../../page-objects/associate/associate-office-reports-business-organizational.page';

// create instance of Page
let reportsBusinessOrganizationalPage: ReportsBusinessOrganizationalPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  reportsBusinessOrganizationalPage = new ReportsBusinessOrganizationalPage(page);
  await reportsBusinessOrganizationalPage.navigateToReportsBusinessOrganizationalPage();
});

test('OBR - FE - Routing', async ({ page }) => {
  await reportsBusinessOrganizationalPage.assertBreadcrumbLinkIsDisplayed();
  await reportsBusinessOrganizationalPage.assertOrganizationalBusinessReportTaIsDisplayed();
});

test('OBR - FE - Create Search Component', async ({ page }) => {
  await reportsBusinessOrganizationalPage.assertReportsBusinessOrganizationalPageShow();
  await reportsBusinessOrganizationalPage.fillTxtBoxSearch('AssociateIds');
  await reportsBusinessOrganizationalPage.assertTxaAssociateNumberIsDisplayed();
});

test('OBR - FE - Associate Name and Number Titles', async ({ page }) => {
  await reportsBusinessOrganizationalPage.assertReportsBusinessOrganizationalPageShow();
  await reportsBusinessOrganizationalPage.fillTxtBoxSearch('AssociateIds');
  await reportsBusinessOrganizationalPage.assertTxaAssociateNumberIsDisplayed();
  await reportsBusinessOrganizationalPage.clickSearchResult();
  await reportsBusinessOrganizationalPage.assertTabPersonalBusinessReportIsDisplayed();
});
