import { BrowserContext, expect, Page } from '@playwright/test';
import UrlsUtils from '../../../utils/urls.utils';
import { LoginPage } from '../login/login.page';

// ========================== Selectors ==========================
const BANNER = '#banner-perks';
const BANNER_TITLE = '#banner-perks h2';
const BANNER_DESCRIPTION = '#banner-perks span';
const TEXT_PERKS = '#text-perks p';
const FEATURED_PERK_TITLE = '//*[text()="Featured Offer"]';
const FEATURED_PERK_DESCRIPTION_P1 = '//*[@class="information"]//p[1]';
const FEATURED_PERK_DESCRIPTION_P2 = '//*[@class="information"]//p[2]';
const FEATURED_PERK_DESCRIPTION_P3 = '//*[@class="information"]//p[3]';
const FEATURED_PERK_IMAGE = '#featured-perks .lsux-col.image';
const ASSOCIATED_PERKS = '//p[text()="ASSOCIATEPerks"]';
const AVAIL_CAN_TEXT = '#perks .lsux-col.canada span';
const AVAIL_CAN_IMG = '#perks .lsux-col.canada img';
const LBL_PERK_DISCLAIMER = '#perks > div:nth-child(3) p';
const LBL_PERK_JOHN_ADDISON_LEADERSHIP = '(//p[text()="John Addison Leadership"])[2]';
const LBL_DESCRIPTION = '//div/h1';
const LBL_COMMENT = '.info p';
const BTN_SHOP_NOW = '.shop-now';
const BTN_MORE_DETAILS = "//div/a[@class='more-details']";

/**
 *
 * @export
 * @class PerksPage
 * @extends {LoginPage}
 */
export class PerksPage extends LoginPage {
  // ========================== Process Methods ==========================
  /**
   * @param {string} perk
   * @memberof PerksPage
   */
  waitForPerk = async (perk: string): Promise<void> => {
    await this.page.waitForSelector(`//*[text()="${perk}"]`, { timeout: 40000 });
  };
  /**
   * @param {string} perk
   * @memberof PerksPage
   */

  waitForPerkDisplayed = async (perk: string): Promise<void> => {
    console.log(' - perksPage.waitForPerkDisplayed');
    await this.waitForPerk(perk);
  };

  waitForJALPerkDisplayed = async (): Promise<void> => {
    console.log(' - perksPage.waitForPerkDisplayed');
    await this.page.waitForSelector(LBL_PERK_JOHN_ADDISON_LEADERSHIP);
  };

  waitForPageIsLoaded = async (): Promise<void> => {
    console.log(' - perksPage.waitForPageIsLoaded');
    await this.page.waitForSelector(BANNER_TITLE);
  };

  // ========================== Navigate Methods ==========================

  hoverOverToPerk = async (i = 0): Promise<void> => {
    console.log(' - perksPage.hoverOverToPerk');
    const image = this.page.locator('//img').nth(i);
    await image.hover();
    this.page.waitForTimeout(3000);
  };

  // ========================== Click Methods ==========================

  clickOnbMoreDetailsBtn = async (i = 0): Promise<void> => {
    console.log(' - perksPage.clickOnbMoreDetailsBtn');
    await this.page.locator(BTN_MORE_DETAILS).nth(i).click();
  };

  // ========================== Assertion Methods ==========================

