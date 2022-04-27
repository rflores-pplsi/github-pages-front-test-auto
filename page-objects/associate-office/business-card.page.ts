import { ChannelsHeaderPage } from './reports-commissions.page';
import UrlsUtils from '../../utils/urls.utils';
import { expect, Locator, Page } from '@playwright/test';
import { associateAdvantagePlus } from '../../utils/user.utils';
// ========================== Selectors ==================================
const lblTitleMarketingWebsitePreferences: string = 'h1.lsux-heading.lsux-heading--t28';
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
    await this.goTo(UrlsUtils.channelsUrls.businesscard.url);
    await this.login(associateAdvantagePlus.username, associateAdvantagePlus.password);
  };
  // ========================== Click Methods ==============================
  // ========================== Assertion Methods ==========================

  assertBusinessCardPageContentHasLoaded = async (): Promise<void> => {
    console.log(' - BusinessCard.assertPageShow');
    await this.page.waitForSelector(lblTitleMarketingWebsitePreferences);
    await this.assertElementIsVisible(lblTitleMarketingWebsitePreferences);
  };
  assertBusinessCardPageShowTitle = async (): Promise<void> => {
    console.log(' - BusinessCard.assertPageTitle');
    const strTitle = 'Marketing Website Preferences';
    await this.page.waitForSelector(lblTitleMarketingWebsitePreferences);
    await this.assertElementHasText(lblTitleMarketingWebsitePreferences, strTitle);
  };
  assertFirstNameIsDisplayed = async (): Promise<void> => {
    console.log(' - BusinessCard.assertBreadcrumbLinkIsDisplayed');
    await this.page.waitForSelector(lblTitleMarketingWebsitePreferences);
    await this.assertElementIsVisible(txtFirstName);
  };
  assertLastNameIsDisplayed = async (): Promise<void> => {
    console.log(' - BusinessCard.assertOrganizationalBusinessReportTaIsDisplayed');
    await this.page.waitForSelector(lblTitleMarketingWebsitePreferences);
    await this.assertElementIsVisible(txtLastName);
  };
  assertPhoneNumberIsDisplayed = async (): Promise<void> => {
    console.log(' - BusinessCard.assertOrganizationalBusinessReportTaIsDisplayed');
    await this.page.waitForSelector(lblTitleMarketingWebsitePreferences);
    await this.assertElementIsVisible(txtPhoneNumber);
  };
  assertDisplayOnWebsite = async (): Promise<void> => {
    console.log(' - BusinessCard.assertOrganizationalBusinessReportTaIsDisplayed');
    await this.page.waitForSelector(lblTitleMarketingWebsitePreferences);
    await this.assertElementIsVisible(chkDisplayOnWebsite);
  };
}
