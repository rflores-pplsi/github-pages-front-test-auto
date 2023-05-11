import { BrowserContext, FrameLocator, Locator, Page } from '@playwright/test';
// import { CheckoutOrderSummaryComponent } from './checkout-order-summary.component';
import { CommonCheckoutService, CommonLoginService } from '@legalshield/frontend-automation-commons';
import { LoginLocatorsPage } from '../login/login-locators.page';
import { OrderSummary, OrderSummaryWithoutCosts, OrderSummaryWithoutTiers } from './checkout.helpers';
// import { CheckoutPaymentsPage } from './checkout-payments.page';

/**
 * @export
 * @class CheckoutLocatorsPage
 */
export class CheckoutLocatorsPage {
  // ========================== Instantiate Classes ========================
  // readonly checkoutOrderSummaryComponent: CheckoutOrderSummaryComponent;

  // ========================== Selectors ==================================
  readonly context: BrowserContext;
  protected page: Page;
  // readonly checkoutPersonalInfoPage: CheckoutPersonalInfoPage;
  readonly commonLoginService: CommonLoginService;
  readonly commonCheckoutService: CommonCheckoutService;
  readonly loginLocatorsPage: LoginLocatorsPage;
  readonly orderSummary: OrderSummary;
  readonly orderSummaryWithoutTiers: OrderSummaryWithoutTiers;
  readonly orderSummaryWithoutCosts: OrderSummaryWithoutCosts;
  // readonly checkoutPaymentsPage: CheckoutPaymentsPage;
  readonly bankDraftLocBtnBDPurchase: Locator;
  readonly bankDraftLocTxtAccountHolderName: Locator;
  readonly bankDraftLocTxtAccountNumber: Locator;
  readonly bankDraftLocTxtInstitutionNumber: Locator;
  readonly bankDraftLocTxtRoutingNumber: Locator;
  readonly bankDraftLocTxtTransitNumber: Locator;
  readonly confirmationLocConMembershipWrapper: Locator;
  readonly confirmationLocLblMemberNumber: Locator;
  readonly confirmationLocPPlanPrice: Locator;
  readonly confirmationLocTxtTotalLabel: Locator;
  readonly confirmationLocTxtTotalPriceLabel: Locator;
  readonly confirmationLocTxtWelcomeToLegalshiledFamily: Locator;
  readonly creditCardLocBtnCCPurchase: Locator;
  readonly creditCardLocTtnCreditCardPurchase: Locator;
  readonly creditCardLocTxtBillingPostalCode: Locator;
  readonly creditCardLocTxtCardholderName: Locator;
  readonly creditCardLocTxtCardNumber: Locator;
  readonly creditCardLocTxtExpirationDate: Locator;
  readonly creditCardLocTxtSecurityCode: Locator;
  readonly OrderSummaryLocBtnCompleteEnrollment: Locator;
  readonly OrderSummaryLocChkBAgreement: Locator;
  readonly OrderSummaryLocLblMemberNumber: Locator;
  readonly OrderSummaryLocTxtDisclaimer: Locator;
  readonly OrderSummaryLocTxtTermsOfServiceLanguage: Locator;
  readonly OrderSummaryLocLnkTermsOfService: Locator;
  readonly OrderSummaryLocConOrderSummary: Locator;
  readonly OrderSummaryLocLnkEditOrder: Locator;
  readonly OrderSummaryLocImgHideOrderSummaryChevron: Locator;
  readonly OrderSummaryLocImgShowOrderSummaryChevron: Locator;
  readonly OrderSummaryLocTxtPlanNames: Locator;
  readonly OrderSummaryLocTxtTierNames: Locator;
  readonly OrderSummaryLocCocOrderSummary: Locator;
  readonly OrderSummaryLocTxtSupplementNames: Locator;
  readonly OrderSummaryLocTxtSupplementCosts: Locator;
  readonly OrderSummaryLocTxtPlanCosts: Locator;
  readonly OrderSummaryLocTxtTermTotalLabel: Locator;
  readonly OrderSummaryLocTxtMonthlyTotalLabel: Locator;
  readonly OrderSummaryLocTxtMonthlyTotalAmount: Locator;
  readonly OrderSummaryLocTxtAnnualTotalLabel: Locator;
  readonly OrderSummaryLocTxtAnnualTotalAmount: Locator;
  readonly OrderSummaryLocTxtTermTotalAmount: Locator;
  readonly OrderSummaryLocTxtTotalDueTodayLabel: Locator;
  readonly OrderSummaryLocTxtTotalDueTodayAmount: Locator;
  readonly OrderSummaryLocTxtPayPeriodTotalAmount: Locator;
  readonly paymentsLocBtnBankDraft: Locator;
  readonly paymentsLocBtnCompleteEnrollment: Locator;
  readonly paymentsLocBtnCreditCard: Locator;
  readonly paymentsLocChkAgreement: Locator;
  readonly paymentsLocConOrderSummary: Locator;
  readonly paymentsLocFrmPayment: FrameLocator;
  readonly paymentsLocLnkTermsOfService: Locator;
  readonly paymentsLocTxtBankDraftTermsOfServiceAgreement: Locator;
  readonly paymentsLocTxtDisclaimer: Locator;
  readonly paymentsLocTxtHowWouldYouLikeToPay: Locator;
  readonly paymentsLocTxtTermsOfServiceLanguage: Locator;
  readonly personalInfoLocBtnSaveAndContinue: Locator;
  readonly personalInfoLocTxtCity: Locator;
  readonly personalInfoLocTxtHomeAddress: Locator;
  readonly personalInfoLocTxtPostalCode: Locator;

