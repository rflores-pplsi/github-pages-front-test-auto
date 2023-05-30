import { test } from '@playwright/test';
import { LSEngagePage } from '../../../page-objects (Archived)/associate-office/associate-office-LSEngage.page';

// prod and uat only, not available in dev
// create instance of Page
let lsEngagePage: LSEngagePage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  lsEngagePage = new LSEngagePage(page);
});

// LS Engage
test('Verify that one account is redirecting to LSEngage', async () => {
  await lsEngagePage.navigateToLSEngagePage();
  await lsEngagePage.assertLSEngagePage();
  await lsEngagePage.assertPageHasTitle('LegalShield');
  await lsEngagePage.clickOnName();
  await lsEngagePage.clickOnSignOut();
});

test('Verify that the Profile Picker with multiple accounts is redirecting to LSEngage', async () => {
  await lsEngagePage.navigateToLSEngagePage2();
  await lsEngagePage.assertProfilePickerPage();
  await lsEngagePage.clickOnAccount();
  await lsEngagePage.assertLSEngagePage();
  await lsEngagePage.assertPageHasTitle('LegalShield');
  await lsEngagePage.clickOnName();
  await lsEngagePage.clickOnSignOut();
});

// PPLSI Prospect
test('Verify that one account is redirecting to PPLSI Prospect', async () => {
  await lsEngagePage.navigateToPPLSIProspectPage();
  await lsEngagePage.assertPPLSIProspectPage();
  await lsEngagePage.assertPageHasTitle('PPLSI Prospect');
  await lsEngagePage.clickOnSettings();
  await lsEngagePage.clickOnLogOut();
  await lsEngagePage.clickOnYesButton();
});

test('Verify that the Profile Picker with multiple accounts is redirecting to PPLSI Prospect', async () => {
  await lsEngagePage.navigateToPPLSIProspectPage2();
  await lsEngagePage.assertProfilePickerPage();
  await lsEngagePage.clickOnAccount();
  await lsEngagePage.assertPPLSIProspectPage();
  await lsEngagePage.assertPageHasTitle('PPLSI Prospect');
  await lsEngagePage.clickOnSettings();
  await lsEngagePage.clickOnLogOut();
  await lsEngagePage.clickOnYesButton();
});
