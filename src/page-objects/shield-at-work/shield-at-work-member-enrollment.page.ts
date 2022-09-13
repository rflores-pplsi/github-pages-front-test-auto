import urlsUtils from '../../utils/urls.utils';
import { OktaPage } from '../okta/okta.page';

// ========================== Selectors ==================================

const url: string = urlsUtils.legalshieldUrls.shieldAtWork.url;
const btnEnrollNewMember: string = '.lsux-content  div:nth-child(3) .lsux-button--tertiary > span';
const txtFirstName: string = '[placeholder="First name"]';
const txtLastName: string = '[placeholder="Last name"]';
const txtHomePhone: string = '#homePhoneInput';
const txtEmailAddress: string = '[placeholder="Email address"]';
const txtAddress1: string = '[placeholder="Address 1"]';
const txtCity: string = '[placeholder="City"]';
const txtState: string = '[id="state"]';
const txtZipCode: string = '[placeholder="Zip code"]';
const btnContinueContactInfo: string = '.lsux-content  form:nth-child(1) button > span';
const btnEdit: string = '.lsux-content  .TZykF7nc8qs6i9k03RlmT > button > span';
const txtSearch: string = '[placeholder="Search by name or group number"]';
const btnSearch: string = '[id="searchButton"]';
const txtGroup: string = '#root  .lsux-container--flex-items-center.mb-2 > h3';
const txtEffectiveDate: string = '[name="effectiveDate"]';
const btnPlanLegalFamilySmallBusiness: string =
  '.lsux-container.lsux-container--white div:nth-child(11) > div > div > div.tEEXP1wEkyj2EVCZvuvw8  label > div';
const btnContinuePlanOfferings: string =
  '#root > div > div > div:nth-child(1) > div > div > div > div:nth-child(2) > form:nth-child(2) > div._1yvcEtEbZqaqWyKqhjijeG > button';
const txtDateOfBirth: string = '[name="birthDay"]';
const txtSSN: string = '[name="ssn"]';
const txtFamilyMembers: string = '.lsux-row.plain.children1.pl-4.mb-0.pb-6.pr-5.family-member-heading-row > h4';
const txtPersonalSection: string = '[class="lsux-row thirds children2 pl-3 pt-5 mb-0"]';
const txtSmallBusinessSection: string = '[class="lsux-row half children4 iXT0avfKqWlj5YIcRiizJ"]';
const txtCompanyName: string = '[placeholder="Company name"]';
const txtTaxID: string = '[placeholder="Tax-ID"]';
const txtDateOfIncorporation: string = '[placeholder="Date of incorporation"]';
const txtTypeOfBusiness: string = '[placeholder="Type of business"]';
const txtDateOfBirthPersonalSection: string = '[name="birthDay"]';
const txtSSNPersonalSection: string = '[placeholder="000-00-0000"]';
const btnRadioPubliclyTradedCompany: string = '#root form:nth-child(3) div.small-biz-select > div:nth-child(2) > div > label:nth-child(1) > div';
const btnRadioNonProfitBusiness: string = '#root  div:nth-child(1)  form:nth-child(3) div.small-biz-select > div:nth-child(4) > div > label:nth-child(1) > div';
const btnContinueAssociateInfo: string = '#root  div.mb-4._2nNbq5j54sbQ6MAihmSQg3 > div._1yvcEtEbZqaqWyKqhjijeG > button';
const btnAssociateSelection: string = 'select[type="submit"]';
const btnSubmit: string = '//span[normalize-space()="Submit"]';
const txtGroupManagement: string = '.lsux-heading.lsux-heading--t26';


/**
 * @export
 * @class ShieldAtWorkMemberEnrollment
 * @extends {LsWorkLoginPage}
 */
export class ShieldAtWorkMemberEnrollment extends OktaPage {
  // ========================== Process Methods ============================

