import { BasePage } from '../base.page';
/**
 * @export
 * @class LoginPage
 * @extends {BasePage}
 */
export declare class LoginPage extends BasePage {
    /**
     * @param {string} emailOrUsername
     * @param {string} password
     * @memberof LoginPage
     */
    login: (emailOrUsername: string | undefined, password: string | undefined) => Promise<void>;
    /**
     * @param {string} emailOrUsername
     * @param {string} password
     * @memberof LoginPage
     */
    loginWithEnterKey: (emailOrUsername: string | undefined, password: string | undefined) => Promise<void>;
    navigateToLoginPage: () => Promise<void>;
    navigateToAccountPlansPage: () => Promise<void>;
    navigateToActivatePage: () => Promise<void>;
    navigateToLoginForgotUsernameOrEmailPage: () => Promise<void>;
    testEnv: () => Promise<void>;
    clickForgotPasswordLink: () => Promise<void>;
    clickSignUpLink: () => Promise<void>;
    assertAccountsPlanPageUrl: () => Promise<void>;
    assertAccountsPlanPageLoginRedirectUrl: () => Promise<void>;
    assertActivatePageUrl: () => Promise<void>;
    assertStatusPageUrl: () => Promise<void>;
}
