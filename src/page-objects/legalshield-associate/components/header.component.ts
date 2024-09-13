import { Locator, Page } from '@playwright/test';

export class HeaderComponent {
  protected page: Page;
  private locMarketSelectDropdown: Locator;
  private locShoppingCartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locMarketSelectDropdown = this.page.getByLabel('Customise options');
    this.locShoppingCartIcon = this.page.getByRole('button', { name: 'Cart', exact: true });
  }

  // #region Navigation
  // #endregion Navigation

  // #region Actions
  selectMarket = async (market: string): Promise<void> => {
    await this.locMarketSelectDropdown.click();
    const marketSelectionLocator = this.page.getByRole('menuitem').getByText(market);
    await marketSelectionLocator.click();
    await this.page.waitForLoadState('load');
  };

  clickShoppingCartButton = async (): Promise<void> => {
    await this.locShoppingCartIcon.click();
    await this.page.waitForLoadState('load');
  };
  // #endregion Actions

  // #region Assertions
  // #endregion Assertions
}
