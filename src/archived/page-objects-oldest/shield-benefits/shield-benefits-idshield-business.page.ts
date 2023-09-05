import UrlsUtils from '../../../utils/urls.utils';
import { OktaPage } from '../okta/okta.page';

// ========================== Selectors ==================================

const url: string = UrlsUtils.legalshieldUrls.groupEnrollment.url;
const URL_GROUP = 'https://www.uat-shieldbenefits.com/test48/overview';
const BTN_ENROLL = 'a:has-text("Enroll Now")';
const TXT_SEARCH = '[placeholder="Search"]';
const BTN_SEARCH_GROUP = '.lsux-button--primary';
const BTN_EDIT = '.group-item-controls > div:nth-child(3) > a > div > img';
const BTN_COPY_LINK = '.lsux-button:nth-child(3) > .lsux-text--description';
const TAB_ID_SHIELD_BUSINESS_PAGE = '#root > div > nav > div > div > ul > li:nth-child(5) > a';
const TXT_GROUP_INFO = '[class="group-item-info"]';
const TXB_NEW_GROUP_URL_ID = '.lsux-grid div:nth-child(4) > div > div > form > div:nth-child(1) input';
const BTN_SIGN_IN = '[id="signedout"]';
const BTN_BACK_TO_TOP = 'main > div > div > button > span';
const BTN_PAYMENT_FREQUENCY = '//p[contains (.,"Payment frequency")]/following-sibling::div//button';
const BTN_VIEW_DETAILS = '#root  div:nth-child(1) > div > div > div.groupTokenCardLeft > a';
const LNK_MEMBER_PERKS = ' section div:nth-child(1) > div > p > a';
const BTN_PRICING = '#root > div > nav > div > div > ul > li:nth-child(7) > a';
const BTN_SELECT = '#root div.filters.mt-5.mb-5.false > div > div.mr-custom > div > button';
const BTN_STATE = '#root  div.mr-custom  div:nth-child(6)';

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
    await this.page.fill(TXT_SEARCH, group);
    // Click on Group Search button
    await this.clickOnElement(BTN_SEARCH_GROUP);
    // Confirm search was successful
    await this.page.waitForSelector(TXT_GROUP_INFO);
  };

  copyNewGroupURL = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.copyNewGroupURL');
    // Copy link, paste it in a another tab
    await this.clickOnElement(BTN_COPY_LINK);
    await this.page.waitForTimeout(1000);
  };
  /**
   *
   *
   * @memberof ShieldBenefitsIDShieldBusinessPage
   */
  selectStateAndPaymentFrequency = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.selectStateAndPaymentFrequency');
    // Select State
    await this.clickOnElement(BTN_SELECT);
    await this.clickOnElement(BTN_STATE);
    // Select Payment Frequency
    await this.clickOnElement(BTN_PAYMENT_FREQUENCY);
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
    const valNewGroupURL = await this.page.getAttribute(TXB_NEW_GROUP_URL_ID, value);
    await this.page.waitForTimeout(1000);
    await this.page.goto(URL_GROUP + valNewGroupURL);
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
   * @memberof ShieldBenefitsIDShieldBusinessPage
   */
  navigateToGroupEnrollmentIDShieldBusinessPage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.navigateToGroupEnrollmentIDShieldBusinessPage');
    await this.page.goto(URL_GROUP);
  };
  // ========================== Click Methods ==============================

  clickBtnEditGroup = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.clickBtnEditGroup');
    // Click on Edit button
    await this.page.click(BTN_EDIT);
  };

  clickBtnSignIn = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.clickBtnSignIn');
    // Click on Sign In button
    await this.page.click(BTN_SIGN_IN);
  };

  clickBtnBackToTop = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.clickAppStoreLink');
    // Click on Back to top button
    await this.page.click(BTN_BACK_TO_TOP);
  };

  clickBtnEnroll = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.clickBtnPricing');
    // Click on Enroll button
    await this.clickOnElement(BTN_ENROLL);
  };

  clickBtnPricing = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIdShieldBusinessPage.clickBtnPricing');
    // Click on Pricing tab
    await this.clickOnElement(BTN_PRICING);
  };

  clickBtnIDShieldBusinessPage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.clickBtnIDShieldBusinessPage');
    // Click on IDShield for Business page
    await this.clickOnElement(TAB_ID_SHIELD_BUSINESS_PAGE);
  };

  // ========================== Assertion Methods ==========================

  assertShieldBenefitsIDShieldBusinessPage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.assertShieldBenefitsIDShieldBusinessPage');
    // Verify that IDShield for Business tab is displayed for  group 83696
    await this.assertElementIsVisible(TAB_ID_SHIELD_BUSINESS_PAGE);
  };

  assertSignInButtonIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.assertSignInButtonIsDisplayed');
    // Confirm Sign In button is displayed
    await this.assertElementIsVisible(BTN_SIGN_IN);
  };

  assertEnrollNowButtonIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.assertEnrollButtonIsDisplayed');
    // Confirm Enroll button is displayed
    await this.assertElementIsVisible(BTN_ENROLL);
  };

  assertButtonViewDetailsIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.assertButtonViewDetailsIsVisible');
    // Confirm that View Details button is displayed
    await this.assertElementIsVisible(BTN_VIEW_DETAILS);
  };

  assertLinkMemberPerksIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsIDShieldBusinessPage.assertLinkMemberPerksIsDisplayed');
    // Confirm that Member Perks link is displayed
    await this.assertElementIsVisible(LNK_MEMBER_PERKS);
  };
}
