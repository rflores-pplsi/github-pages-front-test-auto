import { Locator, Page } from '@playwright/test';

export class SmallBusinessQuestionsComponent {
  readonly page: Page;
  readonly locPubliclyTradedOrNonProfitNoCheckbox: Locator;
  readonly locContinueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locPubliclyTradedOrNonProfitNoCheckbox = this.page.locator('#publiclyTraded_false');
    this.locContinueButton = this.page
      .locator('//button[contains(@class,"lsux-button lsux-button--primary lsux-button--rectangular") and contains(.,"Continue")]')
      .nth(1);
  }
}
