import { Page, Locator, BrowserContext } from '@playwright/test';

export class CommonFooterComponent {
  protected page: Page;
  readonly context: BrowserContext;
  readonly locTermsOfServiceLink: Locator;
  readonly locPrivacyPolicyLink: Locator;
  readonly locLegalLink: Locator;
  readonly locCopyrightText: Locator;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.context = context;
    this.locTermsOfServiceLink = this.page.locator('//a[contains(@href,"/terms-service")]');
    this.locPrivacyPolicyLink = this.page.locator('//a[contains(@href,"/privacy-policy")]');
    this.locLegalLink = this.page.locator('//a[contains(@href,"/disclaimer")]');
    this.locCopyrightText = this.page.locator('//a[contains(@href,"/disclaimer")]');
  }

  /**
   *
   *
   * @memberof AccountsBasePage
   */
  clickTermsOfServiceLink = async (): Promise<Page> => {
    const [newPage] = await Promise.all([this.context.waitForEvent('page'), await this.locTermsOfServiceLink.click()]);
    await newPage.waitForLoadState();
    await this.locTermsOfServiceLink.click();
    return newPage;
  };

  clickPrivacyPolicyLink = async (): Promise<Page> => {
    const [newPage] = await Promise.all([this.context.waitForEvent('page'), await this.locPrivacyPolicyLink.click()]);
    await newPage.waitForLoadState();
    await this.locPrivacyPolicyLink.click();
    return newPage;
  };

  clickLegalLink = async (): Promise<Page> => {
    const [newPage] = await Promise.all([this.context.waitForEvent('page'), await this.locLegalLink.click()]);
    await newPage.waitForLoadState();
    await this.locLegalLink.click();
    return newPage;
  };
}
