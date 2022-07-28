import { LoginPage } from '../login/login.page';
/**
 * @export
 * @class ActivateHeaderPage
 * @extends {LoginPage}
 */
export declare class ActivateHeaderPage extends LoginPage {
    logout: () => Promise<void>;
    clickLargeLogo: () => Promise<void>;
    clickHelpButton: () => Promise<void>;
    assertHelpDropdownInformation: () => Promise<void>;
    assertLoggedOutPageUrl: () => Promise<void>;
}
