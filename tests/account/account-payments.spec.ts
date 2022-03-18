import { test, expect } from '@playwright/test';
import { PaymentsPage } from '../../page-objects/account/account-payments.page';
import { AccountNavigationPage } from '../../page-objects/account/account-navigation.page';
import { LoginPage } from '../../page-objects/login/Login.page';

let loginPage: LoginPage;
let paymentsPage: PaymentsPage;
let accountNavigationPage: AccountNavigationPage;

test.describe.parallel('Navigation Links', () => {
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    paymentsPage = new PaymentsPage(page);
    accountNavigationPage = new AccountNavigationPage(page);
    await loginPage.goTo();
    await loginPage.login('mattfeeqa+plansspec@gmail.com', 'Password10!');
    await accountNavigationPage.lnkPayments.click();
  });

  test('Payments page header is displayed', async ({ page }) => {
    test.fixme(); // skip test until payments pages are ready to be automated
    await expect(paymentsPage.hdrPage).toContainText('Payments');
  });
});
