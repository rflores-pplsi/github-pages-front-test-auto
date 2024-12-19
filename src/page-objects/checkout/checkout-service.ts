import { Page } from '@playwright/test';
import { FormsPage } from './forms.page';
import { PaymentsPage } from './payments.page';
import { ConfirmationPage } from './confirmation.page';
import { OrderSummaryComponent } from './components/order-summary.component'; 


export class CheckoutService {
  protected page: Page;
  readonly formsPage: FormsPage;
  readonly paymentPage: PaymentsPage;
  readonly confirmationPage: ConfirmationPage;
  readonly orderSummaryComponent: OrderSummaryComponent;

  constructor(page: Page) {
    this.page = page;
    this.formsPage = new FormsPage(page);
    this.paymentPage = new PaymentsPage(page);
    this.confirmationPage = new ConfirmationPage(page);
    this.orderSummaryComponent = new OrderSummaryComponent(page);
  }
}
