import { LoginPage } from '../login/login.page';
/**
 * @export
 * @class AccountHeaderPage
 * @extends {LoginPage}
 */
export declare class AccountHeaderPage extends LoginPage {
    logout: () => Promise<void>;
    clickLargeLogo: () => Promise<void>;
    clickHelpButton: () => Promise<void>;
    assertHelpDropdownInformation: () => Promise<void>;
    assertLoggedOutPageUrl: () => Promise<void>;
}
