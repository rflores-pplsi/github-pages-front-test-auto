import { BrowserContext, Page } from '@playwright/test';
import { AccountsBasePage } from './accounts-base-page';

/**
 *
 *
 * @export
 * @class AccountsSecurityPage
 * @extends {AccountsBasePage}
 */
export class AccountsSecurityPage extends AccountsBasePage {
  protected page: Page;

  constructor(page: Page, context: BrowserContext) {
    super(context, page);
    this.page = page;
  }

  /**
   *
   *
   * @param {string} password
   * @memberof AccountsSecurityPage
   */
  editPasswordAndSave = async (password: string): Promise<void> => {
    await this.profileBirthLocDateOfBirthInput.fill(password);
    await this.profileBirthLocSaveButton.click();
  };

  /**
   *
   *
   * @param {string} password
   * @memberof AccountsSecurityPage
   */
  selectSignInEmailAddressAndSave = async (password: string): Promise<void> => {
    await this.profileBirthLocDateOfBirthInput.fill(password);
    await this.profileBirthLocSaveButton.click();
  };
}
