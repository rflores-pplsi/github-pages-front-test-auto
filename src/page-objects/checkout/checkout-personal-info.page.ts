import UrlsUtils from '../../utils/urls.utils';
import { basicUser } from '../../utils/user.utils';
// import { CheckoutOrderSummaryComponent } from './checkout-order-summary.component';
import RegionsUtils from '../../utils/regions.utils';
import { NavigateToTestingHarnessPage, AddPlanAndSomeSupplements } from './checkout.helpers';
import { Page, Locator } from '@playwright/test';
import { ShieldBenefitsLegalPricingPage } from '../shield-benefits/shield-benefits-legal-pricing.page';
import { OktaPage } from '../okta/okta.page';
import { PlanalyzerCsrCheckoutPage } from '../../page-objects (Archived)/planalyzer/planalyzer-csr-checkout.page';
import { BrowserContext, expect } from '@playwright/test';
import DataUtils from '../../utils/Tests.Data';
import { CheckoutLocatorsPage } from './checkout-locators.page';
import { LegalshieldTestHarnessMenuPage } from '../test-harness/legalshield-test-harness-menu.page';
import { CommonLoginPage } from '@legalshield/frontend-automation-commons';

/**
 * @export
 * @class CheckoutPersonalInfoPage
 */
export class CheckoutPersonalInfoPage extends CheckoutLocatorsPage {
  // ========================== Instantiate Classes ==================================
  readonly shieldBenefitsLegalPricingPage: ShieldBenefitsLegalPricingPage;
  readonly oktaPage: OktaPage;
  readonly planalyzerCsrCheckoutPage: PlanalyzerCsrCheckoutPage;
  readonly navigateToTestingHarnessPage: NavigateToTestingHarnessPage;
  readonly addPlanAndSomeSupplements: AddPlanAndSomeSupplements;
  readonly legalshieldTestHarnessMenuPage: LegalshieldTestHarnessMenuPage;
  readonly commonLoginPage: CommonLoginPage;

  // ========================== Selectors ==================================

  protected page: Page;

  // const btnSaveAndContinue: string = '';
  readonly btnSaveAndContinue: Locator;

  // ========================== Personal Info Selectors ====================
  readonly personalInfoLocStpCurrent: Locator;
  readonly personalInfoLocHdrHeader: Locator;
  readonly personalInfoLocMsgFirstNameValidation: Locator;
  readonly personalInfoLocMsgLastNameValidation: Locator;
  readonly personalInfoLocMsgPhoneNumberValidation: Locator;
  readonly personalInfoLocMsgPhoneTypeValidation: Locator;
  readonly personalInfoLocMsgHomeAddressValidation: Locator;
  readonly personalInfoLocMsgCityValidation: Locator;
  readonly personalInfoLocMsgPostalCodeValidation: Locator;
  readonly personalInfoLocTxtFirstName: Locator;
  readonly personalInfoLocTxtLastName: Locator;
  readonly personalInfoLocTxtPhoneNumber: Locator;
  readonly personalInfoLocTxtPhoneType: Locator;
  readonly personalInfoLocTxtHomeAddress: Locator;
  readonly personalInfoLocTxtCity: Locator;
  readonly personalInfoLocTxtPostalCode: Locator;
  readonly personalInfoLocTxtRegion: Locator;
  readonly personalInfoLocLnkChangeState: Locator;
  readonly personalInfoLocImgStateChangeInformationIcon: Locator;
  readonly personalInfoLocTxtStageChangeToolTip: Locator;
  // ========================== Support Card Selectors ======================
  readonly personalInfoLocConSupportInfo: Locator;
  readonly personalInfoLocBtnCallSupport: Locator;

  // ========================== Security Info Selectors ======================
  readonly personalInfoLocMgBirthMonthDayYearValidation: Locator;
  readonly personalInfoLocMsgSocialSecurityValidation: Locator;
  readonly personalInfoLocTxtBirthMonth: Locator;
  readonly personalInfoLocTxtBirthDay: Locator;
  readonly personalInfoLocTxtBirthYear: Locator;
  readonly personalInfoLocTxtSocialSecurityNumber: Locator;

