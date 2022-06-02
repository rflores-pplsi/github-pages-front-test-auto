import urlsUtils from '../../utils/urls.utils';
import { LsWorkLoginPage } from '../shield-at-work/shield-at-work-login.page';

// ========================== Selectors ==================================
const url = urlsUtils.legalshieldUrls.shieldAtWork.url;
const btnViewGroup = '[class="lsux-button  lsux-button--standard      ml-4"]';
const txtSearch = '[placeholder="Search by name or group number"]';
const btnSearch = '[id="searchButton"]';
const btnEnrollmentTab = '#root div.lsux-tab--bar.lsux-tab--stretch.mt-4._1eLFtzcrk-k4lYLgF3dWc1 > div:nth-child(3) > div > a > h4';
const txtGroup = '#root  .lsux-container--flex-items-center.mb-2 > h3';
const btnManageSite = '//*[@id="root"]/div/div[2]/div[1]/div/div/div[2]/div[1]/div[2]/div/div/div[3]/div[2]/div/h2/button';

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
}
