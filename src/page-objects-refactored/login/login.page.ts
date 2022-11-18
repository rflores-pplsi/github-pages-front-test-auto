import { expect } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { BasePage } from '../base.page';

// ========================== Selectors ==========================
const TXT_EMAIL_OR_USERNAME = '[placeholder="Email address/Username"]';
const TXT_PASSWORD = '[name="password"]';
const BTN_SIGN_IN = '//button[contains(@class,"lsux-button--primary")]/span[contains(.,"Sign in")]';
const LNK_SIGN_UP = 'a:has-text("Sign up")';
const LNK_SIGN_IN = '//div[@class="content"]//a[contains(.,"Sign in")]';
const LNK_FORGOT_PASSWORD = 'a:has-text("Forgot Password?")';
const LNK_FORGOT_EMAIL_USERNAME = 'a:has-text("Forgot Email/Username?")';
const BTN_OK = '//span[contains(text(),"OK")]';

/**
 * @export
 * @class LoginPage
 * @extends {BasePage}
 */
export class LoginPage extends BasePage {
  // ========================== Process Methods ==========================

  /**
   * @param {string} emailOrUsername
   * @param {string} password
   * @memberof LoginPage
   */
  // email and password could potentially be undefined, as it is created partially from an env variable
  login = async (emailOrUsername: string | undefined, password: string | undefined): Promise<void> => {
    console.log(' - loginPage.login');
    if (emailOrUsername && password) {
      // If statement exists because depending on the application you came from, you may be on signup or signin pages
      // Sign in element is hidden by a span, so the isHidden check still indicates I need to get to sign in page
      const title = await this.page.title();
      if (title != 'Welcome back! Sign in to your account.') {
        await this.page.locator(LNK_SIGN_IN).click();
      }
      // Enter email or username into input
      await this.fillTextBox(TXT_EMAIL_OR_USERNAME, emailOrUsername);
      // Enter password into input
      await this.fillTextBox(TXT_PASSWORD, password);
      // Click on Sign In to submit login form
      await this.clickOnElement(BTN_SIGN_IN);
      // Click on Ok pop up to submit login form
      // no Ok pop up button in prod yet -> need to comment out this line before run
      await this.page.waitForLoadState('networkidle', { timeout: 250000 });
      if (await this.page.locator(BTN_OK).isVisible()) await this.clickOnElement(BTN_OK);

      // Wait for page to finish loading
      await this.page.waitForLoadState('networkidle', { timeout: 250000 });
    } else {
      throw new Error('Email or Password parameters are undefined');
    }
  };

  /**
   * @param {string} emailOrUsername
   * @param {string} password
   * @memberof LoginPage
   */
  // email and password could potentially be undefined, as it is created partially from an env variable
  loginWithEnterKey = async (emailOrUsername: string | undefined, password: string | undefined): Promise<void> => {
    console.log(' - loginPage.loginWithEnterKey');
    if (emailOrUsername && password) {
      // Enter email or username into input
      await this.fillTextBox(TXT_EMAIL_OR_USERNAME, emailOrUsername);
      // Enter password into input
      await this.fillTextBox(TXT_PASSWORD, password);
      // Press Enter key to submit login form
      await this.page.keyboard.press('Enter');
      // Wait for page to finish loading
      await this.page.waitForLoadState('networkidle');
    }
  };

  // ========================== Navigate Methods ==========================

  navigateToLoginPage = async (): Promise<void> => {
    console.log(' - loginPage.navigateToLoginPage');
    // Navigate to Account Plans Page
    await this.goTo(UrlsUtils.legalshieldUrls.login.url);
    // Wait for page to finish loading
    await this.page.waitForLoadState('networkidle');
  };

  navigateToAccountPlansPage = async (): Promise<void> => {
    console.log(' - loginPage.navigateToAccountPlansPage');
    // Navigate to Account Plans Page
    await this.goTo(UrlsUtils.legalshieldUrls.account.url + '/plans');
    // Wait for page to finish loading
    await this.page.waitForLoadState('networkidle');
  };

  navigateToActivatePage = async (): Promise<void> => {
    console.log(' - loginPage.navigateToActivatePage');
    // Navigate to Activate Page
    await this.goTo(UrlsUtils.legalshieldUrls.activate.url);
  };

  navigateToLoginForgotUsernameOrEmailPage = async (): Promise<void> => {
    console.log(' - loginPage.navigateToLoginForgotUsernameOrEmailPage');
    // Click on Forgot Email/Username to navigate to Forgot Username Or Email Page
    await this.clickOnElement(LNK_FORGOT_EMAIL_USERNAME);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  // ========================== Click Methods ==========================

  clickForgotPasswordLink = async (): Promise<void> => {
    console.log(' - loginPage.clickForgotPasswordLink');
    // Click on the Forgot Password Link
    await this.clickOnElement(LNK_FORGOT_PASSWORD);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  clickSignUpLink = async (): Promise<void> => {
    console.log(' - loginPage.clickSignUpLink');
    // Click on the Forgot Password Link
    await this.clickOnElement(LNK_SIGN_UP);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  // ========================== Assertion Methods ==========================

  assertAccountsPlanPageUrl = async (): Promise<void> => {
    console.log(' - loginPage.assertAccountsPlanPageUrl');
    // Confirm the Accounts Plan Page URL is reached
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.account.url + '/plans');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  assertAccountsPlanPageLoginRedirectUrl = async (): Promise<void> => {
    console.log(' - loginPage.assertAccountsPlanPageLoginRedirectUrl');
    // Confirm the Accounts Plan Page URL with login redirect is reached
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.account.url + '/plans?login_redirect=1');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  assertActivatePageUrl = async (): Promise<void> => {
    console.log(' - loginPage.assertActivatePageUrl');
    // Confirm the Activate Page URL is reached
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.activate.url);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  assertStatusPageUrl = async (): Promise<void> => {
    console.log(' - loginPage.assertStatusPageUrl');
    // Confirm the Status Page URL is reached
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.status.url);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };
}