  // ========================== Business Info Selectors ======================
  readonly personalInfoLocTxtBusinessName: Locator;
  readonly personalInfoLocTxtIncorporationMonth: Locator;
  readonly personalInfoLocTxtIncorporationDay: Locator;
  readonly personalInfoLocTxtIncorporationYear: Locator;
  readonly personalInfoLocTxtTaxId: Locator;
  readonly personalInfoLocLineOfBusiness: string;
  readonly planSupp: Array<string>;
  /**
   * @param {BrowserContext} context
   * @param {Page} page
   * @param {string} lineOfBusiness
   * @param {Array<string>} planSupp
   * @memberof CheckoutPersonalInfoPage
   */
  constructor(context: BrowserContext, page: Page, lineOfBusiness: string, planSupp: Array<string>) {
    super(context, page);
    this.page = page;
    this.commonLoginPage = new CommonLoginPage(page); // instantiate CommonLoginPage
    this.legalshieldTestHarnessMenuPage = new LegalshieldTestHarnessMenuPage(context, page);
    this.personalInfoLocLineOfBusiness = lineOfBusiness;
    this.planSupp = planSupp;
    this.shieldBenefitsLegalPricingPage = new ShieldBenefitsLegalPricingPage(page);
    this.oktaPage = new OktaPage(page);
    this.planalyzerCsrCheckoutPage = new PlanalyzerCsrCheckoutPage(page);
    this.navigateToTestingHarnessPage = new NavigateToTestingHarnessPage(this.page, UrlsUtils.testHarnessUrls.d2c.url, lineOfBusiness);
    this.addPlanAndSomeSupplements = new AddPlanAndSomeSupplements(this.personalInfoLocLineOfBusiness, this.planSupp, this.page);
    this.btnSaveAndContinue = this.page.locator('button:has-text("Save & Continue")');
    this.personalInfoLocStpCurrent = this.page.locator('//div[contains(@class,"step-circle--current") and contains(.,"2")]');
    this.personalInfoLocHdrHeader = this.page.locator('text = Tell us about yourself');
    this.personalInfoLocMsgFirstNameValidation = this.page.locator('text = Must provide first name');
    this.personalInfoLocMsgLastNameValidation = this.page.locator('text = Must provide last name');
    this.personalInfoLocMsgPhoneNumberValidation = this.page.locator('text = Must provide phone number');
    this.personalInfoLocMsgPhoneTypeValidation = this.page.locator('text = Must select phone type');
    this.personalInfoLocMsgHomeAddressValidation = this.page.locator('text = Must provide home address');
    this.personalInfoLocMsgCityValidation = this.page.locator('text = Must include name of city');
    this.personalInfoLocMsgPostalCodeValidation = this.page.locator('text = Must provide valid postal code');
    this.personalInfoLocTxtFirstName = this.page.locator('[name="firstName"]');
    this.personalInfoLocTxtLastName = this.page.locator('[name="lastName"]');
    this.personalInfoLocTxtPhoneNumber = this.page.locator('[name="phoneNumber"]');
    this.personalInfoLocTxtPhoneType = this.page.locator('[name="phoneType"]');
    this.personalInfoLocTxtHomeAddress = this.page.locator('[name="homeAddress"]');
    this.personalInfoLocTxtCity = this.page.locator('[name="city"]');
    this.personalInfoLocTxtPostalCode = this.page.locator('[name="postalCode"]');
    this.personalInfoLocTxtRegion = this.page.locator('//span[contains(@class, "contact-region")]');
    this.personalInfoLocLnkChangeState = this.page.locator('a:has-text("Change")');
    this.personalInfoLocImgStateChangeInformationIcon = this.page.locator('[alt="info"');
    this.personalInfoLocTxtStageChangeToolTip = this.page.locator('//div[contains(@class,"info-tooltip-text")]');
    // ========================== Support Card Selectors ======================
    this.personalInfoLocConSupportInfo = this.page.locator('//div[contains(@class, "support-card-container")]');
    this.personalInfoLocBtnCallSupport = this.page.locator('button:has-text("Call (833)-951-2754")');
    // ========================== Security Info Selectors ======================
    this.personalInfoLocMgBirthMonthDayYearValidation = this.page.locator('text = Must provide date of birth');
    this.personalInfoLocMsgSocialSecurityValidation = this.page.locator('text = Must provide SSN or SIN');
    this.personalInfoLocTxtBirthMonth = this.page.locator('[name="dobMonth"]');
    this.personalInfoLocTxtBirthDay = this.page.locator('[name="dobDay"]');
    this.personalInfoLocTxtBirthYear = this.page.locator('[name="dobYear"]');
    this.personalInfoLocTxtSocialSecurityNumber = this.page.locator('[placeholder="Last 4 SSN or SIN"]');
    // ========================== Business Info Selectors ======================
    this.personalInfoLocTxtBusinessName = this.page.locator('[name="businessName"]');
    this.personalInfoLocTxtIncorporationMonth = this.page.locator('[name="doiMonth"]');
    this.personalInfoLocTxtIncorporationDay = this.page.locator('[name="doiDay"]');
    this.personalInfoLocTxtIncorporationYear = this.page.locator('[name="doiYear"]');
    this.personalInfoLocTxtTaxId = this.page.locator('[name="taxId"]');
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
    await this.personalInfoLocTxtFirstName.fill(firstName);
    await this.personalInfoLocTxtLastName.fill(lastName);
    await this.personalInfoLocTxtPhoneNumber.fill(phone);
    await this.personalInfoLocTxtPhoneType.fill(type);
    await this.personalInfoLocTxtHomeAddress.fill(homeAddress);
    await this.personalInfoLocTxtCity.fill(city);
    await this.page.keyboard.press('Tab');
    await this.page.keyboard.press('Tab');
    await this.personalInfoLocTxtPostalCode.fill('');
    await this.personalInfoLocTxtPostalCode.fill(postalCode);
  };

