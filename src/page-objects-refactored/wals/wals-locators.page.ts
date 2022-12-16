import { expect, FrameLocator, Locator, Page } from '@playwright/test';

/**
 * @export
 * @class WalsLocatorPage
 */
export class WalsLocatorPage {
  // ========================== Locators ==================================
  protected page: Page;

  readonly associateResultLocViewWebsite: Locator;
  readonly associateWebsiteLocUlEnglishWalsUSPage: Locator;
  readonly associateWebsiteLocCartSummaryOneTimeFees;
  readonly associateWebsiteLocCartSummaryTotalDueToday;
  readonly associateWebsiteLocBtnGetAPlan: Locator;
  readonly associateWebsiteLocBtnBecomeAssociate: Locator;
  readonly associateWebsiteLocLblHomeBusinessSupplement: Locator;
  readonly associateWebsiteLocBtnNext: Locator;
  readonly associateWebsiteLocBtnNextWithForm: Locator;
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
  readonly associateWebsiteLocTxtDateOfBirth: Locator;
  readonly associateWebsiteLocTxtDependentFirstName: Locator;
  readonly associateWebsiteLocTxtDependentLastName: Locator;
  readonly associateWebsiteLocTxtDependentBDay: Locator;
  readonly associateWebsiteLocTxtDependentEmail: Locator;
  readonly associateWebsiteLocSlctFamilyMemberType: Locator;
  readonly associateWebsiteLocTxtSSN: Locator;
  readonly associateWebsiteLocBtnContactInfoContinue: Locator;
  readonly associateWebsiteLocRdoBtnUsername: Locator;
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
  readonly weAreLegalShieldLocInputAssociateSearch: Locator;
  readonly weAreLegalShieldLocBtnAssociateSearch: Locator;
  //readonly weAreLegalShieldLocLabelSalesAssociate: Locator;
  readonly weAreLegalShieldLocMsgAssociateNotFound: Locator;
  readonly weAreLegalShieldLocBannerHeader: Locator;
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
    this.associateWebsiteLocBtnGetAPlan = this.page.locator('a.subscriber-ASSOCSTP >> nth=1');
    this.associateWebsiteLocBtnBecomeAssociate = this.page.locator(
      'div#plans-menu-filters ul.menu-dropdown.dropdown:not(.plans-menu-filters-mobile) > .become-associate-plans a'
    );
    this.associateWebsiteLocLblHomeBusinessSupplement = this.page.locator('label:has-text("Add Home Business Supplement")');
    this.associateWebsiteLocLblTotalPrice = this.page.locator('a#minicart_btn_checkout span');
    this.associateWebsiteLocBtnNext = this.page.locator('#builder_modal_checkout_btn_continue');
    this.associateWebsiteLocBtnNextWithForm = this.page.locator('#builder_modal_checkout_btn_withform');
    this.associateWebsiteLocCartSummaryOneTimeFees = this.page.locator('div#fee-total p >> nth=1');
    this.associateWebsiteLocCartSummaryTotalDueToday = this.page.locator('div#today-total p >> nth=1');
    this.associateWebsiteLocChkBIndividual = this.page.locator('#individual-bdl');
    this.associateWebsiteLocChkBNo = this.page.locator('#no');
    this.associateWebsiteLocBtnContinue = this.page.locator('#associate-startup_modal_checkout_btn');
    this.associateWebsiteLocBtnContinuePersonalInfoForm = this.page.locator('button.shared-button.small');
    this.associateWebsiteLocBtnCheckout = this.page.locator('a#minicart_btn_checkout');
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
    this.associateWebsiteLocSlctPhoneType = this.page.locator('phone-number-form div.row .ng-tns-c9-11 .ng-tns-c23-12 .mat-select-trigger');
    this.associateWebsiteLocTxtDateOfBirth = this.page.locator('#date-birth');
    this.associateWebsiteLocTxtDependentFirstName = this.page.locator('#first-name-dependant-form');
    this.associateWebsiteLocTxtDependentLastName = this.page.locator('#last-name-dependant-form');
    this.associateWebsiteLocTxtDependentBDay = this.page.locator('#date-birth-dependant-form');
    this.associateWebsiteLocTxtDependentEmail = this.page.locator('#dependant-email-start-form');
    this.associateWebsiteLocSlctFamilyMemberType = this.page.locator('//span[contains(text(),"Family Member Type")]');
    this.associateWebsiteLocTxtSSN = this.page.locator('#s-security');
    this.associateWebsiteLocBtnContactInfoContinue = this.page.locator('button.shared-button.small');
    this.associateWebsiteLocRdoBtnUsername = this.page.locator('.mat-radio-container');
    this.associateWebsiteLocTxtPassword = this.page.locator('#password');
    this.associateWebsiteLocTxtConfirmPassword = this.page.locator('#confirm-password');
    this.associateWebsiteLocRdoCheckByMail = this.page.locator('//mat-radio-button[@id="mat-radio-13"]/label/div[1]');
    this.associateWebsiteLocTxtNameOnCard = this.page.locator('#cardholder_name');
    this.associateWebsiteLocTxtCardNumber = this.page.locator('#card_number');
    this.associateWebsiteLocTxtExpDate = this.page.locator('#expiration_date');
    this.associateWebsiteLocTxtCVV = this.page.locator('#security_code');
    this.associateWebsiteLocBtnPurchase = this.page.locator('#savecc');
    this.associateWebsiteLocLblWelcome = this.page.locator(
      '//div[@class="confirmation-col col-sm-12 col-tb-12 col-dk-6 confirmation-wrapper wals-content ng-star-inserted"]/h1'
    );
    this.associateWebsiteLocRdoBankDraft = this.associateWebsiteLocfrmPayments.locator('form#cc_form div#app_bdform div div input#bd_payment_method');
    this.associateWebsiteLocTxtNameOfAccountHolder = this.page.locator('#accountholder_name');
    this.associateWebsiteLocTxtRoutingNumber = this.page.locator('#routing_number');
    this.associateWebsiteLocTxtAccountNumber = this.page.locator('#account_number');
    this.associateWebsiteLocRdoCheckingAccount = this.associateWebsiteLocfrmPayments.locator('//input[ @value="Checking"]');
    this.weAreLegalShieldLocInputAssociateSearch = this.page.locator('#edit-search');
    this.weAreLegalShieldLocBtnAssociateSearch = this.page.locator('div.search-form.form--inline.clearfix input#edit-submit');
    // this.weAreLegalShieldLocLabelSalesAssociate = this.page.locator('//div[contains(text(), "Find a Sales Associate")]');
    //this.weAreLegalShieldLocLabelSalesAssociate = this.WeAreLegalShieldLocLabelSalesAssociate('Hello');
    this.weAreLegalShieldLocMsgAssociateNotFound = this.page.locator('//div[contains(text(), "Sorry, we did not find any results for")]');
    this.weAreLegalShieldLocBannerHeader = this.page.locator('//h3[contains(text(), "Business Builder")]');
  }
  /**
   * @param {string} txt
   * @memberof WalsLocatorPage
   */
  WeAreLegalShieldLocContainsText = async (txt: string): Promise<Locator> => {
    return this.page.locator(`//div[contains(text(), "${txt}")]`);
  };
  // /**
  //  * @param {string} txt
  //  * @memberof WalsLocatorPage
  //  */
  // WeAreLegalShieldLocContainsText = async (txt: string): Promise<Locator> => {
  //   return this.page.locator(`//div[contains(text(), "${txt}")]`);
  // };
  /**
   * @param {string} url
   * @memberof WalsLocatorPage
   */
  WeAreLegalShieldAssertUrl = async (url: string): Promise<void> => {
    expect(this.page.url()).toEqual(url);
  };
}
