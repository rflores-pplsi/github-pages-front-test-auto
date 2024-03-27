import { Locator, Page } from '@playwright/test';

export class SmallBusinessQuestionsComponent {
  readonly page: Page;
  readonly locPubliclyTradedOrNonProfitNoCheckbox: Locator;
  readonly locContinueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locPubliclyTradedOrNonProfitNoCheckbox = this.page
      .locator('//div[contains(@class,"lsux-modal")]//a[contains(@class,"lsux-list-item-input__button")]')
      .nth(1);
    this.locContinueButton = this.page.locator('//div[contains(@class,"lsux-modal")]//button[contains(@class,"lsux-button--primary")]');
  }
}
