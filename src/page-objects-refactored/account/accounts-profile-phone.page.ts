import { BrowserContext, Page } from '@playwright/test';
import { AccountsBasePage } from './accounts-base-page';
/**
 *
 *
 * @export
 * @class AccountsProfilePhonePage
 * @extends {AccountsBasePage}
 */
export class AccountsProfilePhonePage extends AccountsBasePage {
  protected page: Page;

  constructor(page: Page, context: BrowserContext) {
    super(context, page);
    this.page = page;
  }

  /**
   *
   *
   * @param {string} phoneNumber
   * @param {string} phoneType
   * @memberof AccountsProfilePhonePage
   */
  addNewPhoneNumberAndSave = async (phoneNumber: string, phoneType: string): Promise<void> => {
    await this.profilePhoneLocPhoneNumberInput.fill(phoneNumber);
    await this.profilePhoneLocPhoneTypeSelect.selectOption(phoneType);
    await this.profilePhoneLocPhoneSaveButton.click();
  };
}
