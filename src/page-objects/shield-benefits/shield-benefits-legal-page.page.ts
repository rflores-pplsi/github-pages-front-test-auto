import UrlsUtils from '../../utils/urls.utils';
import { OktaPage } from '../okta/okta.page';

// ========================== Selectors ==================================

const url: string = UrlsUtils.legalshieldUrls.groupEnrollment.url;
const urlGroup: string = 'https://www.uat-shieldbenefits.com/test48/overview';
const txtSearch: string = '[placeholder="Search"]';
const btnSearchGroup: string = '.lsux-button--primary';
const btnEdit: string = '.group-item-controls > div:nth-child(3) > a > div > img';
const btnCopyLink: string = '.lsux-button:nth-child(3) > .lsux-text--description';
const tabLegalPage: string = '#root > div > nav > div > div > ul > li:nth-child(2) > a';
const txtGroupInfo: string = '[class="group-item-info"]';
const txbNewGroupURLId: string = '.lsux-grid div:nth-child(4) > div > div > form > div:nth-child(1) input';
const btnSignIn: string = '[id="signedout"]';
const txtSearchLawFirm: string = '[placeholder="Search"]';
const btnSearchLawFirm: string = 'button:nth-child(4)';
const txtLawResults: string = '[class="header"]';
const txtLawFirmName: string = '.results > p:nth-child(2)';
const btnAppStore: string = '.lsux-grid.container a:nth-child(1) > img';
const btnBackToTop: string = 'main > div > div > button > span';
const btnPricing: string = '#root > div > nav > div > div > ul > li:nth-child(7) > a';
const btnState: string = '#root  div.mr-custom  div:nth-child(6)';
const btnSelect: string = '#root div.filters.mt-5.mb-5.false > div > div.mr-custom > div > button';
const btnPaymentFrequency: string = '//p[contains (.,"Payment frequency")]/following-sibling::div//button';
const btnViewDetails: string = '#root div:nth-child(3) div:nth-child(1) > div > div > div.groupTokenCardLeft > a';
const btnVideoPlayer: string = '[class="react-player__play-icon"]';

/**
 * @export
 * @class ShieldBenefitsLegalPage
 * @extends {ShieldBenefitsLegalPage}
 */
export class ShieldBenefitsLegalPage extends OktaPage {
  // ========================== Process Methods ============================
  /**
   *
   *
   * @param {string} group
   * @memberof ShieldBenefitsLegalPage
   */
  searchGroup = async (group: string): Promise<void> => {
    console.log(' - ShieldBenefitsLegalPage.searchGroup');
    // Type in the search field group 83696
    await this.page.fill(txtSearch, group);
    // Click on Group Search button
    await this.clickOnElement(btnSearchGroup);
    // Confirm search was successful
    await this.page.waitForSelector(txtGroupInfo);
  };
  /**
   *
   *
   * @param {string} zipcode
   * @memberof ShieldBenefitsLegalPage
   */
  searchLawFirm = async (zipcode: string): Promise<void> => {
    console.log(' - ShieldBenefitsLegalPage.searchLawFirm');
    // Type in the search law field 80021
    await this.page.fill(txtSearchLawFirm, zipcode);
    // Click on Law Search button
    await this.clickOnElement(btnSearchLawFirm);
    // Confirm search was successful
    await this.page.waitForSelector(txtLawResults);
  };

  copyNewGroupURL = async (): Promise<void> => {
    console.log(' - ShieldBenefitsLegalPage.copyNewGroupURL');
    // Copy link, paste it in a another tab
    await this.clickOnElement(btnCopyLink);
    await this.page.waitForTimeout(1000);
  };
  /**
   *
   *
   * @param {string} state
   * @param {string} paymentFrequency
   * @memberof ShieldBenefitsLegalPage
   */

