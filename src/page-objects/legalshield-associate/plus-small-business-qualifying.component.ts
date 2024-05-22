import { Locator, Page } from '@playwright/test';

export class PlusSmallBusinessQualifyingComponent {
  protected page: Page;
  readonly locNoRadioButton: Locator;
  readonly locContinueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locNoRadioButton = this.page.locator('//input[@name="publiclyTraded_false"]');
    this.locContinueButton = this.page.locator(
      '//div[contains(@class,"tw-animate-delay-0 tw-animate-ease-in")]//button[contains(@class,"lsux-button--primary")]'
    );
  }

  submitSmallBusinessQualifyingForm = async (): Promise<void> => {
    await this.locNoRadioButton.click();
    await this.locContinueButton.click();
  };
}
