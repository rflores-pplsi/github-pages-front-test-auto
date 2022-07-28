import { LoginPage } from './login.page';
/**
 * @export
 * @class LoginForgotPasswordPage
 * @extends {LoginPage}
 */
export declare class LoginForgotPasswordPage extends LoginPage {
    requestPasswordResetEmail: () => Promise<void>;
    assertSuccessBanner: () => Promise<void>;
}
