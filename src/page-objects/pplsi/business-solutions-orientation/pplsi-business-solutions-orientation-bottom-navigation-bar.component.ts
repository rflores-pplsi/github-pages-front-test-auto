import { Locator, Page } from '@playwright/test';

/**
 *
 *
 * @export
 * @class PplsiBusinessSolutionsOrientationBottomNavigationBarComponent
 */
export class PplsiBusinessSolutionsOrientationBottomNavigationBarComponent {
  readonly page: Page;
  readonly locSampleLocator: Locator;

  /**
   * Creates an instance of PplsiBusinessSolutionsOrientationBottomNavigationBarComponent.
   * @param {Page} page
   * @memberof PplsiBusinessSolutionsOrientationBottomNavigationBarComponent
   */
  constructor(page: Page) {
    this.page = page;
    this.locSampleLocator = this.page.locator('');
  }
}
