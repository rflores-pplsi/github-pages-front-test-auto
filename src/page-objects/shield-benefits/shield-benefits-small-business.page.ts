import UrlsUtils from '../../utils/urls.utils';
import { OktaPage } from '../okta/okta.page';

// ========================== Selectors ==================================

const url: string = UrlsUtils.legalshieldUrls.groupEnrollment.url;
const URL_GROUP = 'https://www.uat-shieldbenefits.com/ytiwen';
const TXT_SEARCH = '[placeholder="Search"]';
const BTN_SEARCH_GROUP = '.lsux-button--primary';
const BTN_EDIT = '.group-item-controls > div:nth-child(3) > a > div > img';
const BTN_COPY_LINK = '.lsux-button:nth-child(3) > .lsux-text--description';
const TAB_SMALL_BUSINESS = '//*[@id="root"]/div/nav/div/div/ul/li[1]/a';
const TXT_GROUP_INFO = '[class="group-item-info"]';
const TXB_NEW_GROUP_URL_ID = '.lsux-grid div:nth-child(4) > div > div > form > div:nth-child(1) input';
const BTN_SIGN_IN = '[id="signedout"]';
const TXT_SEARCH_LAW_FIRM = '[placeholder="Search"]';
const BTN_SEARCH_LAW_FIRM = 'button:nth-child(4)';
const TXT_LAW_RESULTS = '[class="header"]';
const TXT_LAW_FIRM_NAME = '.results > p:nth-child(2)';
const BTN_APP_STORE = '.lsux-grid.container a:nth-child(1) > img';
const BTN_BACK_TO_TOP = 'main > div > div > button > span';
const BTN_PRICING = '#root > div > nav > div > div > ul > li:nth-child(2) > a';
const BTN_SELECT = '#root div.filters.mt-5.mb-5.false > div > div.mr-custom > div > button';
const BTN_STATE = '#root  div.mr-custom  div:nth-child(6)';
const BTN_PAYMENT_FREQUENCY = '//p[contains (.,"Payment frequency")]/following-sibling::div//button';
const BTN_VIEW_DETAILS = '//*[@id="root"]/div/div/main/section/div/div[3]/div/div[1]/div/div/div[1]/a';

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
    await this.page.fill(TXT_SEARCH, group);
    // Click on Group Search button
    await this.clickOnElement(BTN_SEARCH_GROUP);
    // Confirm search was successful
    await this.page.waitForSelector(TXT_GROUP_INFO);
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
    await this.page.fill(TXT_SEARCH_LAW_FIRM, zipcode);
    // Click on Law Search button
    await this.clickOnElement(BTN_SEARCH_LAW_FIRM);
    // Confirm search was successful
    await this.page.waitForSelector(TXT_LAW_RESULTS);
  };

  copyNewGroupURL = async (): Promise<void> => {
    console.log(' - ShieldBenefitsSmallBusinessPage.copyNewGroupURL');
    // Copy link, paste it in a another tab
    await this.clickOnElement(BTN_COPY_LINK);
    await this.page.waitForTimeout(1000);
  };
  /**
   *
   *
   * @param {string} state
   * @param {string} paymentFrequency
   * @memberof ShieldBenefitsSmallBusinessPage
   */

  selectStateAndPaymentFrequency = async (): Promise<void> => {
    console.log(' - ShieldBenefitsSmallBusinessPage.selectStateAndPaymentFrequency');
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
   * @memberof ShieldBenefitsSmallBusinessPage
   */
  navigateToGroupEnrollmentGroupURLPage = async (value: string): Promise<void> => {
    console.log(' - ShieldBenefitsSmallBusinessPage.navigateToGroupEnrollmentGroupURLPage');
    // Click on Edit button
    await this.clickBtnEditGroup();
    // Verify after pasting url in another browser tab group is displayed
    const valNewGroupURL = await this.page.getAttribute(TXB_NEW_GROUP_URL_ID, value);
    await this.page.waitForTimeout(1000);
    await this.page.goto(URL_GROUP + valNewGroupURL);
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
   * @memberof ShieldBenefitsSmallBusinessPage
   */
  navigateToGroupEnrollmentSmallBusinessPage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsSmallBusinessPage.navigateToGroupEnrollmentSmallBusinessPage');
    await this.page.goto(URL_GROUP);
  };
  // ========================== Click Methods ==============================

  clickBtnEditGroup = async (): Promise<void> => {
    console.log(' - ShieldBenefitsSmallBusinessPage.clickBtnEditGroup');
    // Click on Edit button
    await this.page.click(BTN_EDIT);
  };

  clickBtnSignIn = async (): Promise<void> => {
    console.log(' - ShieldBenefitsSmallBusinessPage.clickBtnSignIn');
    // Click on Sign In button
    await this.page.click(BTN_SIGN_IN);
  };

  clickAppStoreLink = async (): Promise<void> => {
    console.log(' - ShieldBenefitsSmallBusinessPage.clickAppStoreLink');
    // Click on AppStore link
    await this.page.click(BTN_APP_STORE);
  };

  clickBtnBackToTop = async (): Promise<void> => {
    console.log(' - ShieldBenefitsSmallBusinessPage.clickAppStoreLink');
    // Click on Back to top button
    await this.page.click(BTN_BACK_TO_TOP);
  };

  clickBtnPricing = async (): Promise<void> => {
    console.log(' - ShieldBenefitsSmallBusinessPage.clickBtnPricing');
    // Click on Pricing tab
    await this.clickOnElement(BTN_PRICING);
  };

  // ========================== Assertion Methods ==========================

  assertShieldBenefitsSmallBusinessPageSmallBusinessPage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsSmallBusinessPage.assertShieldBenefitsSmallBusinessPage');
    // Verify that Small Business tab is displayed for 99645 group
    await this.assertElementIsVisible(TAB_SMALL_BUSINESS);
  };

  assertSignInButtonIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsSmallBusinessPage.assertSignInButtonISDisplayed');
    // Confirm Sign In button is displayed
    await this.assertElementIsVisible(BTN_SIGN_IN);
  };

  assertLawFirmInformation = async (): Promise<void> => {
    console.log(' - ShieldBenefitsSmallBusinessPage.assertLawFirmInformation');
    // Confirm law firm name displays on the small business page
    await this.page.waitForSelector(TXT_LAW_FIRM_NAME);
    await this.assertElementContainsText(TXT_LAW_FIRM_NAME, 'Riggs, Abney, Neal, Turpen, Orbison & Lewis, PC');
  };

  assertAppStoreButtonISDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsSmallBusinessPage.assertAppStoreButtonIsDisplayed');
    // Confirm App store button is displayed
    await this.assertElementIsVisible(BTN_APP_STORE);
  };

  assertButtonViewDetailsIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsSmallBusinessPage.assertButtonViewDetailsIsVisible');
    // Confirm that View Details button is displayed
    await this.assertElementIsVisible(BTN_VIEW_DETAILS);
  };
}
