import { BrowserContext, Page } from '@playwright/test';
import { CommonHeaderComponent } from '../common-components/common-header.component';
import { CommonFooterComponent } from '../common-components/common-footer.component';
import { ConfigureCoveragePage } from './configure-coverage.page';

export class CartService {
  readonly configureCoveragePage: ConfigureCoveragePage;
  readonly commonHeaderComponent: CommonHeaderComponent;
  readonly commonFooterComponent: CommonFooterComponent;

  constructor(context: BrowserContext, page: Page) {
    this.configureCoveragePage = new ConfigureCoveragePage(page);
    this.commonHeaderComponent = new CommonHeaderComponent(page);
    this.commonFooterComponent = new CommonFooterComponent(context, page);
  }
}
