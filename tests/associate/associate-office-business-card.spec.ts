import { test } from '@playwright/test';
import { BusinessCard } from '../../page-objects/associate-office/business-card.page';

// create instance of Page
let businessCard: BusinessCard;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  businessCard = new BusinessCard(page);
  await businessCard.navigateToBusinessCardPage();
});

test('SC-xxxx - The Business Card page functionality', async ({ page }) => {
  await businessCard.assertBusinessCardPageContentHasLoaded();
});

test('SC-1290 - Verify First Name, Last Name, Phone Number and Website Fields are displaying', async ({ page }) => {
  await businessCard.assertBusinessCardPageContentHasLoaded();
  await businessCard.assertBusinessCardPageFirstNameIsDisplayed();
  await businessCard.assertBusinessCardPageLastNameIsDisplayed();
  await businessCard.assertBusinessCardPagePhoneNumberIsDisplayed();
  await businessCard.assertBusinessCardPageDisplayOnWebsite();
});
