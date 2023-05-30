import { test } from '@playwright/test';
import { CommonLoginService } from '@legalshield/frontend-automation-commons';
import { LoginPage } from '../../../page-objects/login/login.page';
import { basicUser } from '../../../utils/user.utils';

// Declare Page Variable for This Page
let loginPage: LoginPage;
let commonLoginService: CommonLoginService;
// Setup environment before each test
test.beforeEach(async ({ context, page }) => {
  // Create instance of This Page Object
  loginPage = new LoginPage(context, page);
  commonLoginService = new CommonLoginService(page);
  await loginPage.navigateToLoginPage();
});

// Login Page test using Basic Email
test('Login with basic email', async () => {
  console.log('Test Case: Login with basic email');
  // Log in with a basic user account
  // await loginPage.testEnv();
  await commonLoginService.loginPage.login(basicUser.email as string, basicUser.password as string);
  // Confirm that login is successful by asserting the login url
  await loginPage.assertAccountsPlanPageUrl();
});

// Login Page test using Basic Email and submitting with Enter Key
test('Login by submitting form with Enter key', async () => {
  console.log('Test Case: Login by submitting form with Enter key');
  // Log in with a basic user account submitting with Enter key
  await commonLoginService.loginPage.login(basicUser.email as string, basicUser.password as string);
  // Confirm that login is successful by asserting the login url
  await loginPage.assertAccountsPlanPageUrl();
});

// TODO: Get an account with a username and add it to .env
// Login Page test using username
test('Login with username', async () => {
  console.log('Test Case: Login with username');
  // Log in with a basic user account with a username
  await commonLoginService.loginPage.login(basicUser.email as string, basicUser.password as string);
  // Confirm that login is successful by asserting the login url
  await loginPage.assertAccountsPlanPageUrl();
});

test('Login from Accounts app and confirm redirect', async () => {
  console.log('Test Case: Login from Accounts app and confirm redirect');
  // Attempt to reach Accounts Plan Page
  await loginPage.navigateToAccountPlansPage();
  // Login with basic account after being redirected to Login application
  await commonLoginService.loginPage.login(basicUser.email as string, basicUser.password as string);
  // Confirm that login is successful by asserting the Accounts Plans url with redirect query params
  await loginPage.assertAccountsPlanPageLoginRedirectUrl();
});
