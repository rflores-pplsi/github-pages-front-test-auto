import { Locator, Page, BrowserContext } from '@playwright/test';
import { VideoComponent } from './video.component';
import { BottomNavigationBarComponent } from './bottom-navigation-bar.component';
import { ProgressBarComponent } from './progress-bar.component';
import { ResourcesComponent } from './resources.component';
import { PplsiFooterComponent } from '../footer.component';

/**
 *
 *
 * @export
 * @class PplsiBusinessSolutionsOrientationPage
 */
export class BusinessSolutionsOrientationPage {
  readonly page: Page;
  readonly context: BrowserContext;
  readonly videoComponent: VideoComponent;
  readonly bottomNavigationBarComponent: BottomNavigationBarComponent;
  readonly progressBarComponent: ProgressBarComponent;
  readonly resourcesComponent: ResourcesComponent;
  readonly pplsiFooterComponent: PplsiFooterComponent;
  readonly locGetStartedLink: Locator;

  constructor(context: BrowserContext, page: Page) {
    this.page = page;
    this.context = context;
    this.videoComponent = new VideoComponent(page);
    this.bottomNavigationBarComponent = new BottomNavigationBarComponent(page);
    this.progressBarComponent = new ProgressBarComponent(page);
    this.resourcesComponent = new ResourcesComponent(context, page);
    this.pplsiFooterComponent = new PplsiFooterComponent(page);
    this.locGetStartedLink = this.page.locator('//*[@id="content"]/section[2]/div/a/span');
  }
}
