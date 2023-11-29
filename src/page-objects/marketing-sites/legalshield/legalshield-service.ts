import { Locator, Page, BrowserContext, expect } from '@playwright/test';
import { ProductDetails } from '../../../types/types';
import UrlsUtils from '../../../utils/urls.utils';
import { LegalshieldPage } from './legalshield.page';
import { SmallBusinessQualifyingComponent } from './legalshield-small-business-qualifying.component';
import { MarketingSitesCartComponent } from '../marketing-sites-cart-component';
import { MarketingSiteFooterComponent } from '../marketing-sites-footer-component';
import { MarketingSiteHeaderComponent } from '../marketing-sites-header-component';

export class LegalshieldService {
  protected page: Page;
  protected context: BrowserContext;
  readonly smallBusinessQualifyingComponent: SmallBusinessQualifyingComponent;
  readonly marketingSitesCartComponent: MarketingSitesCartComponent;
  readonly marketingSiteHeaderComponent: MarketingSiteHeaderComponent;
  readonly marketingSiteFooterComponent: MarketingSiteFooterComponent;
  readonly legalshieldPage: LegalshieldPage;
  readonly firstGetStartedButton: Locator;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    this.smallBusinessQualifyingComponent = new SmallBusinessQualifyingComponent(page);
    this.marketingSitesCartComponent = new MarketingSitesCartComponent(page);
    this.marketingSiteFooterComponent = new MarketingSiteFooterComponent(page);
    this.marketingSiteHeaderComponent = new MarketingSiteHeaderComponent(page);
    this.legalshieldPage = new LegalshieldPage(context, page);
    this.firstGetStartedButton = this.page.locator(`//div[@id="main-content"]//a[@id="lsc-add-to-cart-button"]`).nth(0);
  }

  /**
   *
   *
   * @param {Array<ProductDetails>} productDetails
   * @memberof LegalshieldService
   */
  addProductsFromProductDetails = async (productDetails: Array<ProductDetails>): Promise<void> => {
    let counter = productDetails.length;
    for (const product of productDetails) {
      switch (product.name) {
        case 'Legal Plan':
          await this.addLegalPlan(product.term);
          break;
        case 'Commercial Drivers Legal Plan':
          await this.addCommercialDriversLegalPlan();
          break;
        case 'Small Business Legal Essentials':
        case 'Small Business Legal Plus':
        case 'Small Business Legal Pro':
          await this.addSmallBusinessPlan(product.name);
          break;
        case 'Home Business Supplement':
          await this.addHomeBusinessSupplement();
          break;
        case 'Trial Defense Supplement':
          await this.addTrialDefenseSupplement();
          break;
        case 'Gun Owners Supplement':
          await this.addGunOwnersSupplement();
          break;
        case 'Ride Share and Delivery Supplement':
          await this.addRideShareAndDeliverySupplement();
          break;
        default:
          break;
      }
      if (counter == 1) {
        await this.page.waitForTimeout(500);
        await this.marketingSitesCartComponent.locCheckoutButton.click();
      } else {
        await this.marketingSitesCartComponent.locContinueShoppingLink.click();
      }
      counter--;
    }
  };

  /**
   *
   *
   * @param {string} term
   * @memberof LegalshieldService
   */
  addLegalPlan = async (term: string): Promise<void> => {
    await this.page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/personal-plan/coverage-and-pricing/`);
    const startPlanLocator = this.page.locator(`//a[contains(@class,"lsc-add-to-cart-button") and contains(.,"${term.toLowerCase()}")]`);
    await expect(async () => {
      await startPlanLocator.click();
      await expect(this.page.locator('#cart-wrapper')).toBeVisible();
    }).toPass({ intervals: [0.3] });
  };

  addSmallBusinessPlan = async (productName: string): Promise<void> => {
    await this.page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/business-plan/plan-summary/#chart`);
    productName = productName.replace(' Legal', '');
    const getStartedButtonLocator = this.page.locator(
      `//div[contains(@class,"lsc-dynamic-single-plan  et_pb_css_mix_blend_mode_passthrough") and contains(.,"${productName}")]//a[@role="button"]`
    );
    await expect(async () => {
      await getStartedButtonLocator.click();
      await expect(this.page.locator('#qualifying-container')).toBeVisible();
    }).toPass({ intervals: [0.3] });
    await this.smallBusinessQualifyingComponent.completeQualifyingQuestionnaireWithNos();
  };

  /**
   *
   *
   * @memberof LegalshieldService
   */
  addCommercialDriversLegalPlan = async (): Promise<void> => {
    await this.page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/legal-protection-truck-drivers-and-other-commercial-drivers/`);
    await this.firstGetStartedButton.click();
  };
  /**
   *
   *
   * @memberof LegalshieldService
   */
  addHomeBusinessSupplement = async (): Promise<void> => {
    await this.page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/legal-protection-home-business/`);
    await this.firstGetStartedButton.click();
  };
  /**
   *
   *
   * @memberof LegalshieldService
   */
  addTrialDefenseSupplement = async (): Promise<void> => {
    await this.page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/extended-trial-and-lawsuit-defense-protection/`);
    await this.firstGetStartedButton.click();
  };
  /**
   *
   *
   * @memberof LegalshieldService
   */
  addGunOwnersSupplement = async (): Promise<void> => {
    await this.page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/gun-supplement/`);
    await this.firstGetStartedButton.click();
  };
  /**
   *
   *
   * @memberof LegalshieldService
   */
  addRideShareAndDeliverySupplement = async (): Promise<void> => {
    await this.page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/legal-help-ride-share-and-delivery-drivers/`);
    await this.firstGetStartedButton.click();
  };
}
