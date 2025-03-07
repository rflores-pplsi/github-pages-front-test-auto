import { Page, Locator } from '@playwright/test';

export class PostPurchasePage {
  private locPaymentSuccessfulMessage: Locator;
  
  constructor(private page: Page) {
    this.locPaymentSuccessfulMessage = this.page.locator('input[name="email"]');
  }
  // #region Navigation
  // #endregion Navigation

  // #region Actions
  // #endregion Actions

  // #region Assertions
  async assertPaymentSuccessfulMessageIsVisible(): Promise<void> {
    await this.page.waitForURL(new RegExp('/post-purchase'));
    await this.locPaymentSuccessfulMessage.isVisible();
  }
  // #endregion Assertions
}
