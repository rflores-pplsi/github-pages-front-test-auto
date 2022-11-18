import { FrameLocator, Locator, Page } from '@playwright/test';
import { CheckoutOrderSummaryComponent } from './checkout-order-summary.component';

/**
 * @export
 * @class CheckoutLocatorsPage
 */
export class CheckoutLocatorsPage {
  // ========================== Instantiate Classes ========================
  readonly checkoutOrderSummaryComponent: CheckoutOrderSummaryComponent;

  // ========================== Selectors ==================================
  protected page: Page;

  readonly txtWelcomeToLegalshiledFamily: Locator;
  readonly btnCompleteEnrollment: Locator;
  readonly chkAgreement: Locator;
  readonly lblMemberNumber: Locator;
  readonly txaDisclaimer: Locator;
  readonly txaTermsOfServiceLanguage: Locator;
  readonly lnkTermsOfService: Locator;
  readonly conOrderSummary: Locator;
  readonly txtHomeAddress: Locator;
  readonly txtCity: Locator;
  readonly txtPostalCode: Locator;
  readonly btnSaveAndContinue: Locator;
  readonly pPlanPrice: Locator;
  readonly txtTotalLabel: Locator;
  readonly txtTotalPriceLabel: Locator;
  readonly btnBankDraft: Locator;
  readonly txtAccountNumber: Locator;
  readonly txtRoutingNumber: Locator;
  readonly txtAccountHolderName: Locator;
  readonly btnPurchase: Locator;
  readonly conMembershipWrapper: Locator;
  readonly txtCardNumber: Locator;
  readonly txtExpirationDate: Locator;
  readonly txtSecurityCode: Locator;
  readonly txtCardholderName: Locator;
  readonly txtBillingPostalCode: Locator;
  readonly btnCreditCardPurchase: Locator;
  readonly txtTransitNumber: Locator;
  readonly txtInstitutionNumber: Locator;
  readonly frame: FrameLocator;
  readonly frmPayment: FrameLocator;
  readonly frmCCPayment: FrameLocator;

  /**
   * @param {Page} page
   * @class CheckoutLocatorsPage
   */
  constructor(page: Page) {
    this.page = page;
    this.checkoutOrderSummaryComponent = new CheckoutOrderSummaryComponent(page);
    this.txtWelcomeToLegalshiledFamily = this.page.locator('h1.lsux-heading.confirmation-title.lsux-heading--t28');
    this.btnCompleteEnrollment = this.page.locator('button:has-text("COMPLETE ENROLLMENT")');
    this.chkAgreement = this.page.locator('//div[contains(@class,"lsux-cb-container__cb   margin-right")]');
    this.lblMemberNumber = this.page.locator('//h3[contains(@class,"member-number") and contains(.,"Member number")]');
    this.txaDisclaimer = this.page.locator('//div[contains(@class,"group-auth")]//span[string-length(text()) > 0]');
    this.txaTermsOfServiceLanguage = this.page.locator('//span[contains(@class,"tos-disclaimer")]');
    this.lnkTermsOfService = this.page.locator('//a[contains(@class,"tos-link")]');
    this.conOrderSummary = this.page.locator('//div[contains(@class,"lsux-grid order-grid")]');
    this.txtHomeAddress = this.page.locator('[name="homeAddress"]');
    this.txtCity = this.page.locator('[name="city"]');
    this.txtPostalCode = this.page.locator('[name="postalCode"]');
    this.btnSaveAndContinue = this.page.locator('button:has-text("Save & Continue")');
    this.pPlanPrice = this.page.locator(
      "//div[@class='lsux-row half children2 content-row mb-4 mt-4 first-plan']/div[@class='lsux-col pr-0 right-label-col']/div/p"
    );
    this.txtTotalLabel = this.page.locator("//p[contains(text(),'Monthly Total:')]");
    this.txtTotalPriceLabel = this.page.locator(
      "//div[@class='lsux-row eight-four children2 footer-row mb-0 py-4']/div[@class='lsux-col pr-0 right-label-col']/div/p"
    );
    this.frame = this.page.frameLocator("//iframe[@title='payment iframe']");
    this.btnBankDraft = this.frame.locator('span.options.right.translate');
    this.frmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    this.txtAccountNumber = this.frmPayment.locator("[placeholder='Account Number']");
    this.txtRoutingNumber = this.frmPayment.locator("[placeholder='Routing Number']");
    this.txtAccountHolderName = this.frmPayment.locator("[placeholder='Account Holder Name']");
    this.btnPurchase = this.frmPayment.locator('#savebd');
    this.conMembershipWrapper = this.page.locator('//div[contains(@class,"membership-wrapper")]');
    this.txtCardNumber = this.frmPayment.locator('#card_number');
    this.txtExpirationDate = this.frmPayment.locator('#expiration_date');
    this.txtSecurityCode = this.frmPayment.locator('input[name="security_code"]');
    this.txtCardholderName = this.frmPayment.locator('[placeholder="Name on Card"]');
    this.txtBillingPostalCode = this.frmPayment.locator('[placeholder="Billing Postal Code"]');
    this.txtTransitNumber = this.frmPayment.locator("[placeholder='Transit Number']");
    this.txtInstitutionNumber = this.frmPayment.locator("[placeholder='Institution Number']");
    this.frmCCPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    this.btnCreditCardPurchase = this.frmCCPayment.locator('#savecc');
  }
}
