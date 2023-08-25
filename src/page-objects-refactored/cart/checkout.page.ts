import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly locRegionSelectorContainer: Locator;
  readonly locMonthlyPrice: Locator;
  readonly locTotalPrice: Locator;
  readonly locContinueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locRegionSelectorContainer = this.page.locator('//div[contains(@class, "lsux-plan-card__region-selector")]');
    this.locMonthlyPrice = this.page.locator('TBD');
    this.locTotalPrice = this.page.locator('TBD');
    this.locContinueButton = this.page.locator('//button[contains(@class,"lsux-button--primary")]');
  }

  selectTier = async (tierName: string): Promise<void> => {
    const tierNameLocator = this.page.locator(`//div[contains(@class,"lsux-plan-card__tier-radio-button-group")]//p[text()="${tierName}"]`);
    await tierNameLocator.click();
  };

  selectSupplementsOrTier = async (
    supplementsOrTier: Array<{
      cost: string;
      name: string;
    }>
  ): Promise<void> => {
    for (const supplementOrTier of supplementsOrTier) {
      const supplementOrTierLocator = this.page.locator(`//p[contains(.,"${supplementOrTier.name}")]`);

      await supplementOrTierLocator.click();
    }
  };

  selectRegion = async (region: string): Promise<void> => {
    await this.locRegionSelectorContainer.click();
    const regionOptionLocator = this.page.locator(`//span[contains(.,"${region}")]`);
    await regionOptionLocator.click();
  };
}
