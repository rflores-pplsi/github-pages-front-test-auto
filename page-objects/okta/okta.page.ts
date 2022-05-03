import UrlsUtils from '../../utils/urls.utils';
import { oktaUser } from '../../utils/user.utils';
import { LoginPage } from '../login/login.page';

require('dotenv').config;

// ========================== Selectors ==========================
const txtEmailAddres: string = '#okta-signin-username';
const btnSignIn: string = '#okta-signin-submit';
const txtPassword: string = '#okta-signin-password';

/**
 *
 *
 * @export
 * @class OktaPage
 * @extends {BasePage}
 */
export class OktaPage extends LoginPage {
  // ========================== Process Methods ==========================

  loginThroughOkta = async (): Promise<void> => {
    console.log(' - OktaPage.loginThroughOkta');
    const emailOrUsername = oktaUser.email;
    const password = oktaUser.password;
    if (emailOrUsername && password) {
      // Enter email
      await this.fillTextBox(txtEmailAddres, emailOrUsername);
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

  // ========================== Navigate Methods ==========================

  navigateToMemberSearchOktaLogin = async (): Promise<void> => {
    console.log(' - loginPage.navigateToMemberSearchOktaLogin');
    // Navigate to Okta
    await this.goTo(UrlsUtils.legalshieldInternalUrls.member_search.url);
    // Wait for page to finish loading
    await this.page.waitForLoadState('networkidle');
  };

  navigateToPlanalyzerCsrCheckoutOktaLogin = async (): Promise<void> => {
    console.log(' - loginPage.navigateToPlanalyzerSearchOktaLogin');
    // Navigate to Okta
    await this.goTo(UrlsUtils.legalshieldInternalUrls.planalyzer_csr_checkout.url);
    // Wait for page to finish loading
    await this.page.waitForLoadState('networkidle');
  };
  // ========================== Click Methods ==========================

  // ========================== Assertion Methods ==========================
}
