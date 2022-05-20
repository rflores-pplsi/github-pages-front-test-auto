import UrlsUtils from '../../utils/urls.utils';
import { basicUser } from '../../utils/user.utils';
import { CheckoutOrderSummaryComponent } from './checkout-order-summary.component';
import RegionsUtils from '../../utils/regions.utils';

// ========================== Selectors ==================================
const btnSaveAndContinue: string = '[type=submit]';
// const btnSaveAndContinue: string = 'button:has-text("Save & Continue")';

// ========================== Personal Info Selectors ====================
const stpPersonalInfoCurrent: string = '//div[contains(@class,"step-circle--current") and contains(.,"2")]';
const hdrPersonalInfoHeader: string = 'text = Tell us about yourself';
const msgFirstNameValidation: string = 'text = Must provide first name';
const msgLastNameValidation: string = 'text = Must provide last name';
const msgPhoneNumberValidation: string = 'text = Must provide phone number';
const msgPhoneTypeValidation: string = 'text = Must select phone type';
const msgHomeAddressValidation: string = 'text = Must provide home address';
const msgCityValidation: string = 'text = Must include name of city';
const msgPostalCodeValidation: string = 'text = Must provide valid postal code';

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
const msgBirthMonthDayYearValidation: string = 'text = Must provide date of birth';
const msgSocialSecurityValidation: string = 'text = Must provide SSN or SIN';

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
  selectPlanFromShieldBenefitsPricingPage = async (state: string, paymentFrequency: string, planName: string): Promise<void> => {
    await this.selectPlanAndEnroll(state, paymentFrequency, planName);
  };

  /**
   * @param {string} state
   * @param {string} paymentFrequency
   * @param {string} planName
   * @memberof CheckoutPersonalInfoPage
   */
  selectPlanWithoutPaymentFrequencyFromShieldBenefitsPricingPage = async (
    state: string,
    paymentFrequency: string,
    planName: string
  ): Promise<void> => {
    await this.selectPlanAndEnrollNoPaymentFrequency(state, planName);
  };

  /**
   * @param {string} state
   * @param {string} paymentFrequency
   * @param {string} planName1
   * @param {string} planName2
   * @memberof CheckoutPersonalInfoPage
   */
  selectCombinationPlanFromShieldBenefitsPricingPage = async (
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

  /**
   * @memberof CheckoutPersonalInfoPage
   */
  clearAllFieldsOnPersonalInfoPage = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.clearAllFieldsOnPersonalInfoPage');
    await this.clearTextBox(txtFirstName);
    await this.clearTextBox(txtLastName);
    await this.clearTextBox(txtPhoneNumber);
    await this.selectFromDropDownMenu(txtPhoneType, 'Select Type');
    await this.clearTextBox(txtHomeAddress);
    await this.clearTextBox(txtCity);
    await this.clearTextBox(txtPostalCode);
    await this.clickSaveAndContinueButton();
  };

  /**
   * @memberof CheckoutPersonalInfoPageSecurityInfo
   */
  clearAllFieldsInSecurityInfoSectionPersonalInfoPage = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.clearAllFieldsInSecurityInfoSectionPersonalInfoPage');
    await this.clearTextBox(txtBirthMonth);
    await this.clearTextBox(txtBirthDay);
    await this.clearTextBox(txtBirthYear);
    // await this.clearTextBox(txtBirthMonth, txtBirthDay, txtBirthYear);
    await this.clearTextBox(txtSocialSecurityNumber);
    await this.clickSaveAndContinueButton();
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
  };

  /**
   * @param {string} groupNumber
   * @memberof CheckoutPersonalInfoPage
   */
  navigateToBusinessSolutionsLegalEnrollPage = async (groupNumber: string) => {
    console.log(' - checkoutPersonalInfoPage.navigateToBusinessSolutionsLegalEnrollPage');
    // Navigate to enroll page
    await this.page.goto(UrlsUtils.shieldBenefits.home.url + '/' + groupNumber + '/overview');
  };

  /**
   * @param {string} groupNumber
   * @memberof CheckoutPersonalInfoPage
   */
  navigateToShieldBenefitsPricingPage = async (groupNumber: string) => {
    console.log(' - checkoutPersonalInfoPage.navigateToBusinessSolutionsLegalPricingPage');
    // Login with a basic user
    await this.page.goto(UrlsUtils.shieldBenefits.home.url + '/' + groupNumber + '/pricing');
  };

  /**
   * @param {string} groupNumber
   * @memberof CheckoutPersonalInfoPage
   */
  navigateToBusinessSolutionsIdentityEnrollPage = async (groupNumber: string) => {
    console.log(' - checkoutPersonalInfoPage.navigateToBusinessSolutionsIdentityEnrollPage');
    // Navigate to enroll page
    await this.page.goto(UrlsUtils.shieldBenefits.home.url + '/' + groupNumber + '/idshield');
  };
  /**
   * @param {string} channel
   * @param {string} subChannel
   * @param {string} region
   * @param {string} marketLocale
   * @param {string} [prepaidMonths='']
   * @param {string} [couponCode='']
   * @param {Array<string>} plans
   * @memberof CheckoutPersonalInfoPage
   */
  navigateToPersonalInfoPageFromPlanalyzer = async (
    channel: string,
    subChannel: string,
    region: string,
    marketLocale: string,
    prepaidMonths: string = '',
    couponCode: string = '',
    plans: Array<string>
  ) => {
    await this.navigateToPlanalyzerCsrCheckoutOktaLogin();
    await this.loginThroughOkta();
    await this.createOrderRedirectToCheckoutFromPlanalyzer(channel, subChannel, region, marketLocale, prepaidMonths, couponCode, plans);
    await this.login(basicUser.email, basicUser.password);
  };
  /**
   * @param {string} navigateToPersonalInfoPageFromPlanalyzer
   * @memberof CheckoutPersonalInfoPage
   */
  navigateToPersonalInfoPageForIdsCaFromPlanalyzer = async () => {
    await this.navigateToPlanalyzerCsrCheckoutOktaLogin();
    await this.loginThroughOkta();
    await this.createOrderRedirectToCheckoutFromPlanalyzer('D2C', 'IDShield', 'Ontario', 'en-CA', '', 'F30', ['IDShield Individual']);
    await this.login(basicUser.email, basicUser.password);
  };
  // /**
  //  * @param {string} groupNumber
  //  * @memberof CheckoutPersonalInfoPage
  //  */
  // navigateToBusinessSolutionsIdentityPricingPage = async (groupNumber: string) => {
  //   console.log(' - checkoutPersonalInfoPage.navigateToBusinessSolutionsIdentityPricingPage');
  //   // Login with a basic user
  //   await this.page.goto(UrlsUtils.shieldBenefits.home.url + '/' + groupNumber + '/pricing');
  // };
  navigateToPaymentsPageForF30IdsCa = async (state: string): Promise<void> => {
    console.log(' - accountPaymentPage.goToPaymentsPageForF30IdsCa');
    await this.navigateToPlanalyzerCsrCheckoutOktaLogin();
    await this.loginThroughOkta();
    await this.createOrderRedirectToCheckoutFromPlanalyzer('D2C', 'IDShield', 'Ontario', 'en-CA', '', 'F30', ['IDShield Individual']);
    await this.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
    const regionObj = RegionsUtils.caProvinces;
    const stateObj = state;
    for (const obj of regionObj) {
      if (obj.name == stateObj) await this.changeAddress(obj.validAddress.street, obj.validAddress.city, obj.validAddress.postalCode);
    }

    await this.clickSaveAndContinueButton();
    // await this.page.waitForTimeout(3500);
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

  /**
   * @memberof CheckoutPersonalInfoPage
   */
  // Confirm that the Header displays: Tell us about you
  assertPersonalInfoHeaderIsDisplayed = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertPersonalInfoHeaderIsDisplayed');
    await this.assertElementIsVisible(hdrPersonalInfoHeader);
  };

  /**
   * @memberof CheckoutPersonalInfoErrorFirstNameIsDisplayed
   */
  // Confirm that the Header displays: Tell us about you
  assertPersonalInfoPageErrorsAreDisplayed = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertPersonalInfoPageErrorIsDisplayed');
    await this.assertElementIsVisible(msgFirstNameValidation);
    await this.assertElementIsVisible(msgLastNameValidation);
    await this.assertElementIsVisible(msgPhoneNumberValidation);
    await this.assertElementIsVisible(msgPhoneTypeValidation);
    await this.assertElementIsVisible(msgHomeAddressValidation);
    await this.assertElementIsVisible(msgCityValidation);
    await this.assertElementIsVisible(msgPostalCodeValidation);
  };

  /**
   * @memberof CheckoutPersonalInfoErrorSecuritySectionAreDisplayed
   */
  // Confirm that the Header displays: Tell us about you
  assertPersonalInfoPageErrorsSecuritySectionAreDisplayed = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertPersonalInfoPageErrorsSecuritySectionAreDisplayed');
    // await this.assertElementIsVisible(msgBirthMonthValidation);
    // await this.assertElementIsVisible(msgBirthDayValidation);
    // await this.assertElementIsVisible(msgBirthYearValidation);
    await this.assertElementIsVisible(msgBirthMonthDayYearValidation);
    await this.assertElementIsVisible(msgSocialSecurityValidation);
  };
}
