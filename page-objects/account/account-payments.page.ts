import { expect, Locator, Page } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';

export class PaymentsPage {
  readonly page: Page;
  readonly url: string;
  readonly hdrPage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.url = UrlsUtils.legalshieldUrls.account.url + "/payments";
    this.hdrPage = page.locator('h2.lsux-heading');
  }

  goto = async (): Promise<void> => {
    await this.page.goto(this.url);
  }

};