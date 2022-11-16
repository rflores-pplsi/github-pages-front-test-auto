import { OktaPage } from '../../page-objects/okta/okta.page';

// ========================== Selectors ==================================

const URL_OVERVIEW = 'https://www.uat-shieldbenefits.com/primerica/overview';
const URL_LEGAL = 'https://www.uat-shieldbenefits.com/primerica/legal';
const TAB_LEGAL_PAGE = '#root > div > nav > div > div > ul > li:nth-child(2) > a';
const TXT_SEARCH_LAW_FIRM = '[placeholder="Search"]';
const BTN_SEARCH_LAW_FIRM = 'button:nth-child(4)';
const TXT_LAW_RESULTS = '[class="header"]';
const TXT_LAW_FIRM_NAME = '.results > p:nth-child(2)';
const BTN_APP_STORE = '.lsux-grid.container a:nth-child(1) > img';
const BTN_BACK_TO_TOP = 'main > div > div > button > span';
const BTN_PRICING = '#root > div > nav > div > div > ul > li:nth-child(5) > a';
const BTN_STATE = '#root div > div:nth-child(1)  div:nth-child(6)';
const BTN_SELECT = '#root div.filters.mt-5.mb-5.pb-5 > div > div:nth-child(1) > div > div > button';
const BTN_VIEW_DETAILS = '#root div:nth-child(3) div:nth-child(1) > div > div > div.groupTokenCardLeft > a';
const BTN_MORE_INFORMATION = '.lsux-row.mobile-full.children3.rows > div:nth-child(1) > div > div > div > div > a';
const ICON_QUESTION_MARK = '#helpButton > img';
const TXT_PHONE_NUMBER = '#helpContentCustom > a:nth-child(2)';
const TXT_WEBSITE_MEMBER_SERVICE = '#helpContentCustom > a:nth-child(3)';
const TXT_REP_ID = '[placeholder="Rep ID"]';
const BTN_FIND_REP = '#root  div.mr-5.find-agent-btn > div > button > span';
const BTN_ENROLL_NOW = '#root div.agent-info button > span';
const BTN_TERMS_OF_SERVICES = '#root div.lsux-col.col.eight.rightWrapper > div > ul > li:nth-child(2) > a';
const BTN_PRIVACY_POLICY = '#root div.lsux-col.col.eight.rightWrapper > div > ul > li:nth-child(3) > a';
const BTN_CODE_OF_ETHICS = '#root div.lsux-col.col.eight.rightWrapper > div > ul > li:nth-child(4) > a';

/**
 * @export
 * @class ShieldBenefitsPrimericaLegalPage
 * @extends {ShieldBenefitsPrimericaLegalPage}
 */
export class ShieldBenefitsPrimericaLegalPage extends OktaPage {
  // ========================== Process Methods ============================

