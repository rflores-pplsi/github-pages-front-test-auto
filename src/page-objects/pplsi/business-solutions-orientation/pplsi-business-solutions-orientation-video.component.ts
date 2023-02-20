import { Locator, Page } from '@playwright/test';

/**
 *
 *
 * @export
 * @class PplsiBusinessSolutionsOrientationVideoComponent
 */
export class PplsiBusinessSolutionsOrientationVideoComponent {
  readonly page: Page;
  readonly locSampleLocator: Locator;

  /**
   * Creates an instance of PplsiBusinessSolutionsOrientationVideoComponent.
   * @param {Page} page
   * @memberof PplsiBusinessSolutionsOrientationVideoComponent
   */
  constructor(page: Page) {
    this.page = page;
    this.locSampleLocator = this.page.locator('');
  }
}
