import { test } from '@playwright/test';
import { ReportsCommissionsPage } from '../../page-objects/associate-office/associate-office-reports-commissions.page';

// create instance of Page
let reportsCommissionsPage: ReportsCommissionsPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  reportsCommissionsPage = new ReportsCommissionsPage(page);
  await reportsCommissionsPage.navigateToReportsCommissionsPage();
});

test('Add tab for Revenue Report', async ({ page }) => {
  await reportsCommissionsPage.assertReportsCommissionsPageShow();
  await reportsCommissionsPage.assertTabRevenueReportIsDisplayed();
});

test('Create Revenue Report Statement Selection List for US', async ({ page }) => {
  await reportsCommissionsPage.clickOnRevenueReportTab();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2021', 'September');
  await reportsCommissionsPage.clickOnSearchDatesDay2();
  await reportsCommissionsPage.assertComboCountryIsEnable();
  await reportsCommissionsPage.selectCountry('United States');
  await reportsCommissionsPage.clickOnSearchButton();
});

test('Create Revenue Report Statement Selection List for Canada', async ({ page }) => {
  await reportsCommissionsPage.clickOnRevenueReportTab();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2021', 'September');
  await reportsCommissionsPage.clickOnSearchDatesDay2();
  await reportsCommissionsPage.assertComboCountryIsEnable();
  await reportsCommissionsPage.selectCountry('Canada');
  await reportsCommissionsPage.clickOnSearchButton();
});
