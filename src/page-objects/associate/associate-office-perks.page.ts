import { expect } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { BasePage } from '../base.page';

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
const perkDisclaimer: string = '.perks-disclaimer';

//John Addison Leadership perk
const JALeadershipPerk: string = "div[class*='thirds'] > div:nth-of-type(1) > div > div > p";
const JALeadershipPerkImg: string = "img[src*='2ef8a10b28e9943d741b6ceccf14c336.png']";
const JALeadershipPerkDescription: string = '.card-perks > div > div > div:nth-child(2)  h1';
const JALeadershipPerkComment: string = '.card-perks div:nth-child(2)  div > div > div > p';
const JALeadershipPerkShopNow: string = "a[href*='ls-perks/']";

/**
 * @export
 * @class PerksPage
 * @extends {BasePage}
 */
export class PerksPage extends BasePage {
  // ========================== Process Methods ==========================

  perk = async (perkTitle: string): Promise<void> => {
    await this.page.waitForSelector(`//*[text()="${perkTitle}"]`);
  };

  description = async (perkTitle: string): Promise<void> => {
    const perk = await this.page.waitForSelector(`//*[text()="${perkTitle}"]`);
  };

  // ========================== Navigate Methods ==========================

  // ========================== Click Methods ==========================

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

  assertPerkDescriptionDisplayed = async (perkTitle: string): Promise<void> => {
    console.log(' - perksPage.assertPerkImageDisplayed');
    await this.description(perkTitle);
  };
}
