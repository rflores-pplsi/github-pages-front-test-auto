import { CheckoutPaymentsPage } from './checkout-payments.page';
/**
 * @export
 * @class AccountPaymentsBankDraftPage
 */
export declare class CheckoutPaymentsCreditCardPage extends CheckoutPaymentsPage {
    fillCreditCardForm: () => Promise<void>;
    fillOrderSummarypPlanValue: () => Promise<string>;
    fillOrderSummarypPlanPriceValue: () => Promise<string>;
    fillOrderSummarytxtTotalLabelValue: () => Promise<string>;
    fillOrderSummarytxtTotalPriceLabelValue: () => Promise<string>;
    fillCreditCardFormForCanada: () => Promise<void>;
    navigateToPaymentsCreditCardPage: (state: string) => Promise<void>;
    fillCreditCardNumberTxt: (number: string) => Promise<void>;
    fillExpirationDateTxt: (expdate: string) => Promise<void>;
    fillSecurityCodeTxt: (code: string) => Promise<void>;
    fillCardholderNameTxt: (credicardholdrname: string) => Promise<void>;
    fillPostalCodeTxt: (postalcode: string) => Promise<void>;
    clickCreditCardPurchaseBtn: () => Promise<void>;
    assertWelcomeToLegalshiledFamilyPage: () => Promise<void>;
}
