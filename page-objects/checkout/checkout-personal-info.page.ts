import { CheckoutOrderSummaryComponent } from './checkout-order-summary.component';

// ========================== Selectors ==================================
const btnSaveAndContinue: string = 'button:has-text("Save & Continue")';

// ========================== Personal Info Selectors ====================
const stpPersonalInfoCurrent: string = '//div[contains(@class,"step-circle--current") and contains(.,"2")]';
const txtFirstName: string = '[name="firstName"]';
const txtLastName: string = '[name="lastName"]';
const txtPhoneNumber: string = '[name="phoneNumber"]';
const txtPhoneType: string = '[name="phoneType"]';
const txtHomeAddress: string = '[name="homeAddress"]';
const txtCity: string = '[name="city"]';
const txtPostalCode: string = '[name="postalCode"]';
const txtRegion: string = '//span[contains(@class, "contact-region")]';
const lnkChangeState: string = 'a:has-text("Change")';
const imgStateChangeInformationIcon: string = '[alt="info"';
const txaStageChangeToolTip: string = '//div[contains(@class,"info-tooltip-text")]';

// ========================== Support Card Selectors ======================
const conSupportInfo: string = '//div[contains(@class, "support-card-container")]';
const btnCallSupport: string = 'button:has-text("Call (833)-951-2754")';

// ========================== Security Info Selectors ======================
const txtBirthMonth: string = '[name="dobMonth"]';
const txtBirthDay: string = '[name="dobDay"]';
const txtBirthYear: string = '[name="dobYear"]';
const txtSocialSecurityNumber: string = '[placeholder="Last 4 SSN or SIN"]';

// ========================== Business Info Selectors ======================
const txtBusinessName: string = '[placeholder="Last 4 SSN or SIN"]';
const txtIncorporationMonth: string = '[placeholder="Business Name"]';
const txtIncorporationDay: string = '[placeholder="Last 4 SSN or SIN"]';
const txtIncorporationYear: string = '[placeholder="Last 4 SSN or SIN"]';
const txtTaxId: string = '[placeholder="EIN / TIN"]';

/**
 * @export
 * @class CheckoutPersonalInfoPage
 * @extends {LoginPage}
 */
export class CheckoutPersonalInfoPage extends CheckoutOrderSummaryComponent {
  // ========================== Process Methods ============================

  /**
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} phone
   * @param {string} type
   * @param {string} homeAddress
   * @param {string} city
   * @param {string} postalCode
   * @memberof CheckoutPersonalInfoPage
   */
  completePersonalInfoForm = async (
    firstName: string,
    lastName: string,
    phone: string,
    type: string,
    homeAddress: string,
    city: string,
    postalCode: string
  ): Promise<void> => {
    await this.enterFirstName(firstName);
    await this.enterLastName(lastName);
    await this.enterPhoneNumber(phone);
    await this.enterPhoneType(type);
    await this.enterHomeAddress(homeAddress);
    await this.enterCity(city);
    await this.enterPostalCode(postalCode);
  };

  /**
   * @param {string} homeAddress
   * @param {string} city
   * @param {string} postalCode
   * @memberof CheckoutPersonalInfoPage
   */
  changeAddress = async (homeAddress: string, city: string, postalCode: string): Promise<void> => {
    await this.enterHomeAddress(homeAddress);
    await this.enterCity(city);
    await this.enterPostalCode(postalCode);
  };

  /**
   * @param {string} firstName
   * @memberof CheckoutPersonalInfoPage
   */
  enterFirstName = async (firstName: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterFirstName');
    await this.fillTextBox(txtFirstName, firstName);
  };

  /**
   * @param {string} lastName
   * @memberof CheckoutPersonalInfoPage
   */
  enterLastName = async (lastName: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterLastName');
    await this.fillTextBox(txtLastName, lastName);
  };

  /**
   * @param {string} phoneNumber
   * @memberof CheckoutPersonalInfoPage
   */
  enterPhoneNumber = async (phoneNumber: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterPhoneNumber');
    await this.fillTextBox(txtPhoneNumber, phoneNumber);
  };

  /**
   * @param {string} phoneType
   * @memberof CheckoutPersonalInfoPage
   */
  enterPhoneType = async (phoneType: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterPhoneType');
    await this.fillTextBox(txtPhoneType, phoneType);
  };

  /**
   * @param {string} homeAddress
   * @memberof CheckoutPersonalInfoPage
   */
  enterHomeAddress = async (homeAddress: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterHomeAddress');
    await this.fillTextBox(txtHomeAddress, homeAddress);
  };

  /**
   * @param {string} city
   * @memberof CheckoutPersonalInfoPage
   */
  enterCity = async (city: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterCity');
    await this.fillTextBox(txtCity, city);
  };

