import { FrameLocator, Locator, Page, expect } from '@playwright/test';

export class ConfirmationPage {
  readonly page: Page;
  private readonly locFinishSettingYouAccountButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locFinishSettingYouAccountButton = this.page.getByRole('button', { name: 'Finish setting up your account' });
  }

  // #region Navagation
  // #endregion Navagation

  // #region Actions
  async clickFinishSettingUpAccountButton() {
    await this.locFinishSettingYouAccountButton.click();
  }
  // #endregion Actions

  // #region Assertions  
  // #endregion Assertions
};
