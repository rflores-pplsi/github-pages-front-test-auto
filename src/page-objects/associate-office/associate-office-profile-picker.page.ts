import { expect } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { profilePicker } from '../../utils/user.utils';
import { LoginPage } from '../login/login.page';

// ========================== Selectors =================================
const lblMyAccounts: string = 'h1:has-text("My Accounts")';
const lblMessage: string = 'p:has-text("Please select the account you would like to manage")';
const lnkMyEngage: string = "(//a[@data-label='MyEvo'])[2]";
const lnkMyTeam: string = '.lsux-navigation :nth-child(1) > div.lsux-link-content';
const lnkReports: string = '.lsux-navigation :nth-child(2) > div';
const lnkAllReports: string = '.lsux-navigation :nth-child(3) > div';
const lnkCommissions: string = '.lsux-navigation :nth-child(4) > div';
const lnkTaxes: string = '.lsux-navigation :nth-child(5) > div';
const lnkResources: string = '.lsux-navigation :nth-child(6) > div';
const lnkMessages: string = '.lsux-navigation :nth-child(7) > div';
const lnkCompensation: string = '.lsux-navigation :nth-child(8) > div';
const lnkLsAdvantage: string = '.lsux-navigation :nth-child(7) > div';
const lnkAssociatePerks: string = '.lsux-navigation :nth-child(8) > div';

// eslint-disable-next-line valid-jsdoc
/**
 * @export
 * @class ProfilePickerPage
 * @extends {LoginPage}
 */
export class ProfilePickerPage extends LoginPage {
  // ========================== Process Methods ==========================

  // ========================== Navigate Methods =========================
  navigateToProfilePickerPage = async (): Promise<void> => {
    console.log(' - profilePickerPage.navigateToProfilePickerPage');
    // Navigate to LS Engage Page
    await this.goTo(UrlsUtils.channelsUrls.login.url);
    await this.login(profilePicker.username, profilePicker.password);
    await this.page.waitForSelector(lblMyAccounts);
  };

  // ========================== Click Methods ============================
  clickOnAccount = async (number: number = 0): Promise<void> => {
    console.log(' - profilePickerPage.clickOnAccount');
    await this.page.click(`(//div[@class="lsux-card--inset p-6"])[${number}]`);
  };

  // ========================== Assertion Methods ========================

  assertLoginUrl = async (): Promise<void> => {
    console.log(' - loginPage.assertLoginPageUrl');
    // Confirm user successfully logged in by asserting URL
    await expect(this.page).toHaveURL(UrlsUtils.channelsUrls.taxForm.url + '?login_redirect=1');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  assertProfilePickerPage = async (): Promise<void> => {
    console.log(' - profilePickerPage.assertProfilePickerPage');
    await this.assertElementIsVisible(lblMyAccounts);
    await expect(this.page.locator(lblMyAccounts)).toContainText('My Accounts');
    await this.assertElementIsVisible(lblMessage);
    await expect(this.page.locator(lblMessage)).toContainText('Please select the account you would like to manage');
  };

  assertNoLeftNavMenuOnPage = async (): Promise<void> => {
    console.log(' - profilePickerPage.assertNoLeftNavMenuOnPage');
    expect(await this.page.locator(lnkMyTeam).isVisible()).toBe(false);
    expect(await this.page.locator(lnkReports).isVisible()).toBe(false);
    expect(await this.page.locator(lnkAllReports).isVisible()).toBe(false);
    expect(await this.page.locator(lnkCommissions).isVisible()).toBe(false);
    expect(await this.page.locator(lnkTaxes).isVisible()).toBe(false);
    expect(await this.page.locator(lnkResources).isVisible()).toBe(false);
    expect(await this.page.locator(lnkMessages).isVisible()).toBe(false);
    expect(await this.page.locator(lnkCompensation).isVisible()).toBe(false);
    expect(await this.page.locator(lnkLsAdvantage).isVisible()).toBe(false);
    expect(await this.page.locator(lnkAssociatePerks).isVisible()).toBe(false);
  };

  assertAssociateAccounts = async (number: number = 0): Promise<void> => {
    console.log(' - profilePickerPage.assertAssociateAccounts');
    await this.assertElementIsVisible(`(//div[@class="lsux-card--inset p-6"])[${number}]`);
  };

  assertLSEngagePage = async (): Promise<void> => {
    console.log(' - loginPage.assertLSEngagePage');
    await this.assertElementIsVisible(lnkMyEngage);
    await expect(this.page.locator(lnkMyEngage)).toContainText('My Engage');
  };
}
