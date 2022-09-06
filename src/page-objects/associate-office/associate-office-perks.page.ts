import { BrowserContext, expect, Page } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { LoginPage } from '../login/login.page';

// ========================== Selectors ==========================
const banner: string = '#banner-perks';
const bannerTitle: string = '#banner-perks h2';
const bannerDescription: string = '#banner-perks span';
const textPerks: string = '#text-perks p';
const featuredPerkTitle: string = '//*[text()="Featured Offer"]';
const featuredPerkDescriptionP1: string = '//*[@class="information"]//p[1]';
const featuredPerkDescriptionP2: string = '//*[@class="information"]//p[2]';
const featuredPerkDescriptionP3: string = '//*[@class="information"]//p[3]';
const featuredPerkImage: string = '#featured-perks .lsux-col.image';
const associatedPerks: string = '//p[text()="ASSOCIATEPerks"]';
const availCanText: string = '#perks .lsux-col.canada span';
const availCanImg: string = '#perks .lsux-col.canada img';
const lblPerkDisclaimer: string = '#perks > div:nth-child(3) p';
const lblPerkJohnAddisonLeadership: string = '(//p[text()="John Addison Leadership"])[2]';
const lblDescription: string = '//div/h1';
const lblComment: string = '.info p';
const btnShopNow: string = '.shop-now';
const btnMoreDetails: string = "//div/a[@class='more-details']";

