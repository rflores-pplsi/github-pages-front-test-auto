import { test } from '@playwright/test';
import { AccountProfileEmailPage } from '../../page-objects/account/account-profile-email.page'

// create instance of Page
let accountProfileEmailPage: AccountProfileEmailPage;

  // Setup environment before each test
  test.beforeEach(async ({page}) => {
    accountProfileEmailPage = new AccountProfileEmailPage(page);
    accountProfileEmailPage.NavigateToProfileEmailPage();

  });
  // Add a new Email Address 
  test('Add a new Email Address ', async ({ page }) => {
    console.log("Test Case: Add a Email Address");
    // Add new Email Address to text box
    await accountProfileEmailPage.addEmailAddressFun('abdeltest@email.com');
    // Verify the Email Address is updated
    //await accountProfileEmailPage.assertProfileAddEmailTxtBox('abdeltest@email.com');
    });
    // Edit an Email Address 
  test('Edit an email address ', async ({ page }) => {
    console.log("Test Case: Edit an Email address");
    // Add new Email Address to text box
    await accountProfileEmailPage.editEmailAddressFun('abdeltest@email.com','newEmail@email.com');
    // Verify the Email Address is updated
    //await accountProfileEmailPage.assertProfileUpdatedEmailTxtBox('newEmail@email.com');
    });
    // Delete an Email Address 
  test('Delete an email address ', async ({ page }) => {
    console.log("Test Case: Edit an Email address");
    // Add new Email Address to text box
    await accountProfileEmailPage.deleteEmailAddressFun('newEmail@email.com');
    // Verify the Email Address is updated
    //await accountProfileEmailPage.assertProfileEmailTxtBox('abdel@email.com');
    });