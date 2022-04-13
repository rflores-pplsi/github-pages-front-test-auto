import { expect } from '@playwright/test'; // import expect functionality from playwright
import urlsUtils from '../../utils/urls.utils'; // import class of Urls
import { LsWorkLoginPage } from '../shield-at-work/shield-at-work-login.page'; // import the LoginPage for extension

// ========================== Selectors ==================================
const url = urlsUtils.legalshieldUrls.shieldAtWork.url;
const txtSearch = '[placeholder="Search by name or group number"]';
const btnSearch = '[id="searchButton"]';
const txtGroup = '#root  .lsux-container--flex-items-center.mb-2 > h3';
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
/**
 * @export
 * @class ShieldAtWorkGroupManagement
 * @extends {LsWorkLoginPage}
 */
export class ShieldAtWorkGroupManagement extends LsWorkLoginPage {
  // ========================== Process Methods ============================
  groupSearchByGroupNumber = async (): Promise<void> => {
    console.log(' - accountShieldAtWorkPage.groupSearchByGroupNumber');
    // Type in the search field the group number
    await this.page.fill(txtSearch, '111452');
    // Click on search button
    await this.page.click(btnSearch);
    // Wait for the group name is displayed
    await this.page.waitForSelector(txtGroup);
  };

  // ========================== Navigate Methods ===========================

  navigateToShieldAtWorkGroupManagementPage = async (): Promise<void> => {
    console.log(' - accountShieldAtWorkPage.navigateToShieldAtWorkGroupManagementPage');
    // Navigate to Url
    await this.page.goto(url);
    // Login to ShieldAtWork
    await this.loginWithCredentials();
  };
  // ========================== Click Methods ==============================

  // ========================== Assertion Methods ==========================

  assertTextGroup = async (): Promise<void> => {
    console.log(' - accountShieldAtWorkPage.assertTextGroup');
    await this.page.waitForSelector(txtGroup);
    const locator = this.page.locator(txtGroup);
    await expect(locator).toContainText('Barry University');
  };
}
