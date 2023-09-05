import { expect, Page } from '@playwright/test';
import { WalsLocatorPage } from './wals-locators.page';

export class WeAreLegalShieldExecutiveTeamPage extends WalsLocatorPage {
  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  /**
   *
   *
   * @param {string} name
   * @memberof WeAreLegalShieldExecutiveTeamPage
   */
  clickOnReadFullBioLink = async (name: string): Promise<void> => {
    const readFullBioLocator = this.page
      .locator(
        `//div[contains(@class,"node node--type--team-member node--view-mode--card") and contains(.,"${name}")]//a[contains(@class,"bio-link")]`
      )
      .nth(0);
    await readFullBioLocator.click();
  };

  /**
   *
   *
   * @param {string} text
   * @memberof WeAreLegalShieldExecutiveTeamPage
   */
  assertTextInBio = async (text: string): Promise<void> => {
    await expect(this.weAreLegalShieldExecutiveTeamLocDisplayedBioContainer).toContainText(text);
  };

  /**
   *
   *
   * @memberof WeAreLegalShieldExecutiveTeamPage
   */
  closeBioModalAndAssertNotVisible = async (): Promise<void> => {
    await this.weAreLegalShieldExecutiveTeamLocDisplayedBioContainerCloseButton.click();
    await expect(this.weAreLegalShieldExecutiveTeamLocDisplayedBioContainer).not.toBeVisible();
  };
}
