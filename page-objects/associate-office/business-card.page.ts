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
    await this.page.waitForSelector(lblTitleMarketingWebsitePreferences);
  };
  // ========================== Click Methods ==============================
  // ========================== Assertion Methods ==========================

  assertBusinessCardPageContentHasLoaded = async (): Promise<void> => {
    console.log(' - BusinessCard.assertBusinessCardPageContentHasLoaded');
    await this.assertElementIsVisible(lblTitleMarketingWebsitePreferences);
  };
  assertBusinessCardPageShowTitle = async (): Promise<void> => {
    console.log(' - BusinessCard.assertBusinessCardPageShowTitle');
    const strTitle = 'Marketing Website Preferences';
    await this.assertElementHasText(lblTitleMarketingWebsitePreferences, strTitle);
  };
  assertBusinessCardPageFirstNameIsDisplayed = async (): Promise<void> => {
    console.log(' - BusinessCard.assertBusinessCardPageFirstNameIsDisplayed');
    await this.assertElementIsVisible(txtFirstName);
  };
  assertBusinessCardPageLastNameIsDisplayed = async (): Promise<void> => {
    console.log(' - BusinessCard.assertBusinessCardPageLastNameIsDisplayed');
    await this.assertElementIsVisible(txtLastName);
  };
  assertBusinessCardPagePhoneNumberIsDisplayed = async (): Promise<void> => {
    console.log(' - BusinessCard.assertBusinessCardPagePhoneNumberIsDisplayed');
    await this.assertElementIsVisible(txtPhoneNumber);
  };
  assertBusinessCardPageDisplayOnWebsite = async (): Promise<void> => {
    console.log(' - BusinessCard.assertBusinessCardPageDisplayOnWebsite');
    await this.assertElementIsVisible(chkDisplayOnWebsite);
  };
}
