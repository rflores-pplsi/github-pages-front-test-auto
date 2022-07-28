import { OktaPage } from '../okta/okta.page';
/**
 * @export
 * @class ShieldBenefitsSmallBusinessPage
 * @extends {ShieldBenefitsSmallBusinessPage}
 */
export declare class ShieldBenefitsSmallBusinessPage extends OktaPage {
    /**
     *
     *
     * @param {string} group
     * @memberof ShieldBenefitsSmallBusinessPage
     */
    searchGroup: (group: string) => Promise<void>;
    /**
     *
     *
     * @param {string} zipcode
     * @memberof ShieldBenefitsSmallBusinessPage
     */
    searchLawFirm: (zipcode: string) => Promise<void>;
    copyNewGroupURL: () => Promise<void>;
    /**
     *
     *
     * @param {string} state
     * @param {string} paymentFrequency
     * @memberof ShieldBenefitsSmallBusinessPage
     */
    selectStateAndPaymentFrequency: (state: string, paymentFrequency: string) => Promise<void>;
    /**
     *
     *
     * @param {string} value
     * @memberof ShieldBenefitsSmallBusinessPage
     */
    navigateToGroupEnrollmentGroupURLPage: (value: string) => Promise<void>;
    navigateToGroupEnrollmentSearchPage: () => Promise<void>;
    /**
     *
     *
     * @param {string} group
     * @return {*}  {Promise<void>}
     */
    navigateToGroupEnrollmentSmallBusinessPage: (group: string) => Promise<void>;
    clickBtnEditGroup: () => Promise<void>;
    clickBtnSignIn: () => Promise<void>;
    clickAppStoreLink: () => Promise<void>;
    clickBtnBackToTop: () => Promise<void>;
    clickBtnPricing: () => Promise<void>;
    assertShieldBenefitsSmallBusinessPageSmallBusinessPage: () => Promise<void>;
    assertSignInButtonIsDisplayed: () => Promise<void>;
    assertLawFirmInformation: () => Promise<void>;
    assertAppStoreButtonISDisplayed: () => Promise<void>;
    assertButtonViewDetailsIsDisplayed: () => Promise<void>;
}
