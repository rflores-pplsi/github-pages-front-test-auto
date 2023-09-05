import { BrowserContext, Locator, Page } from '@playwright/test';

export class SmallBusinessQuestionsPage {
  readonly page: Page;
  readonly locPubliclyTradedOrNonProfitNoCheckbox: Locator;
  readonly locContinueButton: Locator;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.locPubliclyTradedOrNonProfitNoCheckbox = this.page.locator('//input[@name="companyType" and @value="no"]//following-sibling::div');
    this.locContinueButton = this.page.locator('//div[contains(@class,"total-section-container")]//button');
  }
}
