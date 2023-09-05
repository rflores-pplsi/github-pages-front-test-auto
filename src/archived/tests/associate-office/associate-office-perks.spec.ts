import { test } from '@playwright/test';
import { LoginPage } from '../../../archived/page-objects-old/login/login.page';
import { PerksPage } from '../../../archived/page-objects-old/associate-office/associate-office-perks.page';
import UrlsUtils from '../../../utils/urls.utils';
import { associateAdvantagePlus } from '../../../utils/user.utils';

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
  await perksPage.waitForPageIsLoaded();
});

test('Banner is displayed', async () => {
  console.log('Test Case: Banner is displayed');
  test.slow();
  await perksPage.assertBannerIsDisplayed();
});

test('Banner Title Text', async () => {
  console.log('Test Case: Verify Banner Title Text');
  await perksPage.assertBannerTitleText();
});

test('Banner Description Text', async () => {
  console.log('Test Case: Verify Banner Description Text');
  await perksPage.assertBannerDescriptionText();
});

test("Perk's Disclaimer", async () => {
  console.log("Test Case: Verify Perk's Disclaimer");
  await perksPage.assertPerkDisclaimerIsDisplayed();
});

test('Perks Text', async () => {
  console.log('Test Case: Verify Perks Text');
  await perksPage.assertPerkText();
});

test('Featured Offer Title Text', async () => {
  console.log('Test Case: Verify Featured Offer Title Text');
  await perksPage.assertFeaturedOfferTitleText();
});

test('Featured Perk Description Text', async () => {
  console.log('Test Case: Verify Featured Perk Description Text');
  test.slow();
  await perksPage.assertFeaturedPerkDescriptionText();
});

test('Featured Perk Image is displayed', async () => {
  console.log('Test Case: Featured Perk Image is displayed');
  await perksPage.assertFeaturedPerkImageDisplayed();
});

test('ASSOCIATEPerks is displayed', async () => {
  console.log('Test Case: ASSOCIATEPerks is displayed');
  await perksPage.assertASSOCIATEPerksDisplayed();
});

test('Available in Canada is displayed', async () => {
  console.log('Test Case: Available in Canada is displayed');
  await perksPage.assertAvailableCanDisplayed();
});

test('Available in Canada image is displayed', async () => {
  console.log('Test Case: Available in Canada image is displayed');
  await perksPage.assertAvailableCanImageDisplayed();
});

