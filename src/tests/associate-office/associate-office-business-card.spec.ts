import { test } from '@playwright/test';
import { BusinessCard } from '../../page-objects/associate-office/associate-office-business-card.page';

// create instance of Page
let businessCard: BusinessCard;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  businessCard = new BusinessCard(page);
  await businessCard.navigateToBusinessCardPage();
});

test('The Business Card page has the correct URL', async ({ page }) => {
  await businessCard.assertPageHasCorrectURL();
});

test('The Business Card page has the correct title', async ({ page }) => {
  await businessCard.assertPageHasCorrectTitle();
});

test('The Business Card page has the correct navigation', async ({ page }) => {
  await businessCard.assertNavMenuOnPage();
});

test('The Business Card page has the correct header', async ({ page }) => {
  await businessCard.assertPageHasCorrectHeader();
});

test('Verify that the Profile information message is displaying', async ({ page }) => {
  await businessCard.assertProfileInfoMsg();
});

test('Verify that the Marketing Site Card URL is displaying', async ({ page }) => {
  await businessCard.assertWeAreLegalShieldURL();
  await businessCard.clickOnWeAreLegalShieldURL();
  await businessCard.assertCopiedMsg();
});

test('Verify that the First Name, Last Name, Email, Phone Number and Checkbox are displaying', async ({ page }) => {
  await businessCard.assertFirstAndLastNamesBox();
  await businessCard.assertEmailAddressBox();
  await businessCard.assertPhoneNumberBoxAndCheckbox();
});

test('Verify that the Component to Upload Photo is displaying', async ({ page }) => {
  await businessCard.assertPhotoIconBtn();
  await businessCard.clickOnPhotoLink();
  await businessCard.assertUpdateEditResetProfilePicture();
});

test('Verify that the Plan selection message is displaying', async ({ page }) => {
  await businessCard.assertPlanSelection();
});

test('Verify that the LegalShield Plan is displaying', async ({ page }) => {
  await businessCard.assertLegalShieldPlanISDisplaying();
  await businessCard.assertEyeIconIsDisplaying(1);
  await businessCard.assertHiddenLabelIsDisplaying(1);
  await businessCard.assertDisplayBtnIsDisplaying(3);
});

test('Verify that the IDShield Plan is displaying', async ({ page }) => {
  await businessCard.assertIDShieldPlanISDisplaying();
  await businessCard.assertEyeIconIsDisplaying(2);
  await businessCard.assertHiddenLabelIsDisplaying(2);
  await businessCard.assertDisplayBtnIsDisplaying(4);
});

test('Verify that the Small Business Plan is displaying', async ({ page }) => {
  await businessCard.assertSmallBusinessPlanISDisplaying();
  await businessCard.assertEyeIconIsDisplaying(3);
  await businessCard.assertHiddenLabelIsDisplaying(3);
  await businessCard.assertDisplayBtnIsDisplaying(5);
});

test('Verify that the Publish button is displaying', async ({ page }) => {
  await businessCard.assertPublishButton();
});

test('The Business Card page has correct footer', async ({ page }) => {
  await businessCard.assertPageHasCorrectFooter();
});
