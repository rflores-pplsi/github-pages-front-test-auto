import { expect, test } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { PplsiBusinessSolutionsOrientationProgressBarComponent } from '../../page-objects/pplsi/business-solutions-orientation/pplsi-business-solutions-orientation-progress-bar.component';

let pplsiBusinessSolutionsOrientationProgressBarComponent: PplsiBusinessSolutionsOrientationProgressBarComponent;

test.beforeEach(async ({ page }) => {
  pplsiBusinessSolutionsOrientationProgressBarComponent = new PplsiBusinessSolutionsOrientationProgressBarComponent(page);
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
