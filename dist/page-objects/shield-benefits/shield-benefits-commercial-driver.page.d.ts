import { OktaPage } from '../okta/okta.page';
/**
 * @export
 * @class ShieldBenefitsCommercialDriverPage
 * @extends {ShieldBenefitsCommercialDriverPage}
 */
export declare class ShieldBenefitsCommercialDriverPage extends OktaPage {
    /**
     *
     *
     * @param {string} group
     * @memberof ShieldBenefitsCommercialDriverPage
     */
    searchGroup: (group: string) => Promise<void>;
    /**
     *
     *
     * @param {string} zipcode
     * @memberof ShieldBenefitsCommercialDriverPage
     */
    searchLawFirm: (zipcode: string) => Promise<void>;
    copyNewGroupURL: () => Promise<void>;
    /**
     *
     *
     * @param {string} state
     * @param {string} paymentFrequency
     * @memberof ShieldBenefitsCommercialDriverPage
     */
    selectStateAndPaymentFrequency: (state: string, paymentFrequency: string) => Promise<void>;
    /**
     *
     *
     * @param {string} value
     * @memberof ShieldBenefitsCommercialDriverPage
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
    clickAppStoreLink: () => Promise<void>;
    clickBtnBackToTop: () => Promise<void>;
    clickBtnPricing: () => Promise<void>;
    clickBtnCommercialDriverPage: () => Promise<void>;
    assertShieldBenefitsCommercialDriverPage: () => Promise<void>;
    assertSignInButtonIsDisplayed: () => Promise<void>;
    assertLawFirmInformation: () => Promise<void>;
    assertAppStoreButtonISDisplayed: () => Promise<void>;
    assertButtonViewDetailsIsDisplayed: () => Promise<void>;
    assertLinkMemberPerksIsDisplayed: () => Promise<void>;
}
