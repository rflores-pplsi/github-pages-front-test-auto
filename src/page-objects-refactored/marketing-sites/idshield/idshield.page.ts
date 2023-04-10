import { Page, Locator } from '@playwright/test';
import UrlsUtils from '../../../utils/urls.utils';
import { MarketingSitesCartComponent } from '../marketing-sites-cart-component';
import { MarketingSiteFooterComponent } from '../marketing-sites-footer-component';

export class IdshieldPage {
  protected page: Page;
  baseUrl: string;
  subdirectory: string;
  readonly marketingSiteCartComponent: MarketingSitesCartComponent;
  readonly marketingSiteFooterComponent: MarketingSiteFooterComponent;
  readonly locRegionSelect: Locator;
  readonly locUpdateRegionButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.baseUrl = UrlsUtils.marketingSitesUrls.idShieldUSUrl;
    this.subdirectory = '';
    this.marketingSiteCartComponent = new MarketingSitesCartComponent(page);
    this.marketingSiteFooterComponent = new MarketingSiteFooterComponent(page);
    this.locRegionSelect = this.page.locator('//div[contains(@class,"general-popup__body")]//select');
    this.locUpdateRegionButton = this.page.locator('//div[contains(@class,"general-popup__body")]//button');
  }

  /**
   *
   *
   * @param {string} region
   * @param {string} regionAbbreviation
   * @memberof IdshieldPage
   */
  selectRegion = async (region: string, regionAbbreviation: string): Promise<void> => {
    //TODO: refactor to only need region parameter AND to be usable for other languages/domains
    await this.locRegionSelect.selectOption(regionAbbreviation);
    await this.page.waitForSelector(`//div[contains(@class,"general-popup__body")]//select[contains(.,"${region}")]`);
  };

  /**
   *
   *
   * @param {string} plan
   * @memberof IdshieldPage
   */
  clickGetStartedButton = async (plan: string): Promise<void> => {
    const buttonLocator = this.page.locator(`//div[contains(@class,"pricing-table-ca-col") and contains(.,"${plan}")]//a`);
    await buttonLocator.click();
  };
}
