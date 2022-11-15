import { Locator, Page } from '@playwright/test';

/**
 * @export
 * @class WalsLocatorPage
 */
export class WalsLocatorPage {
  // ========================== Locators ==================================
  protected page: Page;

  readonly INPUT_ASSOCIATE_SEARCH: Locator;
  readonly BTN_ASSOCIATE_SEARCH: Locator;
  readonly LABEL_SALES_ASSOCIATE: Locator;
  /**
   * @param {Page} page
   * @memberof WalsLocatorPage
   */
  constructor(page: Page) {
    this.page = page;
    this.INPUT_ASSOCIATE_SEARCH = this.page.locator('#edit-search');
    this.BTN_ASSOCIATE_SEARCH = this.page.locator('role=button[name="Search"]');
    this.LABEL_SALES_ASSOCIATE = this.page.locator('//div[contains(text(), "Find a Sales Associate")]');
  }
}
