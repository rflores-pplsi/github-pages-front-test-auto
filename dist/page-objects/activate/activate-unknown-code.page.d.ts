import { LoginPage } from '../login/login.page';
/**
 * @export
 * @class ActivateUnknownCodePage
 * @extends {LoginPage}
 */
export declare class ActivateUnknownCodePage extends LoginPage {
    /**
     * @param {string} email
     * @memberof ActivateUnknownCodePage
     */
    enterEmail: (email: string) => Promise<void>;
    /**
     * @param {string} email
     * @memberof ActivateUnknownCodePage
     */
    enterEmailAndSendCode: (email: string) => Promise<void>;
    clickBackLink: () => Promise<void>;
    clickSendCodeButton: () => Promise<void>;
    clickDontKnowYourCodeLink: () => Promise<void>;
    assertInvalidEmailAddressHintDisplayed: () => Promise<void>;
    assertSendCodeButtonDisabled: () => Promise<void>;
}
