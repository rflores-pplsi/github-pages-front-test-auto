import { Page } from '@playwright/test';
import { PurchasePage } from './purchase.page';
import { PostPurchasePage } from './post-purchase.page';

export class PurchaseService {
  protected page: Page;
  readonly purchasePage: PurchasePage;
  readonly postPurchasePage: PostPurchasePage;

  constructor(page: Page) {
    this.page = page;
    this.purchasePage = new PurchasePage(page);
    this.postPurchasePage = new PostPurchasePage(page);
  }
}
