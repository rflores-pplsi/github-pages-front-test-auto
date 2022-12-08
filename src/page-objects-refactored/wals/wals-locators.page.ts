import { Locator, Page } from '@playwright/test';

/**
 * @export
 * @class WalsLocatorPage
 */
export class WalsLocatorPage {
  // ========================== Locators ==================================
  protected page: Page;

  readonly weAreLegalShieldLocInputAssociateSearch: Locator;
  readonly weAreLegalShieldLocBtnAssociateSearch: Locator;
  //readonly weAreLegalShieldLocLabelSalesAssociate: Locator;
  readonly weAreLegalShieldLocMsgAssociateNotFound: Locator;
  readonly weAreLegalShieldLocBannerHeader: Locator;
  /**
   * @param {Page} page
   * @memberof WalsLocatorPage
   */
  constructor(page: Page) {
    this.page = page;
    this.weAreLegalShieldLocInputAssociateSearch = this.page.locator('#edit-search');
    this.weAreLegalShieldLocBtnAssociateSearch = this.page.locator('div.search-form.form--inline.clearfix input#edit-submit');
    // this.weAreLegalShieldLocLabelSalesAssociate = this.page.locator('//div[contains(text(), "Find a Sales Associate")]');
    //this.weAreLegalShieldLocLabelSalesAssociate = this.WeAreLegalShieldLocLabelSalesAssociate('Hello');
    this.weAreLegalShieldLocMsgAssociateNotFound = this.page.locator('//div[contains(text(), "Sorry, we did not find any results for")]');
    this.weAreLegalShieldLocBannerHeader = this.page.locator('//h3[contains(text(), "Business Builder")]');
  }
  WeAreLegalShieldLocContainsText = async (txt: string): Promise<Locator> => {
    return this.page.locator('//div[contains(text(), "' + txt + '")]');
  };
}
