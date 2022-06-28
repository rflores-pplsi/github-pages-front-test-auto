import { test } from '@playwright/test';
import { PaymentsPage } from '../../page-objects/account/account-payments.page';
import { basicUser } from '../../utils/user.utils';

// Page Definition
let paymentsPage: PaymentsPage;
// let loginPage: LoginPage;
// let accountNavigationPage: AccountNavigationPage;

test.beforeEach(async ({ page }) => {
  // Create instance of this page
  paymentsPage = new PaymentsPage(page);
  // Attempt to reach Accounts Payments Page
  await paymentsPage.navigateToAccountPaymentsPage();
  // Login when prompted and successful login redirects to Accounts Payments Page
  await paymentsPage.login(basicUser.email, basicUser.password);
});

// test.describe.parallel('Navigation Links', () => {
//   test.beforeEach(async ({ page }) => {
//     loginPage = new LoginPage(page);
//     paymentsPage = new PaymentsPage(page);
//     accountNavigationPage = new AccountNavigationPage(page);
//     // await loginPage.goTo();
//     await loginPage.login(basicUser.email, basicUser.password);
//     // await loginPage.login('mattfeeqa+plansspec@gmail.com', 'Password10!');
//     await accountNavigationPage.lnkPayments.click();
//   });

// test('Payments page header is displayed', async ({ page }) => {
//   test.fixme(); // skip test until payments pages are ready to be automated
//   await expect(paymentsPage.hdrPage).toContainText('Payments');
// });
// });
