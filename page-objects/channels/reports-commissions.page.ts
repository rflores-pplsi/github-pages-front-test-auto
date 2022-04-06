
import { ChannelsHeaderPage } from '../../page-objects/channels/channels-header.page';
import UrlsUtils from '../../utils/urls.utils';
import { expect,Locator, Page } from '@playwright/test';
// ========================== Selectors ==================================
const txtBoxSearch: string = 'input[name="associateInputSearch"]';
const organizationalBusinessReportBreadcrumb: string ='#root > div > div.lsux-content > div:nth-child(1) > div.lsux-crumbs > span';
const organizationalBusinessReportTabDisplayed: string ='#root > div > div.lsux-content > div:nth-child(1) > div.lsux-tab--bar.lsux-tab--stretch > div.lsux-tab.active > div > h4';
/**
 *
 *
 * @export
 * @class BusinessCard
 * @extends {ChannelsHeaderPage}
 */
export class ReportsCommissionsPage extends ChannelsHeaderPage {
    // ========================== Process Methods ============================
    // ========================== Navigate Methods ===========================
    navigateToReportsCommissionsPagePage = async (): Promise<void> => {
        console.log(' - ReportsCommissionsPage.navigateToReportsCommissionsPagePage');
        // Navigate to Business Solution  Page
        await this.navigateToPage(UrlsUtils.channelsUrls.reportscommissions.url);
        
      };
    // ========================== Click Methods ==============================
    // ========================== Assertion Methods ==========================
    assertPageShow = async (): Promise<void> => {
        console.log(' - ReportsCommissionsPage.assertPageTitle');
        const strTitle = 'Organizational Business Report';
        await this.page.waitForSelector(txtBoxSearch);
        await this.assertElementIsVisible(txtBoxSearch);
      };

      assertPageTitle = async (): Promise<void> => {
        console.log(' - ReportsCommissionsPage.assertPageTitle');
        const strTitle = 'Organizational Business Report';
        await this.page.waitForSelector(txtBoxSearch);
        //expect.stringMatching( strTitle.match(this.page.title.toString()) );
        console.log(this.page.title())
      };
    
      assertBreadcrumbLinkIsDisplayed = async (): Promise<void> => {
        console.log(' - ReportsCommissionsPage.assertPageTitle');
        const strTitle = 'Organizational Business Report';
        await this.page.waitForSelector(txtBoxSearch);
        await this.assertElementIsVisible(organizationalBusinessReportBreadcrumb);
      };
      assertOrganizationalBusinessReportTaIsDisplayed = async (): Promise<void> => {
        console.log(' - ReportsCommissionsPage.assertPageTitle');
        const strTitle = 'Organizational Business Report';
        await this.page.waitForSelector(txtBoxSearch);
        await this.assertElementIsVisible(organizationalBusinessReportTabDisplayed);
      };
}
     