import { Page, BrowserContext } from '@playwright/test';
import { PlusHeaderComponent } from './plus-header.component';
import { PlusStickyHeaderComponent } from './plus-sticky-header.component';
import { PlusProductCardComponent } from './plus-product-card.component';
import { PlusMovieModalComponent } from './plus-movie-modal.component';
import { PlusCartFooterComponent } from './plus-cart-footer.component';
import { FindYourAssociatePage } from './find-your-associate.page';
import { CalendarPage } from './calendar-page.page';
import { BuyNowPage } from './buy-now.page';

export class LegalshieldAssociateService {
  protected page: Page;
  readonly plusHeaderComponent: PlusHeaderComponent;
  readonly plusStickyHeaderComponent: PlusStickyHeaderComponent;
  readonly plusProductCardComponent: PlusProductCardComponent;
  readonly plusMovieModalComponent: PlusMovieModalComponent;
  readonly plusCartFooterComponent: PlusCartFooterComponent;
  readonly buyNowPage: BuyNowPage;
  readonly findYourAssociatePage: FindYourAssociatePage;
  readonly calendarPage: CalendarPage;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.plusHeaderComponent = new PlusHeaderComponent(page);
    this.plusStickyHeaderComponent = new PlusStickyHeaderComponent(page);
    this.plusProductCardComponent = new PlusProductCardComponent(page);
    this.plusMovieModalComponent = new PlusMovieModalComponent(page);
    this.plusCartFooterComponent = new PlusCartFooterComponent(page);
    this.buyNowPage = new BuyNowPage(context, page);
    this.findYourAssociatePage = new FindYourAssociatePage(context, page);
    this.calendarPage = new CalendarPage(context, page);
  }
}
