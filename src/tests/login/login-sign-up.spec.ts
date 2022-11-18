import { test } from '@playwright/test';
import { LoginSignUpPage } from '../../page-objects/login/login-sign-up.page';

// Declare Page Variable for This Page
let loginSignUpPage: LoginSignUpPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  loginSignUpPage = new LoginSignUpPage(page);
  await loginSignUpPage.navigateToLoginPage();
  await loginSignUpPage.clickSignUpLink();
});

// Signup as a new user
test('Sign up as a new user', async () => {
  console.log('Test Case: Sign up as a new user');
  // Sign up a new random user
  await loginSignUpPage.signUp();
  // Confirm that login is successful by asserting the login url
  await loginSignUpPage.assertAccountsPlanPageUrl();
});
