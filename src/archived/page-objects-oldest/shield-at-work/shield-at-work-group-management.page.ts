import { expect } from '@playwright/test';
import urlsUtils from '../../../utils/urls.utils';
import { OktaPage } from '../okta/okta.page';

// ========================== Selectors ==================================
const url: string = urlsUtils.legalshieldUrls.shieldAtWork.url;
const TXT_SEARCH = '[placeholder="Search by name or group number"]';
const BTN_SEARCH = '[id="searchButton"]';
const TXT_GROUP = '#root  .lsux-container--flex-items-center.mb-2 > h3';
const BTN_NAME_ICON = '[id="downCaret"]';
const BTN_HOME = '#myDropdown > a:nth-child(1) > div';
const TXT_GROUP_MANAGEMENT = '.lsux-container--flex-justify-space-between.mb-5.mt-7 > h2';

/**
 *
 *
 * @export
 * @class ShieldAtWorkGroupManagement
 * @extends {OktaPage}
 */
export class ShieldAtWorkGroupManagement extends OktaPage {
  /**
   *
   *
   * @param {string} group
   * @memberof ShieldAtWorkGroupManagement
   */
  groupSearchByGroupNumber = async (group: string): Promise<void> => {
    console.log(' - groupManagementShieldAtWorkPage.groupSearchByGroupNumber');
    // Type in the search field the group number
    await this.page.fill(TXT_SEARCH, group);
    // Click on search button
    await this.clickOnElement(BTN_SEARCH);
    // Wait for the group name is displayed
    await this.page.waitForSelector(TXT_GROUP);
  };

  // ========================== Navigate Methods ===========================

  navigateToGroupPage = async (): Promise<void> => {
    console.log(' - groupManagementShieldAtWorkPage.navigateToGroupPage');
    await this.page.goto(url);
    // Login through okta
    await this.loginThroughOktaGroupEnrollment();
  };

  // ========================== Click Methods ==============================

  clickNameIcon = async (): Promise<void> => {
    console.log(' - groupManagementShieldAtWorkPage.clickNameIcon');
    // Click on name icon in the upper right corner
    await this.clickOnElement(BTN_NAME_ICON);
  };

  clickBtnHome = async (): Promise<void> => {
    console.log(' - groupManagementShieldAtWorkPage.clickBtnHome');
    // Click on Home button in dropdown menu
    await this.clickOnElement(BTN_HOME);
  };

  // ========================== Assertion Methods ==========================

  assertTextGroup = async (): Promise<void> => {
    console.log(' - groupManagementShieldAtWorkPage.assertTextGroup');
    await this.page.waitForSelector(TXT_GROUP);
    const locator = this.page.locator(TXT_GROUP);
    await expect(locator).toContainText('Barry University');
  };

  assertGroupManagementPageIsDisplayed = async (): Promise<void> => {
    console.log(' - groupManagementShieldAtWorkPage.assertGroupManagementPageIsDisplayed');
    // Confirm that after clicking on Home button it takes you to the group management page
    await this.assertElementIsVisible(TXT_GROUP_MANAGEMENT);
  };
}