  /**
   *
   *
   * @param {string} name
   * @param {string} lastname
   *  @param {string} homePhone
   *  @param {string} email
   *  @param {string} address
   *  @param {string} city
   *  @param {string} zipCode
   * @memberof ShieldAtWorkMemberEnrollment
   */
  fillOutContactInformation = async (
    name: string,
    lastname: string,
    homePhone: string,
    email: string,
    address: string,
    city: string,
    zipCode: string
  ): Promise<void> => {
    console.log(' - ShieldAtWorkMemberEnrollment.fillOutContactInformation');
    // Type in the fist name field Test
    await this.page.fill(txtFirstName, name);
    // Type in the last name field Tester
    await this.page.fill(txtLastName, lastname);
    // Type in the home phone field 5555555555
    await this.page.fill(txtHomePhone, homePhone);
    // Type in the email address field tester93@gmail.com
    await this.page.fill(txtEmailAddress, email);
    // Type in the address 1 field 1666 Raleigh
    await this.page.fill(txtAddress1, address);
    // Type in the city field Dallas
    await this.page.fill(txtCity, city);
    // Select TX state from drop down
    await this.page.selectOption(txtState, { label: 'TX' });
    // Type in the zip code field 77494
    await this.page.fill(txtZipCode, zipCode);
  };

  fillOutSmallBusinessInformationSection = async (
    companyName: string,
    taxID: string,
    dateOfIncorporation: string,
    typeOfBusiness: string,
    
  ): Promise<void> => {
    console.log(' - ShieldAtWorkMemberEnrollment.fillOutSmallBusinessInformationSection');
    // Type in the company name field Tester
    await this.page.fill(txtCompanyName, companyName);
    // Type in the tax-ID field 5555
    await this.page.fill(txtTaxID, taxID);
    // Select date of incorporation 
    await this.page.type(txtDateOfIncorporation, dateOfIncorporation);
    // Type in the type of business field Bakery
    await this.page.fill(txtTypeOfBusiness, typeOfBusiness);
};

fillOutPersonalInformationSection = async (
    dateOfBirthPersonalSection: string,
    ssn: string,
    
    ): Promise<void> => {
    console.log(' - ShieldAtWorkMemberEnrollment.fillOutPersonalInformationSection');
    // Type in the date of birth field 09/09/1992
    await this.page.waitForSelector(txtDateOfBirthPersonalSection);
    await this.page.type(txtDateOfBirthPersonalSection, dateOfBirthPersonalSection);
    // Type in the SSN/SIN field 444444444
    await this.page.fill(txtSSNPersonalSection, ssn);
};

  /**
   *
   *
   * @param {string} group
   * @memberof  ShieldAtWorkMemberDetailsPage
   */
  groupSearchByGroupNumber = async (group: string): Promise<void> => {
    console.log(' -  ShieldAtWorkMemberEnrollment.groupSearchByGroupNumber');
    // Type in the search field the group number
    await this.page.fill(txtSearch, group);
    // Click on search button
    await this.clickOnElement(btnSearch);
    // Wait for the group name is displayed
    await this.page.waitForSelector(txtGroup);
  };

  selectEffectiveDate = async (): Promise<void> => {
    console.log(' -  ShieldAtWorkMemberEnrollment.selectEffectiveDate');
    await this.page.waitForSelector(txtEffectiveDate);
    // Select an effective date
    // const today = new Date();
    // const date = today.getMonth() + 1 + '/' + today.getDay() + '/' + today.getFullYear();
    await this.page.type(txtEffectiveDate, '09102022');
  };

  selectDateOfBirth = async (): Promise<void> => {
    console.log(' -  ShieldAtWorkMemberEnrollment.selectDateOfBirth');
    await this.page.waitForSelector(txtDateOfBirth);
    // Select date of birth
    await this.page.type(txtDateOfBirth, '01031990');
  };

  selectSSN = async (): Promise<void> => {
    console.log(' -  ShieldAtWorkMemberEnrollment.selectSSN');
    await this.page.waitForSelector(txtSSN);
    // Select SSN
    await this.page.type(txtSSN, '111111111');
  };

  selectPlan = async (): Promise<void> => {
    console.log(' -  ShieldAtWorkMemberEnrollment.selectPlan');
    // Select Legal Family Plan + Small Business
    await this.waitForElementToBeVisible(btnPlanLegalFamilySmallBusiness);
    await this.clickOnElement(btnPlanLegalFamilySmallBusiness);
  };

  // ========================== Navigate Methods ===========================

  /**
   *
   *
   * @param {String} groupNumber
   * @memberof shieldAtWorkMemberEnrollment
   */
  navigateToGroupPage = async (groupNumber: String): Promise<void> => {
    console.log(' - shieldAtWorkMemberEnrollment.navigateToGroupPage');
    await this.page.goto(url);
    // Login through okta
    await this.loginThroughOktaGroupEnrollment();
    // Search group by group number
    await this.groupSearchByGroupNumber('121076');
    // Click on Enroll New member button
    await this.clickEnrollNewMember();
  };

