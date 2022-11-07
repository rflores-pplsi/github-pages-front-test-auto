import { OktaPage } from '../../page-objects/okta/okta.page';

// ========================== Selectors ==================================

const urlOverview: string = 'https://www.uat-shieldbenefits.com/primerica/overview';
const urlLegal: string = 'https://www.uat-shieldbenefits.com/primerica/legal';
const tabLegalPage: string = '#root > div > nav > div > div > ul > li:nth-child(2) > a';
const txtSearchLawFirm: string = '[placeholder="Search"]';
const btnSearchLawFirm: string = 'button:nth-child(4)';
const txtLawResults: string = '[class="header"]';
const txtLawFirmName: string = '.results > p:nth-child(2)';
const btnAppStore: string = '.lsux-grid.container a:nth-child(1) > img';
const btnBackToTop: string = 'main > div > div > button > span';
const btnPricing: string = '#root > div > nav > div > div > ul > li:nth-child(5) > a';
const btnState: string = '#root div > div:nth-child(1)  div:nth-child(6)';
const btnSelect: string = '#root div.filters.mt-5.mb-5.pb-5 > div > div:nth-child(1) > div > div > button';
const btnViewDetails: string = '#root div:nth-child(3) div:nth-child(1) > div > div > div.groupTokenCardLeft > a';
const btnMoreInformation: string = '.lsux-row.mobile-full.children3.rows > div:nth-child(1) > div > div > div > div > a';
const iconQuestionMark: string = '#helpButton > img';
const txtPhoneNumber: string = '#helpContentCustom > a:nth-child(2)';
const txtWebsiteMemberService: string = '#helpContentCustom > a:nth-child(3)';
const txtRepID: string = '[placeholder="Rep ID"]';
const btnFindRep: string = '#root  div.mr-5.find-agent-btn > div > button > span';
const btnEnrollNow: string = '#root div.agent-info button > span';
const btnTermsOfServices: string = '#root div.lsux-col.col.eight.rightWrapper > div > ul > li:nth-child(2) > a';
const btnPrivacyPolicy: string = '#root div.lsux-col.col.eight.rightWrapper > div > ul > li:nth-child(3) > a';
const btnCodeOfEthics: string = '#root div.lsux-col.col.eight.rightWrapper > div > ul > li:nth-child(4) > a';


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
    await this.page.fill(txtSearchLawFirm, zipcode);
    // Click on Law Search button
    await this.clickOnElement(btnSearchLawFirm);
    // Confirm search was successful
    await this.page.waitForSelector(txtLawResults);
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
    await this.clickOnElement(btnSelect);
    await this.clickOnElement(btnState);
    // Select Representative
    await this.page.fill(txtRepID, repId);
    // Click on Find Rep button
    await this.clickFindRepButton();
    // Click on Enroll now button
    await this.clickEnrollNowButton();
  };

  // ========================== Navigate Methods ===========================

  navigateToPrimericaLegalPage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.navigateToPrimericaLegalPage');
    await this.page.goto(urlLegal);
  };

  navigateToPrimericaOverviewPage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaOverviewPage.navigateToPrimericaOverviewPage');
    await this.page.goto(urlOverview);
  };
  // ========================== Click Methods ==============================

  clickAppStoreLink = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.clickAppStoreLink');
    // Click on AppStore link
    await this.page.click(btnAppStore);
  };

  clickFindRepButton = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.clickFindRepButton');
    // Click on Find Rep button
    await this.page.click(btnFindRep);
  };

  clickEnrollNowButton = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.clickEnrollNowButton');
    // Click on Enroll now button
    await this.page.click(btnEnrollNow);
  };

  clickBtnBackToTop = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.clickAppStoreLink');
    // Click on Back to top button
    await this.page.click(btnBackToTop);
  };

  clickBtnPricing = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.clickBtnPricing');
    // Click on Pricing tab
    await this.clickOnElement(btnPricing);
  };

  clickBtnLegalPage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.clickBtnLegalPage');
    // Click on Legal tab
    await this.clickOnElement(tabLegalPage);
  };

  clickIconQuestionMark = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaOverviewPage.clickIconQuestionMark');
    // Click on ? icon on the Primerica Overview page
    await this.clickOnElement(iconQuestionMark);
  };

  // ========================== Assertion Methods ==========================

  assertMoreInformationButtonIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaOverviewPage.assertMoreInformationButtonIsDisplayed');
    // Verify that More information button is displayed on the Overview page
    await this.page.waitForSelector(btnMoreInformation);
    await this.assertElementIsVisible(btnMoreInformation);
  };

  assertLawFirmInformation = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.assertLawFirmInformation');
    // Confirm law firm name displays on the legal page
    await this.page.waitForSelector(txtLawFirmName);
    await this.assertElementContainsText(txtLawFirmName, 'Riggs, Abney, Neal, Turpen, Orbison & Lewis, PC');
  };

  assertAppStoreButtonISDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.assertAppStoreButtonIsDisplayed');
    // Confirm App store button is displayed
    await this.assertElementIsVisible(btnAppStore);
  };

  assertButtonViewDetailsIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.assertButtonViewDetailsIsVisible');
    // Confirm that View Details button is displayed
    await this.assertElementIsVisible(btnViewDetails);
  };

  assertNumberAndWebsiteIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaOverviewPage.assertQuestionMarkIsDisplayed ');
    // Confirm that clicking on ? in top right corner  verifying correct number and website for Member services
    await this.page.waitForSelector(txtPhoneNumber);
    await this.assertElementContainsText(txtPhoneNumber, '1-800-426-9239');
    await this.page.waitForSelector(txtWebsiteMemberService);
    await this.assertElementContainsText(txtWebsiteMemberService, 'memberservices@legalshield.com');
  };

  assertShieldBenefitsPrimericaLegalPage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.assertShieldBenefitsPrimericaLegalPage');
    // Verify that top of page is displayed
    await this.assertElementIsVisible(tabLegalPage);
  };

  assertEnrollNowButtonIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.assertEnrollNowButtonIsDisplayed');
    // Verify that Enroll now button is displayed
    await this.assertElementIsVisible(btnEnrollNow);
  };

  assertTermsOfServicesBtnIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.assertTermsOfServicesBtnIsDisplayed');
    // Verify that Terms of Services button is displayed on the Legal page
    await this.page.waitForSelector(btnTermsOfServices);
    await this.assertElementIsVisible(btnTermsOfServices);
  };

    assertPrivacyPolicyBtnIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.assertPrivacyPolicyBtnIsDisplayed');
    // Verify that Privacy Policy button is displayed on the Legal page
    await this.page.waitForSelector(btnPrivacyPolicy);
    await this.assertElementIsVisible(btnPrivacyPolicy);
  };

    assertCodeOfEthicsBtnIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsPrimericaLegalPage.assertPrivacyPolicyBtnIsDisplayed');
    // Verify that Code of Ethics button is displayed on the Legal page
    await this.page.waitForSelector(btnCodeOfEthics);
    await this.assertElementIsVisible(btnCodeOfEthics);
   };
}

