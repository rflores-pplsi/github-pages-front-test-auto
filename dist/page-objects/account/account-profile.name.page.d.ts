import { AccountProfilePage } from './account-profile.page';
/**
 * @export
 * @class AccountProfileNamePage
 * @extends {AccountProfilePage}
 */
export declare class AccountProfileNamePage extends AccountProfilePage {
    editNameForm: () => Promise<void>;
    editFirstNameTxtBox: () => Promise<void>;
    editLastNameTxtBox: () => Promise<void>;
    editMiddleNameTxtBox: () => Promise<void>;
    navigateToProfileNamePage: () => Promise<void>;
    assertProfileFirstNamePageUrl: () => Promise<void>;
}
