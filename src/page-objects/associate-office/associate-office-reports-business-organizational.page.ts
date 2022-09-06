import { LoginPage } from '../login/login.page';
import { associateReportsCommissions } from '../../utils/user.utils';
import UrlsUtils from '../../utils/urls.utils';
import { expect } from '@playwright/test';
// ========================== Selectors ==================================
const lblBusinessReportBreadcrumb: string = 'span.lsux-crumbs__crumb--leaf';
const tabOrgBusinessReport: string = "(//h4[contains(@class,'lsux-heading--t16')])[1]";
const tabPersonalBusinessReport: string = "(//h4[contains(@class,'lsux-heading--t16')])[2]";
const txaSearchBy: string = '//label';
const txtBoxSearch: string = 'div.css-319lph-ValueContainer';
const btnSearch: string = "button[class*='lsux-button--primary']";
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
    await this.goTo(UrlsUtils.channelsUrls.reportsbusinessorganizational.url);
    await this.login(associateReportsCommissions.username, associateReportsCommissions.password);
    await this.page.waitForSelector(txtBoxSearch);
  };

  // ========================== Click Methods ==============================
  clickTxtBoxSearch = async (): Promise<void> => {
    // Click on text box for search
    console.log(' - ReportsBusinessOrganizationalPage.clickTxtBoxSearch');
    await this.page.click(txtBoxSearch);
  };
  clickOnSearchButton = async (): Promise<void> => {
    // Click on Search button
    console.log(' - ReportsBusinessOrganizationalPage.clickOnSearchButton');
    await this.page.click(btnSearch);
  };
  clickOnPersonalBusinessReportTab = async (): Promise<void> => {
    // Click on Search button
    console.log(' - ReportsBusinessOrganizationalPage.clickOnPersonalBusinessReportTab');
    await this.page.click(tabPersonalBusinessReport);
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
  assertPageTitle = async (title: string): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertPageTitle');
    await expect(this.page).toHaveTitle(title);
  };

  assertBreadcrumbLinkIsDisplayed = async (breadcrumbLinkTxt: string): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage. assertBreadcrumbLinkIsDisplayed');
    await this.assertElementIsVisible(lblBusinessReportBreadcrumb);
    await expect(this.page.locator(lblBusinessReportBreadcrumb)).toContainText(breadcrumbLinkTxt);
    console.log(await this.page.locator(lblBusinessReportBreadcrumb).textContent());
  };

  assertOrganizationalBusinessReportTabIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertOrganizationalBusinessReportTabIsDisplayed');
    await this.assertElementIsVisible(tabOrgBusinessReport);
    await expect(this.page.locator(tabOrgBusinessReport)).toContainText('Organizational Business Report');
    console.log(await this.page.locator(tabOrgBusinessReport).textContent());
  };

  assertPersonalBusinessReportTabIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertPersonalBusinessReportTabIsDisplayed');
    await this.assertElementIsVisible(tabPersonalBusinessReport);
    await expect(this.page.locator(tabPersonalBusinessReport)).toContainText('Personal Business Report');
    console.log(await this.page.locator(tabPersonalBusinessReport).textContent());
  };

  assertTxaSearchByTxtIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertTxaSearchByIsDisplayed');
    await this.assertElementIsVisible(txaSearchBy);
    await expect(this.page.locator(txaSearchBy)).toContainText('Search by Associate name or number in your downline to see their business report.');
    console.log(await this.page.locator(txaSearchBy).textContent());
  };

  assertTxtBoxSearchIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertTxtBoxSearchIsDisplayed');
    await this.assertElementIsVisible(txtBoxSearch);
  };

  assertBtnSearchIsDisplayed = async (): Promise<void> => {
    console.log(' - ReportsBusinessOrganizationalPage.assertBtnSearchIsDisplayed');
    await this.assertElementIsVisible(btnSearch);
  };
}
