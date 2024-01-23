import { BrowserContext, expect, Locator, Page } from '@playwright/test';

/**
 *
 *
 * @export
 * @class PplsiBusinessSolutionsOrientationResourcesComponent
 */
export class ResourcesComponent {
  readonly page: Page;
  readonly context: BrowserContext;
  readonly locResourcesContainer: Locator;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.context = context;
    this.locResourcesContainer = this.page.locator('//div[contains(@class,"col col-3") and contains(.,"Resources")]');
  }

  /**
   *
   *
   * @param {string} resourceName
   * @param {string} pdfTitle
   * @memberof PplsiBusinessSolutionsOrientationResourcesComponent
   */
  assertUrlOfNewTabAfterOpeningPdfLink = async (resourceName: string, pdfTitle: string): Promise<void> => {
    const newTab = await Promise.all([this.context.waitForEvent('page'), this.page.locator(`//a[contains(.,"${resourceName}")]`).click()]);
    expect(newTab[0]).toHaveURL(new RegExp(pdfTitle));
    // to ensure screenshot of pdf is captured, implicit wait is reluctantly used, as interacting with pdf viewer is not straightforward
    await newTab[0].waitForTimeout(700);
  };
}
