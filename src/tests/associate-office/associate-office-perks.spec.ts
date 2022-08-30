import { test } from '@playwright/test';
import { LoginPage } from '../../page-objects/login/login.page';
import { PerksPage } from '../../page-objects/associate-office/associate-office-perks.page';
import UrlsUtils from '../../utils/urls.utils';
import { associateAdvantagePlus } from '../../utils/user.utils';

// Declare Page Variable for This Page
let loginPage: LoginPage;
let perksPage: PerksPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  // Create instance of Page Object
  loginPage = new LoginPage(page);
  perksPage = new PerksPage(page);
  await loginPage.goTo(UrlsUtils.channelsUrls.perks.url);
  await loginPage.login(associateAdvantagePlus.username, associateAdvantagePlus.password);
});

test('Banner is displayed', async ({ page }) => {
  console.log('Test Case: Banner is displayed');
  await perksPage.assertBannerIsDisplayed();
});

test('Banner Title Text', async ({ page }) => {
  console.log('Test Case: Verify Banner Title Text');
  await perksPage.assertBannerTitleText();
});

test('Banner Description Text', async ({ page }) => {
  console.log('Test Case: Verify Banner Description Text');
  await perksPage.assertBannerDescriptionText();
});

test('Perks Text', async ({ page }) => {
  console.log('Test Case: Verify Perks Text');
  await perksPage.assertPerkText();
});

test('Featured Offer Title Text', async ({ page }) => {
  console.log('Test Case: Verify Featured Offer Title Text');
  await perksPage.assertFeaturedOfferTitleText();
});

test('Featured Perk Description Text', async ({ page }) => {
  console.log('Test Case: Verify Featured Perk Description Text');
  await perksPage.assertFeaturedPerkDescriptionText();
});

test('Featured Perk Image is displayed', async ({ page }) => {
  console.log('Test Case: Featured Perk Image is displayed');
  await perksPage.assertFeaturedPerkImageDisplayed();
});

test('ASSOCIATEPerks is displayed', async ({ page }) => {
  console.log('Test Case: ASSOCIATEPerks is displayed');
  await perksPage.assertASSOCIATEPerksDisplayed();
});

test('Available in Canada is displayed', async ({ page }) => {
  console.log('Test Case: Available in Canada is displayed');
  await perksPage.assertAvailableCanDisplayed();
});

test('Available in Canada image is displayed', async ({ page }) => {
  console.log('Test Case: Available in Canada image is displayed');
  await perksPage.assertAvailableCanImageDisplayed();
});

test('perk', async ({ page }) => {
  console.log('Test Case: Available in Canada image is displayed');
  const perkTitle = 'REXING';
  const description = 'Outdoors, Home Security, Dash Cams and More!';
  const comment = 'Capture every moment!';
  await perksPage.assertPerkDescriptionDisplayed(perkTitle);
});
