import { ClassicShieldAtWork } from './classic-login.page';
/**
 * @export
 * @class ClassicShieldAtWorkEnrollmentTab
 * @extends {LsWorkLoginPage}
 */
export declare class ClassicShieldAtWorkEnrollmentTab extends ClassicShieldAtWork {
    navigateToClassicShieldAtWork: () => Promise<void>;
    clickViewBtn: () => Promise<void>;
    clickEnrollmentTab: () => Promise<void>;
    clickEnrollNewMemberBtn: () => Promise<void>;
    assertMemberList: () => Promise<void>;
    assertMemberEnrollmentForm: () => Promise<void>;
}
