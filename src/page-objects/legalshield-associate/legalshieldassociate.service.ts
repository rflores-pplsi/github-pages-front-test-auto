import { Page, BrowserContext } from '@playwright/test';
import { HomePage } from './home.page';
import { BuyNowPage } from './buy-now.page';

export class LegalshieldAssociateService {
  protected page: Page;
  readonly homePage: HomePage;
  readonly buyNowPage: BuyNowPage;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.homePage = new HomePage(page);
    this.buyNowPage = new BuyNowPage(context, page);
  }
}
