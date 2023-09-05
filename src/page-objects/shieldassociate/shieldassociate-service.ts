import { BrowserContext, Page } from '@playwright/test';
import { FindYourAssociatePage } from './find-your-associate.page';
import { CalendarPage } from './calendar-page.page';
import { BuyNowPage } from './buy-now.page';

export class ShieldAssociateService {
  readonly buyNowPage: BuyNowPage;
  readonly findYourAssociatePage: FindYourAssociatePage;
  readonly calendarPage: CalendarPage;

  constructor(context: BrowserContext, page: Page) {
    this.buyNowPage = new BuyNowPage(context, page);
    this.findYourAssociatePage = new FindYourAssociatePage(context, page);
    this.calendarPage = new CalendarPage(context, page);
  }
}