  completeBusinessInfoForm = async (): Promise<void> => {
    if (await this.personalInfoLocTxtBusinessName.isVisible()) {
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
    await this.personalInfoLocTxtHomeAddress.fill(provinceObject[0].validAddress.street);
    await this.personalInfoLocTxtCity.fill(provinceObject[0].validAddress.city);
    await this.page.keyboard.press('Tab');
    await this.page.keyboard.press('Tab');
    await this.personalInfoLocTxtPostalCode.fill('');
    await this.personalInfoLocTxtPostalCode.fill(provinceObject[0].validAddress.postalCode);
  };

  /**
   * @param {string} regionName
   * @memberof CheckoutPersonalInfoPage
   */
  changeAddressUs = async (regionName: string): Promise<void> => {
    // logic to go to regions util, and populate the 3 variables needed for this method for the appropriate region
    const regionObject = RegionsUtils.usStates.filter((pn) => pn.name == regionName);
    await this.personalInfoLocTxtHomeAddress.fill(regionObject[0].validAddress.street);
    await this.personalInfoLocTxtCity.fill(regionObject[0].validAddress.city);
    await this.page.keyboard.press('Tab');
    await this.page.keyboard.press('Tab');
    await this.personalInfoLocTxtPostalCode.fill('');
    await this.personalInfoLocTxtPostalCode.fill(regionObject[0].validAddress.postalCode);
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
    await this.personalInfoLocImgStateChangeInformationIcon.hover();
  };

  /**
   * @param {string} month
   * @memberof CheckoutPersonalInfoPage
   */
  enterMonth = async (month: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterMonth');
    await this.personalInfoLocTxtBirthMonth.fill(month);
  };

  /**
   * @param {string} day
   * @memberof CheckoutPersonalInfoPage
   */
  enterDay = async (day: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterDay');
    await this.personalInfoLocTxtBirthDay.fill(day);
  };

  /**
   * @param {string} year
   * @memberof CheckoutPersonalInfoPage
   */
  enterYear = async (year: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterYear');
    await this.personalInfoLocTxtBirthYear.fill(year);
  };

  /**
   * @param {string} socialSecurityNumber
   * @memberof CheckoutPersonalInfoPage
   */
  enterSocialSecurityNumber = async (socialSecurityNumber: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterSocialSecurityNumber');
    await this.personalInfoLocTxtSocialSecurityNumber.fill(socialSecurityNumber);
  };

  /**
   * @param {string} businessName
   * @memberof CheckoutPersonalInfoPage
   */
  enterBusinessName = async (businessName: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterBusinessName');
    await this.personalInfoLocTxtBusinessName.fill(businessName);
  };

  /**
   * @param {string} Month
   * @memberof CheckoutPersonalInfoPage
   */
  enterIncorporationMonth = async (Month: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterIncorporationMonth');
    await this.personalInfoLocTxtIncorporationMonth.fill(Month);
  };

  /**
   * @param {string} day
   * @memberof CheckoutPersonalInfoPage
   */
  enterIncorporationDay = async (day: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterIncorporationDay');
    await this.personalInfoLocTxtIncorporationDay.fill(day);
  };

  /**
   * @param {string} Year
   * @memberof CheckoutPersonalInfoPage
   */
  enterIncorporationYear = async (Year: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterIncorporationYear');
    await this.personalInfoLocTxtIncorporationYear.fill(Year);
  };

  /**
   * @param {string} taxId
   * @memberof CheckoutPersonalInfoPage
   */
  enterTaxId = async (taxId: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.enterTaxId');
    await this.personalInfoLocTxtTaxId.fill(taxId);
  };

  /**
   * @memberof CheckoutPersonalInfoPage
   */
  clearAllFieldsOnPersonalInfoPageAndSave = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.clearAllFieldsOnPersonalInfoPageAndSave');
    await this.personalInfoLocTxtFirstName.fill('');
    await this.personalInfoLocTxtLastName.fill('');
    await this.personalInfoLocTxtPhoneNumber.fill('');
    await this.personalInfoLocTxtPhoneType.selectOption({ label: 'Select Type' });
    await this.personalInfoLocTxtHomeAddress.fill('');
    await this.personalInfoLocTxtCity.fill('');
    await this.personalInfoLocTxtPostalCode.fill('');
    await this.btnSaveAndContinue.click();
  };

