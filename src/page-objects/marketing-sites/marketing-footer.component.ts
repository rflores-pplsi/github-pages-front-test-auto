import { Page, Locator, BrowserContext, expect } from '@playwright/test';
import { clickLocatorWithRetry } from '../../utils/helpers';

export class MarketingFooterComponent {
  protected page: Page;
  readonly context: BrowserContext;
  readonly footerContainer: Locator;
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
    this.footerContainer = this.page.locator('footer');
    this.locTermsOfServiceLink = this.footerContainer.getByRole('link', { name: 'Terms of Service' });
    this.locPrivacyPolicyLink = this.footerContainer.getByRole('link', { name: 'Privacy Policy' });
    this.locDisclaimerLink = this.footerContainer.getByRole('link', { name: 'Disclaimer' });
    this.locCopyrightText = this.footerContainer.getByText('© 2025 PPLSI');
    this.locSoc3Link = this.footerContainer.getByRole('link', { name: 'SOC3' });
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
    // Wait for Ketch privacy script to be loaded and initialized
    await this.page.waitForFunction(() => {
      return typeof (window as any).ketch !== 'undefined';
    }, { timeout: 10000 });
    
    const confirmationLocator = this.page.locator('#ketch-preferences');
    await clickLocatorWithRetry(this.locPrivacySettingsLink, confirmationLocator);
    
  };

  clickSoc3linkAndVerify = async (isHeadless: boolean): Promise<void> => {
    // playwright does not support opening documents in new tab in headless mode
    if (isHeadless) {
      //Headless mode, download instead of opening in new tab
      const [download] = await Promise.all([
        this.page.waitForEvent('download'),
        this.clickSoc3Link(),
      ]);
      expect.soft(download.suggestedFilename()).toContain('SOC_3');
    } else {
      // Headed mode, open in new tab
      const [newPage] = await Promise.all([
        this.page.context().waitForEvent('page'),
        this.clickSoc3Link(),
      ]);
      expect.soft(newPage).toHaveURL(/SOC_3/);
      expect.soft(newPage.title()).not.toContain('404');
    }
  };

}
