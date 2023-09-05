import UrlsUtils from '../../../utils/urls.utils';
import { OktaPage } from '../okta/okta.page';

// ========================== Selectors ==================================

const url = UrlsUtils.legalshieldUrls.groupEnrollment.url;
const URL_GROUP = 'https://www.uat-shieldbenefits.com/';
const TXT_SEARCH = '[placeholder="Search"]';
const BTN_SEARCH_GROUP = '.lsux-button--primary';
const BTN_EDIT = '.group-item-controls > div:nth-child(3) > a > div > img';
const BTN_COPY_LINK = '.lsux-button:nth-child(3) > .lsux-text--description';
const TAB_SMALL_BUSINESS = '//*[@id="root"]/div/nav/div/div/ul/li[1]/a';
const TXT_GROUP_INFO = '[class="group-item-info"]';
const TXT_NEW_GROUP_URL_ID = '.lsux-grid div:nth-child(4) > div > div > form > div:nth-child(1) input';

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
    await this.page.fill(TXT_SEARCH, '99645');
    // Click on Group Search button
    await this.page.click(BTN_SEARCH_GROUP);
    // Confirm search was successful
    await this.page.waitForSelector(TXT_GROUP_INFO);
  };

  copyNewGroupURL = async (): Promise<void> => {
    console.log(' - GroupEnrollmentGroupPage.copyNewGroupURL');
    // Copy link, paste it in a another tab
    await this.page.click(BTN_COPY_LINK);
    await this.page.waitForTimeout(1000);
  };

  // ========================== Navigate Methods ===========================

  navigateToGroupEnrollmentGroupURLPage = async (): Promise<void> => {
    console.log(' - GroupEnrollmentGroupPage.navigateToGroupEnrollmentGroupURLPage');
    // Click on Edit button
    await this.clickBtnEditGroup();
    // Verify after pasting url in another browser tab group is displayed
    const valNewGroupURL = await this.page.getAttribute(TXT_NEW_GROUP_URL_ID, 'value');
    await this.page.waitForTimeout(1000);
    await this.page.goto(URL_GROUP + valNewGroupURL);
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
    await this.page.click(BTN_EDIT);
  };

  // ========================== Assertion Methods ==========================

  assertGroupEnrollmentSearchPageSmallBusinessTab = async (): Promise<void> => {
    console.log(' - GroupEnrollmentSearchPage.assertGroupEnrollmentSearchPagePageSmallBusinessTab');
    // Verify that Small Business tab is displayed for Newity group
    await this.assertElementIsVisible(TAB_SMALL_BUSINESS);
  };
}
