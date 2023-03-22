import UrlsUtils from '../../utils/urls.utils';
import { basicUser } from '../../utils/user.utils';
import { CheckoutOrderSummaryComponent } from './checkout-order-summary.component';
import RegionsUtils from '../../utils/regions.utils';

// ========================== Selectors ==================================
// const btnSaveAndContinue: string = '';
const BTN_SAVE_AND_CONTINUE = 'button:has-text("Save & Continue")';

// ========================== Personal Info Selectors ====================
const STP_PERSONAL_INFO_CURRENT = '//div[contains(@class,"step-circle--current") and contains(.,"2")]';
const HDR_PERSONAL_INFO_HEADER = 'text = Tell us about yourself';
const MSG_FIRST_NAME_VALIDATION = 'text = Must provide first name';
const MSG_LAST_NAME_VALIDATION = 'text = Must provide last name';
const MSG_PHONE_NUMBER_VALIDATION = 'text = Must provide phone number';
const MSG_PHONE_TYPE_VALIDATION = 'text = Must select phone type';
const MSG_HOME_ADDRESS_VALIDATION = 'text = Must provide home address';
const MSG_CITY_VALIDATION = 'text = Must include name of city';
const MSG_POSTAL_CODE_VALIDATION = 'text = Must provide valid postal code';
const TXT_FIRST_NAME = '[name="firstName"]';
const TXT_LAST_NAME = '[name="lastName"]';
const TXT_PHONE_NUMBER = '[name="phoneNumber"]';
const TXT_PHONE_TYPE = '[name="phoneType"]';
const TXT_HOME_ADDRESS = '[name="homeAddress"]';
const TXT_CITY = '[name="city"]';
const TXT_POSTAL_CODE = '[name="postalCode"]';
const TXT_REGION = '//span[contains(@class, "contact-region")]';
const LNK_CHANGE_STATE = 'a:has-text("Change")';
const IMG_STATE_CHANEG_INFORMATION_ICON = '[alt="info"';
const TXT_STAGE_CHANGE_TOOLTIP = '//div[contains(@class,"info-tooltip-text")]';
// ========================== Support Card Selectors ======================
const CON_SUPPORT_INFO = '//div[contains(@class, "support-card-container")]';
const BTN_CALL_SUPPORT = 'button:has-text("Call (833)-951-2754")';

// ========================== Security Info Selectors ======================
const MSG_BIRHT_MONTH_DAY_YEAR_VALIDATION = 'text = Must provide date of birth';
const MSG_SOCIAL_SECURITY_VALIDATION = 'text = Must provide SSN or SIN';

const TXT_BIRTH_MONTH = '[name="dobMonth"]';
const TXT_BIRTH_DAY = '[name="dobDay"]';
const TXT_BIRTH_YEAR = '[name="dobYear"]';
const TXT_SOCIAL_SECURITY_NUMBER = '[placeholder="Last 4 SSN or SIN"]';

// ========================== Business Info Selectors ======================
const TXT_BUSINESS_NAME = '[name="businessName"]';
const TXT_INCORPORATION_MONTH = '[name="doiMonth"]';
const TXT_INCORPORATION_DAY = '[name="doiDay"]';
const TXT_INCORPORATION_YEAR = '[name="doiYear"]';
const TXT_TAX_ID = '[name="taxId"]';

/**
 *
 *
 * @export
 * @class CheckoutPersonalInfoPage
 * @extends {CheckoutOrderSummaryComponent}
 */
export class CheckoutPersonalInfoPage extends CheckoutOrderSummaryComponent {
  // ========================== Process Methods ============================

  // /**
  //  *
  //  *
  //  * @param {string} state
  //  * @param {string} paymentFrequency
  //  * @param {string} planName
  //  * @param {string} tierName
  //  * @memberof CheckoutPersonalInfoPage
  //  */
  // selectPlanFromShieldBenefitsPricingPage = async (state: string[], paymentFrequency: string, planName: string, tierName: string): Promise<void> => {
  //   await this.selectPlanFromShieldBenefitsPricingPage(state, paymentFrequency, planName, tierName);
  // };

