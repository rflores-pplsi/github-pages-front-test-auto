import { LoginPage } from './login.page';

// Selectors
const TXT_EMAIL_ADDRESS = '[placeholder="Email Address"]';
const BTN_SEND_EMAIL = 'button:has-text("Send Email")';
const ALRT_SUCCESS = 'text=If we find an email in our system that matches, you will receive an email';

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
    await this.fillTextBox(TXT_EMAIL_ADDRESS, 'mattfeeQA@gmail.com');
    // Click on the Resend Email button to request password reset
    await this.clickOnElement(BTN_SEND_EMAIL);
  };

  // ========================== Click Methods ==========================

  // ========================== Assertion Methods ==========================

  assertSuccessBanner = async (): Promise<void> => {
    console.log(' - loginForgotPasswordPage.assertSuccessBanner');
    // Wait for Success Alert box to display forgot password page
    await this.assertElementIsVisible(ALRT_SUCCESS);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
    // TODO: add assertion that email has been received in a test email account (Yopmail?)
  };

  // ========================== Navigate Methods ==========================
}
