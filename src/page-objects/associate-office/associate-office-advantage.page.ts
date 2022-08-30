import { expect } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { BasePage } from '../base.page';

// ========================== Selectors ==========================
const banner: string = 'div.banner';
const bannerTitle: string = '.content h2';
const bannerDescription: string = 'div.banner span';
const plansHeader: string = '//p[text()="Plans"]';

const basicContainer: string = '#basic';
const basicTitle: string = '#basic .title-card p';
const basicPrice: string = '#basic .price p';
const basicDescription1: string = '#basic .description > p:nth-child(1)';
const basicDescription2: string = '#basic .description > p:nth-child(2)';
const basicPlanBtn: string = '#basic button';

const advantageContainer: string = 'div#advantage';
const advantageTitle: string = '#advantage .title-card p';
const advantagePrice: string = '#advantage .price p';
const advantageDescription1: string = '#advantage .description > p:nth-child(1)';
const advantageDescription2: string = '#advantage .description > p:nth-child(2)';
const advantageDescription3: string = '#advantage .description > p:nth-child(3)';
const advantageDescription4: string = '#advantage .description > p:nth-child(4)';
const advantageDescription5: string = '#advantage .description > p:nth-child(5)';
const advantageDescription6: string = '#advantage .description > p:nth-child(6)';
const advantageDescription7: string = '#advantage .description > p:nth-child(7)';
const advantagePlanBtn: string = '#advantage button';

const supportContent: string = 'div.support p';
const supportLink: string = '.lsux-row a';

/**
 * @export
 * @class AdvantagePage
 * @extends {BasePage}
 */
export class AdvantagePage extends BasePage {
  // ========================== Process Methods ==========================

  // ========================== Navigate Methods ==========================

  // ========================== Click Methods ==========================

  // ========================== Assertion Methods ==========================
  assertBannerContent = async (): Promise<void> => {
    console.log(' - advantagePage.assertBannerContent');
    await this.page.waitForSelector(banner);
    await this.assertElementIsVisible(banner);
    const strTitle = 'LegalShield Advantage';
    await this.assertElementHasText(bannerTitle, strTitle);
    const strDescription = 'The tools, information, and incentives to take your LegalShield business to the top';
    await this.assertElementHasText(bannerDescription, strDescription);
  };

  assertPlansHeaderIsDisplayed = async (): Promise<void> => {
    await this.page.waitForSelector(plansHeader);
    console.log(' - advantagePage.assertPlansHeaderIsDisplayed');
    await this.assertElementIsVisible(plansHeader);
  };

  assertBasicContainer = async (): Promise<void> => {
    console.log(' - advantagePage.assertBasicContainerIsDisplayed');
    await this.page.waitForSelector(basicTitle);
    await this.assertElementIsVisible(basicContainer);
    const strTitle = 'Basic';
    await this.assertElementHasText(basicTitle, strTitle);
    const strPrice = 'Free';
    await this.assertElementHasText(basicPrice, strPrice);
    const description1 = 'LSEngage: Basic reporting and information to help you manage your LegalShield business';
    const description2 = 'Weekly Leadership Show and Newsletter to keep you up to speed on the latest announcements';
    await this.assertElementHasText(basicDescription1, description1);
    await this.assertElementHasText(basicDescription2, description2);
    await this.assertElementIsVisible(basicPlanBtn);
  };

  assertAdvantagePlusContainer = async (): Promise<void> => {
    console.log(' - advantagePage.assertAdvantagePlusContainer');
    await this.page.waitForSelector(advantageTitle);
    await this.assertElementIsVisible(advantageContainer);
    const strTitle = 'Advantage Plus';
    await this.assertElementHasText(advantageTitle, strTitle);
    const strPrice = '$24.95/mo';
    await this.assertElementHasText(advantagePrice, strPrice);
    const description1 = 'Custom Marketing Website for personalized recruiting and sales';
    const description2 = 'Prospect by LegalShield';
    const description3 =
      'LSEngage: Customizable top-level statistical reporting to build and manage your business including a tool to visualize your organization';
    const description4 = 'Eligibility to participate in our incredible incentive programs and promotions';
    const description5 = 'Associate Perks: providing you with special offerings toward top notch business services';
    const description6 = 'Personal Zoom account (up to 100 participants) so that you can meet anytime with your team or prospects';
    const description7 = 'Plus everything from Basic';
    await this.assertElementHasText(advantageDescription1, description1);
    await this.assertElementHasText(advantageDescription2, description2);
    await this.assertElementHasText(advantageDescription3, description3);
    await this.assertElementHasText(advantageDescription4, description4);
    await this.assertElementHasText(advantageDescription5, description5);
    await this.assertElementHasText(advantageDescription6, description6);
    await this.assertElementHasText(advantageDescription7, description7);
    await this.assertElementIsVisible(advantagePlanBtn);
  };

  assertSupportContentIsDisplayed = async (): Promise<void> => {
    console.log(' - advantagePage.assertSupportContentIsDisplayed');
    await this.page.waitForSelector(plansHeader);
    const strSupportContent =
      'Feature upgrades will be available within 24 hours. Feature downgrades and new charges will take effect at your next bill date. You can change your LegalShield Advantage plan every 30 days.';
    await this.assertElementHasText(supportContent, strSupportContent);
    await this.assertElementIsVisible(supportLink);
  };
}
