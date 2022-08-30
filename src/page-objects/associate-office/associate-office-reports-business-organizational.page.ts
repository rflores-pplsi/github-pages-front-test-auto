import { LoginPage } from '../login/login.page';
import { associateAdvantagePlus } from '../../utils/user.utils';
import UrlsUtils from '../../utils/urls.utils';
// ========================== Selectors ==================================
const txtBoxSearch: string = 'input[name="associateInputSearch"]';
const organizationalBusinessReportBreadcrumb: string = 'span.lsux-crumbs__crumb--leaf';
const organizationalBusinessReportTabDisplayed: string = '//*[@id="root"]/div/div[2]/div[1]/div/div[2]/div[1]/div/h4';
const txaSearchResult: string = 'h2.lsux-heading.associate-name.lsux-heading--t26';
const txaPersonal: string = '//*[@id="root"]/div/div[2]/div[1]/div/div[2]/div[2]/div';
const btnSearch: string = "button[class*='lsux-button--primary']";
const txaAssociateNumber: string = 'div.associate-info p';
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
    await this.goTo(UrlsUtils.channelsUrls.reportsbusinessorganizational.url);
    await this.login(associateAdvantagePlus.username, associateAdvantagePlus.password);
    await this.page.waitForSelector(txtBoxSearch);
  };

  // ========================== Click Methods ==============================
  clickTxtBoxSearch = async (): Promise<void> => {
    // Click on text box for search
    console.log(' - ReportsBusinessOrganizationalPage.clickTxtBoxSearch');
    await this.page.click(txtBoxSearch);
  };
  clickSearchResult = async (): Promise<void> => {
    // Click on a search result
    console.log(' - ReportsBusinessOrganizationalPage.clickSearchResult');
    await this.page.click(txaSearchResult);
  };
  clickOnSearchButton = async (): Promise<void> => {
    // Click on Search button
    console.log(' - ReportsBusinessOrganizationalPage.clickOnSearchButton');
    await this.page.click(btnSearch);
  };
  // ========================== Fill Methods ===============================
  /**
   * @param {string} txt
   * @memberof ReportsCommissionsPage
   */
  fillTxtBoxSearch = async (txt: string): Promise<void> => {
    await this.page.fill(txtBoxSearch, txt);
  };
  // ========================== Assertion Methods ==========================
  assertReportsBusinessOrganizationalPageShow = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertReportsBusinessOrganizationalPageShow');
    await this.assertElementIsVisible(txtBoxSearch);
  };
  assertPageTitle = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertPageTitle');
    const strTitle = 'Organizational Business Report';
    await this.assertStringMatch(strTitle, this.page.title.toString());
  };
  assertBreadcrumbLinkIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertBreadcrumbLinkIsDisplayed');
    await this.assertElementIsVisible(organizationalBusinessReportBreadcrumb);
  };
  assertOrganizationalBusinessReportTaIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertOrganizationalBusinessReportTaIsDisplayed');
    await this.assertElementIsVisible(organizationalBusinessReportTabDisplayed);
  };
  assertTabPersonalBusinessReportIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertTabPersonalBusinessReportIsDisplayed');
    await this.assertElementIsVisible(txaPersonal);
  };
  assertTxaAssociateNumberIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertTxaAssociateNumberIsDisplayed');
    await this.assertElementIsVisible(txaAssociateNumber);
  };
}
