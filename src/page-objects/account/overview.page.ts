import { Page, expect } from '@playwright/test';


export class OverviewPage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  assertAccountsOverviewPageReached = async (): Promise<void> => {
    await expect.soft(this.page).toHaveURL(new RegExp('legalshield.com/overview'));
  };
}
