import { Page, BrowserContext } from '@playwright/test';
import { BusinessSolutionsOrientationPage } from './business-solutions-orientation/business-solutions-orientation.page';
import { PplsiPage } from './pplsi.page';

export class PplsiService {
  protected page: Page;
  protected context: BrowserContext;
  readonly businessSolutionsOrientationPage: BusinessSolutionsOrientationPage;
  readonly pplsiPage: PplsiPage;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    this.businessSolutionsOrientationPage = new BusinessSolutionsOrientationPage(context, page);
    this.pplsiPage = new PplsiPage(context, page);
  }
}
