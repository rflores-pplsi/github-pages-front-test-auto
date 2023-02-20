import { BrowserContext, Page } from '@playwright/test';
import { AccountsBasePage } from './accounts-base-page';
/**
 *
 *
 * @export
 * @class AccountsProfileEmailPage
 * @extends {AccountsBasePage}
 */
export class AccountsProfileEmailPage extends AccountsBasePage {
  protected page: Page;

  constructor(page: Page, context: BrowserContext) {
    super(context, page);
    this.page = page;
  }

  /**
   *
   *
   * @param {string} emailAddress
   * @memberof AccountProfileEmailPage
   */
  addNewEmailAddressAndSave = async (emailAddress: string): Promise<void> => {
    await this.profileEmailLocAddButton.click();
    await this.profileEmailLocEmailAddressInput.fill(emailAddress);
    await this.profileEmailLocSaveButton.click();
  };
}
