import { LoginPage } from '../login/login.page';
import { associateReportsCommissions, businessReports } from '../../utils/user.utils';
import UrlsUtils from '../../utils/urls.utils';
import { expect } from '@playwright/test';
// ========================== Selectors ==================================
const lblBusinessReportBreadcrumb: string = 'span.lsux-crumbs__crumb--leaf';
const tabOrgBusinessReport: string = "(//h4[contains(@class,'lsux-heading--t16')])[1]";
const tabPersonalBusinessReport: string = "(//h4[contains(@class,'lsux-heading--t16')])[2]";
const txaSearchBy: string = 'text=Search by Associate name or number in your downline to see their business report.';
const txtBoxSearchInput: string = "input[id='react-select-3-input']";
const txtBoxSearch: string = "div[class=' css-319lph-ValueContainer']";
const btnSearch: string = "button[class*='lsux-button--primary']";
const lblTableTitle: string = 'h2.obr-table-title';
const lblOption: string = '#react-select-3-option-0';
const txaMessage: string = 'text=Sorry, no associate found';
const lblAssociateNumber: string = 'p.associate-number';
const lblAssociateName: string = '.lsux-container h2';
const lnkAssociateName: string = 'a.associate-link';
const lblFrontlineMsg: string = 'p:has-text("*Frontline associates in purple")';
const lblRowsPerPage: string = 'span:has-text("Rows per page:")';
const tblRefNo: string = "(//div[contains(@class,'lsux-table__row')])[2]";
const tblName: string = "(//div[contains(@class,'lsux-table__row')])[3]";
const tblPhone: string = "(//div[contains(@class,'lsux-table__row')])[4]";
const tblEmail: string = "(//div[contains(@class,'lsux-table__row')])[5]";
const tblRegion: string = "(//div[contains(@class,'lsux-table__row')])[6]";
const lblMarketingSite: string = "(//div[contains(@class,'lsux-table__row')])[14]";
const lblStatus: string = "(//div[contains(@class,'lsux-table__row')])[26]";
const lblPending: string = "(//div[contains(@class,'lsux-table__row')])[31]";
const lblAction: string = "(//div[contains(@class,'lsux-table__row')])[35]";
const msgContactMemberServices: string = "(//div[contains(@class,'lsux-table__row')])[37]";
// eslint-disable-next-line valid-jsdoc
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
    await this.page.waitForSelector(txaSearchBy);
  };

  navigateToReportsBusinessPersonalPage = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.navigateToReportsBusinessPersonalPage');
    // Navigate to Business Personal Page
    await this.goTo(UrlsUtils.channelsUrls.reportsBusinessPersonal.url);
    await this.login(businessReports.username, businessReports.password);
    await this.page.waitForSelector(txaSearchBy);
  };
  // ========================== Click Methods ==============================
  clickOnAssociateName = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.clickOnAssociateName');
    await this.page.click(lnkAssociateName);
  };

  clickOnOption = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.clickOnOption');
    await this.page.click(lblOption);
  };

  clickOnSearchButton = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.clickOnSearchButton');
    await this.page.click(btnSearch);
  };
  // ========================== Fill Methods ===============================
  fillTxtBoxSearch = async (txt: string): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.fillTxtBoxSearch');
    await this.page.fill(txtBoxSearchInput, txt);
  };
  // ========================== Assertion Methods ==========================
  assertPageTitle = async (title: string): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertPageTitle');
    await expect(this.page).toHaveTitle(title);
  };

  assertBreadcrumbLinkIsDisplayed = async (breadcrumbLinkTxt: string): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage. assertBreadcrumbLinkIsDisplayed');
    await this.assertElementIsVisible(lblBusinessReportBreadcrumb);
    await expect(this.page.locator(lblBusinessReportBreadcrumb)).toContainText(breadcrumbLinkTxt);
  };

  assertOrganizationalBusinessReportTabIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertOrganizationalBusinessReportTabIsDisplayed');
    await this.assertElementIsVisible(tabOrgBusinessReport);
    await expect(this.page.locator(tabOrgBusinessReport)).toContainText('Organizational Business Report');
  };

  assertPersonalBusinessReportTabIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertPersonalBusinessReportTabIsDisplayed');
    await this.assertElementIsVisible(tabPersonalBusinessReport);
    await expect(this.page.locator(tabPersonalBusinessReport)).toContainText('Personal Business Report');
  };

  assertTxaSearchByTxtIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertTxaSearchByIsDisplayed');
    await expect(this.page.locator(txaSearchBy)).toContainText('Search by Associate name or number in your downline to see their business report.');
    await this.assertElementIsVisible(txaSearchBy);
  };

  assertTxtBoxSearchIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertTxtBoxSearchIsDisplayed');
    await this.assertElementIsVisible(txtBoxSearch);
  };

  assertBtnSearchIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertBtnSearchIsDisplayed');
    await this.assertElementIsVisible(btnSearch);
  };

  assertTableTitle = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertTableTitle');
    await this.assertElementIsVisible(lblTableTitle);
    await expect(this.page.locator(lblTableTitle)).toContainText('Organizational Business Report');
  };

  assertNoAssociateFoundMessage = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertNoAssociateFoundMessage');
    await this.assertElementIsVisible(txaMessage);
    await expect(this.page.locator(txaMessage)).toContainText('Sorry, no associate found');
  };

  assertAssociateName = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertAssociateName');
    await this.assertElementIsVisible(lblAssociateName);
  };

  assertAssociateNumber = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertAssociateNumber');
    await this.assertElementIsVisible(lblAssociateNumber);
  };

  assertFrontlineMessage = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertFrontlineMessage');
    await this.assertElementIsVisible(lblFrontlineMsg);
    await expect(this.page.locator(lblFrontlineMsg)).toContainText('*Frontline associates in purple');
  };

  assertColumnNames = async (number: number = 0, name: string): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertColumnNames');
    await this.assertElementIsVisible(`(//div[@class="sc-evZas eUeqdG"])[${number}]`);
    await expect(this.page.locator(`(//div[@class="sc-evZas eUeqdG"])[${number}]`)).toContainText(name);
  };

  assertBoxSearchHasText = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertBoxSearchHasText');
    await this.assertElementIsVisible(txtBoxSearch);
    await expect(this.page.locator(txtBoxSearch)).toContainText('Associate name or number');
  };

  assertRowsPerPage = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertRowsPerPage');
    await this.assertElementIsVisible(lblRowsPerPage);
    await expect(this.page.locator(lblRowsPerPage)).toContainText('Rows per page:');
  };

  assertTables = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertTables');
    await this.assertElementIsVisible(tblRefNo);
    await expect(this.page.locator(tblRefNo)).toContainText('Ref. No');
    await this.assertElementIsVisible(tblName);
    await expect(this.page.locator(tblName)).toContainText('Name');
    await this.assertElementIsVisible(tblPhone);
    await expect(this.page.locator(tblPhone)).toContainText('Phone');
    await this.assertElementIsVisible(tblEmail);
    await expect(this.page.locator(tblEmail)).toContainText('Email');
    await this.assertElementIsVisible(tblRegion);
    await expect(this.page.locator(tblRegion)).toContainText('Region');
    await this.assertElementIsVisible(lblMarketingSite);
    await expect(this.page.locator(lblMarketingSite)).toContainText('Marketing Site');
    await this.assertElementIsVisible(lblStatus);
    await expect(this.page.locator(lblStatus)).toContainText('Status');
    await this.assertElementIsVisible(lblPending);
    await expect(this.page.locator(lblPending)).toContainText('Pending');
    await this.assertElementIsVisible(lblAction);
    await expect(this.page.locator(lblAction)).toContainText('Action');
    await this.assertElementIsVisible(msgContactMemberServices);
    await expect(this.page.locator(msgContactMemberServices)).toContainText(
      'Please contact Member Services to verify the accuracy of account information 1-800-654-7757'
    );
  };
}
