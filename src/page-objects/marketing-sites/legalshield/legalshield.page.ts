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
}
