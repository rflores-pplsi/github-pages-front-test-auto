import { test } from '@playwright/test';
import { StatusPage } from '../../../archived/page-objects-old/status/status.page';
import UrlsUtils from '../../../utils/urls.utils';
import { basicUser } from '../../../utils/user.utils';

// Declare Page Variable for This Page
let statusPage: StatusPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  // Create instance of This Page Object
  statusPage = new StatusPage(page);
  await statusPage.goTo(UrlsUtils.legalshieldUrls.status.url);
});

test('Login from Status app and confirm redirect', async () => {
  console.log('Test Case: Login from Status app and confirm redirect');
  // Click Sign In from the status header page to reach Login application
  await statusPage.clickSignInFromHeader();
  // Login with basic account
  await statusPage.login(basicUser.email, basicUser.password);
  // Confirm that login is successful by asserting the Status Page url
  await statusPage.assertStatusPageLoginRedirectUrl();
});
