import DataUtils from '../../utils/Tests.Data';
import { CheckoutPaymentsCreditCardPage } from './checkout-payments-credit-card.page';

// ========================== Selectors ==================================
const TXT_ACCOUNT_NUMBER = "[placeholder='Account Number']";
const TXT_ROUTING_NUMBER = "[placeholder='Routing Number']";
const TXT_ACCOUNT_HOLDER_NAME = "[placeholder='Account Holder Name']";
const TXT_BANK_NAME = "[placeholder='Bank Name']";
const BTN_PURCHASE = '#savebd';
const TXT_WELCOME_TO_LEGAL_SHIELD_FAMILY = 'h1.lsux-heading.confirmation-title.lsux-heading--t28';
const P_PLANS = "//div[@class='lsux-row half children2 content-row mb-4 mt-4 first-plan']/div/div/div/p";
const P_PLAN_PRICE = "//div[@class='lsux-row half children2 content-row mb-4 mt-4 first-plan']/div[@class='lsux-col pr-0 right-label-col']/div/p";
const TXT_TOTAL_LABEL = "//p[contains(text(),'Monthly Total:')]";
const TXT_TOTAL_PRICE_LABEL = "//div[@class='lsux-row eight-four children2 footer-row mb-0 py-4']/div[@class='lsux-col pr-0 right-label-col']/div/p";
const CON_MEMBERSHIP_WRAPPER = '//div[contains(@class,"membership-wrapper")]';
// Bank Draft Selectors for Canada
const TXT_TRANSIT_NUMBER = "[placeholder='Transit Number']";
const TXT_INSTITUTION_NUMBER = "[placeholder='Institution Number']";
const BTN_SAVE_AND_CONTINUE = "button:has-text('Save & Continue')";

/**
 * @export
 * @class CheckoutPaymentsBankDraftPage
 * @extends {CheckoutPaymentsCreditCardPage}
 */
export class CheckoutPaymentsBankDraftPage extends CheckoutPaymentsCreditCardPage {
  // ========================== Process Methods ============================
  fillBankDraftFormAndSubmit = async (): Promise<void> => {
    console.log(' - checkoutPaymentPage.fillBankDraftForm');
    // Fillout the Bank Draft form
    await this.page.waitForLoadState();
    await this.fillAccountNumberTxt();
    await this.page.keyboard.press('Tab');
    await this.fillRoutingNumberTxt();
    await this.page.keyboard.press('Tab');
    await this.fillAccountHolderNameTxt();
    await this.page.keyboard.press('Tab');
    await this.clickPurchaseBtn();
    await this.page.waitForSelector(CON_MEMBERSHIP_WRAPPER, { timeout: 50000 });
  };

  /**
   * @memberof CheckoutPaymentsBankDraftPage
   */
  fillOrderSummaryPlanValue = async (): Promise<string> => {
    console.log(' - checkoutPaymentBankDraftPage.fillOrderSummarypPlanValue');
    // Fill out the Bank Draft form
    return this.page.locator(P_PLANS).innerText();
  };

  /**
   * @memberof CheckoutPaymentsBankDraftPage
   */
  fillOrderSummaryPlanPriceValue = async (): Promise<string> => {
    console.log(' - checkoutPaymentBankDraftPage.fillOrderSummarypPlanPriceValue');
    // Fill out the Bank Draft form
    return this.page.locator(P_PLAN_PRICE).innerText();
  };

  /**
   * @memberof CheckoutPaymentsBankDraftPage
   */
  fillOrderSummaryTxtTotalLabelValue = async (): Promise<string> => {
    console.log(' - checkoutPaymentBankDraftPage.fillOrderSummarytxtTotalLabelValue');
    // Fill out the Bank Draft form
    return this.page.locator(TXT_TOTAL_LABEL).innerText();
  };

  /**
   * @memberof CheckoutPaymentsBankDraftPage
   */
  fillOrderSummaryTxtTotalPriceLabelValue = async (): Promise<string> => {
    console.log(' - checkoutPaymentBankDraftPage.fillOrderSummarytxtTotalPriceLabelValue');
    // Fill out the Bank Draft form
    return this.page.locator(TXT_TOTAL_PRICE_LABEL).innerText();
  };