  /**
   * @param {string} state
   * @param {string} planName
   * @param {string} tierName
   * @memberof CheckoutPersonalInfoPage
   */
  selectPlanWithoutPaymentFrequencyFromShieldBenefitsPricingPage = async (state: string, planName: string, tierName: string): Promise<void> => {
    await this.selectPlanAndEnrollNoPaymentFrequency(state, planName, tierName);
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

  completeBusinessInfoForm = async (): Promise<void> => {
    if (await this.page.isVisible(TXT_BUSINESS_NAME)) {
      await this.enterBusinessName('test business');
      await this.enterIncorporationMonth('01');
      await this.enterIncorporationDay('01');
      await this.enterIncorporationYear('2020');
      await this.enterTaxId('123456789');
    }
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
    await this.clickOnElement(BTN_SAVE_AND_CONTINUE);
  };

  /**
   * @param {string} provinceName
   * @memberof CheckoutPersonalInfoPage
   */
  changeAddressCanada = async (provinceName: string): Promise<void> => {
    // logic to go to regions util, and populate the 3 variables needed for this method for the appropriate region
    const provinceObject = RegionsUtils.caProvinces.filter((pn) => pn.name == provinceName);
    await this.enterHomeAddress(provinceObject[0].validAddress.street);
    await this.enterCity(provinceObject[0].validAddress.city);
    await this.enterPostalCode(provinceObject[0].validAddress.postalCode);
    // await this.clickOnElement(btnSaveAndContinue);
  };

  /**
   * @param {string} regionName
   * @memberof CheckoutPersonalInfoPage
   */
  changeAddressUs = async (regionName: string): Promise<void> => {
    // logic to go to regions util, and populate the 3 variables needed for this method for the appropriate region
    const regionObject = RegionsUtils.usStates.filter((pn) => pn.name == regionName);
    await this.enterHomeAddress(regionObject[0].validAddress.street);
    await this.enterCity(regionObject[0].validAddress.city);
    await this.enterPostalCode(regionObject[0].validAddress.postalCode);
    await this.clickOnElement(BTN_SAVE_AND_CONTINUE);
  };

  /**
   * @param {string} market
   * @param {string} region
   * @memberof CheckoutPersonalInfoPage
   */
  changeAddressForMarket = async (market: string, region: string): Promise<void> => {
    switch (market) {
      case 'US': {
        await this.changeAddressUs(region);
        break;
      }
      case 'CA': {
        await this.changeAddressCanada(region);
        break;
      }
      default: {
        console.log('Market entered into data sheet cannot be found in regions util');
        break;
      }
    }
  };

  /**
   * @param {string} firstName
   * @memberof CheckoutPersonalInfoPage
   */
  enterFirstName = async (firstName: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterFirstName');
    await this.fillTextBox(TXT_FIRST_NAME, firstName);
  };

  /**
   * @param {string} lastName
   * @memberof CheckoutPersonalInfoPage
   */
  enterLastName = async (lastName: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterLastName');
    await this.fillTextBox(TXT_LAST_NAME, lastName);
  };

  /**
   * @param {string} phoneNumber
   * @memberof CheckoutPersonalInfoPage
   */
  enterPhoneNumber = async (phoneNumber: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterPhoneNumber');
    await this.fillTextBox(TXT_PHONE_NUMBER, phoneNumber);
  };

  /**
   * @param {string} phoneType
   * @memberof CheckoutPersonalInfoPage
   */
  enterPhoneType = async (phoneType: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterPhoneType');
    await this.fillTextBox(TXT_PHONE_TYPE, phoneType);
  };

  /**
   * @param {string} homeAddress
   * @memberof CheckoutPersonalInfoPage
   */
  enterHomeAddress = async (homeAddress: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterHomeAddress');
    await this.fillTextBox(TXT_HOME_ADDRESS, homeAddress);
  };

  /**
   * @param {string} city
   * @memberof CheckoutPersonalInfoPage
   */
  enterCity = async (city: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterCity');
    await this.fillTextBox(TXT_CITY, city);
  };

  /**
   * @param {string} postalCode
   * @memberof CheckoutPersonalInfoPage
   */
  enterPostalCode = async (postalCode: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterPostalCode');
    await this.page.keyboard.press('Tab');
    await this.page.keyboard.press('Tab');
    await this.page.locator(TXT_POSTAL_CODE).fill('');
    await this.fillTextBox(TXT_POSTAL_CODE, postalCode);
  };

  /**
   * @memberof CheckoutPersonalInfoPage
   */
  hoverInformationIcon = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterPostalCode');
    await this.hoverElement(IMG_STATE_CHANEG_INFORMATION_ICON);
  };

