import { LoginPage } from '../login/login.page';
/**
 * @export
 * @class ActivatePage
 * @extends {LoginPage}
 */
export declare class ActivatePage extends LoginPage {
    submitAccountCode: (accountCode: string) => Promise<void>;
    clickDontKnowCodeLink: () => Promise<void>;
    clickSignInAsAnotherUserLink: () => Promise<void>;
    assertActivatePageLoginRedirectUrl: () => Promise<void>;
    assertOnTheActivateEnterCodePage: () => Promise<void>;
    assertSuccessMsgIsDisplayed: () => Promise<void>;
}
