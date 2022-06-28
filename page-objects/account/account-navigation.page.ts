import { expect } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { LoginPage } from '../../page-objects/login/login.page';

// Selectors
const lnkPlans = '.lsux-navigation--item-plans';
const lnkProfile = '.lsux-navigation--item-profile';
const lnkPayments = '.lsux-navigation--item-payments';
const lnkSecurity = '.lsux-navigation--item-security';
const lnkResources = '.lsux-navigation--item-resources';
const lnkPreferences = '.lsux-navigation--item-preferences';

/**
 * * @export
 * @class AccountNavigationPage
 * @extends {LoginPage}
 */
export class AccountNavigationPage extends LoginPage {
  // Page Instances
  loginPage = new LoginPage(this.page);

  // ========================== Click Methods ==========================

  clickPlansLink = async () => {
    console.log(' - accountNavigationPage.clickPlansLink');
    // Click on Plans Link from Accounts Navigation
    await this.clickOnElement(lnkPlans);
  };

  clickProfileLink = async () => {
    console.log(' - accountNavigationPage.clickProfileLink');
    // Click on Profile Link from Accounts Navigation
    await this.clickOnElement(lnkProfile);
  };

  clickPaymentsLink = async () => {
    console.log(' - accountNavigationPage.clickPaymentsLink');
    // Click on Payments Link from Accounts Navigation
    await this.clickOnElement(lnkPayments);
  };

  clickSecurityLink = async () => {
    console.log(' - accountNavigationPage.clickSecurityLink');
    // Click on Security Link from Accounts Navigation
    await this.clickOnElement(lnkSecurity);
  };

  clickResourcesLink = async () => {
    console.log(' - accountNavigationPage.clickResourcesLink');
    // Click on Resources Link from Accounts Navigation
    await this.clickOnElement(lnkResources);
  };

  clickPreferencesLink = async () => {
    console.log(' - accountNavigationPage.clickPreferencesLink');
    // Click on Preferences Link from Accounts Navigation
    await this.clickOnElement(lnkPreferences);
  };

  // ========================== Navigate Methods ==========================

  navigateToAccountPlansPage = async () => {
    console.log(' - accountNavigationPage.navigateToAccountPlansPage');
    // Login with a basic user
    await this.loginPage.goTo(UrlsUtils.legalshieldUrls.account.url + '/plans');
    await this.page.waitForLoadState('networkidle');
  };

  // ========================== Assertion Methods ==========================

  assertAccountProfileUrl = async () => {
    console.log(' - accountNavigationPage.assertAccountProfileUrl');
    // Confirm the Account Profile Page URL
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.account.url + '/profile');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  assertAccountPaymentsUrl = async () => {
    console.log(' - accountNavigationPage.assertAccountPaymentsUrl');
    // Confirm the Account Payments Page URL
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.account.url + '/payments');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  assertAccountSecurityUrl = async () => {
    console.log(' - accountNavigationPage.assertAccountSecurityUrl');
    // Confirm the Account Security Page URL
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.account.url + '/security');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  assertAccountResourcesUrl = async () => {
    console.log(' - accountNavigationPage.assertAccountResourcesUrl');
    // Confirm the Account Resources Page URL
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.account.url + '/resources');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  assertAccountPreferencesUrl = async () => {
    console.log(' - accountNavigationPage.assertAccountPreferencesUrl');
    // Confirm the Account Preferences Page URL
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.account.url + '/preferences');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  assertAccountPlansUrl = async () => {
    console.log(' - accountNavigationPage.assertAccountPlansUrl');
    // Confirm the Account Plans Page URL
    await expect(this.page).toHaveURL(UrlsUtils.legalshieldUrls.account.url + '/plans');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };
}
