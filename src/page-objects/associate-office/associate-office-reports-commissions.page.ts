import { LoginPage } from '../login/login.page';
import { expect } from '@playwright/test';
import { associateReportsCommissions2, associateReportsCommissions3, revenueReports } from '../../utils/user.utils';
import { associateReportsCommissions } from '../../utils/user.utils';
import UrlsUtils from '../../utils/urls.utils';

// ========================== Selectors ==================================
const lblAssociateNumber: string = '.lsux-heading.lsux-heading--t28';
const dtpSearchDates: string = "input[placeholder='Search dates']";
const dtpCalendar: string = "img[class*='lsux-icon--small']";
const dtpYear: string = '.react-datepicker__year-select';
const dtpMonth: string = '.react-datepicker__month-select';
const dtpDay2: string = "(//div[contains(@class,'react-datepicker__day--002')])[1]";
const dtpDay20: string = "//div[contains(@class,'react-datepicker__day--020')]";
const dtpDay28: string = "//div[contains(@class,'react-datepicker__day--028')]";
const dtpDay29: string = "(//div[contains(@class,'react-datepicker__day--029')])[2]";
const dtpDay31: string = "(//div[contains(@class,'react-datepicker__day--031')])[1]";
const dtp2Day31: string = "(//div[contains(@class,'react-datepicker__day--031')])[2]";
const cboCountry: string = '.quarters.children4 > div:nth-child(2) select';
const cboCountry2: string = "(//select[contains(@class,'select')])[2]";
const cboCountry3: string = "(//select[contains(@class,'select')])[1]";
const cboCountry4: string = "//select[contains(@class,'select')]";
const btnSearch: string = 'button[class*="lsux-button--primary"]';
const lblAssociateLevel: string = "div[class='lsux-row plain children3']";
const lblAssociateFullName: string = "(//span[contains(@class,'lsux-text')])[1]";
const lblAssociateStreet: string = "(//span[contains(@class,'lsux-text')])[2]";
const lblAssociateCityStateZipCode: string = "(//span[contains(@class,'lsux-text')])[3]";
const tabAssociateStatements: string = "//h4[.='Associate Statements']";
const tabPendingStatements: string = "//h4[.='Pending Statements']";
const tabFastStartStatements: string = "//h4[.='Fast Start Statements']";
const tabRevenueReport: string = "//h4[.='Revenue Report Statements']";
const lblSearchCommissionStatements: string = "//span[.='Search Commission Statements']";
const dtpSelectCalculation: string = "div[class*='quarters'] > div:nth-of-type(3) > div > div > div > select";
// Advanced Commission report
const lblAdvancedCommission: string = 'h2:has-text("Advanced Commission")';
const lblCommissionLvl: string = "(//h3[contains(@class,'lsux-heading--t20')])[2]";
const lblAdvncdCommissions: string = "(//h3[contains(@class,'lsux-heading--t20')])[3]";
const lblAvdComEarnings: string = "(//h3[contains(@class,'lsux-heading--t20')])[4]";
const lblAdvanceTransactions: string = "(//h4[contains(@class,'lsux-heading--t16')])[5]";
const lblAdvdCommissionColumn: string = "(//h4[contains(@class,'lsux-heading--t16')])[6]";
const lblCancellationTransactions: string = "(//h4[contains(@class,'lsux-heading--t16')])[7]";
const lblAdvanceRecovery: string = "(//h4[contains(@class,'lsux-heading--t16')])[8]";
const lblAdvdCommissionSummary: string = "(//h3[contains(@class,'lsux-heading--t20')])[5]";
// Earned Commission report
const lblEarnedCommission: string = 'h2:has-text("Earned Commission")';
const lblTotalsEarnedCommissions: string = 'text="Totals earned commissions for period"';
// Commission Advance Balance / Reserve Balance report
const lblComAdvanceBalance: string = 'h2:has-text("Commission Advance Balance / Reserve Balance")';
const lblACABalanceCalculation: string = 'text="Associate Commission Advance Balance Calculation"';
const lblReserveCalculation: string = 'text="Associate Reserve Balance Calculation"';
// Commissions by Organization report
const lblComByOrgCalculation: string = 'h2:has-text("Commissions by Organization Calculation")';
const lblProducingLegs: string = 'text="Producing Legs"';
// Commission Adjustments report
const lblCommissionAdjustments: string = 'h2:has-text("Commission Adjustments")';
const lblAdvanceDebit: string = "//h4[.='Advance Debit']";
const lblAdvanceCredit: string = "//h4[.='Advance Credit']";
// Personal Memberships / Reinstatements / Add Ons report
const lblPersonalMemberships: string = 'h2:has-text("Personal Memberships / Reinstatements / Add Ons")';
const lblType: string = "//div[.='Type']";
// Personal Cancellations report
const lblPersonalCancellations: string = 'h2:has-text("Personal Cancellations")';
const lblMonthsPaid: string = 'text="Months Paid"';
const lblReason: string = 'text="Reason"';
// Pending Statements
const lblPendingCommissionStatements: string = 'xpath=//div/p';
// Fast Start Statements
const lblTraineeNumber: string = 'text="Trainee Number"';
const lblTraineeName: string = 'text="Trainee Name"';
const lblPayment: string = 'text="Payment"';

