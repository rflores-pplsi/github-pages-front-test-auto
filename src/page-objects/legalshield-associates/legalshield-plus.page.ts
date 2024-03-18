import { Page, BrowserContext } from '@playwright/test';
import { LegalshieldPlusHeaderComponent } from './legalshield-plus-header.component';
import { LegalshieldPlusProductCardComponent } from './legalshield-plus-product-card.component';

export class LegalshieldPlusPage {
  readonly page: Page;
  readonly context: BrowserContext;
  readonly legalshieldPlusHeaderComponent: LegalshieldPlusHeaderComponent;
  readonly legalshieldPlusProductCardComponent: LegalshieldPlusProductCardComponent;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.context = context;
    this.legalshieldPlusHeaderComponent = new LegalshieldPlusHeaderComponent(page);
    this.legalshieldPlusProductCardComponent = new LegalshieldPlusProductCardComponent(page);
  }
}
