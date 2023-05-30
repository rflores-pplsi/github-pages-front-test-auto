import { test } from '@playwright/test';
import { ReportsBusinessOrganizationalPage } from '../../../page-objects (Archived)/associate-office/associate-office-reports-business-organizational.page';

// create instance of Page
let reportsBusinessOrganizationalPage: ReportsBusinessOrganizationalPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  reportsBusinessOrganizationalPage = new ReportsBusinessOrganizationalPage(page);
  await reportsBusinessOrganizationalPage.navigateToReportsBusinessOrganizationalPage();
});

test('Organizational Business Report Routing is displayed', async () => {
  console.log('Test Case: Organizational Business Report Routing is displayed');
  const BREADCRUMB_LINK_TEXT = 'Organizational Business Report';
  await reportsBusinessOrganizationalPage.assertPageTitle(BREADCRUMB_LINK_TEXT);
  await reportsBusinessOrganizationalPage.assertBreadcrumbLinkIsDisplayed(BREADCRUMB_LINK_TEXT);
  await reportsBusinessOrganizationalPage.assertOrganizationalBusinessReportTabIsDisplayed();
});

test('Search Component is displayed', async () => {
  console.log('Test Case: Search Component is displayed');
  await reportsBusinessOrganizationalPage.assertTxaSearchByTxtIsDisplayed();
  await reportsBusinessOrganizationalPage.assertTxtBoxSearchIsDisplayed();
  await reportsBusinessOrganizationalPage.assertBtnSearchIsDisplayed();
});

test('Verify the ability to search by Associate Name', async () => {
  console.log('Test Case: Verify the ability to search by Associate Name');
  await reportsBusinessOrganizationalPage.fillTxtBoxSearch('JULIA');
  await reportsBusinessOrganizationalPage.clickOnOption();
  await reportsBusinessOrganizationalPage.clickOnSearchButton();
  await reportsBusinessOrganizationalPage.assertTableTitle();
});

test('Verify the ability to search by Associate Number', async () => {
  console.log('Test Case: Verify the ability to search by Associate Number');
  await reportsBusinessOrganizationalPage.fillTxtBoxSearch('5448');
  await reportsBusinessOrganizationalPage.clickOnOption();
  await reportsBusinessOrganizationalPage.clickOnSearchButton();
  await reportsBusinessOrganizationalPage.assertTableTitle();
});

test('The appropriate message is displayed when no associate had found.', async () => {
  console.log('Test Case: The appropriate message is displayed when no associate had found.');
  await reportsBusinessOrganizationalPage.fillTxtBoxSearch('111222333');
  await reportsBusinessOrganizationalPage.assertNoAssociateFoundMessage();
});

test('Associate Name and Number is displayed', async () => {
  console.log('Test Case: Associate Name and Number is displayed');
  await reportsBusinessOrganizationalPage.fillTxtBoxSearch('5448');
  await reportsBusinessOrganizationalPage.clickOnOption();
  await reportsBusinessOrganizationalPage.clickOnSearchButton();
  await reportsBusinessOrganizationalPage.assertAssociateName();
  await reportsBusinessOrganizationalPage.assertAssociateNumber();
});

test('Verify that the Associate Name is linked to the Personal Business Report.', async () => {
  console.log('Test Case: Verify that the Associate Name is linked to the Personal Business Report.');
  await reportsBusinessOrganizationalPage.fillTxtBoxSearch('5448');
  await reportsBusinessOrganizationalPage.clickOnOption();
  await reportsBusinessOrganizationalPage.clickOnSearchButton();
  await reportsBusinessOrganizationalPage.assertTableTitle();
  await reportsBusinessOrganizationalPage.clickOnAssociateName();
  const BREADCRUMB_LINK_TEXT = 'Personal Business Report';
  await reportsBusinessOrganizationalPage.assertPageTitle(BREADCRUMB_LINK_TEXT);
  await reportsBusinessOrganizationalPage.assertBreadcrumbLinkIsDisplayed(BREADCRUMB_LINK_TEXT);
});

test('Organizational Business Report Table is displayed with all columns', async () => {
  console.log('Test Case: Organizational Business Report Table is displayed with all columns');
  await reportsBusinessOrganizationalPage.fillTxtBoxSearch('5448');
  await reportsBusinessOrganizationalPage.clickOnOption();
  await reportsBusinessOrganizationalPage.clickOnSearchButton();
  await reportsBusinessOrganizationalPage.assertAssociateName();
  await reportsBusinessOrganizationalPage.assertAssociateNumber();
  await reportsBusinessOrganizationalPage.assertTableTitle();
  await reportsBusinessOrganizationalPage.assertFrontlineMessage();
  await reportsBusinessOrganizationalPage.assertColumnNames(1, 'Status');
  await reportsBusinessOrganizationalPage.assertColumnNames(2, 'Number');
  await reportsBusinessOrganizationalPage.assertColumnNames(3, 'Associate Name');
  await reportsBusinessOrganizationalPage.assertColumnNames(4, 'Pending Business');
  await reportsBusinessOrganizationalPage.assertColumnNames(5, 'Processing Business');
  await reportsBusinessOrganizationalPage.assertColumnNames(6, 'Processed Business');
  await reportsBusinessOrganizationalPage.assertRowsPerPage();
});

test('Verify that the input box says “Associate name or number”', async () => {
  console.log('Test Case: Verify that the input box says “Associate name or number”');
  await reportsBusinessOrganizationalPage.assertBoxSearchHasText();
});
