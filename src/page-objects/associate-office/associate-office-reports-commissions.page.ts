import { LoginPage } from '../login/login.page';
import { expect } from '@playwright/test';
import { associateReportsCommissions2, associateReportsCommissions3, revenueReports } from '../../utils/user.utils';
import { associateReportsCommissions } from '../../utils/user.utils';
import UrlsUtils from '../../utils/urls.utils';

// ========================== Selectors ==================================
const LBL_ASSOCIATE_NUMBER = '.lsux-heading.lsux-heading--t28';
const DTP_SEARCH_DATES = "input[placeholder='Search dates']";
const DTP_CALENDAR = "img[class*='lsux-icon--small']";
const DTP_YEAR = '.react-datepicker__year-select';
const DTP_MONTH = '.react-datepicker__month-select';
const DTP_DAY2 = "(//div[contains(@class,'react-datepicker__day--002')])[1]";
const DTP_DAY20 = "//div[contains(@class,'react-datepicker__day--020')]";
const DTP_DAY28 = "//div[contains(@class,'react-datepicker__day--028')]";
const DTP_DAY29 = "(//div[contains(@class,'react-datepicker__day--029')])[2]";
const DTP_DAY31 = "(//div[contains(@class,'react-datepicker__day--031')])[1]";
const DTP2_DAY31 = "(//div[contains(@class,'react-datepicker__day--031')])[2]";
const CBO_COUNTRY = '.quarters.children4 > div:nth-child(2) select';
const CBO_COUNTRY2 = "(//select[contains(@class,'select')])[2]";
const CBO_COUNTRY3 = "(//select[contains(@class,'select')])[1]";
const CBO_COUNTRY4 = "//select[contains(@class,'select')]";
const BTN_SEARCH = 'button[class*="lsux-button--primary"]';
const LBL_ASSOCIATE_LEVEL = "div[class='lsux-row plain children3']";
const LBL_ASSOCIATE_FULL_NAME = "(//span[contains(@class,'lsux-text')])[1]";
const LBL_ASSOCIATE_STREET = "(//span[contains(@class,'lsux-text')])[2]";
const LBL_ASSOCIATE_CITY_STATE_ZIP_CODE = "(//span[contains(@class,'lsux-text')])[3]";
const TAB_ASSOCIATE_STATEMENTS = "//h4[.='Associate Statements']";
const TAB_PENDING_STATEMENTS = "//h4[.='Pending Statements']";
const TAB_FAST_START_STATEMENTS = "//h4[.='Fast Start Statements']";
const TAB_REVENUE_REPORT = "//h4[.='Revenue Report Statements']";
const LBL_SEARCH_COMMISSION_STATEMENTS = "//span[.='Search Commission Statements']";
const DTP_SELECT_CALCULATION = "div[class*='quarters'] > div:nth-of-type(3) > div > div > div > select";
// Advanced Commission report
const LBL_ADVANCED_COMMISSION = 'h2:has-text("Advanced Commission")';
const LBL_COMMISSION_LVL = "(//h3[contains(@class,'lsux-heading--t20')])[2]";
const LBL_ADVNCD_COMMISSIONS = "(//h3[contains(@class,'lsux-heading--t20')])[3]";
const LBL_AVD_COM_EARNINGS = "(//h3[contains(@class,'lsux-heading--t20')])[4]";
const LBL_ADVANCE_TRANSACTIONS = "(//h4[contains(@class,'lsux-heading--t16')])[5]";
const LBL_ADVD_COMMISSION_COLUMN = "(//h4[contains(@class,'lsux-heading--t16')])[6]";
const LBL_CANCELLATION_TRANSACTIONS = "(//h4[contains(@class,'lsux-heading--t16')])[7]";
const LBL_ADVANCE_RECOVERY = "(//h4[contains(@class,'lsux-heading--t16')])[8]";
const LBL_ADVD_COMMISSION_SUMMARY = "(//h3[contains(@class,'lsux-heading--t20')])[5]";
// Earned Commission report
const LBL_EARNED_COMMISSION = 'h2:has-text("Earned Commission")';
const LBL_TOTALS_EARNED_COMMISSIONS = 'text="Totals earned commissions for period"';
// Commission Advance Balance / Reserve Balance report
const LBL_COM_ADVANCE_BALANCE = 'h2:has-text("Commission Advance Balance / Reserve Balance")';
const LBL_ACA_BALANCE_CALCULATION = 'text="Associate Commission Advance Balance Calculation"';
const LBL_RESERVE_CALCULATION = 'text="Associate Reserve Balance Calculation"';
// Commissions by Organization report
const LBL_COM_BY_ORG_CALCULATION = 'h2:has-text("Commissions by Organization Calculation")';
const LBL_PRODUCING_LEGS = 'text="Producing Legs"';
// Commission Adjustments report
const LBL_COMMISSION_ADJUSTMENTS = 'h2:has-text("Commission Adjustments")';
const LBL_ADVANCE_DEBIT = "//h4[.='Advance Debit']";
const LBL_ADVANCE_CREDIT = "//h4[.='Advance Credit']";
// Personal Memberships / Reinstatements / Add Ons report
const LBL_PERSONAL_MEMBERSHIPS = 'h2:has-text("Personal Memberships / Reinstatements / Add Ons")';
const LBL_TYPE = "//div[.='Type']";
// Personal Cancellations report
const LBL_PERSONAL_CANCELLATIONS = 'h2:has-text("Personal Cancellations")';
const LBL_MONTHS_PAID = 'text="Months Paid"';
const LBL_REASON = 'text="Reason"';
// Pending Statements
const LBL_PENDING_COMMISSION_STATEMENTS = 'xpath=//div/p';
// Fast Start Statements
const LBL_TRAINEE_NUMBER = 'text="Trainee Number"';
const LBL_TRAINEE_NAME = 'text="Trainee Name"';
const LBL_PAYMENT = 'text="Payment"';