test('Acer perk is displayed', async ({ page, context }) => {
  console.log('Test Case: Acer perk is displayed');
  test.slow();
  const PERK_TITLE = 'Acer';
  const DESCRIPTION = 'High performance and value are always in style.';
  const COMMENT = 'Save Today!';
  const TITLE_ACER_PAGE = 'Acer Store - US | Laptops, Desktops, Chromebooks, Monitors and more!';
  await perksPage.waitForPerkDisplayed(PERK_TITLE);
  await perksPage.hoverOverToPerk(9);
  await perksPage.assertPerkTitleIsDisplayed(PERK_TITLE, PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed(DESCRIPTION, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(0, COMMENT);
  await perksPage.assertPerkShopNowButtonIsDisplayed(0);
  await perksPage.assertNewPageIsOpened(0, TITLE_ACER_PAGE, context, page);
});

test('John Addison Leadership perk is displayed', async ({ page, context }) => {
  console.log('Test Case: John Addison Leadership perk is displayed');
  const PERK_TITLE = 'John Addison Leadership';
  const DESCRIPTION = 'One time use code for 10% off. Use code 3THSPCVF during checkout.';
  const COMMENT = 'Personal development for the rest of us!';
  const TITLE_JA_LEADERSHIP_PAGE = 'LS Perks - Addison Leadership Group, INC.';
  await perksPage.waitForJALPerkDisplayed();
  await perksPage.hoverOverToPerk(10);
  await perksPage.assertJALPerkTitleIsDisplayed(PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed(DESCRIPTION, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(1, COMMENT);
  await perksPage.assertPerkShopNowButtonIsDisplayed(1);
  await perksPage.assertNewPageIsOpened(1, TITLE_JA_LEADERSHIP_PAGE, context, page);
});

test('REXING perk is displayed', async ({ page, context }) => {
  console.log('Test Case: REXING perk is displayed');
  const PERK_TITLE = 'REXING';
  const DESCRIPTION = 'Outdoors, Home Security, Dash Cams and More!';
  const COMMENT = 'Capture every moment!';
  const TITLE_REXING_PAGE = 'Dash Cams from Rexing USA - Top Rated Front, Rear and Internal facing Dash Cameras w/ GPS, Wifi Support and more.';
  await perksPage.waitForPerkDisplayed(PERK_TITLE);
  await perksPage.hoverOverToPerk(11);
  await perksPage.assertPerkTitleIsDisplayed(PERK_TITLE, PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed(DESCRIPTION, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(2, COMMENT);
  await perksPage.assertPerkShopNowButtonIsDisplayed(2);
  await perksPage.assertNewPageIsOpened(2, TITLE_REXING_PAGE, context, page);
});

test('Healthcare RXCard perk is displayed', async ({ page, context }) => {
  test.slow();
  console.log('Test Case: Healthcare RXCard perk is displayed');
  const PERK_TITLE = 'Healthcare RXCard';
  const DESCRIPTION = 'Shop discounts at more than 35,000 pharmacies';
  const COMMENT = 'Save up to 80%!';
  const TITLE_RX_CARD_PAGE = 'Drug Prices and Prescription Coupons';
  await perksPage.waitForPerkDisplayed(PERK_TITLE);
  await perksPage.hoverOverToPerk(12);
  await perksPage.assertPerkTitleIsDisplayed(PERK_TITLE, PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed(DESCRIPTION, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(3, COMMENT);
  await perksPage.assertPerkShopNowButtonIsDisplayed(3);
  await perksPage.assertNewPageIsOpened(3, TITLE_RX_CARD_PAGE, context, page);
});

test('Call a Doctor Plus perk is displayed', async ({ page, context }) => {
  console.log('Test Case: Call a Doctor Plus perk is displayed');
  const PERK_TITLE = 'Call a Doctor Plus';
  const DESCRIPTION = '24/7 access to quality healthcare.';
  const COMMENT = 'One Low Monthly Price!';
  const TITLE_DOCTOR_PAGE = 'Call A Doctor Plus | Unlimited, 24/7 Access to the Healthcare You Need';
  await perksPage.waitForPerkDisplayed(PERK_TITLE);
  await perksPage.hoverOverToPerk(13);
  await perksPage.assertPerkTitleIsDisplayed(PERK_TITLE, PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed(DESCRIPTION, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(4, COMMENT);
  await perksPage.assertPerkShopNowButtonIsDisplayed(4);
  await perksPage.assertNewPageIsOpened(4, TITLE_DOCTOR_PAGE, context, page);
});

test('Diamond Physicians perk is displayed', async ({ page, context }) => {
  test.slow();
  console.log('Test Case: Diamond Physicians perk is displayed');
  const PERK_TITLE = 'Diamond Physicians';
  const DESCRIPTION = 'Your future of primary care has arrived';
  const COMMENT = 'One Low Monthly Price!';
  const TITLE_DIAMOND_PAGE = 'LegalShield Associates Enrollment Instructions - Diamond';
  const TITLE_MY_LSE_PAGE = 'MyLSE';
  await perksPage.waitForPerkDisplayed(PERK_TITLE);
  await perksPage.hoverOverToPerk(14);
  await perksPage.assertPerkTitleIsDisplayed(PERK_TITLE, PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed(DESCRIPTION, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(5, COMMENT);
  await perksPage.assertPerkMoreDetailsIsDisplayed(0);
  await perksPage.assertNewPageIsOpened2(0, TITLE_MY_LSE_PAGE, context, page);
  await perksPage.assertPerkShopNowButtonIsDisplayed(5);
  await perksPage.assertNewPageIsOpened(5, TITLE_DIAMOND_PAGE, context, page);
});

test('Unity Insurance Partners perk is displayed', async () => {
  console.log('Test Case: Unity Insurance Partners perk is displayed');
  const PERK_TITLE = 'Unity Insurance Partners';
  const DESCRIPTION = 'Insuring customers for over 100 years';
  const COMMENT = 'Exclusive Pricing!';
  const TITLE_UNITY_PAGE = 'Unity Insurance Partners';
  await perksPage.waitForPerkDisplayed(PERK_TITLE);
  await perksPage.hoverOverToPerk(15);
  await perksPage.assertPerkTitleIsDisplayed(PERK_TITLE, PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed(DESCRIPTION, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(6, COMMENT);
  await perksPage.assertPerkMoreDetailsIsDisplayed(1);
  await perksPage.clickOnbMoreDetailsBtn(1);
  await perksPage.assertPageHasTitle(TITLE_UNITY_PAGE);
});

test('1-800 Flowers perk is displayed', async ({ page, context }) => {
  console.log('Test Case: 1-800 Flowers perk is displayed');
  const PERK_TITLE = '1-800 Flowers';
  const DESCRIPTION = 'Use code LSC20 at checkout';
  const COMMENT = '15% Discount!';
  const TITLE_FLOWERS_PAGE = 'Flowers | Flower Delivery | Fresh Flowers Online | 1-800-Flowers.com';
  await perksPage.waitForPerkDisplayed(PERK_TITLE);
  await perksPage.hoverOverToPerk(16);
  await perksPage.assertPerkTitleIsDisplayed(PERK_TITLE, PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed2(7, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(7, COMMENT);
  await perksPage.assertPerkShopNowButtonIsDisplayed(6);
  await perksPage.assertNewPageIsOpened(6, TITLE_FLOWERS_PAGE, context, page);
});

test('Harry & David perk is displayed', async ({ page, context }) => {
  console.log('Test Case: Harry & David perk is displayed');
  const PERK_TITLE = 'Harry & David';
  const DESCRIPTION = 'Use code LSC20 at checkout';
  const COMMENT = '15% Discount!';
  const TITLE_HD_PAGE = 'Online Gift Baskets, Fruit and Food Gifts & Wine Clubs | Harry & David';
  await perksPage.waitForPerkDisplayed(PERK_TITLE);
  await perksPage.hoverOverToPerk(17);
  await perksPage.assertPerkTitleIsDisplayed(PERK_TITLE, PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed2(8, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(8, COMMENT);
  await perksPage.assertPerkShopNowButtonIsDisplayed(7);
  await perksPage.assertNewPageIsOpened(7, TITLE_HD_PAGE, context, page);
});

test('1-800 Baskets perk is displayed', async ({ page, context }) => {
  console.log('Test Case: 1-800 Baskets perk is displayed');
  const PERK_TITLE = '1-800 Baskets';
  const DESCRIPTION = 'Use code LSC20 at checkout';
  const COMMENT = '15% Discount!';
  const TITLE_BASKETS_PAGE = 'Gift Baskets and Gourmet Food | 1800Baskets.com';
  await perksPage.waitForPerkDisplayed(PERK_TITLE);
  await perksPage.hoverOverToPerk(18);
  await perksPage.assertPerkTitleIsDisplayed(PERK_TITLE, PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed2(9, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(9, COMMENT);
  await perksPage.assertPerkShopNowButtonIsDisplayed(8);
  await perksPage.assertNewPageIsOpened(8, TITLE_BASKETS_PAGE, context, page);
});

test("Shari's Berries perk is displayed", async ({ page, context }) => {
  console.log("Test Case: Shari's Berries perk is displayed");
  const PERK_TITLE = "Shari's Berries";
  const DESCRIPTION = 'Use code LSC20 at checkout';
  const COMMENT = '15% Discount!';
  const TITLE_BERRIES_PAGE = "Chocolate Covered Strawberries Delivery Near Me | Shari's Berries";
  await perksPage.waitForPerkDisplayed(PERK_TITLE);
  await perksPage.hoverOverToPerk(19);
  await perksPage.assertPerkTitleIsDisplayed(PERK_TITLE, PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed2(10, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(10, COMMENT);
  await perksPage.assertPerkShopNowButtonIsDisplayed(9);
  await perksPage.assertNewPageIsOpened(9, TITLE_BERRIES_PAGE, context, page);
});

test('AT&T perk is displayed', async ({ page, context }) => {
  console.log('Test Case: AT&T perk is displayed');
  const PERK_TITLE = 'AT&T';
  const DESCRIPTION = 'At any AT&T store give representative code FAN:04206448, to enroll';
  const COMMENT = '20% Discount and More!';
  const TITLE_ATT_PAGE = 'AT&T Signature Program | AT&T';
  await perksPage.waitForPerkDisplayed(PERK_TITLE);
  await perksPage.hoverOverToPerk(20);
  await perksPage.assertPerkTitleIsDisplayed(PERK_TITLE, PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed(DESCRIPTION, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(11, COMMENT);
  await perksPage.assertPerkShopNowButtonIsDisplayed(10);
  await perksPage.assertNewPageIsOpened(10, TITLE_ATT_PAGE, context, page);
});

test('Best Buy perk is displayed', async ({ page, context }) => {
  console.log('Test Case: Best Buy perk is displayed');
  const PERK_TITLE = 'Best Buy';
  const DESCRIPTION = 'Use code LSAP2021 in the registration code section during sign-up';
  const COMMENT = 'Exclusive Discounts!';
  const TITLE_BEST_BUY_PAGE = 'Best Buy Business - Sign In';
  await perksPage.waitForPerkDisplayed(PERK_TITLE);
  await perksPage.hoverOverToPerk(21);
  await perksPage.assertPerkTitleIsDisplayed(PERK_TITLE, PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed(DESCRIPTION, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(12, COMMENT);
  await perksPage.assertPerkShopNowButtonIsDisplayed(11);
  await perksPage.assertNewPageIsOpened(11, TITLE_BEST_BUY_PAGE, context, page);
});

test('National & Enterprise perk is displayed', async () => {
  console.log('Test Case: National & Enterprise perk is displayed');
  const PERK_TITLE = 'National & Enterprise';
  const DESCRIPTION = 'Use code XZ51449 at checkout';
  const COMMENT = 'Discount Pricing!';
  const TITLE_ENTERPRISE_PAGE = 'Associate Office';
  await perksPage.waitForPerkDisplayed(PERK_TITLE);
  await perksPage.hoverOverToPerk(22);
  await perksPage.assertPerkTitleIsDisplayed(PERK_TITLE, PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed(DESCRIPTION, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(13, COMMENT);
  await perksPage.assertPerkMoreDetailsIsDisplayed(2);
  await perksPage.clickOnbMoreDetailsBtn(2);
  await perksPage.assertPageHasTitle(TITLE_ENTERPRISE_PAGE);
});

test('ODP Business Solutions perk is displayed', async ({ page, context }) => {
  test.slow();
  console.log('Test Case:ODP Business Solutions perk is displayed');
  const PERK_TITLE = 'ODP Business Solutions';
  const DESCRIPTION = 'Office furniture, supplies, electronics, print services & more';
  const COMMENT = 'Exclusive Discounts!';
  const TITLE_BUS_SOL_PAGE = 'ODP Business Solutions';
  await perksPage.waitForPerkDisplayed(PERK_TITLE);
  await perksPage.hoverOverToPerk(23);
  await perksPage.assertPerkTitleIsDisplayed(PERK_TITLE, PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed(DESCRIPTION, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(14, COMMENT);
  await perksPage.assertPerkShopNowButtonIsDisplayed(12);
  await perksPage.assertNewPageIsOpened(12, TITLE_BUS_SOL_PAGE, context, page);
  await perksPage.assertBusSolNewPageIsOpened(context, page);
  await perksPage.assertBusSolNewPageIsOpened2(context, page);
});

test('HP Inc. perk is displayed', async ({ page, context }) => {
  console.log('Test Case: HP Inc. perk is displayed');
  const PERK_TITLE = 'HP Inc.';
  const DESCRIPTION = 'Everyday discounts up to 35%';
  const COMMENT = 'Exclusive Discounts!';
  const TITLE_HP_PAGE = 'HP Employee Purchase Program';
  const TITLE_MY_LSE_PAGE = 'MyLSE';
  await perksPage.waitForPerkDisplayed(PERK_TITLE);
  await perksPage.hoverOverToPerk(25);
  await perksPage.assertPerkTitleIsDisplayed(PERK_TITLE, PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed(DESCRIPTION, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(15, COMMENT);
  await perksPage.assertPerkShopNowButtonIsDisplayed(13);
  await perksPage.assertNewPageIsOpened(13, TITLE_HP_PAGE, context, page);
  await perksPage.assertPerkMoreDetailsIsDisplayed(3);
  await perksPage.assertNewPageIsOpened2(3, TITLE_MY_LSE_PAGE, context, page);
});

test('JoS A. Bank. perk is displayed', async () => {
  console.log('Test Case: JoS A. Bank perk is displayed');
  const PERK_TITLE = 'JoS A. Bank';
  const DESCRIPTION = 'See Our New Lower Prices & Save Today';
  const COMMENT = 'Exclusive Discounts!';
  await perksPage.waitForPerkDisplayed(PERK_TITLE);
  await perksPage.hoverOverToPerk(26);
  await perksPage.assertPerkTitleIsDisplayed(PERK_TITLE, PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed(DESCRIPTION, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(16, COMMENT);
  await perksPage.assertPerkShopNowButtonIsDisplayed(14);
});

test("Men's Wearhouse perk is displayed", async () => {
  console.log("Test Case: Men's Wearhouse perk is displayed");
  const PERK_TITLE = "Men's Wearhouse";
  const DESCRIPTION = "Shop Men's Wearhouse New Arrivals & Collection Today";
  const COMMENT = 'Exclusive Discounts!';
  await perksPage.waitForPerkDisplayed(PERK_TITLE);
  await perksPage.hoverOverToPerk(27);
  await perksPage.assertPerkTitleIsDisplayed(PERK_TITLE, PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed(DESCRIPTION, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(17, COMMENT);
  await perksPage.assertPerkShopNowButtonIsDisplayed(15);
});

test('Moores perk is displayed', async () => {
  console.log('Test Case: Moores perk is displayed');
  const PERK_TITLE = 'Moores';
  const DESCRIPTION = 'Moores has been outfitting men for more than 30 years';
  const COMMENT = 'Exclusive Discounts!';
  await perksPage.waitForPerkDisplayed(PERK_TITLE);
  await perksPage.hoverOverToPerk(28);
  await perksPage.assertPerkTitleIsDisplayed(PERK_TITLE, PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed(DESCRIPTION, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(18, COMMENT);
  await perksPage.assertPerkShopNowButtonIsDisplayed(16);
});

test('The Associate Store perk is displayed', async ({ page, context }) => {
  console.log('Test Case: The Associate Store perk is displayed');
  const PERK_TITLE = 'The Associate Store';
  const DESCRIPTION = 'Use code ADVANTAGE+ at checkout';
  const COMMENT = '10% Discount on Select Items!';
  const TITLE_ASSOCIATES_STORE_PAGE = 'LegalShield Associate Supplies - The PPLSI Associate Store';
  await perksPage.waitForPerkDisplayed(PERK_TITLE);
  await perksPage.hoverOverToPerk(29);
  await perksPage.assertPerkTitleIsDisplayed(PERK_TITLE, PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed(DESCRIPTION, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(19, COMMENT);
  await perksPage.assertPerkShopNowButtonIsDisplayed(17);
  await perksPage.assertNewPageIsOpened(17, TITLE_ASSOCIATES_STORE_PAGE, context, page);
});

test('Jack Canfield Store perk is displayed', async ({ page, context }) => {
  console.log('Test Case: Jack Canfield Store perk is displayed');
  const PERK_TITLE = 'Jack Canfield Store';
  const DESCRIPTION = 'Access free resources and save 20% in the Success Store!';
  const COMMENT = 'Success Store Discount!';
  const TITLE_JC_STORE_PAGE = 'Welcome LegalShield Associates - Jack Canfield';
  await perksPage.waitForPerkDisplayed(PERK_TITLE);
  await perksPage.hoverOverToPerk(30);
  await perksPage.assertPerkTitleIsDisplayed(PERK_TITLE, PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed(DESCRIPTION, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(20, COMMENT);
  await perksPage.assertPerkShopNowButtonIsDisplayed(18);
  await perksPage.assertNewPageIsOpened(18, TITLE_JC_STORE_PAGE, context, page);
});

test('John Maxwell Store perk is displayed', async ({ page, context }) => {
  console.log('Test Case: John Maxwell Store perk is displayed');
  const PERK_TITLE = 'John Maxwell Store';
  const DESCRIPTION = 'New York Times Best Selling Author, coach, and speaker';
  const COMMENT = 'Discount on Select Items!';
  const TITLE_JM_STORE_PAGE = 'John Maxwell Company x Leaal Shield';
  await perksPage.waitForPerkDisplayed(PERK_TITLE);
  await perksPage.hoverOverToPerk(31);
  await perksPage.assertPerkTitleIsDisplayed(PERK_TITLE, PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed(DESCRIPTION, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(21, COMMENT);
  await perksPage.assertPerkShopNowButtonIsDisplayed(19);
  await perksPage.assertNewPageIsOpened(19, TITLE_JM_STORE_PAGE, context, page);
});

test('Don Yaeger Store perk is displayed', async ({ page, context }) => {
  console.log('Test Case: Don Yaeger Store perk is displayed');
  test.slow();
  const PERK_TITLE = 'Don Yaeger Store';
  const DESCRIPTION = 'Don Yaeger Use code: legalshield during checkout!';
  const COMMENT = '20% Discount!';
  const TITLE_DY_STORE_PAGE = 'Don Yaeger » Award-Winning Leadership Speaker & New York Times Best-Selling Author';
  await perksPage.waitForPerkDisplayed(PERK_TITLE);
  await perksPage.hoverOverToPerk(32);
  await perksPage.assertPerkTitleIsDisplayed(PERK_TITLE, PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed(DESCRIPTION, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(22, COMMENT);
  await perksPage.assertPerkShopNowButtonIsDisplayed(20);
  await perksPage.assertNewPageIsOpened(20, TITLE_DY_STORE_PAGE, context, page);
});

test('Liberty Mutual perk is displayed', async () => {
  console.log('Test Case: Liberty Mutual perk is displayed');
  const PERK_TITLE = 'Liberty Mutual';
  const DESCRIPTION = 'Customized insurance coverage!';
  const COMMENT = 'Request a quote!';
  const TITLE_LIBERTY_PAGE = 'Associate Office';
  await perksPage.waitForPerkDisplayed(PERK_TITLE);
  await perksPage.hoverOverToPerk(33);
  await perksPage.assertPerkTitleIsDisplayed(PERK_TITLE, PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed(DESCRIPTION, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(23, COMMENT);
  await perksPage.assertPerkMoreDetailsIsDisplayed(4);
  await perksPage.clickOnbMoreDetailsBtn(4);
  await perksPage.assertPageHasTitle(TITLE_LIBERTY_PAGE);
});

test('Justfly.com perk is displayed', async ({ page, context }) => {
  console.log('Test Case: Justfly.com perk is displayed');
  const PERK_TITLE = 'Justfly.com';
  const DESCRIPTION = 'Up to 80% off flights';
  const COMMENT = 'Book Now!';
  const TITLE_JUSTFLY_PAGE = 'Cheap Flights, Airline tickets and Hotels - JustFly';
  await perksPage.waitForPerkDisplayed(PERK_TITLE);
  await perksPage.hoverOverToPerk(34);
  await perksPage.assertPerkTitleIsDisplayed(PERK_TITLE, PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed(DESCRIPTION, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(24, COMMENT);
  await perksPage.assertPerkShopNowButtonIsDisplayed(21);
  await perksPage.assertNewPageIsOpened(21, TITLE_JUSTFLY_PAGE, context, page);
});

// test('Russell Stover perk is displayed', async ({ page, context }) => {
//   console.log('Test Case: Russell Stover perk is displayed');
//   const perkTitle = 'Russell Stover';
//   const description = 'Chocolate makes every celebration better!';
//   const comment = 'Daily Deals!';
//   await perksPage.waitForPerkDisplayed(perkTitle);
//   await perksPage.hoverOverToPerk(35);
//   await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
//   await perksPage.assertPerkDescriptionIsDisplayed(description, description);
//   await perksPage.assertPerkCommentIsDisplayed(25, comment);
//   await perksPage.assertPerkShopNowButtonIsDisplayed(22);
// });

test('OfficeSuite perk is displayed', async ({ page, context }) => {
  console.log('Test Case: OfficeSuite perk is displayed');
  const PERK_TITLE = 'OfficeSuite';
  const DESCRIPTION = 'A full suite of office apps';
  const COMMENT = 'Choose your plan';
  const TITLE_OFFICE_SUITE_PAGE = 'Buy OfficeSuite | OfficeSuite';
  await perksPage.waitForPerkDisplayed(PERK_TITLE);
  await perksPage.hoverOverToPerk(35);
  await perksPage.assertPerkTitleIsDisplayed(PERK_TITLE, PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed(DESCRIPTION, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(25, COMMENT);
  await perksPage.assertPerkShopNowButtonIsDisplayed(22);
  await perksPage.assertNewPageIsOpened(22, TITLE_OFFICE_SUITE_PAGE, context, page);
});

test('Eyeglasses.com perk is displayed', async ({ page, context }) => {
  console.log('Test Case: Eyeglasses.com perk is displayed');
  const PERK_TITLE = 'Eyeglasses.com';
  const DESCRIPTION = 'Our Vision is Service!';
  const COMMENT = 'Huge Selection!';
  const TITLE_EYEGLASSES_PAGE = 'Glasses Online | Buy Prescription Eyewear | Eyeglasses.com';
  await perksPage.waitForPerkDisplayed(PERK_TITLE);
  await perksPage.hoverOverToPerk(36);
  await perksPage.assertPerkTitleIsDisplayed(PERK_TITLE, PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed(DESCRIPTION, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(26, COMMENT);
  await perksPage.assertPerkShopNowButtonIsDisplayed(23);
  await perksPage.assertNewPageIsOpened(23, TITLE_EYEGLASSES_PAGE, context, page);
});

test('Airport Parking perk is displayed', async ({ page, context }) => {
  console.log('Test Case: Airport Parking perk is displayed');
  const PERK_TITLE = 'Airport Parking';
  const DESCRIPTION = 'Search and compare the best rates on airport parking.';
  const COMMENT = 'Don’t overpay for parking.';
  const TITLE_AIRPORT_PAGE = 'Airport Parking: Search, Compare, Book ';
  await perksPage.waitForPerkDisplayed(PERK_TITLE);
  await perksPage.hoverOverToPerk(37);
  await perksPage.assertPerkTitleIsDisplayed(PERK_TITLE, PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed(DESCRIPTION, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(27, COMMENT);
  await perksPage.assertPerkShopNowButtonIsDisplayed(24);
  await perksPage.assertNewPageIsOpened(24, TITLE_AIRPORT_PAGE, context, page);
});

test('Sabjol Electronics perk is displayed', async ({ page, context }) => {
  console.log('Test Case: Sabjol Electronics perk is displayed');
  test.slow();
  const PERK_TITLE = 'Sabjol Electronics';
  const DESCRIPTION = 'Use code PPLSI for 10% off regular priced items.';
  const COMMENT = 'Save today!';
  const TITLE_SABJOL_PAGE = 'SABJOL - Shop Online For Everyday Best Deals and Save on Laptops, Smartphones, Headphones and Electronics';
  await perksPage.waitForPerkDisplayed(PERK_TITLE);
  await perksPage.hoverOverToPerk(38);
  await perksPage.assertPerkTitleIsDisplayed(PERK_TITLE, PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed(DESCRIPTION, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(28, COMMENT);
  await perksPage.assertPerkShopNowButtonIsDisplayed(25);
  await perksPage.assertNewPageIsOpened(25, TITLE_SABJOL_PAGE, context, page);
});

test('DiscoverCars.com perk is displayed', async ({ page, context }) => {
  console.log('Test Case: DiscoverCars.com perk is displayed');
  const PERK_TITLE = 'DiscoverCars.com';
  const DESCRIPTION = 'Award winning car rental comparison.';
  const COMMENT = 'Save up to 70%';
  const TITLE_DISCOVERY_CARS_PAGE = 'Best Car Rental Deals with Free Cancellation, Compare & Save! | Discover Cars';
  await perksPage.waitForPerkDisplayed(PERK_TITLE);
  await perksPage.hoverOverToPerk(39);
  await perksPage.assertPerkTitleIsDisplayed(PERK_TITLE, PERK_TITLE);
  await perksPage.assertPerkDescriptionIsDisplayed(DESCRIPTION, DESCRIPTION);
  await perksPage.assertPerkCommentIsDisplayed(29, COMMENT);
  await perksPage.assertPerkShopNowButtonIsDisplayed(26);
  await perksPage.assertNewPageIsOpened(26, TITLE_DISCOVERY_CARS_PAGE, context, page);
});
