import { expect } from '@playwright/test';
import urlsUtils from '../../utils/urls.utils';
import { LsWorkLoginPage } from '../shield-at-work/shield-at-work-login.page';

// ========================== Selectors ==================================
const url = urlsUtils.legalshieldUrls.shieldAtWork.url;
const btnViewGroup: string = '[class="lsux-button  lsux-button--standard      ml-4"]';
const txtSearch: string = '[placeholder="Search by name or group number"]';
const btnSearch: string = '[id="searchButton"]';
const btnEnrollmentTab = '#root div.lsux-tab--bar.lsux-tab--stretch.mt-4._1eLFtzcrk-k4lYLgF3dWc1 > div:nth-child(3) > div > a > h4';
const txtGroup: string = '#root  .lsux-container--flex-items-center.mb-2 > h3';
const btnManageSite: string = ' .lsux-row.half.children2._1mGEzKW4bHYdkCdXubcxyu > div:nth-child(2) > div > h2 > button > span';
const txtEnrollmentInformation: string = '.lsux-container--flex-items-center._3LtEyoCyKId7Bp09BBV_XQ.px-6.TZykF7nc8qs6i9k03RlmT > h3';
const txtMessage: string = '.lsux-container--flex-content-center.py-10.px-4 > h3';

/**
 * @export
 * @class ShieldAtWorkEnrollmentTab
 * @extends {LsWorkLoginPage}
 */
export class ShieldAtWorkEnrollmentTab extends LsWorkLoginPage {
  /**
   *
   *
   * @param {string} groupNumber
   * @memberof ShieldAtWorkEnrollmentTab
   */
  groupSearchByGroupNumber = async (groupNumber: string): Promise<void> => {
    console.log(' - enrollmentShieldAtWorkPage.groupSearchByGroupNumber');
    // Type in the search field the group number
    await this.page.fill(txtSearch, groupNumber);
    await this.page.waitForSelector(txtSearch);
    // Click on search button
    await this.clickOnElement(btnSearch);
    await this.page.waitForSelector(txtGroup);
    await this.clickViewGroupButton();
  };

  // ========================== Click Methods ==============================

  clickViewGroupButton = async (): Promise<void> => {
    console.log(' - enrollmentShieldAtWorkPage.clickViewGroup');
    // Click on View Group button
    await this.clickOnElement(btnViewGroup);
  };

  clickEnrollmentTab = async (): Promise<void> => {
    console.log(' - enrollmentShieldAtWorkPage.clickEnrollmentTab');
    // Click on View Group button
    await this.clickOnElement(btnEnrollmentTab);
  };

  // ========================== Navigate Methods ===========================

  navigateToShieldAtWorkEnrollmentTab = async (): Promise<void> => {
    console.log(' - enrollmentShieldAtWorkPage.navigateToShieldAtWorkEnrollmentTab');
    // Navigate to Url
    await this.page.goto(url);
    // Login to ShieldAtWork
    await this.loginWithCredentials();
  };

  // ========================== Assertion Methods ==========================

  assertManageSiteButtonIsVisible = async (): Promise<void> => {
    console.log(' - enrollmentShieldAtWorkPage.assertManageSiteButtonIsVisible');
    // Verify that Identity Theft Page is displayed for 99638 group
    await this.assertElementIsVisible(btnManageSite);
  };

  assertEnrollmentInformation = async (): Promise<void> => {
    console.log(' - enrollmentShieldAtWorkPage.assertEnrollmentInformation');
    // Verify that enrollment information  is displayed
    await this.page.waitForSelector(txtEnrollmentInformation);
    const information = this.page.locator(txtEnrollmentInformation);
    await expect(information).toContainText('Enrollment information');
  };

  assertMessageIsDisplayed = async (): Promise<void> => {
    console.log(' - enrollmentShieldAtWorkPage.assertMessageIsDisplayed');
    await this.page.waitForSelector(txtMessage);
    const message = 'There are no members to display for group based on status filter.';
    await this.assertElementHasText(txtMessage, message);
  };
}
