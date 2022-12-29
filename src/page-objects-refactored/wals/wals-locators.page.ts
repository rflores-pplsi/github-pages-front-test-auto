import { expect, FrameLocator, Locator, Page } from '@playwright/test';

/**
 * @export
 * @class WalsLocatorPage
 */
export class WalsLocatorPage {
  // ========================== Locators ==================================
  protected page: Page;
  readonly associateWebsiteCartSummaryLocOneTimeFees: Locator;
  readonly associateWebsiteCartSummaryLocTotalDueToday: Locator;
  readonly associateWebsiteCreateUserLocLblUsername: Locator;
  readonly associateWebsiteCreateUserLocRdoBtnUsername: Locator;
  readonly associateWebsiteCreateUserLocTxtUsername: Locator;
  readonly associateWebsiteCreateUserLocWrapper: Locator;
  readonly associateResultLocViewWebsite: Locator;
  readonly associateWebsiteLocUlEnglishWalsUSPage: Locator;
  readonly associateWebsiteLocBtnBecomeAssociate: Locator;
  readonly associateWebsiteLocLblHomeBusinessSupplement: Locator;
  readonly associateWebsiteLocBtnNext: Locator;
  readonly associateWebsiteLocBtnNextWithForm: Locator;
  readonly associateWebsiteLocBtnContinueWithForm: Locator;
  readonly associateWebsiteLocBtnContinueCart: Locator;
  readonly associateWebsiteLocBtnContinueIDShield: Locator;
  readonly associateWebsiteLocBtnContinueSmallBiz: Locator;
  readonly associateWebsiteLocBtnContinueToSuppsSmallBiz: Locator;
  readonly associateWebsiteLocBtnBizModalCheckout: Locator;
  readonly associateWebsiteLocBtnCommercialDrCheckout: Locator;
  readonly associateWebsiteLocChkBIndividual: Locator;
  readonly associateWebsiteLocChkBNo: Locator;
  readonly associateWebsiteLocBtnContinue: Locator;
  readonly associateWebsiteLocBtnContinuePersonalInfoForm;
  readonly associateWebsiteLocBtnCheckout: Locator;
  readonly associateWebsiteLocTtlContactInfo: Locator;
  readonly associateWebsiteLocTxtEmail: Locator;
  readonly associateWebsiteLocTxtFirstName: Locator;
  readonly associateWebsiteLocTxtLastName: Locator;
  readonly associateWebsiteLocTxtAddress: Locator;
  readonly associateWebsiteLocTxtCity: Locator;
  readonly associateWebsiteLocLblTotalPrice: Locator;
  readonly associateWebsiteLocTxtZipCode: Locator;
  readonly associateWebsiteLocLnkChange: Locator;
  readonly associateWebsiteLocSlctRegion: Locator;
  readonly associateWebsiteLocBtnUpdateState: Locator;
  readonly associateWebsiteLocFrmPayment: FrameLocator;
  readonly associateWebsiteLocfrmPaymentsParent: FrameLocator;
  readonly associateWebsiteLocfrmPayments: FrameLocator;
  readonly associateWebsiteLocTxtPhoneNumber: Locator;
  readonly associateWebsiteLocSlctPhoneType: Locator;
  readonly associateWebsiteLocTxtCorporationName: Locator;
  readonly associateWebsiteLocTxtCorporationTaxId: Locator;
  readonly associateWebsiteLocTxtDateOfBirth: Locator;
  readonly associateWebsiteLocTxtDependentFirstName: Locator;
  readonly associateWebsiteLocTxtDependentLastName: Locator;
  readonly associateWebsiteLocTxtDependentBDay: Locator;
  readonly associateWebsiteLocTxtDependentEmail: Locator;
  readonly associateWebsiteLocSlctFamilyMemberType: Locator;
  readonly associateWebsiteLocTxtSSN: Locator;
  readonly associateWebsiteLocBtnContactInfoContinue: Locator;
  readonly associateWebsiteLocRdoBtnUsername: Locator;
  readonly associateWebsiteLocRdoBBusiness: Locator;
  readonly associateWebsiteLocTxtPassword: Locator;
  readonly associateWebsiteLocTxtConfirmPassword: Locator;
  readonly associateWebsiteLocRdoCheckByMail: Locator;
  readonly associateWebsiteLocTxtNameOnCard: Locator;
  readonly associateWebsiteLocTxtCardNumber: Locator;
  readonly associateWebsiteLocTxtExpDate: Locator;
  readonly associateWebsiteLocTxtCVV: Locator;
  readonly associateWebsiteLocBtnPurchase: Locator;
  readonly associateWebsiteLocLblWelcome: Locator;
  readonly associateWebsiteLocRdoBankDraft: Locator;
  readonly associateWebsiteLocTxtNameOfAccountHolder: Locator;
  readonly associateWebsiteLocTxtRoutingNumber: Locator;
  readonly associateWebsiteLocTxtAccountNumber: Locator;
  readonly associateWebsiteLocRdoCheckingAccount: Locator;
  // wearelegalshield locators
  readonly weAreLegalShieldLocInputAssociateSearch: Locator;
  readonly weAreLegalShieldLocBtnAssociateSearch: Locator;
  //readonly weAreLegalShieldLocLabelSalesAssociate: Locator;
  readonly weAreLegalShieldLocMsgAssociateNotFound: Locator;
  readonly weAreLegalShieldLocBannerHeader: Locator;
  readonly WeAreLegalShieldHeaderLocProfilesOfSuccessLink: Locator;
  readonly WeAreLegalShieldHeaderLocExecutiveTeamLink: Locator;
  readonly weAreLegalShieldFooterLocTermsOfServiceLink: Locator;
  readonly weAreLegalShieldFooterLocPrivacyPolicyLink: Locator;
  readonly weAreLegalShieldFooterLocCodeOfEthicsLink: Locator;
  readonly weAreLegalShieldFooterLocLegalShieldSOC3Link: Locator;
  readonly weAreLegalShieldOpportunitySuccessLocSearchInput: Locator;
  readonly weAreLegalShieldOpportunitySuccessLocSearchButton: Locator;
  readonly weAreLegalShieldOpportunitySuccessLOCNoResultsFoundMessage: Locator;
  readonly weAreLegalShieldExecutiveTeamLocDisplayedBioContainer: Locator;
  readonly weAreLegalShieldExecutiveTeamLocDisplayedBioContainerCloseButton: Locator;

