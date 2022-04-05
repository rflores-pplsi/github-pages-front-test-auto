/* eslint-disable valid-jsdoc */
import { CheckoutPaymentsPage } from "./checkout-payments.page";

// ========================== Selectors ==================================
const txtAccountNumber = "[placeholder='Account Number']";
const txtRoutingNumber = "[placeholder='Routing Number']";
const txtAccountHolderName = "[placeholder='Account Holder Name']";
const txtBankName = "[placeholder='Bank Name']";
const btnPurchase = "#savebd";
const txtWelcomeToLegalshiledFamily =
  "h1.lsux-heading.confirmation-title.lsux-heading--t28";

// create instance of Page

/**
 * @export
 * @class AccountPaymentsBankDraftPage
 */
export class CheckoutPaymentsBankDraftPage extends CheckoutPaymentsPage {
  // ========================== Process Methods ============================
  fillBankDraftForm = async () => {
    console.log(" - checkoutPaymentPage.fillBankDraftForm");
    // Fillout the Bank Draft form
    await this.fillAccountNumberTxt("1000123546");
    await this.page.keyboard.press("Tab");
    await this.fillRoutingNumberTxt("103000648");
    await this.page.keyboard.press("Tab");
    await this.fillAccountHolderNameTxt("Automation Tester");
    await this.page.keyboard.press("Tab");
    await this.clickPurchaseBtn();
    // await this.page.waitForTimeout(60000);
    const welcome = await this.page.locator(txtWelcomeToLegalshiledFamily);
    console.log(await welcome.allTextContents());
  };
  // ========================== Navigate Methods ===========================
  navigateToPaymentsBankDraftPage = async (): Promise<void> => {
    console.log(" - checkoutPaymentPage.navigateToPaymentsBankDraftPage");
    await this.navigateToPaymentsPage();
    // await this.clickBankDraftBtn();
  };
  // ========================== fill Text Box Methods ======================
  // Fill  Account Number Method
  fillAccountNumberTxt = async (account: string) => {
    const frmPayment = this.page.frameLocator(
      "//iframe[@title='payment iframe']"
    );
    console.log(" i am here inside fillAccountNumberTxt");
    // Fill  Account Number
    const txtAccountNumbertst1 = await frmPayment.locator(txtAccountNumber);
    await txtAccountNumbertst1.type("1000123546");
    // await this.fillTextBox(txtAccountNumber, account);
  };
  // Fill  Routing Number Method
  fillRoutingNumberTxt = async (routing: string) => {
    console.log(" i am here inside fillRoutingNumberTxt");
    // Switch to frame
    const frmPayment = this.page.frameLocator(
      "//iframe[@title='payment iframe']"
    );
    if (frmPayment != null) {
      // Fill  Routing Number
      const txtRoutingNumberTxt = await frmPayment.locator(txtRoutingNumber);
      await txtRoutingNumberTxt.type("103000648");
      // await this.fillTextBox(txtRoutingNumber, routing);
    } else throw new Error("No such fram");
  };
  fillAccountHolderNameTxt = async (accountholdrname: string) => {
    console.log(" i am here inside fillAccountHolderNameTxt");
    // Switch to frame
    const frmPayment = this.page.frameLocator(
      "//iframe[@title='payment iframe']"
    );
    if (frmPayment != null) {
      // Fill  Account Holder Name
      const txtAccountHolderNameTxt = await frmPayment.locator(
        txtAccountHolderName
      );
      await txtAccountHolderNameTxt.type("Automation Tester");
      // await this.fillTextBox(txtAccountHolderName, accountholdrname);
    } else throw new Error("No such fram");
  };
  fillBankNameTxt = async (bankname: string) => {
    console.log(" i am here inside fillBankNameTxt");
    // Switch to frame
    const frmPayment = this.page.frameLocator(
      "//iframe[@title='payment iframe']"
    );
    if (frmPayment != null) {
      // Fill  Bank Name
      await this.fillTextBox(txtBankName, bankname);
    } else throw new Error("No such fram");
  };
  // ========================== Click Methods ==============================
  clickPurchaseBtn = async () => {
    console.log(" i am here inside clickPurchaseBtn");
    // Switch to frame
    const frmPayment = this.page.frameLocator(
      "//iframe[@title='payment iframe']"
    );
    if (frmPayment != null) {
      // Click on Purchase button
      await frmPayment.locator(btnPurchase).click();
    } else throw new Error("No such fram");
  };
  // ========================== Assertion Methods ==========================
  assertWelcomeToLegalshiledFamilyPage = async () => {
    console.log(" - checkoutPaymentPage.assertWelcomeToLegalshiledFamilyPage");
    const welcome = await this.page.waitForSelector(
      txtWelcomeToLegalshiledFamily
    );
    console.log(welcome.innerText());
    await this.assertElementContainsText(
      txtWelcomeToLegalshiledFamily,
      "Welcome to the LegalShield family!"
    );
  };
}
