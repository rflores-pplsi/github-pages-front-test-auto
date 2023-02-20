import { test } from '@playwright/test';
import { ReportsCommissionsPage } from '../../page-objects (Archived)/associate-office/associate-office-reports-commissions.page';

// create instance of Page
let reportsCommissionsPage: ReportsCommissionsPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  reportsCommissionsPage = new ReportsCommissionsPage(page);
  await reportsCommissionsPage.navigateToReportsCommissionsPage2();
});

test('Associate Info is displayed', async () => {
  await reportsCommissionsPage.assertReportsCommissionsPageShow();
  await reportsCommissionsPage.assertAssociateAddressInfo();
});

test('Associate Statements Tab is displayed', async () => {
  await reportsCommissionsPage.assertTabAssociateStatementsIsDisplayed();
  await reportsCommissionsPage.assertLblSearchCommissionStatementsIsDisplayed();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.assertComboCountryIsDisplayed();
  await reportsCommissionsPage.assertSelectCalculationIsDisplayed();
  await reportsCommissionsPage.assertBtnSearchIsDisplayed();
});

test('Pending Statements Tab is displayed', async () => {
  await reportsCommissionsPage.assertTabPendingStatementsIsDisplayed();
  await reportsCommissionsPage.clickOnPendingStatements();
  await reportsCommissionsPage.assertLblSearchCommissionStatementsIsDisplayed();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.assertComboCountryIsDisplayed2();
  await reportsCommissionsPage.assertBtnSearchIsDisplayed();
});

test('Fast Start Statement Tab is displayed', async () => {
  await reportsCommissionsPage.assertTabFastStartStatementsIsDisplayed();
  await reportsCommissionsPage.clickOnFastStartStatements();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.assertSearchDatesIsDisplayed();
  await reportsCommissionsPage.assertComboCountryIsDisplayed2();
  await reportsCommissionsPage.assertBtnSearchIsDisplayed();
});
