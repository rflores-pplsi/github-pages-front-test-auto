import { test } from '@playwright/test';
import { BusinessCard } from '../../page-objects/channels/business-card.page';

// create instance of Page
let businessCard: BusinessCard;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  businessCard = new BusinessCard(page);
  await businessCard.navigateToBusinessCardPage();
});

test('Test Case to test our page object', async ({ page }) => {
  await businessCard.assertPageTitle();
});
