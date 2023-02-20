import { Locator, Page } from '@playwright/test';

export class PplsiBusinessSolutionsOrientationPage {
  readonly page: Page;
  readonly locSampleLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locSampleLocator = this.page.locator('');
  }
}
