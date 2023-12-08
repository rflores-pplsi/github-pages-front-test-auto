import { Page, Locator } from '@playwright/test';

export class MarketingSiteHeaderComponent {
  protected page: Page;
  readonly locShoppingCartIcon: Locator;
  readonly locShoppingCartItemAddedNotification: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locShoppingCartIcon = this.page.locator('//div[@id="lsc-header-cart-icon-desktop"]');
    this.locShoppingCartItemAddedNotification = this.page.locator('//div[contains(@class,"lsdsFixedHeader")]//div[contains(@class,"notification")]');
  }
}
