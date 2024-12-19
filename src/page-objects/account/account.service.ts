import { Page } from '@playwright/test';
import { OverviewPage } from './overview.page';

export class AccountService {
  protected page: Page;
  readonly overviewPage: OverviewPage;

  constructor(page: Page) {
    this.page = page;
    this.overviewPage = new OverviewPage(page);
  }
  
}
