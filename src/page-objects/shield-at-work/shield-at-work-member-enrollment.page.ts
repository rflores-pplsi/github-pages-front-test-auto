import urlsUtils from '../../utils/urls.utils';
import { OktaPage } from '../okta/okta.page';

// ========================== Selectors ==================================

const url: string = urlsUtils.legalshieldUrls.shieldAtWork.url;
const BTN_ENROLL_NEW_MEMBER = '.lsux-content  div:nth-child(3) .lsux-button--tertiary > span';
const TXT_FIRST_NAME = '[placeholder="First name"]';
const TXT_LAST_NAME = '[placeholder="Last name"]';
const TXT_HOME_PHONE = '#homePhoneInput';
const TXT_EMAIL_ADDRESS = '[placeholder="Email address"]';
const TXT_ADDRESS1 = '[placeholder="Address 1"]';
const TXT_CITY = '[placeholder="City"]';
const TXT_STATE = '[id="state"]';
const TXT_ZIP_CODE = '[placeholder="Zip code"]';
const BTN_CONTINUE_CONTACT_INFO = '.lsux-content  form:nth-child(1) button > span';
const BTN_EDIT = '.lsux-content  .TZykF7nc8qs6i9k03RlmT > button > span';
const TXT_SEARCH = '[placeholder="Search by name or group number"]';
const BTN_SEARCH = '[id="searchButton"]';
const TXT_GROUP = '#root  .lsux-container--flex-items-center.mb-2 > h3';
const TXT_EFFECTIVE_DATE = '[name="effectiveDate"]';
const BTN_PLAN_LEGAL_FAMILY_SMALL_BUSINESS =
  '.lsux-container.lsux-container--white div:nth-child(11) > div > div > div.tEEXP1wEkyj2EVCZvuvw8  label > div';
const BTN_CONTINUE_PLAN_OFFERINGS =
  '#root > div > div > div:nth-child(1) > div > div > div > div:nth-child(2) > form:nth-child(2) > div._1yvcEtEbZqaqWyKqhjijeG > button';
const TXT_DATE_OF_BIRTH = '[name="birthDay"]';
const TXT_SSN = '[name="ssn"]';
const TXT_FAMILY_MEMBERS = '.lsux-row.plain.children1.pl-4.mb-0.pb-6.pr-5.family-member-heading-row > h4';
const TXT_PERSONAL_SECTION = '[class="lsux-row thirds children2 pl-3 pt-5 mb-0"]';
const TXT_COMPANY_NAME = '[placeholder="Company name"]';
const TXT_TAX_ID = '[placeholder="Tax-ID"]';
const TXT_DATE_OF_INCORPORATION = '[placeholder="Date of incorporation"]';
const TXT_TYPE_OF_BUSINESS = '[placeholder="Type of business"]';
const TXT_DATE_OF_BIRTH_PERSONAL_SECTION = '[name="birthDay"]';
const TXT_SSN_PERSONAL_SECTION = '[placeholder="000-00-0000"]';
const BTN_RADIO_PUBLICLY_TRADED_COMPANY = '#root form:nth-child(3) div.small-biz-select > div:nth-child(2) > div > label:nth-child(1) > div';
const BTN_RADIO_NON_PROFIT_BUSINESS =
  '#root  div:nth-child(1)  form:nth-child(3) div.small-biz-select > div:nth-child(4) > div > label:nth-child(1) > div';
const BTN_CONTINUE_ASSOCIATE_INFO = '#root  div.mb-4._2nNbq5j54sbQ6MAihmSQg3 > div._1yvcEtEbZqaqWyKqhjijeG > button';
const BTN_ASSOCIATE_SELECTION = 'select[type="submit"]';
const BTN_SUBMIT = '//span[normalize-space()="Submit"]';
const TXT_GROUP_MANAGEMENT = '.lsux-heading.lsux-heading--t26';

