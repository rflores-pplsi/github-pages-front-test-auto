import { Locator, Page, BrowserContext } from '@playwright/test';
import { PplsiBusinessSolutionsOrientationVideoComponent } from './pplsi-business-solutions-orientation-video.component';
import { PplsiBusinessSolutionsOrientationBottomNavigationBarComponent } from './pplsi-business-solutions-orientation-bottom-navigation-bar.component';
import { PplsiBusinessSolutionsOrientationProgressBarComponent } from './pplsi-business-solutions-orientation-progress-bar.component';
import { PplsiBusinessSolutionsOrientationResourcesComponent } from './pplsi-business-solutions-orientation-resources.component';

/**
 *
 *
 * @export
 * @class PplsiBusinessSolutionsOrientationPage
 */
export class PplsiBusinessSolutionsOrientationPage {
  readonly page: Page;
  readonly context: BrowserContext;
  readonly pplsiBusinessSolutionsOrientationVideoComponent: PplsiBusinessSolutionsOrientationVideoComponent;
  readonly pplsiBusinessSolutionsOrientationBottomNavigationBarComponent: PplsiBusinessSolutionsOrientationBottomNavigationBarComponent;
  readonly pplsiBusinessSolutionsOrientationProgressBarComponent: PplsiBusinessSolutionsOrientationProgressBarComponent;
  readonly pplsiBusinessSolutionsOrientationResourcesComponent: PplsiBusinessSolutionsOrientationResourcesComponent;
  readonly locGetStartedLink: Locator;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.context = context;
    this.pplsiBusinessSolutionsOrientationVideoComponent = new PplsiBusinessSolutionsOrientationVideoComponent(page);
    this.pplsiBusinessSolutionsOrientationBottomNavigationBarComponent = new PplsiBusinessSolutionsOrientationBottomNavigationBarComponent(page);
    this.pplsiBusinessSolutionsOrientationProgressBarComponent = new PplsiBusinessSolutionsOrientationProgressBarComponent(page);
    this.pplsiBusinessSolutionsOrientationResourcesComponent = new PplsiBusinessSolutionsOrientationResourcesComponent(context, page);

    this.locGetStartedLink = this.page.locator('//*[@id="content"]/section[2]/div/a/span');
  }
}
