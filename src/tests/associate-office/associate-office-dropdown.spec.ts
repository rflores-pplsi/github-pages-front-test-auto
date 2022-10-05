import { test } from '@playwright/test';
import { ProfilePickerPage } from '../../page-objects/associate-office/associate-office-profile-picker.page';

// create instance of Page
let profilePickerPage: ProfilePickerPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  profilePickerPage = new ProfilePickerPage(page);
});

test('Verify that the dropdown appears for users that have multiple associates', async ({ page }) => {
  await profilePickerPage.navigateToProfilePickerPage2();
  await profilePickerPage.clickOnAssociateAccount(1);
  await profilePickerPage.assertPageHasCorrectTitle();
  await profilePickerPage.assertDropdownBoxIsDisplayed();
  await profilePickerPage.clickOnDropdownBox();
  await profilePickerPage.assertAssociateDropdownProfiles();
  await profilePickerPage.clickOnDropdownBox();
});

test('Verify that the dropdown appears for users that have multiple associates 2', async ({ page }) => {
  await profilePickerPage.navigateToProfilePickerPage2();
  await profilePickerPage.clickOnAssociateAccount(2);
  await profilePickerPage.assertPageHasCorrectTitle();
  await profilePickerPage.assertDropdownBoxIsDisplayed();
  await profilePickerPage.clickOnDropdownBox();
  await profilePickerPage.assertAssociateDropdownProfiles();
  await profilePickerPage.clickOnDropdownBox();
});

test('Verify that the dropdown appears for users that have multiple associates 3', async ({ page }) => {
  await profilePickerPage.navigateToProfilePickerPage2();
  await profilePickerPage.clickOnAssociateAccount(3);
  await profilePickerPage.assertPageHasCorrectTitle();
  await profilePickerPage.assertDropdownBoxIsDisplayed();
  await profilePickerPage.clickOnDropdownBox();
  await profilePickerPage.assertAssociateDropdownProfiles();
  await profilePickerPage.clickOnDropdownBox();
});

test('Verify that you are able to switch an associate from the dropdown box', async ({ page }) => {
  await profilePickerPage.navigateToProfilePickerPage2();
  await profilePickerPage.clickOnAssociateAccount(4);
  await profilePickerPage.assertPageHasCorrectTitle();
  await profilePickerPage.clickOnDropdownBox();
  await profilePickerPage.selectAssociateAccount();
  await profilePickerPage.assertAssociateIsSwitched();
});

test('Verify that the dropdown does not appear for users that have one associate', async ({ page }) => {
  await profilePickerPage.navigateToProfilePickerPage3();
  await profilePickerPage.assertPageHasCorrectTitle();
  await profilePickerPage.assertDropdownBoxIsNotDisplayed();
});
