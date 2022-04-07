
import { ChannelsHeaderPage } from '../../page-objects/channels/channels-header.page';
import UrlsUtils from '../../utils/urls.utils';
import { expect,Locator, Page } from '@playwright/test';
// ========================== Selectors ==================================
const titleMarketingWebsitePreferences: string = 'h1.lsux-heading.lsux-heading--t28';
const txtFirstName: string = '[name="firstName"]';
const txtLastName: string = '[name="lastName"]';
const txtPhoneNumber: string = '[name="cellPhone"]';
const chkDisplayOnWebsite: string = 'label.lsux-cb-container';
/**
 *
 *
 * @export
 * @class BusinessCard
 * @extends {ChannelsHeaderPage}
 */
export class BusinessCard extends ChannelsHeaderPage {
    // ========================== Process Methods ============================
    // ========================== Navigate Methods ===========================
    navigateToBusinessCardPage = async (): Promise<void> => {
        console.log(' - BusinessCard.navigateToBusinessCardPage');
        // Navigate to Business Solution  Page
        await this.navigateToPage(UrlsUtils.channelsUrls.businesscard.url);
        
      };
    // ========================== Click Methods ==============================
    // ========================== Assertion Methods ==========================
    assertPageShow = async (): Promise<void> => {
      console.log(' - BusinessCard.assertPageShow');
      await this.page.waitForSelector(titleMarketingWebsitePreferences);
      await this.assertElementIsVisible(titleMarketingWebsitePreferences);
    };
    assertPageTitle = async (): Promise<void> => {
      console.log(' - BusinessCard.assertPageTitle');
      const strTitle = 'Organizational Business Report';
      await this.page.waitForSelector(titleMarketingWebsitePreferences);
      //expect.stringMatching( strTitle.match(this.page.title.toString()) );
    };
    assertFirstNameIsDisplayed = async (): Promise<void> => {
      console.log(' - BusinessCard.assertBreadcrumbLinkIsDisplayed');
      await this.page.waitForSelector(titleMarketingWebsitePreferences);
      await this.assertElementIsVisible(txtFirstName);
    };
    assertLastNameIsDisplayed = async (): Promise<void> => {
      console.log(' - BusinessCard.assertOrganizationalBusinessReportTaIsDisplayed');
      await this.page.waitForSelector(titleMarketingWebsitePreferences);
      await this.assertElementIsVisible(txtLastName);
    };
    assertPhoneNumberIsDisplayed = async (): Promise<void> => {
      console.log(' - BusinessCard.assertOrganizationalBusinessReportTaIsDisplayed');
      await this.page.waitForSelector(titleMarketingWebsitePreferences);
      await this.assertElementIsVisible(txtPhoneNumber);
    };
    assertDisplayOnWebsite = async (): Promise<void> => {
      console.log(' - BusinessCard.assertOrganizationalBusinessReportTaIsDisplayed');
      await this.page.waitForSelector(titleMarketingWebsitePreferences);
      await this.assertElementIsVisible(chkDisplayOnWebsite);
    };
    
}
     