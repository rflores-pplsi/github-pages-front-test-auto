import { test } from "@playwright/test";
import { ActivatePage } from "../../page-objects/activate/activate-enter-code.page";
import UrlsUtils from "../../utils/urls.utils";
import { basicUser } from "../../utils/user.utils";

// Declare Page Variable for This Page
let activatePage: ActivatePage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  // Create instance of This Page Object
  activatePage = new ActivatePage(page);
  await activatePage.goTo(UrlsUtils.legalshieldUrls.activate.url);
});

test("Login from Activate app and confirm redirect", async ({ page }) => {
  console.log("Test Case: Login from Activate app and confirm redirect");
  // Login with basic account after being redirected to Login application
  await activatePage.login(basicUser.email, basicUser.password);
  // Confirm that login is successful by asserting the Activate url
  await activatePage.assertActivatePageLoginRedirectUrl();
});
