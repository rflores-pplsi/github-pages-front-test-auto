import { expect } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { associateReportsCommissions, profilePicker } from '../../utils/user.utils';
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
const ddlDropdownBox: string = 'select.associate-selector';
const lblTaxFormRequest: string = "//h3[.='Tax form request']";

// eslint-disable-next-line valid-jsdoc
/**
 * @export
 * @class ProfilePickerPage
 * @extends {LoginPage}
 */
export class ProfilePickerPage extends LoginPage {
  // ========================== Process Methods ==========================
  selectAssociateAccount = async (): Promise<void> => {
    console.log(' - profilePickerPage.selectAssociateAccount');
    await this.selectFromDropDownMenu(ddlDropdownBox, 'PINNACLE1 - 106664600');
  };
  // ========================== Navigate Methods =========================
  navigateToProfilePickerPage = async (): Promise<void> => {
    console.log(' - profilePickerPage.navigateToProfilePickerPage');
    // Navigate to LS Engage Page
    await this.goTo(UrlsUtils.channelsUrls.login.url);
    await this.login(profilePicker.username, profilePicker.password);
    await this.page.waitForSelector(lblMyAccounts);
  };

  navigateToProfilePickerPage2 = async (): Promise<void> => {
    console.log(' - profilePickerPage.navigateToProfilePickerPage');
    await this.goTo(UrlsUtils.channelsUrls.taxForm.url);
    await this.login(profilePicker.username, profilePicker.password);
    await this.page.waitForSelector(lblMyAccounts);
  };

  navigateToProfilePickerPage3 = async (): Promise<void> => {
    console.log(' - profilePickerPage.navigateToProfilePickerPage');
    await this.goTo(UrlsUtils.channelsUrls.taxForm.url);
    await this.login(associateReportsCommissions.username, associateReportsCommissions.password);
    await this.page.waitForSelector(lblTaxFormRequest);
  };

  // ========================== Click Methods ============================
  clickOnAssociateAccount = async (number: number = 0): Promise<void> => {
    console.log(' - profilePickerPage.clickOnAssociateAccount');
    await this.page.click(`(//div[@class="lsux-card--inset p-6"])[${number}]`);
  };

  clickOnDropdownBox = async (): Promise<void> => {
    console.log(' - profilePickerPage.clickOnDropdownBox');
    await this.page.click(ddlDropdownBox);
  };

  // ========================== Assertion Methods ========================

  assertLoginUrl = async (): Promise<void> => {
    console.log(' - loginPage.assertLoginUrl');
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
    console.log(' - profilePickerPage.assertLSEngagePage');
    await this.assertElementIsVisible(lnkMyEngage);
    await expect(this.page.locator(lnkMyEngage)).toContainText('My Engage');
  };

  assertAssociateDropdownProfiles = async (): Promise<void> => {
    console.log(' - profilePickerPage.assertAssociateDropdownProfiles');
    for (let i = 0; i < 7; i++) {
      await this.page.locator('//select/option').nth(i).isVisible();
    }
  };

  assertPageHasCorrectTitle = async (): Promise<void> => {
    console.log(' - profilePickerPage.assertPageHasCorrectTitle');
    await expect(this.page).toHaveTitle('Tax Forms');
  };

  assertDropdownBoxIsDisplayed = async (): Promise<void> => {
    console.log(' - profilePickerPage.assertDropdownBoxIsDisplayed ');
    await this.page.locator(ddlDropdownBox).isVisible();
  };

  assertDropdownBoxIsNotDisplayed = async (): Promise<void> => {
    console.log(' - profilePickerPage.assertDropdownBoxIsNotDisplayed ');
    expect(await this.page.locator(ddlDropdownBox).isVisible()).toBe(false);
  };

  assertAssociateIsSwitched = async (): Promise<void> => {
    console.log(' - profilePickerPage.assertAssociateIsSwitched ');
    await expect(this.page.locator(ddlDropdownBox)).toContainText('PINNACLE1 - 106664600');
  };
}
