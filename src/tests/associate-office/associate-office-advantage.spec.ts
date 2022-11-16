import { test } from '@playwright/test';
import { LoginPage } from '../../page-objects/login/login.page';
import { AdvantagePage } from '../../page-objects/associate-office/associate-office-advantage.page';
import UrlsUtils from '../../utils/urls.utils';
import { associateLegacy } from '../../utils/user.utils';

// Declare Page Variable for This Page
let loginPage: LoginPage;
let advantagePage: AdvantagePage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  // Create instance of Page Object
  loginPage = new LoginPage(page);
  advantagePage = new AdvantagePage(page);
  await loginPage.goTo(UrlsUtils.channelsUrls.advantage.url);
  await loginPage.login(associateLegacy.username, associateLegacy.password);
});

test('Verify banner content', async ({}) => {
  console.log('Test Case: Verify banner content');
  await advantagePage.assertBannerContent();
});

test('Plans Header is displayed', async ({}) => {
  console.log('Test Case: Plans Header is displayed');
  await advantagePage.assertPlansHeaderIsDisplayed();
});

test('Verify Basic Plan Container', async ({}) => {
  console.log('Test Case: Verify Basic Plan Container');
  await advantagePage.assertBasicContainer();
});

test('Verify Advantage Plus Container', async ({}) => {
  console.log('Test Case: Verify Advantage Plus Container');
  await advantagePage.assertAdvantagePlusContainer();
});

test('Support text and link are displayed', async ({}) => {
  console.log('Test Case: Support text and link are displayed');
  await advantagePage.assertSupportContentIsDisplayed();
});
