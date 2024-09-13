import { Locator, Page } from '@playwright/test';

export class AdditionalSupplementsComponent {
  private page: Page;
  private locContinueWithoutSupplementsButton: Locator;
  private locContinueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locContinueWithoutSupplementsButton = this.page.locator('//button[contains(.,"Continue without additional supplements")]');
    this.locContinueButton = this.page.locator('//button[contains(.,"Continue")]').nth(0);
  }
  // #region Navigation
  // #endregion Navigation

  // #region Actions
  selectSupplements = async (
    supplements: Array<{
      cost: string;
      name: string;
    }>
  ): Promise<void> => {
    if (supplements.length === 0) {
      await this.locContinueWithoutSupplementsButton.click();
    } else {
      for (const supplement of supplements) {
        const supplementLocator = this.page.locator(`//button[contains(.,"${supplement.name}")]`);
        await supplementLocator.click();
      }
      await this.locContinueButton.click();
    }
  };
  // #endregion Actions

  // #region Assertions
  // #endregion Assertions
}
