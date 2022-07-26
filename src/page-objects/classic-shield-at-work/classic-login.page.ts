import { expect } from '@playwright/test';
import urlsUtils from '../../utils/urls.utils';
import { LoginPage } from '../login/login.page';

// ========================== Selectors ==========================

const url = urlsUtils.legalshieldUrls.classicShieldAtWork.url;
const txtUsername = '[id="login"]';
const txtPassword = '[id="Password"]';
const btnSignIn = '#submitButton > button';
const btnSignUp = 'body > div > div.content > div > div > div > a';

/**
 * @export
 * @class ClassicShieldAtWork
 * @extends {LoginPage}
 */
export class ClassicShieldAtWork extends LoginPage {
  // ========================== Process Methods ==========================
  loginWithCredentials = async (): Promise<void> => {
    console.log(' - accountShieldAtWorkPage.loginWithCredentials');
    await this.page.fill(txtUsername, 'admin@test.com');
    await this.page.fill(txtPassword, 'Testpass1');
    await this.page.click(btnSignIn);
    await this.page.waitForTimeout(1000);
  };

  // ========================== Navigate Methods ==========================

  navigateToClassicShieldAtWork = async (): Promise<void> => {
    console.log(' - accountClassicShieldAtWorkPage.navigateToClassicShieldAtWork');
    await this.page.goto(url);
  };

  // ========================== Click Methods ==========================

  clickSignUp = async (): Promise<void> => {
    console.log(' - accountClassicShieldAtWorkPage.clickReports');
    // Click on Sign Up button
    await this.clickOnElement(btnSignUp);
  };

  // ========================== Assertion Methods ==========================

  assertTypeFormPageUrl = async (): Promise<void> => {
    console.log(' - activateEnterCodePage.assertTypeFormPageUrl');
    await this.clickSignUp();
    // Confirm the Type Form Page URL is displayed
    await expect(this.page).toHaveURL(urlsUtils.legalshieldUrls.typeForm.url);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };
}
