import { Page, Locator } from '@playwright/test';
import UrlsUtils from '../../../utils/urls.utils';
import { MarketingSitesCartComponent } from '../marketing-sites-cart-component';
import { MarketingSiteFooterComponent } from '../marketing-sites-footer-component';
import { SmallBusinessQualifyingComponent } from './legalshield-small-business-qualifying.component';
import { PricingCardComponent } from './pricing-card.component';

export class LegalshieldCoverageAndPricingPage {
  readonly page: Page;
  baseUrl: string;
  subdirectory: string;
  readonly marketingSiteCartComponent: MarketingSitesCartComponent;
  readonly marketingSiteFooterComponent: MarketingSiteFooterComponent;
  readonly smallBusinessQualifyingComponent: SmallBusinessQualifyingComponent;
  readonly pricingCardComponent: PricingCardComponent;
  readonly locMainContentDiv: Locator;
  readonly locStartMonthlyPlanButton: Locator;
  readonly locRegionSelectDropdown: Locator;
  // readonly locCanadaUpdateRegionButton: Locator;
  readonly locUpdateRegionButton: Locator;
  readonly locCanadaGetStartedButton: Locator;
  readonly locEssGetStartedButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.baseUrl = UrlsUtils.marketingSitesUrls.legalShieldUSUrl;
    this.subdirectory = '';
    this.marketingSiteCartComponent = new MarketingSitesCartComponent(page);
    this.marketingSiteFooterComponent = new MarketingSiteFooterComponent(page);
    this.smallBusinessQualifyingComponent = new SmallBusinessQualifyingComponent(page);
    this.pricingCardComponent = new PricingCardComponent(page);
    this.locMainContentDiv = this.page.locator('//div[@id="sticky-offset-menu"]//a[contains(.,"Shop Legal Plans")]');
    this.locStartMonthlyPlanButton = this.page.locator('//div[contains(@class,"plan-card-col") and contains(@class,"monthly")]//a');
    this.locRegionSelectDropdown = this.page.locator('//select[contains(@class,"lsc-region-popup__selector")]');
    // this.locCanadaUpdateRegionButton = this.page.locator('//button[contains(.,"Update region")]');
    this.locUpdateRegionButton = this.page.locator('//button[contains(.,"Update region")]');
    this.locCanadaGetStartedButton = this.page.locator('//div[@id="lsc-add-to-cart-button"]//span[contains(.,"Get")]');
    this.locEssGetStartedButton = this.page.locator('//th[contains(.,"Essentials")]//a');
  }

  /**
   *
   *
   * @param {string} region
   * @param {string} regionAbbreviation
   * @memberof LegalshieldCoverageAndPricingPage
   */
  selectRegion = async (region: string, regionAbbreviation: string): Promise<void> => {
    await this.locRegionSelectDropdown.selectOption(regionAbbreviation);
    await this.locUpdateRegionButton.click();
  };

  /**
   *
   *
   * @param {string} term
   * @memberof LegalshieldCoverageAndPricingPage
   */
  clickStartPlanButton = async (term: string): Promise<void> => {
    const buttonLocator = this.page.locator(`//div[contains(@class,"lsux-card__content") and contains(.,"${term}")]//a`);
    await buttonLocator.click();
    await this.page.waitForTimeout(500);
  };

  clickAddToCartButton = async (PlanName: string): Promise<void> => {
    const buttonLocator = this.page.locator(`//div[contains(@class,"lsux-card__content") and contains(.,"${PlanName}")]//a`);
    await buttonLocator.click();
    await this.page.waitForTimeout(500);
  };

  /**
   *
   *
   * @param {string} term
   * @memberof LegalshieldCoverageAndPricingPage
   */
  clickSpanishStartPlanButton = async (term: string): Promise<void> => {
    const buttonLocator = this.page.locator(`//a[contains(@class,"sc-add-to-cart-button") and contains(.,"${term}")]`);
    await buttonLocator.click();
    await this.page.waitForTimeout(500);
  };

  /**
   *
   *
   * @memberof LegalshieldCoverageAndPricingPage
   */
  clickCanadaGetStartedButton = async (): Promise<void> => {
    await this.locCanadaGetStartedButton.click({ force: true });
  };
}
