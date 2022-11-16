import { LoginPage } from '../login/login.page';

// ========================== Selectors ==========================
const LNK_BACK = 'a:has-text("Back")';
const BTN_SEND_CODE = 'button:has-text("Send code")';
const TXT_EMAIL = '[placeholder="Email"]';
const LNK_DONT_KNOW_YOUR_CODE = 'text=know your code?';
const MSG_INVALID_EMAIL_ADDRESS = 'text=Invalid email address.';

/**
 * @export
 * @class ActivateUnknownCodePage
 * @extends {LoginPage}
 */
export class ActivateUnknownCodePage extends LoginPage {
  // ========================== Process Methods ==========================

  /**
   * @param {string} email
   * @memberof ActivateUnknownCodePage
   */
  enterEmail = async (email: string): Promise<void> => {
    console.log(' - activateUnknownCodePage.enterEmailAndSendCode');
    // Enter email address
    await this.fillTextBox(TXT_EMAIL, email);
  };

  /**
   * @param {string} email
   * @memberof ActivateUnknownCodePage
   */
  enterEmailAndSendCode = async (email: string): Promise<void> => {
    console.log(' - activateUnknownCodePage.enterEmailAndSendCode');
    // Enter email address
    await this.fillTextBox(TXT_EMAIL, email);
    // Click Send Code to submit email
    await this.clickSendCodeButton();
  };

  // ========================== Navigate Methods ==========================

  // ========================== Click Methods ==========================

  clickBackLink = async (): Promise<void> => {
    console.log(' - activateUnknownCodePage.clickBackLink');
    // Click back button
    await this.clickOnElement(LNK_BACK);
  };

  clickSendCodeButton = async (): Promise<void> => {
    console.log(' - activateUnknownCodePage.clickSendCodeButton');
    // Click Send Code button
    await this.clickOnElement(BTN_SEND_CODE);
  };

  clickDontKnowYourCodeLink = async (): Promise<void> => {
    console.log(' - activateUnknownCodePage.clickDontKnowYourCodeLink');
    // Click Dont Know Your Code link
    await this.clickOnElement(LNK_DONT_KNOW_YOUR_CODE);
  };

  // ========================== Assertion Methods ==========================

  assertInvalidEmailAddressHintDisplayed = async (): Promise<void> => {
    console.log(' - activateUnknownCodePage.assertInvalidEmailAddressHintDisplayed');
    // Click Dont Know Your Code link
    await this.assertElementIsVisible(MSG_INVALID_EMAIL_ADDRESS);
  };

  assertSendCodeButtonDisabled = async (): Promise<void> => {
    console.log(' - activateUnknownCodePage.assertSendCodeButtonDisabled');
    // Click Dont Know Your Code link
    await this.assertElementIsDisabled(BTN_SEND_CODE);
  };
}
