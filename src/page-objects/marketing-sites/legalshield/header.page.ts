import { Page, Locator } from '@playwright/test';

export class HeaderComponent {
  readonly page: Page;
  readonly dialogCloseButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dialogCloseButton = this.page.locator('//div[contains(@class,"ub-emb-iframe-wrapper ub-emb-visible")]//button');
  }
}
