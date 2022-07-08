import { test } from '@playwright/test';
import { PaymentsPage } from '../../page-objects/account/account-payments.page';
import { basicUser } from '../../utils/user.utils';

// Page Definition
let paymentsPage: PaymentsPage;

test.beforeEach(async ({ page }) => {
  // Create instance of this page
  paymentsPage = new PaymentsPage(page);
  // Attempt to reach Accounts Payments Page
  await paymentsPage.navigateToAccountPaymentsPage();
  // Login when prompted and successful login redirects to Accounts Payments Page
  await paymentsPage.login(basicUser.email, basicUser.password);
});
