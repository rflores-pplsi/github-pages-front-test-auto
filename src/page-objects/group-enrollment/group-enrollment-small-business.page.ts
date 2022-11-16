import { expect } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { OktaPage } from '../okta/okta.page';

// ========================== Selectors ==================================

const url = UrlsUtils.legalshieldUrls.groupEnrollment.url;
const URL_APP_STORE = 'https://apps.apple.com/us/app/legalshield-law-firms-on-call/id924247236';
const URL_GROUP = 'https://www.dev-shieldbenefits.com/';
const TXT_SEARCH = '[placeholder="Search"]';
const BTN_SEARCH_GROUP = '.lsux-button--primary';
const BTN_EDIT = '.group-item-controls > div:nth-child(3) > a > div > img';
const BTN_COPY_LINK = '.lsux-button:nth-child(3) > .lsux-text--description';
const TAB_SMALL_BUSINESS = '//*[@id="root"]/div/nav/div/div/ul/li[1]/a';
const TXT_GROUP_INFO = '[class="group-item-info"]';
const TXT_NEW_GROUP_URL_ID = '.lsux-grid div:nth-child(4) > div > div > form > div:nth-child(1) input';
const BTN_SIGN_IN = '[id="signedout"]';
const TXT_SEARCH_LAW_FIRM = '[placeholder="Search"]';
const BTN_SEARCH_LAW_FIRM = 'button:nth-child(4)';
const TXT_LAW_RESULTS = '[class="header"]';
const TXT_LAW_FIRM_NAME = '.results > p:nth-child(2)';
const LNK_APP_STORE = '.lsux-grid.container a:nth-child(1) > img';
const BTN_BACK_TO_TOP = 'main > div > div > button > span';

/**
 * @export
 * @class GroupEnrollmentSmallBusinessPage
 * @extends {GroupEnrollmentSmallBusinessPage}
 */
export class GroupEnrollmentSmallBusinessPage extends OktaPage {
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

  searchLawFirm = async (): Promise<void> => {
    console.log(' - groupEnrollmentSearch.searchLawFirm');
    // Type in the search law field 80021
    await this.page.fill(TXT_SEARCH_LAW_FIRM, '80021');
    // Click on Law Search button
    await this.page.click(BTN_SEARCH_LAW_FIRM);
    // Confirm search was successful
    await this.page.waitForSelector(TXT_LAW_RESULTS);
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

  navigateToGroupEnrollmentSmallBusinessPage = async (): Promise<void> => {
    console.log(' - groupEnrollmentSearchPage.navigateToGroupEnrollmentSmallBusinessPage');
    await this.navigateToGroupEnrollmentSearchPage();
    await this.searchGroup();
    await this.navigateToGroupEnrollmentGroupURLPage();
  };
  // ========================== Click Methods ==============================

  clickBtnEditGroup = async (): Promise<void> => {
    console.log(' - groupEnrollmentSearchPage.clickBtnEditGroup');
    // Click on Edit button
    await this.page.click(BTN_EDIT);
  };

  clickBtnSignIn = async (): Promise<void> => {
    console.log(' - groupEnrollmentSearchPage.clickBtnSignIn');
    // Click on Sign In button
    await this.page.click(BTN_SIGN_IN);
  };

  clickAppStoreLink = async (): Promise<void> => {
    console.log(' - groupEnrollmentSearchPage.clickAppStoreLink');
    // Click on AppStore link
    await this.page.click(LNK_APP_STORE);
  };

  clickBtnBackToTop = async (): Promise<void> => {
    console.log(' - groupEnrollmentSearchPage.clickAppStoreLink');
    // Click on Back to top button
    await this.page.click(BTN_BACK_TO_TOP);
  };

  // ========================== Assertion Methods ==========================

  assertGroupEnrollmentSearchPageSmallBusinessTab = async (): Promise<void> => {
    console.log(' - GroupEnrollmentSearchPage.assertGroupEnrollmentSearchPagePageSmallBusinessTab');
    // Verify that Small Business tab is displayed for Newity group
    await this.assertElementIsVisible(TAB_SMALL_BUSINESS);
  };

  assertAccountsUrl = async (): Promise<void> => {
    console.log(' - GroupEnrollmentSearchPage.assertAccountsUrl');
    // Verify after clicking on Sign In button it redirects to Accounts
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.login.url + '/login?app=accounts&impact=Low&path=%2Fsign-in');
  };

  assertLawFirmInformation = async (): Promise<void> => {
    console.log(' - GroupEnrollmentSearchPage.assertLawFirmInformation');
    // Confirm law firm name displays on the small business page
    await this.page.waitForSelector(TXT_LAW_FIRM_NAME);
    const name = this.page.locator(TXT_LAW_FIRM_NAME);
    await expect(name).toContainText('Riggs, Abney, Neal, Turpen, Orbison & Lewis, PC');
  };

  assertAppStoreUrl = async (): Promise<void> => {
    console.log(' - GroupEnrollmentSearchPage.assertAppStoreUrl');
    // Verify after clicking on App store link it redirects to the store site
    await expect(this.page).toHaveURL(URL_APP_STORE);
  };
}
