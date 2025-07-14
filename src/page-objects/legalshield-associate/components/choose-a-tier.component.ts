import { Locator, Page } from '@playwright/test';

export class ChooseATierComponent {
  private page: Page;
  private locTierContinueButton: Locator;
  private locAnnualToggle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locTierContinueButton = this.page.locator('//button[contains(.,"Continue")]').nth(0);
    this.locAnnualToggle = this.page.locator('//button[contains(@id,"ANNUAL")]');
  }
  // #region Navigation
  // #endregion Navigation

  // #region Actions
  selectTier = async (planName: string, tierName: string, term: string): Promise<void> => {
    if (term === 'Annual') {
      await this.locAnnualToggle.click();
    } 
      await this.page.locator(`//button[@data-testid="tier-select-${tierName}"]`).click();
  };
  // #endregion Actions       

  // #region Assertions
  // #endregion Assertions
}
