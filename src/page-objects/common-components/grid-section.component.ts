import { Page, Locator, BrowserContext } from '@playwright/test';

export class GridSectionComponent {
  protected page: Page;
  readonly context: BrowserContext;
  readonly locGridHeader: Locator;
  readonly locGridSubtext: Locator;
  readonly locGridCard: Locator;
  readonly locGridCardImage: Locator;
  readonly locGridCardTitle: Locator;
  readonly locGridCardText: Locator;
  readonly locGridCardLink: Locator;
  readonly locGridButtonLink: Locator;
  readonly locGridBackgroundColor: Locator;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.context = context;
    this.locGridHeader = this.page.locator('section#section-grid h2.lsux-heading');
    this.locGridSubtext = this.page.locator('section#section-grid .lsux-col-9 div>p');
    this.locGridCard = this.page.locator('section#section-grid .lsux-card'); // multiple
    this.locGridCardImage = this.page.locator('section#section-grid .lsux-card .lsux-card__image img'); // multiple
    this.locGridCardTitle = this.page.locator('section#section-grid .lsux-card .lsux-card__content .lsux-card__title h3'); // multiple
    this.locGridCardText = this.page.locator('section#section-grid .lsux-card .lsux-card__content div > p'); // multiple
    this.locGridCardLink = this.page.locator('section#section-grid .lsux-card .lsux-card__content a.lsux-link'); // maybe
    this.locGridButtonLink = this.page.locator('section#section-grid a.grid-button'); // maybe
    this.locGridBackgroundColor = this.page.locator('section#section-grid[class^="bgcolor--brand-color-"]'); // maybe
  }
}
