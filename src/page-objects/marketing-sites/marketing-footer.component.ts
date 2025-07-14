import { Page, Locator, BrowserContext, expect } from '@playwright/test';

export class MarketingFooterComponent {
  protected page: Page;
  readonly context: BrowserContext;
  readonly locTermsOfServiceLink: Locator;
  readonly locPrivacyPolicyLink: Locator;
  readonly locDisclaimerLink: Locator;
  readonly locCopyrightText: Locator;
  readonly locSoc3Link: Locator;
  readonly locCodeOfEthicsLink: Locator;
  readonly locPrivacySettingsLink: Locator;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.context = context;
    this.locTermsOfServiceLink = this.page.locator('//a[contains(@class,"footer_legal-link") and contains(@href,"terms-of-service")]');
    this.locPrivacyPolicyLink = this.page.locator('//a[contains(@class,"footer_legal-link") and contains(@href,"privacy-policy")]');
    this.locDisclaimerLink = this.page.locator('//a[contains(@class,"footer_legal-link") and contains(@href,"disclaimer")]');
    this.locCopyrightText = this.page.locator('//div[contains(@class,"footer_credit-text")]');
    this.locSoc3Link = this.page.locator('//a[contains(@class,"footer_legal-link") and contains(@href,"SOC")]');
    this.locCodeOfEthicsLink = this.page.locator('//a[contains(@class,"footer_legal-link") and contains(@href,"code-of-ethics")]');
    this.locPrivacySettingsLink = this.page.locator('#preferenceCenterLink');
  }

  clickTermsOfServiceLink = async (): Promise<Page> => {
    const [newPage] = await Promise.all([this.context.waitForEvent('page'), await this.locTermsOfServiceLink.click()]);
    return newPage;
  };

  clickPrivacyPolicyLink = async (): Promise<Page> => {
    const [newPage] = await Promise.all([this.context.waitForEvent('page'), await this.locPrivacyPolicyLink.click()]);
    return newPage;
  };

  clickLegalLink = async (): Promise<Page> => {
    const [newPage] = await Promise.all([this.context.waitForEvent('page'), await this.locDisclaimerLink.click()]);
    return newPage;
  };

  clickSoc3Link = async (): Promise<Page> => {
    const [newPage] = await Promise.all([this.context.waitForEvent('page'), await this.locSoc3Link.click()]);
    return newPage;
  };

  clickCodeOfEthicsLink = async (): Promise<Page> => {
    const [newPage] = await Promise.all([this.context.waitForEvent('page'), await this.locCodeOfEthicsLink.click()]);
    return newPage;
  };

  clickPrivacySettingsLink = async (): Promise<void> => {
    await this.locPrivacySettingsLink.click();
  };

  clickSoc3linkAndVerify = async (isHeadless: boolean): Promise<void> => {
    // playwright does not support opening documents in new tab in headless mode
    if (isHeadless) {
      console.log('Headless mode detected, waiting for download');
      const [download] = await Promise.all([
        this.page.waitForEvent('download'),
        this.clickSoc3Link(),
      ]);
      expect.soft(download.suggestedFilename()).toContain('SOC-3');
    } else {
      console.log('Headless mode not detected, opening in new tab');
      const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.clickSoc3Link(),
      ]);
      await expect(newPage).toHaveURL(/SOC-3/);
    }
  };

}