  /**
   * @memberof CheckoutPersonalInfoPageSecurityInfo
   */
  clearAllFieldsInSecurityInfoSectionPersonalInfoPage = async (): Promise<void> => {
    await this.personalInfoLocTxtBirthMonth.fill('');
    await this.personalInfoLocTxtBirthDay.fill('');
    await this.personalInfoLocTxtBirthYear.fill('');
    await this.personalInfoLocTxtSocialSecurityNumber.fill('');
    await this.btnSaveAndContinue.click();
  };

  clearAllFieldsInBusinessInfoSectionPersonalInfoPage = async (): Promise<void> => {
    await this.personalInfoLocTxtBusinessName.fill('');
    await this.personalInfoLocTxtIncorporationMonth.fill('');
    await this.personalInfoLocTxtIncorporationDay.fill('');
    await this.personalInfoLocTxtIncorporationYear.fill('');
    await this.personalInfoLocTxtTaxId.fill('');
    await this.btnSaveAndContinue.click();
  };

  populateAllFieldsOnPersonalInfoPageAndSave = async (): Promise<void> => {
    await this.personalInfoLocTxtFirstName.fill('Automation');
    await this.personalInfoLocTxtLastName.fill('Tester');
    await this.personalInfoLocTxtPhoneNumber.fill('5555555555');
    await this.personalInfoLocTxtPhoneType.selectOption({ label: 'Mobile' });
    await this.personalInfoLocTxtHomeAddress.fill('200 16th Street');
    await this.personalInfoLocTxtCity.fill('Denver');
    await this.personalInfoLocTxtPostalCode.fill('80202');
    await this.personalInfoLocTxtBirthMonth.fill('10');
    await this.personalInfoLocTxtBirthDay.fill('10');
    await this.personalInfoLocTxtBirthYear.fill('2001');
    await this.personalInfoLocTxtSocialSecurityNumber.fill('3333');
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
  /**
   * @param {Page} page
   * @param {string} state
   * @param {string} url
   * @param {string} lineOfBusiness
   * @param {string} lofb
   * @param {Array<string>} planSupp
   * @memberof CheckoutPaymentsPage
   */
  navigateToPersonalInfoPage = async (
    page: Page,
    state: string,
    url: string,
    lineOfBusiness: string,
    lofb: string,
    planSupp: Array<string>
  ): Promise<void> => {
    await this.navigateToTestingHarnessPage.navigate(url, lineOfBusiness, lofb);
    await this.legalshieldTestHarnessMenuPage.selectRegionFromDropdown(state);
    await this.addPlanAndSomeSupplements.pickAPlan(planSupp, lineOfBusiness);
    await this.page.waitForLoadState();
    await this.commonLoginPage.login(basicUser.email as string, basicUser.password as string); // not adding creds
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
      await this.shieldBenefitsLegalPricingPage.selectPlanFromShieldBenefitsPricingPage(stateName, payTerm, planName, tierName);
    }
    await this.commonLoginPage.login(emailOrUsername as string, password as string);
    await this.personalInfoLocTxtHomeAddress.fill(street);
    await this.personalInfoLocTxtCity.fill(city);
    await this.page.keyboard.press('Tab');
    await this.page.keyboard.press('Tab');
    await this.personalInfoLocTxtPostalCode.fill('');
    await this.personalInfoLocTxtPostalCode.fill(postalCode);
    // await this.checkoutOrderSummaryComponent.captureOrderSummaryWithoutTier();
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
    await this.commonLoginPage.login(emailOrUsername as string, password as string);
    await this.personalInfoLocTxtHomeAddress.fill(street);
    await this.personalInfoLocTxtCity.fill(city);
    await this.page.keyboard.press('Tab');
    await this.page.keyboard.press('Tab');
    await this.personalInfoLocTxtPostalCode.fill('');
    await this.personalInfoLocTxtPostalCode.fill(postalCode);
    // await this.checkoutOrderSummaryComponent.captureOrderSummary(groupPayConfig);
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
    await this.commonLoginPage.login(emailOrUsername as string, password as string);
    await this.personalInfoLocTxtHomeAddress.fill(street);
    await this.personalInfoLocTxtCity.fill(city);
    await this.page.keyboard.press('Tab');
    await this.page.keyboard.press('Tab');
    await this.personalInfoLocTxtPostalCode.fill('');
    await this.personalInfoLocTxtPostalCode.fill(postalCode);
    // await this.checkoutOrderSummaryComponent.captureOrderSummary(groupPayConfig);
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
    await this.commonLoginPage.login(basicUser.email as string, basicUser.password as string);
  };
  /**
   *
   *
   * @memberof CheckoutPersonalInfoPage
   */
  navigateToPersonalInfoPageForIdsCaFromPlanalyzer = async (): Promise<void> => {
    await this.oktaPage.navigateToPlanalyzerCsrCheckoutOktaLogin();
    await this.oktaPage.loginThroughOkta();
    await this.planalyzerCsrCheckoutPage.createOrderRedirectToCheckoutFromPlanalyzer('D2C', 'IDShield', 'Ontario', 'en-CA', '', 'F30', [
      'IDShield Individual',
    ]);
    await this.commonLoginPage.login(basicUser.email as string, basicUser.password as string);
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
  /**
   * @param {string} state
   * @memberof CheckoutPersonalInfoPage
   */
  navigateToPaymentsPageForF30IdsCa = async (state: string): Promise<void> => {
    await this.navigateToTestingHarnessPage.navigate(
      UrlsUtils.testHarnessUrls.d2c.url,
      this.personalInfoLocLineOfBusiness,
      DataUtils.data.testingHarness.lineOfBusiness.IDShield
    );
    await this.addPlanAndSomeSupplements.pickAPlan(this.planSupp, this.personalInfoLocLineOfBusiness);
    await this.commonLoginPage.login(basicUser.email as string, basicUser.password as string);
    const regionObj = RegionsUtils.caProvinces;
    const stateObj = state;
    for (const obj of regionObj) {
      if (obj.name == stateObj) {
        await this.personalInfoLocTxtHomeAddress.fill(obj.validAddress.street);
        await this.personalInfoLocTxtCity.fill(obj.validAddress.city);
        await this.page.keyboard.press('Tab');
        await this.page.keyboard.press('Tab');
        await this.personalInfoLocTxtPostalCode.fill('');
        await this.personalInfoLocTxtPostalCode.fill(obj.validAddress.postalCode);
      }
    }

    await this.btnSaveAndContinue.click();
    // await this.page.waitForTimeout(3500);
  };
  // ========================== Click Methods ==============================
  /**
   * @memberof CheckoutPersonalInfoPage
   */
  clickChangeStateLink = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.clickChangeStateLink');
    // Click on Change State link
    await this.personalInfoLocLnkChangeState.click();
  };

