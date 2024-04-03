import { Locator, Page } from '@playwright/test';

export class PlusTestimonialComponent {
  protected page: Page;
  readonly locTestimonialContainer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locTestimonialContainer = this.page.locator('//p[contains(@class,"lsux-text--extra-large")]');
  }
}
