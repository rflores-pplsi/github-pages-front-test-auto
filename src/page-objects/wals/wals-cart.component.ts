import { Page, Locator } from '@playwright/test';

export class WalsCartComponent {
  protected page: Page;
  readonly locCartContainer: Locator;
  readonly locContinueButton: Locator;
  readonly locCheckoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locCartContainer = this.page.locator('//div[contains(@class,"mini_cart")]');
    this.locContinueButton = this.page.locator('#legal_modal_checkout_btn.close_modal_btn');
    this.locCheckoutButton = this.page.locator('#minicart_btn_checkout');
  }
}
