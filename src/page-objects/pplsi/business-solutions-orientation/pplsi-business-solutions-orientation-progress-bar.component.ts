import { Locator, Page } from '@playwright/test';

/**
 *
 *
 * @export
 * @class PplsiBusinessSolutionsOrientationProgressBarComponent
 */
export class PplsiBusinessSolutionsOrientationProgressBarComponent {
  readonly page: Page;
  readonly locSampleLocator: Locator;

  /**
   * Creates an instance of PplsiBusinessSolutionsOrientationProgressBarComponent.
   * @param {Page} page
   * @memberof PplsiBusinessSolutionsOrientationProgressBarComponent
   */
  constructor(page: Page) {
    this.page = page;
    this.locSampleLocator = this.page.locator('');
  }
}
