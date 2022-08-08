/* eslint-disable no-unused-vars */
import { test } from '@playwright/test';
import { basicUser } from '../../utils/user.utils';
import { AccountFooterPage } from '../../page-objects/account/account-footer.page';
import UrlsUtils from '../../utils/urls.utils';

let accountFooterPage: AccountFooterPage;

test.beforeEach(async ({ page }) => {
  test.fixme(); // resolve context issues for the new tabs
  accountFooterPage = new AccountFooterPage(page);
  // Navigate to login URL
  await accountFooterPage.goTo(UrlsUtils.legalshieldUrls.login.url);
  // Login using LoginPage.login method
  await accountFooterPage.login(basicUser.email, basicUser.password);
});

test('Navigate to Terms of Service page', async () => {
  test.skip(); // Not working in lower environments need to still resolve for prod
  console.log('Test Case: Navigate to Terms of Service page');
  const newPage = await accountFooterPage.clickTermsOfServiceLink();
  await accountFooterPage.assertTermsOfServicePageUrlInNewTab(newPage);
});

test('Navigate to Privacy Policy page', async () => {
  test.skip(); // Not working in lower environments need to still resolve for prod
  console.log('Test Case: Navigate to Privacy Policy page');
  const newPage = await accountFooterPage.clickPrivacyPolicyLink();
});

test('Navigate to Legal Disclaimer page', async ({ page }) => {
  test.skip(); // Not working in lower environments need to still resolve for prod
  console.log('Test Case: Navigate to Legal Disclaimer page');
  const newPage = await accountFooterPage.clickDisclaimerLink();
});
