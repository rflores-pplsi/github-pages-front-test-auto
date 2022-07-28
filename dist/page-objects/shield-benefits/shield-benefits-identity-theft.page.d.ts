import { OktaPage } from '../okta/okta.page';
/**
 * @export
 * @class ShieldBenefitsIdentityTheftPage
 * @extends {ShieldBenefitsIdentityTheftPage}
 */
export declare class ShieldBenefitsIdentityTheftPage extends OktaPage {
    /**
     *
     *
     * @param {string} group
     * @memberof ShieldBenefitsIdentityTheftPage
     */
    searchGroup: (group: string) => Promise<void>;
    copyNewGroupURL: () => Promise<void>;
    /**
     *
     *
     * @param {string} value
     * @memberof ShieldBenefitsIdentityTheftPage
     */
    navigateToGroupEnrollmentGroupURLPage: (value: string) => Promise<void>;
    navigateToGroupEnrollmentSearchPage: () => Promise<void>;
    /**
     *
     *
     * @param {string} group
     * @memberof ShieldBenefitsIdentityTheftPage
     */
    navigateToGroupEnrollmentIdentityTheftPage: (group: string) => Promise<void>;
    clickBtnEditGroup: () => Promise<void>;
    clickBtnSignIn: () => Promise<void>;
    clickAppStoreLink: () => Promise<void>;
    clickBtnBackToTop: () => Promise<void>;
    clickLanguageDropDown: () => Promise<void>;
    clickLnkMemberPerks: () => Promise<void>;
    selectSpanishLanguage: () => Promise<void>;
    assertShieldBenefitsIdentityTheftPage: () => Promise<void>;
    assertSignInButtonIsDisplayed: () => Promise<void>;
    assertAppStoreButtonISDisplayed: () => Promise<void>;
    assertIniciarSesionTranslation: () => Promise<void>;
}
