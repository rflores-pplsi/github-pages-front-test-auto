import { FrameLocator, Locator, Page } from '@playwright/test';

export class CommissionDetailsPage {
  readonly page: Page;
  readonly locOuterIframe: FrameLocator;
  readonly locPaymentIframe: FrameLocator;
  readonly locAccountNumber: Locator;
  readonly locRoutingNumber: Locator;
  readonly locAccountHolderName: Locator;
  readonly locTransitNumberNumber: Locator;
  readonly locEstablishmentNumber: Locator;
  readonly locSaveButton: Locator;
  readonly locNextButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locOuterIframe = this.page.frameLocator('//iframe[contains(@src,"paymentsv2")]');
    this.locPaymentIframe = this.locOuterIframe.frameLocator('//iframe[@name="paymentFrame"]');
    this.locAccountNumber = this.locPaymentIframe.locator('//input[@id="account_number"]');
    this.locRoutingNumber = this.locPaymentIframe.locator('//input[@id="routing_number"]');
    this.locAccountHolderName = this.locPaymentIframe.locator('//input[@id="accountholder_name"]');
    this.locTransitNumberNumber = this.locPaymentIframe.locator('//input[@id="transit_number"]');
    this.locEstablishmentNumber = this.locPaymentIframe.locator('//input[@id="institution_number"]');
    this.locSaveButton = this.locPaymentIframe.locator('//button[@id="savebd"]');
    this.locNextButton = this.page.locator('//button[@name="next"]');
  }

  /**
   *
   *
   * @param {string} siteName
   * @memberof CommissionDetailsPage
   */
  selectSiteName = async (siteName: string): Promise<void> => {
    const siteNameRadioButtonLocator = this.page.locator(`//span[contains(.,"${siteName}")]`);
    await siteNameRadioButtonLocator.click();
  };

  /**
   *
   *
   * @param {string} accountNumber
   * @param {string} routingNumber
   * @param {string} accountHolderName
   * @memberof CommissionDetailsPage
   */
  completePaymentInformationForm = async (
    accountNumber: string,
    routingNumber: string,
    accountHolderName: string,
  ): Promise<void> => {
    await this.locAccountNumber.fill(accountNumber);
    await this.locRoutingNumber.fill(routingNumber);
    await this.locAccountHolderName.fill(accountHolderName);
  };

  /**
   *
   *
   * @param {string} accountNumber
   * @param {string} transitNumber
   * @param {string} establishmentNumber
   * @param {string} accountHolderName
   * @memberof CommissionDetailsPage
   */
  completePaymentInformationFormFrench = async (
    accountNumber: string,
    transitNumber: string,
    establishmentNumber: string,
    accountHolderName: string,
  ): Promise<void> => {
    await this.locAccountNumber.fill(accountNumber);
    await this.locTransitNumberNumber.fill(transitNumber);
    await this.locEstablishmentNumber.fill(establishmentNumber);
    await this.locAccountHolderName.fill(accountHolderName);
  };

  /**
   *
   *
   * @param {string} accountNumber
   * @memberof CommissionDetailsPage
   */
  selectPaymentMethod = async (accountNumber: string): Promise<void> => {
    const paymentMethodLocator = this.locOuterIframe.locator(`//a[contains(.,"${accountNumber}")]`);
    await paymentMethodLocator.click();
  };
}
