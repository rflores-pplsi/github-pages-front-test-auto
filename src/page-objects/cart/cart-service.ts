import { BrowserContext, Page } from '@playwright/test';
import { GlobalHeaderComponent } from '../global-components/global-header.component';
import { GlobalFooterComponent } from '../global-components/global-footer.component';
import { ConfigureCoveragePage } from './configure-coverage.page';

export class CartService {
  readonly configureCoveragePage: ConfigureCoveragePage;
  readonly commonHeaderComponent: GlobalHeaderComponent;
  readonly commonFooterComponent: GlobalFooterComponent;

  constructor(context: BrowserContext, page: Page) {
    this.configureCoveragePage = new ConfigureCoveragePage(page);
    this.commonHeaderComponent = new GlobalHeaderComponent(page);
    this.commonFooterComponent = new GlobalFooterComponent(context, page);
  }
}
