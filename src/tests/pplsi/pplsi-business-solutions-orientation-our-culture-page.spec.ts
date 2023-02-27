import { expect, test } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { PplsiBusinessSolutionsOrientationProgressBarComponent } from '../../page-objects/pplsi/business-solutions-orientation/pplsi-business-solutions-orientation-progress-bar.component';
import { PplsiBusinessSolutionsOrientationVideoComponent } from '../../page-objects/pplsi/business-solutions-orientation/pplsi-business-solutions-orientation-video.component';

let pplsiBusinessSolutionsOrientationProgressBarComponent: PplsiBusinessSolutionsOrientationProgressBarComponent;
let pplsiBusinessSolutionsOrientationVideoComponent: PplsiBusinessSolutionsOrientationVideoComponent;

test.beforeEach(async ({ page }) => {
  pplsiBusinessSolutionsOrientationProgressBarComponent = new PplsiBusinessSolutionsOrientationProgressBarComponent(page);
  pplsiBusinessSolutionsOrientationVideoComponent = new PplsiBusinessSolutionsOrientationVideoComponent(page);
  await test.step(`Navigate to PPLSI.com Business Solutions Orientation Page Our Culture Page`, async () => {
    await page.goto(`${UrlsUtils.pplsiUrls.home.url}/business-solutions-orientation/our-culture/`);
  });
});

test('User Clicks Complete Button is redirected back to Business Solutions Orientation Page', async ({ page }) => {
  await test.step('Click on Complete Button on Business Solutions Orientation OurCulture Page', async () => {
    await pplsiBusinessSolutionsOrientationProgressBarComponent.locCompleteButton.click();
  });
  await test.step('Assert to the Business Solutions Orientation Page', async () => {
    expect(page).toHaveURL(new RegExp('/business-solutions-orientation'));
  });
});

test('User can play the introduction video on the Business Solutions Orientation Our Culture Page ', async () => {
  await test.step('Click on Introduction Video play button', async () => {
    await pplsiBusinessSolutionsOrientationVideoComponent.locVideoPlayerPlayButton.click();
  });
  await test.step('Assert the Business Solutions Orientation Overview Page', async () => {
    await pplsiBusinessSolutionsOrientationVideoComponent.assertVideoPlayerHasPlayed();
  });
});
