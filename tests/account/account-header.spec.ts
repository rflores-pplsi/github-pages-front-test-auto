import { test } from "@playwright/test";
import { basicUser } from "../../utils/user.utils";
import { AccountHeaderPage } from "../../page-objects/account/account-header.page";

// Page Definition
let accountHeaderPage: AccountHeaderPage;

test.beforeEach(async ({ page }) => {
  // Create instance of this page
  accountHeaderPage = new AccountHeaderPage(page);
  // Navigate to Login Page
  await accountHeaderPage.navigateToLoginPage();
  // Login using LoginPage.login method
  await accountHeaderPage.login(basicUser.email, basicUser.password);
});

test("Navigate to plans page in by clicking the Legalshield/IDShield logo ", async () => {
  console.log(
    "Test Case: Navigate to plans page by clicking the Legalshield/IDShield logo"
  );
  // Click on the large log to navigate to plans page when viewport width is > 639px
  await accountHeaderPage.clickLargeLogo();
  // assert URL through LoginPage method
  await accountHeaderPage.assertAccountsPlanPageUrl();
});

test("Reveal help information by clicking help button", async () => {
  console.log("Test Case: Reveal help information by clicking help button");
  await accountHeaderPage.clickHelpButton();
  await accountHeaderPage.assertHelpDropdownInformation();
});

test("Log out and reach the logged-out page", async () => {
  console.log("Test Case: Log out and reach the logged-out page");
  await accountHeaderPage.logout();
  await accountHeaderPage.assertLoggedOutPageUrl();
});
