import { Page, Locator } from '@playwright/test';

export class WalsHeaderComponent {
  protected page: Page;
  readonly locShoppingCartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locShoppingCartIcon = this.page.locator('#minicart-title"]');
  }
}