  /**
   * @param {string} month
   * @memberof CheckoutPersonalInfoPage
   */
  enterMonth = async (month: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterMonth');
    await this.fillTextBox(TXT_BIRTH_MONTH, month);
  };

  /**
   * @param {string} day
   * @memberof CheckoutPersonalInfoPage
   */
  enterDay = async (day: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterDay');
    await this.fillTextBox(TXT_BIRTH_DAY, day);
  };

  /**
   * @param {string} year
   * @memberof CheckoutPersonalInfoPage
   */
  enterYear = async (year: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterYear');
    await this.fillTextBox(TXT_BIRTH_YEAR, year);
  };

  /**
   * @param {string} socialSecurityNumber
   * @memberof CheckoutPersonalInfoPage
   */
  enterSocialSecurityNumber = async (socialSecurityNumber: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterSocialSecurityNumber');
    await this.fillTextBox(TXT_SOCIAL_SECURITY_NUMBER, socialSecurityNumber);
  };

  /**
   * @param {string} businessName
   * @memberof CheckoutPersonalInfoPage
   */
  enterBusinessName = async (businessName: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterBusinessName');
    await this.fillTextBox(TXT_BUSINESS_NAME, businessName);
  };

  /**
   * @param {string} Month
   * @memberof CheckoutPersonalInfoPage
   */
  enterIncorporationMonth = async (Month: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterIncorporationMonth');
    await this.fillTextBox(TXT_INCORPORATION_MONTH, Month);
  };

  /**
   * @param {string} day
   * @memberof CheckoutPersonalInfoPage
   */
  enterIncorporationDay = async (day: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterIncorporationDay');
    await this.fillTextBox(TXT_INCORPORATION_DAY, day);
  };

  /**
   * @param {string} Year
   * @memberof CheckoutPersonalInfoPage
   */
  enterIncorporationYear = async (Year: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterIncorporationYear');
    await this.fillTextBox(TXT_INCORPORATION_YEAR, Year);
  };

  /**
   * @param {string} taxId
   * @memberof CheckoutPersonalInfoPage
   */
  enterTaxId = async (taxId: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterTaxId');
    await this.fillTextBox(TXT_TAX_ID, taxId);
  };

