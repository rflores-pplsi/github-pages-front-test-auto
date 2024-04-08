import { expect, Page } from '@playwright/test';
import { PlusProductCardComponent } from './plus-product-card.component';
import { AssociateQuestionsComponent } from './associate-questions.component';
import { SmallBusinessQualifyingComponent } from '../marketing-sites/legalshield/legalshield-small-business-qualifying.component';
import { PlusCartFooterComponent } from './plus-cart-footer.component';

export class PlusHomePage {
  protected page: Page;
  readonly productCardComponent: PlusProductCardComponent;
  readonly associateQuestionsComponent: AssociateQuestionsComponent;
  readonly smallBusinessQualifyingComponent: SmallBusinessQualifyingComponent;
  readonly plusCartFooterComponent: PlusCartFooterComponent;

  constructor(page: Page) {
    this.page = page;
    this.productCardComponent = new PlusProductCardComponent(page);
    this.associateQuestionsComponent = new AssociateQuestionsComponent(page);
    this.smallBusinessQualifyingComponent = new SmallBusinessQualifyingComponent(page);
    this.plusCartFooterComponent = new PlusCartFooterComponent(page);
  }

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
