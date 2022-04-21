import { ChannelsHeaderPage } from '../../page-objects/channels/channels-header.page';
import UrlsUtils from '../../utils/urls.utils';
import { expect, Locator, Page, test } from '@playwright/test';
import { matchers } from 'expect-playwright';
// ========================== Selectors ==================================
const txtBoxSearch: string = 'input[name="associateInputSearch"]';
const organizationalBusinessReportBreadcrumb: string = '#root > div > div.lsux-content > div:nth-child(1) > div.lsux-crumbs > span';
const organizationalBusinessReportTabDisplayed: string =
  '#root > div > div.lsux-content > div:nth-child(1) > div.lsux-tab--bar.lsux-tab--stretch > div.lsux-tab.active > div > h4';
const txaAssociateNumber: string = 'div.associate-info p';
const txaSearchResult: string = '//*[@id="root"]/div/div[2]/div[1]/div[3]/div/div[1]/a/h2';
const txaPersonal: string = '//*[@id="root"]/div/div[2]/div[1]/div[3]/div';
//Report -> Commissions
const lblAssociateNumber: string = '.lsux-heading.lsux-heading--t28';
const tabFastStartStatement: string = '//*[text()[contains(.,"Fast Start Statements")]]';
// Associate Statement calendar
const dtpSearchDates: string = "input[placeholder='Search dates']";
const dtpCalendar: string = "img[class*='lsux-icon--small']";
const dtpYear: string = '.react-datepicker__year-select';
const dtpMonth: string = '.react-datepicker__month-select';
const dtpDay5th: string = "(//div[contains(@class,'react-datepicker__day--005')])[1]";
const cboCountry: string = '.lsux-row div:nth-child(2) select';
const countryUS: string = "div[class*='quarters'] > div:nth-of-type(2) > div > div > div > select>option";
const countryCA: string = "#root div.tabs div.lsux-row.quarters.children4 > div:nth-child(2) select [ value='CAN']";
const btnSearch: string = "button[class*='lsux-button--primary']";
const lblAdvancedCommission: string =
  '#root > div > div.lsux-content > div.commissions-container > div.tabs > div > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(1) > div > div > h2';
/**
 *
 *
 * @export
 * @class ReportsCommissionsPage
 * @extends {ChannelsHeaderPage}
 */
export class ReportsCommissionsPage extends ChannelsHeaderPage {
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
  navigateToReportsBusinessOrganizationalPage = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.navigateToReportsBusinessOrganizationalPage');
    // Navigate to Business Organizational Page
    await this.navigateToPage(UrlsUtils.channelsUrls.reportsbusinessorganizational.url);
  };
  navigateToReportsCommissionsPage = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.navigateToReportsCommissionsPage');
    // Navigate to Business Report Commission Page
    await this.navigateToPage(UrlsUtils.channelsUrls.reportscommissions.url);
  };
  // ========================== Click Methods ==============================
  clickTxtBoxSearch = async (): Promise<void> => {
    // Click on text box for search
    console.log(' - ReportsCommissionsPage.clicktxtBoxSearch');
    await this.page.click(txtBoxSearch);
  };
  clickSearchResult = async (): Promise<void> => {
    // Click on a search result
    console.log(' - ReportsCommissionsPage.clickSearchResult');
    await this.page.click(txaSearchResult);
  };
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
  // ========================== Fill Methods ===============================
  /**
   * @param {string} txt
   * @memberof ReportsCommissionsPage
   */
  fillTxtBoxSearch = async (txt: string): Promise<void> => {
    await this.page.click(txtBoxSearch);
    await this.page.fill(txtBoxSearch, txt);
  };
  // ========================== Assertion Methods ==========================
  assertReportsBusinessOrganizationalPageShow = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertReportsBusinessOrganizationalPageShow');
    await this.page.waitForSelector(txtBoxSearch);
    await this.assertElementIsVisible(txtBoxSearch);
  };
  assertReportsReportsCommissionsPageShow = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertReportsReportsCommissionsPageShow');
    await this.page.waitForSelector(lblAssociateNumber);
    await this.assertElementIsVisible(lblAssociateNumber);
  };
  assertPageTitle = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertPageTitle');
    const strTitle = 'Organizational Business Report';
    await this.page.waitForSelector(txtBoxSearch);
    //expect.stringMatching( strTitle.match(this.page.title.toString()) );
  };
  assertBreadcrumbLinkIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertBreadcrumbLinkIsDisplayed');
    await this.page.waitForSelector(txtBoxSearch);
    await this.assertElementIsVisible(organizationalBusinessReportBreadcrumb);
  };
  assertOrganizationalBusinessReportTaIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertOrganizationalBusinessReportTaIsDisplayed');
    await this.page.waitForSelector(txtBoxSearch);
    await this.assertElementIsVisible(organizationalBusinessReportTabDisplayed);
  };
  assertTxaAssociateNumberIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertTxaAssociateNumberIsDisplayed');
    await this.page.waitForSelector(txaAssociateNumber);
    await this.assertElementIsVisible(txaAssociateNumber);
  };
  assertTabPersonalBusinessReportIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertTabPersonalBusinessReportIsDisplayed');
    await this.page.waitForSelector(txaPersonal);
    await this.assertElementIsVisible(txaPersonal);
  };
  assertTabFastStartStatementIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertTabPersonalBusinessReportIsDisplayed');
    await this.page.waitForSelector(tabFastStartStatement);
    await this.assertElementIsVisible(tabFastStartStatement);
  };
  assertSearchDatesIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertSearchDatesIsDisplayed');
    await this.page.waitForSelector(dtpSearchDates);
    await this.assertElementIsVisible(dtpSearchDates);
  };
  assertComboCountryIsEnable = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertComboCountryIsEnable');
    await this.assertElementIsEnabled(cboCountry);
  };
  assertAdvancedCommissionIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.assertAdvancedCommissionIsDisplayed');
    await this.page.waitForSelector(lblAdvancedCommission);
    await this.assertElementIsVisible(lblAdvancedCommission);
  };
}
