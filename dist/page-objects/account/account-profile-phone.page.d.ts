import { AccountNavigationPage } from './account-navigation.page';
import { AccountProfilePage } from './account-profile.page';
export declare class AccountProfilePhonePage extends AccountProfilePage {
    accountProfilePage: AccountProfilePage;
    accoutNavigationPage: AccountNavigationPage;
    addPhoneNumberFun: (phone: string) => Promise<void>;
    editPhoneNumberFun: (phone: string, edPhone: string) => Promise<void>;
    deletePhoneNumberFun: (phone: string) => Promise<void>;
    navigateToProfilePhoneNumberPage: () => Promise<void>;
    clickAddPhoneNumberButton: () => Promise<void>;
    assertProfilePhoneNumberTxtBox: (phone: string) => Promise<void>;
    assertProfileDeletePhoneNumberMsg: () => Promise<void>;
}
