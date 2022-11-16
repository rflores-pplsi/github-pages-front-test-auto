import { test } from '@playwright/test';
import { LoginHeaderPage } from '../../page-objects/login/login-header.page';

// Declare Page Variable for This Page
let loginHeaderPage: LoginHeaderPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  // Create instance of This Page Object
  loginHeaderPage = new LoginHeaderPage(page);
  // Go to the Login Page
  await loginHeaderPage.navigateToLoginPage();
});

test('Change market to United States - English', async () => {
  console.log('Test Case: Change market to United States - English');
  // Change Market from dropdown
  await loginHeaderPage.changeMarketToEnUs();
  // Check the text of market selection button
  await loginHeaderPage.assertMarketIsUnitedStatesEnglish();
});

test('Change market to Estados Unidos - Español', async () => {
  console.log('Test Case: Change market to Estados Unidos - Español');
  // Change Market from dropdown
  await loginHeaderPage.changeMarketToEsUS();
  // Check the text of market selection button
  await loginHeaderPage.assertMarketIsEstadosUnidosEspanol();
});

test('Change market to Canada - English', async () => {
  console.log('Test Case: Change market to Canada - English');
  // Change Market from dropdown
  await loginHeaderPage.changeMarketToEnCa();
  // Check the text of market selection button
  await loginHeaderPage.assertMarketIsCanadaEnglish();
});

test('Change market to Canada - French', async () => {
  console.log('Test Case: Change market to Canada - French');
  // Change Market from dropdown
  await loginHeaderPage.changeMarketToFrCa();
  // Check the text of market selection button
  await loginHeaderPage.assertMarketIsCanadaFrench();
});

test('Navigate to https://www.pplsi.com/ by clicking logo', async () => {
  // Disable as the url doe snot exist in lower environments
  test.fixme();
  console.log('Test Case: Can navigate to https://www.pplsi.com/ by clicking logo');
  // Click on the PPLSI logo from the left side of header
  await loginHeaderPage.clickPplsiLogo();
  // Confirm the PPLSI URL after being redirect
  await loginHeaderPage.assertPplsiUrl();
});

test('View customer and associate support numbers by clicking the help button', async ({}) => {
  console.log('Test Case: Can view customer and associate support numbers by clicking the help button');
  // Click on the Help Button
  await loginHeaderPage.clickHelpButton();
  // Confirm both support numbers in the Help dropdown
  await loginHeaderPage.assertSupportNumbersInHelpDropdown();
});
