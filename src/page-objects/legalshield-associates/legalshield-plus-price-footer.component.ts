import { Locator, Page } from '@playwright/test';

export class LegalshieldPlusPriceFooterComponent {
  protected page: Page;
  readonly locPriceFooterContainer: Locator;
  readonly locPriceContainer: Locator;
  readonly locPriceFooterContinueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locPriceFooterContainer = this.page.locator('//div[contains(@class,"footer-container")]');
    this.locPriceContainer = this.locPriceFooterContainer.locator('//div[contains(@class,"price-container")]');
    this.locPriceFooterContinueButton = this.locPriceFooterContainer.locator('//button[contains(@class,"lsux-button--primary")]');
  }
}