/**
 *
 *
 * @export
 * @class ShieldAtWorkMemberEnrollment
 * @extends {OktaPage}
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
    await this.page.fill(TXT_FIRST_NAME, name);
    // Type in the last name field Tester
    await this.page.fill(TXT_LAST_NAME, lastname);
    // Type in the home phone field 5555555555
    await this.page.fill(TXT_HOME_PHONE, homePhone);
    // Type in the email address field tester93@gmail.com
    await this.page.fill(TXT_EMAIL_ADDRESS, email);
    // Type in the address 1 field 1666 Raleigh
    await this.page.fill(TXT_ADDRESS1, address);
    // Type in the city field Dallas
    await this.page.fill(TXT_CITY, city);
    // Select TX state from drop down
    await this.page.selectOption(TXT_STATE, { label: 'TX' });
    // Type in the zip code field 77494
    await this.page.fill(TXT_ZIP_CODE, zipCode);
  };

  fillOutSmallBusinessInformationSection = async (
    companyName: string,
    taxID: string,
    dateOfIncorporation: string,
    typeOfBusiness: string
  ): Promise<void> => {
    console.log(' - ShieldAtWorkMemberEnrollment.fillOutSmallBusinessInformationSection');
    // Type in the company name field Tester
    await this.page.fill(TXT_COMPANY_NAME, companyName);
    // Type in the tax-ID field 5555
    await this.page.fill(TXT_TAX_ID, taxID);
    // Select date of incorporation
    await this.page.type(TXT_DATE_OF_INCORPORATION, dateOfIncorporation);
    // Type in the type of business field Bakery
    await this.page.fill(TXT_TYPE_OF_BUSINESS, typeOfBusiness);
  };

  fillOutPersonalInformationSection = async (dateOfBirthPersonalSection: string, ssn: string): Promise<void> => {
    console.log(' - ShieldAtWorkMemberEnrollment.fillOutPersonalInformationSection');
    // Type in the date of birth field 09/09/1992
    await this.page.waitForSelector(TXT_DATE_OF_BIRTH_PERSONAL_SECTION);
    await this.page.type(TXT_DATE_OF_BIRTH_PERSONAL_SECTION, dateOfBirthPersonalSection);
    // Type in the SSN/SIN field 444444444
    await this.page.fill(TXT_SSN_PERSONAL_SECTION, ssn);
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
    await this.page.fill(TXT_SEARCH, group);
    // Click on search button
    await this.clickOnElement(BTN_SEARCH);
    // Wait for the group name is displayed
    await this.page.waitForSelector(TXT_GROUP);
  };

  selectEffectiveDate = async (): Promise<void> => {
    console.log(' -  ShieldAtWorkMemberEnrollment.selectEffectiveDate');
    await this.page.waitForSelector(TXT_EFFECTIVE_DATE);
    // Select an effective date
    // const today = new Date();
    // const date = today.getMonth() + 1 + '/' + today.getDay() + '/' + today.getFullYear();
    await this.page.type(TXT_EFFECTIVE_DATE, '09102022');
  };

  selectDateOfBirth = async (): Promise<void> => {
    console.log(' -  ShieldAtWorkMemberEnrollment.selectDateOfBirth');
    await this.page.waitForSelector(TXT_DATE_OF_BIRTH);
    // Select date of birth
    await this.page.type(TXT_DATE_OF_BIRTH, '01031990');
  };

  selectSSN = async (): Promise<void> => {
    console.log(' -  ShieldAtWorkMemberEnrollment.selectSSN');
    await this.page.waitForSelector(TXT_SSN);
    // Select SSN
    await this.page.type(TXT_SSN, '111111111');
  };

  selectPlan = async (): Promise<void> => {
    console.log(' -  ShieldAtWorkMemberEnrollment.selectPlan');
    // Select Legal Family Plan + Small Business
    await this.waitForElementToBeVisible(BTN_PLAN_LEGAL_FAMILY_SMALL_BUSINESS);
    await this.clickOnElement(BTN_PLAN_LEGAL_FAMILY_SMALL_BUSINESS);
  };

  // ========================== Navigate Methods ===========================

  /**
   *
   *
   * @memberof ShieldAtWorkMemberEnrollment
   */
  navigateToGroupPage = async (): Promise<void> => {
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
    await this.page.selectOption(BTN_ASSOCIATE_SELECTION, { label: 'Legalshield Corporate Office - 1' });
  };
  // ========================== Click Methods ==============================

  clickEnrollNewMember = async (): Promise<void> => {
    // Click on Enroll new member button
    console.log(' - ShieldAtWorkMemberEnrollment.clickEnrollNewMember');
    await this.clickOnElement(BTN_ENROLL_NEW_MEMBER);
  };

  clickContinueButtonContactInfo = async (): Promise<void> => {
    // Click on Continue button
    console.log(' - ShieldAtWorkMemberEnrollment.clickContinueButtonContactInfo');
    await this.clickOnElement(BTN_CONTINUE_CONTACT_INFO);
    // wait for page to load plans
    await this.page.waitForLoadState('networkidle', { timeout: 30000 });
    await this.page.waitForSelector(TXT_EFFECTIVE_DATE);
  };

  clickContinueButtonPlanOfferings = async (): Promise<void> => {
    // Click on Continue button
    console.log(' - ShieldAtWorkMemberEnrollment.clickContinueButtonPlanOfferings');
    await this.waitForElementToBeVisible(BTN_CONTINUE_PLAN_OFFERINGS);
    await this.clickOnElement(BTN_CONTINUE_PLAN_OFFERINGS);
    // wait for page to load plans
    await this.page.waitForLoadState('networkidle', { timeout: 30000 });
  };

  clickContinueButtonAssociateInfo = async (): Promise<void> => {
    // Click on Continue button
    console.log(' - ShieldAtWorkMemberEnrollment.clickContinueButtonAssociateInfo');
    await this.waitForElementToBeVisible(BTN_CONTINUE_ASSOCIATE_INFO);
    await this.clickOnElement(BTN_CONTINUE_ASSOCIATE_INFO);
    // wait for page to load plans
    await this.page.waitForLoadState('networkidle', { timeout: 30000 });
  };

  clickNoPubliclyTradedCompanyRadioButton = async (): Promise<void> => {
    console.log(' - ShieldAtWorkMemberEnrollment.clickNoPubliclyTradedCompanyRadioButton');
    // Click on No in "Is this a publicly traded company?"
    await this.clickOnElement(BTN_RADIO_PUBLICLY_TRADED_COMPANY);
  };

  clickNonProfitBusinessRadioButton = async (): Promise<void> => {
    console.log(' - ShieldAtWorkMemberEnrollment.clickNonProfitBusinessRadioButton');
    // Click on No in "Is this a non-profit business?"
    await this.clickOnElement(BTN_RADIO_NON_PROFIT_BUSINESS);
  };

  clickSubmitButton = async (): Promise<void> => {
    console.log(' - ShieldAtWorkMemberEnrollment.clickSubmitButton');
    // Click on Submit button
    await this.clickOnElement(BTN_SUBMIT);
  };

  // ========================== Assertion Methods ==========================

  assertEditButton = async (): Promise<void> => {
    console.log(' - ShieldAtWorkMemberEnrollment .assertEditButton');
    // Verify that Edit button is enabled
    await this.assertElementIsVisible(BTN_EDIT);
  };

  assertEffectiveDateField = async (): Promise<void> => {
    console.log(' - ShieldAtWorkMemberEnrollment .assertEffectiveDateField');
    // Verify that Edit button is enabled
    await this.assertElementIsVisible(TXT_EFFECTIVE_DATE);
  };

  assertFamilyMemberSectionIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldAtWorkMemberEnrollment .assertFamilyMemberSectionIsDisplayed');
    // Confirm family section is displayed
    await this.assertElementIsVisible(TXT_FAMILY_MEMBERS);
  };

  assertPersonalSectionIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldAtWorkMemberEnrollment .assertPersonalSectionIsDisplayed');
    // Confirm personal section is displayed
    await this.assertElementIsVisible(TXT_PERSONAL_SECTION);
  };

  assertSmallBusinessSectionIsDisplayed = async (): Promise<void> => {
    console.log(' - ShieldAtWorkMemberEnrollment .assertSmallBusinessSectionIsDisplayed');
    // Confirm small business section is displayed
    await this.assertElementIsVisible(TXT_PERSONAL_SECTION);
  };

  assertGroupManagementPage = async (): Promise<void> => {
    console.log(' - ShieldAtWorkMemberEnrollment .assertGroupManagementPage');
    // Confirm group management page is displayed
    await this.assertElementIsVisible(TXT_GROUP_MANAGEMENT);
  };
}
