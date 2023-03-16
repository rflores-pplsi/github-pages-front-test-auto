import { Page, Locator } from '@playwright/test';
import UrlsUtils from '../utils/urls.utils';

export class GroupsAffiliatedPage {
  protected page: Page;
  readonly locLanguageAndMarketDropdown: Locator;
  readonly locAgentIdInput: Locator;
  readonly locSubmitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locLanguageAndMarketDropdown = this.page.locator('#select_18');
    this.locAgentIdInput = this.page.locator('//input[@placeholder="Enter Agent ID"]');
    this.locSubmitButton = this.page.locator('//button[contains(text(),"Submit")]');
  }

  /**
   *
   *
   * @param {string} group
   * @memberof GroupsAffiliatedPage
   */
  navigateToGroupsAffiliatedPage = async (group: string): Promise<void> => {
    await this.page.goto(`${UrlsUtils.groupsUrls.affiliateGroupPage}${group}`);
  };

  /**
   *
   *
   * @param {string} language
   * @memberof GroupsAffiliatedPage
   */
  selectLanguageAndMarket = async (language: string): Promise<void> => {
    await this.locLanguageAndMarketDropdown.click();
    const dropdownOption = this.page.locator(
      `//div[contains(@class,"md-active")]//md-option[contains(@id,"select_option") and contains(.,"${language}")]`
    );
    await dropdownOption.click();
  };

  /**
   *
   *
   * @param {string} id
   * @memberof GroupsAffiliatedPage
   */
  fillAgentId = async (id: string): Promise<void> => {
    await this.locAgentIdInput.fill(id);
  };
}
