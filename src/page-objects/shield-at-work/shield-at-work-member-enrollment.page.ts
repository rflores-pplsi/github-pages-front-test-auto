import urlsUtils from '../../utils/urls.utils';
import { LsWorkLoginPage } from './shield-at-work-login.page';

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
const btnPlan: string =
  '#root > div > div > div:nth-child(1) > div > div > div > div:nth-child(2) > form:nth-child(2) > div.lsux-container.lsux-container--white > div.mb-4._2nNbq5j54sbQ6MAihmSQg3 > div > div > div._3XfumkavlVQM3FWcqB9M-R > div:nth-child(1) > div > div > div.tEEXP1wEkyj2EVCZvuvw8 > div._2E_HYKNfYafGOziR-TaXG_ > label > div';
const btnContinuePlanOfferings: string =
  '#root > div > div > div:nth-child(1) > div > div > div > div:nth-child(2) > form:nth-child(2) > div._1yvcEtEbZqaqWyKqhjijeG > button';
const txtDateOfBirth: string = '[name="birthDay"]';
const txtSSN: string = '[name="ssn"]';
const txtFamilyMembers: string = '.lsux-row.plain.children1.pl-4.mb-0.pb-6.pr-5.family-member-heading-row > h4';

/**
 * @export
 * @class ShieldAtWorkMemberEnrollment
 * @extends {LsWorkLoginPage}
 */
export class ShieldAtWorkMemberEnrollment extends LsWorkLoginPage {
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
    // Select Plan
    await this.waitForElementToBeVisible(btnPlan);
    await this.clickOnElement(btnPlan);
  };

  // ========================== Navigate Methods ===========================

  navigateToShieldAtWorkMemberEnrollment = async (): Promise<void> => {
    console.log(' - ShieldAtWorkMemberEnrollment .navigateToShieldAtWorkMemberEnrollment');
    // Navigate to Url
    await this.page.goto(url);
    // Login to ShieldAtWork
    await this.loginWithCredentials();
    // Type in the search field group 121076
    await this.groupSearchByGroupNumber('121076');
    // Click on Enroll new member button
    await this.clickEnrollNewMember();
  };
  // ========================== Click Methods ==============================

  clickEnrollNewMember = async (): Promise<void> => {
    // Click on Enroll new member button
    console.log(' - ShieldAtWorkMemberEnrollment .clickEnrollNewMember');
    await this.clickOnElement(btnEnrollNewMember);
  };

  clickContinueButtonContactInfo = async (): Promise<void> => {
    // Click on Continue button
    console.log(' - ShieldAtWorkMemberEnrollment .clickContinueButtonContactInfo');
    await this.clickOnElement(btnContinueContactInfo);
    // wait for page to load plans
    await this.page.waitForLoadState('networkidle', { timeout: 30000 });
    await this.page.waitForSelector(txtEffectiveDate);
  };

  clickContinueButtonPlanOfferings = async (): Promise<void> => {
    // Click on Continue button
    console.log(' - ShieldAtWorkMemberEnrollment .clickContinueButtonPlanOfferings');
    await this.waitForElementToBeVisible(btnContinuePlanOfferings);
    await this.clickOnElement(btnContinuePlanOfferings);
    // wait for page to load plans
    await this.page.waitForLoadState('networkidle', { timeout: 30000 });
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
}
