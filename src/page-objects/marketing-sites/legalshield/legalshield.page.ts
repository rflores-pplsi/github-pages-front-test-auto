import { Page, Browser, BrowserContext, Locator } from '@playwright/test';
import { HeroSectionComponent } from '../../common-components/hero-section.component';
import { GridSectionComponent } from '../../common-components/grid-section.component';
import { PricingSectionComponent } from '../../common-components/pricing-section.component';

export class LegalshieldPage {
  readonly page: Page;
  readonly context: BrowserContext;
  readonly heroSectionComponent: HeroSectionComponent;
  readonly gridSectionComponent: GridSectionComponent;
  readonly pricingSectionComponent: PricingSectionComponent;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.context = context;
    this.heroSectionComponent = new HeroSectionComponent(context, page);
    this.gridSectionComponent = new GridSectionComponent(context, page);
    this.pricingSectionComponent = new PricingSectionComponent(context, page);
  }

  clickLinksReturnResults = async (links: Locator): Promise<Array<string>> => {
    const count = await links.count();
    const results = [];
    for (let i = 0; i < count; i++) {
      try {
        await links.nth(i).click();
        await this.page.waitForLoadState();
        await this.page.screenshot({ fullPage: true, path: `screenshots/${new Date().getTime()}-${i}.png` });
        results.push(this.page.url());
        await this.page.goBack();
      } catch {
        console.log('Errored out in catch');
        continue;
      }
    }
    return results;
  };
}
