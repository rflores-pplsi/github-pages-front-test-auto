import { Locator, Page } from '@playwright/test';

export class PlusStickyHeaderComponent {
  protected page: Page;
  readonly locStickyHeaderContainer: Locator;
  readonly locAssociatePhoneNumber: Locator;
  readonly locAssociateDisplayName: Locator;
  readonly locAssociateImage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locStickyHeaderContainer = this.page.locator('//div[contains(@class,"lsux-sticky-heading__header")]');
    this.locAssociatePhoneNumber = this.locStickyHeaderContainer.locator('//div[@class="lsux-business-card pt-2 pb-2"]/p');
    this.locAssociateDisplayName = this.locStickyHeaderContainer.locator(
      '//div[contains(@class,"lsux-business-card__display-name")]//p[contains(@class,"lsux-text--small")]'
    );
    this.locAssociateImage = this.locStickyHeaderContainer.locator('//img[@class="lsux-business-card__image"]');
  }

  getFormattedDisplayName = async (): Promise<string> => {
    const associateDisplayName = await this.locAssociateDisplayName.textContent();
    let formattedName: string;
    if (associateDisplayName) {
      formattedName = associateDisplayName.replace(/\s/g, '').toLowerCase();
    } else {
      // Handle the case when associateDisplayName is null
      formattedName = '';
    }
    return formattedName;
  };
}
