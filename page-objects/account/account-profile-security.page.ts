import { Locator, Page } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';

export class SecurityPage {
  readonly page: Page;
  readonly url: string;
  readonly txtEmailAddress: Locator;
  readonly btnEditEmailAddress: Locator;
  readonly txtPassword: Locator;
  readonly btnEditPassword: Locator;

  constructor(page: Page) {
    this.page = page;
    this.url = UrlsUtils.legalshieldUrls.account.url + "/security";
    this.txtEmailAddress = page.locator('//h5[text()="Email Address"]/following-sibling::p');
    this.btnEditEmailAddress = page.locator('//h5[text()="Email Address"]/../../button');
    this.txtPassword = page.locator('//h5[text()="Password"]/following-sibling::p');
    this.btnEditPassword = page.locator('//h5[text()="Password"]/../../button');
  }

  goto = async (): Promise<void> => {
    await this.page.goto(this.url);
  }

};