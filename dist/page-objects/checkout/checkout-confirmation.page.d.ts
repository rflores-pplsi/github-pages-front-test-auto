import { CheckoutPaymentsBankDraftPage } from './checkout-payments-bank-draft.page';
/**
 * @export
 * @class CheckoutConfirmationPage
 * @extends {CheckoutPaymentsBankDraftPage}
 */
export declare class CheckoutConfirmationPage extends CheckoutPaymentsBankDraftPage {
    static pPlan: string;
    static pPlanPrice: string;
    static txtTotalLabel: string;
    static txtTotalPriceLabel: string;
    navigateToCheckoutConfirmationPageUsingPlanalyzer: (state: string, paymentMethod: string) => Promise<void>;
    navigateFromPaymentBankDraftPageToConfirmationPage: () => Promise<void>;
    navigateFromPaymentAgreementPageToConfirmationPage: () => Promise<void>;
    navigateFromPaymentBankDraftPageToConfirmationPageCanada: () => Promise<void>;
    navigateFromPaymentCreditCardPageToConfirmationPageCanada: () => Promise<void>;
    /**
     * @memberof CheckoutConfirmationPage
     */
    clickCompleteEnrollmentButton: () => Promise<void>;
    /**
     * @memberof CheckoutConfirmationPage
     */
    clickAgreementCheckbox: () => Promise<void>;
    assertWelcomeToLegalshiledFamilyPage: () => Promise<void>;
    assertOrderSummaryPlanPriceConfirmationPage: () => Promise<void>;
    /**
     * @param {string} planName
     * @memberof CheckoutConfirmationPage
     */
    assertOrderSummaryPlanLabelConfirmationPage: (planName: string) => Promise<void>;
    assertOrderSummaryLegalShieldMembershipConfirmationPage: () => Promise<void>;
    assertOrderSummaryMonthlyConfirmationPage: () => Promise<void>;
    assertNoMemberNumbersAreDisplayed: () => Promise<void>;
    assertIdShieldMembershipIsDisplayed: () => Promise<void>;
    /**
     * @param {string} planType
     * @memberof CheckoutConfirmationPage
     */
    assertLegalShieldMembershipIsDisplayed: (planType: string) => Promise<void>;
    assertMembershipTileIsDisplayed: (planType: string) => Promise<void>;
    /**
     * @param {string} planName
     * @memberof CheckoutConfirmationPage
     */
    assertPlanNameDisplayedInConfirmationPageOrderSummary: (planName: string) => Promise<void>;
    /**
     * @param {string} planName
     * @memberof CheckoutConfirmationPage
     */
    assertPlanCostIsNotDisplayedInConfirmationPageOrderSummaryForPlanName: (planName: string) => Promise<void>;
    assertNoPlanCostsAreDisplayedInConfirmationPageOrderSummary: () => Promise<void>;
    /**
     * @param {string} planName
     * @memberof CheckoutConfirmationPage
     */
    assertPlanCostNotEmpty: (planName: string) => Promise<void>;
    /**
     * @param {string} planName
     * @memberof CheckoutConfirmationPage
     */
    assertPlanCostIsDisplayedInConfirmationOrderSummaryForPlanName: (planName: string) => Promise<void>;
    /**
     * @param {string} planName
     * @memberof CheckoutConfirmationPage
     */
    assertPlanCostIsHidden: (planName: string) => Promise<void>;
    /**
     * @param {string} groupPayConfig
     * @param {string} totalCost
     * @memberof CheckoutConfirmationPage
     */
    assertDisclaimerLanguage: (groupPayConfig: string, totalCost: string) => Promise<void>;
    assertTermsOfServiceLanguageAndLink: () => Promise<void>;
}
