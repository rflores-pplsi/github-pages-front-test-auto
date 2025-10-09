import { Page, BrowserContext, Locator } from '@playwright/test';
import { IdshieldPage } from './idshield.page';
import { IdshieldIndividualPlanPage } from './idshield-individual-plan.page';
import { PlanDetails } from '../../../types/types';
import { MarketingSitesCartComponent } from '../marketing-sites-cart-component';
import { MarketingFooterComponent } from '../marketing-footer.component';

export class IdshieldService {
  protected page: Page;
  protected context: BrowserContext;
  readonly idshieldPage: IdshieldPage;
  readonly idshieldIndividualPlanPage: IdshieldIndividualPlanPage;
  readonly marketingSitesCartComponent: MarketingSitesCartComponent;
  readonly marketingFooterComponent: MarketingFooterComponent;
  readonly locSelectRegionDropdown: Locator;
  readonly locUpdateRegionButton: Locator;
  readonly locClosePromotionalDialogButton: Locator;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    this.idshieldPage = new IdshieldPage(page);
    this.idshieldIndividualPlanPage = new IdshieldIndividualPlanPage(page);
    this.marketingSitesCartComponent = new MarketingSitesCartComponent(page);
    this.marketingFooterComponent = new MarketingFooterComponent(context, page);
    // I couldn't get the locator to work with getByRole or getByLabel, so using a CSS selector for now
    this.locSelectRegionDropdown = this.page.locator('select[name="locationModalRegion"]');
    this.locUpdateRegionButton = this.page.getByRole('button', { name: 'Update Region' });
    this.locClosePromotionalDialogButton = this.page.getByRole('button', { name: '×' });
  }

  addProductsFromProductDetails = async (planDetails: Array<PlanDetails>): Promise<void> => {
    let counter = planDetails.length;
    for (const plan of planDetails) {
      await this.clickLearnMoreButton(plan.marketingName);
      await this.selectTier(plan.tier.name);

      if (process.env.USE_PROD == 'true' && !this.page.url().includes('/en-ca'))  {
        await this.closePromotionalDialog();
      }
    }
    if (counter == 1) {
      // find explicit wait      
      await this.page.waitForTimeout(1000);
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

  selectRegionFromDropdown = async (regionName: string): Promise<void> => {
    await this.page.waitForTimeout(1000);
    await this.locSelectRegionDropdown.selectOption({ label: regionName });
    await this.locUpdateRegionButton.click();
  };

  closePromotionalDialog = async (): Promise<void> => {
    await this.locClosePromotionalDialogButton.click();
  };
}
