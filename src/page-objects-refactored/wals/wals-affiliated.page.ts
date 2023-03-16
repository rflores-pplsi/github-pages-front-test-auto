import { Page, Locator } from '@playwright/test';
import EnvironmentUtil from '../../utils/env.utils';
import { WalsGeolocateMenuComponent } from '../wals/wals-geolocate-menu.component';
import { WalsCartComponent } from '../wals/wals-cart.component';

const envUrlString = EnvironmentUtil.getWalsEnvUrlString();

export class WalsAffiliatedPage {
  protected page: Page;
  readonly walsGeolocateMenuComponent: WalsGeolocateMenuComponent;
  readonly walsCartComponent: WalsCartComponent;

  readonly locStateOrProvinceDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.walsGeolocateMenuComponent = new WalsGeolocateMenuComponent(page);
    this.walsCartComponent = new WalsCartComponent(page);
    this.locStateOrProvinceDropdown = this.page.locator('//div[@id="btn-append-to-dropdownState"]//input');
  }
  /**
   *
   *
   * @param {string} affiliate
   * @param {string} subdirectory
   * @param {string} marketDomain
   * @memberof GroupsAffiliatedAgentPage
   */
  navigateToAffiliatedWalsPage = async (affiliate: string, subdirectory: string, marketDomain: string): Promise<void> => {
    await this.page.goto(`https://${affiliate}.${envUrlString}${subdirectory}.${marketDomain}`);
  };

  /**
   *
   *
   * @param {string} planName
   * @memberof WalsAffiliatedPage
   */
  clickOnGetAPlanButton = async (planName: string): Promise<void> => {
    const getAPlanButtonLocator = this.page.locator(
      `//h3[normalize-space()="${planName}"]/ancestor::div[contains(@class,"plan-card")]//a[contains(@class,"subscriber")]`
    );
    getAPlanButtonLocator.click();
  };
}
