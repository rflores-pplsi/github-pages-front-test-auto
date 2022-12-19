import { Page } from '@playwright/test';
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
   *@param {string} url
   * @memberof WalsAssociateSearchPage
   */
  navigateToUrl = async (url: string): Promise<void> => {
    await this.page.goto(url);
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
    (await this.WeAreLegalShieldLocContainsText('Find a Sales Associate')).isVisible();
  };
  /**
   * @param {string} txt
   * @memberof assertMsgAssociateNotFound
   */
  assertMsgAssociate = async (txt: string): Promise<void> => {
    (await this.WeAreLegalShieldLocContainsText(txt)).isVisible();
  };
  /**
   * @param {string} url
   * @memberof assertMsgAssociateNotFound
   */
  assertAssociateUrl = async (url: string): Promise<void> => {
    (await this.WeAreLegalShieldLocContainsText(url)).isVisible();
  };
}
