import { LoginPage } from '../login/login.page';
import { expect } from '@playwright/test';
import { associateAdvantagePlus } from '../../utils/user.utils';
import UrlsUtils from '../../utils/urls.utils';

// ========================== Selectors ==================================

const lblAssociateNumber: string = '.lsux-heading.lsux-heading--t28';
const tabFastStartStatement: string = '//*[text()[contains(.,"Fast Start Statements")]]';
const dtpSearchDates: string = "input[placeholder='Search dates']";
const dtpCalendar: string = "img[class*='lsux-icon--small']";
const dtpYear: string = '.react-datepicker__year-select';
const dtpMonth: string = '.react-datepicker__month-select';
const dtpDay5th: string = "(//div[contains(@class,'react-datepicker__day--005')])[1]";
const cboCountry: string = '.lsux-row div:nth-child(2) select';
const countryUS: string = "div[class*='quarters'] > div:nth-of-type(2) > div > div > div > select>option";
const countryCA: string = "#root div.tabs div.lsux-row.quarters.children4 > div:nth-child(2) select [ value='CAN']";
const lblAdvancedCommission: string = '//*[@id="root"]/div/div[2]/div[1]/div/div[3]/div/div[2]/div[1]/div/div[1]/div/div/h2';
const btnSearch: string = 'button[class*="lsux-button--primary"]';
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
    // Navigate to Business Report Commission Page
    await this.goTo(UrlsUtils.channelsUrls.reportscommissions.url);
    await this.login(associateAdvantagePlus.username, associateAdvantagePlus.password);
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
  clickOnSearchDatesDay5 = async (): Promise<void> => {
    // Click on day 5 from calendar
    console.log(' - ReportsCommissionsPage.clickOnSearchDatesDay');
    await this.assertElementIsEnabled(dtpDay5th);
    const locator = this.page.locator("(//div[contains(@class,'react-datepicker__day--005')])[1]");
    await expect(locator).toBeEnabled();
    await this.page.click(dtpDay5th);
  };
  clickOnSearchButton = async (): Promise<void> => {
    // Click on Search button
    console.log(' - ReportsCommissionsPage.clickOnSearchButton');
    await this.page.click(btnSearch);
  };
  // ========================== Assertion Methods ==========================
  assertReportsReportsCommissionsPageShow = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertReportsReportsCommissionsPageShow');
    await this.assertElementIsVisible(lblAssociateNumber);
  };
  assertTabFastStartStatementIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertTabPersonalBusinessReportIsDisplayed');
    await this.assertElementIsVisible(tabFastStartStatement);
  };
  assertSearchDatesIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertSearchDatesIsDisplayed');
    await this.assertElementIsVisible(dtpSearchDates);
  };
  assertComboCountryIsEnable = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertComboCountryIsEnable');
    await this.assertElementIsEnabled(cboCountry);
  };
  assertAdvancedCommissionIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertAdvancedCommissionIsDisplayed');
    await this.assertElementIsVisible(lblAdvancedCommission);
  };
}
