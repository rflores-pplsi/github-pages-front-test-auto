import { Locator, Page } from '@playwright/test';

/**
 *
 *
 * @export
 * @class PplsiFooterComponent
 */
export class PplsiFooterComponent {
  readonly page: Page;
  readonly locBusinessOpportunityLink: Locator;

  /**
   * Creates an instance of PplsiFooterComponent.
   * @param {Page} page
   * @memberof PplsiFooterComponent
   */
  constructor(page: Page) {
    this.page = page;
    this.locBusinessOpportunityLink = this.page.locator('//a[contains(.,"Business Opportunity")]');
  }
}
