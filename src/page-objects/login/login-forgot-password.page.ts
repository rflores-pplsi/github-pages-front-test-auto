import { LoginPage } from './login.page';

// Selectors
const txtEmailAddress: string = '[placeholder="Email Address"]';
const btnSendEmail: string = 'button:has-text("Send Email")';
const alrtSuccess: string = 'text=If we find an email in our system that matches, you will receive an email';

/**
 * @export
 * @class LoginForgotPasswordPage
 * @extends {LoginPage}
 */
export class LoginForgotPasswordPage extends LoginPage {
  // ========================== Page Instances ==========================

  // ========================== Process Methods ==========================

  requestPasswordResetEmail = async (): Promise<void> => {
    console.log(' - loginForgotPasswordPage.requestPasswordEmail');
    // Click forgot password link
    await this.clickForgotPasswordLink();
    // Enter email address into Email Address input
    await this.fillTextBox(txtEmailAddress, 'mattfeeQA@gmail.com');
    // Click on the Resend Email button to request password reset
    await this.clickOnElement(btnSendEmail);
  };

  // ========================== Click Methods ==========================

  // ========================== Assertion Methods ==========================

  assertSuccessBanner = async (): Promise<void> => {
    console.log(' - loginForgotPasswordPage.assertSuccessBanner');
    // Wait for Success Alert box to display forgot password page
    await this.assertElementIsVisible(alrtSuccess);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
    // TODO: add assertion that email has been received in a test email account (Yopmail?)
  };

  // ========================== Navigate Methods ==========================
}
