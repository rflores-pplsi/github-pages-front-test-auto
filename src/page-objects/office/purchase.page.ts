import { Page, Locator, FrameLocator, expect } from '@playwright/test';
import { clickLocatorWithRetry } from '../../utils/helpers';

export class PurchasePage {
  private locEmailAddressInput: Locator;
  private locFirstNameInput: Locator;
  private locLastNameInput: Locator;
  private locPhoneNumberInput: Locator;
  private locPhoneTypeDropdown: Locator;
  private locHomeAddressInput: Locator;
  private locAptSuiteInput: Locator;
  private locCityInput: Locator;
  private locPostalCodeInput: Locator;
  private locDateOfBirthInput: Locator;
  private locSSNInput: Locator;
  private locContinueButton: Locator;
  private locOuterPaymentIframe: FrameLocator;
  private locInnerPaymentIframe: FrameLocator;
  private locBankDraftToggle: Locator;
  private locAccountNumberInput: Locator;
  private locRoutingNumberInput: Locator;
  private locAccountHolderNameInput: Locator;
  private locBankNameInput: Locator;
  private locPaymentContinueButton: Locator;
  private locSubmitButton: Locator;
  private locBusinessNameInput: Locator;
  private locDateOfIncorporationInput: Locator;
  private locTaxIdInput: Locator;

  constructor(private page: Page) {
    this.locEmailAddressInput = this.page.locator('input[name="email"]');
    this.locFirstNameInput = this.page.locator('input[name="firstName"]');
    this.locLastNameInput = this.page.locator('input[name="lastName"]');
    this.locPhoneNumberInput = this.page.locator('input[name="phoneNumber"]');
    this.locPhoneTypeDropdown = this.page.locator('select[name="phoneType"]');
    this.locHomeAddressInput = this.page.locator('input[name="address.address1"]');
    this.locAptSuiteInput = this.page.locator('input[name="aptSuite"]');
    this.locCityInput = this.page.locator('input[name="address.locality"]');
    this.locPostalCodeInput = this.page.locator('input[name="address.postalCode"]');
    this.locDateOfBirthInput = this.page.locator('input[name="dateOfBirth"]');
    this.locSSNInput = this.page.locator('input[name="nationalIdentifier"]');
    this.locContinueButton = this.page.locator('button[type="submit"]');
    this.locOuterPaymentIframe = this.page.frameLocator('//iframe[@data-testid="payment-method-iframe"]');
    this.locInnerPaymentIframe = this.locOuterPaymentIframe.frameLocator('//iframe[@id="paymentFrame"]');
    this.locBankDraftToggle = this.locOuterPaymentIframe.locator('//div[@id="toggle"]//a');
    this.locAccountNumberInput = this.locInnerPaymentIframe.locator('input[name="account_number"]');
    this.locRoutingNumberInput = this.locInnerPaymentIframe.locator('input[name="routing_number"]');
    this.locAccountHolderNameInput = this.locInnerPaymentIframe.locator('input[name="accountholder_name"]');
    this.locBankNameInput = this.locInnerPaymentIframe.locator('input[name="bank_name"]');
    this.locPaymentContinueButton = this.page.getByText('Continue');
    this.locSubmitButton = this.page.getByRole('button', { name: 'Submit' });
    this.locBusinessNameInput = this.page.locator('input[name="businessName"]');
    this.locDateOfIncorporationInput = this.page.locator('input[name="dateOfIncorporation"]');
    this.locTaxIdInput = this.page.locator('input[name="taxId"]');

  }
  // #region Navigation
  // #endregion Navigation

  // #region Actions
  async fillEmailAddressInput(emailAddress: string): Promise<void> {
    await this.locEmailAddressInput.fill(emailAddress);
  } 
  async fillFirstNameInput(firstName: string): Promise<void> {
    await this.locFirstNameInput.fill(firstName);
  }

  async fillLastNameInput(lastName: string): Promise<void> {
    await this.locLastNameInput.fill(lastName);
  }

  async fillPhoneNumberInput(phoneNumber: string): Promise<void> {
    await this.locPhoneNumberInput.fill(phoneNumber);
  }

  async selectPhoneType(phoneType: string): Promise<void> {
    await this.locPhoneTypeDropdown.selectOption(phoneType);
  }

  async fillHomeAddressInput(homeAddress: string): Promise<void> {
    await this.locHomeAddressInput.fill(homeAddress);
  }

