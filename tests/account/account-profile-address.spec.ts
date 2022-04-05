import { test } from "@playwright/test";
import { AccountProfileAddressPage } from "../../page-objects/account/account-profile-address.page";

// create instance of Page
let accountProfileAddressPage: AccountProfileAddressPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  accountProfileAddressPage = new AccountProfileAddressPage(page);
  // Navigate to Profile page
  accountProfileAddressPage.navigateToProfileAddressPage();
});

// Navigate to the Profile Address page
test("Navigate to the Profile Address page by clicking the Address Edit button", async ({
  page,
}) => {
  console.log(
    "Test Case: Navigate to the Profile Address page by clicking the Address Edit button"
  );

  // Edit the Address Form
  await accountProfileAddressPage.addressForm("43511 Blacksmith Sq ", "20147");
  // Verify that the address is updated
  await accountProfileAddressPage.assertAddress1HasText("43511 Blacksmith Sq");
  await accountProfileAddressPage.assertCityHasText("Ashburn");
  await accountProfileAddressPage.assertZipPostalHasText("20147");

  // Click the Save button
  await accountProfileAddressPage.clickSaveAddressButton();
});
