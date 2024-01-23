import { expect } from '@playwright/test';
import UrlsUtils from '../../../../utils/urls.utils';
import { test } from '../../../../fixtures/frontend-ui.fixture';

test.beforeEach(async ({ pplsiService }) => {
  await test.step(`Navigate to PPLSI.com Business Solutions Orientation Overview page`, async () => {
    await pplsiService.businessSolutionsOrientationPage.resourcesComponent.page.goto(
      `${UrlsUtils.pplsiUrls.home.url}/business-solutions-orientation/overview/`
    );
  });
});

test('User is redirected to Compensation Page after Clicking Next button on Overview Page ', async ({ page, pplsiService }) => {
  await test.step('Click on Next Button on Business Solutions Orientation Overview Page', async () => {
    await pplsiService.businessSolutionsOrientationPage.progressBarComponent.locNextButton.click();
  });
  await test.step('Assert to the Business Solutions Orientation Compensation Page', async () => {
    expect(page).toHaveURL(new RegExp('/business-solutions-orientation/compensation'));
  });
});

test('User is redirected to Business Solutions Orientation Page after Clicking Back button on Overview Page', async ({ page, pplsiService }) => {
  await test.step('Click on Back Button on Business Solutions Orientation Overview Page', async () => {
    await pplsiService.businessSolutionsOrientationPage.progressBarComponent.locBackButton.click();
  });
  await test.step('Assert to the Business Solutions Orientation Page', async () => {
    expect(page).toHaveURL(new RegExp('/business-solutions-orientation/'));
  });
});

test('User can open the LegalShield Plan pdf from the resources list', async ({ browserName, headless, pplsiService }) => {
  test.skip(
    (browserName === 'chromium' && headless === true) || browserName === 'firefox',
    'Skipping test for firefox and headless chrome configurations, as PDFs download instead of opening in browser in these cases'
  );
  await test.step(`Click on the LegalShield Plan download icon and assert expected PDF opens in new tab`, async () => {
    await pplsiService.businessSolutionsOrientationPage.resourcesComponent.assertUrlOfNewTabAfterOpeningPdfLink(
      'LegalShield Plan',
      'SHEET_LS_Plus_070722_FORM.pdf'
    );
  });
});

test('User can open the IDShield Plan pdf from the resources list', async ({ browserName, headless, pplsiService }) => {
  test.skip(
    (browserName === 'chromium' && headless === true) || browserName === 'firefox',
    'Skipping test for firefox and headless chrome configurations, as PDFs download instead of opening in browser in these cases'
  );
  await test.step(`Click on the LegalShield Plan download icon and assert expected PDF opens in new tab`, async () => {
    await pplsiService.businessSolutionsOrientationPage.resourcesComponent.assertUrlOfNewTabAfterOpeningPdfLink(
      'IDShield Plan',
      'IDShieldFlatSheet_v05_082521_FORM.pdf'
    );
  });
});

test('User can open the Enrollment Flyer pdf from the resources list', async ({ browserName, headless, pplsiService }) => {
  test.skip(
    (browserName === 'chromium' && headless === true) || browserName === 'firefox',
    'Skipping test for firefox and headless chrome configurations, as PDFs download instead of opening in browser in these cases'
  );
  await test.step(`Click on the LegalShield Plan download icon and assert expected PDF opens in new tab`, async () => {
    await pplsiService.businessSolutionsOrientationPage.resourcesComponent.assertUrlOfNewTabAfterOpeningPdfLink(
      'Enrollment Flyer',
      'G_FLIER_LS_IDS_1B_GroupEnrollment_USA_092321_FORM.pdf'
    );
  });
});

test('User can play the Product Overview video on the Business Solutions Orientation Overview Page ', async ({ pplsiService }) => {
  await test.step('Click on Product Overview Video play button', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerPlayButton.click();
  });
  await test.step('Assert the Video has played', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerTimeCode1Second.waitFor();
    await pplsiService.businessSolutionsOrientationPage.videoComponent.assertVideoPlayerHasPlayed();
  });
});

test('User can pause the Product Overview video on the Business Solutions Orientation Overview Page ', async ({ pplsiService }) => {
  await test.step('Click on Product Overview Video play button', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerPlayButton.click();
  });
  await test.step('Click on Product Overview Video pause button', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerPauseButton.click();
  });
  await test.step('Assert the play button is displayed again', async () => {
    expect(pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerPlayButton).toBeVisible;
  });
});

test('User can skip ahead and back in the Product Overview video on the Business Solutions Orientation Overview Page', async ({ pplsiService }) => {
  await test.step('Click on middle of the Product Overview Video slider button', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerSlider.click();
  });
  await test.step('Assert that the video now shows some has played', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.assertVideoPlayerHasPlayed();
  });
  await test.step('Click on the Slider at a previous timestamp', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerSlider.click({
      force: true,
      position: { x: 0, y: 0 },
    });
  });
  await test.step('Assert that the timestamp has reset to 00:00', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.assertTimestamp('00:00');
  });
});

test('User can turn Closed Captioning on/off for the introduction video on the Business Solutions Orientation Overview Page', async ({
  pplsiService,
}) => {
  await test.step('Choose the English Closed Captioning option', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.selectClosedCaptionOption('English');
  });
  await test.step('Close Closed Captioning menu', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerClosedCaptionCloseButton.click();
  });
  await test.step('Play Video and Assert Closed Captions display', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerPlayButton.click();
    await pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerClosedCaptions.waitFor();
    expect(pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerClosedCaptions).toBeVisible();
  });
  await test.step('Turn Closed Captioning off', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.selectClosedCaptionOption('Off');
  });
  await test.step('Assert Closed Captions setting', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.assertClosedCaptionSetting('Off');
  });
});

test('User can change the Quality Setting for the introduction video on the Business Solutions Orientation Overview Page', async ({
  pplsiService,
}) => {
  await test.step('Set the Quality to 1080p', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.selectQualitySetting('1080p');
  });
  await test.step('Assert Quality is set to 1080p', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.assertQualitySetting('1080p');
  });
});
