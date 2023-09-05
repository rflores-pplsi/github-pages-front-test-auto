import urlsUtils from '../../../utils/urls.utils';
import { OktaPage } from '../okta/okta.page';

// ========================== Selectors ==================================

const url: string = urlsUtils.legalshieldUrls.shieldAtWork.url;
const BTN_VIEW_GROUP = '.lsux-button.lsux-button--standard.ml-3 > span';
const TXT_SEARCH = '[placeholder="Search by name or group number"]';
const BTN_SEARCH = '[id="searchButton"]';
const BTN_ENROLLMENT_TAB =
  '#root > div > div > div:nth-child(1) > div > div > div.px-6.pt-4.mb-6.oVjDjW_QqZkyeTOHfYTdP > div.lsux-tab--bar.lsux-tab--stretch.mt-4._1eLFtzcrk-k4lYLgF3dWc1 > div:nth-child(2) > div > a > h4';
const TXT_GROUP = '#root  .lsux-container--flex-items-center.mb-2 > h3';
const BTN_MANAGE_SITE = '.lsux-container.lsux-container--white div > h2 > button > span';
const TXT_ENROLLMENT_INFORMATION = '.lsux-row.thirds.children4._1mGEzKW4bHYdkCdXubcxyu > div:nth-child(1) > div > h2';

/**
 *
 *
 * @export
 * @class ShieldAtWorkEnrollmentTab
 * @extends {OktaPage}
 */
export class ShieldAtWorkEnrollmentTab extends OktaPage {
  /**
   *
   *
   * @param {string} group
   * @memberof ShieldAtWorkAccountTab
   */
  groupSearchByGroupNumber = async (group: string): Promise<void> => {
    console.log(' - accountShieldAtWorkPage.groupSearchByGroupNumber');
    // Type in the search field the group number
    await this.page.fill(TXT_SEARCH, group);
    // Click on search button
    await this.clickOnElement(BTN_SEARCH);
    // Wait for the group name is displayed
    await this.page.waitForSelector(TXT_GROUP);
  };

  // ========================== Click Methods ==============================

  clickViewGroup = async (): Promise<void> => {
    console.log(' - accountShieldAtWorkPage.clickViewGroup');
    // Click on View Group button
    await this.clickOnElement(BTN_VIEW_GROUP);
  };

  clickEnrollmentTab = async (): Promise<void> => {
    console.log(' - enrollmentShieldAtWorkPage.clickEnrollmentTab');
    // Click on Enrollment tab
    await this.clickOnElement(BTN_ENROLLMENT_TAB);
  };

  // ========================== Navigate Methods ===========================

  navigateToGroupPage = async (): Promise<void> => {
    console.log(' - enrollmentShieldAtWorkPage.navigateToGroupPage');
    await this.page.goto(url);
    // Login through okta
    await this.loginThroughOktaGroupEnrollment();
    // Search group by group number
    await this.groupSearchByGroupNumber('111452');
    // Click on View group button
    await this.clickViewGroup();
  };

  // ========================== Assertion Methods ==========================

  assertManageSiteButtonIsVisible = async (): Promise<void> => {
    console.log(' - enrollmentShieldAtWorkPage.assertManageSiteButtonIsVisible');
    // Verify that Manage site button is displayed on the enrollment page
    await this.assertElementIsVisible(BTN_MANAGE_SITE);
  };

  assertEnrollmentInformationIsDisplayed = async (): Promise<void> => {
    console.log(' - enrollmentShieldAtWorkPage.assertEnrollmentInformationIsDisplayed');
    // Verify that enrollment information is displayed on the enrollment page
    await this.assertElementIsVisible(TXT_ENROLLMENT_INFORMATION);
  };
}