  /**
   * @param {string} market
   * @memberof CheckoutPaymentsBankDraftPage
   */
  fillMarketBankDraftFormAndSubmit = async (market: string): Promise<void> => {
    console.log(' - checkoutPaymentPage.fillMarketBankDraftFormAndSubmit');
    switch (market) {
      case 'US': {
        await this.fillUsBankDraftFormAndSubmit();
        break;
      }
      case 'CA': {
        await this.fillCaBankDraftFormAndSubmit();
        break;
      }
      default: {
        console.log('Market entered into data sheet cannot be found in regions util');
        break;
      }
    }
  };

  /**
   * @memberof CheckoutPaymentsBankDraftPage
   */
  fillUsBankDraftFormAndSubmit = async (): Promise<void> => {
    console.log(' - checkoutPaymentPage.fillBankDraftForm');
    // Fill out the Bank Draft form
    await this.fillAccountNumberTxt();
    await this.page.keyboard.press('Tab');
    await this.fillRoutingNumberTxt();
    await this.page.keyboard.press('Tab');
    await this.fillAccountHolderNameTxt();
    await this.page.keyboard.press('Tab');
    await this.clickPurchaseBtn();
    await this.page.waitForSelector(CON_MEMBERSHIP_WRAPPER, { timeout: 90000 });
  };

  /**
   * @memberof CheckoutPaymentsBankDraftPage
   */
  fillCaBankDraftFormAndSubmit = async (): Promise<void> => {
    console.log(' - checkoutPaymentPage.fillCaBankDraftFormAndSubmit');
    // Fill out the Bank Draft form
    await this.page.waitForLoadState();
    await this.fillAccountNumberForCaTxt(DataUtils.data.testingHarness.ca.bd.Account);
    await this.page.keyboard.press('Tab');
    await this.fillTransitNumberTxt(DataUtils.data.testingHarness.ca.bd.Transit);
    await this.page.keyboard.press('Tab');
    await this.fillInstitutionNumberTxt(DataUtils.data.testingHarness.ca.bd.Institution);
    await this.page.keyboard.press('Tab');
    await this.fillAccountHolderNameTxt();
    await this.page.keyboard.press('Tab');
    await this.clickPurchaseBtn();
    await this.page.waitForSelector(CON_MEMBERSHIP_WRAPPER, { timeout: 50000 });
  };

  // ========================== Navigate Methods ===========================
  /**
   * @param {string} state
   * @memberof CheckoutPaymentsBankDraftPage
   */
  navigateToPaymentsBankDraftPage = async (state: string): Promise<void> => {
    console.log(' - checkoutPaymentPage.navigateToPaymentsBankDraftPage');
    await this.navigateToPaymentsPage(state);
    await this.clickBankDraftBtn();
  };

  /**
   *
   *
   * @param {string} groupPayConfig
   * @param {string} planName
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

  /**
   * Fill  Account Number Method
   *
   * @memberof CheckoutPaymentsBankDraftPage
   */
  fillAccountNumberTxt = async (): Promise<void> => {
    const frmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    console.log(' - checkoutPaymentPage.fillAccountNumberTxt');
    // Fill  Account Number
    const txtAccountNumbertst1 = await frmPayment.locator(TXT_ACCOUNT_NUMBER);
    await txtAccountNumbertst1.type('1000123546');
    // await this.fillTextBox(txtAccountNumber, account);
  };

