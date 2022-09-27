/* eslint-disable valid-jsdoc */
import DataUtils from '../../utils/Tests.Data';
import { CheckoutPaymentsCreditCardPage } from './checkout-payments-credit-card.page';

// ========================== Selectors ==================================
const txtAccountNumber = "[placeholder='Account Number']";
const txtRoutingNumber = "[placeholder='Routing Number']";
const txtAccountHolderName = "[placeholder='Account Holder Name']";
const txtBankName = "[placeholder='Bank Name']";
const btnPurchase = '#savebd';
const txtWelcomeToLegalShieldFamily = 'h1.lsux-heading.confirmation-title.lsux-heading--t28';
const pPlans = "//div[@class='lsux-row half children2 content-row mb-4 mt-4 first-plan']/div/div/div/p";
const pPlanPrice = "//div[@class='lsux-row half children2 content-row mb-4 mt-4 first-plan']/div[@class='lsux-col pr-0 right-label-col']/div/p";
const txtTotalLabel = "//p[contains(text(),'Monthly Total:')]";
const txtTotalPriceLabel = "//div[@class='lsux-row eight-four children2 footer-row mb-0 py-4']/div[@class='lsux-col pr-0 right-label-col']/div/p";

// Bank Draft Selectors for Canada
const txtTransitNumber = "[placeholder='Transit Number']";
const txtInstitutionNumber = "[placeholder='Institution Number']";

/**
 * @export
 * @class CheckoutPaymentsBankDraftPage
 * @extends {CheckoutPaymentsCreditCardPage}
 */
export class CheckoutPaymentsBankDraftPage extends CheckoutPaymentsCreditCardPage {
  // ========================== Process Methods ============================
  fillBankDraftFormAndSubmit = async () => {
    console.log(' - checkoutPaymentPage.fillBankDraftForm');
    // Fillout the Bank Draft form
    await this.fillAccountNumberTxt(DataUtils.data.testingHarness.us.bd.Account);
    await this.page.keyboard.press('Tab');
    await this.fillRoutingNumberTxt(DataUtils.data.testingHarness.us.bd.Routing);
    await this.page.keyboard.press('Tab');
    await this.fillAccountHolderNameTxt(DataUtils.data.testingHarness.us.bd.name);
    await this.page.keyboard.press('Tab');
    await this.page.pause();
    await this.clickPurchaseBtn();
    await this.page.waitForSelector(conMembershipWrapper, { timeout: 50000 });
  };

  /**
   * @memberof CheckoutPaymentsBankDraftPage
   */
  fillOrderSummaryPlanValue = async (): Promise<string> => {
    console.log(' - checkoutPaymentBankDraftPage.fillOrderSummarypPlanValue');
    // Fill out the Bank Draft form
    return this.page.locator(pPlans).innerText();
  };

  /**
   * @memberof CheckoutPaymentsBankDraftPage
   */
  fillOrderSummaryPlanPriceValue = async (): Promise<string> => {
    console.log(' - checkoutPaymentBankDraftPage.fillOrderSummarypPlanPriceValue');
    // Fill out the Bank Draft form
    return this.page.locator(pPlanPrice).innerText();
  };

  /**
   * @memberof CheckoutPaymentsBankDraftPage
   */
  fillOrderSummaryTxtTotalLabelValue = async (): Promise<string> => {
    console.log(' - checkoutPaymentBankDraftPage.fillOrderSummarytxtTotalLabelValue');
    // Fill out the Bank Draft form
    return this.page.locator(txtTotalLabel).innerText();
  };

  /**
   * @memberof CheckoutPaymentsBankDraftPage
   */
  fillOrderSummaryTxtTotalPriceLabelValue = async (): Promise<string> => {
    console.log(' - checkoutPaymentBankDraftPage.fillOrderSummarytxtTotalPriceLabelValue');
    // Fill out the Bank Draft form
    return this.page.locator(txtTotalPriceLabel).innerText();
  };

  /**
   * @param {string} market
   * @memberof CheckoutPaymentsBankDraftPage
   */
  fillMarketBankDraftFormAndSubmit = async (market: string) => {
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
  fillUsBankDraftFormAndSubmit = async () => {
    console.log(' - checkoutPaymentPage.fillBankDraftForm');
    // Fill out the Bank Draft form
    await this.fillAccountNumberTxt('000000000');
    await this.page.keyboard.press('Tab');
    await this.fillRoutingNumberTxt('000000000');
    await this.page.keyboard.press('Tab');
    await this.fillAccountHolderNameTxt('Education Employee');
    await this.page.keyboard.press('Tab');
    await this.clickPurchaseBtn();
    await this.page.waitForSelector(conMembershipWrapper, { timeout: 90000 });
  };

  /**
   * @memberof CheckoutPaymentsBankDraftPage
   */
  fillCaBankDraftFormAndSubmit = async () => {
    console.log(' - checkoutPaymentPage.fillCaBankDraftFormAndSubmit');
    // Fill out the Bank Draft form
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
    await this.page.waitForSelector(conMembershipWrapper, { timeout: 50000 });
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
  /**
   * @param {string} account
   * @memberof CheckoutPaymentsBankDraftPage
   */
  fillAccountNumberTxt = async (account: string) => {
    const frmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    console.log(' - checkoutPaymentPage.fillAccountNumberTxt');
    // Fill  Account Number
    const txtAccountNumbertst1 = await frmPayment.locator(txtAccountNumber);
    await txtAccountNumbertst1.type('1000123546');
    // await this.fillTextBox(txtAccountNumber, account);
  };

  // Fill  Routing Number Method
  /**
   * @param {string} routing
   * @memberof CheckoutPaymentsBankDraftPage
   */
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

  /**
   * @param {string} accountholdrname
   * @memberof CheckoutPaymentsBankDraftPage
   */
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

  /**
   * @param {string} bankname
   * @memberof CheckoutPaymentsBankDraftPage
   */
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
  /**
   * @param {string} account
   * @memberof CheckoutPaymentsBankDraftPage
   */
  fillAccountNumberForCaTxt = async (account: string) => {
    const frmPayment = this.page.frameLocator("//iframe[@title='payment iframe']");
    console.log(' - checkoutPaymentPage.fillAccountNumberForCaTxt');
    // Fill  Account Number
    const txtAccountNumbertst2 = await frmPayment.locator(txtAccountNumber);
    await txtAccountNumbertst2.type(account);
    // await this.fillTextBox(txtAccountNumber, account);
  };

  // Fill Transit Number Method
  /**
   * @param {string} transitNumber
   * @memberof CheckoutPaymentsBankDraftPage
   */
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
  /**
   * @param {string} routing
   * @memberof CheckoutPaymentsBankDraftPage
   */
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
  /**
   * @memberof CheckoutPaymentsBankDraftPage
   */
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
  /**
   * @memberof CheckoutPaymentsBankDraftPage
   */
  assertWelcomeToLegalShieldFamilyPage = async () => {
    console.log(' - checkoutPaymentPage.assertWelcomeToLegalshiledFamilyPage');
    const welcome = await this.page.waitForSelector(txtWelcomeToLegalShieldFamily);
    console.log(welcome.innerText());
    await this.assertElementContainsText(txtWelcomeToLegalShieldFamily, 'Welcome!');
  };
}
