import { Locator, Page } from '@playwright/test';

export class SelectRegionComponent {
  protected page: Page;
  private locSelectProvinceDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locSelectProvinceDropdown = this.page.getByRole('combobox').getByText('province');
  }

  // #region Navigation
  // #endregion Navigation

  // #region Actions
  selectProvince = async (province: string): Promise<void> => {
    await this.locSelectProvinceDropdown.click();
    const stateLocator = this.page.locator(`//span[text()='${province}']`);
    await stateLocator.click();
  };
  // #endregion Actions

  // #region Assertions
  // #endregion Assertions
}