  readonly associateWebsiteLocLogo: Locator;
  readonly associateWebsiteLocRdSmallBiz: Locator;
  /**
   * @param {Page} page
   * @memberof WalsLocatorPage
   */
  constructor(page: Page) {
    this.page = page;
    this.associateWebsiteLocFrmPayment = this.page.frameLocator('iframe.ng-star-inserted');
    this.associateWebsiteLocfrmPaymentsParent = this.page.frameLocator('iframe.ng-star-inserted');
    this.associateWebsiteLocfrmPayments = this.associateWebsiteLocfrmPaymentsParent.frameLocator('iframe.us-payment-form');
    this.associateResultLocViewWebsite = this.page.locator('div.profile-link a');
    this.associateResultLocViewWebsite = this.page.locator('');
    this.associateWebsiteLocUlEnglishWalsUSPage = this.page.locator('');
    this.associateWebsiteLocBtnBecomeAssociate = this.page.locator(
      'div#plans-menu-filters ul.menu-dropdown.dropdown:not(.plans-menu-filters-mobile) > .become-associate-plans a'
    );
    this.associateWebsiteLocLblHomeBusinessSupplement = this.page.locator('label:has-text("Add Home Business Supplement")');
    this.associateWebsiteLocLblTotalPrice = this.page.locator('a#minicart_btn_checkout span');
    this.associateWebsiteLocBtnNext = this.page.locator('#builder_modal_checkout_btn_continue');
    this.associateWebsiteLocBtnNextWithForm = this.page.locator('#builder_modal_checkout_btn_withform');
    this.associateWebsiteLocBtnContinueWithForm = this.page.locator('#builder_modal_checkout_btn');
    this.associateWebsiteLocBtnContinueCart = this.page.locator('#legal_modal_checkout_btn.close_modal_btn');
    this.associateWebsiteLocBtnContinueIDShield = this.page.locator('#idshield_modal_checkout_btn');
    this.associateWebsiteLocBtnContinueSmallBiz = this.page.locator('a.close_modal_continue.js-continue-to-questions');
    this.associateWebsiteLocBtnContinueToSuppsSmallBiz = this.page.locator('a.js-continue-to-supps.close_modal_continue');
    this.associateWebsiteLocBtnBizModalCheckout = this.page.locator('#biz_modal_checkout_btn');
    this.associateWebsiteLocBtnCommercialDrCheckout = this.page.locator('#commercial_modal_checkout_btn');
    this.associateWebsiteCartSummaryLocOneTimeFees = this.page.locator('div#fee-total p >> nth=1');
    this.associateWebsiteCartSummaryLocTotalDueToday = this.page.locator('div#today-total p >> nth=1');
    this.associateWebsiteCreateUserLocWrapper = this.page.locator('div.component-wrapper');
    this.associateWebsiteCreateUserLocRdoBtnUsername = this.page.locator('div.mat-radio-container >> nth=0');
    this.associateWebsiteCreateUserLocTxtUsername = this.page.locator('//div[contains(text(),"test")] >> nth=0');
    this.associateWebsiteCreateUserLocLblUsername = this.page.locator('//*[@class="mat-radio-button mat-accent ng-star-inserted"][1]/label/div[2]');
    this.associateWebsiteLocChkBIndividual = this.page.locator('#individual-bdl');
    this.associateWebsiteLocChkBNo = this.page.locator('#no');
    this.associateWebsiteLocBtnContinue = this.page.locator('#associate-startup_modal_checkout_btn');
    this.associateWebsiteLocBtnContinuePersonalInfoForm = this.page.locator('button.shared-button.small');
    this.associateWebsiteLocBtnCheckout = this.page.locator('a#minicart_btn_checkout');
    this.associateWebsiteLocTxtCorporationName = this.page.locator('#corporation-name');
    this.associateWebsiteLocTxtCorporationTaxId = this.page.locator('#corporation-tax-id');
    this.associateWebsiteLocTtlContactInfo = this.page.locator('//h2[contains(text(),"Contact information")]');
    this.associateWebsiteLocTxtEmail = this.page.locator('#email-start-form');
    this.associateWebsiteLocTxtFirstName = this.page.locator('input[name="first-name"]');
    this.associateWebsiteLocTxtLastName = this.page.locator('input[name="last-name"]');
    this.associateWebsiteLocTxtAddress = this.page.locator('#address');
    this.associateWebsiteLocTxtCity = this.page.locator('#city');
    this.associateWebsiteLocTxtZipCode = this.page.locator('input[name="zipcode"]');
    this.associateWebsiteLocLnkChange = this.page.locator('a.open-modal-lgs-geolocate.button-region-state.la');
    this.associateWebsiteLocSlctRegion = this.page.locator('select[name="state_select"]');
    this.associateWebsiteLocBtnUpdateState = this.page.locator('#edit-submit--3');
    this.associateWebsiteLocTxtPhoneNumber = this.page.locator('#phone-number');
    this.associateWebsiteLocSlctPhoneType = this.page.locator('div.mat-select-arrow');
    this.associateWebsiteLocTxtDateOfBirth = this.page.locator('#date-birth');
    this.associateWebsiteLocTxtDependentFirstName = this.page.locator('#first-name-dependant-form');
    this.associateWebsiteLocTxtDependentLastName = this.page.locator('#last-name-dependant-form');
    this.associateWebsiteLocTxtDependentBDay = this.page.locator('#date-birth-dependant-form');
    this.associateWebsiteLocTxtDependentEmail = this.page.locator('#dependant-email-start-form');
    this.associateWebsiteLocSlctFamilyMemberType = this.page.locator('//span[contains(text(),"Family Member Type")]');
    this.associateWebsiteLocTxtSSN = this.page.locator('#s-security');
    this.associateWebsiteLocBtnContactInfoContinue = this.page.locator('button.shared-button.small');
    this.associateWebsiteLocRdoBtnUsername = this.page.locator('.mat-radio-container');
    this.associateWebsiteLocRdoBBusiness = this.page.locator('input#business');
    this.associateWebsiteLocTxtPassword = this.page.locator('#password');
    this.associateWebsiteLocTxtConfirmPassword = this.page.locator('#confirm-password');
    this.associateWebsiteLocRdoCheckByMail = this.page.locator('//mat-radio-button[@id="mat-radio-13"]/label/div[1]');
    this.associateWebsiteLocTxtNameOnCard = this.associateWebsiteLocfrmPayments.locator('#cardholder_name');
    this.associateWebsiteLocTxtCardNumber = this.associateWebsiteLocfrmPayments.locator('#card_number');
    this.associateWebsiteLocTxtExpDate = this.associateWebsiteLocFrmPayment.locator('#expiration_date');
    this.associateWebsiteLocTxtCVV = this.associateWebsiteLocfrmPayments.locator('#security_code');
    this.associateWebsiteLocBtnPurchase = this.associateWebsiteLocFrmPayment.locator('#savecc');
    this.associateWebsiteLocLblWelcome = this.page.locator(
      '//div[@class="confirmation-col col-sm-12 col-tb-12 col-dk-6 confirmation-wrapper wals-content ng-star-inserted"]/h1'
    );
    this.associateWebsiteLocRdoBankDraft = this.associateWebsiteLocfrmPayments.locator('form#cc_form div#app_bdform div div input#bd_payment_method');
    this.associateWebsiteLocTxtNameOfAccountHolder = this.associateWebsiteLocfrmPayments.locator('#accountholder_name');
    this.associateWebsiteLocTxtRoutingNumber = this.associateWebsiteLocfrmPayments.locator('#routing_number');
    this.associateWebsiteLocTxtAccountNumber = this.associateWebsiteLocfrmPayments.locator('#account_number');
    this.associateWebsiteLocRdoCheckingAccount = this.associateWebsiteLocfrmPayments.locator('//input[ @value="Checking"]');
    this.weAreLegalShieldLocInputAssociateSearch = this.page.locator('#edit-search');
    this.weAreLegalShieldLocBtnAssociateSearch = this.page.locator('div.search-form.form--inline.clearfix input#edit-submit');
    // this.weAreLegalShieldLocLabelSalesAssociate = this.page.locator('//div[contains(text(), "Find a Sales Associate")]');
    //this.weAreLegalShieldLocLabelSalesAssociate = this.WeAreLegalShieldLocLabelSalesAssociate('Hello');
    this.weAreLegalShieldLocMsgAssociateNotFound = this.page.locator('//div[contains(text(), "Sorry, we did not find any results for")]');
    this.weAreLegalShieldLocBannerHeader = this.page.locator('//h3[contains(text(), "Business Builder")]');
    this.WeAreLegalShieldHeaderLocProfilesOfSuccessLink = this.page.locator('//a[contains(@href,"/opportunity/success")]');
    this.WeAreLegalShieldHeaderLocExecutiveTeamLink = this.page.locator('//a[contains(@href,"/executive-team")]');
    this.weAreLegalShieldFooterLocTermsOfServiceLink = this.page.locator('//a[contains(@href,"/terms-service")]');
    this.weAreLegalShieldFooterLocPrivacyPolicyLink = this.page.locator('//a[contains(@href,"/privacy-policy")]');
    this.weAreLegalShieldFooterLocCodeOfEthicsLink = this.page.locator('//a[contains(@href,"/code-ethics")]');
    this.weAreLegalShieldFooterLocLegalShieldSOC3Link = this.page.locator('//a[contains(@href,"LegalShield_SOC_3_Issued_Report.pdf")]');
    this.associateWebsiteLocLogo = this.page.locator('div#block-headerlogowalsus img.image-style-large');
    this.associateWebsiteLocRdSmallBiz = this.page.locator('#no-traded-label');
    this.weAreLegalShieldOpportunitySuccessLocSearchInput = this.page.locator('#edit-search-api-fulltext');
    this.weAreLegalShieldOpportunitySuccessLocSearchButton = this.page.locator('#edit-submit-profiles-of-success-search');
    this.weAreLegalShieldOpportunitySuccessLOCNoResultsFoundMessage = this.page.locator('//div[contains(@class,"view-empty")]');
    this.weAreLegalShieldExecutiveTeamLocDisplayedBioContainer = this.page.locator(
      '//div[contains(@id,"bio-complete") and not(contains(@class,"mfp-hide"))]'
    );
    this.weAreLegalShieldExecutiveTeamLocDisplayedBioContainerCloseButton = this.page.locator(
      '//div[contains(@id,"bio-complete") and not(contains(@class,"mfp-hide"))]//button'
    );
  }
  /**
   * @param {string} txt
   * @memberof WalsLocatorPage
   */
  WeAreLegalShieldLocContainsText = async (txt: string): Promise<Locator> => {
    return this.page.locator(`//*[contains(text(), "${txt}")]`);
  };

