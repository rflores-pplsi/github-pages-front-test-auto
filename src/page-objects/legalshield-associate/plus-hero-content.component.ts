import { Locator, Page } from '@playwright/test';

export class LegalshieldPlusHeroContentComponent {
  protected page: Page;
  readonly locHeroContentContainer: Locator;

  constructor(page: Page) {
    this.page = page;
    //TBD: Fill out page as application completes, double check locator
    this.locHeroContentContainer = this.page.locator('//div[contains(@class,"lsux-hero-image__full-hero-content")]');
  }

  method1 = async (): Promise<void> => {
    //TBD: Fill out page as application completes
  };
}
