import { expect, Page } from '@playwright/test';
import { WalsLocatorPage } from '../../archived/page-objects-oldest/wals/wals-locators.page';

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
   * @param {string} tab
   * @memberof searchForAssociate
   */
  clickOnNavigationMenuTab = async (tab: string): Promise<void> => {
    await this.page.locator(`//a[contains(.,"${tab}")]`).click();
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
  /**   * @memberof assertMsgAssociateNotFound   */ assertReadFullBioText = async (): Promise<void> => {
    const ele = await this.page.locator('(//a[contains(@class,"more-link")])[1]');
    await expect(ele).toBeVisible();
  };
  /**
   * @param {string} title
   * @memberof assertMsgAssociateNotFound
   */ assertPageTitle = async (title: string): Promise<void> => {
    expect(title).toStrictEqual(title);
  };
}
