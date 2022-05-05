import { expect } from '@playwright/test';
import urlsUtils from '../../utils/urls.utils';
import { LoginPage } from '../login/login.page';

// ========================== Selectors ==========================

const url = urlsUtils.legalshieldUrls.shieldAtWork.url;
const txtEmail = '[placeholder="Email address/Username"]';
const txtPassword = '[placeholder="Password"]';
const btnSignIn = '#root button > span';
const txtGroupManagement = 'h2:has-text("Group management")';

/**
 * @export
 * @class LsWorkLoginPage
 * @extends {LoginPage}
 */
export class LsWorkLoginPage extends LoginPage {
  // ========================== Process Methods ==========================
  loginWithCredentials = async (): Promise<void> => {
    console.log(' - accountShieldAtWorkPage.loginWithCredentials');
    await this.page.fill(txtEmail, 'rossbrockhoff@pplsi.com');
    await this.page.fill(txtPassword, 'Br0ck!Ro$$');
    await this.clickOnElement(btnSignIn);
    await this.page.waitForTimeout(1000);
  };

  // ========================== Navigate Methods ==========================

  navigateToShieldAtWork = async (): Promise<void> => {
    console.log(' - accountShieldAtWorkPage.navigateToShieldAtWork');
    await this.page.goto(url);
  };

  // ========================== Click Methods ==========================

  // ========================== Assertion Methods ==========================

  // Verify that the group is displayed on the group management page
  assertTextGroup = async (): Promise<void> => {
    console.log(' - accountShieldAtWorkPage.assertTextGroup');
    await this.page.waitForSelector(txtGroupManagement);
    const locator = this.page.locator(txtGroupManagement);
    await expect(locator).toContainText('Group management');
  };
}
