import { test } from '@playwright/test';
import { LoginPage } from '../../page-objects/login/login.page';
import { NavMenuPage } from '../../page-objects/associate/associate-office-header-footer-nav-menu.page';
import UrlsUtils from '../../utils/urls.utils';
import { associateBasic,associateLegacy,associateAdvantagePlus } from '../../utils/user.utils';

// Declare Page Variable for This Page
let loginPage: LoginPage;
let navMenuPage: NavMenuPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  // Create instance of This Page Object
  loginPage = new LoginPage(page);
  navMenuPage = new NavMenuPage(page);
  await loginPage.goTo(UrlsUtils.channelsUrls.advantage.url);
  await loginPage.login(associateLegacy.username, associateLegacy.password);
});

// Header
test('Logo is displayed in the Header', async ({ page }) => {
  console.log('Test Case: Header Logo is displayed in the Header');
  await navMenuPage.assertHeaderLogoIsDisplayed();
});

test('Associate Office is displayed in the Header', async ({ page }) => {
  console.log('Test Case: Associate Office is displayed in the Header');
  await navMenuPage.assertNameAOIsDisplayed();
});

test('Customer Support Information is displayed in the Header', async ({ page }) => {
  console.log('Test Case: Customer Support Information is displayed in the Header');
  await navMenuPage.assertHelpIconIsDisplayed();
  await navMenuPage.assertCustomerSupportIsDisplayed();
});

test('Customer Support Phone is correct in the Header', async ({ page }) => {
  console.log('Test Case: Customer Support Phone is correct in the Header');
  await navMenuPage.assertSupportPhone();
});

test('My Account is displayed in the Header', async ({ page }) => {
  console.log('Test Case: My Account is displayed in the Header');
  await navMenuPage.assertMyAccountIsDisplayed();
});

test('Sign Out is displayed in the Header', async ({ page }) => {
  console.log('Test Case: Sign Out is displayed in the Header');
  await navMenuPage.assertSignOutIsDisplayed();
});


// Left Navigation Menu
test('My Team is displayed in the left Navigation Menu', async ({ page }) => {
  console.log('Test Case: My Team is displayed in the left Navigation Menu');
  await navMenuPage.assertMyTeamIsDisplayed();
});

test('Reports is displayed in the left Navigation Menu', async ({ page }) => {
  console.log('Test Case: Reports is displayed in the left Navigation Menu');
  await navMenuPage.assertReportsIsDisplayed();
});

test('All Reports is displayed in the left Navigation Menu', async ({ page }) => {
  console.log('Test Case: All Reports is displayed in the left Navigation Menu');
  await navMenuPage.assertAllReportsIsDisplayed();
});

test('Commissions is displayed in the left Navigation Menu', async ({ page }) => {
  console.log('Test Case: Commissions is displayed in the left Navigation Menu');
  await navMenuPage.assertCommissionsIsDisplayed();
});

test('Taxes is displayed in the left Navigation Menu', async ({ page }) => {
  console.log('Test Case: Taxes is displayed in the left Navigation Menu');
  await navMenuPage.assertTaxesIsDisplayed();
});

test('Resources is displayed in the left Navigation Menu', async ({ page }) => {
  console.log('Test Case: Resources is displayed in the left Navigation Menu');
  await navMenuPage.assertResourcesIsDisplayed();
});

test('Messages is displayed in the left Navigation Menu', async ({ page }) => {
  console.log('Test Case: Messages is displayed in the left Navigation Menu');
  await navMenuPage.assertMessagesIsDisplayed();
});

test('Compensation is displayed in the left Navigation Menu', async ({ page }) => {
  console.log('Test Case: Compensation is displayed in the left Navigation Menu');
  await navMenuPage.assertCompensationIsDisplayed();
});

test('LSAdvantage is displayed in the left Navigation Menu', async ({ page }) => {
  console.log('Test Case: LSAdvantage is displayed in the left Navigation Menu');
  await navMenuPage.assertLSAdvantageIsDisplayed();
});

test('Associate Perks is displayed in the left Navigation Menu', async ({ page }) => {
  console.log('Test Case: Associate Perks is displayed in the left Navigation Menu');
  await navMenuPage.assertAssociatePerksIsDisplayed();
});

// Footer
test('Terms Of Service is displayed in the footer', async ({ page }) => {
  console.log('Test Case: Associate Perks is displayed in the footer');
  await navMenuPage.assertTermsOfServiceIsDisplayed();
});

test('Privacy Policy is displayed in the footer', async ({ page }) => {
  console.log('Test Case: Privacy Policy is displayed in the footer');
  await navMenuPage.assertPrivacyPolicyIsDisplayed();
});

test('Disclaimer is displayed in the footer', async ({ page }) => {
  console.log('Test Case: Disclaimer is displayed in the footer');
  await navMenuPage.assertDisclaimerIsDisplayed();
});

test('PPLSI Logo is displayed in the footer', async ({ page }) => {
  console.log('Test Case: PPLSI Logo is displayed in the footer');
  await navMenuPage.assertLogoIsDisplayed();
});