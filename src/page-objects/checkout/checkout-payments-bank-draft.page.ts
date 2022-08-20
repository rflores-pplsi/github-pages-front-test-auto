/* eslint-disable valid-jsdoc */
import DataUtils from '../../utils/Tests.Data';
import { CheckoutPaymentsCreditCardPage } from './checkout-payments-credit-card.page';

// ========================== Selectors ==================================
const txtAccountNumber = "[placeholder='Account Number']";
const txtRoutingNumber = "[placeholder='Routing Number']";
const txtAccountHolderName = "[placeholder='Account Holder Name']";
const txtBankName = "[placeholder='Bank Name']";
const btnPurchase = '#savebd';
const txtWelcomeToLegalshiledFamily = 'h1.lsux-heading.confirmation-title.lsux-heading--t28';
// const conPlans =
//   "//div[@class='lsux-row half children2 content-row mb-4 mt-4 first-plan']";
const pPlans = "//div[@class='lsux-row half children2 content-row mb-4 mt-4 first-plan']/div/div/div/p";
const pPlanPrice = "//div[@class='lsux-row half children2 content-row mb-4 mt-4 first-plan']/div[@class='lsux-col pr-0 right-label-col']/div/p";
const txtTotalLabel = "//p[contains(text(),'Monthly Total:')]";
const txtTotalPriceLabel = "//div[@class='lsux-row eight-four children2 footer-row mb-0 py-4']/div[@class='lsux-col pr-0 right-label-col']/div/p";

// Bank Draft Selectors for Canada
const txtTransitNumber = "[placeholder='Transit Number']";
const txtInstitutionNumber = "[placeholder='Institution Number']";

// create instance of Page

/**
 * @export
 * @class AccountPaymentsBankDraftPage
 */
export class CheckoutPaymentsBankDraftPage extends CheckoutPaymentsCreditCardPage {
  // ========================== Process Methods ============================
  fillBankDraftForm = async () => {
    console.log(' - checkoutPaymentPage.fillBankDraftForm');
    // Fillout the Bank Draft form
    await this.fillAccountNumberTxt(DataUtils.data.testingHarness.us.bd.Account);
    await this.page.keyboard.press('Tab');
    await this.fillRoutingNumberTxt(DataUtils.data.testingHarness.us.bd.Routing);
    await this.page.keyboard.press('Tab');
    await this.fillAccountHolderNameTxt(DataUtils.data.testingHarness.us.bd.name);
    await this.page.keyboard.press('Tab');
    await this.clickPurchaseBtn();
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
  fillBankDraftFormForCanada = async () => {
    console.log(' - checkoutPaymentPage.fillBankDraftFormForCanada');
    // Fillout the Bank Draft form
    await this.page.waitForLoadState();
    await this.fillAccountNumberForCaTxt(DataUtils.data.testingHarness.ca.bd.Account);
    await this.page.keyboard.press('Tab');
    await this.fillTransitNumberTxt(DataUtils.data.testingHarness.ca.bd.Transit);
    await this.page.keyboard.press('Tab');
    await this.fillInstitutionNumberTxt(DataUtils.data.testingHarness.ca.bd.Institution);
    await this.page.keyboard.press('Tab');
    await this.fillAccountHolderNameTxt(DataUtils.data.testingHarness.ca.bd.name);
    await this.page.keyboard.press('Tab');
    await this.clickPurchaseBtn();
  };
  // ========================== Navigate Methods ===========================
  navigateToPaymentsBankDraftPage = async (state: string): Promise<void> => {
    console.log(' - checkoutPaymentPage.navigateToPaymentsBankDraftPage');
    await this.navigateToPaymentsPage(state);
    await this.clickBankDraftBtn();
  };

  /**
   * @param {string} groupPayConfig
   * @memberof CheckoutPaymentsBankDraftPage
   */
  navigateFromPersonalInfoPageToPaymentPage = async (groupPayConfig: string, planName: string): Promise<void> => {
    if (planName.includes('Business')) {
      await this.completeBusinessInfoForm();
    }
    await this.clickSaveAndContinueButton();
    await this.captureOrderSummary(groupPayConfig);
  };

  // ========================== fill Text Box Methods ======================
  // Fill  Account Number Method
  fillAccountNumberTxt = async (account: string) => {
    const frmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    console.log(' - checkoutPaymentPage.fillAccountNumberTxt');
    // Fill  Account Number
    const txtAccountNumbertst1 = await frmPayment.locator(txtAccountNumber);
    await txtAccountNumbertst1.type('1000123546');
    // await this.fillTextBox(txtAccountNumber, account);
  };
  // Fill  Routing Number Method
  fillRoutingNumberTxt = async (routing: string) => {
    console.log(' - checkoutPaymentPage.fillRoutingNumberTxt');
    // Switch to frame
    const frmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frmPayment != null) {
      // Fill  Routing Number
      const txtRoutingNumberTxt = await frmPayment.locator(txtRoutingNumber);
      await txtRoutingNumberTxt.type('103000648');
      // await this.fillTextBox(txtRoutingNumber, routing);
    } else throw new Error('No such frame');
  };
  fillAccountHolderNameTxt = async (accountholdrname: string) => {
    console.log(' - checkoutPaymentPage.fillAccountHolderNameTxt');
    // Switch to frame
    const frmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frmPayment != null) {
      // Fill  Account Holder Name
      const txtAccountHolderNameTxt = await frmPayment.locator(txtAccountHolderName);
      await txtAccountHolderNameTxt.type('Automation Tester');
      // await this.fillTextBox(txtAccountHolderName, accountholdrname);
    } else throw new Error('No such frame');
  };
  fillBankNameTxt = async (bankname: string) => {
    console.log(' - checkoutPaymentPage.fillBankNameTxt');
    // Switch to frame
    const frmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frmPayment != null) {
      // Fill  Bank Name
      await this.fillTextBox(txtBankName, bankname);
    } else throw new Error('No such frame');
  };
  // Fill  Account Number Method for Canada
  fillAccountNumberForCaTxt = async (account: string) => {
    const frmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    console.log(' - checkoutPaymentPage.fillAccountNumberForCaTxt');
    // Fill  Account Number
    const txtAccountNumbertst2 = await frmPayment.locator(txtAccountNumber);
    await txtAccountNumbertst2.type(account);
    // await this.fillTextBox(txtAccountNumber, account);
  };
  // Fill Transit Number Method
  fillTransitNumberTxt = async (transitNumber: string) => {
    console.log(' - checkoutPaymentPage.fillTransitNumberTxt');
    // Switch to frame
    const frmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frmPayment != null) {
      // Fill  Transit Number
      const txtTransitNumberTxt = await frmPayment.locator(txtTransitNumber);
      await txtTransitNumberTxt.type(transitNumber);
    } else throw new Error('No such frame');
  };
  // Fill Institution Number Method
  fillInstitutionNumberTxt = async (routing: string) => {
    console.log(' - checkoutPaymentPage.fillInstitutionNumberTxt');
    // Switch to frame
    const frmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frmPayment != null) {
      // Fill  Institution Number
      const txtInstitutionNumberTxt = await frmPayment.locator(txtInstitutionNumber);
      await txtInstitutionNumberTxt.type(routing);
    } else throw new Error('No such frame');
  };
  // ========================== Click Methods ==============================
  clickPurchaseBtn = async () => {
    console.log(' - checkoutPaymentPage.clickPurchaseBtn');
    // Switch to frame
    const frmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frmPayment != null) {
      // Click on Purchase button
      await frmPayment.locator(btnPurchase).click();
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
