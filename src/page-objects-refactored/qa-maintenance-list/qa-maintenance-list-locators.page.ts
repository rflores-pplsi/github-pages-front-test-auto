import { BrowserContext, FrameLocator, Locator, Page } from '@playwright/test';
import { CommonCheckoutPage, CommonLoginPage } from '../../../node_modules/@legalshield/frontend-automation-commons';
import { LoginPage } from '../login/login.page';
let context: BrowserContext;
/**
 * @export
 * @class QaMaintenanceListLocatorsPage
 */
export class QaMaintenanceListLocatorsPage extends LoginPage {
  // ========================== Instantiate Classes ========================

  // ========================== Selectors ==================================

  protected page: Page;
  readonly frmParent: FrameLocator;
  readonly frmPayment: FrameLocator;
  readonly bestMoneyMoversLocBtnEnrollNow: Locator;
  readonly bestMoneyMoversLocBtnSlctState: Locator;
  readonly bestMoneyMoversLocSlctStateDropdown: Locator;
  readonly bestMoneyMoversLocAvailablePlanLbl: Locator;
  readonly bestMoneyMoversLocSlctFrequencyDropdown: Locator;
  readonly bestMoneyMoversLocLblTellUsAboutYourself: Locator;
  readonly bestMoneyMoversLocLnkLegalPlan: Locator;
  readonly confirmationPageLblWelcome: Locator;
  readonly commonLoginPage: CommonLoginPage;
  readonly commonCheckoutPage: CommonCheckoutPage;
  readonly createUserRdoButtonUsername: Locator;
  readonly createUserTxtPassword: Locator;
  readonly createUserTxtConfirmPassword: Locator;
  readonly createUserRdoCheckByMail: Locator;
  readonly createUserBtnCommissionOptionContinue: Locator;
  readonly becomeAssociateLocBtn: Locator;
  readonly BTN_GET_A_PLAN: Locator;
  readonly BTN_BECOME_ASSOCIATE: Locator;
  readonly LBL_HOME_BUSINESS_SUPPLEMENT: Locator;
  readonly BTN_NEXT: Locator;
  readonly BTN_NEXT_WITH_FORM: Locator;
  readonly CHKB_INDIVIDUAL: Locator;
  readonly CHKB_NO: Locator;
  readonly BTN_CONTINUE: Locator;
  readonly BTN_CHECKOUT: Locator;
  readonly paymentPageTxtNameOnCard: Locator;
  readonly paymentPageTxtCardNumber: Locator;
  readonly paymentPageTxtExpDate: Locator;
  readonly paymentPageTxtCVV: Locator;
  readonly paymentPageBtnPurchase: Locator;
  readonly paymentPageRdoBankDraft: Locator;
  readonly paymentPageTxtNameOfAccountHolder: Locator;
  readonly paymentPageTxtTransitNumber: Locator;
  readonly paymentPageTxtInstitutionNumber: Locator;
  readonly paymentPageTxtRoutingNumber: Locator;
  readonly paymentPageTxtAccountNumber: Locator;
  readonly paymentPageRdoCheckingAccount: Locator;
  readonly personalInfoLocTtlContactInfo: Locator;
  readonly personalInfoLocTxtEmail: Locator;
  readonly personalInfoLocTxtFirstName: Locator;
  readonly personalInfoLocTxtLastName: Locator;
  readonly personalInfoLocTxtAddress: Locator;
  readonly personalInfoLocTxtCity: Locator;
  readonly personalInfoLocTxtZipCode: Locator;
  readonly personalInfoLocTxtStreetAddress: Locator;
  readonly personalInfoLocTxtCityName: Locator;
  readonly personalInfoLocTxtPostalCode: Locator;
  readonly personalInfoLocLnkChange: Locator;
  readonly personalInfoLocSlctRegion: Locator;
  readonly personalInfoLocBtnUpdateState: Locator;
  readonly personalInfoLocBtnSaveAndContinue: Locator;
  readonly personalInfoLocTxtPhoneNumber: Locator;
  readonly personalInfoLocSlctPhoneType: Locator;
  readonly personalInfoLocTxtDateOfBirth: Locator;
  readonly personalInfoLocTxtDependentFirstName: Locator;
  readonly personalInfoLocTxtDependentLastName: Locator;
  readonly personalInfoLocTxtDependentBDay: Locator;
  readonly personalInfoLocTxtDependentEmail: Locator;
  readonly personalInfoLocSlctFamilyMemberType: Locator;
  readonly personalInfoLocTxtSSN: Locator;
  readonly personalInfoLocBtnContactInfoContinue: Locator;
  readonly primericaGroupRdBtnLanguage: Locator;
  readonly primericaGroupTxtAgentID: Locator;
  readonly primericaGroupBtnSubmit: Locator;
  readonly primericaGroupLblRepresentative: Locator;
  readonly primericaGroupBtnEnrollNow: Locator;
  readonly primericaGroupBtnFindRep: Locator;
  readonly primericaGroupBtnSelectState: Locator;
  readonly primericaGroupBtnGetStart: Locator;
  readonly primericaGroupBthStateOrProvince: Locator;
  readonly primericaGroupLnkSelectYourPlan: Locator;
  readonly primericaGroupBtnAddToCart: Locator;
  readonly primericaGroupBtnContactInfo: Locator;
  readonly testHarnessD2cLocSlctChooseYourRegion: Locator;
  readonly testHarnessD2cLocBtnUpdateRegion: Locator;
  readonly testHarnessD2cLocBtnCheckout: Locator;
  readonly testHarnessD2cLocLblWelcome: Locator;
  readonly testHarnessD2cLocLscaRegionDropdown: Locator;
  readonly testHarnessD2cLocSlctYourCity: Locator;

