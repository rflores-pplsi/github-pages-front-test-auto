import { expect, FrameLocator, Locator, Page } from '@playwright/test';

export class CheckoutBankDraftComponent {
  readonly page: Page;
  readonly locPaymentIframe: FrameLocator;
  readonly locAccountNumberInput: Locator;
  readonly locRoutingNumberInput: Locator;
  readonly locAccountHolderNameInput: Locator;
  readonly locBankNameInput: Locator;
  readonly locAccountNumberWarningMessage: Locator;
  readonly locRoutingNumberWarningMessage: Locator;
  readonly locAccountHolderNameWarningMessage: Locator;
  readonly locPurchaseButton: Locator;
  readonly locTermsOfServiceLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locPaymentIframe = this.page.frameLocator("//iframe[@title='payment iframe']");
    this.locAccountNumberInput = this.locPaymentIframe.locator("[placeholder='Account Number']");
    this.locRoutingNumberInput = this.locPaymentIframe.locator("[placeholder='Routing Number']");
    this.locAccountHolderNameInput = this.locPaymentIframe.locator("[placeholder='Account Holder Name']");
    this.locBankNameInput = this.locPaymentIframe.locator("[placeholder='Bank Name']");
    this.locAccountNumberWarningMessage = this.locPaymentIframe.locator('//*[@id="account_number_err"]');
    this.locRoutingNumberWarningMessage = this.locPaymentIframe.locator('//*[@id="routing_number_err"]');
    this.locAccountHolderNameWarningMessage = this.locPaymentIframe.locator('//*[@id="accountholder_name_err"]');
    this.locPurchaseButton = this.locPaymentIframe.locator('button//[@id="savebd"]');
    this.locTermsOfServiceLink = this.locPaymentIframe.locator('//form[@id="bd_form"]//a[text()="Terms of Service"]');
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
}
