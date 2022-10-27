/* eslint-disable require-jsdoc */
import UrlsUtils from '../../utils/urls.utils'; // import class of Urls
import { LoginPage } from '../login/login.page'; // import the LoginPage for extension
import { waitNitroPackToLoadElementAsVisible } from '../../utils/pageUtils';
import { getLocalStorageSelectedProducts } from '../../utils/browser-storage.utils';
import { LocalStorageSelectedItem } from '../../types/types';

// ========================== Selectors ==================================
const urlD2CIDShieldUSPage = UrlsUtils.marketingSitesUrls.idShieldUSUrl;
const BTN_VIEW_PLANS = 'text=View plans';
const BTN_INDIVIDUAL_LEARN_MORE = ':nth-match(:text("Learn more"), 1)';
const BTN_CHECKOUT = '#checkout-btn';
const RADIO_ANNUALLY = 'Annually';
const BTN_BUSINESS_PLAN = ':nth-match(:text("Business Plan"), 1)';
const BTN_SIGN_UP = ':nth-match(:text("Sign Up"), 2)';
const BTN_CONTINUE_SHOPPING = '#continue-shopping-link';
const BTN_FAMILY_PLAN = ':nth-match(:text("Family Plan"), 1)';
const TEXT_CART_PLAN = '.cart-plan';
const TEXT_CART_MESSAGE = '#cart-messages p';
export class IDShieldUSPage extends LoginPage {
  // ========================== Process Methods ============================
  pickAnIndividualPlan = async (plan: string, action: string): Promise<void> => {
    await this.page.waitForSelector(BTN_VIEW_PLANS);
    await this.page.locator(BTN_VIEW_PLANS).click();
    await this.page.locator(BTN_INDIVIDUAL_LEARN_MORE).click();
    await this.page.waitForLoadState();
    if (plan == 'ANNUAL') {
      await this.page.getByLabel(RADIO_ANNUALLY).check();
    }
    await this.page.waitForLoadState();
    const localStorageProducts: LocalStorageSelectedItem[] | undefined = await getLocalStorageSelectedProducts(this.page);
    const localStorageProductID = localStorageProducts?.find(
      (localStorageProduct) => localStorageProduct.productName == 'IDShield Individual'
    )?.productId;
    await waitNitroPackToLoadElementAsVisible(this.page.locator('//a[@data-product-id=' + localStorageProductID + ']'), this.page);
    await this.page.locator('//a[@data-product-id=' + localStorageProductID + ']').click();
    if (action == 'CHECKOUT') {
      await this.page.locator(BTN_CHECKOUT).click();
    } else if (action == 'CONTINUE_SHOPPING') {
      await this.page.locator(BTN_CONTINUE_SHOPPING).click();
    }
  };
  pickAFamilyPlan = async (plan: string, action: string): Promise<void> => {
    await this.page.locator(BTN_FAMILY_PLAN).click();
    if (plan == 'ANNUAL') {
      await this.page.getByLabel(RADIO_ANNUALLY).check();
    }
    const localStorageProducts: LocalStorageSelectedItem[] | undefined = await getLocalStorageSelectedProducts(this.page);
    const localStorageProductID = localStorageProducts?.find(
      (localStorageProduct) => localStorageProduct.productName == 'IDShield Family'
    )?.productId;
    await waitNitroPackToLoadElementAsVisible(this.page.locator('//a[@data-product-id=' + localStorageProductID + ']'), this.page);
    await this.page.locator('//a[@data-product-id=' + localStorageProductID + ']').click();
    if (action == 'CHECKOUT') {
      await this.page.locator(BTN_CHECKOUT).click();
    }
  };
  pickABusinessPlan = async (plan: string, action: string): Promise<void> => {
    await this.page.locator(BTN_BUSINESS_PLAN).click();
    await waitNitroPackToLoadElementAsVisible(this.page.locator(BTN_SIGN_UP), this.page);
    await this.page.locator(BTN_SIGN_UP).click();
    if (action == 'CHECKOUT') {
      await this.page.locator(BTN_CHECKOUT).click();
    }
  };
  assertShoppingCartIncludesFamilyPlan = async () => {
    await this.assertElementContainsText(TEXT_CART_PLAN, 'IDShield Family');
    await this.assertElementContainsText(
      TEXT_CART_MESSAGE,
      "Only one plan may be purchased by an individual at one time. We've removed the initial plan from your cart and replaced it with the new plan selected."
    );
  };
  assertShoppingCartIncludesBusinessPlan = async () => {
    await this.assertElementContainsText(TEXT_CART_PLAN, 'IDShield for Business Essentials');
    await this.assertElementContainsText(
      TEXT_CART_MESSAGE,
      "Only one plan may be purchased by an individual at one time. We've removed the initial plan from your cart and replaced it with the new plan selected."
    );
  };
  continueShopping = async () => {
    await this.page.locator(BTN_CONTINUE_SHOPPING).click();
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
