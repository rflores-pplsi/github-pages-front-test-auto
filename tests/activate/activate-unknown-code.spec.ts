import { test } from '@playwright/test';
import { ActivateUnknownCodePage } from '../../page-objects/activate/activate-unknown-code.page';
import UrlsUtils from '../../utils/urls.utils';
import { basicUser } from '../../utils/user.utils';

// Declare Page Variable for This Page
let activateUnknownCodePage: ActivateUnknownCodePage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  // Create instance of This Page Object
  activateUnknownCodePage = new ActivateUnknownCodePage(page);
  // Attempt to reach Activate application
  await activateUnknownCodePage.navigateToActivatePage();
  // Login using LoginPage.login method
  await activateUnknownCodePage.login(basicUser.email, basicUser.password);
  // Click "Don't know your code?" link to navigate to unknown code page
  await activateUnknownCodePage.clickDontKnowYourCodeLink();
});

test('Invalid email address triggers hint', async ({ page }) => {
  console.log('Test Case: Invalid email address triggers hint');
  // Enter invalid email to trigger hint
  await activateUnknownCodePage.enterEmail('invalidemail');
  // Confirm email hint displayed when email is invalid
  await activateUnknownCodePage.assertInvalidEmailAddressHintDisplayed();
  // Confirm Send Code button is disabled
  await activateUnknownCodePage.assertSendCodeButtonDisabled();
});
