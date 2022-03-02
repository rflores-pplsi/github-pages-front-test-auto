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
  await activateUnknowCodePage.goTo(UrlsUtils.legalshieldUrls.activate.url);
});
 
test('Invalid email address triggers hint', async ({page}) => {
  console.log("Test Case: Login from Activate app and confirm redirect");
  // Login with basic account after being redirected to Login application
  await activateUnknowCodePage.login(basicUser.email,basicUser.password);
  // Confirm that login is successful by asserting the Activate url
  await activateUnknowCodePage.assertActivatePageLoginRedirectUrl();
});