import { Page, Locator } from '@playwright/test';

export class MarketingSiteHeaderComponent {
  protected page: Page;
  readonly locShoppingCartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locShoppingCartIcon = this.page.locator('//div[@id="lsc-header-cart-icon-desktop"]');
  }
}
