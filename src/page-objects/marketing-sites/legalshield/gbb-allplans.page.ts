import { Locator, Page } from '@playwright/test';
import { ProductDetails } from '../../../types/types';
import { MarketingSitesCartComponent } from '../marketing-sites-cart-component';

export class GbbAllPlansPage {
  readonly page: Page;
  addToCartSelector: string;
  readonly locAnnualToggle: Locator;
  readonly marketingSitesCartComponent: MarketingSitesCartComponent;

  constructor(page: Page) {
    this.page = page;
    this.addToCartSelector = '';
    this.locAnnualToggle = this.page.locator('//div[@data-period="annual"]');
    this.marketingSitesCartComponent = new MarketingSitesCartComponent(this.page);
  }

  addProductsFromProductDetails = async (productDetails: Array<ProductDetails>): Promise<void> => {
    let counter = productDetails.length;
    for (const product of productDetails) {
      await this.clickAddToCartButton(product.name, product.term);
    }
    if (counter == 1) {
      await this.page.waitForTimeout(500);
      await this.marketingSitesCartComponent.locCheckoutButton.click();
    } else {
      await this.marketingSitesCartComponent.locContinueShoppingLink.click();
    }
    counter--;
  };

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
