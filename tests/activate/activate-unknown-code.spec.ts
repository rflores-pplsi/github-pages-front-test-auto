import { test } from '@playwright/test';
import { ActivateUnkownCodePage }  from '../../page-objects/activate/activate-unknown-code.page'
import UrlsUtils from '../../utils/urls.utils';
import { basicUser } from '../../utils/user.utils';

// Declare Page Variable for This Page
let activateUnknowCodePage: ActivateUnkownCodePage;

// Setup environment before each test
test.beforeEach(async ({page}) => {
  // Create instance of This Page Object
  activateUnknowCodePage  = new ActivateUnkownCodePage (page);
  // Attemt to reach Activate application
  await activateUnknowCodePage.navigateToActivatePage();
  // Login using LoginPage.login method
  await activateUnknowCodePage.login(basicUser.email,basicUser.password);
  // Click "Don't know your code?" link to navigate to unknown code page
  await activateUnknowCodePage.clickDontKnowYourCodeLink();
});
 
test('Invalid email address triggers hint', async ({page}) => {
  console.log("Test Case: Invalid email address triggers hint");
  // Enter invalid email to trigger hint
  await activateUnknowCodePage.enterEmail("invalidemail");
  // Confirm email hint displayed when email is invalid
  await activateUnknowCodePage.assertInvalidEmailAddressHintDisplayed();
  // Confirm Send Code button is disabled
  await activateUnknowCodePage.assertSendCodeButtonDisabled();
});