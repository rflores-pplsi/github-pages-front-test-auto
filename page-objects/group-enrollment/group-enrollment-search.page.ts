import UrlsUtils from '../../utils/urls.utils';
import { OktaPage } from '../okta/okta.page';

// ========================== Selectors ==================================

const url = UrlsUtils.legalshieldUrls.groupEnrollment.url;
const txtSearch = '[placeholder="Search"]';
const btnSearchGroup = '#root div:nth-child(2) > div > form > button > span';
const btnEdit = '#root  div > div > div.group-item-controls > div:nth-child(3) > a > span';
const btnCopyLink = '.lsux-grid > div > div > div:nth-child(4) > div > div > form > div:nth-child(1) > div > button > span';

/**
 * @export
 * @class GroupEnrollmentSearchPage
 * @extends {GroupEnrollmentSearchPage}
 */
export class GroupEnrollmentSearchPage extends OktaPage {
  // ========================== Process Methods ============================

  searchNewityGroup = async (): Promise<void> => {
    console.log(' - groupEnrollmentSearch.searchGroup');
    // Type in the search field group 99645
    await this.page.fill(txtSearch, '99645');
    // Click on Group Search button
    await this.page.click(btnSearchGroup);
    // Click on Edit button
    await this.page.click(btnEdit);
    // Copy link and paste in a another browser tab
    await this.page.click(btnCopyLink);
    await this.page.waitForTimeout(1000);
    // Verify that Newity group is displayed
    await this.page.goto('https://www.uat-shieldbenefits.com/ytiwen/overview');
  };

  // ========================== Navigate Methods ===========================

  navigateToGroupEnrollmentSearchPage = async (): Promise<void> => {
    console.log(' - groupEnrollmentSearchPage.navigateToGroupEnrollmentSearchPage');
    await this.page.goto(url);
    // Login through Okta page to be redirected to Group Enrollment Search Page
    await this.oktaLoginGroupEnrollmentSearchPage();
  };
  // ========================== Click Methods ==============================
  // ========================== Assertion Methods ==========================
}
