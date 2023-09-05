import { BasePage } from '../base.page';

// ========================== Selectors ==========================
const BANNER = 'div.banner';
const BANNER_TITLE = '.content h2';
const BANNER_DESCRIPTION = 'div.banner span';
const PLANS_HEADER = '//p[text()="Plans"]';

const BASIC_CONTAINER = '#basic';
const BASIC_TITLE = '#basic .title-card p';
const BASIC_PRICE = '#basic .price p';
const BASIC_DESCRIPTION1 = '#basic .description > p:nth-child(1)';
const BASIC_DESCRIPTION2 = '#basic .description > p:nth-child(2)';
const BASIC_PLAN_BTN = '#basic button';

const ADVANTAGE_CONTAINER = 'div#advantage';
const ADVANTAGE_TITLE = '#advantage .title-card p';
const ADVANTAGE_PRICE = '#advantage .price p';
const ADVANTAGE_DESCRIPTION1 = '#advantage .description > p:nth-child(1)';
const ADVANTAGE_DESCRIPTION2 = '#advantage .description > p:nth-child(2)';
const ADVANTAGE_DESCRIPTION3 = '#advantage .description > p:nth-child(3)';
const ADVANTAGE_DESCRIPTION4 = '#advantage .description > p:nth-child(4)';
const ADVANTAGE_DESCRIPTION5 = '#advantage .description > p:nth-child(5)';
const ADVANTAGE_DESCRIPTION6 = '#advantage .description > p:nth-child(6)';
const ADVANTAGE_DESCRIPTION7 = '#advantage .description > p:nth-child(7)';
const ADVANTAGE_PLAN_BTN = '#advantage button';

const SUPPORT_CONTENT = 'div.support p';
const SUPPORT_LINK = '.lsux-row a';

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
    await this.page.waitForSelector(BANNER);
    await this.assertElementIsVisible(BANNER);
    const STR_TITLE = 'LegalShield Advantage';
    await this.assertElementHasText(BANNER_TITLE, STR_TITLE);
    const STR_DESCRIPTION = 'The tools, information, and incentives to take your LegalShield business to the top';
    await this.assertElementHasText(BANNER_DESCRIPTION, STR_DESCRIPTION);
  };

  assertPlansHeaderIsDisplayed = async (): Promise<void> => {
    await this.page.waitForSelector(PLANS_HEADER);
    console.log(' - advantagePage.assertPlansHeaderIsDisplayed');
    await this.assertElementIsVisible(PLANS_HEADER);
  };

  assertBasicContainer = async (): Promise<void> => {
    console.log(' - advantagePage.assertBasicContainerIsDisplayed');
    await this.page.waitForSelector(BASIC_TITLE);
    await this.assertElementIsVisible(BASIC_CONTAINER);
    const STR_TITLE = 'Basic';
    await this.assertElementHasText(BASIC_TITLE, STR_TITLE);
    const STR_PRICE = 'Free';
    await this.assertElementHasText(BASIC_PRICE, STR_PRICE);
    const DESCRIPTION1 = 'LSEngage: Basic reporting and information to help you manage your LegalShield business';
    const DESCRIPTION2 = 'Weekly Leadership Show and Newsletter to keep you up to speed on the latest announcements';
    await this.assertElementHasText(BASIC_DESCRIPTION1, DESCRIPTION1);
    await this.assertElementHasText(BASIC_DESCRIPTION2, DESCRIPTION2);
    await this.assertElementIsVisible(BASIC_PLAN_BTN);
  };

  assertAdvantagePlusContainer = async (): Promise<void> => {
    console.log(' - advantagePage.assertAdvantagePlusContainer');
    await this.page.waitForSelector(ADVANTAGE_TITLE);
    await this.assertElementIsVisible(ADVANTAGE_CONTAINER);
    const STR_TITLE = 'Advantage Plus';
    await this.assertElementHasText(ADVANTAGE_TITLE, STR_TITLE);
    const STR_PRICE = '$24.95/mo';
    await this.assertElementHasText(ADVANTAGE_PRICE, STR_PRICE);
    const DESCRIPTION1 = 'Custom Marketing Website for personalized recruiting and sales';
    const DESCRIPTION2 = 'Prospect by LegalShield';
    const DESCRIPTION3 =
      'LSEngage: Customizable top-level statistical reporting to build and manage your business including a tool to visualize your organization';
    const DESCRIPTION4 = 'Eligibility to participate in our incredible incentive programs and promotions';
    const DESCRIPTION5 = 'Associate Perks: providing you with special offerings toward top notch business services';
    const DESCRIPTION6 = 'Personal Zoom account (up to 100 participants) so that you can meet anytime with your team or prospects';
    const DESCRIPTION7 = 'Plus everything from Basic';
    await this.assertElementHasText(ADVANTAGE_DESCRIPTION1, DESCRIPTION1);
    await this.assertElementHasText(ADVANTAGE_DESCRIPTION2, DESCRIPTION2);
    await this.assertElementHasText(ADVANTAGE_DESCRIPTION3, DESCRIPTION3);
    await this.assertElementHasText(ADVANTAGE_DESCRIPTION4, DESCRIPTION4);
    await this.assertElementHasText(ADVANTAGE_DESCRIPTION5, DESCRIPTION5);
    await this.assertElementHasText(ADVANTAGE_DESCRIPTION6, DESCRIPTION6);
    await this.assertElementHasText(ADVANTAGE_DESCRIPTION7, DESCRIPTION7);
    await this.assertElementIsVisible(ADVANTAGE_PLAN_BTN);
  };

  assertSupportContentIsDisplayed = async (): Promise<void> => {
    console.log(' - advantagePage.assertSupportContentIsDisplayed');
    await this.page.waitForSelector(PLANS_HEADER);
    const STR_SUPPORT_CONTENT =
      'Feature upgrades will be available within 24 hours. Feature downgrades and new charges will take effect at your next bill date. You can change your LegalShield Advantage plan every 30 days.';
    await this.assertElementHasText(SUPPORT_CONTENT, STR_SUPPORT_CONTENT);
    await this.assertElementIsVisible(SUPPORT_LINK);
  };
}
