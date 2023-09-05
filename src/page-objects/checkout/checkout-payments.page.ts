import { Page, BrowserContext } from '@playwright/test';
import { CheckoutCreditCardComponent } from './checkout-credit-card.component';
import { CheckoutBankDraftComponent } from './checkout-bank-draft.component';
import { CheckoutStepperComponent } from './checkout-stepper.component';
import { CheckoutHaveQuestionsComponent } from './checkout-have-questions.component';

export class CheckoutPaymentsPage {
  readonly page: Page;
  readonly context: BrowserContext;
  readonly checkoutCreditCardComponent: CheckoutCreditCardComponent;
  readonly checkoutBankDraftComponent: CheckoutBankDraftComponent;
  readonly checkoutStepperComponent: CheckoutStepperComponent;
  readonly checkoutHaveQuestionsComponent: CheckoutHaveQuestionsComponent;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.context = context;
    this.checkoutCreditCardComponent = new CheckoutCreditCardComponent(page, context);
    this.checkoutBankDraftComponent = new CheckoutBankDraftComponent(page, context);
    this.checkoutStepperComponent = new CheckoutStepperComponent(page);
    this.checkoutHaveQuestionsComponent = new CheckoutHaveQuestionsComponent(page);
  }
}
