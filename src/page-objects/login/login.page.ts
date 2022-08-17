import { expect } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { BasePage } from '../base.page';

// ========================== Selectors ==========================
const txtEmailOrUsername: string = '[placeholder="Email address/Username"]';
const txtPassword: string = 'input[name="password"]';
const btnSignIn: string = '//button[contains(@class,"lsux-button--primary")]/span[contains(.,"Sign in")]';
const lnkSignUp: string = 'a:has-text("Sign up")';
const lnkSignIn: string = '//div[@class="content"]//a[contains(.,"Sign in")]';
const lnkForgotPassword: string = 'a:has-text("Forgot Password?")';
const lnkForgotEmailUsername: string = 'a:has-text("Forgot Email/Username?")';

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
        await this.page.locator(lnkSignIn).click();
      }
      // Enter email or username into input
      await this.fillTextBox(txtEmailOrUsername, emailOrUsername);
      // Enter password into input
      await this.fillTextBox(txtPassword, password);
      // Click on Sign In to submit login form
      await this.clickOnElement(btnSignIn);
      // Wait for page to finish loading
      await this.page.waitForLoadState('networkidle');
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
      await this.fillTextBox(txtEmailOrUsername, emailOrUsername);
      // Enter password into input
      await this.fillTextBox(txtPassword, password);
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
    await this.clickOnElement(lnkForgotEmailUsername);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };
  testEnv = async (): Promise<void> => {
    console.log(' - loginPage.testEnv');
    // Navigate to Account Plans Page
    console.log(process.env['LOGIN_EMAIL_DEV']);
  };

  // ========================== Click Methods ==========================

  clickForgotPasswordLink = async (): Promise<void> => {
    console.log(' - loginPage.clickForgotPasswordLink');
    // Click on the Forgot Password Link
    await this.clickOnElement(lnkForgotPassword);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  clickSignUpLink = async (): Promise<void> => {
    console.log(' - loginPage.clickSignUpLink');
    // Click on the Forgot Password Link
    await this.clickOnElement(lnkSignUp);
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
