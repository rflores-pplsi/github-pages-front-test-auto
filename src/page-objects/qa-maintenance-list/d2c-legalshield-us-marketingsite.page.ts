/* eslint-disable require-jsdoc */
import { expect } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils'; // import class of Urls
import { LoginPage } from '../login/login.page'; // import the LoginPage for extension

// ========================== Selectors ==================================
const urlD2CLegalShieldUSPage = UrlsUtils.marketingSitesUrls.legalShieldUSUrl;
const BTN_VIEW_PLAN = "text='View plans'";
const BTN_SEE_PLAN_OPTIONS = "text='See Plan Options'";
const BTN_VIEW_PRICING = ':nth-match(:text("View Pricing"), 1)';
const BTN_START_ANNUAL_PLAN = "text='Start annual plan'";
const BTN_CHECKOUT = '#checkout-btn';
const BTN_START_MONTHLY_PLAN = "text='Start monthly plan'";
const BTN_GET_STARTED_SMALL_BUSINESS = ':nth-match(:text("Get Started"), 1)';
const BTN_ADD_TO_CART = '#add-to-cart-btn';
const BTN_GET_STARTED_START_BUSINESS = ':nth-match(:text("Get Started"), 2)';
const BTN_CONTINUE_SHOPPING = '#continue-shopping-link a';
const TEXT_PLAN_IN_CART = 'div.monthly-total > p';
const LINK_COVERAGE_PRICING = '#menu-business-mvp-1';
const TEXT_SMALL_BUSINESS = 'Small Business3';
const TEXT_COVERAGE_PRICING = 'Coverage & Pricing';
const BTN_SMALL_BUSINESS_ADD_TO_CART = ':nth-match(:text("Add to cart"), 2)';
const RADIO_PUBLICLY_TRADED_COMPANY = '#traded-company-no';
const RADIO_NON_PROFIT_BUSINESS = '#non-profit-no';
const TEXT_CART_PLAN = 'div.cart-plan > p';
const TEXT_SUPPLEMENT_PLAN = 'div.supplement-plan > p';
const TEXT_CART_MESSAGE = '#cart-messages p';
const DIALOG_QUALIFYING_CONTAINER = '#qualifying-container';

export class LegalShieldUSPage extends LoginPage {
  // ========================== Process Methods ============================
  pickAPlan = async (plan: string) => {
    await this.page.locator(BTN_VIEW_PLAN).click();
    await this.page.locator(BTN_SEE_PLAN_OPTIONS).click();
    if (plan.toUpperCase() == 'ANNUAL') {
      await this.page.locator(BTN_VIEW_PRICING).click();
      await this.page.waitForLoadState();
      await this.page.locator(BTN_START_ANNUAL_PLAN).click();
    } else if (plan.toUpperCase() == 'MONTHLY') {
      await this.page.locator(BTN_VIEW_PRICING).click();
      await this.page.waitForLoadState();
      await this.page.locator(BTN_START_MONTHLY_PLAN).click();
    } else if (plan.toUpperCase() == 'SMALL_BUSINESS') {
      await this.page.locator(BTN_GET_STARTED_SMALL_BUSINESS).click();
      await this.page.locator(RADIO_PUBLICLY_TRADED_COMPANY).check();
      await this.page.locator(RADIO_NON_PROFIT_BUSINESS).check();
      await this.page.locator(BTN_ADD_TO_CART).click();
    } else if (plan.toUpperCase() == 'START_BUSINESS') {
      await this.page.locator(BTN_GET_STARTED_START_BUSINESS).click();
    } else {
      console.log('Pick Annual or Monthly or Small Business or Start a Business');
    }
  };
  pickAnnualPlan = async () => {
    await this.page.locator(BTN_START_ANNUAL_PLAN).click();
  };
  pickMonthlyPlan = async () => {
    await this.page.locator(BTN_START_MONTHLY_PLAN).click();
  };
  pickSmallBusinessFromHeader = async () => {
    await this.page.waitForLoadState();
    await this.page.getByRole('button', { name: TEXT_SMALL_BUSINESS }).click();
    await this.page.locator(LINK_COVERAGE_PRICING).getByRole('link', { name: TEXT_COVERAGE_PRICING }).click();
    await this.page.waitForSelector(BTN_SMALL_BUSINESS_ADD_TO_CART);
    await this.page.locator(BTN_SMALL_BUSINESS_ADD_TO_CART).click();
    await this.page.locator(RADIO_PUBLICLY_TRADED_COMPANY).check();
    await this.page.locator(RADIO_NON_PROFIT_BUSINESS).check();
    await this.page.locator(BTN_ADD_TO_CART).click();
  };
  checkout = async () => {
    await this.page.locator(BTN_CHECKOUT).click();
  };
  continueShopping = async () => {
    await this.page.locator(BTN_CONTINUE_SHOPPING).click();
  };
  assertExistingPlanInCart = async (plan: string) => {
    await this.assertElementContainsText(TEXT_PLAN_IN_CART, plan);
  };
  assertMonthlyPlanAndSupplementInCart = async () => {
    await this.assertElementContainsText(TEXT_CART_PLAN, 'Small Business Legal Essentials');
    await this.assertElementContainsText(TEXT_SUPPLEMENT_PLAN, '+ Business Plus Supplement');
    await this.assertElementContainsText(
      TEXT_CART_MESSAGE,
      "Supplements must be purchased with a monthly Legal Plan. We've added a monthly Legal Plan to your cart along with the supplement selected."
    );
  };
  // ========================== Navigate Methods ===========================
  navigateToLegalShieldUSMarketingSitePage = async (lineofbusiness: string) => {
    // navigate to URL
    await this.page.goto(urlD2CLegalShieldUSPage);
    await this.page.waitForLoadState();
    await this.page.screenshot({ path: 'Screenshots/testingHarness/' + lineofbusiness + 'TestingHarness.png', fullPage: true });
  };
  // ========================== Click Methods ==============================
  // ========================== Assertion Methods ==========================
}
