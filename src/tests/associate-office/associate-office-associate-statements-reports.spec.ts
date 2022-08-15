import { test } from '@playwright/test';
import { ReportsCommissionsPage } from '../../page-objects/associate/associate-office-reports-commissions.page';

// create instance of Page
let reportsCommissionsPage: ReportsCommissionsPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  reportsCommissionsPage = new ReportsCommissionsPage(page);
});

test('Associate Statements is displayed', async ({ page }) => {
  await reportsCommissionsPage.navigateToReportsCommissionsPage2();
  await reportsCommissionsPage.assertReportsCommissionsPageShow();
  await reportsCommissionsPage.assertTabAssociateStatementsIsDisplayed();
});

test('Displays all reports titles of Associate Statements section on the calendar', async ({ page }) => {
  await reportsCommissionsPage.navigateToReportsCommissionsPage2();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2016', 'February');
  await reportsCommissionsPage.clickOnSearchDatesDay5();
  await reportsCommissionsPage.selectCountry('United States');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertAllReportsAreDisplayed();
});

test('Displays Advanced Commission report for US', async ({ page }) => {
  await reportsCommissionsPage.navigateToReportsCommissionsPage2();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2016', 'February');
  await reportsCommissionsPage.clickOnSearchDatesDay2();
  await reportsCommissionsPage.selectCountry('United States');
  await reportsCommissionsPage.selectReport('Advanced Commission');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertAdvancedCommissionIsDisplayed();
});

test('Displays Advanced Commission report for Canada', async ({ page }) => {
  await reportsCommissionsPage.navigateToReportsCommissionsPage2();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2016', 'February');
  await reportsCommissionsPage.clickOnSearchDatesDay2();
  await reportsCommissionsPage.selectCountry('Canada');
  await reportsCommissionsPage.selectReport('Advanced Commission');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertAdvancedCommissionIsDisplayed();
});

test('Displays Earned Commission report for US', async ({ page }) => {
  await reportsCommissionsPage.navigateToReportsCommissionsPage2();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2016', 'February');
  await reportsCommissionsPage.clickOnSearchDatesDay5();
  await reportsCommissionsPage.selectCountry('United States');
  await reportsCommissionsPage.selectReport('Earned Commission');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertEarnedCommissionIsDisplayed();
});

test('Displays Earned Commission report for Canada', async ({ page }) => {
  await reportsCommissionsPage.navigateToReportsCommissionsPage2();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2016', 'February');
  await reportsCommissionsPage.clickOnSearchDatesDay2();
  await reportsCommissionsPage.selectCountry('Canada');
  await reportsCommissionsPage.selectReport('Earned Commission');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertEarnedCommissionIsDisplayed();
});

test('Displays Commission Advance Balance / Reserve Balance report for US', async ({ page }) => {
  await reportsCommissionsPage.navigateToReportsCommissionsPage2();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2016', 'February');
  await reportsCommissionsPage.clickOnSearchDatesDay2();
  await reportsCommissionsPage.selectCountry('United States');
  await reportsCommissionsPage.selectReport('Commission Advance Balance / Reserve Balance');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertCommissionAdvanceBalanceIsDisplayed();
});

test('Displays Commission Advance Balance / Reserve Balance report for Canada', async ({ page }) => {
  await reportsCommissionsPage.navigateToReportsCommissionsPage2();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2016', 'February');
  await reportsCommissionsPage.clickOnSearchDatesDay2();
  await reportsCommissionsPage.selectCountry('Canada');
  await reportsCommissionsPage.selectReport('Commission Advance Balance / Reserve Balance');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertCommissionAdvanceBalanceIsDisplayed();
});

test('Displays Commissions by Organization Calculation report for US', async ({ page }) => {
  await reportsCommissionsPage.navigateToReportsCommissionsPage2();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2016', 'February');
  await reportsCommissionsPage.clickOnSearchDatesDay2();
  await reportsCommissionsPage.selectCountry('United States');
  await reportsCommissionsPage.selectReport('Commissions by Organization');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertComByOrganizationCalculationIsDisplayed();
});

test('Displays Commissions by Organization Calculation report for Canada', async ({ page }) => {
  test.slow();
  await reportsCommissionsPage.navigateToReportsCommissionsPage2();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2016', 'February');
  await reportsCommissionsPage.clickOnSearchDatesDay2();
  await reportsCommissionsPage.selectCountry('Canada');
  await reportsCommissionsPage.selectReport('Commissions by Organization');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertComByOrganizationCalculationIsDisplayed();
});

test('Displays Commission Adjustments report for US', async ({ page }) => {
  await reportsCommissionsPage.navigateToReportsCommissionsPage3();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2015', 'December');
  await reportsCommissionsPage.clickOnSearchDatesDay31();
  await reportsCommissionsPage.selectCountry('United States');
  await reportsCommissionsPage.selectReport('Commission Adjustments');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertCommissionAdjustmentsIsDisplayed();
});

test('Displays Commission Adjustments report for Canada', async ({ page }) => {
  await reportsCommissionsPage.navigateToReportsCommissionsPage3();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2015', 'December');
  await reportsCommissionsPage.clickOnSearchDatesDay31();
  await reportsCommissionsPage.selectCountry('Canada');
  await reportsCommissionsPage.selectReport('Commission Adjustments');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertCommissionAdjustmentsIsDisplayed();
});

test('Displays Personal Memberships / Reinstatements / Add Ons report for Canada', async ({ page }) => {
  test.slow();
  await reportsCommissionsPage.navigateToReportsCommissionsPage3();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2015', 'March');
  await reportsCommissionsPage.clickOnSearchDatesDay31();
  await reportsCommissionsPage.selectCountry('Canada');
  await reportsCommissionsPage.selectReport('Personal Memberships / Reinstatements / Add Ons');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertPersonalMembershipsIsDisplayed();
});

test('Displays Personal Cancellations report for Canada', async ({ page }) => {
  await reportsCommissionsPage.navigateToReportsCommissionsPage3();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2015', 'February');
  await reportsCommissionsPage.clickOnSearchDatesDay19();
  await reportsCommissionsPage.selectCountry('Canada');
  await reportsCommissionsPage.selectReport('Personal Cancellations');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertPersonalCancellationsIsDisplayed();
});
