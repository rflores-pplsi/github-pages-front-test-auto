import { ShieldBenefitsLegalPricingPage } from '../shield-benefits/shield-benefits-legal-pricing.page';
import { OrderSummaryRow } from './checkout.helpers';
import { OrderSummaryRowWithoutCost } from './checkout.helpers';
import { OrderSummaryRowWithoutTier } from './checkout.helpers';
/**
 * @export
 * @class CheckoutOrderSummaryComponent
 * @extends {ShieldBenefitsLegalPricingPage}
 */
export declare class CheckoutOrderSummaryComponent extends ShieldBenefitsLegalPricingPage {
    /**
     * @param {string} groupPayConfig
     * @memberof CheckoutOrderSummaryComponent
     */
    captureOrderSummary: (groupPayConfig: string) => Promise<void>;
    /**
     *
     *
     * @memberof CheckoutOrderSummaryComponent
     */
    captureOrderSummaryWithoutTier: () => Promise<void>;
    /**
     * @param {number} [i=0]
     * @memberof CheckoutOrderSummaryComponent
     */
    captureOrderSummaryRow: (i?: number) => Promise<OrderSummaryRow>;
    captureOrderSummaryRowWithoutTier: (i?: number) => Promise<OrderSummaryRowWithoutTier>;
    /**
     * @param {number} [i=0]
     * @memberof CheckoutOrderSummaryComponent
     */
    captureOrderSummaryRowWithoutCost: (i?: number) => Promise<OrderSummaryRowWithoutCost>;
    /**
     * @memberof CheckoutOrderSummaryComponent
     */
    clickEditOrderLink: () => Promise<void>;
    /**
     * @memberof CheckoutOrderSummaryComponent
     */
    clickOrderSummaryUpChevron: () => Promise<void>;
    /**
     * @memberof CheckoutOrderSummaryComponent
     */
    clickOrderSummaryDownChevron: () => Promise<void>;
    /**
     * @param {string} expectedPlanName
     * @param {string} expectedTierName
     * @param {string} expectedPlanCost
     * @memberof CheckoutOrderSummaryComponent
     */
    assertPlanNameTierNameAndCost: (expectedPlanName: string, expectedTierName: string | undefined, expectedPlanCost: string) => Promise<void>;
    /**
     * @param {string} expectedPlanName
     * @param {string} expectedPlanCost
     * @memberof CheckoutOrderSummaryComponent
     */
    assertPlanNameAndCost: (expectedPlanName: string, expectedPlanCost: string) => Promise<void>;
    /**
     * @param {string} expectedPlanName
     * @memberof CheckoutOrderSummaryComponent
     */
    assertPlanCostsNotDisplayed: (expectedPlanName: string) => Promise<void>;
    /**
     * @param {string} planName
     * @param {string} tierName
     * @memberof CheckoutOrderSummaryComponent
     */
    assertPlanNameAndTierName: (planName: string, tierName: string) => Promise<void>;
    /**
     * @param {string} total
     * @memberof CheckoutOrderSummaryComponent
     */
    assertMonthlyLabelAndTotal: (total: string) => Promise<void>;
    /**
     * @param {string} total
     * @memberof CheckoutOrderSummaryComponent
     */
    assertAnnualLabelAndTotal: (total: string) => Promise<void>;
    /**
     * @param {string} total
     * @memberof CheckoutOrderSummaryComponent
     */
    assertTotalDueToday: (total: string) => Promise<void>;
    /**
     * @param {string} total
     * @memberof CheckoutOrderSummaryComponent
     */
    assertPayPeriodTotal: (total: string) => Promise<void>;
    /**
     * @memberof CheckoutOrderSummaryComponent
     */
    assertPayPeriodTotalIsNotDisplayed: () => Promise<void>;
    /**
     * @param {string} planName
     * @memberof CheckoutOrderSummaryComponent
     */
    assertPlanNameDisplayedInSummary: (planName: string) => Promise<void>;
}
