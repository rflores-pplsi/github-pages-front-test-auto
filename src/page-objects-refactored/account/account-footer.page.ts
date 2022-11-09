/* eslint-disable require-jsdoc */
import { expect, Page } from '@playwright/test';
import { LoginPage } from '../login/login.page';

// ========================== Selectors ==========================
const lnkTermsOfService = 'a:has-text("Terms of Service")';
const lnkPrivacyPolicy = 'a:has-text("Privacy Policy")';
const lnkLegalDisclaimer = 'a:has-text("Legal")';

export class AccountFooterPage extends LoginPage {
  // ========================== Process Methods ==========================

  // ========================== Navigate Methods ==========================

  // ========================== Click Methods ==========================

  clickTermsOfServiceLink = async (): Promise<Page> => {
    // Click Terms of Service link
    console.log(' - accountFooterPage.clickTermsOfServiceLink');
    const [newPage] = await Promise.all([this.context.waitForEvent('page'), await this.page.click('a:has-text("Terms of Service")')]);
    await newPage.waitForLoadState();
    await this.page.click(lnkTermsOfService);
    return newPage;
  };

  clickPrivacyPolicyLink = async (): Promise<void> => {
    // Click Terms of Service link
    console.log(' - accountFooterPage.clickPrivacyPolicyLink');
    await this.page.click(lnkPrivacyPolicy);
  };

  clickDisclaimerLink = async (): Promise<void> => {
    // Click Terms of Service link
    console.log(' - accountFooterPage.clickDisclaimerLink');
    await this.page.click(lnkLegalDisclaimer);
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
