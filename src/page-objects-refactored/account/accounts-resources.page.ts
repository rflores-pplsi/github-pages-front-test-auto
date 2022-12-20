import { BrowserContext, Page } from '@playwright/test';
import { AccountsBasePage } from './accounts-base-page';

/**
 *
 *
 * @export
 * @class AccountsResourcesPage
 * @extends {AccountsBasePage}
 */
export class AccountsResourcesPage extends AccountsBasePage {
  protected page: Page;

  constructor(page: Page, context: BrowserContext) {
    super(context, page);
    this.page = page;
  }
}