// eslint-disable-next-line valid-jsdoc
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
    await this.page.waitForSelector(lblPerkJohnAddisonLeadership);
  };

  waitForPageIsLoaded = async (): Promise<void> => {
    console.log(' - perksPage.waitForPageIsLoaded');
    await this.page.waitForSelector(bannerTitle);
  };

  // ========================== Navigate Methods ==========================

  hoverOverToPerk = async (i: number = 0): Promise<void> => {
    console.log(' - perksPage.hoverOverToPerk');
    const image = this.page.locator('//img').nth(i);
    await image.hover();
    this.page.waitForTimeout(3000);
  };

  // ========================== Click Methods ==========================

  clickOnbMoreDetailsBtn = async (i: number = 0): Promise<void> => {
    console.log(' - perksPage.clickOnbMoreDetailsBtn');
    await this.page.locator(btnMoreDetails).nth(i).click();
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
    await this.page.waitForSelector(banner);
    await this.assertElementIsVisible(banner);
  };

  assertBannerTitleText = async (): Promise<void> => {
    console.log(' - perksPage.assertBannerTitleText');
    await this.page.waitForSelector(bannerTitle);
    const strTitle = 'ASSOCIATEPerks';
    await this.assertElementHasText(bannerTitle, strTitle);
  };

  assertBannerDescriptionText = async (): Promise<void> => {
    console.log(' - perksPage.assertBannerDescriptionText');
    await this.page.waitForSelector(bannerDescription);
    const strDescription = 'Exclusive Discounts to take your business to the next level';
    await this.assertElementHasText(bannerDescription, strDescription);
  };

  assertPerkText = async (): Promise<void> => {
    console.log(' - perksPage.assertPerkText');
    await this.page.waitForSelector(textPerks);
    const strTitle =
      'From office supplies to health care, PPLSI has partnered with these best in class services to help you manage and grow your business.';
    await this.assertElementHasText(textPerks, strTitle);
  };

  assertFeaturedOfferTitleText = async (): Promise<void> => {
    console.log(' - perksPage.assertFeaturedOfferTitleText');
    await this.page.waitForSelector(featuredPerkTitle);
    await this.assertElementIsVisible(featuredPerkTitle);
  };

  assertFeaturedPerkDescriptionText = async (): Promise<void> => {
    console.log(' - perksPage.assertFeaturedPerkDescriptionText');
    await this.page.waitForSelector(bannerDescription);
    const strTitle1 = 'John Addison Leadership';
    await this.assertElementHasText(featuredPerkDescriptionP1, strTitle1);
    const strTitle2 = 'Use code 3THSPCVF for 10% off during checkout. (This is a one-time use code.)';
    await this.assertElementHasText(featuredPerkDescriptionP2, strTitle2);
    const strTitle3 =
      'If you’re a unifier and you love to help others. If you understand that when we help others get what they want then we get what we want, I’d love for you to learn more about #MissionLeadership. I think we can do great things together.';
    await this.assertElementHasText(featuredPerkDescriptionP3, strTitle3);
  };

  assertFeaturedPerkImageDisplayed = async (): Promise<void> => {
    console.log(' - perksPage.assertFeaturedPerkImageDisplayed');
    await this.page.waitForSelector(featuredPerkImage);
    await this.assertElementIsVisible(featuredPerkImage);
  };

  assertASSOCIATEPerksDisplayed = async (): Promise<void> => {
    console.log(' - perksPage.assertASSOCIATEPerksDisplayed');
    await this.page.waitForSelector(associatedPerks);
    await this.assertElementIsVisible(associatedPerks);
  };

  assertAvailableCanDisplayed = async (): Promise<void> => {
    console.log(' - perksPage.assertAvailableCanDisplayed');
    await this.page.waitForSelector(availCanText);
    await this.assertElementIsVisible(availCanText);
  };

  assertAvailableCanImageDisplayed = async (): Promise<void> => {
    console.log(' - perksPage.assertAvailableCanImageDisplayed');
    await this.page.waitForSelector(availCanImg);
    await this.assertElementIsVisible(availCanImg);
  };

  assertPerkTitleIsDisplayed = async (perk: string, perkTitle: string): Promise<void> => {
    console.log(' - perksPage.assertPerkTitleIsDisplayed ');
    await expect(this.page.locator(`//*[text()="${perk}"]`)).toContainText(perkTitle);
    console.log(await this.page.locator(`//*[text()="${perk}"]`).textContent());
  };

  assertJALPerkTitleIsDisplayed = async (perkTitle: string): Promise<void> => {
    console.log(' - perksPage.assertPerkTitleIsDisplayed ');
    await expect(this.page.locator(lblPerkJohnAddisonLeadership)).toContainText(perkTitle);
    console.log(await this.page.locator(lblPerkJohnAddisonLeadership).textContent());
  };

  assertPerkDescriptionIsDisplayed = async (perkDescription: string, description: string): Promise<void> => {
    console.log(' - perksPage.assertPerkDescriptionIsDisplayed');
    await expect(this.page.locator(`//*[text()="${perkDescription}"]`)).toContainText(description);
    console.log(await this.page.locator(`//*[text()="${perkDescription}"]`).textContent());
  };

  assertPerkDescriptionIsDisplayed2 = async (i: number = 0, description: string): Promise<void> => {
    console.log(' - perksPage.assertPerkDescriptionIsDisplayed2');
    await expect(this.page.locator(lblDescription).nth(i)).toContainText(description);
    console.log(await this.page.locator(lblDescription).nth(i).textContent());
  };

  assertPerkCommentIsDisplayed = async (i: number = 0, perkComment: string): Promise<void> => {
    console.log(' - perksPage.assertPerkCommentIsDisplayed');
    await expect(this.page.locator(lblComment).nth(i)).toContainText(perkComment);
    console.log(await this.page.locator(lblComment).nth(i).textContent());
  };

  assertPerkShopNowButtonIsDisplayed = async (i: number = 0): Promise<void> => {
    console.log(' - perksPage.assertPerkShopNowButtonIsDisplayed');
    await expect(this.page.locator(btnShopNow).nth(i)).toContainText('Shop Now');
    console.log(await this.page.locator(btnShopNow).nth(i).textContent());
    await this.page.locator(btnShopNow).nth(i).isVisible();
    await this.page.locator(btnShopNow).nth(i).isEnabled();
  };

  assertPerkMoreDetailsIsDisplayed = async (i: number = 0): Promise<void> => {
    console.log(' - perksPage.assertPerkMoreDetailsIsDisplayed');
    await expect(this.page.locator(btnMoreDetails).nth(i)).toContainText('More Details');
    console.log(await this.page.locator(btnMoreDetails).nth(i).textContent());
    await this.page.locator(btnMoreDetails).nth(i).isVisible();
    await this.page.locator(btnMoreDetails).nth(i).isEnabled();
  };

  assertPerkDisclaimerIsDisplayed = async (): Promise<void> => {
    console.log(' - perksPage.assertPerkDisclaimerIsDisplayed');
    await this.page.waitForSelector(lblPerkDisclaimer);
    await expect(this.page.locator(lblPerkDisclaimer)).toContainText(
      'This site contains affiliate links to products and services. We may receive a commission for purchases made through these links.'
    );
    console.log(await this.page.locator(lblPerkDisclaimer).textContent());
    await this.page.locator(lblPerkDisclaimer).isVisible();
  };

  assertNewPageIsOpened = async (i: number = 0, title: string, context: BrowserContext, page: Page): Promise<void> => {
    console.log(' - perksPage.assertNewPageIsOpened');
    const [newPage] = await Promise.all([context.waitForEvent('page'), page.locator('.shop-now').nth(i).click()]);
    await newPage.waitForLoadState();
    await expect(newPage).toHaveTitle(title);
    console.log(await newPage.title());
  };

  assertNewPageIsOpened2 = async (i: number = 0, title: string, context: BrowserContext, page: Page): Promise<void> => {
    console.log(' - perksPage.assertNewPageIsOpened2');
    const [newPage] = await Promise.all([context.waitForEvent('page'), page.locator("//div/a[@class='more-details']").nth(i).click()]);
    await newPage.waitForLoadState();
    await expect(newPage).toHaveTitle(title);
    console.log(await newPage.title());
  };

  assertPageHasTitle = async (title: string): Promise<void> => {
    console.log(' - perksPage.assertPageHasTitle');
    await expect(this.page).toHaveTitle(title);
    console.log(await this.page.title());
  };
}
