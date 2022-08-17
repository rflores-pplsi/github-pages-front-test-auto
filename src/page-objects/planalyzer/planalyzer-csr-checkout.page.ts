import { OktaPage } from '../okta/okta.page';
import EnvironmentUtil from '../../utils/env.utils';
// ========================== Selectors ==================================
const ddlEnvironment: string = 'text=EnvironmentUATSTGPROD >> select';
const ddlChannel: string = 'text=ChannelChoose ChannelD2CNetworkSolutions >> select';
const ddlSubChannel: string = 'text=SubchannelChoose SubchannelLegalShieldIDShield >> select';
const ddlRegion: string = 'text=RegionChoose RegionAlabamaAlaskaArizonaArkansasCaliforniaColoradoConnecticutDela >> select';
const ddlMarketLocal: string = 'text=MarketLocaleChoose MarketLocaleen-CAen-USes-USfr-CA >> select';
const txtPrepaidMonth: string = '[placeholder="Pre-paid months"]';
const txtCouponCode: string = '[placeholder="Coupon code"]';
const btnShowResults: string = 'button:has-text("Show Results")';
const btnGoToCheckout: string = 'button:has-text("GO TO CHECKOUT")';
const btnContinue: string = 'button:has-text("Continue")';

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
    prepaidMonths: string = '',
    couponCode: string = '',
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
    await this.clickContinueButton();
  };

  /**
   *
   *
   * @memberof PlanalyzerCsrCheckoutPage
   */
  selectEnvironment = async (): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.selectEnvironment');
    const environmentDropDownString = EnvironmentUtil.getDropDownEnvironmentOptions();
    await this.selectFromDropDownMenu(ddlEnvironment, environmentDropDownString);
  };

  /**
   * @param {string} channel
   * @memberof PlanalyzerCsrCheckoutPage
   */
  selectChannel = async (channel: string): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.selectChannel');
    await this.selectFromDropDownMenu(ddlChannel, channel);
  };

  /**
   * @param {string} subChannel
   * @memberof PlanalyzerCsrCheckoutPage
   */
  selectSubChannel = async (subChannel: string): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.selectSubChannel');
    await this.selectFromDropDownMenu(ddlSubChannel, subChannel);
  };

  /**
   * @param {string} region
   * @memberof PlanalyzerCsrCheckoutPage
   */
  selectRegion = async (region: string): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.selectRegion');
    await this.selectFromDropDownMenu(ddlRegion, region);
  };

  /**
   * @param {string} marketLocale
   * @memberof PlanalyzerCsrCheckoutPage
   */
  selectMarketLocale = async (marketLocale: string): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.selectMarketLocale');
    await this.selectFromDropDownMenu(ddlMarketLocal, marketLocale);
  };

  /**
   * @param {string} prepaidMonths
   * @memberof PlanalyzerCsrCheckoutPage
   */
  enterPrepaidMonths = async (prepaidMonths: string): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.enterPrepaidMonths');
    await this.fillTextBox(txtPrepaidMonth, prepaidMonths);
  };

  /**
   * @param {string} couponCode
   * @memberof PlanalyzerCsrCheckoutPage
   */
  enterCouponCode = async (couponCode: string): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.enterCouponCode');
    await this.fillTextBox(txtCouponCode, couponCode);
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
    await this.clickOnElement(btnShowResults);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  /**
   * @memberof PlanalyzerCsrCheckoutPage
   */
  clickGoToCheckout = async (): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.clickGoToCheckout');
    // Click on the Search Results Button
    await this.clickOnElement(btnGoToCheckout);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  clickContinueButton = async (): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.clickContinueButton');
    // Click on the Search Results Button
    await this.clickOnElement(btnContinue);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };
  // ========================== Assertion Methods ==========================
}
