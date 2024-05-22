import { Page, Locator, expect } from '@playwright/test';
import { PlanDetails } from '../../types/types';
import { PlusProductCardComponent } from './plus-product-card.component';
import { AssociateQuestionsComponent } from './associate-questions.component';
import { PlusSmallBusinessQualifyingComponent } from './plus-small-business-qualifying.component';
import { PlusCartFooterComponent } from './plus-cart-footer.component';

export class PlusHomePage {
  protected page: Page;
  readonly productCardComponent: PlusProductCardComponent;
  readonly associateQuestionsComponent: AssociateQuestionsComponent;
  readonly plusSmallBusinessQualifyingComponent: PlusSmallBusinessQualifyingComponent;
  readonly locTierContinueButton: Locator;
  readonly locSupplementsContinueWithoutSupplementsButton: Locator;
  readonly locSupplementsContinueButton: Locator;
  readonly plusCartFooterComponent: PlusCartFooterComponent;

  constructor(page: Page) {
    this.page = page;
    this.productCardComponent = new PlusProductCardComponent(page);
    this.associateQuestionsComponent = new AssociateQuestionsComponent(page);
    this.plusSmallBusinessQualifyingComponent = new PlusSmallBusinessQualifyingComponent(page);
    this.plusCartFooterComponent = new PlusCartFooterComponent(page);
    this.locTierContinueButton = this.page.locator('//button[contains(.,"Continue")]').nth(0);
    this.locSupplementsContinueWithoutSupplementsButton = this.page.locator('//button[contains(.,"Continue without additional supplements")]');
    this.locSupplementsContinueButton = this.page.locator('//button[contains(.,"Continue")]');
  }

  addProductsFromProductDetails = async (planDetails: Array<PlanDetails>): Promise<void> => {
    for (const plan of planDetails) {
      await this.productCardComponent.clickAddToCartButton(plan.marketingName);
      // Small Business Qualifying Flow
      if (plan.marketingName == 'Small Business Plan') {
        await this.plusSmallBusinessQualifyingComponent.submitSmallBusinessQualifyingForm();
      }
      // Startup Question Flow
      if (plan.marketingName == 'Associate Startup' || plan.marketingName == 'Business Builder') {
        await this.associateQuestionsComponent.answerStartUpQuestions('individual');
      }
      // Select Tier Flow
      if (
        plan.marketingName.includes('IDShield') ||
        plan.marketingName.includes('Commercial Drivers') ||
        plan.marketingName.includes('Small Business Plan')
      ) {
        await this.selectTier(plan.name, plan.tier.name);
      }
      // Supplements Flow
      if (plan.marketingName == 'Legal Plan' || plan.marketingName == 'Small Business Plan') {
        await this.selectSupplements(plan.supplements);
      }
    }
  };

  addAssociatePlan = async (): Promise<void> => {
    await this.productCardComponent.clickAddToCartButton('Associate');
  };
  addBusinessBuilderPlan = async (): Promise<void> => {
    await this.productCardComponent.clickAddToCartButton('Business Builder');
  };

  selectTier = async (planName: string, tierName: string): Promise<void> => {
    let tierNameLocator: Locator;
    if (planName.includes('IDShield')) {
      tierNameLocator = this.page.locator(`//button[contains(.,"${planName}") and contains(.,"${tierName}")]`);
    } else {
      tierNameLocator = this.page.locator(`//button[descendant::div[text() = '${tierName}']]`);
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

  assertDisplayedPlanNamesIncludeExpectedNames = async (expectedPlanNames: string[]): Promise<void> => {
    const displayedPlanNames = await this.productCardComponent.locPlanNamesArray.allTextContents();
    for (const expectedPlanName of expectedPlanNames) {
      let found = false;
      let nameFound = false;
      for (const planName of displayedPlanNames) {
        nameFound = planName.includes(expectedPlanName);

        if (nameFound) {
          found = true;
          break;
        }
      }
      expect.soft(found, `Plan ${expectedPlanName} not found in Explore Memberships Menu`).toBe(true);
    }
  };
}
