import { test } from '@playwright/test';
import { ReportsCommissionsPage } from '../../../archived/page-objects-old/associate-office/associate-office-reports-commissions.page';

// create instance of Page
let reportsCommissionsPage: ReportsCommissionsPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  reportsCommissionsPage = new ReportsCommissionsPage(page);
  await reportsCommissionsPage.navigateToReportsCommissionsPage4();
});

test('Pending Statements is displayed', async () => {
  await reportsCommissionsPage.assertReportsCommissionsPageShow();
  await reportsCommissionsPage.assertTabPendingStatementsIsDisplayed();
});

// run in dev and uat only, because we don't have those dates and statements available in prod
test('Displays Pending Statement report for US', async () => {
  await reportsCommissionsPage.clickOnPendingStatements();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2015', 'February');
  await reportsCommissionsPage.clickOnSearchDatesDay28();
  await reportsCommissionsPage.selectCountry3('United States');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertPendingStatementsIsDisplayed();
});

test('Displays Pending Statement report for Canada', async () => {
  await reportsCommissionsPage.clickOnPendingStatements();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2015', 'February');
  await reportsCommissionsPage.clickOnSearchDatesDay28();
  await reportsCommissionsPage.selectCountry3('Canada');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertPendingStatementsIsDisplayed2();
});

// run in prod only, because we don't have those dates and statements available in dev and uat
test.skip('Displays Pending Statement report for US (prod only)', async () => {
  await reportsCommissionsPage.clickOnPendingStatements();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2022', 'August');
  await reportsCommissionsPage.clickOnSearchDatesDay31();
  await reportsCommissionsPage.selectCountry3('United States');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertPendingStatementsIsDisplayed();
});
