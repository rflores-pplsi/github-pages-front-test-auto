import { Page } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { WalsLocatorPage } from './wals-locators.page';

/**
 * @export
 * @extends WalsLocatorPage
 * @class WalsAssociateSearchPage
 */
export class WeAreLegalShieldPage extends WalsLocatorPage {
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
  navigateToUrl = async (): Promise<void> => {
    await this.page.goto(UrlsUtils.wals.urls.urlAssociate);
    await this.page.waitForLoadState();
  };

  /**
   * @param {string} associate
   * @memberof searchForAssociate
   */
  searchForAssociate = async (associate: string): Promise<void> => {
    await this.weAreLegalShieldLocInputAssociateSearch.fill(associate);
    await this.weAreLegalShieldLocBtnAssociateSearch.click();
    await this.page.waitForLoadState();
  };
  /**
   *
   *
   * @memberof WalsAssociateSearchPage
   */
  assertLabelSalesAssociate = async (): Promise<void> => {
    await this.weAreLegalShieldLocLabelSalesAssociate.isVisible();
  };
  /**
   * @param {string} txt
   * @memberof assertMsgAssociateNotFound
   */
  assertMsgAssociate = async (txt: string): Promise<void> => {
    await this.page.locator('//*[contains(text(), "' + txt + '")]').isVisible();
  };
}
