import { expect } from '@playwright/test';
import { LoginPage } from '../login/login.page';
import UrlsUtils from '../../utils/urls.utils';

// ========================== Selectors ==========================
const IMG_LARGE_LOGO = '#lsdsLargeLogoId';
const BTN_HELP = '#helpButton';
const DD_NAME = '#myButton';
const LNK_SIGN_OUT = 'div#myDropdown a:has-text("Sign out")';
const DD_MEMBER_SERVICES = '#helpContentDefault';

/**
 * @export
 * @class AccountHeaderPage
 * @extends {LoginPage}
 */
export class AccountHeaderPage extends LoginPage {
  // ========================== Process Methods ==========================

  logout = async (): Promise<void> => {
    console.log(' - accountHeaderPage.logout');
    // Click name dropdown to reveal signout link
    await this.clickOnElement(DD_NAME);
    // Click signout link to log out of account
    await this.clickOnElement(LNK_SIGN_OUT);
  };

  // ========================== Navigate Methods ==========================

  // ========================== Click Methods ==========================

  clickLargeLogo = async (): Promise<void> => {
    // Click large logo that is displayed when viewport width is > 639px
    console.log(' - accountHeaderPage.clickLargeLogo');
    await this.page.click(IMG_LARGE_LOGO);
  };

  clickHelpButton = async (): Promise<void> => {
    // Click help button
    console.log(' - accountHeaderPage.clickHelpButton');
    await this.page.click(BTN_HELP);
  };

  // ========================== Assertion Methods ==========================

  assertHelpDropdownInformation = async (): Promise<void> => {
    console.log(' - accountHeaderPage.assertHelpDropdownInformation');
    // Confirm Member Services dropdown displays
    await this.assertElementIsVisible(DD_MEMBER_SERVICES);
    // Confirm Member Services phone number link is displayed
    await this.assertElementContainsText(DD_MEMBER_SERVICES, 'Sales and Customer Service');
    await this.assertElementContainsText(DD_MEMBER_SERVICES, '800-654-7757');
    await this.assertElementContainsText(DD_MEMBER_SERVICES, 'Associate Support');
    await this.assertElementContainsText(DD_MEMBER_SERVICES, '580-436-7424');
  };

  assertLoggedOutPageUrl = async (): Promise<void> => {
    console.log(' - accountHeaderPage.assertLoggedOutPageUrl');
    // Confirm the Accounts Plan Page URL is reached
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.login.url + '/logged-out');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };
}
