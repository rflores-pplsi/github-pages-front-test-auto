import { Locator, Page } from '@playwright/test';

export class PlusCartFooterComponent {
  protected page: Page;
  readonly locCartFooterContainer: Locator;
  readonly locPriceContainer: Locator;
  readonly locContinueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locCartFooterContainer = this.page.locator('//div[contains(@class,"footer-container")]');
    this.locPriceContainer = this.locCartFooterContainer.locator('//div[contains(@class,"price-container")]');
    this.locContinueButton = this.locCartFooterContainer.locator('//button[contains(@class,"lsux-button--primary")]');
  }
}
