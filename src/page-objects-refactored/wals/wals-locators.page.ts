import { Locator, Page } from '@playwright/test';

/**
 * @export
 * @class WalsLocatorPage
 */
export class WalsLocatorPage {
  // ========================== Locators ==================================
  protected page: Page;

  readonly locInputAssociateSearch: Locator;
  readonly locBtnAssociateSearch: Locator;
  readonly locLabelSalesAssociate: Locator;
  readonly locMsgAssociateNotFound: Locator;
  readonly locBannerHeader: Locator;
  /**
   * @param {Page} page
   * @memberof WalsLocatorPage
   */
  constructor(page: Page) {
    this.page = page;
    this.locInputAssociateSearch = this.page.locator('#edit-search');
    this.locBtnAssociateSearch = this.page.locator('role=button[name="Search"]');
    this.locLabelSalesAssociate = this.page.locator('//div[contains(text(), "Find a Sales Associate")]');
    this.locMsgAssociateNotFound = this.page.locator('//div[contains(text(), "Sorry, we did not find any results for")]');
    this.locBannerHeader = this.page.locator('//h3[contains(text(), "Business Builder")]');
  }
}
