import { Page, Browser, BrowserContext, Locator } from '@playwright/test';
import { HeroSectionComponent } from '../../common-components/hero-section.component';
import { GridSectionComponent } from '../../common-components/grid-section.component';
import { PricingSectionComponent } from '../../common-components/pricing-section.component';
import { NavListSectionComponent } from '../../common-components/nav_list-section.component';

export class LegalshieldPage {
  readonly page: Page;
  readonly context: BrowserContext;
  readonly heroSectionComponent: HeroSectionComponent;
  readonly gridSectionComponent: GridSectionComponent;
  readonly pricingSectionComponent: PricingSectionComponent;
  readonly navListSectionComponent: NavListSectionComponent;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.context = context;
    this.heroSectionComponent = new HeroSectionComponent(context, page);
    this.gridSectionComponent = new GridSectionComponent(context, page);
    this.pricingSectionComponent = new PricingSectionComponent(context, page);
    this.navListSectionComponent = new NavListSectionComponent(context, page);
  }

  clickLinksReturnResults = async (links: Locator): Promise<Array<string>> => {
    const count = await links.count();
    let results = [];
    for (let i = 0; i < count; i++) {
      try {
        await links.nth(i).click();
        await this.page.waitForLoadState();
        await this.page.screenshot({ fullPage: true, path: `screenshots/${new Date().getTime()}-${i}.png` });
        results.push(this.page.url(), this.page.title());
        await this.page.goBack();
      } catch {
        console.log('Errored out in catch');
        continue;
      }
    }
    results = await Promise.all(results);
    return results;
  };

  clickItemsFromUnorderedList = async (listItems: Locator): Promise<Array<string>> => {
    const items = await listItems.all();
    let results = [];
    for (const item of items) {
      try {
        await item.click();
        await this.page.waitForLoadState();
        await this.page.screenshot({ fullPage: true, path: `screenshots/${new Date().getTime()}-${this.page.title()}.png` });
        results.push(this.page.url(), this.page.title());
        await this.page.goBack();
      } catch {
        console.log('Errored out in catch');
        continue;
      }
    }
    results = await Promise.all(results);
    return results;
  };
}
