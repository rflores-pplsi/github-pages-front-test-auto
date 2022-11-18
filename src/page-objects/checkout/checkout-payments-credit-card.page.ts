import { CheckoutPaymentsPage } from './checkout-payments.page';

// ========================== Selectors ==================================
const TXT_CARD_NUMBER = '#card_number';
const TXT_EXPIRATION_DATE = '#expiration_date';
const TXT_CARDHOLDER_NAME = '[placeholder="Name on Card"]';
const TXT_SECURITY_CODE = 'input[name="security_code"]';
const TXT_POSTAL_CODE = '[placeholder="Billing Postal Code"]';
const BTN_CREDIT_CARD_PURCHASE = '#savecc';
const TXT_WELCOME_TO_LEGALSHIELD_FAMILY = 'h1.lsux-heading.confirmation-title.lsux-heading--t28';
// const conPlans =
//   "//div[@class='lsux-row half children2 content-row mb-4 mt-4 first-plan']";
const P_PLANS = "//div[@class='lsux-row half children2 content-row mb-4 mt-4 first-plan']/div/div/div/p";
const P_PLAN_PRICE = "//div[@class='lsux-row half children2 content-row mb-4 mt-4 first-plan']/div[@class='lsux-col pr-0 right-label-col']/div/p";
const TXT_TOTAL_LABEL = "//p[contains(text(),'Monthly Total:')]";
const TXT_TOTAL_PRICE_LABEL = "//div[@class='lsux-row eight-four children2 footer-row mb-0 py-4']/div[@class='lsux-col pr-0 right-label-col']/div/p";

// create instance of Page

/**
 * @export
 * @class AccountPaymentsBankDraftPage
 */
