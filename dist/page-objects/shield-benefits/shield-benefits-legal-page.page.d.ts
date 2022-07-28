import { OktaPage } from '../okta/okta.page';
/**
 * @export
 * @class ShieldBenefitsLegalPage
 * @extends {ShieldBenefitsLegalPage}
 */
export declare class ShieldBenefitsLegalPage extends OktaPage {
    /**
     *
     *
     * @param {string} group
     * @memberof ShieldBenefitsLegalPage
     */
    searchGroup: (group: string) => Promise<void>;
    /**
     *
     *
     * @param {string} zipcode
     * @memberof ShieldBenefitsLegalPage
     */
    searchLawFirm: (zipcode: string) => Promise<void>;
    copyNewGroupURL: () => Promise<void>;
    /**
     *
     *
     * @param {string} state
     * @param {string} paymentFrequency
     * @memberof ShieldBenefitsLegalPage
     */
    selectStateAndPaymentFrequency: (state: string, paymentFrequency: string) => Promise<void>;
    /**
     *
     *
     * @param {string} value
     * @memberof ShieldBenefitsLegalPage
     */
    navigateToGroupEnrollmentGroupURLPage: (value: string) => Promise<void>;
    navigateToGroupEnrollmentSearchPage: () => Promise<void>;
    /**
     *
     *
     * @param {string} group
     * @memberof ShieldBenefitsLegalPage
     */
    navigateToGroupEnrollmentLegalPage: (group: string) => Promise<void>;
    clickBtnEditGroup: () => Promise<void>;
    clickBtnSignIn: () => Promise<void>;
    clickAppStoreLink: () => Promise<void>;
    clickBtnBackToTop: () => Promise<void>;
    clickBtnPricing: () => Promise<void>;
    clickBtnLegalPage: () => Promise<void>;
    assertShieldBenefitsLegalPage: () => Promise<void>;
    assertSignInButtonIsDisplayed: () => Promise<void>;
    assertLawFirmInformation: () => Promise<void>;
    assertAppStoreButtonISDisplayed: () => Promise<void>;
    assertButtonViewDetailsIsDisplayed: () => Promise<void>;
    assertVideoPlayerIsDisplayed: () => Promise<void>;
}
