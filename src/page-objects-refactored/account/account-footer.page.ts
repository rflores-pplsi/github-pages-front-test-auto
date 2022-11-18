import { expect, Page } from '@playwright/test';
import { LoginPage } from '../login/login.page';

// ========================== Selectors ==========================
const LNK_TERMS_OF_SERVICE = 'a:has-text("Terms of Service")';
const LNK_PRIVACY_POLICY = 'a:has-text("Privacy Policy")';
const LNK_LEGAL_DISCLAIMER = 'a:has-text("Legal")';

export class AccountFooterPage extends LoginPage {
  // ========================== Process Methods ==========================

  // ========================== Navigate Methods ==========================

  // ========================== Click Methods ==========================

  clickTermsOfServiceLink = async (): Promise<Page> => {
    // Click Terms of Service link
    console.log(' - accountFooterPage.clickTermsOfServiceLink');
    const [newPage] = await Promise.all([this.context.waitForEvent('page'), await this.page.click('a:has-text("Terms of Service")')]);
    await newPage.waitForLoadState();
    await this.page.click(LNK_TERMS_OF_SERVICE);
    return newPage;
  };

  clickPrivacyPolicyLink = async (): Promise<void> => {
    // Click Terms of Service link
    console.log(' - accountFooterPage.clickPrivacyPolicyLink');
    await this.page.click(LNK_PRIVACY_POLICY);
  };

  clickDisclaimerLink = async (): Promise<void> => {
    // Click Terms of Service link
    console.log(' - accountFooterPage.clickDisclaimerLink');
    await this.page.click(LNK_LEGAL_DISCLAIMER);
  };

  // ========================== Assertion Methods ==========================

  assertTermsOfServicePageUrlInNewTab = async (newPage: Page): Promise<void> => {
    await expect(newPage).toHaveTitle('Terms of Service - PPLSI');
  };

  assertPrivacyPolicyPageUrlInNewTab = async (): Promise<Page> => {
    const [newPage] = await Promise.all([this.context.waitForEvent('page'), await this.page.click('a:has-text("Privacy Policy")')]);
    await newPage.waitForLoadState();
    await expect(newPage).toHaveTitle('Privacy Policy - PPLSI');
    return newPage;
  };

  assertLegalDisclaimerPageUrlInNewTab = async (): Promise<Page> => {
    const [newPage] = await Promise.all([this.context.waitForEvent('page'), await this.page.click('a:has-text("Legal")')]);
    await newPage.waitForLoadState();
    await expect(newPage).toHaveTitle('Disclaimer - PPLSI');
    return newPage;
  };
}
