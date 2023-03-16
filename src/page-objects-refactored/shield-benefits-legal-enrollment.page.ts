import { Page, Locator } from '@playwright/test';

export class ShieldBenefitsLegalEnrollmentPage {
  protected page: Page;
  readonly locSelectStateDropdown: Locator;
  readonly locAvailablePlansContainer: Locator;
  readonly locTempLoginLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locSelectStateDropdown = this.page.locator('//div[contains(@class,"mr-custom")]//button');
    this.locAvailablePlansContainer = this.page.locator('//div[contains (@class,"filters mt-5 mb-5") and contains(.,"Available")]');
    this.locTempLoginLocator = this.page.locator('//div[contains (@class,"filters mt-5 mb-5") and contains(.,"Available")]');
  }

  selectStateOrProvince = async (stateOrProvince: string): Promise<void> => {
    await this.locSelectStateDropdown.click();
    await this.page.locator(`//div[contains(@class,"lsux-link-content--menu") and contains (.,"${stateOrProvince}")]`).click();
    await this.locAvailablePlansContainer.waitFor();
  };

  clickSelectButton = async (planName: string): Promise<void> => {
    const selectPlanLocator = this.page.locator(
      `//div[contains(@class,"filters mt-5 mb-5") and contains(.,"Available Plans")]//div[contains(@class,"groupTokenCard") and contains(.,"${planName}")]//button`
    );
    await selectPlanLocator.click();
  };
}
