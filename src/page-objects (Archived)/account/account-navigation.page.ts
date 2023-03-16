import { expect } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { LoginPage } from '../login/login.page';

// Selectors
const LNK_PLANS = '//a[contains(.,"Plans")]';
const LNK_PROFILE = '//a[contains(.,"Profile")]';
const LNK_PAYMENTS = '//a[contains(.,"Payments")]';
const LNK_SECURITY = '//a[contains(.,"Security")]';
const LNK_RESOURCES = '//a[contains(.,"Resources")]';
const LNK_PREFERENCES = '//a[contains(.,"Preferences")]';
const LNK_MULTIFACTOR = '//a[contains(.,"Multifactor")]';

/**
 * @export
 * @class AccountNavigationPage
 * @extends {LoginPage}
 */
export class AccountNavigationPage extends LoginPage {
  // Page Instances
  loginPage = new LoginPage(this.page);

  // ========================== Click Methods ==========================

  clickPlansLink = async (): Promise<void> => {
    console.log(' - accountNavigationPage.clickPlansLink');
    // Click on Plans Link from Accounts Navigation
    await this.clickOnElement(LNK_PLANS);
  };

  clickProfileLink = async (): Promise<void> => {
    console.log(' - accountNavigationPage.clickProfileLink');
    // Click on Profile Link from Accounts Navigation
    await this.clickOnElement(LNK_PROFILE);
  };

  clickPaymentsLink = async (): Promise<void> => {
    console.log(' - accountNavigationPage.clickPaymentsLink');
    // Click on Payments Link from Accounts Navigation
    await this.clickOnElement(LNK_PAYMENTS);
  };

  clickSecurityLink = async (): Promise<void> => {
    console.log(' - accountNavigationPage.clickSecurityLink');
    // Click on Security Link from Accounts Navigation
    await this.clickOnElement(LNK_SECURITY);
  };

  clickResourcesLink = async (): Promise<void> => {
    console.log(' - accountNavigationPage.clickResourcesLink');
    // Click on Resources Link from Accounts Navigation
    await this.clickOnElement(LNK_RESOURCES);
  };

  clickPreferencesLink = async (): Promise<void> => {
    console.log(' - accountNavigationPage.clickPreferencesLink');
    // Click on Preferences Link from Accounts Navigation
    await this.clickOnElement(LNK_PREFERENCES);
  };

  clickMfaLink = async (): Promise<void> => {
    console.log(' - accountNavigationPage.clickMfaLink');
    // Click on Multifactor Link from Accounts Navigation
    await this.clickOnElement(LNK_MULTIFACTOR);
  };

  // ========================== Navigate Methods ==========================

  navigateToAccountPlansPage = async (): Promise<void> => {
    console.log(' - accountNavigationPage.navigateToAccountPlansPage');
    // Login with a basic user
    await this.loginPage.goTo(UrlsUtils.legalshieldUrls.accounts.url + '/plans');
    await this.page.waitForLoadState('networkidle');
  };

  // ========================== Assertion Methods ==========================

  assertAccountProfileUrl = async (): Promise<void> => {
    console.log(' - accountNavigationPage.assertAccountProfileUrl');
    // Confirm the Account Profile Page URL
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.accounts.url + '/profile');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  assertAccountPaymentsUrl = async (): Promise<void> => {
    console.log(' - accountNavigationPage.assertAccountPaymentsUrl');
    // Confirm the Account Payments Page URL
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.accounts.url + '/payments');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  assertAccountSecurityUrl = async (): Promise<void> => {
    console.log(' - accountNavigationPage.assertAccountSecurityUrl');
    // Confirm the Account Security Page URL
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.accounts.url + '/security');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  assertAccountResourcesUrl = async (): Promise<void> => {
    console.log(' - accountNavigationPage.assertAccountResourcesUrl');
    // Confirm the Account Resources Page URL
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.accounts.url + '/resources');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  assertAccountPreferencesUrl = async (): Promise<void> => {
    console.log(' - accountNavigationPage.assertAccountPreferencesUrl');
    // Confirm the Account Preferences Page URL
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.accounts.url + '/preferences');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  assertAccountMultifactorUrl = async (): Promise<void> => {
    console.log(' - accountNavigationPage.assertAccountMultifactorUrl');
    // Confirm the Account Multifactor Page URL
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.accounts.url + '/mfa');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  assertAccountPlansUrl = async (): Promise<void> => {
    console.log(' - accountNavigationPage.assertAccountPlansUrl');
    // Confirm the Account Plans Page URL
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.accounts.url + '/plans');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };
}
