import { expect, FrameLocator, Locator, Page, BrowserContext } from '@playwright/test';

export class CheckoutBankDraftComponent {
  protected page: Page;
  readonly context: BrowserContext;
  readonly locPaymentIframe: FrameLocator;
  readonly locAccountNumberWarningMessage: Locator;
  readonly locRoutingNumberWarningMessage: Locator;
  readonly locAccountHolderNameWarningMessage: Locator;
  readonly locTermsOfServiceLink: Locator;
  readonly locCaTransitNumberWarningMessage: Locator;
  readonly locCaInstitutionNumberWarningMessage: Locator;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    this.locPaymentIframe = this.page.frameLocator("//iframe[@title='payment iframe']");
    this.locAccountNumberWarningMessage = this.locPaymentIframe.locator('//*[@id="account_number_err"]');
    this.locRoutingNumberWarningMessage = this.locPaymentIframe.locator('//*[@id="routing_number_err"]');
    this.locAccountHolderNameWarningMessage = this.locPaymentIframe.locator('//*[@id="accountholder_name_err"]');
    this.locTermsOfServiceLink = this.locPaymentIframe.locator('//form[@id="bd_form"]//a[text()="Terms of Service"]');
    this.locCaTransitNumberWarningMessage = this.locPaymentIframe.locator('//*[@id="transit_number_err"]');
    this.locCaInstitutionNumberWarningMessage = this.locPaymentIframe.locator('//*[@id="institution_number_err"]');
  }

  /**
   *
   *
   * @memberof CheckoutBankDraftComponent
   */
  assertUSBankDraftErrorsAreDisplayed = async (): Promise<void> => {
    await expect(this.locAccountNumberWarningMessage).toBeVisible();
    await expect(this.locRoutingNumberWarningMessage).toBeVisible();
    await expect(this.locAccountHolderNameWarningMessage).toBeVisible();
  };
  /**
   *
   *
   * @memberof CheckoutBankDraftComponent
   */
  assertCABankDraftErrorsAreDisplayed = async (): Promise<void> => {
    await expect(this.locAccountNumberWarningMessage).toBeVisible();
    await expect(this.locCaTransitNumberWarningMessage).toBeVisible();
    await expect(this.locCaInstitutionNumberWarningMessage).toBeVisible();
    await expect(this.locAccountHolderNameWarningMessage).toBeVisible();
  };
  /**
   *
   *
   * @memberof CheckoutBankDraftComponent
   */
  clickOnTermsOfServiceLink = async (): Promise<Page> => {
    const [newPage] = await Promise.all([this.context.waitForEvent('page'), await this.locTermsOfServiceLink.click()]);
    return newPage;
  };
}
