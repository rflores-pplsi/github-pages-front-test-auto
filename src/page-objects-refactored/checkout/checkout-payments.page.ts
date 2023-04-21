import { Page } from '@playwright/test';
import { CheckoutCreditCardComponent } from '../../page-objects-refactored/checkout/checkout-credit-card.component';
import { CheckoutBankDraftComponent } from '../../page-objects-refactored/checkout/checkout-bank-draft.component';
import { CheckoutStepperComponent } from '../../page-objects-refactored/checkout/checkout-stepper.component';

export class CheckoutPaymentsPage {
  readonly page: Page;
  readonly checkoutCreditCardComponent: CheckoutCreditCardComponent;
  readonly checkoutBankDraftComponent: CheckoutBankDraftComponent;
  readonly checkoutStepperComponent: CheckoutStepperComponent;

  constructor(page: Page) {
    this.page = page;
    this.checkoutCreditCardComponent = new CheckoutCreditCardComponent(page);
    this.checkoutBankDraftComponent = new CheckoutBankDraftComponent(page);
    this.checkoutStepperComponent = new CheckoutStepperComponent(page);
  }
}
