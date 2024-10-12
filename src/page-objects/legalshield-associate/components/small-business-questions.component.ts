import { Locator, Page } from '@playwright/test';

export class SmallBusinessQuestionsComponent {
  private page: Page;
  private locPubliclyTradedOrNonProfitNoCheckbox: Locator;
  private locContinueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locPubliclyTradedOrNonProfitNoCheckbox = this.page.locator('#publiclyTraded_false');
    this.locContinueButton = this.page.locator(
      '//button[not(@disabled) and contains(.,"Continue")]'
    );
  }

  // #region Navigation
  // #endregion Navigation

  // #region Actions
  selectPubliclyTradedOrNonProfitNo = async (): Promise<void> => {
    await this.locPubliclyTradedOrNonProfitNoCheckbox.click();
  };

  clickContinueButton = async (): Promise<void> => {
    await this.locContinueButton.click();
  };
  // #endregion Actions

  // #region Assertions
  // #endregion Assertions
}
