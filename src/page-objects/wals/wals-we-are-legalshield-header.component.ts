import { Page } from '@playwright/test';
import { WalsLocatorPage } from './wals-locators.page';

export class WeAreLegalShieldHeaderComponent extends WalsLocatorPage {
  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  /**
   *
   *
   * @param {string} language
   * @memberof WeAreLegalShieldHeaderComponent
   */
  selectLanguageFromHeader = async (language: string): Promise<void> => {
    const languageOptionLocator = this.page.locator(`//div[@id="block-legalshieldlang"]//li/ul//a[contains(.,"${language}")]`);
    await this.weAreLegalShieldHeaderLanguageDropdown.hover();
    await languageOptionLocator.click();
  };
}
