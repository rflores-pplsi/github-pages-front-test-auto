import { test } from '@playwright/test';
import { LoginForgotEmailUsernamePage } from '../../page-objects/login/login-forgot-email-username.page';

// Declare Page Variable for This Page
let loginForgotEmailUsernamePage: LoginForgotEmailUsernamePage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  // Create instance of This Page Object
  loginForgotEmailUsernamePage = new LoginForgotEmailUsernamePage(page);
  // Goto login page
  // TODO: rename method to be clearer about where we going to
  await loginForgotEmailUsernamePage.navigateToLoginPage();
});

test('Find contact numbers to obtain forgotten Email/Username', async ({ page }) => {
  console.log('Test Case: Find contact numbers to obtain forgotten Email/Username');
  // Click on Forgot Email/Username to navigate to Forgot Username Or Email Page
  await loginForgotEmailUsernamePage.navigateToLoginForgotUsernameOrEmailPage();
  // Confirm that the Customer Service and Associate Support phone numbers are displayed
  await loginForgotEmailUsernamePage.assertSupportNumbers();
});
