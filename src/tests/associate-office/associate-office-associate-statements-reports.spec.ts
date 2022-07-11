import { test } from '@playwright/test';
import { ReportsCommissionsPage } from '../../page-objects/associate/associate-office-reports-commissions.page';

// create instance of Page
let reportsCommissionsPage: ReportsCommissionsPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  reportsCommissionsPage = new ReportsCommissionsPage(page);
  await reportsCommissionsPage.navigateToReportsCommissionsPage2();
});

test('Associate Statements is displayed', async ({ page }) => {
  await reportsCommissionsPage.assertReportsCommissionsPageShow();
  await reportsCommissionsPage.assertTabAssociateStatementsIsDisplayed();
});

test('Displays all reports titles of Associate Statements section on the calendar for US', async ({ page }) => {
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2015', 'February');
  await reportsCommissionsPage.clickOnSearchDatesDay5();
  await reportsCommissionsPage.assertComboCountryIsEnable();
  await reportsCommissionsPage.selectCountry('United States');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertAdvancedCommissionIsDisplayed();
  await reportsCommissionsPage.assertEarnedCommissionIsDisplayed();
  await reportsCommissionsPage.assertCommissionAdvanceBalanceIsDisplayed();
  await reportsCommissionsPage.assertComByOrganizationCalculationIsDisplayed();
  await reportsCommissionsPage.assertCommissionAdjustmentsIsDisplayed();
  await reportsCommissionsPage.assertPersonalMembershipsIsDisplayed();
  await reportsCommissionsPage.assertPersonalCancellationsIsDisplayed();
});

test('Displays all reports titles of Associate Statements section on the calendar for Canada', async ({ page }) => {
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.clickOnSearchDates();
  await reportsCommissionsPage.selectDateFromSearchDates('2015', 'February');
  await reportsCommissionsPage.clickOnSearchDatesDay5();
  await reportsCommissionsPage.assertComboCountryIsEnable();
  await reportsCommissionsPage.selectCountry('Canada');
  await reportsCommissionsPage.clickOnSearchButton();
  await reportsCommissionsPage.assertAdvancedCommissionIsDisplayed();
  await reportsCommissionsPage.assertEarnedCommissionIsDisplayed();
  await reportsCommissionsPage.assertCommissionAdvanceBalanceIsDisplayed();
  await reportsCommissionsPage.assertComByOrganizationCalculationIsDisplayed();
  await reportsCommissionsPage.assertCommissionAdjustmentsIsDisplayed();
  await reportsCommissionsPage.assertPersonalMembershipsIsDisplayed();
  await reportsCommissionsPage.assertPersonalCancellationsIsDisplayed();
});
