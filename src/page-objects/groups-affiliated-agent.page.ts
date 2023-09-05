import { Page, Locator } from '@playwright/test';

export class GroupsAffiliatedAgentPage {
  protected page: Page;

  readonly locStateOrProvinceDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locStateOrProvinceDropdown = this.page.locator('//div[@id="btn-append-to-dropdownState"]//input');
  }

  /**
   *
   *
   * @param {string} state
   * @memberof GroupsAffiliatedAgentPage
   */
  selectStateOrProvince = async (state: string): Promise<void> => {
    await this.locStateOrProvinceDropdown.click();
    await this.page.locator(`//div[@id="btn-append-to-dropdownState"]//a[contains(.,"${state}")]`).click();
  };
}
