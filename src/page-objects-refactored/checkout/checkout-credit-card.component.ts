import { FrameLocator, Locator, Page } from '@playwright/test';

export class CheckoutCreditCardComponent {
  readonly page: Page;
  readonly locPaymentIframe: FrameLocator;
  readonly locPurchaseButton: Locator;
  readonly locTermsOfServiceLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locPaymentIframe = this.page.frameLocator("//iframe[@title='payment iframe']");
    this.locPurchaseButton = this.page.locator('button//[@id="savecc"]');
    this.locTermsOfServiceLink = this.page.locator('//form[@id="cc_form"]//a[text()="Terms of Service"]');
  }
}
