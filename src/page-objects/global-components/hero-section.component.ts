import { Page, Locator, BrowserContext } from '@playwright/test';

export class HeroSectionComponent {
  protected page: Page;
  readonly context: BrowserContext;
  readonly sectionContainer: Locator;
  readonly header: Locator;
  readonly description: Locator;
  readonly locCallToActionButton: Locator;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.context = context;
    this.sectionContainer = this.page.locator('#section-hero_section');
    this.header = this.sectionContainer.locator('h1');
    this.description = this.sectionContainer.locator('p');
    this.locCallToActionButton = this.page.locator('section#section-hero_section .btn-group>a.lsux-button');
  }
}
