import { Page, Locator } from '@playwright/test';

export class NewCheckoutConfirmationPage {
  protected page: Page;
  readonly locConfirmationWrapper: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locConfirmationWrapper = this.page.locator('//div[contains(@class,"confirmation-wrapper")]');
  }
}
