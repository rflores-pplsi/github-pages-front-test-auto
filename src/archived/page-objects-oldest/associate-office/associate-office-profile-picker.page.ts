import { expect } from '@playwright/test';
import UrlsUtils from '../../../utils/urls.utils';
import { associateReportsCommissions, profilePicker } from '../../../utils/user.utils';
import { LoginPage } from '../login/login.page';

// ========================== Selectors =================================
const LBL_MY_ACCOUNTS = 'h1:has-text("My Accounts")';
const LBL_MESSAGE = 'p:has-text("Please select the account you would like to manage")';
const LNK_MY_ENGAGE = "(//a[@data-label='MyEvo'])[2]";
const LNK_MY_TEAM = '.lsux-navigation :nth-child(1) > div.lsux-link-content';
const LNK_REPORTS = '.lsux-navigation :nth-child(2) > div';
const LNK_ALL_REPORTS = '.lsux-navigation :nth-child(3) > div';
const LNK_COMMISSIONS = '.lsux-navigation :nth-child(4) > div';
const LNK_TAXES = '.lsux-navigation :nth-child(5) > div';
const LNK_RESOURCES = '.lsux-navigation :nth-child(6) > div';
const LNK_MESSAGES = '.lsux-navigation :nth-child(7) > div';
const LNK_COMPENSATION = '.lsux-navigation :nth-child(8) > div';
const LNK_LS_ADVANTAGE = '.lsux-navigation :nth-child(7) > div';
const LNK_ASSOCIATE_PERKS = '.lsux-navigation :nth-child(8) > div';
const DDL_DROPDOWN_BOX = 'select.associate-selector';
const LBL_TAX_FORM_REQUEST = "//h3[.='Tax form request']";

/**
 * @export
 * @class ProfilePickerPage
 * @extends {LoginPage}
 */
export class ProfilePickerPage extends LoginPage {
  // ========================== Process Methods ==========================
  selectAssociateAccount = async (): Promise<void> => {
    console.log(' - profilePickerPage.selectAssociateAccount');
    await this.selectFromDropDownMenu(DDL_DROPDOWN_BOX, 'PINNACLE1 - 106664600');
  };
  // ========================== Navigate Methods =========================
  navigateToProfilePickerPage = async (): Promise<void> => {
    console.log(' - profilePickerPage.navigateToProfilePickerPage');
    // Navigate to LS Engage Page
    await this.goTo(UrlsUtils.channelsUrls.login.url);
    await this.login(profilePicker.username as string, profilePicker.password as string);
    await this.page.waitForSelector(LBL_MY_ACCOUNTS);
  };

  navigateToProfilePickerPage2 = async (): Promise<void> => {
    console.log(' - profilePickerPage.navigateToProfilePickerPage');
    await this.goTo(UrlsUtils.channelsUrls.taxForm.url);
    await this.login(profilePicker.username as string, profilePicker.password as string);
    await this.page.waitForSelector(LBL_MY_ACCOUNTS);
  };

  navigateToProfilePickerPage3 = async (): Promise<void> => {
    console.log(' - profilePickerPage.navigateToProfilePickerPage');
    await this.goTo(UrlsUtils.channelsUrls.taxForm.url);
    await this.login(associateReportsCommissions.username as string, associateReportsCommissions.password as string);
    await this.page.waitForSelector(LBL_TAX_FORM_REQUEST);
  };

  // ========================== Click Methods ============================
  clickOnAssociateAccount = async (number = 0): Promise<void> => {
    console.log(' - profilePickerPage.clickOnAssociateAccount');
    await this.page.click(`(//div[@class="lsux-card--inset p-6"])[${number}]`);
  };

  clickOnDropdownBox = async (): Promise<void> => {
    console.log(' - profilePickerPage.clickOnDropdownBox');
    await this.page.click(DDL_DROPDOWN_BOX);
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
    await this.assertElementIsVisible(LBL_MY_ACCOUNTS);
    await expect(this.page.locator(LBL_MY_ACCOUNTS)).toContainText('My Accounts');
    await this.assertElementIsVisible(LBL_MESSAGE);
    await expect(this.page.locator(LBL_MESSAGE)).toContainText('Please select the account you would like to manage');
  };

  assertNoLeftNavMenuOnPage = async (): Promise<void> => {
    console.log(' - profilePickerPage.assertNoLeftNavMenuOnPage');
    expect(await this.page.locator(LNK_MY_TEAM).isVisible()).toBe(false);
    expect(await this.page.locator(LNK_REPORTS).isVisible()).toBe(false);
    expect(await this.page.locator(LNK_ALL_REPORTS).isVisible()).toBe(false);
    expect(await this.page.locator(LNK_COMMISSIONS).isVisible()).toBe(false);
    expect(await this.page.locator(LNK_TAXES).isVisible()).toBe(false);
    expect(await this.page.locator(LNK_RESOURCES).isVisible()).toBe(false);
    expect(await this.page.locator(LNK_MESSAGES).isVisible()).toBe(false);
    expect(await this.page.locator(LNK_COMPENSATION).isVisible()).toBe(false);
    expect(await this.page.locator(LNK_LS_ADVANTAGE).isVisible()).toBe(false);
    expect(await this.page.locator(LNK_ASSOCIATE_PERKS).isVisible()).toBe(false);
  };

  assertAssociateAccounts = async (number = 0): Promise<void> => {
    console.log(' - profilePickerPage.assertAssociateAccounts');
    await this.assertElementIsVisible(`(//div[@class="lsux-card--inset p-6"])[${number}]`);
  };

  assertLSEngagePage = async (): Promise<void> => {
    console.log(' - profilePickerPage.assertLSEngagePage');
    await this.assertElementIsVisible(LNK_MY_ENGAGE);
    await expect(this.page.locator(LNK_MY_ENGAGE)).toContainText('My Engage');
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
    await this.page.locator(DDL_DROPDOWN_BOX).isVisible();
  };

  assertDropdownBoxIsNotDisplayed = async (): Promise<void> => {
    console.log(' - profilePickerPage.assertDropdownBoxIsNotDisplayed ');
    expect(await this.page.locator(DDL_DROPDOWN_BOX).isVisible()).toBe(false);
  };

  assertAssociateIsSwitched = async (): Promise<void> => {
    console.log(' - profilePickerPage.assertAssociateIsSwitched ');
    await expect(this.page.locator(DDL_DROPDOWN_BOX)).toContainText('PINNACLE1 - 106664600');
  };
}
