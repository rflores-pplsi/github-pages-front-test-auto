import { expect } from '@playwright/test';
import { LoginPage } from '../login/login.page';
import { associateReportsCommissions, profilePicker } from '../../utils/user.utils';
import UrlsUtils from '../../utils/urls.utils';

// ========================== Selectors ==========================
const LNK_MY_ENGAGE = "(//a[@data-label='MyEvo'])[2]";
const LNK_NAME = '#myevoheaderoptions > a:nth-child(3)';
const LNK_SIGN_OUT = "#menuOptionDiv a:has-text('Sign out')";
const LNK_PROFILE_PICKER_ACCOUNT = "(//div[@class='lsux-card--inset p-6'])[3]";
const LBL_MY_ACCOUNTS = 'h1:has-text("My Accounts")';
const LBL_LOGO_PPLSI_PROSPECT = '.logo-default';
const LNK_SETTINGS = 'a:has-text("SETTINGS")';
const LNK_LOG_OUT = 'button:has-text("Log out")';
const BTN_YES = 'button:has-text("YES")';
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
    await this.page.waitForSelector(LNK_MY_ENGAGE);
  };

  navigateToLSEngagePage2 = async (): Promise<void> => {
    console.log(' - LSEngagePage.navigateToLSEngagePage');
    // Navigate to LS Engage Page
    await this.goTo(UrlsUtils.channelsUrls.login.url);
    await this.login(profilePicker.username, profilePicker.password);
    await this.page.waitForSelector(LBL_MY_ACCOUNTS);
  };

  navigateToPPLSIProspectPage = async (): Promise<void> => {
    console.log(' - LSEngagePage.navigateToPPLSIProspectPage');
    // Navigate to PPLSI Prospect Page
    await this.goTo(UrlsUtils.channelsUrls.pplsiProspect.url);
    await this.login(associateReportsCommissions.username, associateReportsCommissions.password);
    await this.page.waitForSelector(LBL_LOGO_PPLSI_PROSPECT);
  };

  navigateToPPLSIProspectPage2 = async (): Promise<void> => {
    console.log(' - LSEngagePage.navigateToPPLSIProspectPage');
    // Navigate to PPLSI Prospect Page
    await this.goTo(UrlsUtils.channelsUrls.pplsiProspect.url);
    await this.login(profilePicker.username, profilePicker.password);
    await this.page.waitForSelector(LBL_MY_ACCOUNTS);
  };

  // ========================== Click Methods ===========================
  clickOnName = async (): Promise<void> => {
    console.log(' - LSEngagePage.clickOnName');
    await this.page.click(LNK_NAME);
  };

  clickOnSignOut = async (): Promise<void> => {
    console.log(' - LSEngagePage.clickOnSignOut');
    await this.page.click(LNK_SIGN_OUT);
  };

  clickOnAccount = async (): Promise<void> => {
    console.log(' - LSEngagePage.clickOnAccount');
    await this.page.click(LNK_PROFILE_PICKER_ACCOUNT);
  };

  clickOnSettings = async (): Promise<void> => {
    console.log(' - LSEngagePage.clickOnSettings');
    await this.page.click(LNK_SETTINGS);
  };

  clickOnLogOut = async (): Promise<void> => {
    console.log(' - LSEngagePage.clickOnLogOut');
    await this.page.click(LNK_LOG_OUT);
  };

  clickOnYesButton = async (): Promise<void> => {
    console.log(' - LSEngagePage.clickOnYesButton');
    await this.page.click(BTN_YES);
  };

  // ========================== Assertion Methods =======================
  assertLSEngagePage = async (): Promise<void> => {
    console.log(' - loginPage.assertLSEngagePage');
    await this.assertElementIsVisible(LNK_MY_ENGAGE);
    await expect(this.page.locator(LNK_MY_ENGAGE)).toContainText('My Engage');
  };

  assertPPLSIProspectPage = async (): Promise<void> => {
    console.log(' - loginPage.assertPPLSIProspectPage');
    await this.assertElementIsVisible(LBL_LOGO_PPLSI_PROSPECT);
  };

  assertProfilePickerPage = async (): Promise<void> => {
    console.log(' - loginPage.assertProfilePickerPage');
    await this.assertElementIsVisible(LBL_MY_ACCOUNTS);
    await expect(this.page.locator(LBL_MY_ACCOUNTS)).toContainText('My Accounts');
  };

  assertPageHasTitle = async (title: string): Promise<void> => {
    console.log(' - loginPage.assertPageHasTitle');
    await expect(this.page).toHaveTitle(title);
  };
}
