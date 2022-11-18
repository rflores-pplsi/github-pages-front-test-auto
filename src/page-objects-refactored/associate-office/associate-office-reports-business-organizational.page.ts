import { LoginPage } from '../login/login.page';
import { associateReportsCommissions, businessReports } from '../../utils/user.utils';
import UrlsUtils from '../../utils/urls.utils';
import { expect } from '@playwright/test';
// ========================== Selectors ==================================
const LBL_BUSINESS_REPORT_BREADCRUMB = 'span.lsux-crumbs__crumb--leaf';
const TAB_ORG_BUSINESS_REPORT = "(//h4[contains(@class,'lsux-heading--t16')])[1]";
const TAB_PERSONAL_BUSINESS_REPORT = "(//h4[contains(@class,'lsux-heading--t16')])[2]";
const TXA_SEARCH_BY = 'text=Search by Associate name or number in your downline to see their business report.';
const TXT_BOX_SEARCH_INPUT = "input[id='react-select-3-input']";
const TXT_BOX_SEARCH = "div[class=' css-319lph-ValueContainer']";
const BTN_SEARCH = "button[class*='lsux-button--primary']";
const LBL_TABLE_TITLE = 'h2.obr-table-title';
const LBL_OPTION = '#react-select-3-option-0';
const TXA_MESSAGE = 'text=Sorry, no associate found';
const LBL_ASSOCIATE_NUMBER = 'p.associate-number';
const LBL_ASSOCIATE_NAME = '.lsux-container h2';
const LNK_ASSOCIATE_NAME = 'a.associate-link';
const LBL_FRONTLINE_MSG = 'p:has-text("*Frontline associates in purple")';
const LBL_ROWS_PER_PAGE = 'span:has-text("Rows per page:")';
const TBL_REF_NO = "(//div[contains(@class,'lsux-table__row')])[2]";
const TBL_NAME = "(//div[contains(@class,'lsux-table__row')])[3]";
const TBL_PHONE = "(//div[contains(@class,'lsux-table__row')])[4]";
const TBL_EMAIL = "(//div[contains(@class,'lsux-table__row')])[5]";
const TBL_REGION = "(//div[contains(@class,'lsux-table__row')])[6]";
const LBL_MARKETING_SITE = "(//div[contains(@class,'lsux-table__row')])[14]";
const LBL_STATUS = "(//div[contains(@class,'lsux-table__row')])[26]";
const LBL_PENDING = "(//div[contains(@class,'lsux-table__row')])[31]";
const LBL_ACTION = "(//div[contains(@class,'lsux-table__row')])[35]";
const MSG_CONTACT_MEMBER_SERVICES = "(//div[contains(@class,'lsux-table__row')])[37]";

/**
 *
 *
 * @export
 * @class ReportsCommissionsPage
 * @extends {LoginPage}
 */
export class ReportsBusinessOrganizationalPage extends LoginPage {
  // ========================== Process Methods ============================

