import { test } from '@playwright/test';
import { ActivateHeaderPage } from '../../../page-objects (Archived)/activate/activate-header.page';
import { basicUser } from '../../../utils/user.utils';

// Declare Page Variable for This Page
let activateHeaderPage: ActivateHeaderPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  // Create instance of This Page Object
  activateHeaderPage = new ActivateHeaderPage(page);
  // Go to the Login Page
  await activateHeaderPage.navigateToLoginPage();
  // Login using LoginPage.login method
  await activateHeaderPage.login(basicUser.email, basicUser.password);
});

test('Navigate to plans page in by clicking the Legalshield/IDShield logo', async () => {
  console.log('Test Case: Navigate to plans page by clicking the Legalshield/IDShield logo');
  // Click on the large log to navigate to plans page when viewport width is > 639px
  await activateHeaderPage.clickLargeLogo();
  // Assert URL through LoginPage method
  await activateHeaderPage.assertAccountsPlanPageUrl();
});

test('Reveal help information by clicking help button', async () => {
  test.fixme(); // UAT and DEV discrepency, follow up with peyton/joe
  console.log('Test Case: Reveal help information by clicking help button');
  // Click help button to reveal support numbers
  await activateHeaderPage.clickHelpButton();
  // Confirm expected support numbers display
  await activateHeaderPage.assertHelpDropdownInformation();
});

test('Log out and reach the logged-out page', async () => {
  console.log('Test Case: Log out and reach the logged-out page');
  // Click the logout option from the activate header name dropdown
  await activateHeaderPage.logout();
  // Confirm logout successful and on the logged out page
  await activateHeaderPage.assertLoggedOutPageUrl();
});
