import { expect } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { OktaPage } from '../okta/okta.page';

// ========================== Selectors ==================================

const url = UrlsUtils.legalshieldUrls.groupEnrollment.url;
const urlAppStore = 'https://apps.apple.com/us/app/legalshield-law-firms-on-call/id924247236';
const urlGroup = 'https://www.uat-shieldbenefits.com/';
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
 * @class ShieldBenefitsSmallBusinessPage
 * @extends {ShieldBenefitsSmallBusinessPage}
 */
export class ShieldBenefitsSmallBusinessPage extends OktaPage {
  // ========================== Process Methods ============================
  /**
   *
   *
   * @param {string} group
   * @memberof ShieldBenefitsSmallBusinessPage
   */
  searchGroup = async (group: string): Promise<void> => {
    console.log(' - ShieldBenefitsSmallBusinessPage.searchGroup');
    // Type in the search field group 99645
    await this.page.fill(txtSearch, group);
    // Click on Group Search button
    await this.page.click(btnSearchGroup);
    // Confirm search was successful
    await this.page.waitForSelector(txtGroupInfo);
  };
  /**
   *
   *
   * @param {string} zipcode
   * @memberof ShieldBenefitsSmallBusinessPage
   */
  searchLawFirm = async (zipcode: string): Promise<void> => {
    console.log(' - ShieldBenefitsSmallBusinessPage.searchLawFirm');
    // Type in the search law field 80021
    await this.page.fill(txtSearchLawFirm, zipcode);
    // Click on Law Search button
    await this.page.click(btnSearchLawFirm);
    // Confirm search was successful
    await this.page.waitForSelector(txtLawResults);
  };

  copyNewGroupURL = async (): Promise<void> => {
    console.log(' - ShieldBenefitsSmallBusinessPage.copyNewGroupURL');
    // Copy link, paste it in a another tab
    await this.page.click(btnCopyLink);
    await this.page.waitForTimeout(1000);
  };

  // ========================== Navigate Methods ===========================
  /**
   *
   *
   * @param {string} value
   * @memberof ShieldBenefitsSmallBusinessPage
   */
  navigateToGroupEnrollmentGroupURLPage = async (value: string): Promise<void> => {
    console.log(' - ShieldBenefitsSmallBusinessPage.navigateToGroupEnrollmentGroupURLPage');
    // Click on Edit button
    await this.clickBtnEditGroup();
    // Verify after pasting url in another browser tab group is displayed
    const valNewGroupURL = await this.page.getAttribute(txbNewGroupURLId, value);
    await this.page.waitForTimeout(1000);
    await this.page.goto(urlGroup + valNewGroupURL);
  };

  navigateToGroupEnrollmentSearchPage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsSmallBusinessPage.navigateToGroupEnrollmentSearchPage');
    await this.page.goto(url);
    // Login through Okta page to be redirected to Group Enrollment Search Page
    await this.loginThroughOktaGroupEnrollment();
  };
  /**
   *
   *
   * @param {string} group
   * @return {*}  {Promise<void>}
   */
  navigateToGroupEnrollmentSmallBusinessPage = async (group: string): Promise<void> => {
    console.log(' - ShieldBenefitsSmallBusinessPage.navigateToGroupEnrollmentSmallBusinessPage');
    await this.navigateToGroupEnrollmentSearchPage();
    await this.searchGroup(group);
    await this.navigateToGroupEnrollmentGroupURLPage('value');
  };
  // ========================== Click Methods ==============================

  clickBtnEditGroup = async (): Promise<void> => {
    console.log(' - ShieldBenefitsSmallBusinessPage.clickBtnEditGroup');
    // Click on Edit button
    await this.page.click(btnEdit);
  };

  clickBtnSignIn = async (): Promise<void> => {
    console.log(' - ShieldBenefitsSmallBusinessPage.clickBtnSignIn');
    // Click on Sign In button
    await this.page.click(btnSignIn);
  };

  clickAppStoreLink = async (): Promise<void> => {
    console.log(' - ShieldBenefitsSmallBusinessPage.clickAppStoreLink');
    // Click on AppStore link
    await this.page.click(lnkAppStore);
  };

  clickBtnBackToTop = async (): Promise<void> => {
    console.log(' - ShieldBenefitsSmallBusinessPage.clickAppStoreLink');
    // Click on Back to top button
    await this.page.click(btnBackToTop);
  };

  // ========================== Assertion Methods ==========================

  assertShieldBenefitsSmallBusinessPageSmallBusinessPage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsSmallBusinessPage.assertShieldBenefitsSmallBusinessPage');
    // Verify that Small Business tab is displayed for 99645 group
    await this.assertElementIsVisible(tabSmallBusiness);
  };

  assertAccountsV2Url = async (): Promise<void> => {
    console.log(' - ShieldBenefitsSmallBusinessPage.assertAccountsV2Url');
    // Verify after clicking on Sign In button it redirects to Accounts V2
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.login.url + '/login?app=accountsv2&impact=Low&path=%2Fsign-in');
  };

  assertLawFirmInformation = async (): Promise<void> => {
    console.log(' - ShieldBenefitsSmallBusinessPage.assertLawFirmInformation');
    // Confirm law firm name displays on the small business page
    await this.page.waitForSelector(txtLawFirmName);
    const name = this.page.locator(txtLawFirmName);
    await expect(name).toContainText('Riggs, Abney, Neal, Turpen, Orbison & Lewis, PC');
  };

  assertAppStoreUrl = async (): Promise<void> => {
    console.log(' - ShieldBenefitsSmallBusinessPage.assertAppStoreUrl');
    // Verify after clicking on App store link it redirects to the store site
    await expect(this.page).toHaveURL(urlAppStore);
  };
}