  // ========================== Navigate Methods ===========================
  navigateToReportsBusinessOrganizationalPage = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.navigateToReportsBusinessOrganizationalPage');
    // Navigate to Business Organizational Page
    await this.goTo(UrlsUtils.channelsUrls.reportsBusinessOrganizational.url);
    await this.login(associateReportsCommissions.username, associateReportsCommissions.password);
    await this.page.waitForSelector(TXA_SEARCH_BY);
  };

  navigateToReportsBusinessPersonalPage = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.navigateToReportsBusinessPersonalPage');
    // Navigate to Business Personal Page
    await this.goTo(UrlsUtils.channelsUrls.reportsBusinessPersonal.url);
    await this.login(businessReports.username, businessReports.password);
    await this.page.waitForSelector(TXA_SEARCH_BY);
  };
  // ========================== Click Methods ==============================
  clickOnAssociateName = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.clickOnAssociateName');
    await this.page.click(LNK_ASSOCIATE_NAME);
  };

  clickOnOption = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.clickOnOption');
    await this.page.click(LBL_OPTION);
  };

  clickOnSearchButton = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.clickOnSearchButton');
    await this.page.click(BTN_SEARCH);
  };
  // ========================== Fill Methods ===============================
  fillTxtBoxSearch = async (txt: string): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.fillTxtBoxSearch');
    await this.page.fill(TXT_BOX_SEARCH_INPUT, txt);
  };
  // ========================== Assertion Methods ==========================
  assertPageTitle = async (title: string): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertPageTitle');
    await expect(this.page).toHaveTitle(title);
  };

  assertBreadcrumbLinkIsDisplayed = async (breadcrumbLinkTxt: string): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage. assertBreadcrumbLinkIsDisplayed');
    await this.assertElementIsVisible(LBL_BUSINESS_REPORT_BREADCRUMB);
    await expect(this.page.locator(LBL_BUSINESS_REPORT_BREADCRUMB)).toContainText(breadcrumbLinkTxt);
  };

  assertOrganizationalBusinessReportTabIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertOrganizationalBusinessReportTabIsDisplayed');
    await this.assertElementIsVisible(TAB_ORG_BUSINESS_REPORT);
    await expect(this.page.locator(TAB_ORG_BUSINESS_REPORT)).toContainText('Organizational Business Report');
  };

  assertPersonalBusinessReportTabIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertPersonalBusinessReportTabIsDisplayed');
    await this.assertElementIsVisible(TAB_PERSONAL_BUSINESS_REPORT);
    await expect(this.page.locator(TAB_PERSONAL_BUSINESS_REPORT)).toContainText('Personal Business Report');
  };

  assertTxaSearchByTxtIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertTxaSearchByIsDisplayed');
    await expect(this.page.locator(TXA_SEARCH_BY)).toContainText('Search by Associate name or number in your downline to see their business report.');
    await this.assertElementIsVisible(TXA_SEARCH_BY);
  };

  assertTxtBoxSearchIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertTxtBoxSearchIsDisplayed');
    await this.assertElementIsVisible(TXT_BOX_SEARCH);
  };

  assertBtnSearchIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertBtnSearchIsDisplayed');
    await this.assertElementIsVisible(BTN_SEARCH);
  };

  assertTableTitle = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertTableTitle');
    await this.assertElementIsVisible(LBL_TABLE_TITLE);
    await expect(this.page.locator(LBL_TABLE_TITLE)).toContainText('Organizational Business Report');
  };

  assertNoAssociateFoundMessage = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertNoAssociateFoundMessage');
    await this.assertElementIsVisible(TXA_MESSAGE);
    await expect(this.page.locator(TXA_MESSAGE)).toContainText('Sorry, no associate found');
  };

  assertAssociateName = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertAssociateName');
    await this.assertElementIsVisible(LBL_ASSOCIATE_NAME);
  };

  assertAssociateNumber = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertAssociateNumber');
    await this.assertElementIsVisible(LBL_ASSOCIATE_NUMBER);
  };

  assertFrontlineMessage = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertFrontlineMessage');
    await this.assertElementIsVisible(LBL_FRONTLINE_MSG);
    await expect(this.page.locator(LBL_FRONTLINE_MSG)).toContainText('*Frontline associates in purple');
  };

  assertColumnNames = async (number = 0, name: string): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertColumnNames');
    await this.assertElementIsVisible(`(//div[@class="sc-evZas eUeqdG"])[${number}]`);
    await expect(this.page.locator(`(//div[@class="sc-evZas eUeqdG"])[${number}]`)).toContainText(name);
  };

  assertBoxSearchHasText = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertBoxSearchHasText');
    await this.assertElementIsVisible(TXT_BOX_SEARCH);
    await expect(this.page.locator(TXT_BOX_SEARCH)).toContainText('Associate name or number');
  };

  assertRowsPerPage = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertRowsPerPage');
    await this.assertElementIsVisible(LBL_ROWS_PER_PAGE);
    await expect(this.page.locator(LBL_ROWS_PER_PAGE)).toContainText('Rows per page:');
  };

  assertTables = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertTables');
    await this.assertElementIsVisible(TBL_REF_NO);
    await expect(this.page.locator(TBL_REF_NO)).toContainText('Ref. No');
    await this.assertElementIsVisible(TBL_NAME);
    await expect(this.page.locator(TBL_NAME)).toContainText('Name');
    await this.assertElementIsVisible(TBL_PHONE);
    await expect(this.page.locator(TBL_PHONE)).toContainText('Phone');
    await this.assertElementIsVisible(TBL_EMAIL);
    await expect(this.page.locator(TBL_EMAIL)).toContainText('Email');
    await this.assertElementIsVisible(TBL_REGION);
    await expect(this.page.locator(TBL_REGION)).toContainText('Region');
    await this.assertElementIsVisible(LBL_MARKETING_SITE);
    await expect(this.page.locator(LBL_MARKETING_SITE)).toContainText('Marketing Site');
    await this.assertElementIsVisible(LBL_STATUS);
    await expect(this.page.locator(LBL_STATUS)).toContainText('Status');
    await this.assertElementIsVisible(LBL_PENDING);
    await expect(this.page.locator(LBL_PENDING)).toContainText('Pending');
    await this.assertElementIsVisible(LBL_ACTION);
    await expect(this.page.locator(LBL_ACTION)).toContainText('Action');
    await this.assertElementIsVisible(MSG_CONTACT_MEMBER_SERVICES);
    await expect(this.page.locator(MSG_CONTACT_MEMBER_SERVICES)).toContainText(
      'Please contact Member Services to verify the accuracy of account information 1-800-654-7757'
    );
  };
}
