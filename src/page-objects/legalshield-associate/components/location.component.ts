import { Locator, Page } from '@playwright/test';

export class LocationComponent {
  private page: Page;
  private locSelectYourStateDropDown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locSelectYourStateDropDown = this.page.getByText('Select your state');
  }

  // #region Navigation
  // #endregion Navigation

  // #region Actions
  selectState = async (state: string): Promise<void> => {
    await this.locSelectYourStateDropDown.click();
    const optionLocator = this.page.getByRole('option').getByText(state);
    await optionLocator.click();
  };
  // #endregion Actions

  // #region Assertions
  // #endregion Assertions
}
