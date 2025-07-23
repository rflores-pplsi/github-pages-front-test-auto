import { Page, BrowserContext, Locator, expect } from '@playwright/test';

export class LegalshieldPage {
  readonly page: Page;
  readonly context: BrowserContext;
  private readonly locPrivacySettingsHeader: Locator;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.context = context;
    this.locPrivacySettingsHeader = this.page.locator('//h1[text()="Privacy Center"]');
  }

  assertPrivacySettingsHeaderIsVisible = async (): Promise<void> => {
    await this.page.waitForLoadState('domcontentloaded');
    await expect.soft(this.locPrivacySettingsHeader).toBeVisible();
  };
}
