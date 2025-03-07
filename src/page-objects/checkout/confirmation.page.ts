import { FrameLocator, Locator, Page, expect } from '@playwright/test';

export class ConfirmationPage {
  readonly page: Page;
  private readonly locFinishSettingYouAccountButton: Locator;
  private readonly locPaymentSuccessfulMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locFinishSettingYouAccountButton = this.page.getByRole('button', { name: 'Finish setting up your account' });
    this.locPaymentSuccessfulMessage = this.page.getByText('Payment successful!');
  }

  // #region Navagation
  // #endregion Navagation

  // #region Actions
  async clickFinishSettingUpAccountButton() {
    await this.locFinishSettingYouAccountButton.click();
  }
  // #endregion Actions

  // #region Assertions  
  async assertPaymentSuccessfulMessage() {
    await expect(this.locPaymentSuccessfulMessage).toBeVisible();
  }
  // #endregion Assertions
};