  async fillAptSuiteInput(aptSuite: string): Promise<void> {
    await this.locAptSuiteInput.fill(aptSuite);
  }

  async fillCityInput(city: string): Promise<void> {
    await this.locCityInput.fill(city);
  }

  async fillPostalCodeInput(postalCode: string): Promise<void> {
    await this.locPostalCodeInput.fill(postalCode);
  }

  async fillDateOfBirthInput(dateOfBirth: string): Promise<void> {
    await this.locDateOfBirthInput.focus();
    await this.page.keyboard.type(dateOfBirth);
  }

  async fillLast4SSNInput(SSN: string): Promise<void> {
    await this.locSSNInput.fill(SSN);
  }

  async fillPersonalInfoForm(
    emailAddress: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    phoneType: string,
    homeAddress: string,
    city: string,
    postalCode: string,
    dateOfBirth: string,
    last4SSN: string,
    aptSuite?: string,
  ): Promise<void> {
    await this.fillEmailAddressInput(emailAddress);
    await this.fillFirstNameInput(firstName);
    await this.fillLastNameInput(lastName);
    await this.fillPhoneNumberInput(phoneNumber);
    await this.selectPhoneType(phoneType);
    await this.fillHomeAddressInput(homeAddress);
    if (aptSuite) {
      await this.fillAptSuiteInput(aptSuite);
    }
    await this.fillCityInput(city);
    await this.fillPostalCodeInput(postalCode);
    await this.fillDateOfBirthInput(dateOfBirth);
    await this.fillLast4SSNInput(last4SSN);
  }

  skipAdditionalInformationForm = async (planDetails: Array<any>): Promise<void> => {
    let foundNonIndividualTier = false;
    for (const plan of planDetails) {
        if (plan.tier && typeof plan.tier.name === 'string' && !plan.tier.name.includes('Individual')) {
            foundNonIndividualTier = true;
            break; // Exit loop early once a non-"Individual" tier is found
        }
    }
    if (foundNonIndividualTier) {
        await this.locContinueButton.click();
    }
  };

  async clickContinueButton(): Promise<void> {
    await this.locContinueButton.click();
  };

  async clickCreditCardBankDraftToggle(): Promise<void> {
    await clickLocatorWithRetry(this.locBankDraftToggle,this.locBankNameInput);
    await this.page.waitForLoadState();
  };

  async fillAccountNumberInput(accountNumber: string): Promise<void> {
    await this.locAccountNumberInput.fill(accountNumber);
  };

  async fillRoutingNumberInput(routingNumber: string): Promise<void> {
    await this.locRoutingNumberInput.fill(routingNumber);
  };

  async fillAccountHolderNameInput(accountHolderName: string): Promise<void> {
    await this.locAccountHolderNameInput.fill(accountHolderName);
  };

  async fillBankNameInput(bankName: string): Promise<void> {
    await this.locBankNameInput.fill(bankName);
  };

  async clickPaymentContinueButton(): Promise<void> {
    await this.locPaymentContinueButton.click();
  };

  async fillBankDraftForm(
    accountNumber: string,
    routingNumber: string,
    accountHolderName: string,
  ): Promise<void> {
    await this.fillAccountNumberInput(accountNumber);
    await this.fillRoutingNumberInput(routingNumber);
    await this.fillAccountHolderNameInput(accountHolderName);
  };

  async clickSubmitButton(): Promise<void> {
    return this.locSubmitButton.click();
  };

  async fillBusinessNameInput(businessName: string): Promise<void> {
    await this.locBusinessNameInput.fill(businessName);
  };

  async fillDateOfIncorporationInput(date: string): Promise<void> {
    await this.locDateOfIncorporationInput.focus();
    await this.page.keyboard.type(date);
  };

  async fillTaxIdInput(taxId: string): Promise<void> {
    await this.locTaxIdInput.fill(taxId);
  };
  
  async fillBusinessInfoForm(businessName: string, dateOfIncorporation: string, taxId: string): Promise<void> {
    await this.fillBusinessNameInput(businessName);
    await this.fillDateOfIncorporationInput(dateOfIncorporation);
    await this.fillTaxIdInput(taxId);
  };
  // #endregion Actions

  // #region Assertions
  assertPurchasePageReached = async (): Promise<void> => {
    await this.locBankDraftToggle.waitFor();
    await expect(this.page).toHaveURL(new RegExp('office'));
  };
  // #endregion Assertions
}
