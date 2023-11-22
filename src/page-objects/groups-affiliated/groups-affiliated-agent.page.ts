import { Page, Locator } from '@playwright/test';

export class GroupsAffiliatedAgentPage {
  protected page: Page;

  readonly locRegionDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locRegionDropdown = this.page.locator('//button[@role="combobox"]');
  }

  /**
   *
   *
   * @param {string} state
   * @memberof GroupsAffiliatedAgentPage
   */
  selectStateOrProvince = async (state: string): Promise<void> => {
    await this.locRegionDropdown.click();
    await this.page.locator(`//div[@role="listbox"]//div[@role="option"]//span[contains(.,"${state}")]`).click();
  };
}
