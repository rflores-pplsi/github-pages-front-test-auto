import { Locator, Page } from '@playwright/test';

export class PricingCardComponent {
  readonly page: Page;
  addToCartSelector: string;
  readonly locAnnualToggle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartSelector = '';
    this.locAnnualToggle = this.page.locator('//div[@data-period="annual"]');
  }

  clickAddToCartButton = async (planName: string, term: string): Promise<void> => {
    const cardLocator = this.page.locator(
      `//div[contains(concat(' ', normalize-space(@class), ' '), ' pricing-card ') and .//div[normalize-space(text())='${planName}']]`
    );

    if (term === 'Annual') {
      await this.locAnnualToggle.click();
      this.addToCartSelector = `//div[contains(@class,"cta-section-annual")]//a`;
    }
    if (term === 'Monthly') {
      this.addToCartSelector = `//div[contains(@class,"cta-section-month")]//a`;
    }
    const monthlyAddToCartButtonLocator = cardLocator.locator(this.addToCartSelector);
    await monthlyAddToCartButtonLocator.click();
  };
}
