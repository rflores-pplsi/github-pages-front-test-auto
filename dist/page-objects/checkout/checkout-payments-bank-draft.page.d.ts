import { CheckoutPaymentsCreditCardPage } from './checkout-payments-credit-card.page';
/**
 * @export
 * @class AccountPaymentsBankDraftPage
 */
export declare class CheckoutPaymentsBankDraftPage extends CheckoutPaymentsCreditCardPage {
    fillBankDraftForm: () => Promise<void>;
    fillOrderSummarypPlanValue: () => Promise<string>;
    fillOrderSummarypPlanPriceValue: () => Promise<string>;
    fillOrderSummarytxtTotalLabelValue: () => Promise<string>;
    fillOrderSummarytxtTotalPriceLabelValue: () => Promise<string>;
    fillBankDraftFormForCanada: () => Promise<void>;
    navigateToPaymentsBankDraftPage: (state: string) => Promise<void>;
    /**
     * @param {string} groupPayConfig
     * @memberof CheckoutPaymentsBankDraftPage
     */
    navigateFromPersonalInfoPageToPaymentPage: (groupPayConfig: string, planName: string) => Promise<void>;
    fillAccountNumberTxt: (account: string) => Promise<void>;
    fillRoutingNumberTxt: (routing: string) => Promise<void>;
    fillAccountHolderNameTxt: (accountholdrname: string) => Promise<void>;
    fillBankNameTxt: (bankname: string) => Promise<void>;
    fillAccountNumberForCaTxt: (account: string) => Promise<void>;
    fillTransitNumberTxt: (routing: string) => Promise<void>;
    fillInstitutionNumberTxt: (routing: string) => Promise<void>;
    clickPurchaseBtn: () => Promise<void>;
    assertWelcomeToLegalshiledFamilyPage: () => Promise<void>;
}
