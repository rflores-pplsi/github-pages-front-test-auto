import { FrameLocator, Locator, Page, expect, BrowserContext } from '@playwright/test';

export class CheckoutCreditCardComponent {
  protected page: Page;
  readonly context: BrowserContext;
  readonly locPaymentIframe: FrameLocator;
  readonly locCardNumberWarningMessage: Locator;
  readonly locExpirationDateWarningMessage: Locator;
  readonly locSecurityCodeWarningMessage: Locator;
  readonly locNameOnCardWarningMessage: Locator;
  readonly locBillingPostalCodeWarningMessage: Locator;
  readonly locTermsOfServiceLink: Locator;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    this.locPaymentIframe = this.page.frameLocator("//iframe[@title='payment iframe']");
    this.locCardNumberWarningMessage = this.locPaymentIframe.locator('//*[@id="card_number_err"]');
    this.locExpirationDateWarningMessage = this.locPaymentIframe.locator('//*[@id="expiration_date_err"]');
    this.locSecurityCodeWarningMessage = this.locPaymentIframe.locator('//*[@id="security_code_err"]');
    this.locNameOnCardWarningMessage = this.locPaymentIframe.locator('//*[@id="cardholder_name_err"]');
    this.locBillingPostalCodeWarningMessage = this.locPaymentIframe.locator('//*[@id="postal_code_err"]');
    this.locTermsOfServiceLink = this.locPaymentIframe.locator('//form[@id="cc_form"]//a[text()="Terms of Service"]');
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
  /**
   *
   *
   * @memberof CheckoutCreditCardComponent
   */
  clickOnTermsOfServiceLink = async (): Promise<Page> => {
    const [newPage] = await Promise.all([this.context.waitForEvent('page'), await this.locTermsOfServiceLink.click()]);
    return newPage;
  };
}