  selectStateAndPaymentFrequency = async (state: string, paymentFrequency: string): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.selectStateAndPaymentFrequency');
    // Select State
    await this.clickOnElement(btnSelect);
    await this.clickOnElement(btnState);
    // Select Payment Frequency
    await this.clickOnElement(btnPaymentFrequency);
  };

  // ========================== Navigate Methods ===========================
  /**
   *
   *
   * @param {string} value
   * @memberof ShieldBenefitsLegalPage
   */
  navigateToGroupEnrollmentGroupURLPage = async (value: string): Promise<void> => {
    console.log(' - ShieldBenefitsLegalPage.navigateToGroupEnrollmentGroupURLPage');
    // Click on Edit button
    await this.clickBtnEditGroup();
    // Verify after pasting url in another browser tab group is displayed
    const valNewGroupURL = await this.page.getAttribute(txbNewGroupURLId, value);
    await this.page.waitForTimeout(1000);
    await this.page.goto(urlGroup + valNewGroupURL);
  };

  navigateToGroupEnrollmentSearchPage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsLegalPage.navigateToGroupEnrollmentSearchPage');
    await this.page.goto(url);
    // Login through Okta page to be redirected to Group Enrollment Search Page
    await this.loginThroughOktaGroupEnrollment();
  };
  /**
   *
   *
   * @param {string} group
   * @memberof ShieldBenefitsLegalPage
   */
  navigateToGroupEnrollmentLegalPage = async (group: string): Promise<void> => {
    console.log(' - ShieldBenefitsLegalPage.navigateToGroupEnrollmentLegalPage');
    await this.page.goto(urlGroup);
  };
  // ========================== Click Methods ==============================

  clickBtnEditGroup = async (): Promise<void> => {
    console.log(' - ShieldBenefitsLegalPage.clickBtnEditGroup');
    // Click on Edit button
    await this.page.click(btnEdit);
  };

  clickBtnSignIn = async (): Promise<void> => {
    console.log(' - ShieldBenefitsLegalPage.clickBtnSignIn');
    // Click on Sign In button
    await this.page.click(btnSignIn);
  };

  clickAppStoreLink = async (): Promise<void> => {
    console.log(' - ShieldBenefitsLegalPage.clickAppStoreLink');
    // Click on AppStore link
    await this.page.click(btnAppStore);
  };

  clickBtnBackToTop = async (): Promise<void> => {
    console.log(' - ShieldBenefitsLegalPage.clickAppStoreLink');
    // Click on Back to top button
    await this.page.click(btnBackToTop);
  };

  clickBtnPricing = async (): Promise<void> => {
    console.log(' - ShieldBenefitsLegalPage.clickBtnPricing');
    // Click on Pricing tab
    await this.clickOnElement(btnPricing);
  };

  clickBtnLegalPage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsLegalPage.clickBtnLegalPage');
    // Click on Legal tab
    await this.clickOnElement(tabLegalPage);
  };

  // ========================== Assertion Methods ==========================

  assertShieldBenefitsLegalPage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsLegalPage.assertShieldBenefitsLegalPage');
    // Verify that Legal tab is displayed for  group 83696
    await this.assertElementIsVisible(tabLegalPage);
  };

  assertSignInButtonIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsLegalPage.assertSignInButtonIsDisplayed');
    // Confirm Sign In button is displayed
    await this.assertElementIsVisible(btnSignIn);
  };

  assertLawFirmInformation = async (): Promise<void> => {
    console.log(' - ShieldBenefitsLegalPage.assertLawFirmInformation');
    // Confirm law firm name displays on the legal page
    await this.page.waitForSelector(txtLawFirmName);
    await this.assertElementContainsText(txtLawFirmName, 'Riggs, Abney, Neal, Turpen, Orbison & Lewis, PC');
  };

  assertAppStoreButtonISDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsLegalPage.assertAppStoreButtonIsDisplayed');
    // Confirm App store button is displayed
    await this.assertElementIsVisible(btnAppStore);
  };

  assertButtonViewDetailsIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsLegalPage.assertButtonViewDetailsIsVisible');
    // Confirm that View Details button is displayed
    await this.assertElementIsVisible(btnViewDetails);
  };

  assertVideoPlayerIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsLegalPage.assertButtonVideoPlayerIsDisplayed');
    // Confirm that Video player is displayed on the legal page
    await this.assertElementIsVisible(btnVideoPlayer);
  };
}
