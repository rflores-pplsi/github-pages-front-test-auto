import { expect } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { OktaPage } from '../okta/okta.page';

// ========================== Selectors ==================================

const url = UrlsUtils.legalshieldUrls.groupEnrollment.url;
const urlAppStore = 'https://apps.apple.com/us/app/legalshield-law-firms-on-call/id924247236';
const urlGroup = 'https://www.dev-shieldbenefits.com/';
const txtSearch = '[placeholder="Search"]';
const btnSearchGroup = '.lsux-button--primary';
const btnEdit = '.group-item-controls > div:nth-child(3) > a > div > img';
const btnCopyLink = '.lsux-button:nth-child(3) > .lsux-text--description';
const tabSmallBusiness = '//*[@id="root"]/div/nav/div/div/ul/li[1]/a';
const txtGroupInfo = '[class="group-item-info"]';
const txbNewGroupURLId = '.lsux-grid div:nth-child(4) > div > div > form > div:nth-child(1) input';
const btnSignIn = '[id="signedout"]';
const txtSearchLawFirm = '[placeholder="Search"]';
const btnSearchLawFirm = 'button:nth-child(4)';
const txtLawResults = '[class="header"]';
const txtLawFirmName = '.results > p:nth-child(2)';
const lnkAppStore = '.lsux-grid.container a:nth-child(1) > img';
const btnBackToTop = 'main > div > div > button > span';

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
    await this.page.fill(txtSearch, '99645');
    // Click on Group Search button
    await this.page.click(btnSearchGroup);
    // Confirm search was successful
    await this.page.waitForSelector(txtGroupInfo);
  };

  searchLawFirm = async (): Promise<void> => {
    console.log(' - groupEnrollmentSearch.searchLawFirm');
    // Type in the search law field 80021
    await this.page.fill(txtSearchLawFirm, '80021');
    // Click on Law Search button
    await this.page.click(btnSearchLawFirm);
    // Confirm search was successful
    await this.page.waitForSelector(txtLawResults);
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
    await this.page.click(btnEdit);
  };

  clickBtnSignIn = async (): Promise<void> => {
    console.log(' - groupEnrollmentSearchPage.clickBtnSignIn');
    // Click on Sign In button
    await this.page.click(btnSignIn);
  };

  clickAppStoreLink = async (): Promise<void> => {
    console.log(' - groupEnrollmentSearchPage.clickAppStoreLink');
    // Click on AppStore link
    await this.page.click(lnkAppStore);
  };

  clickBtnBackToTop = async (): Promise<void> => {
    console.log(' - groupEnrollmentSearchPage.clickAppStoreLink');
    // Click on Back to top button
    await this.page.click(btnBackToTop);
  };

  // ========================== Assertion Methods ==========================

  assertGroupEnrollmentSearchPageSmallBusinessTab = async (): Promise<void> => {
    console.log(' - GroupEnrollmentSearchPage.assertGroupEnrollmentSearchPagePageSmallBusinessTab');
    // Verify that Small Business tab is displayed for Newity group
    await this.assertElementIsVisible(tabSmallBusiness);
  };

  assertAccountsUrl = async (): Promise<void> => {
    console.log(' - GroupEnrollmentSearchPage.assertAccountsUrl');
    // Verify after clicking on Sign In button it redirects to Accounts
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.login.url + '/login?app=accounts&impact=Low&path=%2Fsign-in');
  };

  assertLawFirmInformation = async (): Promise<void> => {
    console.log(' - GroupEnrollmentSearchPage.assertLawFirmInformation');
    // Confirm law firm name displays on the small business page
    await this.page.waitForSelector(txtLawFirmName);
    const name = this.page.locator(txtLawFirmName);
    await expect(name).toContainText('Riggs, Abney, Neal, Turpen, Orbison & Lewis, PC');
  };

  assertAppStoreUrl = async (): Promise<void> => {
    console.log(' - GroupEnrollmentSearchPage.assertAppStoreUrl');
    // Verify after clicking on App store link it redirects to the store site
    await expect(this.page).toHaveURL(urlAppStore);
  };
}
