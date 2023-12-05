import { Page, Locator, BrowserContext } from '@playwright/test';

export class NavListSectionComponent {
  protected page: Page;
  readonly context: BrowserContext;
  readonly locNavListHeadline: Locator;
  readonly locNavListListsHeader: Locator;
  readonly locNavListLists: Locator;
  readonly locNavListListsLinks: Locator;
  readonly locNavListDisclaimer: Locator;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.context = context;
    this.locNavListHeadline = this.page.locator('section#section-nav_list .lsux-grid .lsux-col h3.lsux-heading--t31');
    this.locNavListListsHeader = this.page.locator(
      'section#section-nav_list .lsux-grid .lsux-col #nav-list-swiper .swiper-wrapper .nav-list-col h3.lsux-heading--t20'
    );
    this.locNavListLists = this.page.locator(
      'section#section-nav_list .lsux-grid .lsux-col #nav-list-swiper .swiper-wrapper .nav-list-col ul.nav-list-links-container'
    );
    this.locNavListListsLinks = this.page.locator(
      'section#section-nav_list .lsux-grid .lsux-col #nav-list-swiper .swiper-wrapper .nav-list-col ul.nav-list-links-container li a'
    ); // multiple
    this.locNavListDisclaimer = this.page.locator('section#section-nav_list .lsux-grid .lsux-container p.nav-list-disclaimer');
  }
}