  /**
   * @param {Page} page
   * @class CheckoutLocatorsPage
   */
  constructor(page: Page) {
    super(context, page);
    this.page = page;
    this.frmParent = this.page.frameLocator('#payment-method');
    this.frmPayment = this.frmParent.frameLocator('#paymentMethodFramePsx');
    this.bestMoneyMoversLocBtnEnrollNow = this.page.locator('text=Enroll Now');
    this.bestMoneyMoversLocBtnSlctState = this.page.locator('//span[@class="lsux-text--large  pr-3"]');
    this.bestMoneyMoversLocSlctStateDropdown = this.page.locator('//span[contains(text(),"Select")]');
    this.bestMoneyMoversLocAvailablePlanLbl = this.page.locator('//h3[contains(text(),"Available Plans")]');
    this.bestMoneyMoversLocSlctFrequencyDropdown = this.page.locator('//span[contains(text(),"Monthly")]');
    this.bestMoneyMoversLocLblTellUsAboutYourself = this.page.locator('//h1[contains(text(),"Tell us about yourself")]');
    this.bestMoneyMoversLocLnkLegalPlan = this.page.locator('text="Legal Plan"');
    this.commonLoginPage = new CommonLoginPage(page);
    this.commonCheckoutPage = new CommonCheckoutPage(page);
    this.BTN_GET_A_PLAN = this.page.locator('//a[starts-with(@class,"plan-builder")] >> nth=0');
    this.BTN_BECOME_ASSOCIATE = this.page.locator('//span[contains(text(),"Become an Associate")]');
    this.LBL_HOME_BUSINESS_SUPPLEMENT = this.page.locator('//label[starts-with(@id,"label-hbs")]');
    this.BTN_NEXT = this.page.locator('#builder_modal_checkout_btn_continue');
    this.BTN_NEXT_WITH_FORM = this.page.locator('#builder_modal_checkout_btn_withform');
    this.CHKB_INDIVIDUAL = this.page.locator('#individual-bdl');
    this.CHKB_NO = this.page.locator('#no-bdl');
    this.BTN_CONTINUE = this.page.locator('#builder_modal_checkout_btn');
    this.BTN_CHECKOUT = this.page.locator('#minicart_btn_checkout');
    this.personalInfoLocTtlContactInfo = this.page.locator('//h2[@class="component-title"] >> nth=0');
    this.personalInfoLocTxtEmail = this.page.locator('#email-start-form');
    this.personalInfoLocTxtFirstName = this.page.locator('input[name="first-name"]');
    this.personalInfoLocTxtLastName = this.page.locator('input[name="last-name"]');
    this.personalInfoLocTxtAddress = this.page.locator('#address');
    this.personalInfoLocTxtCity = this.page.locator('#city');
    this.personalInfoLocTxtZipCode = this.page.locator('//input[starts-with(@id,"zipcode")]');
    this.personalInfoLocTxtStreetAddress = this.page.locator('//input[@placeholder="Home Address"]');
    this.personalInfoLocTxtCityName = this.page.locator('//input[@name="city"]');
    this.personalInfoLocTxtPostalCode = this.page.locator('//input[@name="postalCode"]');
    this.personalInfoLocLnkChange = this.page.locator('//div/a[contains(text(),"Change")]');
    this.personalInfoLocSlctRegion = this.page.locator('select[name="state_select"]');
    this.personalInfoLocBtnUpdateState = this.page.locator('#edit-submit--3');
    this.personalInfoLocBtnSaveAndContinue = this.page.locator('span.lsux-text--large >> nth=0');
    this.personalInfoLocTxtPhoneNumber = this.page.locator('#phone-number');
    this.personalInfoLocSlctPhoneType = this.page.locator('span.mat-select-placeholder >> nth=0');
    this.personalInfoLocTxtDateOfBirth = this.page.locator('#date-birth');
    this.personalInfoLocTxtDependentFirstName = this.page.locator('#first-name-dependant-form');
    this.personalInfoLocTxtDependentLastName = this.page.locator('#last-name-dependant-form');
    this.personalInfoLocTxtDependentBDay = this.page.locator('#date-birth-dependant-form');
    this.personalInfoLocTxtDependentEmail = this.page.locator('#dependant-email-start-form');
    this.personalInfoLocSlctFamilyMemberType = this.page.locator('span.mat-select-placeholder');
    this.personalInfoLocTxtSSN = this.page.locator('#s-security');
    this.personalInfoLocBtnContactInfoContinue = this.page.locator('//button[starts-with(@class,"shared-button")] >> nth=0');
    this.createUserRdoButtonUsername = this.page.locator('div.mat-radio-container >> nth=0');
    this.createUserTxtPassword = this.page.locator('#password');
    this.createUserTxtConfirmPassword = this.page.locator('#confirm-password');
    this.createUserRdoCheckByMail = this.page.locator('//mat-radio-button[@id="mat-radio-13"]/label/div[1]');
    this.createUserBtnCommissionOptionContinue = this.page.locator('//button[contains(text(),"Continue")]');
    this.becomeAssociateLocBtn = this.page.locator('ul[class="plans-menu-filters menu-dropdown dropdown"] a.filter-plan >> nth=1');
    this.paymentPageTxtNameOnCard = this.frmPayment.locator('#cardholder_name');
    this.paymentPageTxtCardNumber = this.frmPayment.locator('#card_number');
    this.paymentPageTxtExpDate = this.frmPayment.locator('#expiration_date');
    this.paymentPageTxtCVV = this.frmPayment.locator('#security_code');
    this.paymentPageBtnPurchase = this.frmPayment.locator('#savecc');
    this.confirmationPageLblWelcome = this.page.locator(
      '//div[@class="confirmation-col col-sm-12 col-tb-12 col-dk-6 confirmation-wrapper wals-content ng-star-inserted"]/h1'
    );
    this.paymentPageRdoBankDraft = this.frmPayment.locator('//form[@id="cc_form"]/div[2]/div/div/input');
    this.paymentPageTxtNameOfAccountHolder = this.frmPayment.locator('#accountholder_name');
    this.paymentPageTxtTransitNumber = this.frmPayment.locator('#transit_number');
    this.paymentPageTxtInstitutionNumber = this.frmPayment.locator('#institution_number');
    this.paymentPageTxtRoutingNumber = this.frmPayment.locator('#routing_number');
    this.paymentPageTxtAccountNumber = this.frmPayment.locator('#account_number');
    this.paymentPageRdoCheckingAccount = this.frmPayment.locator('//input[ @value="Checking"]');

    this.primericaGroupRdBtnLanguage = this.page.locator('i.ls-globe');
    this.primericaGroupTxtAgentID = this.page.locator('input[name="Rep ID"]');
    this.primericaGroupBtnSubmit = this.page.locator('//button[contains(text(),"Submit")]');
    this.primericaGroupLblRepresentative = this.page.locator('//div/p[contains(text(),"Representative: JANICE S BRAY")]');
    this.primericaGroupBtnEnrollNow = this.page.locator('a.enroll-btn');
    this.primericaGroupBtnFindRep = this.page.locator('span.lsux-text--large >> nth=0');
    this.primericaGroupBtnSelectState = this.page.locator('span.lsux-text--large >> nth=1');
    this.primericaGroupBtnGetStart = this.page.locator('//div[@class="navContainer__top"]/a[contains(text(),"Get Started")]');
    this.primericaGroupBthStateOrProvince = this.page.locator('span.glyphicon.startNow__section__icon.glyphicon-menu-down');
    this.primericaGroupLnkSelectYourPlan = this.page.locator('span.lsux-text--large.pr-3 >> nth= 2');
    this.primericaGroupBtnAddToCart = this.page.locator('//button[contains(text(),"ADD TO CART")]');
    this.primericaGroupBtnContactInfo = this.page.locator('//button[contains(text(),"Contact Information")]');
    this.testHarnessD2cLocSlctChooseYourRegion = this.page.locator('select.lsc-region-popup__selector');
    this.testHarnessD2cLocBtnUpdateRegion = this.page.locator('button.lsc-region-popup__button.lsc-clickable-element');
    this.testHarnessD2cLocBtnCheckout = this.page.locator('button#checkout-btn');
    this.testHarnessD2cLocLblWelcome = this.page.locator('//h1[contains(text(),"Welcome to the Family!")]');
    this.testHarnessD2cLocLscaRegionDropdown = this.page.locator('.lsc_region_selector.region_select');
    this.testHarnessD2cLocSlctYourCity = this.page.locator('select.lsc_region_selector');
  }
}
