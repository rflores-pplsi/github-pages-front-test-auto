import { Page, Locator } from '@playwright/test';

export class MarketingSitesCartComponent {
  protected page: Page;
  readonly locCartContainerDiv: Locator;
  readonly locCheckoutButton: Locator;
  readonly locCanadaCheckoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locCartContainerDiv = this.page.locator('//div[@id="cart-container"]');
    this.locCheckoutButton = this.page.locator('//button[contains(.,"Checkout")]');
    this.locCanadaCheckoutButton = this.page.locator('#checkout-btn');
  }
}
