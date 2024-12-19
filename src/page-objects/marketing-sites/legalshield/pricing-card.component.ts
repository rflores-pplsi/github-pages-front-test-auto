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

  clickAddToCartButton = async (productShortCode: string, term: string): Promise<void> => {
    if (term === 'Annual') {
      await this.locAnnualToggle.click();
    }
    // Currently UAT, remove after confirming future state
    // const addToCartLocator = this.page.locator(
    //   `//a[@data-product-shortcode="${planName}"]`
    // ).nth(0);    
    const addToCartLocator = this.page.locator(`//div[contains(@class,"lsc-add-to-cart-button") and .//div[@class="et_pb_code_inner" and text()="${productShortCode}"]]//a`);
    await addToCartLocator.click();
  };
}
