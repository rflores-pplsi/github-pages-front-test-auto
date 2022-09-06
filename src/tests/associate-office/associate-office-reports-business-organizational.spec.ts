import { test } from '@playwright/test';
import { ReportsBusinessOrganizationalPage } from '../../page-objects/associate-office/associate-office-reports-business-organizational.page';

// create instance of Page
let reportsBusinessOrganizationalPage: ReportsBusinessOrganizationalPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  reportsBusinessOrganizationalPage = new ReportsBusinessOrganizationalPage(page);
  await reportsBusinessOrganizationalPage.navigateToReportsBusinessOrganizationalPage();
});

test('Organizational Business Report Routing is displayed', async ({ page }) => {
  console.log('Test Case: Organizational Business Report Routing is displayed');
  const breadcrumbLinkTxt = 'Organizational Business Report';
  await reportsBusinessOrganizationalPage.assertPageTitle(breadcrumbLinkTxt);
  await reportsBusinessOrganizationalPage.assertBreadcrumbLinkIsDisplayed(breadcrumbLinkTxt);
  await reportsBusinessOrganizationalPage.assertOrganizationalBusinessReportTabIsDisplayed();
});

test('Personal Business Report Routing is displayed', async ({ page }) => {
  console.log('Test Case: Personal Business Report Routing is displayed');
  await reportsBusinessOrganizationalPage.clickOnPersonalBusinessReportTab();
  const breadcrumbLinkTxt = 'Personal Business Report';
  await reportsBusinessOrganizationalPage.assertPageTitle(breadcrumbLinkTxt);
  await reportsBusinessOrganizationalPage.assertBreadcrumbLinkIsDisplayed(breadcrumbLinkTxt);
  await reportsBusinessOrganizationalPage.assertPersonalBusinessReportTabIsDisplayed();
});
