import { Locator, Page } from '@playwright/test';

export class PricingCardComponent {
  readonly page: Page;
  addToCartSelector: string;
  readonly locAnnualToggle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartSelector = '';
    this.locAnnualToggle = this.page.locator('//a[contains(.,"Annually")]');
  }

  clickAddToCartButton = async (productShortCode: string, term: string, planName: string): Promise<void> => {
    if (term === 'Annual') {
      await this.locAnnualToggle.click();
    }
    // Updated selector: find <a> with aria-label starting 'Add to cart' and containing plan name
    const addToCartLocator = this.page.locator(`a[aria-label^='Add to cart'][aria-label*='${planName.toUpperCase()}']`).first();
    await addToCartLocator.click();
  };
}