export class CheckoutPaymentsCreditCardPage extends CheckoutPaymentsPage {
  // ========================== Process Methods ============================
  fillCreditCardForm = async (): Promise<void> => {
    console.log(' - checkoutPaymentPage.fillCreditCardForm');
    // Fillout the Credit Card form
    await this.fillCreditCardNumberTxt('4444333322221111');
    await this.page.keyboard.press('Tab');
    await this.fillExpirationDateTxt('01/23');
    await this.page.keyboard.press('Tab');
    await this.fillSecurityCodeTxt('111');
    await this.page.keyboard.press('Tab');
    await this.page.keyboard.press('Tab');
    await this.fillCardholderNameTxt('Automation Tester');
    await this.page.keyboard.press('Tab');
    await this.fillPostalCodeTxt('20147');
    await this.page.keyboard.press('Tab');
    await this.clickCreditCardPurchaseBtn();
  };
  fillOrderSummaryPlanValue = async (): Promise<string> => {
    console.log(' - checkoutPaymentBankDraftPage.fillOrderSummarypPlanValue');
    // Fillout the Bank Draft form
    return this.page.locator(P_PLANS).innerText();
  };
  fillOrderSummaryPlanPriceValue = async (): Promise<string> => {
    console.log(' - checkoutPaymentBankDraftPage.fillOrderSummarypPlanPriceValue');
    // Fillout the Bank Draft form
    return this.page.locator(P_PLAN_PRICE).innerText();
  };
  fillOrderSummaryTxtTotalLabelValue = async (): Promise<string> => {
    console.log(' - checkoutPaymentBankDraftPage.fillOrderSummarytxtTotalLabelValue');
    // Fillout the Bank Draft form
    return this.page.locator(TXT_TOTAL_LABEL).innerText();
  };
  fillOrderSummaryTxtTotalPriceLabelValue = async (): Promise<string> => {
    console.log(' - checkoutPaymentBankDraftPage.fillOrderSummarytxtTotalPriceLabelValue');
    // Fillout the Bank Draft form
    return this.page.locator(TXT_TOTAL_PRICE_LABEL).innerText();
  };
  fillCreditCardFormForCanada = async (): Promise<void> => {
    console.log(' - checkoutPaymentPage.fillCreditCardFormForCanada');
    // Fillout the Credit Card form
    await this.fillCreditCardNumberTxt('4444333322221111');
    await this.page.keyboard.press('Tab');
    await this.fillExpirationDateTxt('01/23');
    await this.page.keyboard.press('Tab');
    await this.fillSecurityCodeTxt('111');
    await this.page.keyboard.press('Tab');
    await this.page.keyboard.press('Tab');
    await this.fillCardholderNameTxt('Automation Tester');
    await this.page.keyboard.press('Tab');
    await this.fillPostalCodeTxt('L2G3V9');
    await this.page.keyboard.press('Tab');
    await this.clickCreditCardPurchaseBtn();
  };
  // ========================== Navigate Methods ===========================
  navigateToPaymentsCreditCardPage = async (state: string): Promise<void> => {
    console.log(' - checkoutPaymentPage.navigateToPaymentsCreditCardPage');
    await this.navigateToPaymentsPage(state);
    // await this.clickCreditCardBtn();
    // await this.clickCreditCardBtn();
  };
  // ========================== fill Text Box Methods ======================
  // Fill  Credit Card Number Method
  fillCreditCardNumberTxt = async (number: string): Promise<void> => {
    const frmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    console.log(' i am here inside fillCreditCardAccountNumberTxt');
    // Fill  Account Number
    const txtCreditCardNumber = await frmPayment.locator(TXT_CARD_NUMBER);
    await txtCreditCardNumber.type(number);
    // await this.fillTextBox(txtAccountNumber, account);
  };
  // Fill  Expiration Date Method
  fillExpirationDateTxt = async (expdate: string): Promise<void> => {
    console.log(' i am here inside fillExpirationDateTxt');
    // Switch to frame
    const frmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frmPayment != null) {
      // Fill  Expiration Date
      const txtExpDateTxt = frmPayment.locator(TXT_EXPIRATION_DATE);
      await txtExpDateTxt.type(expdate);
    } else throw new Error('No such frame');
  };
  fillSecurityCodeTxt = async (code: string): Promise<void> => {
    console.log(' i am here inside fillSecurityCodeTxt');
    // Switch to frame
    const frmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frmPayment != null) {
      // Fill  Security Code
      const txtExpDateTxt = frmPayment.locator(TXT_SECURITY_CODE);
      await txtExpDateTxt.type(code);
    } else throw new Error('No such frame');
  };
  fillCardholderNameTxt = async (credicardholdrname: string): Promise<void> => {
    console.log(' i am here inside fillCardholderNameTxt');
    // Switch to frame
    const frmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frmPayment != null) {
      // Fill  Credit Card Holder Name
      const txtCreditCardHolderNameTxt = frmPayment.locator(TXT_CARDHOLDER_NAME);
      await txtCreditCardHolderNameTxt.type(credicardholdrname);
      // await this.fillTextBox(txtAccountHolderName, accountholdrname);
    } else throw new Error('No such frame');
  };
  fillPostalCodeTxt = async (postalcode: string): Promise<void> => {
    console.log(' i am here inside fillPostalCodeTxt');
    // Switch to frame
    const frmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frmPayment != null) {
      // Fill  Postal Code
      const txtCreditCardHolderNameTxt = frmPayment.locator(TXT_POSTAL_CODE);
      await txtCreditCardHolderNameTxt.type(postalcode);
    } else throw new Error('No such frame');
  };

  // ========================== Click Methods ==============================
  clickCreditCardPurchaseBtn = async (): Promise<void> => {
    console.log(' i am here inside clickPurchaseBtn');
    // Switch to frame
    const frmCCPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frmCCPayment != null) {
      // Click on Purchase button
      await frmCCPayment.locator(BTN_CREDIT_CARD_PURCHASE).click({ force: true });
    } else throw new Error('No such frame');
  };
  // ========================== Assertion Methods ==========================
  assertWelcomeToLegalShieldFamilyPage = async (): Promise<void> => {
    console.log(' - checkoutPaymentPage.assertWelcomeToLegalshiledFamilyPage');
    const welcome = await this.page.waitForSelector(TXT_WELCOME_TO_LEGALSHIELD_FAMILY);
    console.log(welcome.innerText());
    await this.assertElementContainsText(TXT_WELCOME_TO_LEGALSHIELD_FAMILY, 'Welcome!');
  };
}
