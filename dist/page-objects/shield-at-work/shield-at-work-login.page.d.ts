import { LoginPage } from '../login/login.page';
/**
 * @export
 * @class LsWorkLoginPage
 * @extends {LoginPage}
 */
export declare class LsWorkLoginPage extends LoginPage {
    loginWithCredentials: () => Promise<void>;
    navigateToShieldAtWork: () => Promise<void>;
    assertTextGroup: () => Promise<void>;
}
