import { test } from '@playwright/test';
import { ReportsCommissionsPage } from '../../page-objects/associate-office/associate-office-reports-commissions.page';

// create instance of Page
let reportsCommissionsPage: ReportsCommissionsPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  reportsCommissionsPage = new ReportsCommissionsPage(page);
});

test('Associate Statements is displayed', async () => {
  await reportsCommissionsPage.navigateToReportsCommissionsPage2();
  await reportsCommissionsPage.assertReportsCommissionsPageShow();
  await reportsCommissionsPage.assertTabAssociateStatementsIsDisplayed();
});

// US
test('Displays all reports titles of Associate Statements section on the calendar', async () => {
  await reportsCommissionsPage.navigateToReportsCommissionsPage2();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2015', 'January');
  await reportsCommissionsPage.clickOnSearchDates2Day31();
  await reportsCommissionsPage.selectCountry('United States');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertAllReportsAreDisplayed();
});

test('Displays Advanced Commission report for US', async () => {
  await reportsCommissionsPage.navigateToReportsCommissionsPage2();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2015', 'January');
  await reportsCommissionsPage.clickOnSearchDates2Day31();
  await reportsCommissionsPage.selectCountry('United States');
  await reportsCommissionsPage.selectReport('Advanced Commission');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertAdvancedCommissionIsDisplayed();
});

test('Displays Earned Commission report for US', async () => {
  await reportsCommissionsPage.navigateToReportsCommissionsPage2();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2015', 'January');
  await reportsCommissionsPage.clickOnSearchDates2Day31();
  await reportsCommissionsPage.selectCountry('United States');
  await reportsCommissionsPage.selectReport('Earned Commission');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertEarnedCommissionIsDisplayed();
});

test('Displays Commission Advance Balance / Reserve Balance report for US', async () => {
  await reportsCommissionsPage.navigateToReportsCommissionsPage2();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2015', 'January');
  await reportsCommissionsPage.clickOnSearchDates2Day31();
  await reportsCommissionsPage.selectCountry('United States');
  await reportsCommissionsPage.selectReport('Commission Advance Balance / Reserve Balance');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertCommissionAdvanceBalanceIsDisplayed();
});

test('Displays Commissions by Organization Calculation report for US', async () => {
  await reportsCommissionsPage.navigateToReportsCommissionsPage2();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2015', 'January');
  await reportsCommissionsPage.clickOnSearchDates2Day31();
  await reportsCommissionsPage.selectCountry('United States');
  await reportsCommissionsPage.selectReport('Commissions by Organization');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertComByOrganizationCalculationIsDisplayed();
});

// Canada
test('Displays all reports titles of Associate Statements section on the calendar for Canada', async () => {
  await reportsCommissionsPage.navigateToReportsCommissionsPage3();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2015', 'March');
  await reportsCommissionsPage.clickOnSearchDatesDay20();
  await reportsCommissionsPage.selectCountry('Canada');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertAllReportsAreDisplayed();
});

test('Displays Advanced Commission report for Canada', async () => {
  await reportsCommissionsPage.navigateToReportsCommissionsPage3();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2015', 'March');
  await reportsCommissionsPage.clickOnSearchDatesDay20();
  await reportsCommissionsPage.selectCountry('Canada');
  await reportsCommissionsPage.selectReport('Advanced Commission');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertAdvancedCommissionIsDisplayed();
});

test('Displays Earned Commission report for Canada', async () => {
  await reportsCommissionsPage.navigateToReportsCommissionsPage3();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2015', 'March');
  await reportsCommissionsPage.clickOnSearchDatesDay20();
  await reportsCommissionsPage.selectCountry('Canada');
  await reportsCommissionsPage.selectReport('Earned Commission');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertEarnedCommissionIsDisplayed();
});

test('Displays Commission Advance Balance / Reserve Balance report for Canada', async () => {
  await reportsCommissionsPage.navigateToReportsCommissionsPage3();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2015', 'March');
  await reportsCommissionsPage.clickOnSearchDatesDay20();
  await reportsCommissionsPage.selectCountry('Canada');
  await reportsCommissionsPage.selectReport('Commission Advance Balance / Reserve Balance');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertCommissionAdvanceBalanceIsDisplayed();
});

test('Displays Commissions by Organization Calculation report for Canada', async () => {
  await reportsCommissionsPage.navigateToReportsCommissionsPage3();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2015', 'March');
  await reportsCommissionsPage.clickOnSearchDatesDay20();
  await reportsCommissionsPage.selectCountry('Canada');
  await reportsCommissionsPage.selectReport('Commissions by Organization');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertComByOrganizationCalculationIsDisplayed();
});
