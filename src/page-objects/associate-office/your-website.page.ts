import { Locator, Page } from '@playwright/test';

export class YourWebsitePage {
  readonly page: Page;
  readonly locNextButton: Locator;
  readonly locFirstSiteNameOption: Locator;
  readonly locFirstSiteNameOptionFrench: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locNextButton = this.page.locator('//button[@type="button"]');
    this.locFirstSiteNameOption = this.page
      .locator('//div[contains(@class,"tw-items-start") and contains(.,"Site name")]//input')
      .nth(0);
    this.locFirstSiteNameOptionFrench = this.page.locator('//div[contains(@data-testid,"agreement-card-")]').nth(0);
  }

  /**
   *
   *
   * @param {string} siteName
   * @memberof YourWebsitePage
   */
  selectSiteName = async (siteName: string): Promise<void> => {
    const siteNameRadioButtonLocator = this.page.locator(`//span[contains(.,"${siteName}")]`);
    await siteNameRadioButtonLocator.click();
  };
}
