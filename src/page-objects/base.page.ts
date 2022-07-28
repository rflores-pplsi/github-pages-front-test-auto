import { expect, BrowserContext, Page } from '@playwright/test';

let context: BrowserContext;

/**
 * @export
 * @class BasePage
 */
export class BasePage {
  context: BrowserContext;
  page: Page;
  /**
   * Creates an instance of BasePage.
   * @param {Page} page
   * @memberof BasePage
   */
  constructor(page: Page) {
    this.page = page;
    this.context = context;
  }

  /**
   * @param {string} url
   * @memberof BasePage
   */
  goTo = async (url: string): Promise<void> => {
    await this.page.goto(url, { waitUntil: 'networkidle' });
  };

  /**
   * @param {string} ele
   * @memberof BasePage
   */
  isElementVisible = async (ele: string): Promise<boolean> => {
    const visibility = await this.page.isVisible(ele);
    return visibility;
  };

  /**
   * @param {string} ele
   * @memberof BasePage
   */
  clickOnElement = async (ele: string): Promise<void> => {
    await this.page.locator(ele).click();
  };

  /**
   * @param {string} ele
   * @memberof BasePage
   */
  hoverElement = async (ele: string): Promise<void> => {
    await this.page.locator(ele).hover();
  };

  /**
   * @param {string} ele
   * @param {string} txt
   * @memberof BasePage
   */
  fillTextBox = async (ele: string, txt: string): Promise<void> => {
    await this.page.fill(ele, txt);
  };

  /**
   * @param {string} ele
   * @memberof BasePage
   */
  clearTextBox = async (ele: string): Promise<void> => {
    await this.page.fill(ele, '');
  };

  /**
   * @param {string} ele
   * @param {string} txt
   * @memberof BasePage
   */
  typeTextBox = async (ele: string, txt: string): Promise<void> => {
    await this.page.type(ele, txt);
  };

  /**
   * @param {string} txt
   * @memberof BasePage
   */
  keyboardTextBox = async (txt: string): Promise<void> => {
    await this.page.keyboard.insertText(txt);
  };

  /**
   * @param {string} ele
   * @param {string} txt
   * @memberof BasePage
   */
  assertElementHasText = async (ele: string, txt: string): Promise<void> => {
    await expect(this.page.locator(ele)).toHaveText(txt);
  };

  /**
   * @param {string} selector
   * @param {string} txt
   * @memberof BasePage
   */
  assertElementContainsText = async (selector: string, txt: string): Promise<void> => {
    const locator = this.page.locator(selector);
    await expect(locator).toContainText(txt);
  };

  /**
   * @param {string} selector
   * @param {number} index
   * @param {string} txt
   * @memberof BasePage
   */
  assertElementFromAnArrayHasText = async (selector: string, index: number, txt: string): Promise<void> => {
    const locator = this.page.locator(selector);
    const textArray = await locator.allInnerTexts();
    expect(textArray[index]).toEqual(txt);
  };

  /**
   * @param {Page} page
   * @param {string} url
   * @memberof BasePage
   */
  assertUrl = async (page: Page, url: string): Promise<void> => {
    await expect(page).toHaveURL(url);
    await page.waitForLoadState('domcontentloaded');
  };

  /**
   * @param {Page} page
   * @param {string} substring
   * @memberof BasePage
   */
  assertUrlContains = async (page: Page, substring: string): Promise<void> => {
    await expect(page).toHaveURL(new RegExp(substring));
    await page.waitForLoadState('domcontentloaded');
  };

  /**
   * @param {string} ele
   * @memberof BasePage
   */
  assertElementIsVisible = async (ele: string): Promise<void> => {
    const locator = this.page.locator(ele);
    await expect(locator).toBeVisible();
  };

  /**
   * @param {string} ele
   * @memberof BasePage
   */
  assertElementIsHidden = async (ele: string): Promise<void> => {
    const locator = this.page.locator(ele);
    await expect(locator).toBeHidden();
  };

  /**
   * @param {string} ele
   * @param {string} attribute
   * @param {string} value
   * @memberof BasePage
   */
  assertElementAttributeValue = async (ele: string, attribute: string, value: string): Promise<void> => {
    const locator = this.page.locator(ele);
    expect(locator).toHaveAttribute(attribute, value);
  };

  /**
   * @param {string} ele
   * @memberof BasePage
   */
  assertElementIsEnabled = async (ele: string): Promise<void> => {
    const locator = this.page.locator(ele);
    expect(locator).toBeEnabled();
  };

  /**
   * @param {string} ele
   * @memberof BasePage
   */
  assertElementIsDisabled = async (ele: string): Promise<void> => {
    const locator = this.page.locator(ele);
    expect(locator).toBeDisabled();
  };

  /**
   * @param {string} ele
   * @memberof BasePage
   */
  locateElement = async (ele: string): Promise<void> => {
    await this.page.locator(ele);
  };

  /**
   * @param {number} [max=10000]
   * @memberof BasePage
   */
  createRandomInt = async (max = 10000): Promise<number> => {
    return Math.floor(Math.random() * max);
  };

  /**
   * @param {string} ele
   * @param {string} label
   * @memberof BasePage
   */
  selectFromDropDownMenu = async (ele: string, label: string): Promise<void> => {
    await this.page.selectOption(ele, { label: label });
  };

  /**
   * @param {string} string1
   * @param {string} string2
   * @memberof BasePage
   */
  assertStringMatch = async (string1: string, string2: string): Promise<void> => {
    expect(string1).toEqual(string2);
  };

  /**
   * @param {boolean} value1
   * @param {boolean} value2
   * @memberof BasePage
   */
  assertBoolean = async (value1: boolean, value2: boolean): Promise<void> => {
    expect(value1).toEqual(value2);
  };

  /**
   *
   *
   * @param {string} ele
   * @memberof BasePage
   */
  assertElementNotOnPage = async (ele: string): Promise<void> => {
    expect(await this.page.$$(ele)).toHaveLength(0);
  };

  /**
   * @param {string} ele
   * @memberof BasePage
   */
  waitForElementToBeVisible = async (ele: string): Promise<void> => {
    this.page.waitForSelector(ele);
  };

  /**
   * @param {string} ele
   * @memberof BasePage
   */
  checkCheckbox = async (ele: string): Promise<void> => {
    this.page.setChecked(ele, true, { force: true });
  };

  /**
   * @param {string} ele
   * @memberof BasePage
   */
  // Truthiness means that it just has a value
  assertInnerTextIsTruthy = async (ele: string): Promise<void> => {
    const innerText = await this.page.innerText(ele);
    expect(innerText).toBeTruthy();
  };
}
