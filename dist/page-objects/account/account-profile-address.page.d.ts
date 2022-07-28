import { AccountProfilePage } from './account-profile.page';
/**
 * @export
 * @class AccountProfileAddressPage
 * @extends {AccountProfilePage}
 */
export declare class AccountProfileAddressPage extends AccountProfilePage {
    /**
     * @param {string} address1
     * @param {string} zip
     * @memberof AccountProfileAddressPage
     */
    addressForm: (address1: string, zip: string) => Promise<void>;
    navigateToProfileAddressPage: () => Promise<void>;
    clickSaveAddressButton: () => Promise<void>;
    /**
     * @param {string} label
     * @memberof AccountProfileAddressPage
     */
    stateSelectMethod: (label: string) => Promise<void>;
    /**
     * @param {string} label
     * @memberof AccountProfileAddressPage
     */
    countrySelectMethod: (label: string) => Promise<void>;
    /**
     * @param {string} txt
     * @memberof AccountProfileAddressPage
     */
    address1EditTxtBox: (txt: string) => Promise<void>;
    /**
     * @param {string} txt
     * @memberof AccountProfileAddressPage
     */
    address2EditTxtBox: (txt: string) => Promise<void>;
    /**
     * @param {string} txt
     * @memberof AccountProfileAddressPage
     */
    cityEditTxtBox: (txt: string) => Promise<void>;
    /**
     * @param {string} txt
     * @memberof AccountProfileAddressPage
     */
    zipPostalEditTxtBox: (txt: string) => Promise<void>;
    /**
     * @param {string} txt
     * @memberof AccountProfileAddressPage
     */
    assertAddress1HasText: (txt: string) => Promise<void>;
    /**
     * @param {string} txt
     * @memberof AccountProfileAddressPage
     */
    assertAddress2HasText: (txt: string) => Promise<void>;
    /**
     * @param {string} txt
     * @memberof AccountProfileAddressPage
     */
    assertCityHasText: (txt: string) => Promise<void>;
    /**
     * @param {string} txt
     * @memberof AccountProfileAddressPage
     */
    assertStateHasText: (txt: string) => Promise<void>;
    /**
     * @param {string} txt
     * @memberof AccountProfileAddressPage
     */
    assertZipPostalHasText: (txt: string) => Promise<void>;
    /**
     * @param {string} txt
     * @memberof AccountProfileAddressPage
     */
    assertCountryHasText: (txt: string) => Promise<void>;
    /**
     * @param {string} txt
     * @memberof AccountProfileAddressPage
     */
    assertFullAddressHasText: (txt: string) => Promise<void>;
}
