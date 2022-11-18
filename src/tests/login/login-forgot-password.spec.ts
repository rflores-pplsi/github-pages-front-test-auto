import { test } from '@playwright/test';
import { LoginForgotPasswordPage } from '../../page-objects/login/login-forgot-password.page';

// Declare Page Variable for This Page
let loginForgotPasswordPage: LoginForgotPasswordPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  // Create instance of This Page Object
  loginForgotPasswordPage = new LoginForgotPasswordPage(page);
  // Goto login page
  await loginForgotPasswordPage.navigateToLoginPage();
});

test('Request a password reset', async () => {
  console.log('Test Case: Request a password reset');
  // Click Forgot Password link and submit email address on the Login Forgot Password page
  await loginForgotPasswordPage.requestPasswordResetEmail();
  // Confirm that the success banner is displayed after requesting a password reset email
  await loginForgotPasswordPage.assertSuccessBanner();
  // TODO: add assertion that email has been received in a test email account (Yopmail?)
  // Open up mail server and verify reset password email has been received?
});
