import { Page, Locator, BrowserContext } from '@playwright/test';

export class FeaturesGridSectionComponent {
  protected page: Page;
  readonly context: BrowserContext;
  readonly locFeatureGridContentHeadline: Locator;
  readonly locFeatureGridContentParagraph: Locator;
  readonly locFeatureGridCard: Locator;
  readonly locFeatureGridCardImage: Locator;
  readonly locFeatureGridCardHeadline: Locator;
  readonly locFeatureGridCardLink: Locator;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.context = context;
    this.locFeatureGridContentHeadline = this.page.locator(
      'section#section-features_grid .lsux-grid:first-child .lsux-col:first-child h2.lsux-heading--t49'
    );
    this.locFeatureGridContentParagraph = this.page.locator('section#section-features_grid .lsux-grid:first-child .lsux-col:first-child p');
    this.locFeatureGridCard = this.page.locator('section#section-features_grid .lsux-grid:nth-child(2) .lsux-row .lsux-col .lsux-card');
    this.locFeatureGridCardImage = this.page.locator(
      'section#section-features_grid .lsux-grid:nth-child(2) .lsux-row .lsux-col .lsux-card .lsux-card__content img'
    );
    this.locFeatureGridCardHeadline = this.page.locator(
      'section#section-features_grid .lsux-grid:nth-child(2) .lsux-row .lsux-col .lsux-card .lsux-card__content .lsux-card__title h3.lsux-heading'
    );
    this.locFeatureGridCardLink = this.page.locator(
      'section#section-features_grid .lsux-grid:nth-child(2) .lsux-row .lsux-col .lsux-card .lsux-card__content a.lsux-link'
    );
  }
}
