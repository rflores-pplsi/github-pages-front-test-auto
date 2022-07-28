/* eslint-disable no-undef */
import { test } from '@playwright/test';
import { EnglishWalsUSPage } from '../../page-objects/qa-maintenance-list/english-wals-us.page';
// create instance of Page
let englishWalsUSPage: EnglishWalsUSPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  englishWalsUSPage = new EnglishWalsUSPage(page);
  // test.slow triples the default wait times
  test.slow();
  // await checkoutConfirmationPage.navigateToCheckoutConfirmationPage('Alaska');
});
test.only('test', async ({ page }) => {
  test.slow;
  // Navigate to English-WALS-US page
  await englishWalsUSPage.navigateToEnglishWalsUSPage();
  // Update the state
  await englishWalsUSPage.changeStateinformation('Virginia');
  // Get Started then pick a plan
  await englishWalsUSPage.getStartedThenPickAPlan();
  // Verify that  it takes user to checkout
  await englishWalsUSPage.assertContactInformationTxt();
  // Fill Contact information form
  await englishWalsUSPage.filloutContactInformationForm('Virginia', 'tester111@hotmail.com', 'testerFist', 'testerLast');
});
