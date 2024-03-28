import { Page, Locator, BrowserContext } from '@playwright/test';

export class NavListSectionComponent {
  protected page: Page;
  readonly context: BrowserContext;
  readonly locHeader: Locator;
  readonly locListsHeader: Locator;
  readonly locNavListLists: Locator;
  readonly locListsLinks: Locator;
  readonly locDisclaimer: Locator;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.context = context;
    this.locHeader = this.page.locator('section#section-nav_list .lsux-grid .lsux-col h3.lsux-heading--t31');
    this.locListsHeader = this.page.locator(
      'section#section-nav_list .lsux-grid .lsux-col #nav-list-swiper .swiper-wrapper .nav-list-col h3.lsux-heading--t20'
    );
    this.locNavListLists = this.page.locator(
      'section#section-nav_list .lsux-grid .lsux-col #nav-list-swiper .swiper-wrapper .nav-list-col ul.nav-list-links-container'
    );
    this.locListsLinks = this.page.locator(
      'section#section-nav_list .lsux-grid .lsux-col #nav-list-swiper .swiper-wrapper .nav-list-col ul.nav-list-links-container li a'
    ); // multiple
    this.locDisclaimer = this.page.locator('section#section-nav_list .lsux-grid .lsux-container p.nav-list-disclaimer');
  }
}
