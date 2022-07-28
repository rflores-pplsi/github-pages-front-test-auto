import { ClassicShieldAtWork } from './classic-login.page';
/**
 * @export
 * @class ClassicShieldAtWorkReportsTab
 * @extends {LsWorkLoginPage}
 */
export declare class ClassicShieldAtWorkReportsTab extends ClassicShieldAtWork {
    navigateToClassicShieldAtWork: () => Promise<void>;
    clickViewBtn: () => Promise<void>;
    clickReports: () => Promise<void>;
    assertReportsPage: () => Promise<void>;
}
