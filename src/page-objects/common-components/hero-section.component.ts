import { Page, Locator, BrowserContext } from '@playwright/test';

export class HeroSectionComponent {
  protected page: Page;
  readonly context: BrowserContext;
  readonly locLayoutStyle: Locator;
  readonly locDesktopImage: Locator;
  // readonly locMobileImage: Locator;
  readonly locHeadlineText: Locator;
  readonly locCallToActionButton: Locator;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.context = context;
    this.locLayoutStyle = this.page.locator('section#section-hero_section.full-width-image-background');
    this.locDesktopImage = this.page.locator('section#section-hero_section picture img');
    //this.locMobileImage = this.page.locator('section#section-hero_section picture img');
    this.locHeadlineText = this.page.locator('section#section-hero_section h1 span');
    this.locCallToActionButton = this.page.locator('section#section-hero_section a.lsux-button');
  }
}
