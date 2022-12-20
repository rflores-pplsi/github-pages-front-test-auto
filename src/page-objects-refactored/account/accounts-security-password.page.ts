import { BrowserContext, Page } from '@playwright/test';
import { AccountsBasePage } from './accounts-base-page';

/**
 *
 *
 * @export
 * @class AccountsSecurityPasswordPage
 * @extends {AccountsBasePage}
 */
export class AccountsSecurityPasswordPage extends AccountsBasePage {
  protected page: Page;

  constructor(page: Page, context: BrowserContext) {
    super(context, page);
    this.page = page;
  }

  /**
   *
   *
   * @param {string} password
   * @memberof AccountsSecurityPasswordPage
   */
  editPasswordAndSave = async (password: string): Promise<void> => {
    await this.securityLocPasswordPasswordInput.fill(password);
    await this.securityLocPasswordSaveButton.click();
  };
}
