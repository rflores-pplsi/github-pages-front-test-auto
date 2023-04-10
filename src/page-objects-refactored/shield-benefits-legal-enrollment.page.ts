import { Page, Locator } from '@playwright/test';

export class ShieldBenefitsLegalEnrollmentPage {
  protected page: Page;
  readonly locSelectStateDropdown: Locator;
  readonly locAvailablePlansContainer: Locator;
  readonly locTempLoginLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locSelectStateDropdown = this.page.locator('//div[contains(@class,"mr-custom")]//button');
    this.locAvailablePlansContainer = this.page.locator('//div[contains (@class,"plans-container") ]');
    this.locTempLoginLocator = this.page.locator('//div[contains (@class,"filters mt-5 mb-5") and contains(.,"Available")]');
  }

  /**
   *
   *
   * @param {string} stateOrProvince
   * @memberof ShieldBenefitsLegalEnrollmentPage
   */
  selectStateOrProvince = async (stateOrProvince: string): Promise<void> => {
    await this.locSelectStateDropdown.click();
    await this.page.locator(`//div[contains(@class,"lsux-link-content--menu") and contains (.,"${stateOrProvince}")]`).click();
  };

  /**
   *
   *
   * @param {string} planName
   * @memberof ShieldBenefitsLegalEnrollmentPage
   */
  clickSelectButton = async (planName: string): Promise<void> => {
    const selectPlanCheckBoxLocator = this.page.locator(`//div[contains(@class,"price-card-main-row") and contains(.,"${planName}")]//input`);
    await this.page.pause();
    await selectPlanCheckBoxLocator.check({ force: true });
  };
}
