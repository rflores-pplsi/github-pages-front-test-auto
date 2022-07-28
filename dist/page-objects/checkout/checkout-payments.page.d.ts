import { Page } from '@playwright/test';
import { CheckoutPersonalInfoPage } from './checkout-personal-info.page';
/**
 * @export
 * @class AccountPaymentsPage
 */
export declare class CheckoutPaymentsPage extends CheckoutPersonalInfoPage {
    navigateToPaymentsPage: (state: string) => Promise<void>;
    clickBankDraftBtn: () => Promise<void>;
    clickCreditCardBtn: () => Promise<void>;
    assertAccoutPaymentsPage: () => Promise<void>;
    assertTermsOfServiceNewTab: () => Promise<Page>;
}
