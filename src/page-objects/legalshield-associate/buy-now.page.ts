import { BrowserContext, Page, Locator, expect } from '@playwright/test';
import { PlanDetails } from '../../types/types';
import { HeaderComponent } from './components/header.component';
import { LocationComponent } from './components/location.component';
import { ProductCardComponent } from './components/product-card.component';
import { AssociateQuestionsComponent } from './components/associate-questions.component';
import { SmallBusinessQuestionsComponent } from './components/small-business-questions.component';
import { CartComponent } from './components/cart.component';
import { SelectRegionComponent } from './components/select-region.component'; 
import UrlsUtils from '../../utils/urls.utils';

export class BuyNowPage {
  readonly page: Page;
  readonly headerComponent: HeaderComponent;
  readonly locationComponent: LocationComponent;
  readonly smallBusinessQuestionsComponent: SmallBusinessQuestionsComponent;
  readonly associateQuestionsComponent: AssociateQuestionsComponent;
  readonly productCardComponent: ProductCardComponent;
  readonly cartComponent: CartComponent;
  readonly selectRegionComponent: SelectRegionComponent;
  private locEstimatedTotal: Locator;
  private locContinueButton: Locator;
  private locTierContinueButton: Locator;
  private locSupplementsContinueWithoutSupplementsButton: Locator;
  private locSupplementsContinueButton: Locator;
  private locSelectYourStateDropdown: Locator;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.headerComponent = new HeaderComponent(page);
    this.locationComponent = new LocationComponent(page);
    this.smallBusinessQuestionsComponent = new SmallBusinessQuestionsComponent(page);
    this.associateQuestionsComponent = new AssociateQuestionsComponent(page);
    this.productCardComponent = new ProductCardComponent(page);
    this.cartComponent = new CartComponent(page);
    this.selectRegionComponent = new SelectRegionComponent(page);
    this.locEstimatedTotal = this.page.locator('//div[contains(@class,"price-container")]/p[contains(.,"$")]');
    this.locContinueButton = this.page.locator('//button[@data-pplsi-event-id="buy-now-button"]');
    this.locTierContinueButton = this.page.locator('//button[contains(.,"Continue")]').nth(0);
    this.locSupplementsContinueWithoutSupplementsButton = this.page.locator('//button[contains(.,"Continue without additional supplements")]');
    this.locSupplementsContinueButton = this.page.locator('//button[contains(., "Continue") and not(@disabled)]');
    this.locSelectYourStateDropdown = this.page.locator('//button[contains(.,"Select your state")]');
  }

  // #region Navigation
  navigateToBuyNowPage = async (associate: string): Promise<void> => {
    await this.page.goto(`https://${associate}.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/BuyNow`);
  };
  // #endregion Navigation
  
  // #region Assertions
  assertEstimatedTotal = async (planDetails: Array<PlanDetails>): Promise<void> => {
    let expectedEstimatedTotal = 0.0;
    for (const plan of planDetails) {
      expectedEstimatedTotal += parseFloat(plan.cost.replace('$', ''));
    }
    await expect(this.locEstimatedTotal).toContainText(`$${expectedEstimatedTotal.toFixed(2)}`);
  };
  // #endregion Assertions
}
