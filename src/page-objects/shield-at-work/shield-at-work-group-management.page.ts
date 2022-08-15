import { expect } from '@playwright/test'; // import expect functionality from playwright
import urlsUtils from '../../utils/urls.utils'; // import class of Urls
import { LsWorkLoginPage } from './shield-at-work-login.page'; // import the LoginPage for extension

// ========================== Selectors ==================================
const url: string = urlsUtils.legalshieldUrls.shieldAtWork.url;
const txtSearch: string = '[placeholder="Search by name or group number"]';
const btnSearch: string = '[id="searchButton"]';
const txtGroup: string = '#root  .lsux-container--flex-items-center.mb-2 > h3';
const btnNameIcon: string = '[id="downCaret"]';
const btnHome: string = '#myDropdown > a:nth-child(1) > div';
const txtGroupManagement: string = '.lsux-container--flex-justify-space-between.mb-5.mt-7 > h2';

/**
 * @export
 * @class ShieldAtWorkGroupManagement
 * @extends {LsWorkLoginPage}
 */
export class ShieldAtWorkGroupManagement extends LsWorkLoginPage {
  /**
   *
   *
   * @param {string} group
   * @memberof ShieldAtWorkGroupManagement
   */
  groupSearchByGroupNumber = async (group: string): Promise<void> => {
    console.log(' - groupManagementShieldAtWorkPage.groupSearchByGroupNumber');
    // Type in the search field the group number
    await this.page.fill(txtSearch, group);
    // Click on search button
    await this.clickOnElement(btnSearch);
    // Wait for the group name is displayed
    await this.page.waitForSelector(txtGroup);
  };

  // ========================== Navigate Methods ===========================

  navigateToShieldAtWorkGroupManagementPage = async (): Promise<void> => {
    console.log(' - groupManagementShieldAtWorkPage.navigateToShieldAtWorkGroupManagementPage');
    // Navigate to Url
    await this.page.goto(url);
    // Login to ShieldAtWork
    await this.loginWithCredentials();
  };

  // ========================== Click Methods ==============================
  // eslint-disable-next-line prettier/prettier

  clickNameIcon = async (): Promise<void> => {
    console.log(' - groupManagementShieldAtWorkPage.clickNameIcon');
    // Click on name icon in the upper right corner
    await this.clickOnElement(btnNameIcon);
  };

  clickBtnHome = async (): Promise<void> => {
    console.log(' - groupManagementShieldAtWorkPage.clickBtnHome');
    // Click on Home button in dropdown menu
    await this.clickOnElement(btnHome);
  };

  // ========================== Assertion Methods ==========================

  assertTextGroup = async (): Promise<void> => {
    console.log(' - groupManagementShieldAtWorkPage.assertTextGroup');
    await this.page.waitForSelector(txtGroup);
    const locator = this.page.locator(txtGroup);
    await expect(locator).toContainText('Barry University');
  };

  assertGroupManagementPageIsDisplayed = async (): Promise<void> => {
    console.log(' - groupManagementShieldAtWorkPage.assertGroupManagementPageIsDisplayed');
    // Confirm that after clicking on Home button it takes you to the group management page
    await this.assertElementIsVisible(txtGroupManagement);
  };
}
