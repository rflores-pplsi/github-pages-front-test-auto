import { expect } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { BasePage } from '../base.page';

// ========================== Selectors ==========================

/**
 * @export
 * @class ProfilePickerPage
 * @extends {BasePage}
 */
export class ProfilePickerPage extends BasePage {
  // ========================== Process Methods ==========================

  // ========================== Navigate Methods ==========================

  // ========================== Click Methods ==========================

  // ========================== Assertion Methods ==========================

  assertLoginUrl = async (): Promise<void> => {
    console.log(' - loginPage.assertLoginPageUrl');
    // Confirm user successfully logged in by asserting URL
    await expect(this.page).toHaveURL(UrlsUtils.channelsUrls.login.url + '?login_redirect=1');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };
}
