import { Locator, Page, BrowserContext, expect } from '@playwright/test';
import { ProductDetails, PageUrlAndTitleArray, PlanNameCostArray } from '../../../types/types';
import UrlsUtils from '../../../utils/urls.utils';
import { LegalshieldPage } from './legalshield.page';
import { SmallBusinessQualifyingComponent } from './legalshield-small-business-qualifying.component';
import { MarketingSitesCartComponent } from '../marketing-sites-cart-component';
import { MarketingSiteFooterComponent } from '../marketing-sites-footer-component';
import { MarketingSiteHeaderComponent } from '../marketing-sites-header-component';
import { HeroSectionComponent } from '../../common-components/hero-section.component';
import { GridSectionComponent } from '../../common-components/grid-section.component';
import { PricingSectionComponent } from '../../common-components/pricing-section.component';
import { NavListSectionComponent } from '../../common-components/nav_list-section.component';
import { FeaturesGridSectionComponent } from '../../common-components/features-grid-section.component';

export class LegalshieldService {
  protected page: Page;
  protected context: BrowserContext;
  readonly smallBusinessQualifyingComponent: SmallBusinessQualifyingComponent;
  readonly marketingSitesCartComponent: MarketingSitesCartComponent;
  readonly marketingSiteHeaderComponent: MarketingSiteHeaderComponent;
  readonly marketingSiteFooterComponent: MarketingSiteFooterComponent;
  readonly heroSectionComponent: HeroSectionComponent;
  readonly gridSectionComponent: GridSectionComponent;
  readonly pricingSectionComponent: PricingSectionComponent;
  readonly navListSectionComponent: NavListSectionComponent;
  readonly featuresGridSectionComponent: FeaturesGridSectionComponent;
  readonly legalshieldPage: LegalshieldPage;
  readonly firstGetStartedButton: Locator;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    this.smallBusinessQualifyingComponent = new SmallBusinessQualifyingComponent(page);
    this.marketingSitesCartComponent = new MarketingSitesCartComponent(page);
    this.marketingSiteFooterComponent = new MarketingSiteFooterComponent(page);
    this.marketingSiteHeaderComponent = new MarketingSiteHeaderComponent(page);
    this.heroSectionComponent = new HeroSectionComponent(context, page);
    this.gridSectionComponent = new GridSectionComponent(context, page);
    this.pricingSectionComponent = new PricingSectionComponent(context, page);
    this.navListSectionComponent = new NavListSectionComponent(context, page);
    this.featuresGridSectionComponent = new FeaturesGridSectionComponent(context, page);
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

  clickAllLinksAndVerifyExpectedUrlAndTitle = async (links: Locator, expectedUrlAndTitleArray: PageUrlAndTitleArray): Promise<void> => {
    const count = await links.count();
    for (let i = 0; i < count; i++) {
      try {
        await links.nth(i).click();
        await this.page.screenshot({ fullPage: true, path: `screenshots/${new Date().getTime()}-${i}.png` });
        await expect.soft(this.page).toHaveURL(new RegExp(expectedUrlAndTitleArray[i].url));
        await expect.soft(this.page).toHaveTitle(expectedUrlAndTitleArray[i].title);
        await this.page.goBack();
      } catch {
        console.log('Errored out in catch');
        continue;
      }
    }
  };

  clickAllLinksAndVerifyThCartIsUpdated = async (links: Locator, planNameAndCost: PlanNameCostArray): Promise<void> => {
    const count = await links.count();
    for (let i = 0; i < count; i++) {
      try {
        await links.nth(i).click();
        await this.page.screenshot({ fullPage: true, path: `screenshots/${new Date().getTime()}-${i}.png` });
        await expect.soft(this.marketingSitesCartComponent.locCartContainerDiv).toContainText(planNameAndCost[i].name);
        await expect.soft(this.marketingSitesCartComponent.locCartContainerDiv).toContainText(planNameAndCost[i].cost);
        await expect.soft(this.marketingSiteHeaderComponent.locShoppingCartItemAddedNotification).toBeVisible();
        await this.marketingSitesCartComponent.locTrashCanIcon.click();
        await this.marketingSitesCartComponent.locContinueShoppingLink.click();
      } catch {
        console.log('Errored out in catch');
        continue;
      }
    }
  };

  clickItemsFromUnorderedList = async (listItems: Locator): Promise<Array<string>> => {
    const items = await listItems.all();
    let results = [];
    for (const item of items) {
      try {
        await item.click();
        await this.page.waitForLoadState();
        await this.page.screenshot({ fullPage: true, path: `screenshots/${new Date().getTime()}-${this.page.title()}.png` });
        results.push(this.page.url(), this.page.title());
        await this.page.goBack();
      } catch {
        console.log('Errored out in catch');
        continue;
      }
    }
    results = await Promise.all(results);
    return results;
  };
}
