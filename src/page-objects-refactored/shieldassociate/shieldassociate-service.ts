import { BrowserContext, Page } from '@playwright/test';

import { BuyNowPage } from './buy-now.page';

export class ShieldAssociateService {
  readonly buyNowPage: BuyNowPage;

  constructor(context: BrowserContext, page: Page) {
    this.buyNowPage = new BuyNowPage(context, page);
  }
}