  /**
   * Fill Routing Number Method
   *
   * @memberof CheckoutPaymentsBankDraftPage
   */
  fillRoutingNumberTxt = async (): Promise<void> => {
    console.log(' - checkoutPaymentPage.fillRoutingNumberTxt');
    // Switch to frame
    const frmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frmPayment != null) {
      // Fill  Routing Number
      const txtRoutingNumberTxt = await frmPayment.locator(TXT_ROUTING_NUMBER);
      await txtRoutingNumberTxt.type('103000648');
      // await this.fillTextBox(txtRoutingNumber, routing);
    } else throw new Error('No such frame');
  };

  /**
   *
   *
   * @memberof CheckoutPaymentsBankDraftPage
   */
  fillAccountHolderNameTxt = async (): Promise<void> => {
    console.log(' - checkoutPaymentPage.fillAccountHolderNameTxt');
    // Switch to frame
    const frmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frmPayment != null) {
      // Fill  Account Holder Name
      const txtAccountHolderNameTxt = await frmPayment.locator(TXT_ACCOUNT_HOLDER_NAME);
      await txtAccountHolderNameTxt.type('Automation Tester');
      // await this.fillTextBox(txtAccountHolderName, accountholdrname);
    } else throw new Error('No such frame');
  };

  /**
   * @param {string} bankname
   * @memberof CheckoutPaymentsBankDraftPage
   */
  fillBankNameTxt = async (bankname: string): Promise<void> => {
    console.log(' - checkoutPaymentPage.fillBankNameTxt');
    // Switch to frame
    const frmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frmPayment != null) {
      // Fill  Bank Name
      await this.fillTextBox(TXT_BANK_NAME, bankname);
    } else throw new Error('No such frame');
  };

  // Fill  Account Number Method for Canada
  /**
   * @param {string} account
   * @memberof CheckoutPaymentsBankDraftPage
   */
  fillAccountNumberForCaTxt = async (account: string): Promise<void> => {
    const frmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    console.log(' - checkoutPaymentPage.fillAccountNumberForCaTxt');
    // Fill  Account Number
    const txtAccountNumbertst2 = await frmPayment.locator(TXT_ACCOUNT_NUMBER);
    await txtAccountNumbertst2.type(account);
    // await this.fillTextBox(txtAccountNumber, account);
  };

  // Fill Transit Number Method
  /**
   * @param {string} transitNumber
   * @memberof CheckoutPaymentsBankDraftPage
   */
  fillTransitNumberTxt = async (transitNumber: string): Promise<void> => {
    console.log(' - checkoutPaymentPage.fillTransitNumberTxt');
    // Switch to frame
    const frmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frmPayment != null) {
      // Fill  Transit Number
      const txtTransitNumberTxt = await frmPayment.locator(TXT_TRANSIT_NUMBER);
      await txtTransitNumberTxt.type(transitNumber);
    } else throw new Error('No such frame');
  };

  // Fill Institution Number Method
  /**
   * @param {string} routing
   * @memberof CheckoutPaymentsBankDraftPage
   */
  fillInstitutionNumberTxt = async (routing: string): Promise<void> => {
    console.log(' - checkoutPaymentPage.fillInstitutionNumberTxt');
    // Switch to frame
    const frmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frmPayment != null) {
      // Fill  Institution Number
      const txtInstitutionNumberTxt = await frmPayment.locator(TXT_INSTITUTION_NUMBER);
      await txtInstitutionNumberTxt.type(routing);
    } else throw new Error('No such frame');
  };

  clickSaveAndContinue = async (): Promise<void> => {
    await this.page.waitForLoadState();
    await this.page.locator(BTN_SAVE_AND_CONTINUE).click();
  };

  // ========================== Click Methods ==============================
  /**
   * @memberof CheckoutPaymentsBankDraftPage
   */
  clickPurchaseBtn = async (): Promise<void> => {
    console.log(' - checkoutPaymentPage.clickPurchaseBtn');
    // Switch to frame
    const frmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frmPayment != null) {
      // Click on Purchase button
      await frmPayment.locator(BTN_PURCHASE).click();
    } else throw new Error('No such frame');
  };

  // ========================== Assertion Methods ==========================
  /**
   * @memberof CheckoutPaymentsBankDraftPage
   */
  assertWelcomeToLegalShieldFamilyPage = async (): Promise<void> => {
    console.log(' - checkoutPaymentPage.assertWelcomeToLegalshiledFamilyPage');
    const welcome = await this.page.waitForSelector(TXT_WELCOME_TO_LEGAL_SHIELD_FAMILY);
    console.log(welcome.innerText());
    await this.assertElementContainsText(TXT_WELCOME_TO_LEGAL_SHIELD_FAMILY, 'Welcome!');
  };
}
