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
  await perksPage.waitForPageIsLoaded();
});

test('Banner is displayed', async ({ page }) => {
  console.log('Test Case: Banner is displayed');
  test.slow();
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

test("Perk's Disclaimer", async ({ page }) => {
  console.log("Test Case: Verify Perk's Disclaimer");
  await perksPage.assertPerkDisclaimerIsDisplayed();
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
  test.slow();
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

test('Acer perk is displayed', async ({ page, context }) => {
  console.log('Test Case: Acer perk is displayed');
  test.slow();
  const perkTitle = 'Acer';
  const description = 'High performance and value are always in style.';
  const comment = 'Save Today!';
  const titleAcerPage = 'Acer Store - US | Laptops, Desktops, Chromebooks, Monitors and more!   | US Acer Store';
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(9);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed(description, description);
  await perksPage.assertPerkCommentIsDisplayed(0, comment);
  await perksPage.assertPerkShopNowButtonIsDisplayed(0);
  await perksPage.assertNewPageIsOpened(0, titleAcerPage, context, page);
});

test('John Addison Leadership perk is displayed', async ({ page, context }) => {
  console.log('Test Case: John Addison Leadership perk is displayed');
  const perkTitle = 'John Addison Leadership';
  const description = 'One time use code for 10% off. Use code 3THSPCVF during checkout.';
  const comment = 'Personal development for the rest of us!';
  const titleJALeadershipPage = 'LS Perks - Addison Leadership Group, INC.';
  await perksPage.waitForJALPerkDisplayed();
  await perksPage.hoverOverToPerk(10);
  await perksPage.assertJALPerkTitleIsDisplayed(perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed(description, description);
  await perksPage.assertPerkCommentIsDisplayed(1, comment);
  await perksPage.assertPerkShopNowButtonIsDisplayed(1);
  await perksPage.assertNewPageIsOpened(1, titleJALeadershipPage, context, page);
});

test('REXING perk is displayed', async ({ page, context }) => {
  console.log('Test Case: REXING perk is displayed');
  const perkTitle = 'REXING';
  const description = 'Outdoors, Home Security, Dash Cams and More!';
  const comment = 'Capture every moment!';
  const titleREXINGPage = 'Dash Cams from Rexing USA - Top Rated Front, Rear and Internal facing Dash Cameras w/ GPS, Wifi Support and more.';
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(11);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed(description, description);
  await perksPage.assertPerkCommentIsDisplayed(2, comment);
  await perksPage.assertPerkShopNowButtonIsDisplayed(2);
  await perksPage.assertNewPageIsOpened(2, titleREXINGPage, context, page);
});

test('Healthcare RXCard perk is displayed', async ({ page, context }) => {
  test.slow();
  console.log('Test Case: Healthcare RXCard perk is displayed');
  const perkTitle = 'Healthcare RXCard';
  const description = 'Shop discounts at more than 35,000 pharmacies';
  const comment = 'Save up to 80%!';
  const titleRXCardPage = 'Drug Prices and Prescription Coupons';
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(12);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed(description, description);
  await perksPage.assertPerkCommentIsDisplayed(3, comment);
  await perksPage.assertPerkShopNowButtonIsDisplayed(3);
  await perksPage.assertNewPageIsOpened(3, titleRXCardPage, context, page);
});

test('Call a Doctor Plus perk is displayed', async ({ page, context }) => {
  console.log('Test Case: Call a Doctor Plus perk is displayed');
  const perkTitle = 'Call a Doctor Plus';
  const description = '24/7 access to quality healthcare.';
  const comment = 'One Low Monthly Price!';
  const titleDoctorPage = 'Call A Doctor Plus | Unlimited, 24/7 Access to the Healthcare You Need';
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(13);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed(description, description);
  await perksPage.assertPerkCommentIsDisplayed(4, comment);
  await perksPage.assertPerkShopNowButtonIsDisplayed(4);
  await perksPage.assertNewPageIsOpened(4, titleDoctorPage, context, page);
});

test('Diamond Physicians perk is displayed', async ({ page, context }) => {
  test.slow();
  console.log('Test Case: Diamond Physicians perk is displayed');
  const perkTitle = 'Diamond Physicians';
  const description = 'Your future of primary care has arrived';
  const comment = 'One Low Monthly Price!';
  const titleDiamondPage = 'LegalShield Associates Enrollment Instructions - Diamond';
  const titleMyLSEPage = 'MyLSE';
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(14);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed(description, description);
  await perksPage.assertPerkCommentIsDisplayed(5, comment);
  await perksPage.assertPerkMoreDetailsIsDisplayed(0);
  await perksPage.assertNewPageIsOpened2(0, titleMyLSEPage, context, page);
  await perksPage.assertPerkShopNowButtonIsDisplayed(5);
  await perksPage.assertNewPageIsOpened(5, titleDiamondPage, context, page);
});

test('Unity Insurance Partners perk is displayed', async ({ page }) => {
  console.log('Test Case: Unity Insurance Partners perk is displayed');
  const perkTitle = 'Unity Insurance Partners';
  const description = 'Insuring customers for over 100 years';
  const comment = 'Exclusive Pricing!';
  const titleUnityPage = 'Unity Insurance Partners';
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(15);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed(description, description);
  await perksPage.assertPerkCommentIsDisplayed(6, comment);
  await perksPage.assertPerkMoreDetailsIsDisplayed(1);
  await perksPage.clickOnbMoreDetailsBtn(1);
  await perksPage.assertPageHasTitle(titleUnityPage);
});

test('1-800 Flowers perk is displayed', async ({ page, context }) => {
  console.log('Test Case: 1-800 Flowers perk is displayed');
  const perkTitle = '1-800 Flowers';
  const description = 'Use code LSC20 at checkout';
  const comment = '15% Discount!';
  const titleFlowersPage = 'Flowers | Flower Delivery | Fresh Flowers Online | 1-800-Flowers.com';
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(16);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed2(7, description);
  await perksPage.assertPerkCommentIsDisplayed(7, comment);
  await perksPage.assertPerkShopNowButtonIsDisplayed(6);
  await perksPage.assertNewPageIsOpened(6, titleFlowersPage, context, page);
});

test('Harry & David perk is displayed', async ({ page, context }) => {
  console.log('Test Case: Harry & David perk is displayed');
  const perkTitle = 'Harry & David';
  const description = 'Use code LSC20 at checkout';
  const comment = '15% Discount!';
  const titleHDPage = 'Online Gift Baskets, Fruit and Food Gifts & Wine Clubs | Harry & David';
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(17);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed2(8, description);
  await perksPage.assertPerkCommentIsDisplayed(8, comment);
  await perksPage.assertPerkShopNowButtonIsDisplayed(7);
  await perksPage.assertNewPageIsOpened(7, titleHDPage, context, page);
});

test('1-800 Baskets perk is displayed', async ({ page, context }) => {
  console.log('Test Case: 1-800 Baskets perk is displayed');
  const perkTitle = '1-800 Baskets';
  const description = 'Use code LSC20 at checkout';
  const comment = '15% Discount!';
  const titleBasketsPage = 'Gift Baskets and Gourmet Food | 1800Baskets.com';
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(18);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed2(9, description);
  await perksPage.assertPerkCommentIsDisplayed(9, comment);
  await perksPage.assertPerkShopNowButtonIsDisplayed(8);
  await perksPage.assertNewPageIsOpened(8, titleBasketsPage, context, page);
});

test("Shari's Berries perk is displayed", async ({ page, context }) => {
  console.log("Test Case: Shari's Berries perk is displayed");
  const perkTitle = "Shari's Berries";
  const description = 'Use code LSC20 at checkout';
  const comment = '15% Discount!';
  const titleBerriesPage = "Chocolate Covered Strawberries Delivery Near Me | Shari's Berries";
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(19);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed2(10, description);
  await perksPage.assertPerkCommentIsDisplayed(10, comment);
  await perksPage.assertPerkShopNowButtonIsDisplayed(9);
  await perksPage.assertNewPageIsOpened(9, titleBerriesPage, context, page);
});

test('AT&T perk is displayed', async ({ page, context }) => {
  console.log('Test Case: AT&T perk is displayed');
  const perkTitle = 'AT&T';
  const description = 'At any AT&T store give representative code FAN:04206448, to enroll';
  const comment = '20% Discount and More!';
  const titleATTPage = 'AT&T Signature Program | AT&T';
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(20);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed(description, description);
  await perksPage.assertPerkCommentIsDisplayed(11, comment);
  await perksPage.assertPerkShopNowButtonIsDisplayed(10);
  await perksPage.assertNewPageIsOpened(10, titleATTPage, context, page);
});

test('Best Buy perk is displayed', async ({ page, context }) => {
  console.log('Test Case: Best Buy perk is displayed');
  const perkTitle = 'Best Buy';
  const description = 'Use code LSAP2021 in the registration code section during sign-up';
  const comment = 'Exclusive Discounts!';
  const titleBestBuyPage = 'Best Buy Business - Sign In';
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(21);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed(description, description);
  await perksPage.assertPerkCommentIsDisplayed(12, comment);
  await perksPage.assertPerkShopNowButtonIsDisplayed(11);
  await perksPage.assertNewPageIsOpened(11, titleBestBuyPage, context, page);
});

test('National & Enterprise perk is displayed', async ({ page }) => {
  console.log('Test Case: National & Enterprise perk is displayed');
  const perkTitle = 'National & Enterprise';
  const description = 'Use code XZ51449 at checkout';
  const comment = 'Discount Pricing!';
  const titleEnterprisePage = 'Associate Office';
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(22);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed(description, description);
  await perksPage.assertPerkCommentIsDisplayed(13, comment);
  await perksPage.assertPerkMoreDetailsIsDisplayed(2);
  await perksPage.clickOnbMoreDetailsBtn(2);
  await perksPage.assertPageHasTitle(titleEnterprisePage);
});

test('ODP Business Solutions perk is displayed', async ({ page, context }) => {
  console.log('Test Case:ODP Business Solutions perk is displayed');
  const perkTitle = 'ODP Business Solutions';
  const description = 'Office furniture, supplies, electronics, print services & more';
  const comment = 'Exclusive Discounts!';
  const titleBusSolPage = 'ODP Business Solutions';
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(23);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed(description, description);
  await perksPage.assertPerkCommentIsDisplayed(14, comment);
  await perksPage.assertPerkShopNowButtonIsDisplayed(12);
  await perksPage.assertNewPageIsOpened(12, titleBusSolPage, context, page);
  await perksPage.assertBusSolNewPageIsOpened(context, page);
  await perksPage.assertBusSolNewPageIsOpened2(context, page);
});

test('HP Inc. perk is displayed', async ({ page, context }) => {
  console.log('Test Case: HP Inc. perk is displayed');
  const perkTitle = 'HP Inc.';
  const description = 'Everyday discounts up to 35%';
  const comment = 'Exclusive Discounts!';
  const titleHPPage = 'HP Employee Purchase Program';
  const titleMyLSEPage = 'MyLSE';
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(25);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed(description, description);
  await perksPage.assertPerkCommentIsDisplayed(15, comment);
  await perksPage.assertPerkShopNowButtonIsDisplayed(13);
  await perksPage.assertNewPageIsOpened(13, titleHPPage, context, page);
  await perksPage.assertPerkMoreDetailsIsDisplayed(3);
  await perksPage.assertNewPageIsOpened2(3, titleMyLSEPage, context, page);
});

test('JoS A. Bank. perk is displayed', async ({ page, context }) => {
  console.log('Test Case: JoS A. Bank perk is displayed');
  const perkTitle = 'JoS A. Bank';
  const description = 'See Our New Lower Prices & Save Today';
  const comment = 'Exclusive Discounts!';
  const titleJoSBankPage = 'Coupon Page';
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(26);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed(description, description);
  await perksPage.assertPerkCommentIsDisplayed(16, comment);
  await perksPage.assertPerkShopNowButtonIsDisplayed(14);
  await perksPage.assertNewPageIsOpened(14, titleJoSBankPage, context, page);
});

test("Men's Wearhouse perk is displayed", async ({ page, context }) => {
  console.log("Test Case: Men's Wearhouse perk is displayed");
  const perkTitle = "Men's Wearhouse";
  const description = "Shop Men's Wearhouse New Arrivals & Collection Today";
  const comment = 'Exclusive Discounts!';
  const titleWearhousePage = 'Coupon Page';
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(27);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed(description, description);
  await perksPage.assertPerkCommentIsDisplayed(17, comment);
  await perksPage.assertPerkShopNowButtonIsDisplayed(15);
  await perksPage.assertNewPageIsOpened(15, titleWearhousePage, context, page);
});

test('Moores perk is displayed', async ({ page, context }) => {
  console.log('Test Case: Moores perk is displayed');
  const perkTitle = 'Moores';
  const description = 'Moores has been outfitting men for more than 30 years';
  const comment = 'Exclusive Discounts!';
  const titleMooresPage = 'Coupon Page';
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(28);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed(description, description);
  await perksPage.assertPerkCommentIsDisplayed(18, comment);
  await perksPage.assertPerkShopNowButtonIsDisplayed(16);
  await perksPage.assertNewPageIsOpened(16, titleMooresPage, context, page);
});

test('The Associate Store perk is displayed', async ({ page, context }) => {
  console.log('Test Case: The Associate Store perk is displayed');
  const perkTitle = 'The Associate Store';
  const description = 'Use code ADVANTAGE+ at checkout';
  const comment = '10% Discount on Select Items!';
  const titleAssociateStorePage = 'LegalShield Associate Supplies – The PPLSI Associate Store';
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(29);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed(description, description);
  await perksPage.assertPerkCommentIsDisplayed(19, comment);
  await perksPage.assertPerkShopNowButtonIsDisplayed(17);
  await perksPage.assertNewPageIsOpened(17, titleAssociateStorePage, context, page);
});

test('Jack Canfield Store perk is displayed', async ({ page, context }) => {
  console.log('Test Case: Jack Canfield Store perk is displayed');
  const perkTitle = 'Jack Canfield Store';
  const description = 'Access free resources and save 20% in the Success Store!';
  const comment = 'Success Store Discount!';
  const titleJCStorePage = 'Welcome LegalShield Associates - Jack Canfield';
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(30);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed(description, description);
  await perksPage.assertPerkCommentIsDisplayed(20, comment);
  await perksPage.assertPerkShopNowButtonIsDisplayed(18);
  await perksPage.assertNewPageIsOpened(18, titleJCStorePage, context, page);
});

test('John Maxwell Store perk is displayed', async ({ page, context }) => {
  console.log('Test Case: John Maxwell Store perk is displayed');
  const perkTitle = 'John Maxwell Store';
  const description = 'New York Times Best Selling Author, coach, and speaker';
  const comment = 'Discount on Select Items!';
  const titleJMStorePage = 'John Maxwell Company x Leaal Shield';
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(31);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed(description, description);
  await perksPage.assertPerkCommentIsDisplayed(21, comment);
  await perksPage.assertPerkShopNowButtonIsDisplayed(19);
  await perksPage.assertNewPageIsOpened(19, titleJMStorePage, context, page);
});

test('Don Yaeger Store perk is displayed', async ({ page, context }) => {
  console.log('Test Case: Don Yaeger Store perk is displayed');
  test.slow();
  const perkTitle = 'Don Yaeger Store';
  const description = 'Don Yaeger Use code: legalshield during checkout!';
  const comment = '20% Discount!';
  const titleDYStorePage = 'Don Yaeger » Award-Winning Leadership Speaker & New York Times Best-Selling Author';
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(32);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed(description, description);
  await perksPage.assertPerkCommentIsDisplayed(22, comment);
  await perksPage.assertPerkShopNowButtonIsDisplayed(20);
  await perksPage.assertNewPageIsOpened(20, titleDYStorePage, context, page);
});

test('Liberty Mutual perk is displayed', async ({ page }) => {
  console.log('Test Case: Liberty Mutual perk is displayed');
  const perkTitle = 'Liberty Mutual';
  const description = 'Customized insurance coverage!';
  const comment = 'Request a quote!';
  const titleLibertyPage = 'Associate Office';
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(33);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed(description, description);
  await perksPage.assertPerkCommentIsDisplayed(23, comment);
  await perksPage.assertPerkMoreDetailsIsDisplayed(4);
  await perksPage.clickOnbMoreDetailsBtn(4);
  await perksPage.assertPageHasTitle(titleLibertyPage);
});

test('Justfly.com perk is displayed', async ({ page, context }) => {
  console.log('Test Case: Justfly.com perk is displayed');
  const perkTitle = 'Justfly.com';
  const description = 'Up to 80% off flights';
  const comment = 'Book Now!';
  const titleJustflyPage = 'Cheap Flights, Airline tickets and Hotels - JustFly';
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(34);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed(description, description);
  await perksPage.assertPerkCommentIsDisplayed(24, comment);
  await perksPage.assertPerkShopNowButtonIsDisplayed(21);
  await perksPage.assertNewPageIsOpened(21, titleJustflyPage, context, page);
});

test('Russell Stover perk is displayed', async ({ page, context }) => {
  console.log('Test Case: Russell Stover perk is displayed');
  const perkTitle = 'Russell Stover';
  const description = 'Chocolate makes every celebration better!';
  const comment = 'Daily Deals!';
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(35);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed(description, description);
  await perksPage.assertPerkCommentIsDisplayed(25, comment);
  await perksPage.assertPerkShopNowButtonIsDisplayed(22);
});

test('OfficeSuite perk is displayed', async ({ page, context }) => {
  console.log('Test Case: OfficeSuite perk is displayed');
  const perkTitle = 'OfficeSuite';
  const description = 'A full suite of office apps';
  const comment = 'Choose your plan';
  const titleOfficeSuitePage = 'Buy OfficeSuite | OfficeSuite';
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(36);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed(description, description);
  await perksPage.assertPerkCommentIsDisplayed(26, comment);
  await perksPage.assertPerkShopNowButtonIsDisplayed(23);
  await perksPage.assertNewPageIsOpened(23, titleOfficeSuitePage, context, page);
});

test('Eyeglasses.com perk is displayed', async ({ page, context }) => {
  console.log('Test Case: Eyeglasses.com perk is displayed');
  const perkTitle = 'Eyeglasses.com';
  const description = 'Our Vision is Service!';
  const comment = 'Huge Selection!';
  const titleEyeglassesPage = 'Glasses Online | Buy Prescription Eyewear | Eyeglasses.com';
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(37);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed(description, description);
  await perksPage.assertPerkCommentIsDisplayed(27, comment);
  await perksPage.assertPerkShopNowButtonIsDisplayed(24);
  await perksPage.assertNewPageIsOpened(24, titleEyeglassesPage, context, page);
});

test('Airport Parking perk is displayed', async ({ page, context }) => {
  console.log('Test Case: Airport Parking perk is displayed');
  const perkTitle = 'Airport Parking';
  const description = 'Search and compare the best rates on airport parking.';
  const comment = 'Don’t overpay for parking.';
  const titleAirportPage = 'Airport Parking: Search, Compare, Book ';
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(38);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed(description, description);
  await perksPage.assertPerkCommentIsDisplayed(28, comment);
  await perksPage.assertPerkShopNowButtonIsDisplayed(25);
  await perksPage.assertNewPageIsOpened(25, titleAirportPage, context, page);
});

test('Sabjol Electronics perk is displayed', async ({ page, context }) => {
  console.log('Test Case: Sabjol Electronics perk is displayed');
  test.slow();
  const perkTitle = 'Sabjol Electronics';
  const description = 'Use code PPLSI for 10% off regular priced items.';
  const comment = 'Save today!';
  const titleSabjolPage = 'SABJOL - Shop Online For Everyday Best Deals and Save on Laptops, Smartphones, Headphones and Electronics';
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(39);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed(description, description);
  await perksPage.assertPerkCommentIsDisplayed(29, comment);
  await perksPage.assertPerkShopNowButtonIsDisplayed(26);
  await perksPage.assertNewPageIsOpened(26, titleSabjolPage, context, page);
});

test('DiscoverCars.com perk is displayed', async ({ page, context }) => {
  console.log('Test Case: DiscoverCars.com perk is displayed');
  const perkTitle = 'DiscoverCars.com';
  const description = 'Award winning car rental comparison.';
  const comment = 'Save up to 70%';
  const titleDiscoverCarsPage = 'Best Car Rental Deals with Free Cancellation, Compare & Save! | Discover Cars';
  await perksPage.waitForPerkDisplayed(perkTitle);
  await perksPage.hoverOverToPerk(40);
  await perksPage.assertPerkTitleIsDisplayed(perkTitle, perkTitle);
  await perksPage.assertPerkDescriptionIsDisplayed(description, description);
  await perksPage.assertPerkCommentIsDisplayed(30, comment);
  await perksPage.assertPerkShopNowButtonIsDisplayed(27);
  await perksPage.assertNewPageIsOpened(27, titleDiscoverCarsPage, context, page);
});
