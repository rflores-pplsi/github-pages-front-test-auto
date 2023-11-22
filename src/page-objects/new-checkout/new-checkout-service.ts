import { BrowserContext, Page } from '@playwright/test';
import { NewCheckoutInformationPage } from './new-checkout-information.page';
import { NewCheckoutPaymentPage } from './new-checkout-payment.page';
import { NewCheckoutConfirmationPage } from './new-checkout-confirmation.page';

export class NewCheckoutService {
  readonly newCheckoutInformationPage: NewCheckoutInformationPage;
  readonly newCheckoutPaymentPage: NewCheckoutPaymentPage;
  readonly newCheckoutConfirmationPage: NewCheckoutConfirmationPage;

  constructor(context: BrowserContext, page: Page) {
    this.newCheckoutInformationPage = new NewCheckoutInformationPage(page);
    this.newCheckoutPaymentPage = new NewCheckoutPaymentPage(page);
    this.newCheckoutConfirmationPage = new NewCheckoutConfirmationPage(page);
  }
}
