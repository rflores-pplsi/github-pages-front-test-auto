import UrlsUtils from '../../utils/urls.utils';
import { LoginPage } from '../login/login.page';
import { expect } from '@playwright/test';

// ========================== Selectors ==========================
const stpEnterCode: string =
  '//div[contains(@class, "step-container") and contains(.,"Enter Code")]//div[contains(@class,"step-circle--current")]';
const txtAccountCode: string = '[placeholder="123456"]';
const btnCreateAccount: string = 'button:has-text("Create Account")';
const lnkDontKnowCode: string = 'a:has-text("know your code?")';
const lnkSignInAsAnotherUser: string = 'a:has-text("Sign in as another user")';
const msgSuccess: string = 'span:has-text("Success, an email has been sent to your email address.")';

/**
 * @export
 * @class ActivatePage
 * @extends {LoginPage}
 */
export class ActivatePage extends LoginPage {
  // ========================== Process Methods ==========================
  submitAccountCode = async (accountCode: string): Promise<void> => {
    console.log(' - activateEnterCodePage.submitAccountCode');
    await this.fillTextBox(txtAccountCode, accountCode);
    await this.clickOnElement(btnCreateAccount);
  };

  // ========================== Navigate Methods ==========================
  // ========================== Click Methods ==========================

  clickDontKnowCodeLink = async (): Promise<void> => {
    console.log(' - activateEnterCodePage.clickDontKnowCodeLink');
    await this.clickOnElement(lnkDontKnowCode);
  };

  clickSignInAsAnotherUserLink = async (): Promise<void> => {
    console.log(' - activateEnterCodePage.clickSignInAsAnotherUserLink');
    await this.clickOnElement(lnkSignInAsAnotherUser);
  };

  // ========================== Assertion Methods ==========================

  assertActivatePageLoginRedirectUrl = async (): Promise<void> => {
    console.log(' - activateEnterCodePage.assertActivatePageLoginRedirectUrl');
    // Confirm the Activate Page URL with login redirect is reached
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.activate.url + '?login_redirect=1');
    // Wait for document to load to improve final screenshot
    await this.page.waitForLoadState('domcontentloaded');
  };

  assertOnTheActivateEnterCodePage = async (): Promise<void> => {
    console.log(' - activateEnterCodePage.assertOnTheActivateEnterCodePage');
    // Confirm correct step in the stepper is displayed as current
    await this.assertElementIsVisible(stpEnterCode);
  };

  assertSuccessMsgIsDisplayed = async (): Promise<void> => {
    console.log(' - activateEnterCodePage.assertSuccessMsgIsDisplayed');
    // Confirm Success message is displayed
    await this.assertElementIsVisible(msgSuccess);
  };
}
