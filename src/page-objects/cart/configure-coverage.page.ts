import { Page, Locator } from '@playwright/test';

export class ConfigureCoveragePage {
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
    const tierNameLocator = this.page.locator(`//div[contains(@class,"lsux-plan-card__tier-radio-button-group")]//p[contains(.,"${tierName}")]`);
    await tierNameLocator.click();
  };

  selectSupplements = async (
    supplements: Array<{
      cost: string;
      name: string;
    }>
  ): Promise<void> => {
    for (const supplement of supplements) {
      const supplementLocator = this.page.locator(`//p[contains(.,"${supplement.name}")]`);
      await supplementLocator.click();
    }
  };

  selectRegion = async (region: string): Promise<void> => {
    if (region == 'Québec') {
      region = 'Quebec';
    }
    await this.locRegionSelectorContainer.click();
    const regionOptionLocator = this.page.locator(`//span[contains(.,"${region}")]`);
    await regionOptionLocator.click();
  };
}
