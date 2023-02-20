import { BrowserContext, Page } from '@playwright/test';
import { AccountsBasePage } from './accounts-base-page';
/**
 *
 *
 * @export
 * @class AccountProfileLanguagePreferencesPage
 * @extends {AccountsBasePage}
 */
export class AccountProfileLanguagePreferencesPage extends AccountsBasePage {
  protected page: Page;

  constructor(page: Page, context: BrowserContext) {
    super(context, page);
    this.page = page;
  }

  /**
   *
   *
   * @param {string} languagePreferences
   * @memberof AccountProfileLanguagePreferencesPage
   */
  setLanguagePreferences = async (languagePreferences: string): Promise<void> => {
    await this.profileLanguagePreferencesLocLanguagePreferencesSelect.selectOption(languagePreferences);
    await this.profileLanguagePreferencesLocPreferencesDoneButton.click();
  };
}