  /**
   * @param {string} url
   * @memberof WalsLocatorPage
   */
  WeAreLegalShieldAssertUrl = async (url: string): Promise<void> => {
    expect(this.page.url()).toEqual(url);
  };

  /**
   *
   *
   * @param {string} substring
   * @memberof WalsLocatorPage
   */
  WeAreLegalShieldAssertUrlContains = async (substring: string): Promise<void> => {
    await expect(this.page).toHaveURL(new RegExp(substring));
  };

  /**
   *
   *
   * @param {string} classParameter
   * @param {number} getAPlanNum
   * @memberof WalsLocatorPage
   */
  associateWebsiteLocBtnGetAPlan = async (classParameter: string, getAPlanNum: number): Promise<Locator> => {
    return this.page.locator(`a.subscriber-${classParameter} >> nth=${getAPlanNum}`);
  };

  /**
   * @param {number} index
   * @memberof WalsLocatorPage
   */
  associateWebsiteRdBtn = async (index: number): Promise<Locator> => {
    return this.page.locator(`*[type="radio"] >> nth=${index}`);
  };

  /**
   * @param {string} productName
   * @param {string} className
   * @param {number} index
   * @memberof WalsLocatorPage
   */
  associateWebsiteLocCartItem = async (productName: string, className: string, index: number): Promise<Locator> => {
    return this.page.locator(`[data-plan-short-name=${productName}] div.${className} >> nth=${index}`);
  };

