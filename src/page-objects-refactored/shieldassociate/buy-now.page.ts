import { BrowserContext, Page } from '@playwright/test';
import { GlobalHeaderComponent, GlobalFooterComponent } from '@legalshield/frontend-automation-commons';
import { CartService } from '../cart/cart-service';

export class BuyNowPage {
  readonly page: Page;
  readonly cartService: CartService;
  readonly globalHeaderComponent: GlobalHeaderComponent;
  readonly globalFooterComponent: GlobalFooterComponent;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.cartService = new CartService(context, page);
    this.globalHeaderComponent = new GlobalHeaderComponent(page);
    this.globalFooterComponent = new GlobalFooterComponent(context, page);
  }

  clickBuyNowButtonAndWaitForCartService = async (planName: string, associateRegistrationType: string): Promise<void> => {
    const buyNowButtonLocator = this.page.locator(`//div[contains(@class, "lsux-pricing-card") and contains(.,"${planName}")]//button`);
    await buyNowButtonLocator.click();
    if (planName.includes('Small Business')) {
      await this.cartService.smallBusinessQuestionsPage.locPubliclyTradedOrNonProfitNoCheckbox.click();
      await this.cartService.smallBusinessQuestionsPage.locContinueButton.click();
    }
    if (planName == 'Associate') {
      await this.cartService.associateQuestionsPage.answerStartUpQuestions(associateRegistrationType);
      await this.cartService.associateQuestionsPage.locContinueButton.click();
    }
    await this.page.waitForURL(new RegExp('data='));
  };
}
