import { Locator, Page } from '@playwright/test';

export class PlusHeaderComponent {
  protected page: Page;
  readonly locHeaderLogo: Locator;
  readonly locUserIconDropdown: Locator;
  readonly locUserMenuMyProductsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locHeaderLogo = this.page.locator('//div[@id="lsdsLargeLogoId"]');
    this.locUserIconDropdown = this.page.locator('//button[@id="lsdsUserButtonId"]');
    this.locUserMenuMyProductsLink = this.page.locator('//div[@id="lsdsSignedOutId"]');
  }

  clickMenuLinkWithTwoLevels = async (levelOneLink: string, levelTwoLink: string): Promise<void> => {
    const navigationLocator = this.page.locator('//span[@id="lsdsNavigationId"]');
    const levelOneLinkLocator = navigationLocator.locator(`//div[text()="${levelOneLink}"]`);
    const levelTwoLinkLocator = navigationLocator.locator(`//div[text()="${levelOneLink}"]//button[text()="${levelTwoLink}"]`);
    await levelOneLinkLocator.hover();
    await levelTwoLinkLocator.click();
  };

  clickMenuLinkWithThreeLevels = async (levelOneLink: string, levelTwoLink: string, levelThreeLink: string): Promise<void> => {
    const navigationLocator = this.page.locator('//span[@id="lsdsNavigationId"]');
    const levelOneLinkLocator = navigationLocator.locator(`//div[text()="${levelOneLink}"]`);
    const levelTwoLinkLocator = navigationLocator.locator(`//div[text()="${levelOneLink}"]//button[text()="${levelTwoLink}"]`);
    const levelThreeLinkLocator = navigationLocator.locator(`//div[text()="${levelOneLink}"]//button[text()="${levelThreeLink}"]`);
    await levelOneLinkLocator.hover();
    await levelTwoLinkLocator.hover();
    await levelThreeLinkLocator.click();
  };
}
