import UrlsUtils from '../../utils/urls.utils';
import { oktaUser } from '../../utils/user.utils';
import { LegalshieldTestHarnessMenuPage } from '../../page-objects/test-harness/legalshield-test-harness-menu.page';

// require('dotenv').config;

// ========================== Selectors ==========================
const txtEmailAddress: string = '#okta-signin-username';
const btnSignIn: string = '#okta-signin-submit';
const txtPassword: string = '#okta-signin-password';

/**
 *
 *
 * @export
 * @class OktaPage
 * @extends {BasePage}
 */
export class OktaPage extends LegalshieldTestHarnessMenuPage {
  // ========================== Process Methods ==========================

  loginThroughOkta = async (): Promise<void> => {
    console.log(' - OktaPage.loginThroughOkta');
    const emailOrUsername = oktaUser.email;
    const password = oktaUser.password;
    console.log('username', emailOrUsername, password)
    if (emailOrUsername && password) {
      // Enter email
      await this.fillTextBox(txtEmailAddress, emailOrUsername);
      // Enter password into input
      // Have yet to find an explicit wait option, using this for now
      await this.page.waitForTimeout(500);
      await this.fillTextBox(txtPassword, password);
      // Click on Sign In to submit login form
      await this.clickOnElement(btnSignIn);
      // Wait for page to finish loading
      await this.page.waitForLoadState('networkidle');
    } else {
      throw new Error('Email or Password parameters are undefined');
    }
  };
  loginThroughOktaGroupEnrollment = async (): Promise<void> => {
    console.log(' - OktaPage.oktaLoginGroupEnrollment');
    // Enter email
    await this.fillTextBox(txtEmailAddress, 'qatesting@legalshieldcorp.com ');
    // Enter password into input
    await this.fillTextBox(txtPassword, 'fJ733ye8qb&q');
    // Click on Sign In to submit login form
    await this.clickOnElement(btnSignIn);
    // Wait for page to finish loading
    await this.page.waitForLoadState('load');
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
