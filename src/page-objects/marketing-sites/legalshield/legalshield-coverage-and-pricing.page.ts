import { Page, Locator } from '@playwright/test';
import UrlsUtils from '../../../utils/urls.utils';
import { MarketingSitesCartComponent } from '../marketing-sites-cart-component';
import { MarketingSiteFooterComponent } from '../marketing-sites-footer-component';
import { SmallBusinessQualifyingComponent } from './legalshield-small-business-qualifying.component';

export class LegalshieldCoverageAndPricingPage {
  readonly page: Page;
  baseUrl: string;
  subdirectory: string;
  readonly marketingSiteCartComponent: MarketingSitesCartComponent;
  readonly marketingSiteFooterComponent: MarketingSiteFooterComponent;
  readonly smallBusinessQualifyingComponent: SmallBusinessQualifyingComponent;
  readonly locMainContentDiv: Locator;
  readonly locStartMonthlyPlanButton: Locator;
  readonly locCanadaUpdateRegionSelect: Locator;
  readonly locCanadaUpdateRegionButton: Locator;
  readonly locCanadaGetStartedButton: Locator;
  readonly locEssGetStartedButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.baseUrl = UrlsUtils.marketingSitesUrls.legalShieldUSUrl;
    this.subdirectory = '';
    this.marketingSiteCartComponent = new MarketingSitesCartComponent(page);
    this.marketingSiteFooterComponent = new MarketingSiteFooterComponent(page);
    this.smallBusinessQualifyingComponent = new SmallBusinessQualifyingComponent(page);
    this.locMainContentDiv = this.page.locator('//div[@id="sticky-offset-menu"]//a[contains(.,"Shop Legal Plans")]');
    this.locStartMonthlyPlanButton = this.page.locator('//div[contains(@class,"plan-card-col") and contains(@class,"monthly")]//a');
    this.locCanadaUpdateRegionSelect = this.page.locator('//select[contains(@class,"lsc-region-popup__selector")]');
    this.locCanadaUpdateRegionButton = this.page.locator('//button[contains(.,"Update region")]');
    this.locCanadaGetStartedButton = this.page.locator('//span[contains(.,"Get Started")]');
    this.locEssGetStartedButton = this.page
      .getByRole('cell', { name: '$49 Billed per month Get Started' })
      .getByRole('link', { name: 'Get Started' });
  }

  /**
   *
   *
   * @param {string} region
   * @param {string} regionAbbreviation
   * @memberof LegalshieldCoverageAndPricingPage
   */
  changeCanadianRegion = async (region: string, regionAbbreviation: string): Promise<void> => {
    await this.locCanadaUpdateRegionSelect.selectOption(regionAbbreviation);
    await this.locCanadaUpdateRegionButton.click();
    await this.page.waitForSelector(`//div[(@id="page-container") and contains(.,"${region}")]`);
  };

  /**
   *
   *
   * @param {string} term
   * @memberof LegalshieldCoverageAndPricingPage
   */
  clickStartPlanButton = async (term: string): Promise<void> => {
    let condition = false;
    const buttonLocator = this.page.locator(`//div[contains(@class,"plan-card-col") and contains(@class,"${term.toLowerCase()}")]//a`);
    while (condition == false) {
      await buttonLocator.click();
      condition = await this.marketingSiteCartComponent.locCartContainerDiv.isVisible();
    }
  };

  /**
   *
   *
   * @memberof LegalshieldCoverageAndPricingPage
   */
  clickCanadaGetStartedButton = async (): Promise<void> => {
    await this.locCanadaGetStartedButton.click({ force: true });
  };

  /**
   *
   *
   * @param {string} market
   * @param {string} language
   * @memberof LegalshieldCoverageAndPricingPage
   */
  navigateToLegalshieldPricingAndCoveragePage = async (market: string, language: string): Promise<void> => {
    switch (market) {
      case 'US':
        this.baseUrl = UrlsUtils.marketingSitesUrls.legalShieldUSUrl;
        break;
      case 'CA':
        this.baseUrl = UrlsUtils.marketingSitesUrls.legalShieldCAUrl;
        break;
    }
    switch (language) {
      case 'en':
        this.subdirectory = '/personal-plan/coverage-and-pricing/';
        break;
      case 'es':
        this.subdirectory = '/es/plan-personal/cobertura-y-precios/';
        break;
    }
    await this.page.goto(`${this.baseUrl}${this.subdirectory}`);
    //TODO: REMOVE THIS IMPLICIT WAIT
    await this.page.waitForTimeout(500);
  };
}
