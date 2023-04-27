import { expect, FrameLocator, Locator, Page, BrowserContext } from '@playwright/test';

export class CheckoutBankDraftComponent {
  protected page: Page;
  readonly context: BrowserContext;
  readonly locPaymentIframe: FrameLocator;
  readonly locAccountNumberWarningMessage: Locator;
  readonly locRoutingNumberWarningMessage: Locator;
  readonly locAccountHolderNameWarningMessage: Locator;
  readonly locTermsOfServiceLink: Locator;

  //TODO: Delete the stuff used in commons

  // readonly locAccountNumberInput: Locator;
  // readonly locRoutingNumberInput: Locator;
  // readonly locAccountHolderNameInput: Locator;
  // readonly locBankNameInput: Locator;
  //readonly locPurchaseButton: Locator;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    this.locPaymentIframe = this.page.frameLocator("//iframe[@title='payment iframe']");
    this.locAccountNumberWarningMessage = this.locPaymentIframe.locator('//*[@id="account_number_err"]');
    this.locRoutingNumberWarningMessage = this.locPaymentIframe.locator('//*[@id="routing_number_err"]');
    this.locAccountHolderNameWarningMessage = this.locPaymentIframe.locator('//*[@id="accountholder_name_err"]');
    this.locTermsOfServiceLink = this.locPaymentIframe.locator('//form[@id="bd_form"]//a[text()="Terms of Service"]');

    //TODO: Delete the stuff used in commons

    // this.locAccountNumberInput = this.locPaymentIframe.locator("[placeholder='Account Number']");
    // this.locRoutingNumberInput = this.locPaymentIframe.locator("[placeholder='Routing Number']");
    // this.locAccountHolderNameInput = this.locPaymentIframe.locator("[placeholder='Account Holder Name']");
    // this.locBankNameInput = this.locPaymentIframe.locator("[placeholder='Bank Name']");
    // this.locPurchaseButton = this.locPaymentIframe.locator('button//[@id="savebd"]');
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
  clickOnTermsOfServiceLink = async (): Promise<Page> => {
    const [newPage] = await Promise.all([this.context.waitForEvent('page'), await this.locTermsOfServiceLink.click()]);
    return newPage;
  };
}
