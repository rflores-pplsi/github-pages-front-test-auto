import { expect, Page } from '@playwright/test';
import { WalsLocatorPage } from './wals-locators.page';

export class WeAreLegalShieldOpportunitySuccessPage extends WalsLocatorPage {
  /**
   * Creates an instance of WeAreLegalShieldOpportunitySuccessPage.
   * @param {Page} page
   * @memberof WeAreLegalShieldOpportunitySuccessPage
   */
  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  /**
   *
   *
   * @param {string} searchString
   * @memberof WeAreLegalShieldOpportunitySuccessPage
   */
  searchForProfile = async (searchString: string): Promise<void> => {
    await this.weAreLegalShieldOpportunitySuccessLocSearchInput.fill(searchString);
    await this.weAreLegalShieldOpportunitySuccessLocSearchButton.click();
    await this.page.waitForLoadState();
  };

  /**
   *
   *
   * @param {string} text
   * @memberof WeAreLegalShieldOpportunitySuccessPage
   */
  assertAllTilesHaveText = async (text: string): Promise<void> => {
    const tileContainer = await this.page.$$('//div[contains(@class,"views-row")]');
    const numberOfTiles = tileContainer.length;
    for (let i = 0; i < numberOfTiles; i++) {
      const tileText = this.page.locator('//div[contains(@class,"views-row")]').nth(i);
      await expect(tileText).toContainText(text);
    }
  };

  /**
   *
   *
   * @memberof WeAreLegalShieldOpportunitySuccessPage
   */
  assertNoResultsFoundMessageIsNotDisplayed = async (): Promise<void> => {
    await expect(this.weAreLegalShieldOpportunitySuccessLOCNoResultsFoundMessage).not.toBeVisible();
  };
}
