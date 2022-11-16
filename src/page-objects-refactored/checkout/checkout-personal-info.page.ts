import UrlsUtils from '../../utils/urls.utils';
import { basicUser } from '../../utils/user.utils';
import { CheckoutOrderSummaryComponent } from './checkout-order-summary.component';
import RegionsUtils from '../../utils/regions.utils';
import { NavigateToTestingHarnessPage, AddPlanAndSomeSupplements } from './checkout.helpers';
import { Page, Locator } from 'playwright-core';
import { ShieldBenefitsLegalPricingPage } from '../shield-benefits/shield-benefits-legal-pricing.page';
import { LoginPage } from '../login/login.page';
import { OktaPage } from '../okta/okta.page';
import { PlanalyzerCsrCheckoutPage } from '../../page-objects/planalyzer/planalyzer-csr-checkout.page';
import { expect } from '@playwright/test';
import DataUtils from '../../utils/Tests.Data';

/**
 * @export
 * @class CheckoutPersonalInfoPage
 * @extends {LoginPage}
 */
export class CheckoutPersonalInfoPage {
  // ========================== Instantiate Classes ==================================
  readonly shieldBenefitsLegalPricingPage: ShieldBenefitsLegalPricingPage;
  readonly loginPage: LoginPage;
  readonly checkoutOrderSummaryComponent: CheckoutOrderSummaryComponent;
  readonly oktaPage: OktaPage;
  readonly planalyzerCsrCheckoutPage: PlanalyzerCsrCheckoutPage;
  readonly navigateToTestingHarnessPage: NavigateToTestingHarnessPage;
  readonly addPlanAndSomeSupplements: AddPlanAndSomeSupplements;

  // ========================== Selectors ==================================

  protected page: Page;

  // const btnSaveAndContinue: string = '';
  readonly btnSaveAndContinue: Locator;

  // ========================== Personal Info Selectors ====================
  readonly stpPersonalInfoCurrent: Locator;
  readonly hdrPersonalInfoHeader: Locator;
  readonly msgFirstNameValidation: Locator;
  readonly msgLastNameValidation: Locator;
  readonly msgPhoneNumberValidation: Locator;
  readonly msgPhoneTypeValidation: Locator;
  readonly msgHomeAddressValidation: Locator;
  readonly msgCityValidation: Locator;
  readonly msgPostalCodeValidation: Locator;

  readonly txtFirstName: Locator;
  readonly txtLastName: Locator;
  readonly txtPhoneNumber: Locator;
  readonly txtPhoneType: Locator;
  readonly txtHomeAddress: Locator;
  readonly txtCity: Locator;
  readonly txtPostalCode: Locator;
  readonly txtRegion: Locator;
  readonly lnkChangeState: Locator;
  readonly imgStateChangeInformationIcon: Locator;
  readonly txaStageChangeToolTip: Locator;
  // ========================== Support Card Selectors ======================
  readonly conSupportInfo: Locator;
  readonly btnCallSupport: Locator;

  // ========================== Security Info Selectors ======================
  readonly msgBirthMonthDayYearValidation: Locator;
  readonly msgSocialSecurityValidation: Locator;

  readonly txtBirthMonth: Locator;
  readonly txtBirthDay: Locator;
  readonly txtBirthYear: Locator;
  readonly txtSocialSecurityNumber: Locator;

  // ========================== Business Info Selectors ======================
  readonly txtBusinessName: Locator;
  readonly txtIncorporationMonth: Locator;
  readonly txtIncorporationDay: Locator;
  readonly txtIncorporationYear: Locator;
  readonly txtTaxId: Locator;

  readonly lineOfBusiness: string;
  readonly planSupp: Array<string>;

