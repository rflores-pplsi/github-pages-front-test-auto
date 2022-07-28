import { ClassicShieldAtWork } from './classic-login.page';
/**
 * @export
 * @class ShieldAtWorkAccountTab
 * @extends {LsWorkLoginPage}
 */
export declare class ClassicShieldAtWorkAccountTab extends ClassicShieldAtWork {
    navigateToClassicShieldAtWork: () => Promise<void>;
    clickViewBtn: () => Promise<void>;
    clickMenuBtn: () => Promise<void>;
    clickSecurityBtn: () => Promise<void>;
    clickEditEmployeeBtn: () => Promise<void>;
    assertSecurityPage: () => Promise<void>;
    assertEditEmployeePage: () => Promise<void>;
}