  /**
   * @param {BrowserContext} context
   * @param {Page} page
   * @class CheckoutLocatorsPage
   */
  constructor(context: BrowserContext, page: Page) {
    this.context = context;
    this.page = page;
    this.paymentsLocFrmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    // this.checkoutOrderSummaryComponent = new CheckoutOrderSummaryComponent(page);
    // this.checkoutPersonalInfoPage = new CheckoutPersonalInfoPage(page, lineOfBusiness, planSupp);
    this.commonLoginService = new CommonLoginService(page);
    this.commonCheckoutService = new CommonCheckoutService(page);
    this.loginLocatorsPage = new LoginLocatorsPage(context, page);
    // this.checkoutPaymentsPage = new CheckoutPaymentsPage(page, lineOfBusiness, planSupp);
    this.confirmationLocTxtWelcomeToLegalshiledFamily = this.page.locator('h1.lsux-heading.confirmation-title.lsux-heading--t28');
    this.confirmationLocLblMemberNumber = this.page.locator('//h3[contains(@class,"member-number") and contains(.,"Member number")]');
    this.confirmationLocPPlanPrice = this.page.locator(
      "//div[@class='lsux-row half children2 content-row mb-4 mt-4 first-plan']/div[@class='lsux-col pr-0 right-label-col']/div/p"
    );
    this.confirmationLocTxtTotalLabel = this.page.locator("//p[contains(text(),'Monthly Total:')]");
    this.confirmationLocTxtTotalPriceLabel = this.page.locator(
      "//div[@class='lsux-row eight-four children2 footer-row mb-0 py-4']/div[@class='lsux-col pr-0 right-label-col']/div/p"
    );
    this.confirmationLocConMembershipWrapper = this.page.locator('//div[contains(@class,"membership-wrapper")]');
    this.creditCardLocBtnCCPurchase = this.paymentsLocFrmPayment.locator('#savecc');
    this.creditCardLocTxtCardNumber = this.paymentsLocFrmPayment.locator('#card_number');
    this.creditCardLocTxtExpirationDate = this.paymentsLocFrmPayment.locator('#expiration_date');
    this.creditCardLocTxtSecurityCode = this.paymentsLocFrmPayment.locator('input[name="security_code"]');
    this.creditCardLocTxtCardholderName = this.paymentsLocFrmPayment.locator('[placeholder="Name on Card"]');
    this.creditCardLocTxtBillingPostalCode = this.paymentsLocFrmPayment.locator('[placeholder="Billing Postal Code"]');
    this.creditCardLocTtnCreditCardPurchase = this.paymentsLocFrmPayment.locator('#savecc');
    this.bankDraftLocTxtAccountNumber = this.paymentsLocFrmPayment.locator("[placeholder='Account Number']");
    this.bankDraftLocTxtRoutingNumber = this.paymentsLocFrmPayment.locator("[placeholder='Routing Number']");
    this.bankDraftLocTxtAccountHolderName = this.paymentsLocFrmPayment.locator("[placeholder='Account Holder Name']");
    this.bankDraftLocBtnBDPurchase = this.paymentsLocFrmPayment.locator('#savebd');
    this.bankDraftLocTxtTransitNumber = this.paymentsLocFrmPayment.locator("[placeholder='Transit Number']");
    this.bankDraftLocTxtInstitutionNumber = this.paymentsLocFrmPayment.locator("[placeholder='Institution Number']");
    this.orderSummary = new OrderSummary();
    this.orderSummaryWithoutTiers = new OrderSummaryWithoutTiers();
    this.orderSummaryWithoutCosts = new OrderSummaryWithoutCosts();
    this.OrderSummaryLocBtnCompleteEnrollment = this.page.locator('button:has-text("COMPLETE ENROLLMENT")');
    this.OrderSummaryLocChkBAgreement = this.page.locator('//div[contains(@class,"lsux-cb-container__cb   margin-right")]');
    this.OrderSummaryLocLblMemberNumber = this.page.locator('//h3[contains(@class,"member-number") and contains(.,"Member number")]');
    this.OrderSummaryLocTxtDisclaimer = this.page.locator('//div[contains(@class,"group-auth")]//span[string-length(text()) > 0]');
    this.OrderSummaryLocTxtTermsOfServiceLanguage = this.page.locator('//span[contains(@class,"tos-disclaimer")]');
    this.OrderSummaryLocLnkTermsOfService = this.page.locator('//a[contains(@class,"tos-link")]');
    this.OrderSummaryLocConOrderSummary = this.page.locator('//div[contains(@class,"lsux-grid order-grid")]');

    this.OrderSummaryLocLnkEditOrder = this.page.locator('button:has-text("Edit")');
    this.OrderSummaryLocImgHideOrderSummaryChevron = this.page.locator('img[alt="nav_chevron_single_up."]');
    this.OrderSummaryLocImgShowOrderSummaryChevron = this.page.locator('img[alt="nav_chevron_single_down."]');
    this.OrderSummaryLocCocOrderSummary = this.page.locator('//div[contains(@class,"order-summary")]');
    this.OrderSummaryLocTxtPlanNames = this.page.locator('//div[contains(@class,"plan-name-row")]//p[1]');
    this.OrderSummaryLocTxtTierNames = this.page.locator('//div[contains(@class,"plan-name-row")]//p//span[2]');
    this.OrderSummaryLocTxtSupplementNames = this.page.locator(
      '//div[contains(@class,"lsux-row half children2 content-row mb-4 mt-4 pb-4")]//p[not(contains(@style,"text-align: right;"))]'
    );
    this.OrderSummaryLocTxtSupplementCosts = this.page.locator(
      '//div[contains(@class,"lsux-row half children2 content-row mb-4 mt-4 pb-4")]//p[contains(@style,"text-align: right;")]'
    );
    this.OrderSummaryLocTxtPlanCosts = this.page.locator(
      '//div[contains(@class,"lsux-row half children2 content-row mb-4")]//div[contains(@class,"right-label-col")]//p'
    );
    this.OrderSummaryLocTxtTermTotalLabel = this.page.locator('//div[contains(@class,"left-label")]//p[contains(.,"Total:")]');
    this.OrderSummaryLocTxtMonthlyTotalLabel = this.page.locator('//div[contains(@class,"left-label")]//p[contains(.,"Monthly Total:")]');
    this.OrderSummaryLocTxtMonthlyTotalAmount = this.page.locator(
      '//div[contains(@class,"footer-row") and contains(.,"Monthly Total:")]//div[contains(@class,"right-label")]//p'
    );
    this.OrderSummaryLocTxtAnnualTotalLabel = this.page.locator('//div[contains(@class,"left-label")]//p[contains(.,"Annual Total:")]');
    this.OrderSummaryLocTxtAnnualTotalAmount = this.page.locator(
      '//div[contains(@class,"footer-row") and contains(.,"Annual Total:")]//div[contains(@class,"right-label")]//p'
    );
    this.OrderSummaryLocTxtTermTotalAmount = this.page.locator('//div[contains(@class,"footer-row")]//div[contains(@class,"right-label-col")]');
    this.OrderSummaryLocTxtTotalDueTodayLabel = this.page.locator('//div[contains(@class,"left-label")]//p[contains(.,"Total Due Today:")]');
    this.OrderSummaryLocTxtTotalDueTodayAmount = this.page.locator(
      '//div[contains(@class, "footer-row") and contains(., "Total Due Today")]//div[contains(@class,"right-label")]//p'
    );
    this.OrderSummaryLocTxtPayPeriodTotalAmount = this.page.locator(
      '//div[contains(@class,"footer-row") and contains(.,"Pay Period Total:")]//div[contains(@class,"right-label")]//p'
    );
    this.personalInfoLocTxtHomeAddress = this.page.locator('[name="homeAddress"]');
    this.personalInfoLocTxtCity = this.page.locator('[name="city"]');
    this.personalInfoLocTxtPostalCode = this.paymentsLocFrmPayment.locator('[name="postalCode"]');
    this.personalInfoLocBtnSaveAndContinue = this.page.locator('button:has-text("Save & Continue")');
    this.paymentsLocBtnCompleteEnrollment = this.page.locator('button:has-text("COMPLETE ENROLLMENT")');
    this.paymentsLocChkAgreement = this.page.locator('//div[contains(@class,"lsux-cb-container__cb   margin-right")]');
    this.paymentsLocTxtDisclaimer = this.page.locator('//div[contains(@class,"group-auth")]//span[string-length(text()) > 0]');
    this.paymentsLocTxtTermsOfServiceLanguage = this.page.locator('//span[contains(@class,"tos-disclaimer")]');
    this.paymentsLocLnkTermsOfService = this.paymentsLocFrmPayment.locator('#cc_form >> text=Terms of Service');
    this.paymentsLocConOrderSummary = this.page.locator('//div[contains(@class,"lsux-grid order-grid")]');
    this.paymentsLocBtnBankDraft = this.paymentsLocFrmPayment.locator('span.options.right.translate');
    this.paymentsLocTxtHowWouldYouLikeToPay = this.paymentsLocFrmPayment.locator('h1.translate.checkout-v3-h2');
    this.paymentsLocBtnBankDraft = this.paymentsLocFrmPayment.locator('span.options.right.translate');
    this.paymentsLocBtnCreditCard = this.paymentsLocFrmPayment.locator('span.options.left.translate');
    this.paymentsLocTxtBankDraftTermsOfServiceAgreement = this.paymentsLocFrmPayment.locator(
      '//form[@id="bd_form"]//span[contains(@class,"termsConditions")]'
    );
  }
}
