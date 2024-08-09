import { BrowserContext, Page, Locator, expect } from '@playwright/test';
import { GlobalHeaderComponent, GlobalFooterComponent } from '@legalshield/frontend-automation-commons';
import { CartService } from '../cart/cart-service';
import { SmallBusinessQuestionsComponent } from './small-business-questions.component';
import { AssociateQuestionsComponent } from './associate-questions.component';
import { PlanDetails } from '../../types/types';
import { PlusProductCardComponent } from './plus-product-card.component';
import { PlusSmallBusinessQualifyingComponent } from './plus-small-business-qualifying.component';

export class BuyNowPage {
  readonly page: Page;
  readonly cartService: CartService;
  readonly smallBusinessQuestionsComponent: SmallBusinessQuestionsComponent;
  readonly associateQuestionsComponent: AssociateQuestionsComponent;
  readonly globalHeaderComponent: GlobalHeaderComponent;
  readonly globalFooterComponent: GlobalFooterComponent;
  readonly productCardComponent: PlusProductCardComponent;
  readonly plusSmallBusinessQualifyingComponent: PlusSmallBusinessQualifyingComponent;
  readonly locEstimatedTotal: Locator;
  readonly locContinueButton: Locator;
  readonly locTierContinueButton: Locator;
  readonly locSupplementsContinueWithoutSupplementsButton: Locator;
  readonly locSupplementsContinueButton: Locator;
  readonly locSelectYourStateDropdown: Locator;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.cartService = new CartService(context, page);
    this.productCardComponent = new PlusProductCardComponent(page);
    this.smallBusinessQuestionsComponent = new SmallBusinessQuestionsComponent(page);
    this.associateQuestionsComponent = new AssociateQuestionsComponent(page);
    this.globalHeaderComponent = new GlobalHeaderComponent(page);
    this.globalFooterComponent = new GlobalFooterComponent(context, page);
    this.plusSmallBusinessQualifyingComponent = new PlusSmallBusinessQualifyingComponent(page);
    this.locEstimatedTotal = this.page.locator('//div[contains(@class,"price-container")]/p[contains(.,"$")]');
    this.locContinueButton = this.page.locator('//button[@data-pplsi-event-id="buy-now-button"]');
    this.locTierContinueButton = this.page.locator('//button[contains(.,"Continue")]').nth(0);
    this.locSupplementsContinueWithoutSupplementsButton = this.page.locator('//button[contains(.,"Continue without additional supplements")]');
    this.locSupplementsContinueButton = this.page.locator('//button[contains(., "Continue") and not(@disabled)]');
    this.locSelectYourStateDropdown = this.page.locator('//button[contains(.,"Select your state")]');
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
      console.log(`Selecting plan: ${plan.marketingName}`);
      const priceCardLocator = this.page.locator(`//button[descendant::div[text() = "${plan.marketingName}"]]`);
      await priceCardLocator.click();
      if (plan.marketingName === 'Small Business' || plan.marketingName === 'Petite Entreprise') {
        await this.smallBusinessQuestionsComponent.locPubliclyTradedOrNonProfitNoCheckbox.click();
        await this.smallBusinessQuestionsComponent.locContinueButton.click();
      }
      if (plan.marketingName === 'Associate' || plan.marketingName === 'Associé') {
        await this.associateQuestionsComponent.answerStartUpQuestions(plan.associateRegistrationType);
        await this.associateQuestionsComponent.locContinueButton.click();
      }
    }
  };

  newSelectPlans = async (planDetails: Array<PlanDetails>, region: string): Promise<void> => {
    for (const plan of planDetails) {
      const priceCardLocator = this.page.locator(`//button[descendant::div[text() = "${plan.marketingName}"]]`);
      await priceCardLocator.click();
      await this.selectRegion(region);
      // Small Business Qualifying Flow
      if (plan.marketingName.includes('Small Business')) {
        await this.plusSmallBusinessQualifyingComponent.submitSmallBusinessQualifyingForm();
      }
      // Startup Question Flow
      if (plan.marketingName == 'Associate' || plan.marketingName == 'Business Builder') {
        await this.associateQuestionsComponent.answerStartUpQuestions('individual');
      }
      // Select Tier Flow
      if (
        plan.marketingName.includes('IDShield') ||
        plan.marketingName.includes('Commercial Drivers') ||
        plan.marketingName.includes('Small Business')
      ) {
        await this.selectTier(plan.name, plan.tier.name);
      }
      // Supplements Flow
      if (plan.marketingName.includes('Legal Plan') || plan.marketingName.includes('Small Business')) {
        await this.selectSupplements(plan.supplements);
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
    if (planDetails && planDetails.some((plan) => plan.marketingName === 'Super Commercial Drivers')) {
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
    await this.cartService.configureCoveragePage.locContinueButton.click();
  };

  selectTier = async (planName: string, tierName: string): Promise<void> => {
    let tierNameLocator: Locator;
    if (planName.includes('IDShield')) {
      tierNameLocator = this.page.locator(`//button[contains(.,"${planName}") and contains(.,"${tierName}")]`);
    } else {
      tierNameLocator = this.page.locator(`//div[contains(.,"Choose a")]//button[descendant::div[text() = '${tierName}']]`);
    }
    await tierNameLocator.click();
    await this.locTierContinueButton.click();
  };

  selectSupplements = async (
    supplements: Array<{
      cost: string;
      name: string;
    }>
  ): Promise<void> => {
    if (supplements.length === 0) {
      await this.locSupplementsContinueWithoutSupplementsButton.click();
    } else {
      for (const supplement of supplements) {
        const supplementLocator = this.page.locator(`//button[contains(.,"${supplement.name}")]`);
        await supplementLocator.click();
      }
      await this.locSupplementsContinueButton.click();
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

  selectRegion = async (region: string): Promise<void> => {
    await this.locSelectYourStateDropdown.click();
    const optionLocator = this.page.locator(`//span[contains(.,"${region}")]`);
    await optionLocator.click();
  };
}
