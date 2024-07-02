import { Page } from '@playwright/test';
import { ProductDetails } from '../../../types/types';
import { MarketingSitesCartComponent } from '../marketing-sites-cart-component';
import { PricingCardComponent } from './pricing-card.component';

export class GbbAllPlansPage {
  readonly page: Page;
  readonly marketingSitesCartComponent: MarketingSitesCartComponent;
  readonly pricingCardComponent: PricingCardComponent;

  constructor(page: Page) {
    this.page = page;
    this.marketingSitesCartComponent = new MarketingSitesCartComponent(this.page);
    this.pricingCardComponent = new PricingCardComponent(this.page);
  }

  addProductsFromProductDetails = async (productDetails: Array<ProductDetails>): Promise<void> => {
    let counter = productDetails.length;
    for (const product of productDetails) {
      await this.pricingCardComponent.clickAddToCartButton(product.name, product.term);
    }
    if (counter == 1) {
      await this.page.waitForTimeout(500);
      await this.marketingSitesCartComponent.locCheckoutButton.click();
    } else {
      await this.marketingSitesCartComponent.locContinueShoppingLink.click();
    }
    counter--;
  };
}
