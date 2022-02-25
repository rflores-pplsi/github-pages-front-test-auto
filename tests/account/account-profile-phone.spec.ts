import { test } from '@playwright/test';
import { AccountProfilePhonePage } from '../../page-objects/account/account-profile-phone.page'

// create instance of Page
let accountProfilePhonePage: AccountProfilePhonePage;

  // Setup environment before each test
  test.beforeEach(async ({page}) => {
    accountProfilePhonePage = new AccountProfilePhonePage(page);
    accountProfilePhonePage.goToProfilePhoneNumberPage();

  });
  // Add a new Phone Number 
  test('Add a new Phone Number ', async ({ page }) => {
    console.log("Test Case: Add Phone Number");
    // Click on Add  Phone number Button
    await accountProfilePhonePage.clickAddPhoneNumberButton();
    // Add new phone number to text box
    await accountProfilePhonePage.addPhoneNumberFun('(666) 555-4444');
    // Verify the Phone Number is updated
    await accountProfilePhonePage.assertProfilePhoneNumberTxtBox("(666) 555-4444");
    // Edit the Profile Phone Number page 
    });
  
  // Edit the Profile Phone Number page 
  test('Edit Phone Number by clicking the Phone Edit button', async ({ page }) => {
  console.log("Test Case: Edit Phone Number by clicking the Phone Edit button");
  // Edit Phone number Text Box
  await accountProfilePhonePage.editPhoneNumberFun("(666) 555-4444","(771) 777-7777");
  // Verify the Phone Number is updated
  await accountProfilePhonePage.assertProfilePhoneNumberTxtBox("(771) 777-7777");

  });

    // Delete a new Phone Number 
  test('Delete a Phone Number ', async ({ page }) => {
  console.log("Test Case: Delete Phone Number");
  // Click on Delete a Phone number Button
  await accountProfilePhonePage.deletePhoneNumberFun('(771) 777-7777');

  // Verify the Phone Number is updated
  //await profilePhonePage.assertProfileDeletePhoneNumberMsg("Update successful!");
    
      });

    