import { Page, BrowserContext } from '@playwright/test';
import { IdshieldPage } from './idshield.page';
import { IdshieldIndividualPlanPage } from './idshield-individual-plan.page';

export class IdshieldService {
  protected page: Page;
  protected context: BrowserContext;
  readonly idshieldPage: IdshieldPage;
  readonly idshieldIndividualPlanPage: IdshieldIndividualPlanPage;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    this.idshieldPage = new IdshieldPage(page);
    this.idshieldIndividualPlanPage = new IdshieldIndividualPlanPage(page);
  }
}
