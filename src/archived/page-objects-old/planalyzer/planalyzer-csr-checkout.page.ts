import { OktaPage } from '../okta/okta.page';
import EnvironmentUtil from '../../../utils/env.utils';
// ========================== Selectors ==================================
const DDL_ENVIRONMENT = 'text=EnvironmentUATSTGPROD >> select';
const DDL_CHANNEL = 'text=ChannelChoose ChannelD2CNetworkSolutions >> select';
const DDL_SUB_CHANNEL = 'text=SubchannelChoose SubchannelLegalShieldIDShield >> select';
const DDL_REGION = 'text=RegionChoose RegionAlabamaAlaskaArizonaArkansasCaliforniaColoradoConnecticutDela >> select';
const DDL_MARKETING_LOCAL = 'text=MarketLocaleChoose MarketLocaleen-CAen-USes-USfr-CA >> select';
const TXT_PREPAID_MONTH = '[placeholder="Pre-paid months"]';
const TXT_COUPON_CODE = '[placeholder="Coupon code"]';
const BTN_SHOW_RESULTS = 'button:has-text("Show Results")';
const BTN_GO_TO_CHECKOUT = 'button:has-text("GO TO CHECKOUT")';
const BTN_CONTINUE = 'button:has-text("Continue")';

/**
 *
 * @export
 * @class PlanalyzerCsrCheckoutPage
 * @extends {OktaPage}
 */
export class PlanalyzerCsrCheckoutPage extends OktaPage {
  // ========================== Process Methods ============================
  /**
   * @param {string} channel
   * @param {string} subChannel
   * @param {string} region
   * @param {string} marketLocale
   * @param {string} [prepaidMonths='']
   * @param {string} [couponCode='']
   * @param {Array<string>} plans
   * @memberof PlanalyzerCsrCheckoutPage
   */
  createOrderRedirectToCheckoutFromPlanalyzer = async (
    channel: string,
    subChannel: string,
    region: string,
    marketLocale: string,
    prepaidMonths = '',
    couponCode = '',
    plans: Array<string>
  ): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.createOrderRedirectToCheckoutFromPlanalyzer');
    await this.selectEnvironment();
    await this.selectChannel(channel);
    await this.selectSubChannel(subChannel);
    await this.selectRegion(region);
    await this.selectMarketLocale(marketLocale);
    await this.enterPrepaidMonths(prepaidMonths);
    await this.enterCouponCode(couponCode);
    await this.clickShowResults();
    await this.clickPlanCheckboxes(plans);
    await this.clickGoToCheckout();
  };

  /**
   *
   *
   * @memberof PlanalyzerCsrCheckoutPage
   */
  selectEnvironment = async (): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.selectEnvironment');
    const environmentDropDownString = EnvironmentUtil.getDropDownEnvironmentOptions();
    await this.selectFromDropDownMenu(DDL_ENVIRONMENT, environmentDropDownString);
  };

  /**
   * @param {string} channel
   * @memberof PlanalyzerCsrCheckoutPage
   */
  selectChannel = async (channel: string): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.selectChannel');
    await this.selectFromDropDownMenu(DDL_CHANNEL, channel);
  };

  /**
   * @param {string} subChannel
   * @memberof PlanalyzerCsrCheckoutPage
   */
  selectSubChannel = async (subChannel: string): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.selectSubChannel');
    await this.selectFromDropDownMenu(DDL_SUB_CHANNEL, subChannel);
  };

  /**
   * @param {string} region
   * @memberof PlanalyzerCsrCheckoutPage
   */
  selectRegion = async (region: string): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.selectRegion');
    await this.selectFromDropDownMenu(DDL_REGION, region);
  };

  /**
   * @param {string} marketLocale
   * @memberof PlanalyzerCsrCheckoutPage
   */
  selectMarketLocale = async (marketLocale: string): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.selectMarketLocale');
    await this.selectFromDropDownMenu(DDL_MARKETING_LOCAL, marketLocale);
  };

  /**
   * @param {string} prepaidMonths
   * @memberof PlanalyzerCsrCheckoutPage
   */
  enterPrepaidMonths = async (prepaidMonths: string): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.enterPrepaidMonths');
    await this.fillTextBox(TXT_PREPAID_MONTH, prepaidMonths);
  };

  /**
   * @param {string} couponCode
   * @memberof PlanalyzerCsrCheckoutPage
   */
  enterCouponCode = async (couponCode: string): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.enterCouponCode');
    await this.fillTextBox(TXT_COUPON_CODE, couponCode);
  };

  // ========================== Navigate Methods ===========================

  // ========================== Click Methods ==============================

  /**
   * @param {Array<string>} plans
   * @memberof PlanalyzerCsrCheckoutPage
   */
  clickPlanCheckboxes = async (plans: Array<string>): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.clickPlanCheckboxes');
    plans.forEach(async (longName) => {
      await this.clickOnElement(`//div[contains(@class, 'product-name') and starts-with(.,'${longName}')]`);
      // TODO: Need to research why automation can select multiple plans in planalyzer, but one of the plans does not get passed to checkout service about 60% of the time(?)
      // Leaving these changes in here for now, as it provides some value
      // await this.page.waitForSelector(`//div[contains(@class,'MuiBox-root') and contains(.,'${longName}')]`);
    });
  };

  /**
   * @memberof PlanalyzerCsrCheckoutPage
   */
  clickShowResults = async (): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.clickShowResults');
    // Click on the Search Results Button
    await this.clickOnElement(BTN_SHOW_RESULTS);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  /**
   * @memberof PlanalyzerCsrCheckoutPage
   */
  clickGoToCheckout = async (): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.clickGoToCheckout');
    // Click on the Search Results Button
    await this.clickOnElement(BTN_GO_TO_CHECKOUT);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  clickContinueButton = async (): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.clickContinueButton');
    // Click on the Search Results Button
    await this.clickOnElement(BTN_CONTINUE);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };
  // ========================== Assertion Methods ==========================
}
