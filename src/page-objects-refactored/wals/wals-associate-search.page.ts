import { Page } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { WalsLocatorPage } from './wals-locators.page';

/**
 * @export
 * @extends WalsLocatorPage
 * @class WalsAssociateSearchPage
 */
export class WalsAssociateSearchPage extends WalsLocatorPage {
  /**
   * @param {Page} page
   * @memberof WalsAssociateSearchPage
   */
  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  navigateToUrl = async () => {
    await this.page.goto(UrlsUtils.wals.urls.urlAssociate);
    await this.page.waitForLoadState();
  };

  /**
   * @param {string} associate
   * @memberof searchForAssociate
   */
  searchForAssociate = async (associate: string) => {
    await this.INPUT_ASSOCIATE_SEARCH.fill(associate);
    await this.BTN_ASSOCIATE_SEARCH.click();
    await this.page.waitForLoadState();
  };

  assertLabelSalesAssociate = async () => {
    await this.LABEL_SALES_ASSOCIATE.isVisible();
  };
}
