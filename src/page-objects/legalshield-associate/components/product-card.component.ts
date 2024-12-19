import { Page, BrowserContext } from '@playwright/test';

export class ProductCardComponent {
  protected page: Page;
  protected context: BrowserContext;

  constructor(page: Page) {
    this.page = page;
    this.context = page.context();
  }

  // #region Navigation
  // #endregion Navigation

  // #region Actions

  clickAddToCartButton = async (planName: string): Promise<void> => {
    const addToCartButton = this.page
      .locator(
        `//button[contains(@data-testid,"desktop-${planName}")]`
      )
      .nth(0);
    await addToCartButton.click();
  };

  selectAnnualBillingPeriod = async (): Promise<void> => {  
    await this.page.locator('//button[@aria-label="Billing Period"]').click();
    await this.page.locator('//span[text()="ANNUAL"]').click();
  };
  // #endregion Actions

  // #region Assertions
  // #endregion Assertions
}
