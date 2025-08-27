import { Page, Locator, expect } from '@playwright/test';
import { clickLocatorWithRetry } from '../../utils/helpers';

export class HeaderComponent {
  protected page: Page;
  private readonly locNavigationContainer: Locator;
  private readonly locHeader: Locator;
  private readonly locOpenNavMenu: Locator;
  readonly locShoppingCartIcon: Locator;
  readonly locShoppingCartItemAddedNotification: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locNavigationContainer = this.page.getByRole('navigation');
    this.locHeader = this.page.locator('//h1').first();
    this.locOpenNavMenu = this.page.locator('//nav[contains(@class, "w--open")]');
    this.locShoppingCartIcon = this.page.locator('//div[@data-minicart-element="cart-icon"]');
    this.locShoppingCartItemAddedNotification = this.page.locator('//div[contains(@class,"lsdsFixedHeader")]//div[contains(@class,"notification")]');
  }

  clickMenuLink = async (parentLink: string, childLink: string): Promise<void> => {
    const parentLinkLocator = this.locNavigationContainer.locator(`//div[contains(text(),"${parentLink}")]`);
    const childLinkLocator = this.locNavigationContainer.locator(`//a[@href="${childLink}"]`);
    // some links do not require two clicks
    if (parentLink !== '') {
      await clickLocatorWithRetry(parentLinkLocator, this.locOpenNavMenu);
    }
    await childLinkLocator.click();
  };
}
