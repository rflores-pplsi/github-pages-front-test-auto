import UrlsUtils from '../../../utils/urls.utils';
import { LoginPage } from '../login/login.page';
import { expect } from '@playwright/test';

// ========================== Selectors ==========================
const STP_ENTER_CODE = '//div[contains(@class, "step-container") and contains(.,"Enter Code")]//div[contains(@class,"step-circle--current")]';
const TXT_ACCOUNT_CODE = '[placeholder="123456"]';
const BTN_CREATE_ACCOUNT = 'button:has-text("Create Account")';
const LNK_DONT_KNOW_CODE = 'a:has-text("know your code?")';
const LNK_SIGN_IN_AS_ANOTHER_USER = 'a:has-text("Sign in as another user")';
const MSG_SUCCESS = 'span:has-text("Success, an email has been sent to your email address.")';

/**
 * @export
 * @class ActivatePage
 * @extends {LoginPage}
 */
export class ActivatePage extends LoginPage {
  // ========================== Process Methods ==========================
  submitAccountCode = async (accountCode: string): Promise<void> => {
    console.log(' - activateEnterCodePage.submitAccountCode');
    await this.fillTextBox(TXT_ACCOUNT_CODE, accountCode);
    await this.clickOnElement(BTN_CREATE_ACCOUNT);
  };

  // ========================== Navigate Methods ==========================
  // ========================== Click Methods ==========================

  clickDontKnowCodeLink = async (): Promise<void> => {
    console.log(' - activateEnterCodePage.clickDontKnowCodeLink');
    await this.clickOnElement(LNK_DONT_KNOW_CODE);
  };

  clickSignInAsAnotherUserLink = async (): Promise<void> => {
    console.log(' - activateEnterCodePage.clickSignInAsAnotherUserLink');
    await this.clickOnElement(LNK_SIGN_IN_AS_ANOTHER_USER);
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
    await this.assertElementIsVisible(STP_ENTER_CODE);
  };

  assertSuccessMsgIsDisplayed = async (): Promise<void> => {
    console.log(' - activateEnterCodePage.assertSuccessMsgIsDisplayed');
    // Confirm Success message is displayed
    await this.assertElementIsVisible(MSG_SUCCESS);
  };
}
