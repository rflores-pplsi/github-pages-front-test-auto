import { BrowserContext, Page } from '@playwright/test';
import { AccountsBasePage } from './accounts-base-page';

/**
 *
 *
 * @export
 * @class AccountsProfileTitlePage
 * @extends {AccountsBasePage}
 */
export class AccountsProfileTitlePage extends AccountsBasePage {
  protected page: Page;

  constructor(page: Page, context: BrowserContext) {
    super(context, page);
    this.page = page;
  }

  /**
   *
   *
   * @param {string} preferredName
   * @memberof AccountsProfileTitlePage
   */
  editTitleAndSave = async (preferredName: string): Promise<void> => {
    await this.profileTitleLocTitleInput.fill(preferredName);
    await this.profileBirthLocSaveButton.click();
  };
}
