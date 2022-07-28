import { LsWorkLoginPage } from './shield-at-work-login.page';
/**
 * @export
 * @class ShieldAtWorkAccountTab
 * @extends {LsWorkLoginPage}
 */
export declare class ShieldAtWorkAccountTab extends LsWorkLoginPage {
    /**
     *
     *
     * @param {string} group
     * @memberof ShieldAtWorkAccountTab
     */
    groupSearchByGroupNumber: (group: string) => Promise<void>;
    clickViewGroup: () => Promise<void>;
    navigateToShieldAtWorkAccountTab: () => Promise<void>;
    assertCompanyInformation: () => Promise<void>;
    assertContactInformation: () => Promise<void>;
    assertAddress: () => Promise<void>;
    assertAvailablePlanOfferings: () => Promise<void>;
    assertStateIsDisplayed: () => Promise<void>;
    assertPaymentFrequencyIsDisplayed: () => Promise<void>;
}
