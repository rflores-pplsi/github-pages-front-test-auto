import { test } from '@playwright/test';
import { ReportsBusinessOrganizationalPage } from '../../page-objects (Archived)/associate-office/associate-office-reports-business-organizational.page';

// create instance of Page
let reportsBusinessOrganizationalPage: ReportsBusinessOrganizationalPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  reportsBusinessOrganizationalPage = new ReportsBusinessOrganizationalPage(page);
  await reportsBusinessOrganizationalPage.navigateToReportsBusinessPersonalPage();
});

test('Personal Business Report Routing is displayed', async () => {
  console.log('Test Case: Personal Business Report Routing is displayed');
  const BREADCRUMB_LINK_TEXT = 'Personal Business Report';
  await reportsBusinessOrganizationalPage.assertPageTitle(BREADCRUMB_LINK_TEXT);
  await reportsBusinessOrganizationalPage.assertBreadcrumbLinkIsDisplayed(BREADCRUMB_LINK_TEXT);
  await reportsBusinessOrganizationalPage.assertPersonalBusinessReportTabIsDisplayed();
});

test('Search Component is displayed', async () => {
  console.log('Test Case: Search Component is displayed');
  await reportsBusinessOrganizationalPage.assertTxaSearchByTxtIsDisplayed();
  await reportsBusinessOrganizationalPage.assertTxtBoxSearchIsDisplayed();
  await reportsBusinessOrganizationalPage.assertBtnSearchIsDisplayed();
});

test('Verify that the input box says “Associate name or number”', async () => {
  console.log('Test Case: Verify that the input box says “Associate name or number”');
  await reportsBusinessOrganizationalPage.assertBoxSearchHasText();
});

// prod only, no available reports in dev and uat
test('Verify the ability to search by Associate Name', async () => {
  console.log('Test Case: Verify the ability to search by Associate Name');
  await reportsBusinessOrganizationalPage.fillTxtBoxSearch('RECOGNITION');
  await reportsBusinessOrganizationalPage.clickOnOption();
  await reportsBusinessOrganizationalPage.clickOnSearchButton();
  await reportsBusinessOrganizationalPage.assertAssociateName();
});

test('Verify the ability to search by Associate Number', async () => {
  console.log('Test Case: Verify the ability to search by Associate Number');
  await reportsBusinessOrganizationalPage.fillTxtBoxSearch('1275');
  await reportsBusinessOrganizationalPage.clickOnOption();
  await reportsBusinessOrganizationalPage.clickOnSearchButton();
  await reportsBusinessOrganizationalPage.assertAssociateName();
});

test('The appropriate message is displayed when no associate had found.', async () => {
  console.log('Test Case: The appropriate message is displayed when no associate had found.');
  await reportsBusinessOrganizationalPage.fillTxtBoxSearch('111222333');
  await reportsBusinessOrganizationalPage.assertNoAssociateFoundMessage();
});

test('Associate Name and Number is displayed', async () => {
  console.log('Test Case: Associate Name and Number is displayed');
  await reportsBusinessOrganizationalPage.fillTxtBoxSearch('1275');
  await reportsBusinessOrganizationalPage.clickOnOption();
  await reportsBusinessOrganizationalPage.clickOnSearchButton();
  await reportsBusinessOrganizationalPage.assertAssociateName();
  await reportsBusinessOrganizationalPage.assertAssociateNumber();
});

test('The tables are displayed', async () => {
  console.log('Test Case: The tables are displayed');
  await reportsBusinessOrganizationalPage.fillTxtBoxSearch('1275');
  await reportsBusinessOrganizationalPage.clickOnOption();
  await reportsBusinessOrganizationalPage.clickOnSearchButton();
  await reportsBusinessOrganizationalPage.assertTables();
});
