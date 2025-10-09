import { Page, Locator } from '@playwright/test';
import UrlsUtils from '../../../utils/urls.utils';
import { MarketingSitesCartComponent } from '../marketing-sites-cart-component';
import { addQueryParamToUrl, clickLocatorWithRetry } from '../../../utils/helpers';

export class IdshieldIndividualPlanPage {
  protected page: Page;
  baseUrl: string;
  subdirectory: string;
  readonly marketingSiteCartComponent: MarketingSitesCartComponent;
  readonly locMainContentDiv: Locator;
  readonly locStartMonthlyPlanButton: Locator;
  readonly locSalesDialogBoxCloseButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.baseUrl = UrlsUtils.marketingSitesUrls.idShieldUSUrl;
    this.subdirectory = '';
    this.marketingSiteCartComponent = new MarketingSitesCartComponent(page);
    this.locMainContentDiv = this.page.locator('//div[@id="sticky-offset-menu"]//a[contains(.,"Shop Legal Plans")]');
    this.locStartMonthlyPlanButton = this.page.locator('//a[contains(.,"Start monthly plan")]');
    this.locSalesDialogBoxCloseButton = this.page.locator('//div[contains(@class,"ub-emb-iframe-wrapper ub-emb-visible")]//button[contains(@class,"ub-emb-close")]');
  }

  /**
   *
   *
   * @param {string} term
   * @memberof LegalshieldCoverageAndPricingPage
   */
  clickSignUpButton = async (term: string): Promise<void> => {
    let condition = false;
    const buttonLocator = this.page.locator(`//div[contains(@class,"pricing18_content") and contains(.,"${term}")]//a`);
    while (condition == false) {
      await clickLocatorWithRetry(buttonLocator, this.page.locator('//*[@id="cart-container"]'));
      // await buttonLocator.click();
      condition = await this.marketingSiteCartComponent.locCartContainerDiv.isVisible();
    }
  };

  clickSalesDialogCloseButton = async (): Promise<void> => {
    await this.locSalesDialogBoxCloseButton.click();
  };

  /**
   *
   *
   * @param {string} [market='United States']
   * @param {string} [language='English']
   * @memberof IdshieldIndividualPlanPage
   */
  navigateToIdshieldPage = async (market: string = 'United States', language: string = 'English'): Promise<void> => {
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
    const url = await addQueryParamToUrl(this.baseUrl, 'regionChange', 'true');
    await this.page.goto(`${url}`);
  };
}
