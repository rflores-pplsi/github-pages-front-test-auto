import { Locator, Page } from '@playwright/test';

/**
 *
 *
 * @export
 * @class PplsiBusinessSolutionsOrientationBottomNavigationBarComponent
 */
export class PplsiBusinessSolutionsOrientationBottomNavigationBarComponent {
  readonly page: Page;
  readonly locGetStartedButton: Locator;
  readonly locNextButton: Locator;
  readonly locBackButton: Locator;
  readonly locCompleteButton: Locator;

  /**
   * Creates an instance of PplsiBusinessSolutionsOrientationBottomNavigationBarComponent.
   * @param {Page} page
   * @memberof PplsiBusinessSolutionsOrientationBottomNavigationBarComponent
   */
  constructor(page: Page) {
    this.page = page;
    this.locGetStartedButton = this.page.locator('//a[@class="btn btn-primary"]');
    this.locNextButton = this.page.locator('//div[@class = "next-page-button"]//span[text() ="Next"]');
    this.locBackButton = this.page.locator('//div[@class = "previous-page-button"]//span[text() ="Back"]');
    this.locCompleteButton = this.page.locator('//div[@class = "next-page-button"]//a[text() ="Complete"]');
  }
}
