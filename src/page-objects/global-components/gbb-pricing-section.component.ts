import { Page, Locator, BrowserContext } from '@playwright/test';

export class GbbPricingSectionComponent {
  protected page: Page;
  readonly context: BrowserContext;
  readonly locGbbPricingSection: Locator;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.context = context;
    this.locGbbPricingSection = this.page.locator('//div[@id="gbb-pricing-section"]');
  }
}