  /**
   *
   *
   * @param {string} zipcode
   * @memberof ShieldBenefitsPrimericaLegalPage
   */
  searchLawFirm = async (zipcode: string): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.searchLawFirm');
    // Type in the search law field 80021
    await this.page.fill(TXT_SEARCH_LAW_FIRM, zipcode);
    // Click on Law Search button
    await this.clickOnElement(BTN_SEARCH_LAW_FIRM);
    // Confirm search was successful
    await this.page.waitForSelector(TXT_LAW_RESULTS);
  };
  /**
   *
   *
   * @param {string} repId
   * @memberof ShieldBenefitsPrimericaLegalPage
   */
  selectStateAndRepresentative = async (repId: string): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.selectStateAndRepresentative');
    // Select State
    await this.clickOnElement(BTN_SELECT);
    await this.clickOnElement(BTN_STATE);
    // Select Representative
    await this.page.fill(TXT_REP_ID, repId);
    // Click on Find Rep button
    await this.clickFindRepButton();
    // Click on Enroll now button
    await this.clickEnrollNowButton();
  };

  // ========================== Navigate Methods ===========================

  navigateToPrimericaLegalPage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.navigateToPrimericaLegalPage');
    await this.page.goto(URL_LEGAL);
  };

  navigateToPrimericaOverviewPage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaOverviewPage.navigateToPrimericaOverviewPage');
    await this.page.goto(URL_OVERVIEW);
  };
  // ========================== Click Methods ==============================

  clickAppStoreLink = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.clickAppStoreLink');
    // Click on AppStore link
    await this.page.click(BTN_APP_STORE);
  };

  clickFindRepButton = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.clickFindRepButton');
    // Click on Find Rep button
    await this.page.click(BTN_FIND_REP);
  };

  clickEnrollNowButton = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.clickEnrollNowButton');
    // Click on Enroll now button
    await this.page.click(BTN_ENROLL_NOW);
  };

  clickBtnBackToTop = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.clickAppStoreLink');
    // Click on Back to top button
    await this.page.click(BTN_BACK_TO_TOP);
  };

  clickBtnPricing = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.clickBtnPricing');
    // Click on Pricing tab
    await this.clickOnElement(BTN_PRICING);
  };

  clickBtnLegalPage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.clickBtnLegalPage');
    // Click on Legal tab
    await this.clickOnElement(TAB_LEGAL_PAGE);
  };

  clickIconQuestionMark = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaOverviewPage.clickIconQuestionMark');
    // Click on ? icon on the Primerica Overview page
    await this.clickOnElement(ICON_QUESTION_MARK);
  };

  // ========================== Assertion Methods ==========================

  assertMoreInformationButtonIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaOverviewPage.assertMoreInformationButtonIsDisplayed');
    // Verify that More information button is displayed on the Overview page
    await this.page.waitForSelector(BTN_MORE_INFORMATION);
    await this.assertElementIsVisible(BTN_MORE_INFORMATION);
  };

  assertLawFirmInformation = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.assertLawFirmInformation');
    // Confirm law firm name displays on the legal page
    await this.page.waitForSelector(TXT_LAW_FIRM_NAME);
    await this.assertElementContainsText(TXT_LAW_FIRM_NAME, 'Riggs, Abney, Neal, Turpen, Orbison & Lewis, PC');
  };

  assertAppStoreButtonISDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.assertAppStoreButtonIsDisplayed');
    // Confirm App store button is displayed
    await this.assertElementIsVisible(BTN_APP_STORE);
  };

  assertButtonViewDetailsIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.assertButtonViewDetailsIsVisible');
    // Confirm that View Details button is displayed
    await this.assertElementIsVisible(BTN_VIEW_DETAILS);
  };

  assertNumberAndWebsiteIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaOverviewPage.assertQuestionMarkIsDisplayed ');
    // Confirm that clicking on ? in top right corner  verifying correct number and website for Member services
    await this.page.waitForSelector(TXT_PHONE_NUMBER);
    await this.assertElementContainsText(TXT_PHONE_NUMBER, '1-800-426-9239');
    await this.page.waitForSelector(TXT_WEBSITE_MEMBER_SERVICE);
    await this.assertElementContainsText(TXT_WEBSITE_MEMBER_SERVICE, 'memberservices@legalshield.com');
  };

  assertShieldBenefitsPrimericaLegalPage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.assertShieldBenefitsPrimericaLegalPage');
    // Verify that top of page is displayed
    await this.assertElementIsVisible(TAB_LEGAL_PAGE);
  };

  assertEnrollNowButtonIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.assertEnrollNowButtonIsDisplayed');
    // Verify that Enroll now button is displayed
    await this.assertElementIsVisible(BTN_ENROLL_NOW);
  };

  assertTermsOfServicesBtnIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.assertTermsOfServicesBtnIsDisplayed');
    // Verify that Terms of Services button is displayed on the Legal page
    await this.page.waitForSelector(BTN_TERMS_OF_SERVICES);
    await this.assertElementIsVisible(BTN_TERMS_OF_SERVICES);
  };

  assertPrivacyPolicyBtnIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.assertPrivacyPolicyBtnIsDisplayed');
    // Verify that Privacy Policy button is displayed on the Legal page
    await this.page.waitForSelector(BTN_PRIVACY_POLICY);
    await this.assertElementIsVisible(BTN_PRIVACY_POLICY);
  };

  assertCodeOfEthicsBtnIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.assertPrivacyPolicyBtnIsDisplayed');
    // Verify that Code of Ethics button is displayed on the Legal page
    await this.page.waitForSelector(BTN_CODE_OF_ETHICS);
    await this.assertElementIsVisible(BTN_CODE_OF_ETHICS);
  };
}
