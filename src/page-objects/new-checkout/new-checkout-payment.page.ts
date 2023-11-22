import { Page, Locator, expect, FrameLocator } from '@playwright/test';
import RegionsUtils from '../../utils/regions.utils';

export class NewCheckoutPaymentPage {
  protected page: Page;
  readonly framePaymentMethod: FrameLocator;
  readonly framePaymentForm: FrameLocator;
  readonly locNameOnCardInput: Locator;
  readonly locCardNumberInput: Locator;
  readonly locExpirationDateInput: Locator;
  readonly locCvvInput: Locator;
  readonly locPurchaseButton: Locator;
  readonly locBankDraftButton: Locator;
  readonly locNameOfAccountHolderInput: Locator;
  readonly locRoutingNumberInput: Locator;
  readonly locAccountNumberInput: Locator;
  readonly locSaveBankDraftButton: Locator;
  readonly locAccountTypeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.framePaymentMethod = this.page.frameLocator('#payment-method');
    this.framePaymentForm = this.framePaymentMethod.frameLocator('#paymentMethodFramePsx');
    this.locNameOnCardInput = this.framePaymentForm.locator('#cardholder_name');
    this.locCardNumberInput = this.framePaymentForm.locator('#card_number');
    this.locExpirationDateInput = this.framePaymentForm.locator('#expiration_date');
    this.locCvvInput = this.framePaymentForm.locator('#security_code');
    this.locPurchaseButton = this.framePaymentForm.locator('#savecc');
    this.locBankDraftButton = this.framePaymentForm.locator('//form[@id="cc_form"]//input[@id="bd_payment_method"]');
    this.locNameOfAccountHolderInput = this.framePaymentForm.locator('#accountholder_name');
    this.locRoutingNumberInput = this.framePaymentForm.locator('#routing_number');
    this.locAccountNumberInput = this.framePaymentForm.locator('#account_number');
    this.locSaveBankDraftButton = this.framePaymentForm.locator('#savebd');
    this.locAccountTypeButton = this.framePaymentForm.locator('//input[@value="Checking"]');
  }

  completeCreditCardForm = async (name: string, cardNumber: string, expirationDate: string, cvv: string): Promise<void> => {
    await this.page.waitForTimeout(2000);
    await this.locNameOnCardInput.type(name);
    await this.locNameOnCardInput.type(cardNumber);
    await this.locCardNumberInput.type(expirationDate);
    await this.locExpirationDateInput.type(cvv);
  };
  completeBankDraftFrom = async (name: string, routingNumber: string, accountNumber: string): Promise<void> => {
    await this.locNameOfAccountHolderInput.fill(name);
    await this.locRoutingNumberInput.fill(routingNumber);
    await this.locAccountNumberInput.fill(accountNumber);
    await this.locAccountTypeButton.click();
  };
}
