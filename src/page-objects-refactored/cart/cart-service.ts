import { BrowserContext, Page } from '@playwright/test';
import { CommonHeaderComponent } from '../common-components/common-header.component';
import { CommonFooterComponent } from '../common-components/common-footer.component';
import { CheckoutPage } from './checkout.page';
import { SmallBusinessQuestionsPage } from './small-business-questions.page';
import { AssociateQuestionsPage } from './associate-questions.page';

export class CartService {
  readonly checkoutPage: CheckoutPage;
  readonly smallBusinessQuestionsPage: SmallBusinessQuestionsPage;
  readonly associateQuestionsPage: AssociateQuestionsPage;
  readonly commonHeaderComponent: CommonHeaderComponent;
  readonly commonFooterComponent: CommonFooterComponent;

  constructor(context: BrowserContext, page: Page) {
    this.checkoutPage = new CheckoutPage(page);
    this.associateQuestionsPage = new AssociateQuestionsPage(context, page);
    this.smallBusinessQuestionsPage = new SmallBusinessQuestionsPage(context, page);
    this.commonHeaderComponent = new CommonHeaderComponent(page);
    this.commonFooterComponent = new CommonFooterComponent(context, page);
  }
}
