import { Locator, Page } from '@playwright/test';

export class LegalshieldPlusExploreMembershipComponent {
  protected page: Page;
  readonly locExploreMembershipContainer: Locator;

  constructor(page: Page) {
    this.page = page;
    //TBD: Fill out page as application completes, double check locator
    this.locExploreMembershipContainer = this.page.locator('');
  }

  method1 = async (): Promise<void> => {
    //TBD: Fill out page as application completes
  };
}
