import UrlsUtils from '../../utils/urls.utils';
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
   * @param {string} state
   * @param {string} paymentFrequency
   * @param {string} planName
   * @memberof CheckoutPersonalInfoPage
   */
  selectPlanFromBusinessSolutionsLegalPricingPage = async (state: string, paymentFrequency: string, planName: string): Promise<void> => {
    await this.selectPlanAndEnroll(state, paymentFrequency, planName);
  };

  /**
   * @param {string} state
   * @param {string} paymentFrequency
   * @param {string} planName1
   * @param {string} planName2
   * @memberof CheckoutPersonalInfoPage
   */
  selectCombinationPlanFromBusinessSolutionsLegalPricingPage = async (
    state: string,
    paymentFrequency: string,
    planName1: string,
    planName2: string
  ): Promise<void> => {
    await this.selectCombinationPlanAndEnroll(state, paymentFrequency, planName1, planName2);
  };

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
  // Completes the entire personal info form without pressing enter
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
  // Update only the address in the personal information form, useful when iterating through different regions as the address needs to match
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

  // locatorpPlans = async (): Promise<string> => {
  //   console.log(" - checkoutPersonalInfoPage.locatorpPlans");
  //   return this.page.locator(pPlans).innerText();
  // };
  // locatorpPlansPrice = async (): Promise<string> => {
  //   console.log(" - checkoutPersonalInfoPage.locatorpPlansPrice");
  //   return this.page.locator(pPlanPrice).innerText();
  // };
  // locatortxtTotalLabel = async (): Promise<string> => {
  //   console.log(" - checkoutPersonalInfoPage.locatortxtTotalLabel");
  //   return this.page.locator(txtTotalLabel).innerText();
  // };
  // locatortxtTotalPriceLabel = async (): Promise<string> => {
  //   console.log(" - checkoutPersonalInfoPage.locatortxtTotalPriceLabel");
  //   return this.page.locator(txtTotalPriceLabel).innerText();
  // };

  // ========================== Navigate Methods ===========================n

  /**
   * @param {(string | undefined)} emailOrUsername
   * @param {(string | undefined)} password
   * @memberof CheckoutPersonalInfoPage
   */
  // Navigate to the personal info page and scrapes the order summary to be used in assertions
  navigatePersonalInfoPageFromLogin = async (emailOrUsername: string | undefined, password: string | undefined) => {
    console.log(' - checkoutPersonalInfoPage.navigatePersonalInfoPageFromLogin');
    await this.login(emailOrUsername, password);
    await this.captureOrderSummary();
  };

  /**
   * @param {string} groupNumber
   * @memberof CheckoutPersonalInfoPage
   */
  navigateToBusinessSolutionsLegalEnrollPage = async (groupNumber: string) => {
    console.log(' - accountNavigationPage.navigateToBusinessSolutionsLegalEnrollPage');
    // Navigate to enroll page
    await this.page.goto(UrlsUtils.shieldBenefits.home.url + '/' + groupNumber + '/overview');
  };

  /**
   * @param {string} groupNumber
   * @memberof CheckoutPersonalInfoPage
   */
  navigateToBusinessSolutionsLegalPricingPage = async (groupNumber: string) => {
    console.log(' - accountNavigationPage.navigateToBusinessSolutionsLegalPricingPage');
    // Login with a basic user
    await this.page.goto(UrlsUtils.shieldBenefits.home.url + '/' + groupNumber + '/pricing');
  };

  // ========================== Click Methods ==============================
  /**
   * @memberof CheckoutPersonalInfoPage
   */
  clickChangeStateLink = async () => {
    console.log(' - checkoutPersonalInfoPage.clickChangeStateLink');
    // Click on Change State link
    await this.clickOnElement(lnkChangeState);
  };

  /**
   * @memberof CheckoutPersonalInfoPage
   */
  clickSaveAndContinueButton = async () => {
    console.log(' - checkoutPersonalInfoPage.clickSaveAndContinueButton');
    // Click the Save and Continue button
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
  // Confirm the tool tip displays after hovering over the help icon
  assertToolTipIsVisible = async (region: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertToolTipIsVisible');
    // Confirm region is correct
    await this.assertElementIsVisible(txaStageChangeToolTip);
  };

  /**
   * @memberof CheckoutPersonalInfoPage
   */
  // Confirm that the stepper displays the step 2 - personal info as the current step
  assertPersonalInfoStepIsCurrent = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertPersonalInfoStepIsCurrent');
    await this.assertElementIsVisible(stpPersonalInfoCurrent);
  };

  /**
   * @memberof CheckoutPersonalInfoPage
   */
  // Confirm that the help information card is displayed
  assertSupportCardIsDisplayed = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertSupportCardIsDisplayed');
    await this.assertElementIsVisible(conSupportInfo);
  };

  /**
   * @memberof CheckoutPersonalInfoPage
   */
  // Confirm that the Call Support button is displayed
  assertCallSupportButtonIsDisplayed = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertCallSupportButtonIsDisplayed');
    await this.assertElementIsVisible(btnCallSupport);
  };
}
