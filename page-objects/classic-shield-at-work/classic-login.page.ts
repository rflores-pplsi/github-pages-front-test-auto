import urlsUtils from '../../utils/urls.utils';
import { LoginPage } from '../login/login.page';

// ========================== Selectors ==========================

const url = urlsUtils.legalshieldUrls.classicShieldAtWork.url;
const txtUsername = '[id="login"]';
const txtPassword = '[id="Password"]';
const btnSignIn = '#submitButton > button';

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

  // ========================== Assertion Methods ==========================
}
