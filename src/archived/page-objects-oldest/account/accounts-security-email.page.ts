import { BrowserContext, Page } from '@playwright/test';
import { AccountsBasePage } from './accounts-base-page';

/**
 *
 *
 * @export
 * @class AccountsSecurityEmailPage
 * @extends {AccountsBasePage}
 */
export class AccountsSecurityEmailPage extends AccountsBasePage {
  protected page: Page;

  constructor(page: Page, context: BrowserContext) {
    super(context, page);
    this.page = page;
  }

  /**
   *
   *
   * @param {string} email
   * @memberof AccountsSecurityEmailPage
   */
  selectSignInEmailAddressAndClickDone = async (email: string): Promise<void> => {
    const locEmailToggle = this.page.locator(
      `//div[contains(@class,"lsux-container lsux-container--white  lsux-container--flexbox   lsux-container--flex-justify-space-between   my-4") and contains(.,"${email}")]//button`
    );
    await locEmailToggle.click();
    await this.securityLocEmailDoneButton.click();
  };
}
