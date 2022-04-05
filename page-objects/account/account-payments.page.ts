import { Locator, Page } from "@playwright/test";
import UrlsUtils from "../../utils/urls.utils";
/**
 * @export
 * @class PaymentsPage
 */
export class PaymentsPage {
  readonly page: Page;
  readonly url: string;
  readonly hdrPage: Locator;

  /**
   * Creates an instance of PaymentsPage.
   * @param {Page} page
   * @memberof PaymentsPage
   */
  constructor(page: Page) {
    this.page = page;
    this.url = UrlsUtils.legalshieldUrls.account.url + "/payments";
    this.hdrPage = page.locator("h2.lsux-heading");
  }

  goto = async (): Promise<void> => {
    await this.page.goto(this.url);
  };
}
