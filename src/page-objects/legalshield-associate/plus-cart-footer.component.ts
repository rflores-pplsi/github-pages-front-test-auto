import { Locator, Page } from '@playwright/test';

export class PlusCartFooterComponent {
  protected page: Page;
  readonly locCartFooterContainer: Locator;
  readonly locPriceContainer: Locator;
  readonly locContinueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locCartFooterContainer = this.page.locator('//div[contains(@class,"tw-flex tw-items-center tw-justify-center tw-flex-col tw-sticky")]');
    this.locPriceContainer = this.page.locator('//div[contains(@class,"tw-flex tw-items-center tw-justify-between")]');
    this.locContinueButton = this.page.locator('//button[@data-pplsi-event-id="buy-now-button"]');
  }
}
