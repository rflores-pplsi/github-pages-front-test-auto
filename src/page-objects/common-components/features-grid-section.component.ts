import { Page, Locator, BrowserContext } from '@playwright/test';

export class FeaturesGridSectionComponent {
  protected page: Page;
  readonly context: BrowserContext;
  readonly locFeatureListContentHeadline: Locator;
  readonly locFeatureListContentParagraph: Locator;
  readonly locFeatureListCard: Locator;
  readonly locFeatureListCardImage: Locator;
  readonly locFeatureListCardHeadline: Locator;
  readonly locFeatureListCardLink: Locator;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.context = context;
    this.locFeatureListContentHeadline = this.page.locator(
      'section#section-features_grid .lsux-grid:first-child .lsux-col:first-child h2.lsux-heading--t49'
    );
    this.locFeatureListContentParagraph = this.page.locator('section#section-features_grid .lsux-grid:first-child .lsux-col:first-child p');
    this.locFeatureListCard = this.page.locator('section#section-features_grid .lsux-grid:nth-child(2) .lsux-row .lsux-col .lsux-card');
    this.locFeatureListCardImage = this.page.locator(
      'section#section-features_grid .lsux-grid:nth-child(2) .lsux-row .lsux-col .lsux-card .lsux-card__content img'
    );
    this.locFeatureListCardHeadline = this.page.locator(
      'section#section-features_grid .lsux-grid:nth-child(2) .lsux-row .lsux-col .lsux-card .lsux-card__content .lsux-card__title h3.lsux-heading'
    );
    this.locFeatureListCardLink = this.page.locator(
      'section#section-features_grid .lsux-grid:nth-child(2) .lsux-row .lsux-col .lsux-card .lsux-card__content a.lsux-link'
    );
  }
}
