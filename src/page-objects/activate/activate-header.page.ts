import UrlsUtils from '../../utils/urls.utils';
import { LoginPage } from '../login/login.page';
import { expect } from '@playwright/test';

// ========================== Selectors ==========================

const imgLargeLogo: string = '#lsdsLargeLogoId';
const btnHelp: string = '#helpButton';
const ddName: string = '#myButton';
const lnkSignOut: string = 'div#myDropdown a:has-text("Sign out")';
const ddHelp: string = '#helpDropdown';

/**
 * @export
 * @class ActivateHeaderPage
 * @extends {LoginPage}
 */
export class ActivateHeaderPage extends LoginPage {
  // ========================== Process Methods ==========================
  logout = async (): Promise<void> => {
    console.log(' - activateHeaderPage.logout');
    // Click name dropdown to reveal signout link
    await this.clickOnElement(ddName);
    // Click signout link to log out of account
    await this.clickOnElement(lnkSignOut);
  };
  // ========================== Navigate Methods ==========================
  // ========================== Click Methods ==========================

  clickLargeLogo = async (): Promise<void> => {
    console.log(' - activateHeaderPage.clickLargeLogo');
    // Click large logo that is displayed when viewport width is > 639px
    await this.clickOnElement(imgLargeLogo);
  };

  clickHelpButton = async (): Promise<void> => {
    console.log(' - activateHeaderPage.clickHelpButton');
    // Click help button
    await this.clickOnElement(btnHelp);
  };

  // ========================== Assertion Methods ==========================

  assertHelpDropdownInformation = async (): Promise<void> => {
    console.log(' - activateHeaderPage.assertHelpDropdownInformation');
    // Confirm Member Services dropdown displays
    await this.assertElementIsVisible(ddHelp);
    // Confirm Member Services phone number link is displayed
    await this.assertElementContainsText(ddHelp, '800-654-7757');
    // Confirm Member Services phone number link is displayed
    await this.assertElementContainsText(ddHelp, '580-436-7424');
  };

  assertLoggedOutPageUrl = async (): Promise<void> => {
    console.log(' - activateHeaderPage.assertLoggedOutPageUrl');
    // Confirm the Accounts Plan Page URL is reached
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.login.url + '/logged-out');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };
}
