import { BrowserContext, Page, Locator, expect } from '@playwright/test';
import { GlobalHeaderComponent, GlobalFooterComponent } from '@legalshield/frontend-automation-commons';
import { CartService } from '../cart/cart-service';
import { SmallBusinessQuestionsComponent } from '../shieldassociate/small-business-questions.component';
import { AssociateQuestionsComponent } from '../shieldassociate/associate-questions.component';
import { PlanDetails } from '../../types/types';

export class BuyNowPage {
  readonly page: Page;
  readonly cartService: CartService;
  readonly smallBusinessQuestionsComponent: SmallBusinessQuestionsComponent;
  readonly associateQuestionsComponent: AssociateQuestionsComponent;
  readonly globalHeaderComponent: GlobalHeaderComponent;
  readonly globalFooterComponent: GlobalFooterComponent;
  readonly locEstimatedTotal: Locator;
  readonly locContinueButton: Locator;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.cartService = new CartService(context, page);
    this.smallBusinessQuestionsComponent = new SmallBusinessQuestionsComponent(page);
    this.associateQuestionsComponent = new AssociateQuestionsComponent(page);
    this.globalHeaderComponent = new GlobalHeaderComponent(page);
    this.globalFooterComponent = new GlobalFooterComponent(context, page);
    this.locEstimatedTotal = this.page.locator('//div[contains(@class,"price-container")]/p[contains(.,"$")]');
    this.locContinueButton = this.page.locator('//button[@data-pplsi-event-id="buy-now-button"]');
  }

  clickBuyNowButtonAndWaitForCartService = async (planName: string, associateRegistrationType: string): Promise<void> => {
    const buyNowButtonLocator = this.page.locator(`//div[contains(@class, "lsux-pricing-card") and contains(.,"${planName}")]//button`);
    await buyNowButtonLocator.click();
    if (planName.includes('Small Business')) {
      await this.smallBusinessQuestionsComponent.locPubliclyTradedOrNonProfitNoCheckbox.click();
      await this.smallBusinessQuestionsComponent.locContinueButton.click();
    }
    if (planName == 'Associate') {
      // TBD
    }
    await this.page.waitForURL(new RegExp('data='));
  };

  selectPlans = async (planDetails: Array<PlanDetails>): Promise<void> => {
    for (const plan of planDetails) {
      const priceCardLocator = this.page.locator(`//h2[text()="${plan.marketingName}"]/ancestor::div[@data-pplsi-event-id="price-card-container"]`);
      await priceCardLocator.click();
      if (plan.marketingName === 'Small Business') {
        await this.smallBusinessQuestionsComponent.locPubliclyTradedOrNonProfitNoCheckbox.click();
        await this.smallBusinessQuestionsComponent.locContinueButton.click();
      }
      if (plan.marketingName === 'Associate') {
        await this.associateQuestionsComponent.answerStartUpQuestions(plan.associateRegistrationType);
        await this.associateQuestionsComponent.locContinueButton.click();
      }
    }
  };

  configureCoverage = async (planDetails: Array<PlanDetails>, regionUnderTest: string): Promise<void> => {
    await this.cartService.configureCoveragePage.selectRegion(regionUnderTest);
    if (planDetails && planDetails.some((plan) => plan.marketingName === 'Legal Plan Individual')) {
      await this.configureLegalPlanIndividual(planDetails);
    }
    if (planDetails && planDetails.some((plan) => plan.marketingName === 'Legal Plan Family')) {
      await this.configureLegalPlanFamily(planDetails);
    }
    if (planDetails && planDetails.some((plan) => plan.marketingName === 'Small Business')) {
      await this.configureSmallBusiness(planDetails);
    }
    if (planDetails && planDetails.some((plan) => plan.marketingName === 'Commercial Drivers Legal Plan')) {
      await this.configureCommercialDriver();
    }
    if (planDetails && planDetails.some((plan) => plan.marketingName === 'Super Commercial Drivers Legal Plan')) {
      await this.configureSuperCommercialDriver();
    }
    if (planDetails && planDetails.some((plan) => plan.marketingName === 'IDShield Individual')) {
      await this.configureIndividualIdentityProtection(planDetails);
    }
    if (planDetails && planDetails.some((plan) => plan.marketingName === 'IDShield Family')) {
      await this.configureFamilyIdentityProtection(planDetails);
    }
    if (planDetails && planDetails.some((plan) => plan.marketingName === 'Associate')) {
      await this.configureAssociate();
    }
  };

  //TODO: abstract out shared code from the following methods
  configureLegalPlanIndividual = async (planDetails: Array<PlanDetails>): Promise<void> => {
    const index = planDetails.findIndex((plan) => plan.marketingName === 'Legal Plan Individual');
    await this.cartService.configureCoveragePage.selectSupplements(planDetails[index].supplements);
    await this.cartService.configureCoveragePage.locContinueButton.click();
  };
  configureLegalPlanFamily = async (planDetails: Array<PlanDetails>): Promise<void> => {
    const index = planDetails.findIndex((plan) => plan.marketingName === 'Legal Plan Family');
    await this.cartService.configureCoveragePage.selectSupplements(planDetails[index].supplements);
    await this.cartService.configureCoveragePage.locContinueButton.click();
  };

  configureFamilyIdentityProtection = async (planDetails: Array<PlanDetails>): Promise<void> => {
    const index = planDetails.findIndex((plan) => plan.marketingName === 'IDShield Family');
    await this.cartService.configureCoveragePage.selectTier(planDetails[index].tier.name);
    await this.cartService.configureCoveragePage.locContinueButton.click();
  };

  configureIndividualIdentityProtection = async (planDetails: Array<PlanDetails>): Promise<void> => {
    const index = planDetails.findIndex((plan) => plan.marketingName === 'IDShield Individual');
    await this.cartService.configureCoveragePage.selectTier(planDetails[index].tier.name);
    await this.cartService.configureCoveragePage.locContinueButton.click();
  };

  configureSmallBusiness = async (planDetails: Array<PlanDetails>): Promise<void> => {
    const index = planDetails.findIndex((plan) => plan.marketingName === 'Small Business');
    await this.cartService.configureCoveragePage.selectTier(planDetails[index].tier.name);
    await this.cartService.configureCoveragePage.selectSupplements(planDetails[index].supplements);
    await this.cartService.configureCoveragePage.locContinueButton.click();
  };

  configureAssociate = async (): Promise<void> => {
    // TBD
    await this.cartService.configureCoveragePage.locContinueButton.click();
  };

  configureCommercialDriver = async (): Promise<void> => {
    // TBD
    await this.cartService.configureCoveragePage.locContinueButton.click();
  };

  configureSuperCommercialDriver = async (): Promise<void> => {
    // TBD
    await this.cartService.configureCoveragePage.locContinueButton.click();
  };

  assertEstimatedTotal = async (planDetails: Array<PlanDetails>): Promise<void> => {
    let expectedEstimatedTotal = 0.0;
    for (const plan of planDetails) {
      expectedEstimatedTotal += parseFloat(plan.cost.replace('$', ''));
    }
    await expect(this.locEstimatedTotal).toContainText(`$${expectedEstimatedTotal.toFixed(2)}`);
  };
}
