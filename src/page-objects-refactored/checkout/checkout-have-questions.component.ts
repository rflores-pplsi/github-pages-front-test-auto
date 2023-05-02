import { Locator, Page } from '@playwright/test';

export class CheckoutHaveQuestionsComponent {
  readonly page: Page;
  readonly locHaveQuestionsLabel: Locator;
  readonly locPhoneNumberButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locHaveQuestionsLabel = this.page.locator('//div[contains(@class,"support-card-container")]//h3');
    this.locPhoneNumberButton = this.page.locator('//div[contains(@class,"support-card-container")]//button');
  }
}
