import UrlsUtils from '../../utils/urls.utils';
import { OktaPage } from '../okta/okta.page';

// ========================== Selectors ==================================

const url: string = UrlsUtils.legalshieldUrls.groupEnrollment.url;
const urlGroup: string = 'https://www.uat-shieldbenefits.com/';
const btnEnroll = 'a:has-text("Enroll Now")';
const txtSearch: string = '[placeholder="Search"]';
const btnSearchGroup: string = '.lsux-button--primary';
const btnEdit: string = '.group-item-controls > div:nth-child(3) > a > div > img';
const btnCopyLink: string = '.lsux-button:nth-child(3) > .lsux-text--description';
const tabIDShieldBusinessPage: string = '#root > div > nav > div > div > ul > li:nth-child(5) > a';
const txtGroupInfo: string = '[class="group-item-info"]';
const txbNewGroupURLId: string = '.lsux-grid div:nth-child(4) > div > div > form > div:nth-child(1) input';
const btnSignIn: string = '[id="signedout"]';
const btnBackToTop: string = 'main > div > div > button > span';
const btnState: string = '//div[contains(@class,"mr-5") and contains (.,"State")]//button';
const btnPaymentFrequency: string = '//p[contains (.,"Payment frequency")]/following-sibling::div//button';
const btnViewDetails: string = '#root  div:nth-child(1) > div > div > div.groupTokenCardLeft > a';
const lnkMemberPerks: string = ' section div:nth-child(1) > div > p > a';
const btnPricing: string = '#root > div > nav > div > div > ul > li:nth-child(7) > a';

/**
 * @export
 * @class ShieldBenefitsIDShieldBusinessPage
 * @extends {ShieldBenefitsIDShieldBusinessPage}
 */
export class ShieldBenefitsIDShieldBusinessPage extends OktaPage {
  // ========================== Process Methods ============================
  /**
   *
   *
   * @param {string} group
   * @memberof ShieldBenefitsIDShieldBusinessPage
   */
  searchGroup = async (group: string): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.searchGroup');
    // Type in the search field group 83696
    await this.page.fill(txtSearch, group);
    // Click on Group Search button
    await this.clickOnElement(btnSearchGroup);
    // Confirm search was successful
    await this.page.waitForSelector(txtGroupInfo);
  };

  copyNewGroupURL = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.copyNewGroupURL');
    // Copy link, paste it in a another tab
    await this.clickOnElement(btnCopyLink);
    await this.page.waitForTimeout(1000);
  };
  /**
   *
   *
   * @param {string} state
   * @param {string} paymentFrequency
   * @memberof ShieldBenefitsIDShieldBusinessPage
   */

  selectStateAndPaymentFrequency = async (state: string, paymentFrequency: string): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.selectStateAndPaymentFrequency');
    // Select State
    await this.clickOnElement(btnState);
    await this.clickOnElement(`//div[contains(@class,"lsux-link-content--menu") and contains (.,"${state}")]`);
    // Select Payment Frequency
    await this.clickOnElement(btnPaymentFrequency);
    await this.clickOnElement(`//div[contains(@class,"lsux-link-content--menu") and contains (.,"${paymentFrequency}")]`);
  };

  // ========================== Navigate Methods ===========================
  /**
   *
   *
   * @param {string} value
   * @memberof ShieldBenefitsIDShieldBusinessPage
   */
  navigateToGroupEnrollmentGroupURLPage = async (value: string): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.navigateToGroupEnrollmentGroupURLPage');
    // Click on Edit button
    await this.clickBtnEditGroup();
    // Verify after pasting url in another browser tab group is displayed
    const valNewGroupURL = await this.page.getAttribute(txbNewGroupURLId, value);
    await this.page.waitForTimeout(1000);
    await this.page.goto(urlGroup + valNewGroupURL);
  };

  navigateToGroupEnrollmentSearchPage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.navigateToGroupEnrollmentSearchPage');
    await this.page.goto(url);
    // Login through Okta page to be redirected to Group Enrollment Search Page
    await this.loginThroughOktaGroupEnrollment();
  };
  /**
   *
   *
   * @param {string} group
   * @memberof ShieldBenefitsCommercialDriverPage
   */
  navigateToGroupEnrollmentCommercialDriverPage = async (group: string): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.navigateToGroupEnrollmentIDShieldBusinessPage');
    await this.navigateToGroupEnrollmentSearchPage();
    await this.searchGroup(group);
    await this.navigateToGroupEnrollmentGroupURLPage('value');
  };
  // ========================== Click Methods ==============================

  clickBtnEditGroup = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.clickBtnEditGroup');
    // Click on Edit button
    await this.page.click(btnEdit);
  };

  clickBtnSignIn = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.clickBtnSignIn');
    // Click on Sign In button
    await this.page.click(btnSignIn);
  };

  clickBtnBackToTop = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.clickAppStoreLink');
    // Click on Back to top button
    await this.page.click(btnBackToTop);
  };

  clickBtnEnroll = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.clickBtnPricing');
    // Click on Enroll button
    await this.clickOnElement(btnEnroll);
  };

  clickBtnPricing = async (): Promise<void> => {
    console.log(' - ShieldBenefitsCommercialDriverPage.clickBtnPricing');
    // Click on Pricing tab
    await this.clickOnElement(btnPricing);
  };

  clickBtnIDShieldBusinessPage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.clickBtnIDShieldBusinessPage');
    // Click on IDShield for Business page
    await this.clickOnElement(tabIDShieldBusinessPage);
  };

  // ========================== Assertion Methods ==========================

  assertShieldBenefitsIDShieldBusinessPage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.assertShieldBenefitsIDShieldBusinessPage');
    // Verify that IDShield for Business tab is displayed for  group 83696
    await this.assertElementIsVisible(tabIDShieldBusinessPage);
  };

  assertSignInButtonIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.assertSignInButtonIsDisplayed');
    // Confirm Sign In button is displayed
    await this.assertElementIsVisible(btnSignIn);
  };

  assertEnrollNowButtonIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.assertEnrollButtonIsDisplayed');
    // Confirm Enroll button is displayed
    await this.assertElementIsVisible(btnEnroll);
  };

  assertButtonViewDetailsIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.assertButtonViewDetailsIsVisible');
    // Confirm that View Details button is displayed
    await this.assertElementIsVisible(btnViewDetails);
  };

  assertLinkMemberPerksIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.assertLinkMemberPerksIsDisplayed');
    // Confirm that Member Perks link is displayed
    await this.assertElementIsVisible(lnkMemberPerks);
  };
}
