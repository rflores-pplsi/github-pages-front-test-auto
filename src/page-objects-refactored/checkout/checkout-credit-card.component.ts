import { FrameLocator, Locator, Page, expect } from '@playwright/test';

export class CheckoutCreditCardComponent {
  readonly page: Page;
  readonly locPaymentIframe: FrameLocator;
  readonly locCardNumberInput: Locator;
  readonly locExpirationDateInput: Locator;
  readonly locSecurityCodeInput: Locator;
  readonly locNameOnCardInput: Locator;
  readonly locBillingPostalCodeInput: Locator;
  readonly locCardNumberWarningMessage: Locator;
  readonly locExpirationDateWarningMessage: Locator;
  readonly locSecurityCodeWarningMessage: Locator;
  readonly locNameOnCardWarningMessage: Locator;
  readonly locBillingPostalCodeWarningMessage: Locator;
  readonly locPurchaseButton: Locator;
  readonly locTermsOfServiceLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locPaymentIframe = this.page.frameLocator("//iframe[@title='payment iframe']");
    this.locCardNumberInput = this.locPaymentIframe.locator('//*[@id="card_number"]');
    this.locExpirationDateInput = this.locPaymentIframe.locator('//*[@id="expiration_date"]');
    this.locSecurityCodeInput = this.locPaymentIframe.locator('//*[@id="security_code"]');
    this.locNameOnCardInput = this.locPaymentIframe.locator('//*[@id="cardholder_name"]');
    this.locBillingPostalCodeInput = this.locPaymentIframe.locator('//*[@id="postal_code"]');
    this.locCardNumberWarningMessage = this.locPaymentIframe.locator('//*[@id="card_number_err"]');
    this.locExpirationDateWarningMessage = this.locPaymentIframe.locator('//*[@id="expiration_date_err"]');
    this.locSecurityCodeWarningMessage = this.locPaymentIframe.locator('//*[@id="security_code_err"]');
    this.locNameOnCardWarningMessage = this.locPaymentIframe.locator('//*[@id="cardholder_name_err"]');
    this.locBillingPostalCodeWarningMessage = this.locPaymentIframe.locator('//*[@id="postal_code_err"]');
    this.locPurchaseButton = this.page.locator('button//[@id="savecc"]');
    this.locTermsOfServiceLink = this.page.locator('//form[@id="cc_form"]//a[text()="Terms of Service"]');
  }

  /**
   *
   *
   * @memberof CheckoutCreditCardComponent
   */
  assertUSCreditCardErrorsAreDisplayed = async (): Promise<void> => {
    await expect(this.locCardNumberWarningMessage).toBeVisible();
    await expect(this.locExpirationDateWarningMessage).toBeVisible();
    await expect(this.locSecurityCodeWarningMessage).toBeVisible();
    await expect(this.locNameOnCardWarningMessage).toBeVisible();
    await expect(this.locBillingPostalCodeWarningMessage).toBeVisible();
  };
}
