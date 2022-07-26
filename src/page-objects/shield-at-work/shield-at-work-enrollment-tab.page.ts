import urlsUtils from '../../utils/urls.utils';
import { LsWorkLoginPage } from '../shield-at-work/shield-at-work-login.page';

// ========================== Selectors ==================================

const url: string = urlsUtils.legalshieldUrls.shieldAtWork.url;
const btnViewGroup: string = '.lsux-button.lsux-button--standard.ml-3 > span';
const txtSearch: string = '[placeholder="Search by name or group number"]';
const btnSearch: string = '[id="searchButton"]';
const btnEnrollmentTab: string =
  '#root > div > div > div:nth-child(1) > div > div > div.px-6.pt-4.mb-6.oVjDjW_QqZkyeTOHfYTdP > div.lsux-tab--bar.lsux-tab--stretch.mt-4._1eLFtzcrk-k4lYLgF3dWc1 > div:nth-child(2) > div > a > h4';
const txtGroup: string = '#root  .lsux-container--flex-items-center.mb-2 > h3';
const btnManageSite: string = '.lsux-container.lsux-container--white div > h2 > button > span';
const txtEnrollmentInformation: string = '.lsux-row.thirds.children4._1mGEzKW4bHYdkCdXubcxyu > div:nth-child(1) > div > h2';

/**
 * @export
 * @class ShieldAtWorkEnrollmentTab
 * @extends {LsWorkLoginPage}
 */
export class ShieldAtWorkEnrollmentTab extends LsWorkLoginPage {
  /**
   *
   *
   * @param {string} group
   * @memberof ShieldAtWorkEnrollmentTab
   */
  groupSearchByGroupNumber = async (group: string): Promise<void> => {
    console.log(' - enrollmentShieldAtWorkPage.groupSearchByGroupNumber');
    // Type in the search field the group number
    await this.page.fill(txtSearch, group);
    // Click on search button
    await this.clickOnElement(btnSearch);
    // Wait for the group name is displayed
    await this.page.waitForSelector(txtGroup);
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
    // Search group by group number
    await this.groupSearchByGroupNumber('207196');
    // Click on View group button
    await this.clickViewGroupButton();
  };

  // ========================== Assertion Methods ==========================

  assertManageSiteButtonIsVisible = async (): Promise<void> => {
    console.log(' - enrollmentShieldAtWorkPage.assertManageSiteButtonIsVisible');
    // Verify that Manage site button is displayed on the enrollment page
    await this.assertElementIsVisible(btnManageSite);
  };

  assertEnrollmentInformationIsDisplayed = async (): Promise<void> => {
    console.log(' - enrollmentShieldAtWorkPage.assertEnrollmentInformationIsDisplayed');
    // Verify that enrollment information is displayed on the enrollment page
    await this.assertElementIsVisible(txtEnrollmentInformation);
  };
}