  constructor(page: Page, lineOfBusiness: string, planSupp: Array<string>) {
    this.page = page;
    this.lineOfBusiness = lineOfBusiness;
    this.planSupp = planSupp;
    this.shieldBenefitsLegalPricingPage = new ShieldBenefitsLegalPricingPage(page);
    this.loginPage = new LoginPage(page);
    this.checkoutOrderSummaryComponent = new CheckoutOrderSummaryComponent(page);
    this.oktaPage = new OktaPage(page);
    this.planalyzerCsrCheckoutPage = new PlanalyzerCsrCheckoutPage(page);
    this.navigateToTestingHarnessPage = new NavigateToTestingHarnessPage(this.page, UrlsUtils.testHarnessUrls.d2c.url, lineOfBusiness);
    this.addPlanAndSomeSupplements = new AddPlanAndSomeSupplements(this.lineOfBusiness, this.planSupp, this.page);
    this.btnSaveAndContinue = this.page.locator('button:has-text("Save & Continue")');
    this.stpPersonalInfoCurrent = this.page.locator('//div[contains(@class,"step-circle--current") and contains(.,"2")]');
    this.hdrPersonalInfoHeader = this.page.locator('text = Tell us about yourself');
    this.msgFirstNameValidation = this.page.locator('text = Must provide first name');
    this.msgLastNameValidation = this.page.locator('text = Must provide last name');
    this.msgPhoneNumberValidation = this.page.locator('text = Must provide phone number');
    this.msgPhoneTypeValidation = this.page.locator('text = Must select phone type');
    this.msgHomeAddressValidation = this.page.locator('text = Must provide home address');
    this.msgCityValidation = this.page.locator('text = Must include name of city');
    this.msgPostalCodeValidation = this.page.locator('text = Must provide valid postal code');

    this.txtFirstName = this.page.locator('[name="firstName"]');
    this.txtLastName = this.page.locator('[name="lastName"]');
    this.txtPhoneNumber = this.page.locator('[name="phoneNumber"]');
    this.txtPhoneType = this.page.locator('[name="phoneType"]');
    this.txtHomeAddress = this.page.locator('[name="homeAddress"]');
    this.txtCity = this.page.locator('[name="city"]');
    this.txtPostalCode = this.page.locator('[name="postalCode"]');
    this.txtRegion = this.page.locator('//span[contains(@class, "contact-region")]');
    this.lnkChangeState = this.page.locator('a:has-text("Change")');
    this.imgStateChangeInformationIcon = this.page.locator('[alt="info"');
    this.txaStageChangeToolTip = this.page.locator('//div[contains(@class,"info-tooltip-text")]');
    // ========================== Support Card Selectors ======================
    this.conSupportInfo = this.page.locator('//div[contains(@class, "support-card-container")]');
    this.btnCallSupport = this.page.locator('button:has-text("Call (833)-951-2754")');

    // ========================== Security Info Selectors ======================
    this.msgBirthMonthDayYearValidation = this.page.locator('text = Must provide date of birth');
    this.msgSocialSecurityValidation = this.page.locator('text = Must provide SSN or SIN');

    this.txtBirthMonth = this.page.locator('[name="dobMonth"]');
    this.txtBirthDay = this.page.locator('[name="dobDay"]');
    this.txtBirthYear = this.page.locator('[name="dobYear"]');
    this.txtSocialSecurityNumber = this.page.locator('[placeholder="Last 4 SSN or SIN"]');

    // ========================== Business Info Selectors ======================
    this.txtBusinessName = this.page.locator('[name="businessName"]');
    this.txtIncorporationMonth = this.page.locator('[name="doiMonth"]');
    this.txtIncorporationDay = this.page.locator('[name="doiDay"]');
    this.txtIncorporationYear = this.page.locator('[name="doiYear"]');
    this.txtTaxId = this.page.locator('[name="taxId"]');
  }

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
    await this.shieldBenefitsLegalPricingPage.selectPlanAndEnrollNoPaymentFrequency(state, planName, tierName);
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
    await this.shieldBenefitsLegalPricingPage.selectCombinationPlanAndEnroll(state, paymentFrequency, planName1, planName2);
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
    await this.txtFirstName.fill(firstName);
    await this.txtLastName.fill(lastName);
    await this.txtPhoneNumber.fill(phone);
    await this.txtPhoneType.fill(type);
    await this.txtHomeAddress.fill(homeAddress);
    await this.txtCity.fill(city);
    await this.page.keyboard.press('Tab');
    await this.page.keyboard.press('Tab');
    await this.txtPostalCode.fill('');
    await this.txtPostalCode.fill(postalCode);
  };

  completeBusinessInfoForm = async (): Promise<void> => {
    if (await this.txtBusinessName.isVisible()) {
      await this.enterBusinessName('test business');
      await this.enterIncorporationMonth('01');
      await this.enterIncorporationDay('01');
      await this.enterIncorporationYear('2020');
      await this.enterTaxId('123456789');
    }
  };

  /**
   * @param {string} provinceName
   * @memberof CheckoutPersonalInfoPage
   */
  changeAddressCanada = async (provinceName: string): Promise<void> => {
    // logic to go to regions util, and populate the 3 variables needed for this method for the appropriate region
    const provinceObject = RegionsUtils.caProvinces.filter((pn) => pn.name == provinceName);
    await this.txtHomeAddress.fill(provinceObject[0].validAddress.street);
    await this.txtCity.fill(provinceObject[0].validAddress.city);
    await this.page.keyboard.press('Tab');
    await this.page.keyboard.press('Tab');
    await this.txtPostalCode.fill('');
    await this.txtPostalCode.fill(provinceObject[0].validAddress.postalCode);
  };

  /**
   * @param {string} regionName
   * @memberof CheckoutPersonalInfoPage
   */
  changeAddressUs = async (regionName: string): Promise<void> => {
    // logic to go to regions util, and populate the 3 variables needed for this method for the appropriate region
    const regionObject = RegionsUtils.usStates.filter((pn) => pn.name == regionName);
    await this.txtHomeAddress.fill(regionObject[0].validAddress.street);
    await this.txtCity.fill(regionObject[0].validAddress.city);
    await this.page.keyboard.press('Tab');
    await this.page.keyboard.press('Tab');
    await this.txtPostalCode.fill('');
    await this.txtPostalCode.fill(regionObject[0].validAddress.postalCode);
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
   * @memberof CheckoutPersonalInfoPage
   */
  hoverInformationIcon = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterPostalCode');
    await this.imgStateChangeInformationIcon.hover();
  };

  /**
   * @param {string} month
   * @memberof CheckoutPersonalInfoPage
   */
  enterMonth = async (month: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterMonth');
    await this.txtBirthMonth.fill(month);
  };

  /**
   * @param {string} day
   * @memberof CheckoutPersonalInfoPage
   */
  enterDay = async (day: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterDay');
    await this.txtBirthDay.fill(day);
  };

  /**
   * @param {string} year
   * @memberof CheckoutPersonalInfoPage
   */
  enterYear = async (year: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterYear');
    await this.txtBirthYear.fill(year);
  };

  /**
   * @param {string} socialSecurityNumber
   * @memberof CheckoutPersonalInfoPage
   */
  enterSocialSecurityNumber = async (socialSecurityNumber: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterSocialSecurityNumber');
    await this.txtSocialSecurityNumber.fill(socialSecurityNumber);
  };

  /**
   * @param {string} businessName
   * @memberof CheckoutPersonalInfoPage
   */
  enterBusinessName = async (businessName: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterBusinessName');
    await this.txtBusinessName.fill(businessName);
  };

  /**
   * @param {string} Month
   * @memberof CheckoutPersonalInfoPage
   */
  enterIncorporationMonth = async (Month: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterIncorporationMonth');
    await this.txtIncorporationMonth.fill(Month);
  };

  /**
   * @param {string} day
   * @memberof CheckoutPersonalInfoPage
   */
  enterIncorporationDay = async (day: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterIncorporationDay');
    await this.txtIncorporationDay.fill(day);
  };

  /**
   * @param {string} Year
   * @memberof CheckoutPersonalInfoPage
   */
  enterIncorporationYear = async (Year: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterIncorporationYear');
    await this.txtIncorporationYear.fill(Year);
  };

  /**
   * @param {string} taxId
   * @memberof CheckoutPersonalInfoPage
   */
  enterTaxId = async (taxId: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterTaxId');
    await this.txtTaxId.fill(taxId);
  };

  /**
   * @memberof CheckoutPersonalInfoPage
   */
  clearAllFieldsOnPersonalInfoPageAndSave = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.clearAllFieldsOnPersonalInfoPageAndSave');
    await this.txtFirstName.fill('');
    await this.txtLastName.fill('');
    await this.txtPhoneNumber.fill('');
    await this.txtPhoneType.selectOption({ label: 'Select Type' });
    await this.txtHomeAddress.fill('');
    await this.txtCity.fill('');
    await this.txtPostalCode.fill('');
    await this.btnSaveAndContinue.click();
  };

  /**
   * @memberof CheckoutPersonalInfoPageSecurityInfo
   */
  clearAllFieldsInSecurityInfoSectionPersonalInfoPage = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.clearAllFieldsInSecurityInfoSectionPersonalInfoPage');
    await this.txtBirthMonth.fill('');
    await this.txtBirthDay.fill('');
    await this.txtBirthYear.fill('');
    // await this.clearTextBox(txtBirthMonth, txtBirthDay, txtBirthYear);
    await this.txtSocialSecurityNumber.fill('');
    await this.btnSaveAndContinue.click();
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
  ) => {
    console.log(' - checkoutPersonalInfoPage.navigatePersonalInfoPageFromLogin');
    await this.navigateToShieldBenefitsPricingPage(groupNumber);
    if (groupPayConfig == 'Fringe') {
      await this.selectPlanWithoutPaymentFrequencyFromShieldBenefitsPricingPage(stateName, planName, tierName);
    } else {
      await this.shieldBenefitsLegalPricingPage.selectPlanFromShieldBenefitsPricingPage(stateName, payTerm, planName, tierName);
    }
    await this.loginPage.login(emailOrUsername, password);
    await this.txtHomeAddress.fill(street);
    await this.txtCity.fill(city);
    await this.page.keyboard.press('Tab');
    await this.page.keyboard.press('Tab');
    await this.txtPostalCode.fill('');
    await this.txtPostalCode.fill(postalCode);
    await this.checkoutOrderSummaryComponent.captureOrderSummaryWithoutTier();
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
  ) => {
    console.log(' - checkoutPersonalInfoPage.navigatePersonalInfoPageFromLogin');
    await this.navigateToShieldBenefitsPricingPage(groupNumber);
    await this.selectPlanWithoutPaymentFrequencyFromShieldBenefitsPricingPage(stateName, planName, tierName);
    await this.loginPage.login(emailOrUsername, password);
    await this.txtHomeAddress.fill(street);
    await this.txtCity.fill(city);
    await this.page.keyboard.press('Tab');
    await this.page.keyboard.press('Tab');
    await this.txtPostalCode.fill('');
    await this.txtPostalCode.fill(postalCode);
    await this.checkoutOrderSummaryComponent.captureOrderSummary(groupPayConfig);
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
  ) => {
    console.log(' - checkoutPersonalInfoPage.navigatePersonalInfoPageFromLogin');
    await this.navigateToShieldBenefitsPricingPage(groupNumber);
    await this.selectCombinationPlanFromShieldBenefitsPricingPage(stateName, payTerm, planName, plan2Name);
    await this.loginPage.login(emailOrUsername, password);
    await this.txtHomeAddress.fill(street);
    await this.txtCity.fill(city);
    await this.page.keyboard.press('Tab');
    await this.page.keyboard.press('Tab');
    await this.txtPostalCode.fill('');
    await this.txtPostalCode.fill(postalCode);
    await this.checkoutOrderSummaryComponent.captureOrderSummary(groupPayConfig);
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
    prepaidMonths = '',
    couponCode = '',
    plans: Array<string>
  ) => {
    await this.oktaPage.navigateToPlanalyzerCsrCheckoutOktaLogin();
    await this.oktaPage.loginThroughOkta();
    await this.planalyzerCsrCheckoutPage.createOrderRedirectToCheckoutFromPlanalyzer(
      channel,
      subChannel,
      region,
      marketLocale,
      prepaidMonths,
      couponCode,
      plans
    );
    await this.loginPage.login(basicUser.email, basicUser.password);
  };
  /**
   *
   *
   * @memberof CheckoutPersonalInfoPage
   */
  navigateToPersonalInfoPageForIdsCaFromPlanalyzer = async () => {
    await this.oktaPage.navigateToPlanalyzerCsrCheckoutOktaLogin();
    await this.oktaPage.loginThroughOkta();
    await this.planalyzerCsrCheckoutPage.createOrderRedirectToCheckoutFromPlanalyzer('D2C', 'IDShield', 'Ontario', 'en-CA', '', 'F30', [
      'IDShield Individual',
    ]);
    await this.loginPage.login(basicUser.email, basicUser.password);
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
    await this.navigateToTestingHarnessPage.navigate(
      UrlsUtils.testHarnessUrls.d2c.url,
      this.lineOfBusiness,
      DataUtils.data.testingHarness.lineOfBusiness.IDShield
    );
    await this.addPlanAndSomeSupplements.pickAPlan(this.planSupp, this.lineOfBusiness);
    await this.loginPage.login(basicUser.email, basicUser.password);
    const regionObj = RegionsUtils.caProvinces;
    const stateObj = state;
    for (const obj of regionObj) {
      if (obj.name == stateObj) {
        await this.txtHomeAddress.fill(obj.validAddress.street);
        await this.txtCity.fill(obj.validAddress.city);
        await this.page.keyboard.press('Tab');
        await this.page.keyboard.press('Tab');
        await this.txtPostalCode.fill('');
        await this.txtPostalCode.fill(obj.validAddress.postalCode);
      }
    }

    await this.btnSaveAndContinue.click();
    // await this.page.waitForTimeout(3500);
  };
  // ========================== Click Methods ==============================
  /**
   * @memberof CheckoutPersonalInfoPage
   */
  clickChangeStateLink = async () => {
    console.log(' - checkoutPersonalInfoPage.clickChangeStateLink');
    // Click on Change State link
    await this.lnkChangeState.click();
  };

  // ========================== Assertion Methods ==========================

  /**
   * @param {string} region
   * @memberof CheckoutPersonalInfoPage
   */
  assertState = async (region: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertState');
    // Confirm region is correct
    await expect(this.txtRegion).toHaveText(region);
  };

  /**
   * Confirm the tool tip displays after hovering over the help icon
   *
   * @memberof CheckoutPersonalInfoPage
   */
  assertToolTipIsVisible = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertToolTipIsVisible');
    // Confirm region is correct
    await expect(this.txaStageChangeToolTip).toBeVisible({ timeout: 100000 });
  };

  /**
   * @memberof CheckoutPersonalInfoPage
   */
  // Confirm that the stepper displays the step 2 - personal info as the current step
  assertPersonalInfoStepIsCurrent = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertPersonalInfoStepIsCurrent');
    await expect(this.stpPersonalInfoCurrent).toBeVisible({ timeout: 100000 });
  };

  /**
   * @memberof CheckoutPersonalInfoPage
   */
  // Confirm that the help information card is displayed
  assertSupportCardIsDisplayed = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertSupportCardIsDisplayed');
    await expect(this.conSupportInfo).toBeVisible({ timeout: 100000 });
  };

  /**
   * @memberof CheckoutPersonalInfoPage
   */
  // Confirm that the Call Support button is displayed
  assertCallSupportButtonIsDisplayed = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertCallSupportButtonIsDisplayed');
    await expect(this.btnCallSupport).toBeVisible({ timeout: 100000 });
  };

  /**
   * @memberof CheckoutPersonalInfoPage
   */
  // Confirm that the Header displays: Tell us about you
  assertPersonalInfoHeaderIsDisplayed = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertPersonalInfoHeaderIsDisplayed');
    await expect(this.hdrPersonalInfoHeader).toBeVisible({ timeout: 100000 });
  };

  /**
   * @memberof CheckoutPersonalInfoErrorFirstNameIsDisplayed
   */
  // Confirm that the Header displays: Tell us about you
  assertPersonalInfoPageErrorsAreDisplayed = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertPersonalInfoPageErrorIsDisplayed');
    await expect(this.msgFirstNameValidation).toBeVisible({ timeout: 100000 });
    await expect(this.msgLastNameValidation).toBeVisible({ timeout: 100000 });
    await expect(this.msgPhoneNumberValidation).toBeVisible({ timeout: 100000 });
    await expect(this.msgPhoneTypeValidation).toBeVisible({ timeout: 100000 });
    await expect(this.msgHomeAddressValidation).toBeVisible({ timeout: 100000 });
    await expect(this.msgCityValidation).toBeVisible({ timeout: 100000 });
    await expect(this.msgPostalCodeValidation).toBeVisible({ timeout: 100000 });
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
    await expect(this.msgBirthMonthDayYearValidation).toBeVisible({ timeout: 100000 });
    await expect(this.msgSocialSecurityValidation).toBeVisible({ timeout: 100000 });
  };
}
