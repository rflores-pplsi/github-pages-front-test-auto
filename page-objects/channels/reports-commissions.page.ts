
import { ChannelsHeaderPage } from '../../page-objects/channels/channels-header.page';
import UrlsUtils from '../../utils/urls.utils';
import { expect,Locator, Page } from '@playwright/test';
// ========================== Selectors ==================================
const txtBoxSearch: string = 'input[name="associateInputSearch"]';
const organizationalBusinessReportBreadcrumb: string ='#root > div > div.lsux-content > div:nth-child(1) > div.lsux-crumbs > span';
const organizationalBusinessReportTabDisplayed: string ='#root > div > div.lsux-content > div:nth-child(1) > div.lsux-tab--bar.lsux-tab--stretch > div.lsux-tab.active > div > h4';
const txaAssociateNumber: string ='div.associate-info p';
const txaSearchResult: string ='//*[@id="root"]/div/div[2]/div[1]/div[3]/div/div[1]/a/h2';
const txaPersonal: string ='//*[@id="root"]/div/div[2]/div[1]/div[3]/div';
//Report -> Commissions
const lblAssociateNumber: string ='.lsux-heading.lsux-heading--t28';
const tabFastStartStatement: string ='//*[text()[contains(.,"Fast Start Statements")]]';
/**
 *
 *
 * @export
 * @class ReportsCommissionsPage
 * @extends {ChannelsHeaderPage}
 */
export class ReportsCommissionsPage extends ChannelsHeaderPage {
  // ========================== Process Methods ============================
  // ========================== Navigate Methods ===========================
  navigateToReportsBusinessOrganizationalPage = async (): Promise<void> => {
      console.log(' - ReportsCommissionsPage.navigateToReportsBusinessOrganizationalPage');
      // Navigate to Business Solution  Page
      await this.navigateToPage(UrlsUtils.channelsUrls.reportsbusinessorganizational.url);
      
  };
  navigateToReportsCommissionsPage = async (): Promise<void> => {
    console.log(' - ReportsCommissionsPage.navigateToReportsCommissionsPage');
    // Navigate to Business Solution  Page
    await this.navigateToPage(UrlsUtils.channelsUrls.reportscommissions.url);
    
  };
  // ========================== Click Methods ==============================
  clickTxtBoxSearch = async (): Promise<void> => {
    // Click Terms of Service link
    console.log(' - ReportsCommissionsPage.clicktxtBoxSearch');
    await this.page.click(txtBoxSearch);
  };
  clickSearchResult = async (): Promise<void> => {
    // Click Terms of Service link
    console.log(' - ReportsCommissionsPage.clickSearchResult');
    await this.page.click(txaSearchResult);
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
}
     