  assertPerksPageUrl = async (): Promise<void> => {
    console.log(' - perksPage.assertPerksPageUrl');
    // Confirm Perks Page URL is reached
    await expect(this.page).toHaveURL(UrlsUtils.channelsUrls.perks.url + '?login_redirect=1');
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  assertBannerIsDisplayed = async (): Promise<void> => {
    console.log(' - perksPage.assertBannerIsDisplayed');
    await this.page.waitForSelector(BANNER);
    await this.assertElementIsVisible(BANNER);
  };

  assertBannerTitleText = async (): Promise<void> => {
    console.log(' - perksPage.assertBannerTitleText');
    await this.page.waitForSelector(BANNER_TITLE);
    const STR_TITLE = 'ASSOCIATEPerks';
    await this.assertElementHasText(BANNER_TITLE, STR_TITLE);
  };

  assertBannerDescriptionText = async (): Promise<void> => {
    console.log(' - perksPage.assertBannerDescriptionText');
    await this.page.waitForSelector(BANNER_DESCRIPTION);
    const STR_DESCRIPTION = 'Exclusive Discounts to take your business to the next level';
    await this.assertElementHasText(BANNER_DESCRIPTION, STR_DESCRIPTION);
  };

  assertPerkText = async (): Promise<void> => {
    console.log(' - perksPage.assertPerkText');
    await this.page.waitForSelector(TEXT_PERKS);
    const STR_TITLE =
      'From office supplies to health care, PPLSI has partnered with these best in class services to help you manage and grow your business.';
    await this.assertElementHasText(TEXT_PERKS, STR_TITLE);
  };

  assertFeaturedOfferTitleText = async (): Promise<void> => {
    console.log(' - perksPage.assertFeaturedOfferTitleText');
    await this.page.waitForSelector(FEATURED_PERK_TITLE);
    await this.assertElementIsVisible(FEATURED_PERK_TITLE);
  };

  assertFeaturedPerkDescriptionText = async (): Promise<void> => {
    console.log(' - perksPage.assertFeaturedPerkDescriptionText');
    await this.page.waitForSelector(BANNER_DESCRIPTION);
    const STR_TITLE1 = 'John Addison Leadership';
    await this.assertElementHasText(FEATURED_PERK_DESCRIPTION_P1, STR_TITLE1);
    const STR_TITLE2 = 'Use code 3THSPCVF for 10% off during checkout. (This is a one-time use code.)';
    await this.assertElementHasText(FEATURED_PERK_DESCRIPTION_P2, STR_TITLE2);
    const STR_TITLE3 =
      'If you’re a unifier and you love to help others. If you understand that when we help others get what they want then we get what we want, I’d love for you to learn more about #MissionLeadership. I think we can do great things together.';
    await this.assertElementHasText(FEATURED_PERK_DESCRIPTION_P3, STR_TITLE3);
  };

  assertFeaturedPerkImageDisplayed = async (): Promise<void> => {
    console.log(' - perksPage.assertFeaturedPerkImageDisplayed');
    await this.page.waitForSelector(FEATURED_PERK_IMAGE);
    await this.assertElementIsVisible(FEATURED_PERK_IMAGE);
  };

  assertASSOCIATEPerksDisplayed = async (): Promise<void> => {
    console.log(' - perksPage.assertASSOCIATEPerksDisplayed');
    await this.page.waitForSelector(ASSOCIATED_PERKS);
    await this.assertElementIsVisible(ASSOCIATED_PERKS);
  };

  assertAvailableCanDisplayed = async (): Promise<void> => {
    console.log(' - perksPage.assertAvailableCanDisplayed');
    await this.page.waitForSelector(AVAIL_CAN_TEXT);
    await this.assertElementIsVisible(AVAIL_CAN_TEXT);
  };

  assertAvailableCanImageDisplayed = async (): Promise<void> => {
    console.log(' - perksPage.assertAvailableCanImageDisplayed');
    await this.page.waitForSelector(AVAIL_CAN_IMG);
    await this.assertElementIsVisible(AVAIL_CAN_IMG);
  };

  assertPerkTitleIsDisplayed = async (perk: string, perkTitle: string): Promise<void> => {
    console.log(' - perksPage.assertPerkTitleIsDisplayed ');
    await expect(this.page.locator(`//*[text()="${perk}"]`)).toContainText(perkTitle);
  };

  assertJALPerkTitleIsDisplayed = async (perkTitle: string): Promise<void> => {
    console.log(' - perksPage.assertPerkTitleIsDisplayed ');
    await expect(this.page.locator(LBL_PERK_JOHN_ADDISON_LEADERSHIP)).toContainText(perkTitle);
  };

  assertPerkDescriptionIsDisplayed = async (perkDescription: string, description: string): Promise<void> => {
    console.log(' - perksPage.assertPerkDescriptionIsDisplayed');
    await expect(this.page.locator(`//*[text()="${perkDescription}"]`)).toContainText(description);
  };

  assertPerkDescriptionIsDisplayed2 = async (i = 0, description: string): Promise<void> => {
    console.log(' - perksPage.assertPerkDescriptionIsDisplayed2');
    await expect(this.page.locator(LBL_DESCRIPTION).nth(i)).toContainText(description);
  };

  assertPerkCommentIsDisplayed = async (i = 0, perkComment: string): Promise<void> => {
    console.log(' - perksPage.assertPerkCommentIsDisplayed');
    await expect(this.page.locator(LBL_COMMENT).nth(i)).toContainText(perkComment);
  };

  assertPerkShopNowButtonIsDisplayed = async (i = 0): Promise<void> => {
    console.log(' - perksPage.assertPerkShopNowButtonIsDisplayed');
    await expect(this.page.locator(BTN_SHOP_NOW).nth(i)).toContainText('Shop Now');
    await this.page.locator(BTN_SHOP_NOW).nth(i).isVisible();
    await this.page.locator(BTN_SHOP_NOW).nth(i).isEnabled();
  };

  assertPerkMoreDetailsIsDisplayed = async (i = 0): Promise<void> => {
    console.log(' - perksPage.assertPerkMoreDetailsIsDisplayed');
    await expect(this.page.locator(BTN_MORE_DETAILS).nth(i)).toContainText('More Details');
    await this.page.locator(BTN_MORE_DETAILS).nth(i).isVisible();
    await this.page.locator(BTN_MORE_DETAILS).nth(i).isEnabled();
  };

  assertPerkDisclaimerIsDisplayed = async (): Promise<void> => {
    console.log(' - perksPage.assertPerkDisclaimerIsDisplayed');
    await this.page.waitForSelector(LBL_PERK_DISCLAIMER);
    await expect(this.page.locator(LBL_PERK_DISCLAIMER)).toContainText(
      'This site contains affiliate links to products and services. We may receive a commission for purchases made through these links.'
    );
    await this.page.locator(LBL_PERK_DISCLAIMER).isVisible();
  };

  assertNewPageIsOpened = async (i = 0, title: string, context: BrowserContext, page: Page): Promise<void> => {
    console.log(' - perksPage.assertNewPageIsOpened');
    const [newPage] = await Promise.all([context.waitForEvent('page'), page.locator('.shop-now').nth(i).click()]);
    await newPage.waitForLoadState();
    await expect(newPage).toHaveTitle(title);
  };

  assertNewPageIsOpened2 = async (i = 0, title: string, context: BrowserContext, page: Page): Promise<void> => {
    console.log(' - perksPage.assertNewPageIsOpened2');
    const [newPage] = await Promise.all([context.waitForEvent('page'), page.locator("//div/a[@class='more-details']").nth(i).click()]);
    await newPage.waitForLoadState();
    await expect(newPage).toHaveTitle(title);
  };

  assertBusSolNewPageIsOpened = async (context: BrowserContext, page: Page): Promise<void> => {
    console.log(' - perksPage.assertBusSolNewPageIsOpened');
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.locator('.card-perks button span').click(),
      page.locator('a:has-text("Discount Program")').click(),
    ]);
    await newPage.waitForLoadState();
    await this.page.locator('body > embed').isVisible();
  };

  assertBusSolNewPageIsOpened2 = async (context: BrowserContext, page: Page): Promise<void> => {
    console.log(' - perksPage.assertBusSolNewPageIsOpened2');
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.waitForSelector('.card-perks button span'),
      page.locator('.card-perks button span').click(),
      page.locator('a:has-text("Discount Categories")').click(),
    ]);
    await newPage.waitForLoadState();
    await this.page.locator('body > embed').isVisible();
  };

  assertPageHasTitle = async (title: string): Promise<void> => {
    console.log(' - perksPage.assertPageHasTitle');
    await expect(this.page).toHaveTitle(title);
  };
}
