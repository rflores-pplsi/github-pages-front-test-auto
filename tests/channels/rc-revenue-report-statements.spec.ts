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

test('SC-1277 - Create Revenue Report Statement Selection List', async ({ page }) => {
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2021','July');
  await reportsCommissionsPage.clickOnSearchDatesDay5();
  await reportsCommissionsPage.assertComboCountryIsEnable();
  await reportsCommissionsPage.selectCountry('United States');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertAdvancedCommissionIsDisplayed();
});