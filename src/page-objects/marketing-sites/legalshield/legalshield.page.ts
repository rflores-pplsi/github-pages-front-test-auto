import { Page, BrowserContext } from '@playwright/test';

export class LegalshieldPage {
  readonly page: Page;
  readonly context: BrowserContext;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.context = context;
  }
}
