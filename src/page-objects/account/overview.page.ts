import { Page, expect, Locator } from '@playwright/test';

export class OverviewPage {
  protected page: Page;
  private locUpgradePlanButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locUpgradePlanButton = this.page.locator('//div[contains(@class,"upgrade-banner")]/button');
  }

  assertAccountsOverviewPageReached = async (): Promise<void> => {
    await this.locUpgradePlanButton.waitFor();
    await expect.soft(this.page).toHaveURL(new RegExp('legalshield.com/overview'));
  };
}
