import { Page, Locator, BrowserContext } from '@playwright/test';

export class HeroSectionComponent {
  protected page: Page;
  readonly context: BrowserContext;
  readonly locCallToActionButton: Locator;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.context = context;
    this.locCallToActionButton = this.page.locator('section#section-hero_section .btn-group>a.lsux-button');
  }
}
