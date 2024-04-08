import { Page, BrowserContext } from '@playwright/test';
import { PlusHeaderComponent } from './plus-header.component';
import { PlusHomePage } from './plus-home.page';
import { PlusStickyHeaderComponent } from './plus-sticky-header.component';
import { PlusTestimonialComponent } from './plus-testimonial.component';
import { PlusProductCardComponent } from './plus-product-card.component';
import { PlusMovieModalComponent } from './plus-movie-modal.component';
import { PlusCartFooterComponent } from './plus-cart-footer.component';
import { PlusExploreMembershipComponent } from './plus-explore-membership.component';
import { FindYourAssociatePage } from './find-your-associate.page';
import { CalendarPage } from './calendar-page.page';
import { BuyNowPage } from './buy-now.page';

export class LegalshieldAssociateService {
  protected page: Page;
  readonly plusHomePage: PlusHomePage;
  readonly plusHeaderComponent: PlusHeaderComponent;
  readonly plusStickyHeaderComponent: PlusStickyHeaderComponent;
  readonly plusTestimonialComponent: PlusTestimonialComponent;
  readonly plusProductCardComponent: PlusProductCardComponent;
  readonly plusMovieModalComponent: PlusMovieModalComponent;
  readonly plusCartFooterComponent: PlusCartFooterComponent;
  readonly plusExplorerMembershipMenuComponent: PlusExploreMembershipComponent;
  readonly buyNowPage: BuyNowPage;
  readonly findYourAssociatePage: FindYourAssociatePage;
  readonly calendarPage: CalendarPage;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.plusHomePage = new PlusHomePage(page);
    this.plusHeaderComponent = new PlusHeaderComponent(page);
    this.plusStickyHeaderComponent = new PlusStickyHeaderComponent(page);
    this.plusTestimonialComponent = new PlusTestimonialComponent(page);
    this.plusProductCardComponent = new PlusProductCardComponent(page);
    this.plusMovieModalComponent = new PlusMovieModalComponent(page);
    this.plusCartFooterComponent = new PlusCartFooterComponent(page);
    this.plusExplorerMembershipMenuComponent = new PlusExploreMembershipComponent(page);
    this.buyNowPage = new BuyNowPage(context, page);
    this.findYourAssociatePage = new FindYourAssociatePage(context, page);
    this.calendarPage = new CalendarPage(context, page);
  }
}
