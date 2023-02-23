import { expect, test } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { PplsiBusinessSolutionsOrientationProgressBarComponent } from '../../page-objects/pplsi/business-solutions-orientation/pplsi-business-solutions-orientation-progress-bar.component';

let pplsiBusinessSolutionsOrientationProgressBarComponent: PplsiBusinessSolutionsOrientationProgressBarComponent;

test.beforeEach(async ({ page }) => {
  pplsiBusinessSolutionsOrientationProgressBarComponent = new PplsiBusinessSolutionsOrientationProgressBarComponent(page);
  await test.step(`Navigate to PPLSI.com Business Solutions Orientation Prospecting Page`, async () => {
    await page.goto(`${UrlsUtils.pplsiUrls.home.url}/business-solutions-orientation/prospecting`);
  });
});

test('User is redirected to  Next Steps Page after Clicking Next button on Prospecting Page ', async ({ page }) => {
  await test.step('Click on Next Button on Business Solutions Orientation Prospecting Page', async () => {
    await pplsiBusinessSolutionsOrientationProgressBarComponent.locNextButton.click();
  });
  await test.step('Assert to the Business Solutions Orientation NextSteps Page', async () => {
    expect(page).toHaveURL(new RegExp('/business-solutions-orientation/next-steps'));
  });
});

test('User is redirected to Business Solutions Orientation Compensation Page after Clicking Back button on Prospecting Page', async ({ page }) => {
  await test.step('Click on Back Button on Business Solutions Orientation Prospecting Page', async () => {
    await pplsiBusinessSolutionsOrientationProgressBarComponent.locBackButton.click();
  });
  await test.step('Assert to the Business Solutions Orientation Compensation Page', async () => {
    expect(page).toHaveURL(new RegExp('/business-solutions-orientation/compensation'));
  });
});
