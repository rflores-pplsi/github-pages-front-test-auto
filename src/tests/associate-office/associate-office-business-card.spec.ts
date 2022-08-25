import { test } from '@playwright/test';
import { BusinessCard } from '../../page-objects/associate-office/associate-office-business-card.page';

// create instance of Page
let businessCard: BusinessCard;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  businessCard = new BusinessCard(page);
  await businessCard.navigateToBusinessCardPage();
});

test('The Business Card page Load', async ({ page }) => {
  await businessCard.assertBusinessCardPageContentHasLoaded();
});

test('Verify First Name, Last Name, Phone Number and Website Fields are displaying', async ({ page }) => {
  await businessCard.assertBusinessCardPageContentHasLoaded();
  await businessCard.assertBusinessCardPageFirstNameIsDisplayed();
  await businessCard.assertBusinessCardPageLastNameIsDisplayed();
  await businessCard.assertBusinessCardPagePhoneNumberIsDisplayed();
  await businessCard.assertBusinessCardPageDisplayOnWebsite();
});
