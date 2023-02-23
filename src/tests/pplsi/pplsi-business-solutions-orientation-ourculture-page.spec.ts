import { expect, test } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { PplsiBusinessSolutionsOrientationProgressBarComponent } from '../../page-objects/pplsi/business-solutions-orientation/pplsi-business-solutions-orientation-progress-bar.component';

let pplsiBusinessSolutionsOrientationProgressBarComponent: PplsiBusinessSolutionsOrientationProgressBarComponent;

test.beforeEach(async ({ page }) => {
  await test.step(`Navigate to PPLSI Page`, async () => {
    pplsiBusinessSolutionsOrientationProgressBarComponent = new PplsiBusinessSolutionsOrientationProgressBarComponent(page);
  });
});

test('User Clicks Complete Button is redirected back to Business Solutions Orientation Overview Page', async ({ page }) => {
  await test.step(`Navigate to PPLSI.com Business Solutions Orientation Page`, async () => {
    await page.goto(`${UrlsUtils.pplsiUrls.home.url}/business-solutions-orientation/`);
  });
  await test.step('Click on the Get Started Button', async () => {
    await pplsiBusinessSolutionsOrientationProgressBarComponent.locGetStartedButton.click();
  });
  await test.step('Assert to the Business Solutions Orientation Overview Page', async () => {
    expect(page).toHaveURL(new RegExp('/business-solutions-orientation/overview'));
  });
  await test.step('Click on Next Button on Business Solutions Orientation Overview Page', async () => {
    await pplsiBusinessSolutionsOrientationProgressBarComponent.locNextButton.click();
  });
  await test.step('Assert to the Business Solutions Orientation Compensation Page', async () => {
    expect(page).toHaveURL(new RegExp('/business-solutions-orientation/compensation'));
  });
  await test.step('Click on Next Button on Business Solutions Orientation Compensation Page', async () => {
    await pplsiBusinessSolutionsOrientationProgressBarComponent.locNextButton.click();
  });
  await test.step('Assert to the Business Solutions Orientation Prospecting Page', async () => {
    expect(page).toHaveURL(new RegExp('/business-solutions-orientation/prospecting'));
  });
  await test.step('Click on Next Button on Business Solutions Orientation Prospecting Page', async () => {
    await pplsiBusinessSolutionsOrientationProgressBarComponent.locNextButton.click();
  });
  await test.step('Assert to the Business Solutions Orientation NextSteps Page', async () => {
    expect(page).toHaveURL(new RegExp('/business-solutions-orientation/next-steps'));
  });
  await test.step('Click on Next Button on Business Solutions Orientation NextSteps Page', async () => {
    await pplsiBusinessSolutionsOrientationProgressBarComponent.locNextButton.click();
  });
  await test.step('Assert to the Business Solutions Orientation OurCulture Page', async () => {
    expect(page).toHaveURL(new RegExp('/business-solutions-orientation/our-culture'));
  });
  await test.step('Click on Complete Button on Business Solutions Orientation OurCulture Page', async () => {
    await pplsiBusinessSolutionsOrientationProgressBarComponent.locCompleteButton.click();
  });
  await test.step('Assert to the Business Solutions Orientation Page', async () => {
    expect(page).toHaveURL(new RegExp('/business-solutions-orientation'));
  });
});