/**
 *
 * @export
 * @class ReportsCommissionsPage
 * @extends
 */
export class ReportsCommissionsPage extends LoginPage {
  // ========================== Process Methods ============================
  /**
   * pick month and year from date picker
   * @param {string} year
   * @param {string} month
   * @memberof ReportsCommissionsPage
   */
  selectDateFromSearchDates = async (year: string, month: string): Promise<void> => {
    console.log(' - ReportsCommissionsPage.selectDateFromSearchDates');
    await this.selectFromDropDownMenu(dtpMonth, month);
    await this.selectFromDropDownMenu(dtpYear, year);
  };
  /**
   * select a country from a combo
   * @param {string} country
   * @memberof ReportsCommissionsPage
   */
  selectCountry = async (country: string): Promise<void> => {
    console.log(' - ReportsCommissionsPage.selectCountry');
    await this.selectFromDropDownMenu(cboCountry, country);
  };
  /**
   * select a country from a combo
   * @param {string} country
   * @memberof ReportsCommissionsPage
   */
  selectCountry2 = async (country: string): Promise<void> => {
    console.log(' - ReportsCommissionsPage.selectCountry');
    await this.selectFromDropDownMenu(cboCountry2, country);
  };
  /**
   * select a country from a combo
   * @param {string} country
   * @memberof ReportsCommissionsPage
   */
  selectCountry3 = async (country: string): Promise<void> => {
    console.log(' - ReportsCommissionsPage.selectCountry');
    await this.selectFromDropDownMenu(cboCountry3, country);
  };
  /**
   * select a country from a combo
   * @param {string} report
   * @memberof ReportsCommissionsPage
   */
  selectReport = async (report: string): Promise<void> => {
    console.log(' - ReportsCommissionsPage.selectReport');
    await this.selectFromDropDownMenu(dtpSelectCalculation, report);
  };
  // ========================== Navigate Methods ===========================
  navigateToReportsCommissionsPage = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.navigateToReportsCommissionsPage');
    // Navigate to Report Commission Page
    await this.goTo(UrlsUtils.channelsUrls.reportscommissions.url);
    await this.login(revenueReports.username, revenueReports.password);
    await this.page.click("h2:has-text('Harold Pinson')");
    await this.page.waitForSelector(tabRevenueReport);
  };

  navigateToReportsCommissionsPage2 = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.navigateToReportsCommissionsPage');
    // Navigate to Report Commission Page
    await this.goTo(UrlsUtils.channelsUrls.reportscommissions.url);
    await this.login(associateReportsCommissions.username, associateReportsCommissions.password);
    await this.page.waitForSelector(lblAssociateNumber);
  };

  navigateToReportsCommissionsPage3 = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.navigateToReportsCommissionsPage');
    // Navigate to Report Commission Page
    await this.goTo(UrlsUtils.channelsUrls.reportscommissions.url);
    await this.login(associateReportsCommissions2.username, associateReportsCommissions2.password);
    await this.page.waitForSelector(lblAssociateNumber);
  };

  navigateToReportsCommissionsPage4 = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.navigateToReportsCommissionsPage');
    // Navigate to Report Commission Page
    await this.goTo(UrlsUtils.channelsUrls.reportscommissions.url);
    await this.login(associateReportsCommissions3.username, associateReportsCommissions3.password);
    await this.page.waitForSelector(lblAssociateNumber);
  };

  // ========================== Click Methods ==============================
  clickOnSearchDates = async (): Promise<void> => {
    // Click on data picker
    console.log(' - ReportsCommissionsPage.clickOnSearchDates');
    await this.page.click(dtpSearchDates);
  };

  clickOnCalendarDate = async (): Promise<void> => {
    // Click  on Calendar
    console.log(' - ReportsCommissionsPage.clickOnCalendarDate');
    await this.page.click(dtpCalendar);
  };

  clickOnSearchDatesYear = async (): Promise<void> => {
    // Click on year combo
    console.log(' - ReportsCommissionsPage.clickOnSearchDatesYear');
    await this.page.click(dtpYear);
  };

  clickOnSearchDatesMonth = async (): Promise<void> => {
    // Click on month combo
    console.log(' - ReportsCommissionsPage.clickOnSearchDatesMonth');
    await this.page.click(dtpMonth);
  };

  clickOnSearchDatesDay2 = async (): Promise<void> => {
    // Click on day 2 from calendar
    console.log(' - ReportsCommissionsPage.clickOnSearchDatesDay');
    await this.clickOnElement(dtpDay2);
  };

  clickOnSearchDatesDay20 = async (): Promise<void> => {
    // Click on day 19 from calendar
    console.log(' - ReportsCommissionsPage.clickOnSearchDatesDay');
    await this.clickOnElement(dtpDay20);
  };

  clickOnSearchDatesDay28 = async (): Promise<void> => {
    // Click on day 28 from calendar
    console.log(' - ReportsCommissionsPage.clickOnSearchDatesDay');
    await this.clickOnElement(dtpDay28);
  };

  clickOnSearchDatesDay29 = async (): Promise<void> => {
    // Click on day 29 from calendar
    console.log(' - ReportsCommissionsPage.clickOnSearchDatesDay');
    await this.clickOnElement(dtpDay29);
  };

  clickOnSearchDatesDay31 = async (): Promise<void> => {
    // Click on day 31 from calendar
    console.log(' - ReportsCommissionsPage.clickOnSearchDatesDay');
    await this.clickOnElement(dtpDay31);
  };

  clickOnSearchDates2Day31 = async (): Promise<void> => {
    // Click on day 31 from calendar
    console.log(' - ReportsCommissionsPage.clickOnSearchDatesDay');
    await this.clickOnElement(dtp2Day31);
  };

  clickOnSearchButton = async (): Promise<void> => {
    // Click on Search button
    console.log(' - ReportsCommissionsPage.clickOnSearchButton');
    await this.page.click(btnSearch);
  };

  clickOnPendingStatements = async (): Promise<void> => {
    // Click on Pending Statements tab
    console.log(' - ReportsCommissionsPage.clickOnPendingStatements');
    await this.page.click(tabPendingStatements);
  };

  clickOnFastStartStatements = async (): Promise<void> => {
    // Click on Fast Start Statements tab
    console.log(' - ReportsCommissionsPage.clickOnFastStartStatements');
    await this.page.click(tabFastStartStatements);
  };

  clickOnRevenueReportTab = async (): Promise<void> => {
    // Click on Revenue Report tab
    console.log(' - ReportsCommissionsPage.clickOnRevenueReportTab');
    await this.page.click(tabRevenueReport);
  };

  // ========================== Assertion Methods ==========================
  assertReportsCommissionsPageShow = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertReportsCommissionsPageShow');
    await this.assertElementIsVisible(lblAssociateNumber);
    await this.assertElementIsVisible(lblAssociateLevel);
  };

  assertAssociateAddressInfo = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertAssociateAddressInfo');
    await this.assertElementIsVisible(lblAssociateFullName);
    await this.assertElementIsVisible(lblAssociateStreet);
    await this.assertElementIsVisible(lblAssociateCityStateZipCode);
  };

  assertTabAssociateStatementsIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertTabAssociateStatementsIsDisplayed');
    await this.assertElementIsVisible(tabAssociateStatements);
  };

  assertTabPendingStatementsIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertTabPendingStatementsIsDisplayed');
    await this.assertElementIsVisible(tabPendingStatements);
  };

  assertTabFastStartStatementsIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertTabRevenueReportsIsDisplayed');
    await this.assertElementIsVisible(tabFastStartStatements);
  };

  assertTabRevenueReportIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertTabRevenueReportsIsDisplayed');
    await this.page.waitForSelector(tabRevenueReport);
    await this.assertElementIsVisible(tabRevenueReport);
  };

  assertSearchDatesIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertSearchDatesIsDisplayed');
    await this.assertElementIsVisible(dtpSearchDates);
  };

  assertComboCountryIsEnable = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertComboCountryIsEnable');
    await this.assertElementIsEnabled(cboCountry);
  };

  assertComboCountryIsEnable2 = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertComboCountryIsEnable');
    await this.assertElementIsEnabled(cboCountry2);
  };

  assertComboCountryIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertComboCountryIsDisplayed');
    await this.assertElementIsVisible(cboCountry);
  };

  assertComboCountryIsDisplayed2 = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertComboCountryIsDisplayed');
    await this.assertElementIsVisible(cboCountry4);
  };

  assertSelectCalculationIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertSelectCalculationIsDisplayed');
    await this.assertElementIsVisible(dtpSelectCalculation);
  };

  assertLblSearchCommissionStatementsIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertLblSearchCommissionStatementsIsDisplayed');
    await this.assertElementIsVisible(lblSearchCommissionStatements);
  };

  assertBtnSearchIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertBtnSearchIsDisplayed');
    await this.assertElementIsVisible(btnSearch);
  };

  assertAllReportsAreDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertAllReportsAreDisplayed');
    await this.page.waitForSelector(lblAdvancedCommission);
    await this.assertElementIsVisible(lblAdvancedCommission);
    await this.assertElementIsVisible(lblEarnedCommission);
    await this.assertElementIsVisible(lblComAdvanceBalance);
    await this.assertElementIsVisible(lblComByOrgCalculation);
    await this.assertElementIsVisible(lblCommissionAdjustments);
    await this.assertElementIsVisible(lblPersonalMemberships);
    await this.assertElementIsVisible(lblPersonalCancellations);
  };

  assertAdvancedCommissionIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertAdvancedCommissionIsDisplayed');
    await this.page.waitForSelector(lblAdvancedCommission);
    await this.assertElementIsVisible(lblAdvancedCommission);
    await this.assertElementIsVisible(lblCommissionLvl);
    await this.assertElementIsVisible(lblAdvncdCommissions);
    await this.assertElementIsVisible(lblAvdComEarnings);
    await this.assertElementIsVisible(lblAdvanceTransactions);
    await this.assertElementIsVisible(lblAdvdCommissionColumn);
    await this.assertElementIsVisible(lblCancellationTransactions);
    await this.assertElementIsVisible(lblAdvanceRecovery);
    await this.assertElementIsVisible(lblAdvdCommissionSummary);
  };

  assertEarnedCommissionIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertEarnedCommissionIsDisplayed');
    await this.page.waitForSelector(lblEarnedCommission);
    await this.assertElementIsVisible(lblEarnedCommission);
    await this.assertElementIsVisible(lblTotalsEarnedCommissions);
  };

  assertCommissionAdvanceBalanceIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertCommissionAdvanceBalanceIsDisplayed');
    await this.page.waitForSelector(lblComAdvanceBalance);
    await this.assertElementIsVisible(lblComAdvanceBalance);
    await this.assertElementIsVisible(lblACABalanceCalculation);
    await this.assertElementIsVisible(lblReserveCalculation);
  };

  assertComByOrganizationCalculationIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertComByOrganizationCalculationIsDisplayed');
    await this.page.waitForSelector(lblComByOrgCalculation);
    await this.assertElementIsVisible(lblComByOrgCalculation);
    await this.assertElementIsVisible(lblProducingLegs);
  };

  assertCommissionAdjustmentsIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertCommissionAdjustmentsIsDisplayed');
    await this.page.waitForSelector(lblCommissionAdjustments);
    await this.assertElementIsVisible(lblCommissionAdjustments);
    await this.assertElementIsVisible(lblAdvanceDebit);
    await this.assertElementIsVisible(lblAdvanceCredit);
  };

  assertPersonalMembershipsIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertPersonalMembershipsIsDisplayed');
    await this.page.waitForSelector(lblPersonalMemberships);
    await this.assertElementIsVisible(lblPersonalMemberships);
    await this.assertElementIsVisible(lblType);
  };

  assertPersonalCancellationsIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertPersonalCancellationsIsDisplayed');
    await this.page.waitForSelector(lblPersonalCancellations);
    await this.assertElementIsVisible(lblPersonalCancellations);
    await this.assertElementIsVisible(lblMonthsPaid);
    await this.assertElementIsVisible(lblReason);
  };

  assertPendingStatementsIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertPendingStatementsIsDisplayed');
    await this.assertElementIsVisible(lblSearchCommissionStatements);
    console.log(await this.page.locator(lblPendingCommissionStatements).nth(1).textContent());
    await expect(this.page.locator(lblPendingCommissionStatements).nth(1)).toContainText('LEGALSHIELD');
    console.log(await this.page.locator(lblPendingCommissionStatements).nth(2).textContent());
    await expect(this.page.locator(lblPendingCommissionStatements).nth(2)).toContainText('********* PENDING COMMISSION STATEMENT *********');
  };

  assertPendingStatementsIsDisplayed2 = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertPendingStatementsIsDisplayed');
    await this.assertElementIsVisible(lblSearchCommissionStatements);
    console.log(await this.page.locator(lblPendingCommissionStatements).nth(1).textContent());
    await expect(this.page.locator(lblPendingCommissionStatements).nth(1)).toContainText('LEGALSHIELD');
    console.log(await this.page.locator(lblPendingCommissionStatements).nth(2).textContent());
    await expect(this.page.locator(lblPendingCommissionStatements).nth(2)).toContainText('********* PENDING COMMISSION STATEMENT ********* (CANADA)');
  };

  assertFastStartStatementsIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertFastStartStatementsIsDisplayed');
    await this.assertElementIsVisible(lblTraineeName);
    await this.assertElementIsVisible(lblTraineeNumber);
    await this.assertElementIsVisible(lblPayment);
  };
}
