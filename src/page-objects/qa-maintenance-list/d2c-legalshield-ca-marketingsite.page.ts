/* eslint-disable require-jsdoc */
import UrlsUtils from '../../utils/urls.utils'; // import class of Urls
import { LoginPage } from '../login/login.page'; // import the LoginPage for extension

// ========================== Selectors ==================================
const urlD2CLegalShieldCAPage = UrlsUtils.marketingSitesUrls.legalShieldCAUrl;
const BTN_ADD_TO_CART_INDIVIDUAL_FAMILY = ':nth-match(:text("Add To Cart"), 2)';
const BTN_ADD_TO_CART_SMALL_BUSINESS = ':nth-match(:text("Add To Cart"), 3)';
const BTN_CHECKOUT = '#checkout-btn';
const RADIO_TRADED_CO = '#traded-company-no';
const RADIO_NON_PROFIT = '#non-profit-no';
const BTN_ADD_TO_CART = '#add-to-cart-btn';

export class LegalShieldCAPage extends LoginPage {
  // ========================== Process Methods ============================
  pickAPlan = async (plan: string): Promise<void> => {
    if (plan == 'INDIVIDUAL_FAMILY') {
      await this.page.waitForSelector(BTN_ADD_TO_CART_INDIVIDUAL_FAMILY);
      await this.page.locator(BTN_ADD_TO_CART_INDIVIDUAL_FAMILY).click();
    } else if (plan == 'SMALL_BUSINESS') {
      await this.page.waitForSelector(BTN_ADD_TO_CART_SMALL_BUSINESS);
      await this.page.locator(BTN_ADD_TO_CART_SMALL_BUSINESS).click();
      await this.page.locator(RADIO_TRADED_CO).check();
      await this.page.locator(RADIO_NON_PROFIT).check();
      await this.page.locator(BTN_ADD_TO_CART).click();
    }
    await this.clickOnElement(BTN_CHECKOUT);
  };
  // ========================== Navigate Methods ===========================
  navigateToLegalShieldCAMarketingSitePlage = async (lineofbusiness: string): Promise<void> => {
    // navigate to URL
    await this.page.goto(urlD2CLegalShieldCAPage);
    await this.page.waitForLoadState();
    await this.page.screenshot({ path: 'Screenshots/MarketingSite/' + lineofbusiness + 'MarketingSite.png', fullPage: true });
  };
  // ========================== Click Methods ==============================
  // ========================== Assertion Methods ==========================
}
