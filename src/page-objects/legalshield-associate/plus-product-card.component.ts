import { Locator, Page, expect, BrowserContext } from '@playwright/test';

export class PlusProductCardComponent {
  protected page: Page;
  protected context: BrowserContext;
  readonly locProductCardInfoSectionContainer: Locator;
  readonly locPlayButton: Locator;
  readonly locFeaturesAvailableContainer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.context = page.context();
    this.locProductCardInfoSectionContainer = this.page.locator('//div[contains(@class,"lsux-product-card__info-section")]');
    this.locPlayButton = this.locProductCardInfoSectionContainer.locator('//span[contains(.,"▶")]');
    this.locFeaturesAvailableContainer = this.locProductCardInfoSectionContainer.locator(
      '//div[contains(@class,"lsux-product-card__features-available")]'
    );
  }

  getNumberOfProductCards = async (): Promise<number> => {
    const numberOfProductCards = await this.locProductCardInfoSectionContainer.count();
    return numberOfProductCards;
  };

  verifyProductCardsDisplayHeading = async (): Promise<void> => {
    const numberOfProductCards = await this.getNumberOfProductCards();
    for (let i = 0; i < numberOfProductCards; i++) {
      const h3Locator: Locator = this.locProductCardInfoSectionContainer.nth(i).locator('//h3');
      expect.soft(await h3Locator.innerText()).not.toBe('');
    }
  };

  verifyProductCardsDisplayCosts = async (): Promise<void> => {
    const numberOfProductCards = await this.getNumberOfProductCards();
    for (let i = 0; i < numberOfProductCards; i++) {
      const costLabelLocator: Locator = this.locProductCardInfoSectionContainer.nth(i).locator('//p[contains(.,"$")]');
      expect.soft(costLabelLocator).toBeVisible();
    }
  };

  clickMoreDetailsLink = async (planName: string): Promise<Page> => {
    const moreDetailsLink = this.page.locator(
      `//div[contains(@class,"lsux-product-card__info-section") and contains(.,"${planName}")]//div[@class="lsux-product-card__card-desc"]//a[contains(.,"More details")]`
    );
    const [newPage] = await Promise.all([this.context.waitForEvent('page'), await moreDetailsLink.click()]);
    return newPage;
  };

  clickGetAPlanButton = async (planName: string): Promise<void> => {
    const getAPlanButton = this.page.locator(
      `//div[contains(@class,"lsux-product-card__info-section") and contains(.,"${planName}")]//div[@class="lsux-product-card__card-desc"]//button[contains(@class,"lsux-button--primary")]`
    );
    await getAPlanButton.click();
  };

  verifyAddedButtonIsVisible = async (planName: string): Promise<void> => {
    const addedButton = this.page.locator(
      `//div[contains(@class,"lsux-product-card__info-section") and contains(.,"${planName}")]//div[@class="lsux-product-card__card-desc"]//button[contains(@class,"lsux-button--primary") and contains(.,"Added")]`
    );
    await expect(addedButton).toBeVisible();
  };

  verifyGetAPlanButtonIsVisible = async (planName: string): Promise<void> => {
    const addedButton = this.page.locator(
      `//div[contains(@class,"lsux-product-card__info-section") and contains(.,"${planName}")]//div[@class="lsux-product-card__card-desc"]//button[contains(@class,"lsux-button--primary")]`
    );
    await expect(addedButton).toBeVisible();
  };

  clickAddedButton = async (planName: string): Promise<void> => {
    const addedButton = this.page.locator(
      `//div[contains(@class,"lsux-product-card__info-section") and contains(.,"${planName}")]//div[@class="lsux-product-card__card-desc"]//button[contains(@class,"lsux-button--primary") and contains(.,"Added")]`
    );
    await addedButton.click();
  };

  clickProductCardHeroImage = async (planName: string): Promise<void> => {
    const heroImage = this.page.locator(
      `//div[contains(@class,"lsux-product-card__info-section") and contains(.,"${planName}")]//div[@class="lsux-product-card__image-container"]//img`
    );
    await heroImage.click();
  };
}
