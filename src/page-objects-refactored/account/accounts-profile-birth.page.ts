import { BrowserContext, Page } from '@playwright/test';
import { AccountsBasePage } from './accounts-base-page';

/**
 *
 *
 * @export
 * @class AccountsProfileBirthPage
 * @extends {AccountsBasePage}
 */
export class AccountsProfileBirthPage extends AccountsBasePage {
  protected page: Page;

  constructor(page: Page, context: BrowserContext) {
    super(context, page);
    this.page = page;
  }

  /**
   *
   *
   * @param {string} dateOfBirth
   * @memberof AccountsProfileBirthPage
   */
  editDateOfBirthAndSave = async (dateOfBirth: string): Promise<void> => {
    await this.profileBirthLocDateOfBirthInput.fill(dateOfBirth);
    await this.profileBirthLocSaveButton.click();
  };
}
