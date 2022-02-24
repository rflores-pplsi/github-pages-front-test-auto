import { test } from '@playwright/test';
import { AccountProfileDoBPage } from '../../page-objects/account/account-profile-dob.page';


// create instance of Page
let accountProfileDoBPage: AccountProfileDoBPage;

  // Setup environment before each test
  test.beforeEach(async ({page}) => {
    accountProfileDoBPage = new AccountProfileDoBPage(page);
    accountProfileDoBPage.goToProfileDateOfBirthPage();

  });
  
  // Navigate to the Profile Name page 
  test('Navigate to the Profile Name page by clicking the Name Edit button', async ({ page }) => {
    console.log("Test Case: Navigate to the Profile Name page by clicking the Name Edit button");
    // Edit Date of Birth Text Box
    await accountProfileDoBPage.editDateOfBirthTxtBox();
    // Click on save button 
    await accountProfileDoBPage.saveDateOfBirthbtn();
    // Verify the landing on the Profile Name page
    await accountProfileDoBPage.assertProfileNamePageUrl();
  });
