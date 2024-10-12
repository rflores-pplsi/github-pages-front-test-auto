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
    // French IDShield plans have a different button structure
    if (planName.includes('IDShield') && !this.page.url().includes('/fr')) {
      await this.page.locator(`//button[contains(.,"${planName}") and contains(.,"${tierName}")]`).click();
      await this.locTierContinueButton.click();
    } else {
      // Basic, Preferred, and Premium plans have a different button structure
      if (tierName.includes('Basic') || tierName.includes('Preferred') || tierName.includes('Premium')) {  
        await this.page.locator(`//button[@data-testid="tier-select-${tierName}"]`).click();
      } else {
        await this.page.locator(`//button[@data-state='unchecked' and descendant::div[text() = '${tierName}']]`).click();
        await this.locTierContinueButton.click();
      }
    }
  };
  // #endregion Actions       

  // #region Assertions
  // #endregion Assertions
}
