/* eslint-disable require-jsdoc */
import UrlsUtils from '../../utils/urls.utils'; // import class of Urls
import { LoginPage } from '../login/login.page'; // import the LoginPage for extension

// ========================== Selectors ==================================
const urlD2CIDShieldUSPage = UrlsUtils.marketingSitesUrls.idShieldUSUrl;
const BTN_VIEW_PLANS = 'text=View plans';
const BTN_INDIVIDUAL_LEARN_MORE = ':nth-match(:text("Learn more"), 1)';
const BTN_FAMILY_LEARN_MORE = ':nth-match(:text("Learn more"), 2)';
// const BTN_START_TRIAL = ':nth-match(:text("Start trial"), 1)';
// const BTN_START_TRIAL = 'a.lsc-add-to-cart-button >> nth=0';
const BTN_START_TRIAL = 'article:has-text("Start trial") >> nth=0';
const BTN_CHECKOUT = '#checkout-btn';
const RADIO_ANNUALLY = 'Annually';
const BTN_BUSINESS_PLAN = ':nth-match(:text("Business Plan"), 1)';
const BTN_SIGN_UP = ':nth-match(:text("Sign Up"), 2)';
export class IDShieldUSPage extends LoginPage {
  // ========================== Process Methods ============================
  pickAnIndividualPlan = async (plan: string): Promise<void> => {
    await this.page.waitForSelector(BTN_VIEW_PLANS);
    await this.page.locator(BTN_VIEW_PLANS).click();
    await this.page.locator(BTN_INDIVIDUAL_LEARN_MORE).click();
    await this.page.waitForLoadState();
    if (plan == 'ANNUAL') {
      await this.page.getByLabel(RADIO_ANNUALLY).check();
    }
    // await this.page.waitForSelector(BTN_START_TRIAL);
    // await this.page.getByRole('link', { name: '5 Start trial $' }).first().click();
    await this.page.locator(BTN_START_TRIAL).click();
    await this.page.locator(BTN_CHECKOUT).click();
  };
  pickAFamilyPlan = async (plan: string): Promise<void> => {
    await this.page.waitForSelector(BTN_VIEW_PLANS);
    await this.page.locator(BTN_VIEW_PLANS).click();
    await this.page.locator(BTN_FAMILY_LEARN_MORE).click();
    if (plan == 'ANNUAL') {
      await this.page.getByLabel(RADIO_ANNUALLY).check();
    }
    await this.page.locator(BTN_START_TRIAL).click();
    await this.page.locator(BTN_CHECKOUT).click();
  };
  pickABusinessPlan = async (plan: string): Promise<void> => {
    await this.page.locator(BTN_BUSINESS_PLAN).click();
    await this.page.locator(BTN_SIGN_UP).click();
    await this.page.locator(BTN_CHECKOUT).click();
  };
  // ========================== Navigate Methods ===========================
  navigateToIDShieldUSMarketingSitePlage = async (lineofbusiness: string): Promise<void> => {
    // navigate to URL
    await this.page.goto(urlD2CIDShieldUSPage);
    await this.page.waitForLoadState();
    await this.page.screenshot({ path: 'Screenshots/MarketingSite/' + lineofbusiness + 'MarketingSite.png', fullPage: true });
  };
  // ========================== Click Methods ==============================
  // ========================== Assertion Methods ==========================
}
