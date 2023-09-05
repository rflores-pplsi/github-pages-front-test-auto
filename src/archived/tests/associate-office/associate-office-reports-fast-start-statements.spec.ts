import { test } from '@playwright/test';
import { ReportsCommissionsPage } from '../../../archived/page-objects-old/associate-office/associate-office-reports-commissions.page';

// dev and uat only, no available reports in prod
// create instance of Page
let reportsCommissionsPage: ReportsCommissionsPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  reportsCommissionsPage = new ReportsCommissionsPage(page);
  await reportsCommissionsPage.navigateToReportsCommissionsPage3();
});

test('Fast Start Statements is displayed', async () => {
  await reportsCommissionsPage.assertReportsCommissionsPageShow();
  await reportsCommissionsPage.assertTabFastStartStatementsIsDisplayed();
});

test('Displays Fast Start Statement report for Canada', async () => {
  await reportsCommissionsPage.clickOnFastStartStatements();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2015', 'January');
  await reportsCommissionsPage.clickOnSearchDatesDay29();
  await reportsCommissionsPage.selectCountry3('Canada');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertFastStartStatementsIsDisplayed();
});
