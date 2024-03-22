import { Page, BrowserContext } from '@playwright/test';
import { LegalshieldPlusHeaderComponent } from './legalshield-plus-header.component';
import { LegalshieldPlusProductCardComponent } from './legalshield-plus-product-card.component';
import { LegalshieldPlusMovieModalComponent } from './legalshield-plus-movie-modal.component';
import { LegalshieldPlusPriceFooterComponent } from './legalshield-plus-price-footer.component';

export class LegalshieldPlusPage {
  readonly page: Page;
  readonly context: BrowserContext;
  readonly legalshieldPlusHeaderComponent: LegalshieldPlusHeaderComponent;
  readonly legalshieldPlusProductCardComponent: LegalshieldPlusProductCardComponent;
  readonly legalshieldPlusMovieModalComponent: LegalshieldPlusMovieModalComponent;
  readonly legalshieldPlusPriceFooterComponent: LegalshieldPlusPriceFooterComponent;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.context = context;
    this.legalshieldPlusHeaderComponent = new LegalshieldPlusHeaderComponent(page);
    this.legalshieldPlusProductCardComponent = new LegalshieldPlusProductCardComponent(page);
    this.legalshieldPlusMovieModalComponent = new LegalshieldPlusMovieModalComponent(page);
    this.legalshieldPlusPriceFooterComponent = new LegalshieldPlusPriceFooterComponent(page);
  }
}
