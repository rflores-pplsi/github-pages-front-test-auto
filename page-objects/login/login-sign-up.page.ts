import { LoginPage } from "./login.page";

// ========================== Selectors ==========================
const txtEmail: string = '[placeholder="Email"]';
const txtPassword: string = '[placeholder="Password"]';
const txtConfirmPassword: string = '[placeholder="Re-enter Password"]';
const btnSignUp: string = 'button:has-text("Sign up")';

/**
 * @export
 * @class LoginSignUpPage
 * @extends {LoginPage}
 */
export class LoginSignUpPage extends LoginPage {
  // ========================== Process Methods ==========================

  signUp = async (): Promise<void> => {
    console.log(" - loginSignUpPage.signUp");
    // generate random number to append to new email
    const randomEmail =
      "qatesting+" + (await this.createRandomInt()) + "@yopmail.com";
    // Enter email or username into input
    await this.fillTextBox(txtEmail, randomEmail);
    // Enter password into input
    await this.fillTextBox(txtPassword, "Password10!");
    // Enter password into input to confirm password
    await this.fillTextBox(txtConfirmPassword, "Password10!");
    // Click on Sign In to submit login form
    await this.clickOnElement(btnSignUp);
    // Wait for page to finish loading
    await this.page.waitForLoadState("networkidle");
  };

  // ========================== Navigate Methods ==========================

  // ========================== Click Methods ==========================

  // ========================== Assertion Methods ==========================
}
