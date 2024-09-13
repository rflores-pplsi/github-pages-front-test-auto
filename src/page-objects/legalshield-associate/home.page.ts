import { Page } from '@playwright/test';
import { HeaderComponent } from './components/header.component';
import { ProductCardComponent } from './components/product-card.component';
import { AssociateQuestionsComponent } from './components/associate-questions.component';
import { SmallBusinessQuestionsComponent } from './components/small-business-questions.component';
import { ChooseATierComponent } from './components/choose-a-tier.component';
import { AdditionalSupplementsComponent } from './components/additional-supplements.component';
import { CartComponent } from './components/cart.component';
import UrlsUtils from '../../utils/urls.utils';

export class HomePage {
  protected page: Page;
  readonly headerComponent: HeaderComponent;
  readonly productCardComponent: ProductCardComponent;
  readonly associateQuestionsComponent: AssociateQuestionsComponent;
  readonly smallBusinessQuestionsComponent: SmallBusinessQuestionsComponent;
  readonly chooseATierComponent: ChooseATierComponent;
  readonly additionalSupplementsComponent: AdditionalSupplementsComponent;
  readonly cartComponent: CartComponent;

  constructor(page: Page) {
    this.page = page;
    this.headerComponent = new HeaderComponent(page);
    this.productCardComponent = new ProductCardComponent(page);
    this.associateQuestionsComponent = new AssociateQuestionsComponent(page);
    this.smallBusinessQuestionsComponent = new SmallBusinessQuestionsComponent(page);
    this.chooseATierComponent = new ChooseATierComponent(page);
    this.additionalSupplementsComponent = new AdditionalSupplementsComponent(page);
    this.cartComponent = new CartComponent(page);
  }

  // #region Navigation
  navigateToHomePage = async (): Promise<void> => {
    await this.page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}`);
  };
  // #endregion Navigation

  // #region Actions
  // #endregion Actions

  // #region Assertions
  // #endregion Assertions
}
