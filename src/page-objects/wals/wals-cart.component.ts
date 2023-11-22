import { Page, Locator } from '@playwright/test';

export class WalsCartComponent {
  protected page: Page;
  readonly locCartContainer: Locator;
  readonly locContinueButton: Locator;
  readonly locKeepShoppingLink: Locator;
  readonly locCheckoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locCartContainer = this.page.locator('//div[contains(@class,"mini_cart")]');
    this.locContinueButton = this.page.locator('//div[contains(@class,"mini_cart")]//a[contains(@id,"checkout_btn") and not(@style="display:none")]');
    this.locKeepShoppingLink = this.page.locator('//div[@id="continue-shopping-link"]//a');
    this.locCheckoutButton = this.page.locator('#minicart_btn_checkout');
  }
}
