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
const btnShowReults: string = 'button:has-text("Show Results")';
const btnGoToCheckout: string = 'button:has-text("GO TO CHECKOUT")';

// eslint-disable-next-line valid-jsdoc
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
  createOrderRedirectToCheckout = async (
    channel: string,
    subChannel: string,
    region: string,
    marketLocale: string,
    prepaidMonths: string = '',
    couponCode: string = '',
    plans: Array<string>
  ): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.createLegalPlanOklahomaOrderRedirectToCheckout');
    await this.selectEnvironment();
    await this.selectChannel(channel);
    await this.selectSubChannel(subChannel);
    await this.selectRegion(region);
    await this.selectMarketLocale(marketLocale);
    await this.enterPrepaidMonths(prepaidMonths);
    await this.enterCouponCode(couponCode);
    await this.clickShowResults();
    await this.clickPlanCheckbox(plans);
    await this.clickGoToCheckout();
  };

  selectEnvironment = async (): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.selectEnvironment');
    const environmentDropDownString = EnvironmentUtil.getDropDownEnvironmentOptions();
    await this.selectFromDropDownMenu(ddlEnvironment, environmentDropDownString);
  };

  selectChannel = async (channel: string): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.selectChannel');
    await this.selectFromDropDownMenu(ddlChannel, channel);
  };

  selectSubChannel = async (subChannel: string): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.selectSubChannel');
    await this.selectFromDropDownMenu(ddlSubChannel, subChannel);
  };

  selectRegion = async (region: string): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.selectRegion');
    await this.selectFromDropDownMenu(ddlRegion, region);
  };

  selectMarketLocale = async (marketLocale: string): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.selectMarketLocale');
    await this.selectFromDropDownMenu(ddlMarketLocal, marketLocale);
  };

  enterPrepaidMonths = async (prepaidMonths: string): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.enterPrepaidMonths');
    await this.fillTextBox(txtPrepaidMonth, prepaidMonths);
  };

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
  clickPlanCheckbox = async (plans: Array<string>): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.clickPlanCheckbox');
    const longName = plans[0];
    await this.clickOnElement(`//div[contains(@class, 'product-name') and starts-with(.,'${longName}')]`);
  };

  clickShowResults = async (): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.clickShowResults');
    // Click on the Search Results Button
    await this.clickOnElement(btnShowReults);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };

  clickGoToCheckout = async (): Promise<void> => {
    console.log(' - planalyzerCsrCheckoutPage.clickGoToCheckout');
    // Click on the Search Results Button
    await this.clickOnElement(btnGoToCheckout);
    // Wait for document to load before subsequent steps
    await this.page.waitForLoadState('domcontentloaded');
  };
  // ========================== Assertion Methods ==========================
}
