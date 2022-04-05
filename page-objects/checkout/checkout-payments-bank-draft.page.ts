/* eslint-disable valid-jsdoc */
import { CheckoutPaymentsPage } from "./checkout-payments.page";

// ========================== Selectors ==================================
const txtAccountNumber = "[placeholder='Account Number']";
const txtRoutingNumber = "[placeholder='Routing Number']";
const txtAccountHolderName = "[placeholder='Account Holder Name']";
const txtBankName = "[placeholder='Bank Name']";
const btnPurchase = "#savebd";
const txtWelcomeToLegalshiledFamily = "h1.lsux-heading--t28";

// create instance of Page

/**
 * @export
 * @class AccountPaymentsBankDraftPage
 */
export class CheckoutPaymentsBankDraftPage extends CheckoutPaymentsPage {
  // ========================== Process Methods ============================
  fillBankDraftForm = async () => {
    console.log(" - accountPaymentPage.fillBankDraftForm");
    // Switch to frame
    const frMain = this.page.frameLocator("//iframe[@title='payment iframe']");
    console.log(" i am here");
    // await this.page.waitForSelector("//iframe[@title='payment iframe']");
    await frMain.frameLocator("//iframe[@title='payment iframe']");
    const frmPayment = this.page.frameLocator(
      "//iframe[@title='payment iframe']"
    );
    console.log(" i am here inside child frame");
    await this.page.keyboard.press("Tab");
    // Fill  Bank Draft Form
    const txtAccountNumbertst1 = await frmPayment.locator(txtAccountNumber);
    await txtAccountNumbertst1.type("1000123546");
    await this.page.keyboard.press("Tab");
    console.log(" i typed Account number");
    const txtRoutingNumberTxt = await frmPayment.locator(txtRoutingNumber);
    await txtRoutingNumberTxt.type("103000648");
    await this.page.keyboard.press("Tab");
    console.log(" i typed Routing number");
    const txtAccountHolderNameTxt = await frmPayment.locator(
      txtAccountHolderName
    );
    await txtAccountHolderNameTxt.type("Automation Tester");
    await this.page.keyboard.press("Tab");
    console.log(" i typed Account Holder number");
    const txtBankNameTxt = await frmPayment.locator(txtBankName);
    await txtBankNameTxt.type("PNC");
    await this.page.keyboard.press("Tab");

    // Click on Purchase button
    await frmPayment.locator(btnPurchase).click();
    console.log(" I clicked in Purchase button");
    // await this.page.on("dialog", (dialog) => {
    //   console.log("Message :" + dialog.message);
    // });
    // await this.page.waitForTimeout(60000);
    // const welcome = await this.page.locator(txtWelcomeToLegalshiledFamily);
    // console.log(await welcome.getAttribute("value"));
  };
  // ========================== Navigate Methods ===========================
  navigateToPaymentsBankDraftPage = async (): Promise<void> => {
    console.log(" - accountPaymentPage.goToPaymentsBankDraftPage");
    await this.navigateToPaymentsPage();
    // await this.clickBankDraftBtn();
  };
  // ========================== fill Text Box Methods ======================
  // Fill  Account Number Method
  fillAccountNumberTxt = async (account: string) => {
    // Fill  Account Number
    await this.fillTextBox(txtAccountNumber, account);
  };
  // Fill  Routing Number Method
  fillRoutingNumberTxt = async (routing: string) => {
    // Switch to frame
    const frame = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frame != null) {
      // Fill  Routing Number
      await this.fillTextBox(txtRoutingNumber, routing);
    } else throw new Error("No such fram");
  };
  fillAccountHolderNameTxt = async (accountholdrname: string) => {
    // Switch to frame
    const frame = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frame != null) {
      // Fill  Account Holder Name
      await this.fillTextBox(txtAccountHolderName, accountholdrname);
    } else throw new Error("No such fram");
  };
  fillBankNameTxt = async (bankname: string) => {
    // Switch to frame
    const frame = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frame != null) {
      // Fill  Bank Name
      await this.fillTextBox(txtBankName, bankname);
    } else throw new Error("No such fram");
  };
  // ========================== Click Methods ==============================
  clickPurchaseBtn = async () => {
    // Switch to frame
    const frame = this.page.frameLocator("//iframe[@title='payment iframe']");
    if (frame != null) {
      // Click on Purchase button
      await frame.locator(btnPurchase).click();
    } else throw new Error("No such fram");
  };
  // ========================== Assertion Methods ==========================
  assertWelcomeToLegalshiledFamilyPage = async (): Promise<void> => {
    await this.page.on("dialog", (dialog) => {
      console.log("Message :" + dialog.message);
    });
    const welcome = await this.page.waitForSelector(
      txtWelcomeToLegalshiledFamily
    );
    console.log(welcome.innerText());
    // await this.assertElementContainsText(
    //   txtWelcomeToLegalshiledFamily,
    //   "Welcome to the LegalShield family!"
    // );
  };
}
