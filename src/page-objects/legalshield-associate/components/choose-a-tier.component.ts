import { Locator, Page } from '@playwright/test';

export class ChooseATierComponent {
  private page: Page;
  private locTierContinueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locTierContinueButton = this.page.locator('//button[contains(.,"Continue")]').nth(0);
  }
  // #region Navigation
  // #endregion Navigation

  // #region Actions
  selectTier = async (planName: string, tierName: string): Promise<void> => {
    let tierNameLocator: Locator;
    if (planName.includes('IDShield') && !this.page.url().includes('/fr')) {
      tierNameLocator = this.page.locator(`//button[contains(.,"${planName}") and contains(.,"${tierName}")]`);
    } else {
      tierNameLocator = this.page.locator(`//button[@data-state='unchecked' and descendant::div[text() = '${tierName}']]`);
    }
    await tierNameLocator.click();
    await this.locTierContinueButton.click();
  };
  // #endregion Actions

  // #region Assertions
  // #endregion Assertions
}
