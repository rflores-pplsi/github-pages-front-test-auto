import { PlanalyzerCsrCheckoutPage } from '../planalyzer/planalyzer-csr-checkout.page';
/**
 * @export
 * @class ShieldBenefitsLegalPricingPage
 * @extends {BasePage}
 */
export declare class ShieldBenefitsLegalPricingPage extends PlanalyzerCsrCheckoutPage {
    /**
     * @param {string} state
     * @param {string} paymentFrequency
     * @param {string} planName
     * @param {string} tierName
     * @memberof ShieldBenefitsLegalPricingPage
     */
    selectPlanAndEnroll: (state: string, paymentFrequency: string, planName: string, tierName: string) => Promise<void>;
    /**
     * @param {string} state
     * @param {string} planName
     * @param {string} tierName
     * @memberof ShieldBenefitsLegalPricingPage
     */
    selectPlanAndEnrollNoPaymentFrequency: (state: string, planName: string, tierName: string) => Promise<void>;
    /**
     * @param {string} state
     * @param {string} paymentFrequency
     * @param {string} planName1
     * @param {string} planName2
     * @memberof ShieldBenefitsLegalPricingPage
     */
    selectCombinationPlanAndEnroll: (state: string, paymentFrequency: string, planName1: string, planName2: string) => Promise<void>;
    /**
     * @param {string} planName
     * @param {string} tierName
     * @memberof ShieldBenefitsLegalPricingPage
     */
    clickIndividualPlanEnrollNowButton: (planName: string, tierName: string) => Promise<void>;
    /**
     * @param {string} planName1
     * @param {string} planName2
     * @memberof ShieldBenefitsLegalPricingPage
     */
    clickCombinationPlanEnrollNowButton: (planName1: string, planName2: string) => Promise<void>;
}
