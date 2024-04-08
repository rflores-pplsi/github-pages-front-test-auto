import { Locator, Page } from '@playwright/test';

export class PlusExploreMembershipComponent {
  protected page: Page;
  readonly locExploreMembershipContainer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locExploreMembershipContainer = this.page.locator('//div[contains(@class,"btn-container-desktop")]');
  }

  clickMenuButton = async (buttonTitle: string): Promise<void> => {
    const buttonTitleLocator = this.locExploreMembershipContainer.locator(`//button[contains(.,"${buttonTitle}")]`);
    await buttonTitleLocator.click();
  };
}
