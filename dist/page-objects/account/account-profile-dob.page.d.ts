import { AccountProfilePage } from './account-profile.page';
/**
 * @export
 * @class AccountProfileDoBPage
 * @extends {AccountProfilePage}
 */
export declare class AccountProfileDoBPage extends AccountProfilePage {
    editDateOfBirthTxtBox: () => Promise<void>;
    navigateProfileDateOfBirthPage: () => Promise<void>;
    clickSaveDateOfBirthButton: () => Promise<void>;
    assertDateOfBirthOnProfileDOBPage: () => Promise<void>;
}
