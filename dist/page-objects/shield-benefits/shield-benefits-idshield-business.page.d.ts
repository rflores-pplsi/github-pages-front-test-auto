import { OktaPage } from '../okta/okta.page';
/**
 * @export
 * @class ShieldBenefitsIDShieldBusinessPage
 * @extends {ShieldBenefitsIDShieldBusinessPage}
 */
export declare class ShieldBenefitsIDShieldBusinessPage extends OktaPage {
    /**
     *
     *
     * @param {string} group
     * @memberof ShieldBenefitsIDShieldBusinessPage
     */
    searchGroup: (group: string) => Promise<void>;
    copyNewGroupURL: () => Promise<void>;
    /**
     *
     *
     * @param {string} state
     * @param {string} paymentFrequency
     * @memberof ShieldBenefitsIDShieldBusinessPage
     */
    selectStateAndPaymentFrequency: (state: string, paymentFrequency: string) => Promise<void>;
    /**
     *
     *
     * @param {string} value
     * @memberof ShieldBenefitsIDShieldBusinessPage
     */
    navigateToGroupEnrollmentGroupURLPage: (value: string) => Promise<void>;
    navigateToGroupEnrollmentSearchPage: () => Promise<void>;
    /**
     *
     *
     * @param {string} group
     * @memberof ShieldBenefitsCommercialDriverPage
     */
    navigateToGroupEnrollmentCommercialDriverPage: (group: string) => Promise<void>;
    clickBtnEditGroup: () => Promise<void>;
    clickBtnSignIn: () => Promise<void>;
    clickBtnBackToTop: () => Promise<void>;
    clickBtnEnroll: () => Promise<void>;
    clickBtnPricing: () => Promise<void>;
    clickBtnIDShieldBusinessPage: () => Promise<void>;
    assertShieldBenefitsIDShieldBusinessPage: () => Promise<void>;
    assertSignInButtonIsDisplayed: () => Promise<void>;
    assertEnrollNowButtonIsDisplayed: () => Promise<void>;
    assertButtonViewDetailsIsDisplayed: () => Promise<void>;
    assertLinkMemberPerksIsDisplayed: () => Promise<void>;
}
