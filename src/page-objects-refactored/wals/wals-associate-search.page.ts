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
  /**
   *
   *
   * @memberof WalsAssociateSearchPage
   */
  navigateToUrl = async () => {
    await this.page.goto(UrlsUtils.wals.urls.urlAssociate);
    await this.page.waitForLoadState();
  };

  /**
   * @param {string} associate
   * @memberof searchForAssociate
   */
  searchForAssociate = async (associate: string) => {
    await this.locInputAssociateSearch.fill(associate);
    await this.locBtnAssociateSearch.click();
    await this.page.waitForLoadState();
  };
  /**
   *
   *
   * @memberof WalsAssociateSearchPage
   */
  assertLabelSalesAssociate = async () => {
    await this.locLabelSalesAssociate.isVisible();
  };
  /**
   * @param {string} txt
   * @memberof assertMsgAssociateNotFound
   */
  assertMsgAssociate = async (txt: string) => {
    await this.page.locator('//*[contains(text(), "' + txt + '")]').isVisible();
  };
}
