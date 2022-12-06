import { BrowserContext, expect, Page } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { LoginLocatorsPage } from './login-locators.page';

// ========================== Selectors ==========================

/**
 * @export
 * @class LoginPage
 * @extends {LoginLocatorsPage}
 */
export class LoginPage extends LoginLocatorsPage {
  /**
   * @param {BrowserContext}context
   * @param {Page} page
   * @class LoginLocatorsPage
   */
  constructor(context: BrowserContext, page: Page) {
    super(context, page);
    this.page = page;
  }
  // ========================== Process Methods ==========================

  /**
   * @param {string} emailOrUsername
   * @param {string} password
   * @memberof LoginPage
   */
  login = async (emailOrUsername: string, password: string): Promise<void> => {
    const title = await this.page.title();
    console.log(title);
    if (title != 'Welcome back! Sign in to your account.') {
      await this.loginLocLnkSignIn.click();
    } else {
      await this.loginLocTxtEmailOrUsername.fill(emailOrUsername);
      await this.loginLocTxtPassword.fill(password);
      await this.loginLocBtnSignIn.click();
      await this.page.waitForLoadState('networkidle', { timeout: 250000 });
      if (await this.loginLocBtnOk.isVisible()) await this.loginLocBtnOk.click();
      await this.page.waitForLoadState('networkidle', { timeout: 250000 });
      throw new Error('Email or Password parameters are undefined');
    }
  };

  /**
   * @param {string} emailOrUsername
   * @param {string} password
   * @memberof LoginPage
   */
  loginWithEnterKey = async (emailOrUsername: string | undefined, password: string | undefined): Promise<void> => {
    if (emailOrUsername && password) {
      await this.loginLocTxtEmailOrUsername.fill(emailOrUsername);
      await this.loginLocTxtPassword.fill(password);
      await this.page.keyboard.press('Enter');
      await this.page.waitForLoadState('networkidle');
    }
  };

  // ========================== Navigate Methods ==========================
  /**
   * @memberof LoginPage
   */
  navigateToLoginPage = async (): Promise<void> => {
    await this.page.goto(UrlsUtils.legalshieldUrls.login.url);
  };
  /**
   * @memberof LoginPage
   */
  navigateToAccountPlansPage = async (): Promise<void> => {
    await this.page.goto(UrlsUtils.legalshieldUrls.account.url + '/plans');
    await this.page.waitForLoadState('networkidle');
  };
  /**
   * @memberof LoginPage
   */
  navigateToActivatePage = async (): Promise<void> => {
    await this.page.goto(UrlsUtils.legalshieldUrls.activate.url);
  };
  /**
   * @memberof LoginPage
   */
  navigateToLoginForgotUsernameOrEmailPage = async (): Promise<void> => {
    await this.loginLocLnkForgotEmailOrUsername.click();
    await this.page.waitForLoadState('domcontentloaded');
  };

  // ========================== Click Methods ==========================
  /**
   * @memberof LoginPage
   */
  clickForgotPasswordLink = async (): Promise<void> => {
    await this.loginLocLnkForgotPassword.click();
    await this.page.waitForLoadState('domcontentloaded');
  };
  /**
   * @memberof LoginPage
   */
  clickSignUpLink = async (): Promise<void> => {
    await this.loginLocLnkSignUp;
    await this.page.waitForLoadState('domcontentloaded');
  };

  // ========================== Assertion Methods ==========================
  /**
   * @memberof LoginPage
   */
  assertAccountsPlanPageUrl = async (): Promise<void> => {
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.account.url + '/plans');
    await this.page.waitForLoadState('domcontentloaded');
  };
  /**
   * @memberof LoginPage
   */
  assertAccountsPlanPageLoginRedirectUrl = async (): Promise<void> => {
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.account.url + '/plans?login_redirect=1');
    await this.page.waitForLoadState('domcontentloaded');
  };
  /**
   * @memberof LoginPage
   */
  assertActivatePageUrl = async (): Promise<void> => {
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.activate.url);
    await this.page.waitForLoadState('domcontentloaded');
  };
  /**
   * @memberof LoginPage
   */
  assertStatusPageUrl = async (): Promise<void> => {
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.status.url);
    await this.page.waitForLoadState('domcontentloaded');
  };
}
