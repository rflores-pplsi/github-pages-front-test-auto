import { Page, Locator } from '@playwright/test';
import UrlsUtils from '../../../utils/urls.utils';
import { MarketingSitesCartComponent } from '../marketing-sites-cart-component';
import { MarketingSiteFooterComponent } from '../marketing-sites-footer-component';

export class IdshieldIndividualPlanPage {
  protected page: Page;
  baseUrl: string;
  subdirectory: string;
  readonly marketingSiteCartComponent: MarketingSitesCartComponent;
  readonly marketingSiteFooterComponent: MarketingSiteFooterComponent;
  readonly locMainContentDiv: Locator;
  readonly locStartMonthlyPlanButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.baseUrl = UrlsUtils.marketingSitesUrls.idShieldUSUrl;
    this.subdirectory = '';
    this.marketingSiteCartComponent = new MarketingSitesCartComponent(page);
    this.marketingSiteFooterComponent = new MarketingSiteFooterComponent(page);
    this.locMainContentDiv = this.page.locator('//div[@id="sticky-offset-menu"]//a[contains(.,"Shop Legal Plans")]');
    this.locStartMonthlyPlanButton = this.page.locator('//a[contains(.,"Start monthly plan")]');
  }

  /**
   *
   *
   * @param {string} term
   * @memberof LegalshieldCoverageAndPricingPage
   */
  clickSignUpButton = async (term: string): Promise<void> => {
    let condition = false;
    const buttonLocator = this.page.locator(`//div[contains(@class,"lsc-dynamic-single-plan") and contains(.,"${term}")]//a`);
    while (condition == false) {
      await buttonLocator.click();
      condition = await this.marketingSiteCartComponent.locCartContainerDiv.isVisible();
    }
  };

  /**
   *
   *
   * @param {string} [market='United States']
   * @param {string} [language='English']
   * @memberof IdshieldIndividualPlanPage
   */
  navigateToIdshieldPage = async (market = 'United States', language = 'English'): Promise<void> => {
    switch (market) {
      case 'United States':
        this.baseUrl = `${UrlsUtils.idShieldService.baseUrlNoTopLevelDomain}.com`;
        break;
      case 'Canada':
        if (language == 'French') {
          this.baseUrl = `${UrlsUtils.idShieldService.baseUrlNoTopLevelDomain}.ca/fr`;
        } else {
          this.baseUrl = `${UrlsUtils.idShieldService.baseUrlNoTopLevelDomain}.ca`;
        }
    }
    await this.page.goto(`${this.baseUrl}`);
    //TODO: REMOVE THIS IMPLICIT WAIT
    // await this.page.waitForTimeout(500);
  };
}
