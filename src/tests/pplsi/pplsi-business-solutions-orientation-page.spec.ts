import { expect, test } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { PplsiFooterComponent } from '../../page-objects/pplsi/pplsi-footer.component';
import { PplsiBusinessSolutionsOrientationPage } from '../../page-objects/pplsi/business-solutions-orientation/pplsi-business-solutions-orientation.page';
import { PplsiBusinessSolutionsOrientationVideoComponent } from '../../page-objects/pplsi/business-solutions-orientation/pplsi-business-solutions-orientation-video.component';

let pplsiFooterComponent: PplsiFooterComponent;
let pplsiBusinessSolutionsOrientationPage: PplsiBusinessSolutionsOrientationPage;
let pplsiBusinessSolutionsOrientationVideoComponent: PplsiBusinessSolutionsOrientationVideoComponent;

test.beforeEach(async ({ page }) => {
  pplsiFooterComponent = new PplsiFooterComponent(page);
  pplsiBusinessSolutionsOrientationPage = new PplsiBusinessSolutionsOrientationPage(page);
  pplsiBusinessSolutionsOrientationVideoComponent = new PplsiBusinessSolutionsOrientationVideoComponent(page);
});

test('User can navigate to Business Solutions Orientation page by clicking the Business Opportunity link in the PPLSI footer', async ({ page }) => {
  await test.step(`Navigate to PPLSI.com`, async () => {
    await page.goto(UrlsUtils.pplsiUrls.home.url);
  });
  await test.step(`Click on the Business Opportunity link`, async () => {
    await pplsiFooterComponent.locBusinessOpportunityLink.click();
  });
  await test.step(`Assert the Business Solutions Orientation page URL`, async () => {
    expect(page).toHaveURL(new RegExp('/business-solutions-orientation/'));
  });
});

test('User is redirected to Business Solutions Orientation Overview page after Clicking Get Started button ', async ({ page }) => {
  await test.step(`Navigate to PPLSI.com Business Solutions Orientation Page`, async () => {
    await page.goto(`${UrlsUtils.pplsiUrls.home.url}/business-solutions-orientation/`);
  });
  await test.step('Click on the Get Started Button', async () => {
    await pplsiBusinessSolutionsOrientationPage.locGetStartedButton.click();
  });
  await test.step('Assert the Business Solutions Orientation Overview Page', async () => {
    expect(page).toHaveURL(new RegExp('/business-solutions-orientation/overview'));
  });
});

test('User is redirected to Business Solutions Orientation Overview page after Clicking Get Started link in Picture ', async ({ page }) => {
  await test.step(`Navigate to PPLSI.com Business Solutions Orientation Page`, async () => {
    await page.goto(`${UrlsUtils.pplsiUrls.home.url}/business-solutions-orientation/`);
  });
  await test.step('Click on the Get Started Link', async () => {
    await pplsiBusinessSolutionsOrientationPage.locGetStartedLink.click();
  });
  await test.step('Assert the Business Solutions Orientation Overview Page', async () => {
    expect(page).toHaveURL(new RegExp('/business-solutions-orientation/overview'));
  });
});

test('User can play the introduction video on the Business Solutions Orientation Page ', async ({ page }) => {
  await test.step(`Navigate to PPLSI.com Business Solutions Orientation Page`, async () => {
    await page.goto(`${UrlsUtils.pplsiUrls.home.url}/business-solutions-orientation/`);
  });
  await test.step('Click on Introduction Video play button', async () => {
    await pplsiBusinessSolutionsOrientationVideoComponent.locVideoPlayerPlayButton.click();
  });
  await test.step('Assert the Business Solutions Orientation Overview Page', async () => {
    await pplsiBusinessSolutionsOrientationVideoComponent.assertVideoPlayerHasPlayed();
  });
});
