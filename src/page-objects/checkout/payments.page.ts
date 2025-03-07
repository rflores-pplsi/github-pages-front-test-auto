import { FrameLocator,Locator, Page, expect } from '@playwright/test';
import { IAccountInfoData, IBankDraftDataForUS, IBusinessInfoData, ICreditCardData } from '../../interfaces/checkout-interfaces';
import { getDefaultCreditCardData } from '../../utils/credit-card-info-utils';
import { getDefaultBankDraftData } from '../../utils/bank-draft-info-utils';
import exp from 'constants';

export class PaymentsPage {
  readonly page: Page;
  readonly locAccountInfoSummaryDetails:Locator;
  readonly locAccountInfoSummaryHeader: Locator;
  readonly locPaymentIframe: FrameLocator;
  private readonly locBankdraftToggle: Locator;
  private readonly locCreditCardNumberInput: Locator;
  private readonly locCreditCardExpirationDateInput: Locator;
  private readonly locCreditCardCVVInput: Locator;
  private readonly locCreditCardHolderNameInput: Locator;
  private readonly locCreditCardPaymentZipCodeInput: Locator;
  private readonly locBankDraftAccountNumberInput: Locator;
  private readonly locBankDraftRoutingNumberInput: Locator;
  private readonly locBankDraftAccountHolderNameInput: Locator;
  private readonly locPurchaseButton: Locator;
  private readonly locPayPalIcon: Locator;
  private readonly locPayPalPopUpMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locAccountInfoSummaryDetails = this.page.locator('.CheckoutSection').first(); 
    this.locAccountInfoSummaryHeader = this.page.locator('.AccountInfoSummaryHeading').getByText('Account information');
    this.locPaymentIframe = this.page.frameLocator('//iframe[@title=\'payment iframe\']');
    //Payment Information Form
    this.locBankdraftToggle = this.locPaymentIframe.locator('#bank_account');
    this.locCreditCardNumberInput = this.locPaymentIframe.getByPlaceholder('Card Number');
    this.locCreditCardExpirationDateInput = this.locPaymentIframe.getByPlaceholder('MM/YY');
    this.locCreditCardCVVInput = this.locPaymentIframe.locator('//*[@id="security_code"]');
    this.locCreditCardHolderNameInput = this.locPaymentIframe.getByPlaceholder('Name on Card');
    this.locCreditCardPaymentZipCodeInput = this.locPaymentIframe.getByPlaceholder('Billing Postal Code');
    this.locBankDraftAccountNumberInput = this.locPaymentIframe.getByPlaceholder('Account Number');
    this.locBankDraftRoutingNumberInput = this.locPaymentIframe.getByPlaceholder('Routing Number');
    this.locBankDraftAccountHolderNameInput = this.locPaymentIframe.getByPlaceholder('Account Holder Name');
    this.locPurchaseButton = this.locPaymentIframe.getByRole('button', { name: 'Purchase' });
    this.locPayPalIcon = this.locPaymentIframe.locator('img[alt="PayPal"]');
    this.locPayPalPopUpMessage = this.locPaymentIframe.getByText('PayPal is coming soon!');
  }

  // #region Navagation
  // #endregion Navagation

  // #region Actions

  async clickPaymentToggle(): Promise<void> {
    await this.locBankdraftToggle.click();
  }
  
  async fillPaymentInfoFormWithCreditCard(customCreditCardData?: object): Promise<void> {
    const testDataCreditCard: ICreditCardData = getDefaultCreditCardData(customCreditCardData); 
    await this.locCreditCardNumberInput.fill(testDataCreditCard.cardNumber);
    await this.locCreditCardExpirationDateInput.fill(testDataCreditCard.expirationDate);
    await this.locCreditCardCVVInput.fill(testDataCreditCard.cvv);
    await this.locCreditCardHolderNameInput.fill(testDataCreditCard.cardHolderName);
    await this.locCreditCardPaymentZipCodeInput.fill(testDataCreditCard.zipCode);
  }
  
  async fillPaymentInfoFormWithBankDraft(customBankDraftData?: object): Promise<void> {
    const testDataBankDraft: IBankDraftDataForUS = getDefaultBankDraftData(customBankDraftData); 
    await this.locBankdraftToggle.click();
    await this.locBankDraftAccountNumberInput.fill(testDataBankDraft.accountNumber);
    await this.locBankDraftRoutingNumberInput.fill(testDataBankDraft.routingNumber);
    await this.locBankDraftAccountHolderNameInput.fill(testDataBankDraft.accountHolderName);
  }
  async clickPurchaseButton(): Promise<void> {
    await this.locPurchaseButton.click();
    await this.page.waitForResponse(response => response.url().includes('purchases.api') && response.status() === 200);
  }
  // #endregion Actions

  // #region Assertions
  // #endregion Assertions
};
