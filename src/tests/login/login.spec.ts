import { test } from '@playwright/test';
import { LoginPage } from '../../page-objects/login/login.page';
import UrlsUtils from '../../utils/urls.utils';
import { basicUser, withUsername } from '../../utils/user.utils';

// Declare Page Variable for This Page
let loginPage: LoginPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  // Create instance of This Page Object
  loginPage = new LoginPage(page);
  await loginPage.goTo(UrlsUtils.legalshieldUrls.login.url);
});

// Login Page test using Basic Email
test('Login with basic email', async ({ page }) => {
  console.log('Test Case: Login with basic email');
  // Log in with a basic user account
  await loginPage.login(basicUser.email, basicUser.password);
  // Confirm that login is successful by asserting the login url
  await loginPage.assertAccountsPlanPageUrl();
});

// Login Page test using Basic Email and submitting with Enter Key
test('Login by submitting form with Enter key', async ({ page }) => {
  console.log('Test Case: Login by submitting form with Enter key');
  // Log in with a basic user account submitting with Enter key
  await loginPage.loginWithEnterKey(basicUser.email, basicUser.password);
  // Confirm that login is successful by asserting the login url
  await loginPage.assertAccountsPlanPageUrl();
});

// TODO: Get an account with a username and add it to .env
// Login Page test using username
test('Login with username', async ({ page }) => {
  console.log('Test Case: Login with username');
  // Log in with a basic user account with a username
  await loginPage.login(withUsername.username, withUsername.password);
  // Confirm that login is successful by asserting the login url
  await loginPage.assertAccountsPlanPageUrl();
});

test('Login from Accounts app and confirm redirect', async ({ page }) => {
  console.log('Test Case: Login from Accounts app and confirm redirect');
  // Attempt to reach Accounts Plan Page
  await loginPage.navigateToAccountPlansPage();
  // Login with basic account after being redirected to Login application
  await loginPage.login(basicUser.email, basicUser.password);
  // Confirm that login is successful by asserting the Accounts Plans url with redirect query params
  await loginPage.assertAccountsPlanPageLoginRedirectUrl();
});