  // ========================== Assertion Methods ==========================

  /**
   * @param {string} region
   * @memberof CheckoutPersonalInfoPage
   */
  assertState = async (region: string): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertState');
    // Confirm region is correct
    await expect(this.personalInfoLocTxtRegion).toHaveText(region);
  };

  /**
   * Confirm the tool tip displays after hovering over the help icon
   *
   * @memberof CheckoutPersonalInfoPage
   */
  assertToolTipIsVisible = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertToolTipIsVisible');
    // Confirm region is correct
    await expect(this.personalInfoLocTxtStageChangeToolTip).toBeVisible({ timeout: 100000 });
  };

  /**
   * @memberof CheckoutPersonalInfoPage
   */
  // Confirm that the stepper displays the step 2 - personal info as the current step
  assertPersonalInfoStepIsCurrent = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertPersonalInfoStepIsCurrent');
    await expect(this.personalInfoLocStpCurrent).toBeVisible({ timeout: 100000 });
  };

  /**
   * @memberof CheckoutPersonalInfoPage
   */
  // Confirm that the help information card is displayed
  assertSupportCardIsDisplayed = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertSupportCardIsDisplayed');
    await expect(this.personalInfoLocConSupportInfo).toBeVisible({ timeout: 100000 });
  };

  /**
   * @memberof CheckoutPersonalInfoPage
   */
  // Confirm that the Call Support button is displayed
  assertCallSupportButtonIsDisplayed = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertCallSupportButtonIsDisplayed');
    await expect(this.personalInfoLocBtnCallSupport).toBeVisible({ timeout: 100000 });
  };

  /**
   * @memberof CheckoutPersonalInfoPage
   */
  // Confirm that the Header displays: Tell us about you
  assertPersonalInfoHeaderIsDisplayed = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertPersonalInfoHeaderIsDisplayed');
    await expect(this.personalInfoLocHdrHeader).toBeVisible({ timeout: 100000 });
  };

  /**
   * @memberof CheckoutPersonalInfoErrorFirstNameIsDisplayed
   */
  // Confirm that the Header displays: Tell us about you
  assertPersonalInfoPageErrorsAreDisplayed = async (): Promise<void> => {
    console.log(' - checkoutPersonalInfoPage.assertPersonalInfoPageErrorIsDisplayed');
    await expect(this.personalInfoLocMsgFirstNameValidation).toBeVisible({ timeout: 100000 });
    await expect(this.personalInfoLocMsgLastNameValidation).toBeVisible({ timeout: 100000 });
    await expect(this.personalInfoLocMsgPhoneNumberValidation).toBeVisible({ timeout: 100000 });
    await expect(this.personalInfoLocMsgPhoneTypeValidation).toBeVisible({ timeout: 100000 });
    await expect(this.personalInfoLocMsgHomeAddressValidation).toBeVisible({ timeout: 100000 });
    await expect(this.personalInfoLocMsgCityValidation).toBeVisible({ timeout: 100000 });
    await expect(this.personalInfoLocMsgPostalCodeValidation).toBeVisible({ timeout: 100000 });
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
    await expect(this.personalInfoLocMgBirthMonthDayYearValidation).toBeVisible({ timeout: 100000 });
    await expect(this.personalInfoLocMsgSocialSecurityValidation).toBeVisible({ timeout: 100000 });
  };
}
