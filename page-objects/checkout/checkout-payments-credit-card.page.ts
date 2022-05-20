/* eslint-disable valid-jsdoc */
import { CheckoutPaymentsPage } from './checkout-payments.page';

// ========================== Selectors ==================================
const txtCardNumber = '#card_number';
const txtExpirationDate = '#expiration_date';
const txtCardholderName = '[placeholder="Name on Card"]';
const txtSecurityCode = 'input[name="security_code"]';
const txtPostalCode = '[placeholder="Billing Postal Code"]';
const btnCreditCardPurchase = '#savecc';
const txtWelcomeToLegalshiledFamily = 'h1.lsux-heading.confirmation-title.lsux-heading--t28';
// const conPlans =
//   "//div[@class='lsux-row half children2 content-row mb-4 mt-4 first-plan']";
const pPlans = "//div[@class='lsux-row half children2 content-row mb-4 mt-4 first-plan']/div/div/div/p";
const pPlanPrice = "//div[@class='lsux-row half children2 content-row mb-4 mt-4 first-plan']/div[@class='lsux-col pr-0 right-label-col']/div/p";
const txtTotalLabel = "//p[contains(text(),'Monthly Total:')]";
const txtTotalPriceLabel = "//div[@class='lsux-row eight-four children2 footer-row mb-0 py-4']/div[@class='lsux-col pr-0 right-label-col']/div/p";

// create instance of Page

/**
 * @export
 * @class AccountPaymentsBankDraftPage
 */
export class CheckoutPaymentsCreditCardPage extends CheckoutPaymentsPage {
  // ========================== Process Methods ============================
  fillCreditCardForm = async () => {
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
  fillOrderSummarypPlanValue = async (): Promise<string> => {
    console.log(' - checkoutPaymentBankDraftPage.fillOrderSummarypPlanValue');
    // Fillout the Bank Draft form
    return this.page.locator(pPlans).innerText();
  };
  fillOrderSummarypPlanPriceValue = async (): Promise<string> => {
    console.log(' - checkoutPaymentBankDraftPage.fillOrderSummarypPlanPriceValue');
    // Fillout the Bank Draft form
    return this.page.locator(pPlanPrice).innerText();
  };
  fillOrderSummarytxtTotalLabelValue = async (): Promise<string> => {
    console.log(' - checkoutPaymentBankDraftPage.fillOrderSummarytxtTotalLabelValue');
    // Fillout the Bank Draft form
    return this.page.locator(txtTotalLabel).innerText();
  };
  fillOrderSummarytxtTotalPriceLabelValue = async (): Promise<string> => {
    console.log(' - checkoutPaymentBankDraftPage.fillOrderSummarytxtTotalPriceLabelValue');
    // Fillout the Bank Draft form
    return this.page.locator(txtTotalPriceLabel).innerText();
  };
  fillCreditCardFormForCa = async () => {
    console.log(' - checkoutPaymentPage.fillCreditCardFormForCa');
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
  fillCreditCardNumberTxt = async (number: string) => {
    const frmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    console.log(' i am here inside fillCreditCardAccountNumberTxt');
    // Fill  Account Number
    const txtCreditCardNumber = await frmPayment.locator(txtCardNumber);
    await txtCreditCardNumber.type(number);
    // await this.fillTextBox(txtAccountNumber, account);
  };
  // Fill  Expiration Date Method
  fillExpirationDateTxt = async (expdate: string) => {
    console.log(' i am here inside fillExpirationDateTxt');
    // Switch to frame
    const frmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frmPayment != null) {
      // Fill  Expiration Date
      const txtExpDateTxt = frmPayment.locator(txtExpirationDate);
      await txtExpDateTxt.type(expdate);
    } else throw new Error('No such frame');
  };
  fillSecurityCodeTxt = async (code: string) => {
    console.log(' i am here inside fillSecurityCodeTxt');
    // Switch to frame
    const frmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frmPayment != null) {
      // Fill  Security Code
      const txtExpDateTxt = frmPayment.locator(txtSecurityCode);
      await txtExpDateTxt.type(code);
    } else throw new Error('No such frame');
  };
  fillCardholderNameTxt = async (credicardholdrname: string) => {
    console.log(' i am here inside fillCardholderNameTxt');
    // Switch to frame
    const frmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frmPayment != null) {
      // Fill  Credit Card Holder Name
      const txtCreditCardHolderNameTxt = frmPayment.locator(txtCardholderName);
      await txtCreditCardHolderNameTxt.type(credicardholdrname);
      // await this.fillTextBox(txtAccountHolderName, accountholdrname);
    } else throw new Error('No such frame');
  };
  fillPostalCodeTxt = async (postalcode: string) => {
    console.log(' i am here inside fillPostalCodeTxt');
    // Switch to frame
    const frmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frmPayment != null) {
      // Fill  Postal Code
      const txtCreditCardHolderNameTxt = frmPayment.locator(txtPostalCode);
      await txtCreditCardHolderNameTxt.type(postalcode);
    } else throw new Error('No such frame');
  };

  // ========================== Click Methods ==============================
  clickCreditCardPurchaseBtn = async () => {
    console.log(' i am here inside clickPurchaseBtn');
    // Switch to frame
    const frmCCPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frmCCPayment != null) {
      // Click on Purchase button
      await frmCCPayment.locator(btnCreditCardPurchase).click({ force: true });
    } else throw new Error('No such frame');
  };
  // ========================== Assertion Methods ==========================
  assertWelcomeToLegalshiledFamilyPage = async () => {
    console.log(' - checkoutPaymentPage.assertWelcomeToLegalshiledFamilyPage');
    const welcome = await this.page.waitForSelector(txtWelcomeToLegalshiledFamily);
    console.log(welcome.innerText());
    await this.assertElementContainsText(txtWelcomeToLegalshiledFamily, 'Welcome!');
  };
}
