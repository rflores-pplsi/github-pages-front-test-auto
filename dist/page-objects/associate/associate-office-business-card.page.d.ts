import { LoginPage } from '../login/login.page';
/**
 *
 *
 * @export
 * @class BusinessCard
 * @extends {ChannelsHeaderPage}
 */
export declare class BusinessCard extends LoginPage {
    navigateToBusinessCardPage: () => Promise<void>;
    assertBusinessCardPageContentHasLoaded: () => Promise<void>;
    assertBusinessCardPageShowTitle: () => Promise<void>;
    assertBusinessCardPageFirstNameIsDisplayed: () => Promise<void>;
    assertBusinessCardPageLastNameIsDisplayed: () => Promise<void>;
    assertBusinessCardPagePhoneNumberIsDisplayed: () => Promise<void>;
    assertBusinessCardPageDisplayOnWebsite: () => Promise<void>;
}
