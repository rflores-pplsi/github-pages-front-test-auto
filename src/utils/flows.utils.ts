import { Page } from '@playwright/test';
import { HeaderComponent } from '../page-objects/legalshield-associate/components/header.component';
import { ProductCardComponent } from '../page-objects/legalshield-associate/components/product-card.component';
import { AssociateQuestionsComponent } from '../page-objects/legalshield-associate/components/associate-questions.component';
import { SmallBusinessQuestionsComponent } from '../page-objects/legalshield-associate/components/small-business-questions.component';
import { ChooseATierComponent } from '../page-objects/legalshield-associate/components/choose-a-tier.component';
import { AdditionalSupplementsComponent } from '../page-objects/legalshield-associate/components/additional-supplements.component';
import { CartComponent } from '../page-objects/legalshield-associate/components/cart.component';
import { PlanDetails } from '../types/types';

export async function selectLegalshieldAssociatesPlansFromPlanDetails(planDetails: Array<PlanDetails>, state: string, page: Page): Promise<void> {
  // Iterates through the planDetails array and selects the plans and supplements and their corresponding configurations
  const headerComponent = new HeaderComponent(page);
  const productCardComponent = new ProductCardComponent(page);
  const associateQuestionsComponent = new AssociateQuestionsComponent(page);
  const chooseATierComponent = new ChooseATierComponent(page);
  const additionalSupplementsComponent = new AdditionalSupplementsComponent(page);
  const smallBusinessQuestionsComponent = new SmallBusinessQuestionsComponent(page);

  for (const plan of planDetails) {
    if (page.url().includes('buynow')) {
      // Plan select for Buy Now Page
      await page.locator(`//button[contains(@id,"${plan.marketingName}")]`).click();
    } else {
      // Plan select for Home Page
      await productCardComponent.clickAddToCartButton(plan.marketingName);
    }
    // Startup Question Flow
    if (plan.marketingName.includes('Associate') || plan.marketingName.includes('Associé') || plan.marketingName.includes('Business Builder')) {
      await associateQuestionsComponent.answerStartUpQuestions('individual');
    }
    // Tier Flow
    if (
      plan.marketingName.includes('IDShield') ||
      plan.marketingName.includes('CDLP') || 
      plan.marketingName.includes('Small Business') ||
      (plan.marketingName.includes('Legal Plan') && plan.tier.name !== 'NA')
    ) {
      await chooseATierComponent.selectTier(plan.name, plan.tier.name);
    }
    // Supplements Flow
    if (
      (plan.marketingName.includes('Legal Plan') && !plan.marketingName.includes('Commercial Drivers')) ||
      plan.marketingName.includes('Small Business')
    ) {
      await additionalSupplementsComponent.selectSupplements(plan.supplements);
    }
    // Small Business Qualifying Flow
    if (plan.marketingName.includes('Small Business')) {
      await smallBusinessQuestionsComponent.selectPubliclyTradedOrNonProfitNo();
      await smallBusinessQuestionsComponent.clickContinueButton();
    }
    if (planDetails.indexOf(plan) === planDetails.length - 1) {
      break;
    } else {
      await headerComponent.clickShoppingCartButton();
    }
  }
}
