import UrlsUtils from '../../utils/urls.utils';
import { OktaPage } from '../okta/okta.page';

// ========================== Selectors ==================================

const url: string = UrlsUtils.legalshieldUrls.groupEnrollment.url;
const urlGroup: string = 'https://www.uat-shieldbenefits.com/';
const txtSearch: string = '[placeholder="Search"]';
const btnSearchGroup: string = '.lsux-button--primary';
const btnEdit: string = '.group-item-controls > div:nth-child(3) > a > div > img';
const btnCopyLink: string = '.lsux-button:nth-child(3) > .lsux-text--description';
const tabCommercialDriverPage: string = '#root > div > nav > div > div > ul > li:nth-child(6) > a';
const txtGroupInfo: string = '[class="group-item-info"]';
const txbNewGroupURLId: string = '.lsux-grid div:nth-child(4) > div > div > form > div:nth-child(1) input';
const btnSignIn: string = '[id="signedout"]';
const txtSearchLawFirm: string = '[placeholder="Search"]';
const btnSearchLawFirm: string = 'button:nth-child(4)';
const txtLawResults: string = '[class="header"]';
const txtLawFirmName: string = '.lsux-col.col.four > div > p > h5';
const btnAppStore: string = '.lsux-grid.container a:nth-child(1) > img';
const btnBackToTop: string = 'main > div > div > button > span';
const btnPricing: string = '#root > div > nav > div > div > ul > li:nth-child(7) > a';
const btnState: string = '//div[contains(@class,"mr-5") and contains (.,"State")]//button';
const btnPaymentFrequency: string = '//p[contains (.,"Payment frequency")]/following-sibling::div//button';
const btnViewDetails: string = '#root  div:nth-child(1) > div > div > div.groupTokenCardLeft > a';
const lnkMemberPerks: string = ' section div:nth-child(1) > div > p > a';

/**
 * @export
 * @class ShieldBenefitsCommercialDriverPage
 * @extends {ShieldBenefitsCommercialDriverPage}
 */
export class ShieldBenefitsCommercialDriverPage extends OktaPage {
  // ========================== Process Methods ============================
  /**
   *
   *
   * @param {string} group
   * @memberof ShieldBenefitsCommercialDriverPage
   */
  searchGroup = async (group: string): Promise<void> => {
    console.log(' - ShieldBenefitsCommercialDriverPage.searchGroup');
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
   * @memberof ShieldBenefitsCommercialDriverPage
   */
  searchLawFirm = async (zipcode: string): Promise<void> => {
    console.log(' - ShieldBenefitsCommercialDriverPage.searchLawFirm');
    // Type in the search law field 80021
    await this.page.fill(txtSearchLawFirm, zipcode);
    // Click on Law Search button
    await this.clickOnElement(btnSearchLawFirm);
    // Confirm search was successful
    await this.page.waitForSelector(txtLawResults);
  };

  copyNewGroupURL = async (): Promise<void> => {
    console.log(' - ShieldBenefitsCommercialDriverPage.copyNewGroupURL');
    // Copy link, paste it in a another tab
    await this.clickOnElement(btnCopyLink);
    await this.page.waitForTimeout(1000);
  };
  /**
   *
   *
   * @param {string} state
   * @param {string} paymentFrequency
   * @memberof ShieldBenefitsCommercialDriverPage
   */

  selectStateAndPaymentFrequency = async (state: string, paymentFrequency: string): Promise<void> => {
    console.log(' - ShieldBenefitsCommercialDriverPage.selectStateAndPaymentFrequency');
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
   * @memberof ShieldBenefitsCommercialDriverPage
   */
  navigateToGroupEnrollmentGroupURLPage = async (value: string): Promise<void> => {
    console.log(' - ShieldBenefitsCommercialDriverPage.navigateToGroupEnrollmentGroupURLPage');
    // Click on Edit button
    await this.clickBtnEditGroup();
    // Verify after pasting url in another browser tab group is displayed
    const valNewGroupURL = await this.page.getAttribute(txbNewGroupURLId, value);
    await this.page.waitForTimeout(1000);
    await this.page.goto(urlGroup + valNewGroupURL);
  };

  navigateToGroupEnrollmentSearchPage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsCommercialDriverPage.navigateToGroupEnrollmentSearchPage');
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
    console.log(' - ShieldBenefitsCommercialDriverPage.navigateToGroupEnrollmentCommercialDriverPage');
    await this.navigateToGroupEnrollmentSearchPage();
    await this.searchGroup(group);
    await this.navigateToGroupEnrollmentGroupURLPage('value');
  };
  // ========================== Click Methods ==============================

  clickBtnEditGroup = async (): Promise<void> => {
    console.log(' - ShieldBenefitsCommercialDriverPage.clickBtnEditGroup');
    // Click on Edit button
    await this.page.click(btnEdit);
  };

  clickBtnSignIn = async (): Promise<void> => {
    console.log(' - ShieldBenefitsCommercialDriverPage.clickBtnSignIn');
    // Click on Sign In button
    await this.page.click(btnSignIn);
  };

  clickAppStoreLink = async (): Promise<void> => {
    console.log(' - ShieldBenefitsCommercialDriverPage.clickAppStoreLink');
    // Click on AppStore link
    await this.page.click(btnAppStore);
  };

  clickBtnBackToTop = async (): Promise<void> => {
    console.log(' - ShieldBenefitsCommercialDriverPage.clickAppStoreLink');
    // Click on Back to top button
    await this.page.click(btnBackToTop);
  };

  clickBtnPricing = async (): Promise<void> => {
    console.log(' - ShieldBenefitsCommercialDriverPage.clickBtnPricing');
    // Click on Pricing tab
    await this.clickOnElement(btnPricing);
  };

  clickBtnCommercialDriverPage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsCommercialDriverPage.clickBtnCommercialDriverPage');
    // Click on Commercial Driver tab
    await this.clickOnElement(tabCommercialDriverPage);
  };

  // ========================== Assertion Methods ==========================

  assertShieldBenefitsCommercialDriverPage = async (): Promise<void> => {
    console.log(' - ShieldBenefitsCommercialDriverPage.assertShieldBenefitsCommercialDriverPage');
    // Verify that Commercial Driver tab is displayed for  group 83696
    await this.assertElementIsVisible(tabCommercialDriverPage);
  };

  assertSignInButtonIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsCommercialDriverPage.assertSignInButtonIsDisplayed');
    // Confirm Sign In button is displayed
    await this.assertElementIsVisible(btnSignIn);
  };

  assertLawFirmInformation = async (): Promise<void> => {
    console.log(' - ShieldBenefitsCommercialDriverPage.assertLawFirmInformation');
    // Confirm law firm name displays on the legal page
    await this.page.waitForSelector(txtLawFirmName);
    await this.assertElementContainsText(txtLawFirmName, 'Riggs, Abney, Neal, Turpen, Orbison & Lewis, PC');
  };

  assertAppStoreButtonISDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsCommercialDriverPage.assertAppStoreButtonIsDisplayed');
    // Confirm App store button is displayed
    await this.assertElementIsVisible(btnAppStore);
  };

  assertButtonViewDetailsIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsCommercialDriverPage.assertButtonViewDetailsIsVisible');
    // Confirm that View Details button is displayed
    await this.assertElementIsVisible(btnViewDetails);
  };

  assertLinkMemberPerksIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldBenefitsCommercialDriverPage.assertLinkMemberPerksIsDisplayed');
    // Confirm that Member Perks link is displayed
    await this.assertElementIsVisible(lnkMemberPerks);
  };
}