  /**
   * @memberof CheckoutPersonalInfoPage
   */
  clearAllFieldsOnPersonalInfoPageAndSave = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.clearAllFieldsOnPersonalInfoPageAndSave');
    await this.clearTextBox(TXT_FIRST_NAME);
    await this.clearTextBox(TXT_LAST_NAME);
    await this.clearTextBox(TXT_PHONE_NUMBER);
    await this.selectFromDropDownMenu(TXT_PHONE_TYPE, 'Select Type');
    await this.clearTextBox(TXT_HOME_ADDRESS);
    await this.clearTextBox(TXT_CITY);
    await this.clearTextBox(TXT_POSTAL_CODE);
    await this.clickSaveAndContinueButton();
  };

  /**
   * @memberof CheckoutPersonalInfoPageSecurityInfo
   */
  clearAllFieldsInSecurityInfoSectionPersonalInfoPage = async (): Promise<void> => {
    await this.clearTextBox(TXT_BIRTH_MONTH);
    await this.clearTextBox(TXT_BIRTH_DAY);
    await this.clearTextBox(TXT_BIRTH_YEAR);
    // await this.clearTextBox(txtBirthMonth, txtBirthDay, txtBirthYear);
    await this.clearTextBox(TXT_SOCIAL_SECURITY_NUMBER);
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

  // Navigate to the personal info page and scrapes the order summary to be used in assertions

  /**
   * @param {(string | undefined)} emailOrUsername
   * @param {(string | undefined)} password
   * @param {string} groupNumber
   * @param {string} groupPayConfig
   * @param {string} stateName
   * @param {string} payTerm
   * @param {string} planName
   * @param {string} tierName
   * @param {string} street
   * @param {string} city
   * @param {string} postalCode
   * @memberof CheckoutPersonalInfoPage
   */
  navigateToPersonalInfoPageSinglePlan = async (
    emailOrUsername: string | undefined,
    password: string | undefined,
    groupNumber: string,
    groupPayConfig: string,
    stateName: string,
    payTerm: string,
    planName: string,
    tierName: string,
    street: string,
    city: string,
    postalCode: string
  ): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.navigatePersonalInfoPageFromLogin');
    await this.navigateToShieldBenefitsPricingPage(groupNumber);
    if (groupPayConfig == 'Fringe') {
      await this.selectPlanWithoutPaymentFrequencyFromShieldBenefitsPricingPage(stateName, planName, tierName);
    } else {
      await this.selectPlanFromShieldBenefitsPricingPage(stateName, payTerm, planName, tierName);
    }
    await this.login(emailOrUsername, password);
    await this.changeAddress(street, city, postalCode);
    await this.captureOrderSummaryWithoutTier();
  };

  /**
   * @param {(string | undefined)} emailOrUsername
   * @param {(string | undefined)} password
   * @param {string} groupNumber
   * @param {string} groupPayConfig
   * @param {string} stateName
   * @param {string} planName
   * @param {string} tierName
   * @param {string} street
   * @param {string} city
   * @param {string} postalCode
   * @memberof CheckoutPersonalInfoPage
   */
  navigateToPersonalInfoPageSinglePlanNoPaymentFrequency = async (
    emailOrUsername: string | undefined,
    password: string | undefined,
    groupNumber: string,
    groupPayConfig: string,
    stateName: string,
    planName: string,
    tierName: string,
    street: string,
    city: string,
    postalCode: string
  ): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.navigatePersonalInfoPageFromLogin');
    await this.navigateToShieldBenefitsPricingPage(groupNumber);
    await this.selectPlanWithoutPaymentFrequencyFromShieldBenefitsPricingPage(stateName, planName, tierName);
    await this.login(emailOrUsername, password);
    await this.changeAddress(street, city, postalCode);
    await this.captureOrderSummary(groupPayConfig);
  };

  // Navigate to the personal info page and scrapes the order summary to be used in assertions
  /**
   * @param {(string | undefined)} emailOrUsername
   * @param {(string | undefined)} password
   * @param {string} groupNumber
   * @param {string} groupPayConfig
   * @param {string} stateName
   * @param {string} payTerm
   * @param {string} planName
   * @param {string} plan2Name
   * @param {string} street
   * @param {string} city
   * @param {string} postalCode
   * @memberof CheckoutPersonalInfoPage
   */
  navigateToPersonalInfoPageComboPlan = async (
    emailOrUsername: string | undefined,
    password: string | undefined,
    groupNumber: string,
    groupPayConfig: string,
    stateName: string,
    payTerm: string,
    planName: string,
    plan2Name: string,
    street: string,
    city: string,
    postalCode: string
  ): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.navigatePersonalInfoPageFromLogin');
    await this.navigateToShieldBenefitsPricingPage(groupNumber);
    await this.selectCombinationPlanFromShieldBenefitsPricingPage(stateName, payTerm, planName, plan2Name);
    await this.login(emailOrUsername, password);
    await this.changeAddress(street, city, postalCode);
    await this.captureOrderSummary(groupPayConfig);
  };

  /**
   * @param {string} groupNumber
   * @memberof CheckoutPersonalInfoPage
   */
  navigateToBusinessSolutionsLegalEnrollPage = async (groupNumber: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.navigateToBusinessSolutionsLegalEnrollPage');
    // Navigate to enroll page
    await this.page.goto(UrlsUtils.shieldBenefits.home.url + '/' + groupNumber + '/overview');
  };

  /**
   * @param {string} groupNumber
   * @memberof CheckoutPersonalInfoPage
   */
  navigateToShieldBenefitsPricingPage = async (groupNumber: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.navigateToBusinessSolutionsLegalPricingPage');
    // Login with a basic user
    await this.page.goto(UrlsUtils.shieldBenefits.home.url + '/' + groupNumber + '/pricing');
  };

  /**
   * @param {string} groupNumber
   * @memberof CheckoutPersonalInfoPage
   */
  navigateToBusinessSolutionsIdentityEnrollPage = async (groupNumber: string): Promise<void> => {
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
    prepaidMonths = '',
    couponCode = '',
    plans: Array<string>
  ): Promise<void> => {
    await this.navigateToPlanalyzerCsrCheckoutOktaLogin();
    await this.loginThroughOkta();
    await this.createOrderRedirectToCheckoutFromPlanalyzer(channel, subChannel, region, marketLocale, prepaidMonths, couponCode, plans);
    await this.login(basicUser.email, basicUser.password);
  };
  /**
   *
   *
   * @memberof CheckoutPersonalInfoPage
   */
  navigateToPersonalInfoPageForIdsCaFromPlanalyzer = async (): Promise<void> => {
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
    // await this.navigatePersonalInfoPageFromLogin(basicUser.email, basicUser.password);
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
  clickChangeStateLink = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.clickChangeStateLink');
    // Click on Change State link
    await this.clickOnElement(LNK_CHANGE_STATE);
  };

  /**
   * @memberof CheckoutPersonalInfoPage
   */
  clickSaveAndContinueButton = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.clickSaveAndContinueButton');
    // Click the Save and Continue button
    await this.clickOnElement(BTN_SAVE_AND_CONTINUE);
  };

  // ========================== Assertion Methods ==========================

  /**
   * @param {string} region
   * @memberof CheckoutPersonalInfoPage
   */
  assertState = async (region: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertState');
    // Confirm region is correct
    await this.assertElementHasText(TXT_REGION, region);
  };

  /**
   *
   *
   * @memberof CheckoutPersonalInfoPage
   */
  assertToolTipIsVisible = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertToolTipIsVisible');
    // Confirm region is correct
    await this.assertElementIsVisible(TXT_STAGE_CHANGE_TOOLTIP);
  };

  /**
   * @memberof CheckoutPersonalInfoPage
   */
  // Confirm that the stepper displays the step 2 - personal info as the current step
  assertPersonalInfoStepIsCurrent = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertPersonalInfoStepIsCurrent');
    await this.assertElementIsVisible(STP_PERSONAL_INFO_CURRENT);
  };

  /**
   * @memberof CheckoutPersonalInfoPage
   */
  // Confirm that the help information card is displayed
  assertSupportCardIsDisplayed = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertSupportCardIsDisplayed');
    await this.assertElementIsVisible(CON_SUPPORT_INFO);
  };

  /**
   * @memberof CheckoutPersonalInfoPage
   */
  // Confirm that the Call Support button is displayed
  assertCallSupportButtonIsDisplayed = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertCallSupportButtonIsDisplayed');
    await this.assertElementIsVisible(BTN_CALL_SUPPORT);
  };

  /**
   * @memberof CheckoutPersonalInfoPage
   */
  // Confirm that the Header displays: Tell us about you
  assertPersonalInfoHeaderIsDisplayed = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertPersonalInfoHeaderIsDisplayed');
    await this.assertElementIsVisible(HDR_PERSONAL_INFO_HEADER);
  };

  /**
   * @memberof CheckoutPersonalInfoErrorFirstNameIsDisplayed
   */
  // Confirm that the Header displays: Tell us about you
  assertPersonalInfoPageErrorsAreDisplayed = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertPersonalInfoPageErrorIsDisplayed');
    await this.assertElementIsVisible(MSG_FIRST_NAME_VALIDATION);
    await this.assertElementIsVisible(MSG_LAST_NAME_VALIDATION);
    await this.assertElementIsVisible(MSG_PHONE_NUMBER_VALIDATION);
    await this.assertElementIsVisible(MSG_PHONE_TYPE_VALIDATION);
    await this.assertElementIsVisible(MSG_HOME_ADDRESS_VALIDATION);
    await this.assertElementIsVisible(MSG_CITY_VALIDATION);
    await this.assertElementIsVisible(MSG_POSTAL_CODE_VALIDATION);
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
    await this.assertElementIsVisible(MSG_BIRHT_MONTH_DAY_YEAR_VALIDATION);
    await this.assertElementIsVisible(MSG_SOCIAL_SECURITY_VALIDATION);
  };
}
