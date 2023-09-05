import { Locator, Page } from '@playwright/test';
/**
 *
 *
 * @export
 * @class PplsiBusinessSolutionsOrientationPage
 */
export class PplsiBusinessSolutionsOrientationPage {
  readonly page: Page;
  readonly locGetStartedButton: Locator;
  readonly locGetStartedLink: Locator;

  /**
   * Creates an instance of PplsiBusinessSolutionsOrientationPage.
   * @param {Page} page
   * @memberof PplsiBusinessSolutionsOrientationPage
   */
  constructor(page: Page) {
    this.page = page;
    this.locGetStartedButton = this.page.locator('//a[@class="btn btn-primary"]');
    this.locGetStartedLink = this.page.locator('//*[@id="content"]/section[2]/div/a/span');
  }
}
