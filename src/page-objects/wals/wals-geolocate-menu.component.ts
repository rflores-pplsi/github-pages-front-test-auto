import { Page, Locator } from '@playwright/test';

export class WalsGeolocateMenuComponent {
  protected page: Page;
  readonly locChangeRegionLink: Locator;
  readonly locSelectRegionDropdown: Locator;
  readonly locUpdateRegionButton: Locator;
  readonly locMemberLoginLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locChangeRegionLink = this.page.locator('a.open-modal-lgs-geolocate.button-region-state.la');
    this.locSelectRegionDropdown = this.page.locator('select[name="state_select"]');
    this.locUpdateRegionButton = this.page.locator('#edit-submit--3');
    this.locMemberLoginLink = this.page.locator('//div[@id="utility"]//li[@id="member-login"]//a');
  }

  /**
   *
   *
   * @param {string} region
   * @memberof WalsGeolocateMenuComponent
   */
  changeRegion = async (region: string): Promise<void> => {
    await this.locMemberLoginLink.waitFor();
    await this.locChangeRegionLink.click();
    await this.locSelectRegionDropdown.selectOption({ label: region });
    await this.locUpdateRegionButton.click();
    await this.page.waitForLoadState('networkidle', { timeout: 50000 });
  };
}
