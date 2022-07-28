import { LsWorkLoginPage } from './shield-at-work-login.page';
/**
 * @export
 * @class ShieldAtWorkGroupManagement
 * @extends {LsWorkLoginPage}
 */
export declare class ShieldAtWorkGroupManagement extends LsWorkLoginPage {
    groupSearchByGroupNumber: () => Promise<void>;
    navigateToShieldAtWorkGroupManagementPage: () => Promise<void>;
    assertTextGroup: () => Promise<void>;
}
