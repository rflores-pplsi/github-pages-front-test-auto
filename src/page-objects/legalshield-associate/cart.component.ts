import { Locator, Page } from '@playwright/test';

export class CartComponent {
  protected page: Page;
  readonly locCartContainer: Locator;
  readonly locStateSelectDropdown: Locator;
  readonly locCheckoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locCartContainer = this.page.locator('//div[@data-state="open" and contains(.,"Order Summary")]');
    this.locStateSelectDropdown = this.locCartContainer.locator('//button[@aria-label="Select your state"]');
    this.locCheckoutButton = this.page.locator('//button[contains(.,"Checkout")]');
  }

  selectState = async (state: string): Promise<void> => {
    await this.locStateSelectDropdown.click();
    const stateLocator = this.page.locator(`//div[@role="option" and contains(.,"${state}")]`);
    await stateLocator.click();
  };
}
