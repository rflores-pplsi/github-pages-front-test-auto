import { LoginPage } from './login.page';

// ========================== Selectors ==========================
const TXT_EMAIL = '[placeholder="Email"]';
const TXT_PASSWORD = '[placeholder="Password"]';
const TXT_CONFIRM_PASSWORD = '[placeholder="Re-enter Password"]';
const BTN_SIGN_UP = 'button:has-text("Sign up")';

/**
 * @export
 * @class LoginSignUpPage
 * @extends {LoginPage}
 */
export class LoginSignUpPage extends LoginPage {
  // ========================== Process Methods ==========================

  signUp = async (): Promise<void> => {
    console.log(' - loginSignUpPage.signUp');
    // generate random number to append to new email
    const randomEmail = 'qatesting+' + (await this.createRandomInt()) + '@yopmail.com';
    // Enter email or username into input
    await this.fillTextBox(TXT_EMAIL, randomEmail);
    // Enter password into input
    await this.fillTextBox(TXT_PASSWORD, 'Password10!');
    // Enter password into input to confirm password
    await this.fillTextBox(TXT_CONFIRM_PASSWORD, 'Password10!');
    // Click on Sign In to submit login form
    await this.clickOnElement(BTN_SIGN_UP);
    // Wait for page to finish loading
    await this.page.waitForLoadState('networkidle');
  };

  // ========================== Navigate Methods ==========================

  // ========================== Click Methods ==========================

  // ========================== Assertion Methods ==========================
}
