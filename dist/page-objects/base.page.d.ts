import { BrowserContext, Page } from '@playwright/test';
/**
 * @export
 * @class BasePage
 */
export declare class BasePage {
    context: BrowserContext;
    page: Page;
    /**
     * Creates an instance of BasePage.
     * @param {Page} page
     * @memberof BasePage
     */
    constructor(page: Page);
    /**
     * @param {string} url
     * @memberof BasePage
     */
    goTo: (url: string) => Promise<void>;
    /**
     * @param {string} ele
     * @memberof BasePage
     */
    isElementVisible: (ele: string) => Promise<boolean>;
    /**
     * @param {string} ele
     * @memberof BasePage
     */
    clickOnElement: (ele: string) => Promise<void>;
    /**
     * @param {string} ele
     * @memberof BasePage
     */
    hoverElement: (ele: string) => Promise<void>;
    /**
     * @param {string} ele
     * @param {string} txt
     * @memberof BasePage
     */
    fillTextBox: (ele: string, txt: string) => Promise<void>;
    /**
     * @param {string} ele
     * @memberof BasePage
     */
    clearTextBox: (ele: string) => Promise<void>;
    /**
     * @param {string} ele
     * @param {string} txt
     * @memberof BasePage
     */
    typeTextBox: (ele: string, txt: string) => Promise<void>;
    /**
     * @param {string} txt
     * @memberof BasePage
     */
    keyboardTextBox: (txt: string) => Promise<void>;
    /**
     * @param {string} ele
     * @param {string} txt
     * @memberof BasePage
     */
    assertElementHasText: (ele: string, txt: string) => Promise<void>;
    /**
     * @param {string} selector
     * @param {string} txt
     * @memberof BasePage
     */
    assertElementContainsText: (selector: string, txt: string) => Promise<void>;
    /**
     * @param {string} selector
     * @param {number} index
     * @param {string} txt
     * @memberof BasePage
     */
    assertElementFromAnArrayHasText: (selector: string, index: number, txt: string) => Promise<void>;
    /**
     * @param {Page} page
     * @param {string} url
     * @memberof BasePage
     */
    assertUrl: (page: Page, url: string) => Promise<void>;
    /**
     * @param {Page} page
     * @param {string} substring
     * @memberof BasePage
     */
    assertUrlContains: (page: Page, substring: string) => Promise<void>;
    /**
     * @param {string} ele
     * @memberof BasePage
     */
    assertElementIsVisible: (ele: string) => Promise<void>;
    /**
     * @param {string} ele
     * @memberof BasePage
     */
    assertElementIsHidden: (ele: string) => Promise<void>;
    /**
     * @param {string} ele
     * @param {string} attribute
     * @param {string} value
     * @memberof BasePage
     */
    assertElementAttributeValue: (ele: string, attribute: string, value: string) => Promise<void>;
    /**
     * @param {string} ele
     * @memberof BasePage
     */
    assertElementIsEnabled: (ele: string) => Promise<void>;
    /**
     * @param {string} ele
     * @memberof BasePage
     */
    assertElementIsDisabled: (ele: string) => Promise<void>;
    /**
     * @param {string} ele
     * @memberof BasePage
     */
    locateElement: (ele: string) => Promise<void>;
    /**
     * @param {number} [max=10000]
     * @memberof BasePage
     */
    createRandomInt: (max?: number) => Promise<number>;
    /**
     * @param {string} ele
     * @param {string} label
     * @memberof BasePage
     */
    selectFromDropDownMenu: (ele: string, label: string) => Promise<void>;
    /**
     * @param {string} string1
     * @param {string} string2
     * @memberof BasePage
     */
    assertStringMatch: (string1: string, string2: string) => Promise<void>;
    /**
     * @param {boolean} value1
     * @param {boolean} value2
     * @memberof BasePage
     */
    assertBoolean: (value1: boolean, value2: boolean) => Promise<void>;
    assertElementNotOnPage: (ele: string) => Promise<void>;
    /**
     * @param {string} ele
     * @memberof BasePage
     */
    waitForElementToBeVisible: (ele: string) => Promise<void>;
    /**
     * @param {string} ele
     * @memberof BasePage
     */
    checkCheckbox: (ele: string) => Promise<void>;
    /**
     * @param {string} ele
     * @memberof BasePage
     */
    assertInnerTextIsTruthy: (ele: string) => Promise<void>;
}
