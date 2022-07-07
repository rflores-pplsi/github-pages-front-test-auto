import { LoginPage } from '../login/login.page';
import { expect } from '@playwright/test';
import { revenueReports } from '../../utils/user.utils';
import { associateReportsCommissions } from '../../utils/user.utils';
import UrlsUtils from '../../utils/urls.utils';

// ========================== Selectors ==================================

const lblAssociateNumber: string = '.lsux-heading.lsux-heading--t28';
const dtpSearchDates: string = "input[placeholder='Search dates']";
const dtpCalendar: string = "img[class*='lsux-icon--small']";
const dtpYear: string = '.react-datepicker__year-select';
const dtpMonth: string = '.react-datepicker__month-select';
const dtpDay2: string = "(//div[contains(@class,'react-datepicker__day--002')])[1]";
const cboCountry: string = '.lsux-row div:nth-child(2) select';
const countryUS: string = "div[class*='quarters'] > div:nth-of-type(2) > div > div > div > select>option";
const countryCA: string = "#root div.tabs div.lsux-row.quarters.children4 > div:nth-child(2) select [ value='CAN']";
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

/**
 *
 * @export
 * @class ChannelsHeaderPage
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
  // ========================== Navigate Methods ===========================
  navigateToReportsCommissionsPage = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.navigateToReportsCommissionsPage');
    // Navigate to Report Commission Page
    await this.goTo(UrlsUtils.channelsUrls.reportscommissions.url);
    await this.login(revenueReports.username, revenueReports.password);
    await this.page.waitForSelector(lblAssociateNumber);
  };

  navigateToReportsCommissionsPage2 = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.navigateToReportsCommissionsPage');
    // Navigate to Report Commission Page
    await this.goTo(UrlsUtils.channelsUrls.reportscommissions.url);
    await this.login(associateReportsCommissions.username, associateReportsCommissions.password);
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
    await this.assertElementIsEnabled(dtpDay2);
    const locator = this.page.locator(dtpDay2);
    await expect(locator).toBeEnabled();
    await this.page.click(dtpDay2);
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

  assertComboCountryIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertComboCountryIsDisplayed');
    await this.assertElementIsVisible(cboCountry);
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
}
