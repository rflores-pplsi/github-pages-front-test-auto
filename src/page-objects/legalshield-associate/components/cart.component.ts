import { Locator, Page } from '@playwright/test';

export class CartComponent {
  protected page: Page;
  private locCartContainer: Locator;
  private locStateSelectDropdown: Locator;
  private locCheckoutButton: Locator;
  private locFrenchCheckoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locCartContainer = this.page.locator('//div[@data-state="open" and contains(.,"Order Summary")]');
    this.locStateSelectDropdown = this.locCartContainer.locator('//button[@aria-label="Select your state"]');
    this.locCheckoutButton = this.page.locator('//button[contains(.,"Checkout")]');
    this.locFrenchCheckoutButton = this.page.locator('//button[contains(.,"Vérifier")]');
  }

  // #region Navigation
  // #endregion Navigation

  // #region Actions
  selectState = async (state: string): Promise<void> => {
    await this.locStateSelectDropdown.click();
    const stateLocator = this.page.locator(`//div[@role="option" and contains(.,"${state}")]`);
    await stateLocator.click();
  };

  clickCheckoutButton = async (): Promise<void> => {
    if (this.page.url().includes('fr')) {
      await this.locFrenchCheckoutButton.click();
    } else {
    await this.locCheckoutButton.click();
    }
    await this.page.waitForURL(new RegExp('checkout'));
  };


  // #endregion Actions

  // #region Assertions
  // #endregion Assertions
}
