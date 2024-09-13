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
        `//div[contains(@class,"tw-overflow-hidden")and descendant::div[text()="${planName}"]]//button[contains(@class,"lsux-button--primary") and not(contains(@class, 'md:tw-hidden'))]`
      )
      .nth(0);
    await addToCartButton.click();
  };
  // #endregion Actions

  // #region Assertions
  // #endregion Assertions
}
