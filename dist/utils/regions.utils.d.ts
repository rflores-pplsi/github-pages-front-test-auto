import { Locator, Page } from '@playwright/test';
/**
 * @export
 * @class RegionsUtils
 */
export default class RegionsUtils {
    static readonly usStates: {
        name: string;
        abbrv: string;
        validAddress: {
            street: string;
            city: string;
            postalCode: string;
        };
        priority: boolean;
    }[];
    static readonly caProvinces: {
        name: string;
        abbrv: string;
        validAddress: {
            street: string;
            city: string;
            postalCode: string;
        };
        priority: boolean;
    }[];
    private page;
    private baseURL;
    readonly ele_sddFooterProvince: Locator;
    readonly ele_sopFooterSelectedProvince: Locator;
    /**
     * Creates an instance of RegionsUtils.
     * @param {Page} page
     * @param {string} baseURL
     * @memberof RegionsUtils
     */
    constructor(page: Page, baseURL: string);
    /**
     *
     *
     * @return {*}  {Promise<string>}
     * @memberof RegionsUtils
     */
    getCurrentSelectedProvinceFromFooter(): Promise<string>;
    /**
     *
     *
     * @param {string} province
     * @return {*}  {Promise<void>}
     * @memberof RegionsUtils
     */
    selectProvinceFromFooter(province: string): Promise<void>;
}
