import UrlsUtils from '../../utils/urls.utils';
import { OktaPage } from '../okta/okta.page';

// ========================== Selectors ==================================

const url = UrlsUtils.legalshieldUrls.groupEnrollment.url;
const urlGroup = 'https://www.uat-shieldbenefits.com/';
const txtSearch = '[placeholder="Search"]';
const btnSearchGroup = '.lsux-button--primary';
const btnEdit = '.group-item-controls > div:nth-child(3) > a > div > img';
const btnCopyLink = '.lsux-button:nth-child(3) > .lsux-text--description';
const tabSmallBusiness = '//*[@id="root"]/div/nav/div/div/ul/li[1]/a';
const txtGroupInfo = '[class="group-item-info"]';
const txbNewGroupURLId = '.lsux-grid div:nth-child(4) > div > div > form > div:nth-child(1) input';

/**
 * @export
 * @class GroupEnrollmentSearchPage
 * @extends {GroupEnrollmentSearchPage}
 */
export class GroupEnrollmentSearchPage extends OktaPage {
  // ========================== Process Methods ============================

  searchGroup = async (): Promise<void> => {
    console.log(' - groupEnrollmentSearch.searchGroup');
    // Type in the search field group 99645
    await this.page.fill(txtSearch, '99645');
    // Click on Group Search button
    await this.page.click(btnSearchGroup);
    // Confirm search was successful
    await this.page.waitForSelector(txtGroupInfo);
  };

  copyNewGroupURL = async (): Promise<void> => {
    console.log(' - GroupEnrollmentGroupPage.copyNewGroupURL');
    // Copy link, paste it in a another tab
    await this.page.click(btnCopyLink);
    await this.page.waitForTimeout(1000);
  };

  // ========================== Navigate Methods ===========================

  navigateToGroupEnrollmentGroupURLPage = async (): Promise<void> => {
    console.log(' - GroupEnrollmentGroupPage.navigateToGroupEnrollmentGroupURLPage');
    // Click on Edit button
    await this.clickBtnEditGroup();
    // Verify after pasting url in another browser tab group is displayed
    const valNewGroupURL = await this.page.getAttribute(txbNewGroupURLId, 'value');
    await this.page.waitForTimeout(1000);
    await this.page.goto(urlGroup + valNewGroupURL);
    await this.page.waitForLoadState('networkidle');
  };

  navigateToGroupEnrollmentSearchPage = async (): Promise<void> => {
    console.log(' - groupEnrollmentSearchPage.navigateToGroupEnrollmentSearchPage');
    await this.page.goto(url);
    // Login through Okta page to be redirected to Group Enrollment Search Page
    await this.loginThroughOktaGroupEnrollment();
  };
  // ========================== Click Methods ==============================

  clickBtnEditGroup = async (): Promise<void> => {
    console.log(' - groupEnrollmentSearchPage.clickBtnEditGroup');
    // Click on Edit button
    await this.page.click(btnEdit);
  };

  // ========================== Assertion Methods ==========================

  assertGroupEnrollmentSearchPageSmallBusinessTab = async (): Promise<void> => {
    console.log(' - GroupEnrollmentSearchPage.assertGroupEnrollmentSearchPagePageSmallBusinessTab');
    // Verify that Small Business tab is displayed for Newity group
    await this.assertElementIsVisible(tabSmallBusiness);
  };
}
