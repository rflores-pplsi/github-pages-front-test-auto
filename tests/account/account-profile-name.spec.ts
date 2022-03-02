import { test } from '@playwright/test';
import { AccountProfileNamePage } from '../../page-objects/account/account-profile.name.page'

// create instance of Page
let accountprofileNamePage: AccountProfileNamePage;

  // Setup environment before each test
  test.beforeEach(async ({page}) => {
    accountprofileNamePage = new AccountProfileNamePage(page);
    accountprofileNamePage.NavigateToProfileNamePage();

  });
  
  // Navigate to the Profile Name page 
  test('Navigate to the Profile Name page by clicking the Name Edit button', async ({ page }) => {
    console.log("Test Case: Navigate to the Profile Name page by clicking the Name Edit button");
    // Edit First Name Text Box
    await accountprofileNamePage.editNameForm();
    // Verify the landing on the Profile Name page
    //await profileNamePage.assertProfileNamePageUrl();
  });
