import { Page, Locator } from '@playwright/test';

export class SmallBusinessQualifyingComponent {
  readonly page: Page;

  readonly locPubliclyTradedNoButton: Locator;
  readonly locNonProfitBusinessNoButton: Locator;
  readonly locAddToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locPubliclyTradedNoButton = this.page.locator('#traded-company-no');
    this.locNonProfitBusinessNoButton = this.page.locator('#non-profit-no');
    this.locAddToCartButton = this.page.locator('//button[@aria-label="Add to cart."]');
  }

  /**
   *
   *
   * @memberof SmallBusinessQualifyingComponent
   */
  completeQualifyingQuestionnaireWithNos = async (): Promise<void> => {
    await this.locPubliclyTradedNoButton.click();
    await this.locNonProfitBusinessNoButton.click();
    await this.clickAddToCartButton();
  };

  clickAddToCartButton = async (): Promise<void> => {
    await this.locAddToCartButton.click();
  }; 
}
