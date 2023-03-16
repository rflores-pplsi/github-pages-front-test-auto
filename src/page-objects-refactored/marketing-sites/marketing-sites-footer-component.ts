import { Page, Locator } from '@playwright/test';

export class MarketingSiteFooterComponent {
  protected page: Page;
  readonly locRegionSelect: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locRegionSelect = this.page.locator('//div[contains(@class,"footer-region-container")]//select[contains(@class,"region_select")]');
  }

  /**
   *
   *
   * @param {string} region
   * @param {string} regionAbbreviation
   * @memberof LegalshieldFooterComponent
   */
  selectRegion = async (region: string, regionAbbreviation: string): Promise<void> => {
    //TODO: refactor to only need region parameter AND to be usable for other languages/domains
    await this.locRegionSelect.selectOption(regionAbbreviation);
    await this.page.waitForSelector(`//div[(@id="page-container") and contains(.,"${region}")]`);
  };
}
