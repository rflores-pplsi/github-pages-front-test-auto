import { Page } from '@playwright/test';
import { ProductDetails } from '../../../types/types';
import { MarketingSitesCartComponent } from '../marketing-sites-cart-component';

export class GbbAllPlansPage {
  readonly page: Page;
  readonly marketingSitesCartComponent: MarketingSitesCartComponent;

  constructor(page: Page) {
    this.page = page;
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
    if (term === 'Annual') {
      const annualAddToCartButtonLocator = this.page.locator(
        `//div[contains(concat(' ', normalize-space(@class), ' '), ' lsux-card ') and contains(., '${planName}') and .//p[contains(text(), 'A')]]//a`
      );
      await annualAddToCartButtonLocator.click();
    } else {
      const monthlyAddToCartButtonLocator = this.page.locator(
        `//div[contains(concat(' ', normalize-space(@class), ' '), ' lsux-card ') and contains(., '${planName}') and .//p[not(contains(text(), 'A'))]]//a`
      );
      await monthlyAddToCartButtonLocator.click();
    }
  };
}
