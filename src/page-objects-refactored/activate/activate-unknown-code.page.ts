import { LoginPage } from '../login/login.page';

// ========================== Selectors ==========================
const lnkBack: string = 'a:has-text("Back")';
const btnSendCode: string = 'button:has-text("Send code")';
const txtEmail: string = '[placeholder="Email"]';
const lnkDontKnowYourCode: string = 'text=know your code?';
const msgInvalidEmailAddress: string = 'text=Invalid email address.';

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
    await this.fillTextBox(txtEmail, email);
  };

  /**
   * @param {string} email
   * @memberof ActivateUnknownCodePage
   */
  enterEmailAndSendCode = async (email: string): Promise<void> => {
    console.log(' - activateUnknownCodePage.enterEmailAndSendCode');
    // Enter email address
    await this.fillTextBox(txtEmail, email);
    // Click Send Code to submit email
    await this.clickSendCodeButton();
  };

  // ========================== Navigate Methods ==========================

  // ========================== Click Methods ==========================

  clickBackLink = async (): Promise<void> => {
    console.log(' - activateUnknownCodePage.clickBackLink');
    // Click back button
    await this.clickOnElement(lnkBack);
  };

  clickSendCodeButton = async (): Promise<void> => {
    console.log(' - activateUnknownCodePage.clickSendCodeButton');
    // Click Send Code button
    await this.clickOnElement(btnSendCode);
  };

  clickDontKnowYourCodeLink = async (): Promise<void> => {
    console.log(' - activateUnknownCodePage.clickDontKnowYourCodeLink');
    // Click Dont Know Your Code link
    await this.clickOnElement(lnkDontKnowYourCode);
  };

  // ========================== Assertion Methods ==========================

  assertInvalidEmailAddressHintDisplayed = async (): Promise<void> => {
    console.log(' - activateUnknownCodePage.assertInvalidEmailAddressHintDisplayed');
    // Click Dont Know Your Code link
    await this.assertElementIsVisible(msgInvalidEmailAddress);
  };

  assertSendCodeButtonDisabled = async (): Promise<void> => {
    console.log(' - activateUnknownCodePage.assertSendCodeButtonDisabled');
    // Click Dont Know Your Code link
    await this.assertElementIsDisabled(btnSendCode);
  };
}
