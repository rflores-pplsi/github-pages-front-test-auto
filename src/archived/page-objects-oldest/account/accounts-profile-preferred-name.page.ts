import { BrowserContext, Page } from '@playwright/test';
import { AccountsBasePage } from './accounts-base-page';

/**
 *
 *
 * @export
 * @class AccountsProfilePreferredNamePage
 * @extends {AccountsBasePage}
 */
export class AccountsProfilePreferredNamePage extends AccountsBasePage {
  protected page: Page;

  constructor(page: Page, context: BrowserContext) {
    super(context, page);
    this.page = page;
  }

  /**
   *
   *
   * @param {string} preferredName
   * @memberof AccountsProfilePreferredNamePage
   */
  editPreferredNameAndSave = async (preferredName: string): Promise<void> => {
    await this.profilePreferredNameLocPreferredNameInput.fill(preferredName);
    await this.profileBirthLocSaveButton.click();
  };
}
