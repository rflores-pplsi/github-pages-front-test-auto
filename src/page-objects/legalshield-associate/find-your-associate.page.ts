import { BrowserContext, Locator, Page } from '@playwright/test';
import { GlobalHeaderComponent, GlobalFooterComponent } from '@legalshield/frontend-automation-commons';

export class FindYourAssociatePage {
  readonly page: Page;
  readonly locSearchInput: Locator;
  readonly locH1Header: Locator;
  readonly globalHeaderComponent: GlobalHeaderComponent;
  readonly globalFooterComponent: GlobalFooterComponent;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.locH1Header = this.page.locator('//h1');
    this.locSearchInput = this.page.locator('//input[@name="search-input"]');
    this.globalHeaderComponent = new GlobalHeaderComponent(page);
    this.globalFooterComponent = new GlobalFooterComponent(context, page);
  }
}
