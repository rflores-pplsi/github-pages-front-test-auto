import UrlsUtils from '../../utils/urls.utils';
import { oktaUser } from '../../utils/user.utils';
import { LegalshieldTestHarnessMenuPage } from '../../page-objects (Archived)/test-harness/legalshield-test-harness-menu.page';

// require('dotenv').config;

// ========================== Selectors ==========================
const TXT_EMAIL_ADDRESS = '#okta-signin-username';
const BTN_SIGN_IN = '#okta-signin-submit';
const TXT_PASSWORD = '#okta-signin-password';

/**
 *
 *
 * @export
 * @class OktaPage
 * @extends {LegalshieldTestHarnessMenuPage}
 */
export class OktaPage extends LegalshieldTestHarnessMenuPage {
  // ========================== Process Methods ==========================

  loginThroughOkta = async (): Promise<void> => {
    console.log(' - OktaPage.loginThroughOkta');
    const emailOrUsername = oktaUser.email;
    const password = oktaUser.password;
    console.log('username', emailOrUsername, password);
    if (emailOrUsername && password) {
      // Enter email
      await this.fillTextBox(TXT_EMAIL_ADDRESS, emailOrUsername);
      // Enter password into input
      // Have yet to find an explicit wait option, using this for now
      await this.page.waitForTimeout(500);
      await this.fillTextBox(TXT_PASSWORD, password);
      // Click on Sign In to submit login form
      await this.clickOnElement(BTN_SIGN_IN);
      // Wait for page to finish loading
      await this.page.waitForLoadState('networkidle');
    } else {
      throw new Error('Email or Password parameters are undefined');
    }
  };
  loginThroughOktaGroupEnrollment = async (): Promise<void> => {
    console.log(' - OktaPage.oktaLoginGroupEnrollment');
    // Enter email
    await this.fillTextBox(TXT_EMAIL_ADDRESS, 'qatesting@legalshieldcorp.com ');
    // Enter password into input
    await this.fillTextBox(TXT_PASSWORD, 'fJ733ye8qb&q');
    // Click on Sign In to submit login form
    await this.clickOnElement(BTN_SIGN_IN);
    // Wait for page to finish loading
    await this.page.waitForLoadState('load');
  };

  // ========================== Navigate Methods ==========================

  navigateToMemberSearchOktaLogin = async (): Promise<void> => {
    console.log(' - loginPage.navigateToMemberSearchOktaLogin');
    // Navigate to Okta
    await this.goTo(UrlsUtils.legalshieldInternalUrls.memberSearch.url);
    // Wait for page to finish loading
    await this.page.waitForLoadState('networkidle');
  };

  navigateToPlanalyzerCsrCheckoutOktaLogin = async (): Promise<void> => {
    console.log(' - loginPage.navigateToPlanalyzerSearchOktaLogin');
    // Navigate to Okta
    await this.goTo(UrlsUtils.legalshieldInternalUrls.planalyzerCSRCheckout.url);
    // Wait for page to finish loading
    await this.page.waitForLoadState('networkidle');
  };
  // ========================== Click Methods ==========================

  // ========================== Assertion Methods ==========================
}
