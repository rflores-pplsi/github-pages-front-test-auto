import urlsUtils from '../../utils/urls.utils';
import { OktaPage } from '../okta/okta.page';

// ========================== Selectors ==================================
const url: string = urlsUtils.legalshieldUrls.shieldAtWork.url;
const txtSearch: string = '[id="searchInput"]';
const btnSearch: string = '[id="searchButton"]';
const txtGroup: string = '#root  .lsux-container--flex-items-center.mb-2 > h3';
const btnViewGroup: string = '.lsux-button.lsux-button--standard.ml-3 > span';
const txtCompanyInformation: string = 'div:nth-child(2) > div:nth-child(1) > div.lsux-container.lsux-container--flexbox h3';
const txtAvailablePlanOfferings: string = '.lsux-col._3xFlevALZd1DdNKVRhaliI > div > h3';
const txtContactInformation: string = '.lsux-content div:nth-child(2) > div:nth-child(2) > div h3';
const txtAddress: string = '.lsux-content  div:nth-child(2) > div:nth-child(3)  h3';
const btnState: string = '.lsux-form-field-container._3CcWh8AqBHYFBJD2ZPGeEk > div > select';
const btnPaymentFrequency: string = '.lsux-form-field-container._1Gj4FaXDj3_n1qmtzsl_z8 > div > select';
const lnkLegalPlusPlan: string = '//*[@id="root"]/div/div/div[1]/div/div/div[2]/div[4]/div/div[2]/div/div/div[3]/div[1]/a';

/**
 * @export
 * @class ShieldAtWorkAccountTab
 * @extends {ShieldAtWorkAccountTab}
 */
export class ShieldAtWorkAccountTab extends OktaPage {
  // ========================== Process Methods ============================
  /**
   *
   *
   * @param {string} group
   * @memberof ShieldAtWorkAccountTab
   */
  groupSearchByGroupNumber = async (group: string): Promise<void> => {
    console.log(' - accountShieldAtWorkPage.groupSearchByGroupNumber');
    // Type in the search field the group number
    await this.page.fill(txtSearch, group);
    // Click on search button
    await this.clickOnElement(btnSearch);
    // Wait for the group name is displayed
    await this.page.waitForSelector(txtGroup);
  };
  /**
   *
   *
   * @param {String} groupNumber
   * @memberof ShieldAtWorkAccountTab
   */
  navigateToGroupPage = async (groupNumber: String): Promise<void> => {
    console.log(' - groupManagementShieldAtWorkPage.navigateToGroupPage');
    await this.page.goto(url);
    // Login through okta
    // await this.loginThroughOktaGroupEnrollment();
    await this.loginThroughOktaGroupEnrollment();
    // Search group by group number
    await this.groupSearchByGroupNumber('111452');
    // Click on View group button
    await this.clickViewGroup();
  };

  // ========================== Click Methods ==============================

  clickViewGroup = async (): Promise<void> => {
    console.log(' - accountShieldAtWorkPage.verifyAccountInformation');
    // Click on View Group button
    await this.clickOnElement(btnViewGroup);
  };

  clickLnkLegalPlusPlan = async (): Promise<void> => {
    console.log(' - accountShieldAtWorkPage.clickLnkPlusPlan');
    // Click on Legal Plus Plan in available offerings section
    await this.clickOnElement(lnkLegalPlusPlan);
  };

  // ========================== Navigate Methods ===========================

  // ========================== Assertion Methods ==========================

  assertCompanyInformation = async (): Promise<void> => {
    console.log(' - accountShieldAtWorkPage.assertCompanyInformation');
    // Verify that company information  is displayed
    await this.page.waitForSelector(txtCompanyInformation);
    await this.assertElementContainsText(txtCompanyInformation, 'Company information');
  };

  assertContactInformation = async (): Promise<void> => {
    console.log(' - accountShieldAtWork.assertContactInformation');
    // Verify that contact information page is displayed
    await this.page.waitForSelector(txtContactInformation);
    await this.assertElementContainsText(txtContactInformation, 'Contact information');
  };

  assertAddress = async (): Promise<void> => {
    console.log(' - accountShieldAtWork.assertAddress');
    // Verify that contact information page is displayed
    await this.page.waitForSelector(txtAddress);
    await this.assertElementContainsText(txtAddress, 'Address');
  };

  assertAvailablePlanOfferings = async (): Promise<void> => {
    console.log(' - accountShieldAtWork.assertAvailablePlanOfferings');
    // Verify that available plan offerings is displayed
    await this.page.waitForSelector(txtAvailablePlanOfferings);
    await this.assertElementContainsText(txtAvailablePlanOfferings, 'Available plan offerings');
  };

  assertStateIsDisplayed = async (): Promise<void> => {
    console.log(' - accountShieldAtWork.assertStateIsDisplayed');
    // Verify that state is displayed on the account tab
    await this.assertElementIsVisible(btnState);
  };

  assertPaymentFrequencyIsDisplayed = async (): Promise<void> => {
    console.log(' - accountShieldAtWork.assertPaymentFrequencyIsDisplayed');
    // Verify that payment frequency is displayed on the account tab
    await this.assertElementIsVisible(btnPaymentFrequency);
  };

  assertBenefitsDetailsPage = async (): Promise<void> => {
    console.log(' - accountShieldAtWork.assertBenefitsDetailsPage');
    // Verify that after clicking on hyperlink in available offerings section the benefits page is displayed
    await this.page.waitForLoadState('domcontentloaded');
  };
}