  /**
   * @param {string} className
   * @param {string} assert
   * @memberof WalsLocatorPage
   */
  associateWebsiteLocCartItemSmallBiz = async (className: string, assert: string): Promise<Locator> => {
    return this.page.locator(`.detail_plan.${className} .${assert}`);
  };

  /**
   * @param {string} productName
   * @param {number} index
   * @memberof WalsLocatorPage
   */
  associateWebsiteLocCartItemLayoverName = async (productName: string, index: number): Promise<Locator> => {
    return this.page.locator(`[data-rider-short-name=${productName}] div.field--name--field-heading >> nth=${index}`);
  };

  /**
   * @param {string} productName
   * @memberof WalsLocatorPage
   */
  associateWebsiteLocCartItemLayoverPrice = async (productName: string): Promise<Locator> => {
    return this.page.locator(`[data-rider-short-name=${productName}] div.price span`);
  };

  /**
   * @param {string} buttonName
   * @param {number} index
   * @memberof WalsLocatorPage
   */
  associateWebsiteLocCTAButton = async (buttonName: string, index: number): Promise<Locator> => {
    return this.page.locator(`a[href="${buttonName}"] >> nth=${index}`);
  };

  /**
   * @param {string} idName
   * @memberof WalsLocatorPage
   */
  associateWebsiteLocCoverageLvlOpt = async (idName?: string): Promise<Locator> => {
    return this.page.locator(`#plan-text-link-${idName}`);
  };

  /**
   * @param {string} idName
   * @memberof WalsLocatorPage
   */
  associateWebsiteLocSmallBizOpt = async (idName?: string): Promise<Locator> => {
    return this.page.locator(`#plan-container-${idName}`);
  };
}
