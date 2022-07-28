import { LoginPage } from '../login/login.page';
/**
 * @export
 * @class ClassicShieldAtWork
 * @extends {LoginPage}
 */
export declare class ClassicShieldAtWork extends LoginPage {
    loginWithCredentials: () => Promise<void>;
    navigateToClassicShieldAtWork: () => Promise<void>;
    clickSignUp: () => Promise<void>;
    assertTypeFormPageUrl: () => Promise<void>;
}
