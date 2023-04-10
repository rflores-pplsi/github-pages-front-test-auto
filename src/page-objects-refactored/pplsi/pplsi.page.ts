import { Page, BrowserContext } from '@playwright/test';
import { PplsiFooterComponent } from '../pplsi/pplsi-footer.component';

/**
 *
 *
 * @export
 * @class PplsiPage
 */
export class PplsiPage {
  readonly page: Page;
  readonly context: BrowserContext;
  readonly pplsiFooterComponent: PplsiFooterComponent;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.context = context;
    this.pplsiFooterComponent = new PplsiFooterComponent(page);
  }
}
