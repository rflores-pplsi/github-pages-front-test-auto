import { Page, Locator } from '@playwright/test';

export class MarketingSitesCartComponent {
  protected page: Page;
  readonly locCartContainerDiv: Locator;
  readonly locCheckoutButton: Locator;
  readonly locContinueShoppingLink: Locator;
  readonly locSmallBusinessQuestionBox: Locator;
  readonly locTrashCanIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locCartContainerDiv = this.page.locator('//div[@id="cart-container"]');
    this.locCheckoutButton = this.page.locator('#checkout-btn');
    this.locContinueShoppingLink = this.page.locator('//div[@id="continue-shopping-link"]//a');
    this.locSmallBusinessQuestionBox = this.page.locator('//div[@id="qualifying-container"]//div[@class="pop-up-title"]');
    this.locTrashCanIcon = this.page.locator('//img[contains(@class,"trash-icon")]');
  }
}
