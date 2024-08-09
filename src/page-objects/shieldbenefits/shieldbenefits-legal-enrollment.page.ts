import { Page, Locator } from '@playwright/test';

export class ShieldBenefitsLegalEnrollmentPage {
  protected page: Page;
  readonly locSelectStateDropdown: Locator;
  readonly locAvailablePlansContainer: Locator;
  readonly locTempLoginLocator: Locator;
  readonly locBeginEnrollmentButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.locSelectStateDropdown = this.page.locator('//div[contains(@class,"mr-custom")]//button');
    this.locAvailablePlansContainer = this.page.locator('//div[contains (@class,"plans-container") ]');
    this.locTempLoginLocator = this.page.locator('//div[contains (@class,"filters mt-5 mb-5") and contains(.,"Available")]');
    this.locBeginEnrollmentButton = this.page.locator('//button[@data-testid="enrollment-button"]');
  }

  /**
   *
   *
   * @param {string} stateOrProvince
   * @memberof ShieldBenefitsLegalEnrollmentPage
   */
  selectStateOrProvince = async (stateOrProvince: string): Promise<void> => {
    await this.locSelectStateDropdown.click();
    await this.page.locator(`//div[@role="listbox"]//span[contains(.,"${stateOrProvince}")]`).click();
  };

  /**
   *
   *
   * @param {string} productName
   * @memberof ShieldBenefitsLegalEnrollmentPage
   */
  checkProductCheckbox = async (productName: string): Promise<void> => {
    // const boxToCheckLocator = this.page
    //   .locator('label')
    //   .filter({ hasText: `${productName}` })
    //   .getByTestId('lsux-cb-container__icon');
    const boxToCheckLocator = this.page.locator(`//form[@data-testid="lsux-cb-container" and contains(.,"${productName}")]//button`);
    await boxToCheckLocator.click({ force: true });
    // if (await boxToCheckLocator.isEnabled()) {
    //   boxToCheckLocator.click();
    // }
  };
}
