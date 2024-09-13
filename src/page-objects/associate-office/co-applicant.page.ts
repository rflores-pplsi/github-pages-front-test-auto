import { Locator, Page } from '@playwright/test';

export class CoApplicantPage {
  readonly page: Page;
  readonly locSkipButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locSkipButton = this.page.locator('//button[@type="button"]');
  }

  clickSkipButton = async (): Promise<void> => {
    await this.locSkipButton.nth(0).click();
  };
}
