import { LoginPage } from '../login/login.page';
import { AccountNavigationPage } from './account-navigation.page';
/**
 *
 *
 * @export
 * @class AccountProfilePage
 * @extends {LoginPage}
 */
export declare class AccountProfilePage extends LoginPage {
    accountNavigationPage: AccountNavigationPage;
    navigateToProfilePage: () => Promise<void>;
    clickEditNameButton: () => Promise<void>;
    clickEditDateOfBirthButton: () => Promise<void>;
    clickEditPhoneNumberButton: () => Promise<void>;
    clickEditAddressButton: () => Promise<void>;
    clickEditEmailButton: () => Promise<void>;
    assertProfileNamePage: () => Promise<void>;
    assertProfileDateOfBirthPageUrl: () => Promise<void>;
    assertProfilePhoneNumberPageUrl: () => Promise<void>;
    assertProfileAddressPageUrl: () => Promise<void>;
    assertProfileEmailPageUrl: () => Promise<void>;
}
