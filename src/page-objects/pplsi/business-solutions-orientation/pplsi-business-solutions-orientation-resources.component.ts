import { Locator, Page } from '@playwright/test';

/**
 *
 *
 * @export
 * @class PplsiBusinessSolutionsOrientationResourcesComponent
 */
export class PplsiBusinessSolutionsOrientationResourcesComponent {
  readonly page: Page;
  readonly locSampleLocator: Locator;

  /**
   * Creates an instance of PplsiBusinessSolutionsOrientationResourcesComponent.
   * @param {Page} page
   * @memberof PplsiBusinessSolutionsOrientationResourcesComponent
   */
  constructor(page: Page) {
    this.page = page;
    this.locSampleLocator = this.page.locator('');
  }
}