  selectAnAssociate = async (): Promise<void> => {
    console.log(' - shieldAtWorkMemberEnrollment.selectAnAssociate');
    // Select an associate in drop down menu
    await this.page.selectOption(btnAssociateSelection, { label: 'Legalshield Corporate Office - 1' });
  };
  // ========================== Click Methods ==============================

  clickEnrollNewMember = async (): Promise<void> => {
    // Click on Enroll new member button
    console.log(' - ShieldAtWorkMemberEnrollment.clickEnrollNewMember');
    await this.clickOnElement(btnEnrollNewMember);
  };

  clickContinueButtonContactInfo = async (): Promise<void> => {
    // Click on Continue button
    console.log(' - ShieldAtWorkMemberEnrollment.clickContinueButtonContactInfo');
    await this.clickOnElement(btnContinueContactInfo);
    // wait for page to load plans
    await this.page.waitForLoadState('networkidle', { timeout: 30000 });
    await this.page.waitForSelector(txtEffectiveDate);
  };

  clickContinueButtonPlanOfferings = async (): Promise<void> => {
    // Click on Continue button
    console.log(' - ShieldAtWorkMemberEnrollment.clickContinueButtonPlanOfferings');
    await this.waitForElementToBeVisible(btnContinuePlanOfferings);
    await this.clickOnElement(btnContinuePlanOfferings);
    // wait for page to load plans
    await this.page.waitForLoadState('networkidle', { timeout: 30000 });
  };

  clickContinueButtonAssociateInfo = async (): Promise<void> => {
    // Click on Continue button
    console.log(' - ShieldAtWorkMemberEnrollment.clickContinueButtonAssociateInfo');
    await this.waitForElementToBeVisible(btnContinueAssociateInfo);
    await this.clickOnElement(btnContinueAssociateInfo);
    // wait for page to load plans
    await this.page.waitForLoadState('networkidle', { timeout: 30000 });
  };

  clickNoPubliclyTradedCompanyRadioButton = async (): Promise<void> => {
    console.log(' - ShieldAtWorkMemberEnrollment.clickNoPubliclyTradedCompanyRadioButton');
    // Click on No in "Is this a publicly traded company?"
    await this.clickOnElement(btnRadioPubliclyTradedCompany);
  };

  clickNonProfitBusinessRadioButton = async (): Promise<void> => {
    console.log(' - ShieldAtWorkMemberEnrollment.clickNonProfitBusinessRadioButton');
    // Click on No in "Is this a non-profit business?"
    await this.clickOnElement(btnRadioNonProfitBusiness);
  };

  clickSubmitButton = async (): Promise<void> => {
    console.log(' - ShieldAtWorkMemberEnrollment.clickSubmitButton');
    // Click on Submit button
    await this.clickOnElement(btnSubmit);
  };

  // ========================== Assertion Methods ==========================

  assertEditButton = async (): Promise<void> => {
    console.log(' - ShieldAtWorkMemberEnrollment .assertEditButton');
    // Verify that Edit button is enabled
    await this.assertElementIsVisible(btnEdit);
  };

  assertEffectiveDateField = async (): Promise<void> => {
    console.log(' - ShieldAtWorkMemberEnrollment .assertEffectiveDateField');
    // Verify that Edit button is enabled
    await this.assertElementIsVisible(txtEffectiveDate);
  };

  assertFamilyMemberSectionIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldAtWorkMemberEnrollment .assertFamilyMemberSectionIsDisplayed');
    // Confirm family section is displayed
    await this.assertElementIsVisible(txtFamilyMembers);
  };

  assertPersonalSectionIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldAtWorkMemberEnrollment .assertPersonalSectionIsDisplayed');
    // Confirm personal section is displayed
    await this.assertElementIsVisible(txtPersonalSection);
  };

  assertSmallBusinessSectionIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldAtWorkMemberEnrollment .assertSmallBusinessSectionIsDisplayed');
    // Confirm small business section is displayed
    await this.assertElementIsVisible(txtPersonalSection);
  };

  assertGroupManagementPage = async (): Promise<void> => {
    console.log(' - ShieldAtWorkMemberEnrollment .assertGroupManagementPage');
    // Confirm group management page is displayed
    await this.assertElementIsVisible(txtGroupManagement);
  };
}
