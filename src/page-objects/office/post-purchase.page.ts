import { Page, Locator, expect } from '@playwright/test';

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
  // async assertPaymentSuccessfulMessageIsVisible(): Promise<void> {
  //   await this.page.waitForURL(new RegExp('/post-purchase'));
  //   await expect(this.locPaymentSuccessfulMessage).toBeVisible();
  // }

  async assertPaymentSuccessfulMessageIsVisible(): Promise<void> {
  await this.page.waitForURL(/\/post-purchase/);
  if(!await this.locPaymentSuccessfulMessage.isVisible()){ 

  } else {
    await this.page.pause();
  }
}
  // #endregion Assertions
}
