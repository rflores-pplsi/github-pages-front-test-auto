import { expect } from '@playwright/test';
import { LoginPage } from '../login/login.page';
import { associateReportsCommissions, profilePicker } from '../../utils/user.utils';
import UrlsUtils from '../../utils/urls.utils';

// ========================== Selectors ==========================
const lnkMyEngage: string = "(//a[@data-label='MyEvo'])[2]";
const lnkName: string = '#myevoheaderoptions > a:nth-child(3)';
const lnkSignOut: string = "#menuOptionDiv a:has-text('Sign out')";
const lnkProfilePickerAccount: string = "(//div[@class='lsux-card--inset p-6'])[3]";
const lblMyAccounts: string = 'h1:has-text("My Accounts")';
const lblLogoPPLSIProspect: string = '.logo-default';
const lnkSettings: string = 'a:has-text("SETTINGS")';
const lnkLogOut: string = 'button:has-text("Log out")';
const btnYes: string = 'button:has-text("YES")';
// eslint-disable-next-line valid-jsdoc
/**
 * @export
 * @class LSEngagePage
 * @extends {LoginPage}
 */
export class LSEngagePage extends LoginPage {
  // ========================== Process Methods =========================

  // ========================== Navigate Methods ========================
  navigateToLSEngagePage = async (): Promise<void> => {
    console.log(' - LSEngagePage.navigateToLSEngagePage');
    // Navigate to LS Engage Page
    await this.goTo(UrlsUtils.channelsUrls.login.url);
    await this.login(associateReportsCommissions.username, associateReportsCommissions.password);
    await this.page.waitForSelector(lnkMyEngage);
  };

  navigateToLSEngagePage2 = async (): Promise<void> => {
    console.log(' - LSEngagePage.navigateToLSEngagePage');
    // Navigate to LS Engage Page
    await this.goTo(UrlsUtils.channelsUrls.login.url);
    await this.login(profilePicker.username, profilePicker.password);
    await this.page.waitForSelector(lblMyAccounts);
  };

  navigateToPPLSIProspectPage = async (): Promise<void> => {
    console.log(' - LSEngagePage.navigateToPPLSIProspectPage');
    // Navigate to PPLSI Prospect Page
    await this.goTo(UrlsUtils.channelsUrls.ppsliprospect.url);
    await this.login(associateReportsCommissions.username, associateReportsCommissions.password);
    await this.page.waitForSelector(lblLogoPPLSIProspect);
  };

  navigateToPPLSIProspectPage2 = async (): Promise<void> => {
    console.log(' - LSEngagePage.navigateToPPLSIProspectPage');
    // Navigate to PPLSI Prospect Page
    await this.goTo(UrlsUtils.channelsUrls.ppsliprospect.url);
    await this.login(profilePicker.username, profilePicker.password);
    await this.page.waitForSelector(lblMyAccounts);
  };

  // ========================== Click Methods ===========================
  clickOnName = async (): Promise<void> => {
    console.log(' - LSEngagePage.clickOnName');
    await this.page.click(lnkName);
  };

  clickOnSignOut = async (): Promise<void> => {
    console.log(' - LSEngagePage.clickOnSignOut');
    await this.page.click(lnkSignOut);
  };

  clickOnAccount = async (i: number = 0): Promise<void> => {
    console.log(' - LSEngagePage.clickOnAccount');
    await this.page.click(lnkProfilePickerAccount);
  };

  clickOnSettings = async (): Promise<void> => {
    console.log(' - LSEngagePage.clickOnSettings');
    await this.page.click(lnkSettings);
  };

  clickOnLogOut = async (): Promise<void> => {
    console.log(' - LSEngagePage.clickOnLogOut');
    await this.page.click(lnkLogOut);
  };

  clickOnYesButton = async (): Promise<void> => {
    console.log(' - LSEngagePage.clickOnYesButton');
    await this.page.click(btnYes);
  };

  // ========================== Assertion Methods =======================
  assertLSEngagePage = async (): Promise<void> => {
    console.log(' - loginPage.assertLSEngagePage');
    await this.assertElementIsVisible(lnkMyEngage);
    await expect(this.page.locator(lnkMyEngage)).toContainText('My Engage');
  };

  assertPPLSIProspectPage = async (): Promise<void> => {
    console.log(' - loginPage.assertPPLSIProspectPage');
    await this.assertElementIsVisible(lblLogoPPLSIProspect);
  };

  assertProfilePickerPage = async (): Promise<void> => {
    console.log(' - loginPage.assertProfilePickerPage');
    await this.assertElementIsVisible(lblMyAccounts);
    await expect(this.page.locator(lblMyAccounts)).toContainText('My Accounts');
  };

  assertPageHasTitle = async (title: string): Promise<void> => {
    console.log(' - loginPage.assertPageHasTitle');
    await expect(this.page).toHaveTitle(title);
  };
}
