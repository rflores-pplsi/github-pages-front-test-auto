import { Page, BrowserContext } from '@playwright/test';
import { IdshieldPage } from './idshield.page';
import { IdshieldIndividualPlanPage } from './idshield-individual-plan.page';
import { PlanDetails } from '../../../types/types';
import { MarketingSitesCartComponent } from '../marketing-sites-cart-component';
import { MarketingFooterComponent } from '../marketing-footer.component';
import { clickLocatorWithRetry } from '../../../utils/helpers';

export class IdshieldService {
  protected page: Page;
  protected context: BrowserContext;
  readonly idshieldPage: IdshieldPage;
  readonly idshieldIndividualPlanPage: IdshieldIndividualPlanPage;
  readonly marketingSitesCartComponent: MarketingSitesCartComponent;
  readonly marketingFooterComponent: MarketingFooterComponent;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    this.idshieldPage = new IdshieldPage(page);
    this.idshieldIndividualPlanPage = new IdshieldIndividualPlanPage(page);
    this.marketingSitesCartComponent = new MarketingSitesCartComponent(page);
    this.marketingFooterComponent = new MarketingFooterComponent(context, page);
  }

  addProductsFromProductDetails = async (planDetails: Array<PlanDetails>): Promise<void> => {
    let counter = planDetails.length;
    for (const plan of planDetails) {
      await this.clickLearnMoreButton(plan.marketingName);
      await this.selectTier(plan.tier.name);
    }
    if (counter == 1) {
      await this.page.waitForTimeout(500);
      await this.marketingSitesCartComponent.locCheckoutButton.click();
    } else {
      await this.marketingSitesCartComponent.locContinueShoppingLink.click();
    }
    counter--;
  };

  clickLearnMoreButton = async (planName: string): Promise<void> => {
    const learnMoreButton = this.page.locator(
      `//div[contains(@class,"slot-pricing-card") and .//div[text()="${planName}"]]//a`
    );
    await learnMoreButton.click();
  };

  selectTier = async (tier: string): Promise<void> => {
    await this.idshieldIndividualPlanPage.clickSignUpButton(tier);
  };
}
