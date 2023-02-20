import { BrowserContext, Page } from '@playwright/test';
import { AccountsBasePage } from './accounts-base-page';

/**
 *
 *
 * @export
 * @class AccountsProfilePronounsPage
 * @extends {AccountsBasePage}
 */
export class AccountsProfilePronounsPage extends AccountsBasePage {
  protected page: Page;

  constructor(page: Page, context: BrowserContext) {
    super(context, page);
    this.page = page;
  }

  /**
   *
   *
   * @param {string} preferredName
   * @memberof AccountsProfilePronounsPage
   */
  editPronounsAndSave = async (preferredName: string): Promise<void> => {
    await this.profilePronounsLocPronounsInput.fill(preferredName);
    await this.profileBirthLocSaveButton.click();
  };
}
