import { expect, Locator, Page } from '@playwright/test';
import { CheckoutStepperComponent } from '../../page-objects-refactored/checkout/checkout-stepper.component';
import { CheckoutHaveQuestionsComponent } from '../../page-objects-refactored/checkout/checkout-have-questions.component';
import { CommonCheckoutService } from '@legalshield/frontend-automation-commons';

export class CheckoutPersonalInfoPage {
  readonly page: Page;
  readonly checkoutStepperComponent: CheckoutStepperComponent;
  readonly checkoutHaveQuestionsComponent: CheckoutHaveQuestionsComponent;
  readonly commonCheckoutService: CommonCheckoutService;
  readonly locHeader: Locator;
  readonly locFirstNameWarningMessage: Locator;
  readonly locLastNameWarningMessage: Locator;
  readonly locPhoneNumberWarningMessage: Locator;
  readonly locPhoneTypeWarningMessage: Locator;
  readonly locHomeAddressWarningMessage: Locator;
  readonly locCityWarningMessage: Locator;
  readonly locPostalCodeWarningMessage: Locator;
  readonly locDateOfBirthWarningMessage: Locator;
  readonly locDateOfBirthInvalidWarningMessage: Locator;
  readonly locSocialSecurityWarningMessage: Locator;
  readonly locBusinessNameWarningMessage: Locator;
  readonly locDateOfIncorporationMonthWarningMessage: Locator;
  readonly locDateOfIncorporationDateWarningMessage: Locator;
  readonly locDateOfIncorporationYearWarningMessage: Locator;
  readonly locDateOfInCorpWarningMessage: Locator;
  readonly locBusinessTaxIdWarningMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutStepperComponent = new CheckoutStepperComponent(page);
    this.checkoutHaveQuestionsComponent = new CheckoutHaveQuestionsComponent(page);
    this.commonCheckoutService = new CommonCheckoutService(page);
    this.locHeader = this.page.locator('//h1');
    this.locFirstNameWarningMessage = this.page.locator('text = Must provide first name');
    this.locLastNameWarningMessage = this.page.locator('text = Must provide Last name');
    this.locPhoneNumberWarningMessage = this.page.locator('text = Must provide phone number');
    this.locPhoneTypeWarningMessage = this.page.locator('text = Must select phone type');
    this.locHomeAddressWarningMessage = this.page.locator('text = Must provide home address');
    this.locCityWarningMessage = this.page.locator('text = Must include name of city');
    this.locPostalCodeWarningMessage = this.page.locator('text = Must provide valid postal code');
    this.locDateOfBirthWarningMessage = this.page.locator('text = Must provide date of birth');
    this.locDateOfBirthInvalidWarningMessage = this.page.locator('text = Please enter a valid date in the MM/DD/YYYY format');
    this.locSocialSecurityWarningMessage = this.page.locator('text = Must provide SSN or SIN');
    this.locBusinessNameWarningMessage = this.page.locator('text = Must provide business name');
    this.locDateOfIncorporationMonthWarningMessage = this.page.locator('text = Must provide date of incorporation');
    this.locDateOfIncorporationDateWarningMessage = this.page.locator('text = Must provide date of incorporation');
    this.locDateOfIncorporationYearWarningMessage = this.page.locator('text = Must provide date of incorporation');
    this.locDateOfInCorpWarningMessage = this.page.locator('text = Must provide date of incorporation');
    this.locBusinessTaxIdWarningMessage = this.page.locator('text= Must provide tax ID');
  }

  /**
   *
   *
   * @memberof CheckoutPersonalInfoPage
   */
  assertAllNonBusinessFormErrorsAreDisplayed = async (): Promise<void> => {
    await expect(this.locFirstNameWarningMessage).toBeVisible();
    await expect(this.locLastNameWarningMessage).toBeVisible();
    await expect(this.locPhoneNumberWarningMessage).toBeVisible();
    await expect(this.locPhoneTypeWarningMessage).toBeVisible();
    await expect(this.locHomeAddressWarningMessage).toBeVisible();
    await expect(this.locCityWarningMessage).toBeVisible();
    await expect(this.locPostalCodeWarningMessage).toBeVisible();
    await expect(this.locDateOfBirthWarningMessage).toBeVisible();
    await expect(this.locSocialSecurityWarningMessage).toBeVisible();
  };
  /**
   *
   *
   * @memberof CheckoutPersonalInfoPage
   */
  assertAllFormErrorsAreDisplayed = async (): Promise<void> => {
    await expect(this.locFirstNameWarningMessage).toBeVisible();
    await expect(this.locLastNameWarningMessage).toBeVisible();
    await expect(this.locPhoneNumberWarningMessage).toBeVisible();
    await expect(this.locPhoneTypeWarningMessage).toBeVisible();
    await expect(this.locHomeAddressWarningMessage).toBeVisible();
    await expect(this.locCityWarningMessage).toBeVisible();
    await expect(this.locPostalCodeWarningMessage).toBeVisible();
    await expect(this.locDateOfBirthWarningMessage).toBeVisible();
    await expect(this.locSocialSecurityWarningMessage).toBeVisible();
    await expect(this.locBusinessNameWarningMessage).toBeVisible();
    await expect(this.locDateOfInCorpWarningMessage).toBeVisible();
    await expect(this.locBusinessTaxIdWarningMessage).toBeVisible();
  };
  /**
   *
   *
   * @memberof CheckoutPersonalInfoPage
   */
  assertNoNonBusinessFormErrorsAreDisplayed = async (): Promise<void> => {
    await expect(this.locFirstNameWarningMessage).not.toBeVisible();
    await expect(this.locLastNameWarningMessage).not.toBeVisible();
    await expect(this.locPhoneNumberWarningMessage).not.toBeVisible();
    await expect(this.locPhoneTypeWarningMessage).not.toBeVisible();
    await expect(this.locHomeAddressWarningMessage).not.toBeVisible();
    await expect(this.locCityWarningMessage).not.toBeVisible();
    await expect(this.locPostalCodeWarningMessage).not.toBeVisible();
    await expect(this.locDateOfBirthWarningMessage).not.toBeVisible();
    await expect(this.locSocialSecurityWarningMessage).not.toBeVisible();
  };
  /**
   *
   *
   * @memberof CheckoutPersonalInfoPage
   */
  assertNoFormErrorsAreDisplayed = async (): Promise<void> => {
    await expect(this.locFirstNameWarningMessage).not.toBeVisible();
    await expect(this.locLastNameWarningMessage).not.toBeVisible();
    await expect(this.locPhoneNumberWarningMessage).not.toBeVisible();
    await expect(this.locPhoneTypeWarningMessage).not.toBeVisible();
    await expect(this.locHomeAddressWarningMessage).not.toBeVisible();
    await expect(this.locCityWarningMessage).not.toBeVisible();
    await expect(this.locPostalCodeWarningMessage).not.toBeVisible();
    await expect(this.locDateOfBirthWarningMessage).not.toBeVisible();
    await expect(this.locSocialSecurityWarningMessage).not.toBeVisible();
    await expect(this.locBusinessNameWarningMessage).not.toBeVisible();
    await expect(this.locDateOfInCorpWarningMessage).not.toBeVisible();
    await expect(this.locBusinessTaxIdWarningMessage).not.toBeVisible();
  };
}
