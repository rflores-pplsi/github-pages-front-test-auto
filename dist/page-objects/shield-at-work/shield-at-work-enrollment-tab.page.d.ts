import { LsWorkLoginPage } from '../shield-at-work/shield-at-work-login.page';
/**
 * @export
 * @class ShieldAtWorkEnrollmentTab
 * @extends {LsWorkLoginPage}
 */
export declare class ShieldAtWorkEnrollmentTab extends LsWorkLoginPage {
    /**
     *
     *
     * @param {string} group
     * @memberof ShieldAtWorkEnrollmentTab
     */
    groupSearchByGroupNumber: (group: string) => Promise<void>;
    clickViewGroupButton: () => Promise<void>;
    clickEnrollmentTab: () => Promise<void>;
    navigateToShieldAtWorkEnrollmentTab: () => Promise<void>;
    assertManageSiteButtonIsVisible: () => Promise<void>;
    assertEnrollmentInformationIsDisplayed: () => Promise<void>;
}