  /**
   * @param {string} postalCode
   * @memberof CheckoutPersonalInfoPage
   */
  enterPostalCode = async (postalCode: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterPostalCode');
    await this.fillTextBox(txtPostalCode, postalCode);
  };

  /**
   * @memberof CheckoutPersonalInfoPage
   */
  hoverInformationIcon = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterPostalCode');
    await this.hoverElement(imgStateChangeInformationIcon);
  };

  /**
   * @param {string} month
   * @memberof CheckoutPersonalInfoPage
   */
  enterMonth = async (month: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterMonth');
    await this.fillTextBox(txtBirthMonth, month);
  };

  /**
   * @param {string} day
   * @memberof CheckoutPersonalInfoPage
   */
  enterDay = async (day: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterDay');
    await this.fillTextBox(txtBirthDay, day);
  };

  /**
   * @param {string} year
   * @memberof CheckoutPersonalInfoPage
   */
  enterYear = async (year: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterYear');
    await this.fillTextBox(txtBirthYear, year);
  };

  /**
   * @param {string} socialSecurityNumber
   * @memberof CheckoutPersonalInfoPage
   */
  enterSocialSecurityNumber = async (socialSecurityNumber: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterSocialSecurityNumber');
    await this.fillTextBox(txtSocialSecurityNumber, socialSecurityNumber);
  };

  /**
   * @param {string} businessName
   * @memberof CheckoutPersonalInfoPage
   */
  enterBusinessName = async (businessName: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterBusinessName');
    await this.fillTextBox(txtBusinessName, businessName);
  };

  /**
   * @param {string} Month
   * @memberof CheckoutPersonalInfoPage
   */
  enterIncorporationMonth = async (Month: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterIncorporationMonth');
    await this.fillTextBox(txtIncorporationMonth, Month);
  };

  /**
   * @param {string} day
   * @memberof CheckoutPersonalInfoPage
   */
  enterIncorporationDay = async (day: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterIncorporationDay');
    await this.fillTextBox(txtIncorporationDay, day);
  };

  /**
   * @param {string} Year
   * @memberof CheckoutPersonalInfoPage
   */
  enterIncorporationYear = async (Year: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterIncorporationYear');
    await this.fillTextBox(txtIncorporationYear, Year);
  };

  /**
   * @param {string} taxId
   * @memberof CheckoutPersonalInfoPage
   */
  enterTaxId = async (taxId: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterTaxId');
    await this.fillTextBox(txtTaxId, taxId);
  };

  // ========================== Navigate Methods ===========================n

  navigatePersonalInfoPageFromLogin = async (emailOrUsername: string | undefined, password: string | undefined) => {
    console.log(' - checkoutPersonalInfoPage.navigatePersonalInfoPageFromLogin');
    await this.login(emailOrUsername, password);
    await this.createOrderSummary();
  };

  // ========================== Click Methods ==============================
  /**
   * @memberof CheckoutPersonalInfoPage
   */
  clickChangeStateLink = async () => {
    console.log(' - checkoutPersonalInfoPage.clickChangeStateLink');
    // Click on Plans Link from Accounts Navigation
    await this.clickOnElement(lnkChangeState);
  };

  /**
   * @memberof CheckoutPersonalInfoPage
   */
  clickSaveAndContinueButton = async () => {
    console.log(' - checkoutPersonalInfoPage.clickSaveAndContinueButton');
    // Click on Plans Link from Accounts Navigation
    await this.clickOnElement(btnSaveAndContinue);
  };

  // ========================== Assertion Methods ==========================

  /**
   * @param {string} region
   * @memberof CheckoutPersonalInfoPage
   */
  assertState = async (region: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertState');
    // Confirm region is correct
    await this.assertElementHasText(txtRegion, region);
  };

  /**
   * @param {string} region
   * @memberof CheckoutPersonalInfoPage
   */
  assertToolTipIsVisible = async (region: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertToolTipIsVisible');
    // Confirm region is correct
    await this.assertElementIsVisible(txaStageChangeToolTip);
  };

  /**
   * @memberof CheckoutPersonalInfoPage
   */
  assertPersonalInfoStepIsCurrent = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertPersonalInfoStepIsCurrent');
    await this.assertElementIsVisible(stpPersonalInfoCurrent);
  };

  /**
   * @memberof CheckoutPersonalInfoPage
   */
  assertSupportCardIsDisplayed = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertSupportCardIsDisplayed');
    await this.assertElementIsVisible(conSupportInfo);
  };

  /**
   * @memberof CheckoutPersonalInfoPage
   */
  assertCallSupportButtonIsDisplayed = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertCallSupportButtonIsDisplayed');
    await this.assertElementIsVisible(btnCallSupport);
  };
}
