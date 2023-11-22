import { Page, Locator } from '@playwright/test';

export class GroupsAffiliatedEnrollmentPage {
  protected page: Page;
  readonly locBeginEnrollmentButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locBeginEnrollmentButton = this.page.locator('//button[contains(@class,"lsux-button--primary")]');
  }

  selectPlan = async (planName: string): Promise<void> => {
    const planInputCheckboxLocator = this.page.locator(
      `//div[contains(@class,"plan-container") and contains(.,"${planName}")]//div[@data-testid="lsux-cb-container__icon"]`
    );
    await planInputCheckboxLocator.click();
  };
}
