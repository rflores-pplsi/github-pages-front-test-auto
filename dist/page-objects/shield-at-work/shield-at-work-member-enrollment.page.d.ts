import { LsWorkLoginPage } from './shield-at-work-login.page';
/**
 * @export
 * @class ShieldAtWorkMemberEnrollment
 * @extends {LsWorkLoginPage}
 */
export declare class ShieldAtWorkMemberEnrollment extends LsWorkLoginPage {
    fillOutContactInformation: () => Promise<void>;
    navigateToShieldAtWorkMemberEnrollment: () => Promise<void>;
    clickEnrollNewMember: () => Promise<void>;
    clickContinueButtonContactInfo: () => Promise<void>;
    assertEditButton: () => Promise<void>;
}
