import { test } from '@playwright/test';
import { ReportsCommissionsPage } from '../../page-objects/associate-office/associate-office-reports-commissions.page';

// dev and uat only, no available reports in prod
// create instance of Page
let reportsCommissionsPage: ReportsCommissionsPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  reportsCommissionsPage = new ReportsCommissionsPage(page);
  await reportsCommissionsPage.navigateToReportsCommissionsPage();
});

test('Add tab for Revenue Report', async () => {
  await reportsCommissionsPage.assertReportsCommissionsPageShow();
  await reportsCommissionsPage.assertTabRevenueReportIsDisplayed();
});

test('Create Revenue Report Statement Selection List for US', async () => {
  await reportsCommissionsPage.clickOnRevenueReportTab();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2021', 'September');
  await reportsCommissionsPage.clickOnSearchDatesDay2();
  await reportsCommissionsPage.assertComboCountryIsEnable2();
  await reportsCommissionsPage.selectCountry2('United States');
  await reportsCommissionsPage.clickOnSearchButton();
});

test('Create Revenue Report Statement Selection List for Canada', async () => {
  await reportsCommissionsPage.clickOnRevenueReportTab();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2021', 'September');
  await reportsCommissionsPage.clickOnSearchDatesDay2();
  await reportsCommissionsPage.assertComboCountryIsEnable2();
  await reportsCommissionsPage.selectCountry2('Canada');
  await reportsCommissionsPage.clickOnSearchButton();
});
