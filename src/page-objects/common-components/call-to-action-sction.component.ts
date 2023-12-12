import { Page, Locator, BrowserContext } from '@playwright/test';

export class CallToActionSectionComponent {
  protected page: Page;
  readonly context: BrowserContext;
  readonly sectionContainer: Locator;
  readonly header: Locator;
  readonly description: Locator;
  readonly locCallToActionButton: Locator;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.context = context;
    this.sectionContainer = this.page.locator('#section-call_to_action');
    this.header = this.sectionContainer.locator('h2.lsux-heading');
    this.description = this.sectionContainer.locator('p.lsux-text');
    this.locCallToActionButton = this.sectionContainer.locator('.btn-group>a.lsux-button');
  }
}
