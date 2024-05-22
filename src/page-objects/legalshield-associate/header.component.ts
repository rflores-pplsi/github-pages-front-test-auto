import { Locator, Page } from '@playwright/test';

export class HeaderComponent {
  protected page: Page;
  readonly locMarketSelectDropdown: Locator;
  readonly locShoppingCartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locMarketSelectDropdown = this.page.locator('//button[@aria-label="Customise options"]');
    this.locShoppingCartIcon = this.page.locator('//button[@data-testid="cart-icon"]').nth(1);
  }

  selectMarket = async (market: string): Promise<void> => {
    await this.locMarketSelectDropdown.click();
    const marketSelectionLocator = this.page.locator(`//div[@role="menuitem" and contains(text(),"${market}")]`);
    await marketSelectionLocator.click();
    await this.page.waitForLoadState('load');
  };
}
