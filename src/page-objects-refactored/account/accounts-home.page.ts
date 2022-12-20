import { Page, BrowserContext } from '@playwright/test';
import { AccountsBasePage } from './accounts-base-page';

/**
 *
 *
 * @export
 * @class AccountsHomePage
 * @extends {AccountsBasePage}
 */
export class AccountsHomePage extends AccountsBasePage {
  protected page: Page;

  constructor(page: Page, context: BrowserContext) {
    super(context, page);
    this.page = page;
  }
}
