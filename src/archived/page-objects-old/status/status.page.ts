import UrlsUtils from '../../../utils/urls.utils';
import { StatusHeaderPage } from './status-header.page';
import { expect } from '@playwright/test';

// ========================== Selectors ==========================

/**
 * @export
 * @class StatusPage
 * @extends {StatusHeaderPage}
 */
export class StatusPage extends StatusHeaderPage {
  // ========================== Process Methods ==========================

  // ========================== Process Methods ==========================

  // ========================== Navigate Methods ==========================

  // ========================== Click Methods =============================

  clickSignInFromHeader = async (): Promise<void> => {
    console.log(' - statusPage.clickSignInFromHeader');
    await this.clickSignIn();
  };

  // ========================== Assertion Methods ==========================

  assertStatusPageLoginRedirectUrl = async (): Promise<void> => {
    console.log(' - loginPage.assertStatusPageLoginRedirectUrl');
    // Confirm the Status Page URL with login redirect is reached
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.status.url + '?login_redirect=1');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };
}
