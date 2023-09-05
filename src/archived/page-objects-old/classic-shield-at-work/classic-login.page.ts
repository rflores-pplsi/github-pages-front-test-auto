import { expect } from '@playwright/test';
import urlsUtils from '../../../utils/urls.utils';
import { LoginPage } from '../login/login.page';

// ========================== Selectors ==========================

const url = urlsUtils.legalshieldUrls.classicShieldAtWork.url;
const TXT_USER_NAME = '[id="login"]';
const TXT_PASSWORD = '[id="Password"]';
const BTN_SIGN_IN = '#submitButton > button';
const BTN_SIGN_UP = 'body > div > div.content > div > div > div > a';

/**
 * @export
 * @class ClassicShieldAtWork
 * @extends {LoginPage}
 */
export class ClassicShieldAtWork extends LoginPage {
  // ========================== Process Methods ==========================
  loginWithCredentials = async (): Promise<void> => {
    console.log(' - accountShieldAtWorkPage.loginWithCredentials');
    await this.page.fill(TXT_USER_NAME, 'admin@test.com');
    await this.page.fill(TXT_PASSWORD, 'Testpass1');
    await this.page.click(BTN_SIGN_IN);
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
    await this.clickOnElement(BTN_SIGN_UP);
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
