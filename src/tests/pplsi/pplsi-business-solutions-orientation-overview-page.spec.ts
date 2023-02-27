import { expect, test } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { PplsiBusinessSolutionsOrientationProgressBarComponent } from '../../page-objects/pplsi/business-solutions-orientation/pplsi-business-solutions-orientation-progress-bar.component';
import { PplsiBusinessSolutionsOrientationResourcesComponent } from '../../page-objects/pplsi/business-solutions-orientation/pplsi-business-solutions-orientation-resources.component';
import { PplsiBusinessSolutionsOrientationVideoComponent } from '../../page-objects/pplsi/business-solutions-orientation/pplsi-business-solutions-orientation-video.component';

let pplsiBusinessSolutionsOrientationProgressBarComponent: PplsiBusinessSolutionsOrientationProgressBarComponent;
let pplsiBusinessSolutionsOrientationResourcesComponent: PplsiBusinessSolutionsOrientationResourcesComponent;
let pplsiBusinessSolutionsOrientationVideoComponent: PplsiBusinessSolutionsOrientationVideoComponent;

test.beforeEach(async ({ page, context }) => {
  pplsiBusinessSolutionsOrientationProgressBarComponent = new PplsiBusinessSolutionsOrientationProgressBarComponent(page);
  pplsiBusinessSolutionsOrientationResourcesComponent = new PplsiBusinessSolutionsOrientationResourcesComponent(context, page);
  pplsiBusinessSolutionsOrientationVideoComponent = new PplsiBusinessSolutionsOrientationVideoComponent(page);
  await test.step(`Navigate to PPLSI.com Business Solutions Orientation Overview page`, async () => {
    await pplsiBusinessSolutionsOrientationResourcesComponent.page.goto(`${UrlsUtils.pplsiUrls.home.url}/business-solutions-orientation/overview/`);
  });
});

test('User is redirected to Compensation Page after Clicking Next button on Overview Page ', async ({ page }) => {
  await test.step('Click on Next Button on Business Solutions Orientation Overview Page', async () => {
    await pplsiBusinessSolutionsOrientationProgressBarComponent.locNextButton.click();
  });
  await test.step('Assert to the Business Solutions Orientation Compensation Page', async () => {
    expect(page).toHaveURL(new RegExp('/business-solutions-orientation/compensation'));
  });
});

test('User is redirected to Business Solutions Orientation Page after Clicking Back button on Overview Page', async ({ page }) => {
  await test.step('Click on Back Button on Business Solutions Orientation Overview Page', async () => {
    await pplsiBusinessSolutionsOrientationProgressBarComponent.locBackButton.click();
  });
  await test.step('Assert to the Business Solutions Orientation Page', async () => {
    expect(page).toHaveURL(new RegExp('/business-solutions-orientation/'));
  });
});

test('User can open the LegalShield Plan pdf from the resources list', async ({ browserName, headless }) => {
  test.skip(
    (browserName === 'chromium' && headless === true) || browserName === 'firefox',
    'Skipping test for firefox and headless chrome configurations, as PDFs download instead of opening in browser in these cases'
  );
  await test.step(`Click on the LegalShield Plan download icon and assert expected PDF opens in new tab`, async () => {
    await pplsiBusinessSolutionsOrientationResourcesComponent.assertUrlOfNewTabAfterOpeningPdfLink(
      'LegalShield Plan',
      'SHEET_LS_Plus_070722_FORM.pdf'
    );
  });
});

test('User can open the IDShield Plan pdf from the resources list', async ({ browserName, headless }) => {
  test.skip(
    (browserName === 'chromium' && headless === true) || browserName === 'firefox',
    'Skipping test for firefox and headless chrome configurations, as PDFs download instead of opening in browser in these cases'
  );
  await test.step(`Click on the LegalShield Plan download icon and assert expected PDF opens in new tab`, async () => {
    await pplsiBusinessSolutionsOrientationResourcesComponent.assertUrlOfNewTabAfterOpeningPdfLink(
      'IDShield Plan',
      'IDShieldFlatSheet_v05_082521_FORM.pdf'
    );
  });
});

test('User can open the Enrollment Flyer pdf from the resources list', async ({ browserName, headless }) => {
  test.skip(
    (browserName === 'chromium' && headless === true) || browserName === 'firefox',
    'Skipping test for firefox and headless chrome configurations, as PDFs download instead of opening in browser in these cases'
  );
  await test.step(`Click on the LegalShield Plan download icon and assert expected PDF opens in new tab`, async () => {
    await pplsiBusinessSolutionsOrientationResourcesComponent.assertUrlOfNewTabAfterOpeningPdfLink(
      'Enrollment Flyer',
      'G_FLIER_LS_IDS_1B_GroupEnrollment_USA_092321_FORM.pdf'
    );
  });
});

test('User can play the introduction video on the Business Solutions Orientation Overview Page ', async () => {
  await test.step('Click on Introduction Video play button', async () => {
    await pplsiBusinessSolutionsOrientationVideoComponent.locVideoPlayerPlayButton.click();
  });
  await test.step('Assert the Business Solutions Orientation Overview Page', async () => {
    await pplsiBusinessSolutionsOrientationVideoComponent.assertVideoPlayerHasPlayed();
  });
});
