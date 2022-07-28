import { AccountNavigationPage } from './account-navigation.page';
import { AccountProfilePage } from './account-profile.page';
export declare class AccountProfileEmailPage extends AccountProfilePage {
    accoutNavigationPage: AccountNavigationPage;
    addEmailAddressFun: (email: string) => Promise<void>;
    editEmailAddressFun: (email: string, newEmail: string) => Promise<void>;
    deleteEmailAddressFun: (email: string) => Promise<void>;
    navigateToProfileEmailPage: () => Promise<void>;
    assertProfileUpdatedEmailTxtBox: (email: string) => Promise<void>;
    assertProfileAddEmailTxtBox: (email: string) => Promise<void>;
    assertProfileDeletedEmailTxtBox: (email: string) => Promise<void>;
}
