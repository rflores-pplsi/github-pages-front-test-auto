import { Page, BrowserContext } from '@playwright/test';
import { LegalshieldPlusPage } from '../legalshield-associates/legalshield-plus.page';

export class LegalshieldService {
  protected page: Page;
  readonly legalshieldPlusPage: LegalshieldPlusPage;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.legalshieldPlusPage = new LegalshieldPlusPage(context, page);
  }
}