/**
 *
 *
 * @export
 * @class ReportsCommissionsPage
 * @extends {LoginPage}
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
    await this.selectFromDropDownMenu(DTP_MONTH, month);
    await this.selectFromDropDownMenu(DTP_YEAR, year);
  };
  /**
   * select a country from a combo
   * @param {string} country
   * @memberof ReportsCommissionsPage
   */
  selectCountry = async (country: string): Promise<void> => {
    console.log(' - ReportsCommissionsPage.selectCountry');
    await this.selectFromDropDownMenu(CBO_COUNTRY, country);
  };
  /**
   * select a country from a combo
   * @param {string} country
   * @memberof ReportsCommissionsPage
   */
  selectCountry2 = async (country: string): Promise<void> => {
    console.log(' - ReportsCommissionsPage.selectCountry');
    await this.selectFromDropDownMenu(CBO_COUNTRY2, country);
  };
  /**
   * select a country from a combo
   * @param {string} country
   * @memberof ReportsCommissionsPage
   */
  selectCountry3 = async (country: string): Promise<void> => {
    console.log(' - ReportsCommissionsPage.selectCountry');
    await this.selectFromDropDownMenu(CBO_COUNTRY3, country);
  };
  /**
   * select a country from a combo
   * @param {string} report
   * @memberof ReportsCommissionsPage
   */
  selectReport = async (report: string): Promise<void> => {
    console.log(' - ReportsCommissionsPage.selectReport');
    await this.selectFromDropDownMenu(DTP_SELECT_CALCULATION, report);
  };
  // ========================== Navigate Methods ===========================
  navigateToReportsCommissionsPage = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.navigateToReportsCommissionsPage');
    // Navigate to Report Commission Page
    await this.goTo(UrlsUtils.channelsUrls.reportsCommissions.url);
    await this.login(revenueReports.username as string, revenueReports.password as string);
    await this.page.click("h2:has-text('Harold Pinson')");
    await this.page.waitForSelector(TAB_REVENUE_REPORT);
  };

  navigateToReportsCommissionsPage2 = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.navigateToReportsCommissionsPage');
    // Navigate to Report Commission Page
    await this.goTo(UrlsUtils.channelsUrls.reportsCommissions.url);
    await this.login(associateReportsCommissions.username as string, associateReportsCommissions.password as string);
    await this.page.waitForSelector(LBL_ASSOCIATE_NUMBER);
  };

  navigateToReportsCommissionsPage3 = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.navigateToReportsCommissionsPage');
    // Navigate to Report Commission Page
    await this.goTo(UrlsUtils.channelsUrls.reportsCommissions.url);
    await this.login(associateReportsCommissions2.username as string, associateReportsCommissions2.password as string);
    await this.page.waitForSelector(LBL_ASSOCIATE_NUMBER);
  };

  navigateToReportsCommissionsPage4 = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.navigateToReportsCommissionsPage');
    // Navigate to Report Commission Page
    await this.goTo(UrlsUtils.channelsUrls.reportsCommissions.url);
    await this.login(associateReportsCommissions3.username as string, associateReportsCommissions3.password as string);
    await this.page.waitForSelector(LBL_ASSOCIATE_NUMBER);
  };

  // ========================== Click Methods ==============================
  clickOnSearchDates = async (): Promise<void> => {
    // Click on data picker
    console.log(' - ReportsCommissionsPage.clickOnSearchDates');
    await this.page.click(DTP_SEARCH_DATES);
  };

  clickOnCalendarDate = async (): Promise<void> => {
    // Click  on Calendar
    console.log(' - ReportsCommissionsPage.clickOnCalendarDate');
    await this.page.click(DTP_CALENDAR);
  };

  clickOnSearchDatesYear = async (): Promise<void> => {
    // Click on year combo
    console.log(' - ReportsCommissionsPage.clickOnSearchDatesYear');
    await this.page.click(DTP_YEAR);
  };

  clickOnSearchDatesMonth = async (): Promise<void> => {
    // Click on month combo
    console.log(' - ReportsCommissionsPage.clickOnSearchDatesMonth');
    await this.page.click(DTP_MONTH);
  };

  clickOnSearchDatesDay2 = async (): Promise<void> => {
    // Click on day 2 from calendar
    console.log(' - ReportsCommissionsPage.clickOnSearchDatesDay');
    await this.clickOnElement(DTP_DAY2);
  };

  clickOnSearchDatesDay20 = async (): Promise<void> => {
    // Click on day 19 from calendar
    console.log(' - ReportsCommissionsPage.clickOnSearchDatesDay');
    await this.clickOnElement(DTP_DAY20);
  };

  clickOnSearchDatesDay28 = async (): Promise<void> => {
    // Click on day 28 from calendar
    console.log(' - ReportsCommissionsPage.clickOnSearchDatesDay');
    await this.clickOnElement(DTP_DAY28);
  };

  clickOnSearchDatesDay29 = async (): Promise<void> => {
    // Click on day 29 from calendar
    console.log(' - ReportsCommissionsPage.clickOnSearchDatesDay');
    await this.clickOnElement(DTP_DAY29);
  };

  clickOnSearchDatesDay31 = async (): Promise<void> => {
    // Click on day 31 from calendar
    console.log(' - ReportsCommissionsPage.clickOnSearchDatesDay');
    await this.clickOnElement(DTP_DAY31);
  };

  clickOnSearchDates2Day31 = async (): Promise<void> => {
    // Click on day 31 from calendar
    console.log(' - ReportsCommissionsPage.clickOnSearchDatesDay');
    await this.clickOnElement(DTP2_DAY31);
  };

  clickOnSearchButton = async (): Promise<void> => {
    // Click on Search button
    console.log(' - ReportsCommissionsPage.clickOnSearchButton');
    await this.page.click(BTN_SEARCH);
  };

  clickOnPendingStatements = async (): Promise<void> => {
    // Click on Pending Statements tab
    console.log(' - ReportsCommissionsPage.clickOnPendingStatements');
    await this.page.click(TAB_PENDING_STATEMENTS);
  };

  clickOnFastStartStatements = async (): Promise<void> => {
    // Click on Fast Start Statements tab
    console.log(' - ReportsCommissionsPage.clickOnFastStartStatements');
    await this.page.click(TAB_FAST_START_STATEMENTS);
  };

  clickOnRevenueReportTab = async (): Promise<void> => {
    // Click on Revenue Report tab
    console.log(' - ReportsCommissionsPage.clickOnRevenueReportTab');
    await this.page.click(TAB_REVENUE_REPORT);
  };

  // ========================== Assertion Methods ==========================
  assertReportsCommissionsPageShow = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertReportsCommissionsPageShow');
    await this.assertElementIsVisible(LBL_ASSOCIATE_NUMBER);
    await this.assertElementIsVisible(LBL_ASSOCIATE_LEVEL);
  };

  assertAssociateAddressInfo = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertAssociateAddressInfo');
    await this.assertElementIsVisible(LBL_ASSOCIATE_FULL_NAME);
    await this.assertElementIsVisible(LBL_ASSOCIATE_STREET);
    await this.assertElementIsVisible(LBL_ASSOCIATE_CITY_STATE_ZIP_CODE);
  };

  assertTabAssociateStatementsIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertTabAssociateStatementsIsDisplayed');
    await this.assertElementIsVisible(TAB_ASSOCIATE_STATEMENTS);
  };

  assertTabPendingStatementsIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertTabPendingStatementsIsDisplayed');
    await this.assertElementIsVisible(TAB_PENDING_STATEMENTS);
  };

  assertTabFastStartStatementsIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertTabRevenueReportsIsDisplayed');
    await this.assertElementIsVisible(TAB_FAST_START_STATEMENTS);
  };

  assertTabRevenueReportIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertTabRevenueReportsIsDisplayed');
    await this.page.waitForSelector(TAB_REVENUE_REPORT);
    await this.assertElementIsVisible(TAB_REVENUE_REPORT);
  };

  assertSearchDatesIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertSearchDatesIsDisplayed');
    await this.assertElementIsVisible(DTP_SEARCH_DATES);
  };

  assertComboCountryIsEnable = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertComboCountryIsEnable');
    await this.assertElementIsEnabled(CBO_COUNTRY);
  };

  assertComboCountryIsEnable2 = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertComboCountryIsEnable');
    await this.assertElementIsEnabled(CBO_COUNTRY2);
  };

  assertComboCountryIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertComboCountryIsDisplayed');
    await this.assertElementIsVisible(CBO_COUNTRY);
  };

  assertComboCountryIsDisplayed2 = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertComboCountryIsDisplayed');
    await this.assertElementIsVisible(CBO_COUNTRY4);
  };

  assertSelectCalculationIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertSelectCalculationIsDisplayed');
    await this.assertElementIsVisible(DTP_SELECT_CALCULATION);
  };

  assertLblSearchCommissionStatementsIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertLblSearchCommissionStatementsIsDisplayed');
    await this.assertElementIsVisible(LBL_SEARCH_COMMISSION_STATEMENTS);
  };

  assertBtnSearchIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertBtnSearchIsDisplayed');
    await this.assertElementIsVisible(BTN_SEARCH);
  };

  assertAllReportsAreDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertAllReportsAreDisplayed');
    await this.page.waitForSelector(LBL_ADVANCED_COMMISSION);
    await this.assertElementIsVisible(LBL_ADVANCED_COMMISSION);
    await this.assertElementIsVisible(LBL_EARNED_COMMISSION);
    await this.assertElementIsVisible(LBL_COM_ADVANCE_BALANCE);
    await this.assertElementIsVisible(LBL_COM_BY_ORG_CALCULATION);
    await this.assertElementIsVisible(LBL_COMMISSION_ADJUSTMENTS);
    await this.assertElementIsVisible(LBL_PERSONAL_MEMBERSHIPS);
    await this.assertElementIsVisible(LBL_PERSONAL_CANCELLATIONS);
  };

  assertAdvancedCommissionIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertAdvancedCommissionIsDisplayed');
    await this.page.waitForSelector(LBL_ADVANCED_COMMISSION);
    await this.assertElementIsVisible(LBL_ADVANCED_COMMISSION);
    await this.assertElementIsVisible(LBL_COMMISSION_LVL);
    await this.assertElementIsVisible(LBL_ADVNCD_COMMISSIONS);
    await this.assertElementIsVisible(LBL_AVD_COM_EARNINGS);
    await this.assertElementIsVisible(LBL_ADVANCE_TRANSACTIONS);
    await this.assertElementIsVisible(LBL_ADVD_COMMISSION_COLUMN);
    await this.assertElementIsVisible(LBL_CANCELLATION_TRANSACTIONS);
    await this.assertElementIsVisible(LBL_ADVANCE_RECOVERY);
    await this.assertElementIsVisible(LBL_ADVD_COMMISSION_SUMMARY);
  };

  assertEarnedCommissionIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertEarnedCommissionIsDisplayed');
    await this.page.waitForSelector(LBL_EARNED_COMMISSION);
    await this.assertElementIsVisible(LBL_EARNED_COMMISSION);
    await this.assertElementIsVisible(LBL_TOTALS_EARNED_COMMISSIONS);
  };

  assertCommissionAdvanceBalanceIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertCommissionAdvanceBalanceIsDisplayed');
    await this.page.waitForSelector(LBL_COM_ADVANCE_BALANCE);
    await this.assertElementIsVisible(LBL_COM_ADVANCE_BALANCE);
    await this.assertElementIsVisible(LBL_ACA_BALANCE_CALCULATION);
    await this.assertElementIsVisible(LBL_RESERVE_CALCULATION);
  };

  assertComByOrganizationCalculationIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertComByOrganizationCalculationIsDisplayed');
    await this.page.waitForSelector(LBL_COM_BY_ORG_CALCULATION);
    await this.assertElementIsVisible(LBL_COM_BY_ORG_CALCULATION);
    await this.assertElementIsVisible(LBL_PRODUCING_LEGS);
  };

  assertCommissionAdjustmentsIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertCommissionAdjustmentsIsDisplayed');
    await this.page.waitForSelector(LBL_COMMISSION_ADJUSTMENTS);
    await this.assertElementIsVisible(LBL_COMMISSION_ADJUSTMENTS);
    await this.assertElementIsVisible(LBL_ADVANCE_DEBIT);
    await this.assertElementIsVisible(LBL_ADVANCE_CREDIT);
  };

  assertPersonalMembershipsIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertPersonalMembershipsIsDisplayed');
    await this.page.waitForSelector(LBL_PERSONAL_MEMBERSHIPS);
    await this.assertElementIsVisible(LBL_PERSONAL_MEMBERSHIPS);
    await this.assertElementIsVisible(LBL_TYPE);
  };

  assertPersonalCancellationsIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertPersonalCancellationsIsDisplayed');
    await this.page.waitForSelector(LBL_PERSONAL_CANCELLATIONS);
    await this.assertElementIsVisible(LBL_PERSONAL_CANCELLATIONS);
    await this.assertElementIsVisible(LBL_MONTHS_PAID);
    await this.assertElementIsVisible(LBL_REASON);
  };

  assertPendingStatementsIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertPendingStatementsIsDisplayed');
    await this.assertElementIsVisible(LBL_SEARCH_COMMISSION_STATEMENTS);
    console.log(await this.page.locator(LBL_PENDING_COMMISSION_STATEMENTS).nth(1).textContent());
    await expect(this.page.locator(LBL_PENDING_COMMISSION_STATEMENTS).nth(1)).toContainText('LEGALSHIELD');
    console.log(await this.page.locator(LBL_PENDING_COMMISSION_STATEMENTS).nth(2).textContent());
    await expect(this.page.locator(LBL_PENDING_COMMISSION_STATEMENTS).nth(2)).toContainText('********* PENDING COMMISSION STATEMENT *********');
  };

  assertPendingStatementsIsDisplayed2 = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertPendingStatementsIsDisplayed');
    await this.assertElementIsVisible(LBL_SEARCH_COMMISSION_STATEMENTS);
    console.log(await this.page.locator(LBL_PENDING_COMMISSION_STATEMENTS).nth(1).textContent());
    await expect(this.page.locator(LBL_PENDING_COMMISSION_STATEMENTS).nth(1)).toContainText('LEGALSHIELD');
    console.log(await this.page.locator(LBL_PENDING_COMMISSION_STATEMENTS).nth(2).textContent());
    await expect(this.page.locator(LBL_PENDING_COMMISSION_STATEMENTS).nth(2)).toContainText(
      '********* PENDING COMMISSION STATEMENT ********* (CANADA)'
    );
  };

  assertFastStartStatementsIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertFastStartStatementsIsDisplayed');
    await this.assertElementIsVisible(LBL_TRAINEE_NAME);
    await this.assertElementIsVisible(LBL_TRAINEE_NUMBER);
    await this.assertElementIsVisible(LBL_PAYMENT);
  };
}
