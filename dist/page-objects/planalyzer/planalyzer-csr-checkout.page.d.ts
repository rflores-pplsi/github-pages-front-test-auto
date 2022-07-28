import { OktaPage } from '../okta/okta.page';
/**
 *
 * @export
 * @class PlanalyzerCsrCheckoutPage
 * @extends {OktaPage}
 */
export declare class PlanalyzerCsrCheckoutPage extends OktaPage {
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
    createOrderRedirectToCheckoutFromPlanalyzer: (channel: string, subChannel: string, region: string, marketLocale: string, prepaidMonths: string | undefined, couponCode: string | undefined, plans: Array<string>) => Promise<void>;
    /**
     *
     *
     * @memberof PlanalyzerCsrCheckoutPage
     */
    selectEnvironment: () => Promise<void>;
    /**
     * @param {string} channel
     * @memberof PlanalyzerCsrCheckoutPage
     */
    selectChannel: (channel: string) => Promise<void>;
    /**
     * @param {string} subChannel
     * @memberof PlanalyzerCsrCheckoutPage
     */
    selectSubChannel: (subChannel: string) => Promise<void>;
    /**
     * @param {string} region
     * @memberof PlanalyzerCsrCheckoutPage
     */
    selectRegion: (region: string) => Promise<void>;
    /**
     * @param {string} marketLocale
     * @memberof PlanalyzerCsrCheckoutPage
     */
    selectMarketLocale: (marketLocale: string) => Promise<void>;
    /**
     * @param {string} prepaidMonths
     * @memberof PlanalyzerCsrCheckoutPage
     */
    enterPrepaidMonths: (prepaidMonths: string) => Promise<void>;
    /**
     * @param {string} couponCode
     * @memberof PlanalyzerCsrCheckoutPage
     */
    enterCouponCode: (couponCode: string) => Promise<void>;
    /**
     * @param {Array<string>} plans
     * @memberof PlanalyzerCsrCheckoutPage
     */
    clickPlanCheckboxes: (plans: Array<string>) => Promise<void>;
    /**
     * @memberof PlanalyzerCsrCheckoutPage
     */
    clickShowResults: () => Promise<void>;
    /**
     * @memberof PlanalyzerCsrCheckoutPage
     */
    clickGoToCheckout: () => Promise<void>;
}
