import { Page, Locator } from '@playwright/test';

export class MarketingSiteHeaderComponent {
  protected page: Page;
  readonly locShoppingCartIcon: Locator;
  readonly locShoppingCartItemAddedNotification: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locShoppingCartIcon = this.page.locator('//div[@id="lsc-header-cart-icon-desktop"]');
    this.locShoppingCartItemAddedNotification = this.page.locator('//div[contains(@class,"lsdsFixedHeader")]//div[contains(@class,"notification")]');
  }

  clickMenuLinkWithTwoLevels = async (levelOneLink: string, levelTwoLink: string): Promise<void> => {
    const navigationLocator = this.page.locator('//span[@id="lsdsNavigationId"]');
    const levelOneLinkLocator = navigationLocator.locator(`//a[text()="${levelOneLink}"]`);
    const levelTwoLinkLocator = navigationLocator.locator(`//li[a[text()="${levelOneLink}"]]//a[text()="${levelTwoLink}"]`);
    await levelOneLinkLocator.hover();
    await levelTwoLinkLocator.click();
  };

  clickMenuLinkWithThreeLevels = async (levelOneLink: string, levelTwoLink: string, levelThreeLink: string): Promise<void> => {
    const navigationLocator = this.page.locator('//span[@id="lsdsNavigationId"]');
    const levelOneLinkLocator = navigationLocator.locator(`//a[text()="${levelOneLink}"]`);
    const levelTwoLinkLocator = navigationLocator.locator(`//li[a[text()="${levelOneLink}"]]//a[text()="${levelTwoLink}"]`);
    const levelThreeLinkLocator = navigationLocator.locator(
      `//li[a[text()="${levelOneLink}"]]//li[a[text()="${levelTwoLink}"]]//a[text()="${levelThreeLink}"]`
    );
    await levelOneLinkLocator.hover();
    await levelTwoLinkLocator.hover();
    await levelThreeLinkLocator.click();
  };
}
