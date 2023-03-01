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
  await test.step(`Navigate to PPLSI.com Business Solutions Orientation Compensation Page`, async () => {
    await page.goto(`${UrlsUtils.pplsiUrls.home.url}/business-solutions-orientation/compensation/`);
  });
});

test('User is redirected to Prospecting Page after Clicking Next button on Compensation Page ', async ({ page }) => {
  await test.step('Click on Next Button on Business Solutions Orientation Compensation Page', async () => {
    await pplsiBusinessSolutionsOrientationProgressBarComponent.locNextButton.click();
  });
  await test.step('Assert to the Business Solutions Orientation Prospecting Page', async () => {
    expect(page).toHaveURL(new RegExp('/business-solutions-orientation/prospecting'));
  });
});

test('User is redirected to Business Solutions Orientation Overview Page after Clicking Back button on Compensation Page', async ({ page }) => {
  await test.step('Click on Back Button on Business Solutions Orientation Compensation Page', async () => {
    await pplsiBusinessSolutionsOrientationProgressBarComponent.locBackButton.click();
  });
  await test.step('Assert to the Business Solutions Orientation Overview Page', async () => {
    expect(page).toHaveURL(new RegExp('/business-solutions-orientation/overview'));
  });
});

test('User can open the Compensation Plan pdf from the resources list', async ({ browserName, headless }) => {
  test.skip(
    (browserName === 'chromium' && headless === true) || browserName === 'firefox',
    'Skipping test for firefox and headless chrome configurations, as PDFs download instead of opening in browser in these cases'
  );
  await test.step(`Click on the LegalShield Plan download icon and assert expected PDF opens in new tab`, async () => {
    await pplsiBusinessSolutionsOrientationResourcesComponent.assertUrlOfNewTabAfterOpeningPdfLink(
      'Compensation Plan',
      'Advanced_Commission_by_Rank_-_Elite_Tier_thru_ED.pdf'
    );
  });
});

test('User can play the Compensation Overview video on the Business Solutions Orientation Compensation Page ', async () => {
  await test.step('Click on Compensation Overview Video play button', async () => {
    await pplsiBusinessSolutionsOrientationVideoComponent.locVideoPlayerPlayButton.click();
  });
  await test.step('Assert the Video has played', async () => {
    await pplsiBusinessSolutionsOrientationVideoComponent.locVideoPlayerTimeCode1Second.waitFor();
    await pplsiBusinessSolutionsOrientationVideoComponent.assertVideoPlayerHasPlayed();
  });
});

test('User can pause the Compensation Overview video on the Business Solutions Orientation Overview Page ', async () => {
  await test.step('Click on Compensation Overview Video play button', async () => {
    await pplsiBusinessSolutionsOrientationVideoComponent.locVideoPlayerPlayButton.click();
  });
  await test.step('Click on Compensation Overview Video pause button', async () => {
    await pplsiBusinessSolutionsOrientationVideoComponent.locVideoPlayerPauseButton.click();
  });
  await test.step('Assert the play button is displayed again', async () => {
    expect(pplsiBusinessSolutionsOrientationVideoComponent.locVideoPlayerPlayButton).toBeVisible;
  });
});

test('User can skip ahead and back in the Compensation Overview video on the Business Solutions Orientation Overview Page', async ({ page }) => {
  await test.step('Click on middle of the Compensation Overview Video slider button', async () => {
    await pplsiBusinessSolutionsOrientationVideoComponent.locVideoPlayerSlider.click();
  });
  await test.step('Assert that the video now shows some has played', async () => {
    await pplsiBusinessSolutionsOrientationVideoComponent.assertVideoPlayerHasPlayed();
  });
  await test.step('Click on the Slider at a previous timestamp', async () => {
    await pplsiBusinessSolutionsOrientationVideoComponent.locVideoPlayerSlider.click({ force: true, position: { x: 0, y: 0 } });
  });
  await test.step('Assert that the timestamp has reset to 00:00', async () => {
    await pplsiBusinessSolutionsOrientationVideoComponent.assertTimestamp('00:00');
  });
});

test('User can mute/unmute the Compensation Overview video on the Business Solutions Orientation Page', async ({ page }) => {
  await test.step('Click on Compensation Overview Video volume button', async () => {
    await pplsiBusinessSolutionsOrientationVideoComponent.locVideoPlayerVolumeButton.click();
  });
  await test.step('Assert the volume is set to 0', async () => {
    await expect(pplsiBusinessSolutionsOrientationVideoComponent.locVideoPlayerVolumeSlider).toHaveAttribute('aria-valuenow', '0');
  });
  await test.step('Click on Compensation Overview Video volume button', async () => {
    await pplsiBusinessSolutionsOrientationVideoComponent.locVideoPlayerVolumeButton.click();
  });
  await test.step('Assert the volume is set to 1', async () => {
    await expect(pplsiBusinessSolutionsOrientationVideoComponent.locVideoPlayerVolumeSlider).toHaveAttribute('aria-valuenow', '1');
  });
});

test('User can turn Closed Captioning on/off for the Compensation Overview video on the Business Solutions Orientation Overview Page', async ({
  page,
}) => {
  await test.step('Choose the English Closed Captioning option', async () => {
    await pplsiBusinessSolutionsOrientationVideoComponent.selectClosedCaptionOption('English');
  });
  await test.step('Close Closed Captioning menu', async () => {
    await pplsiBusinessSolutionsOrientationVideoComponent.locVideoPlayerClosedCaptionCloseButton.click();
  });
  await test.step('Play Video and Assert Closed Captions display', async () => {
    await pplsiBusinessSolutionsOrientationVideoComponent.locVideoPlayerPlayButton.click();
    await pplsiBusinessSolutionsOrientationVideoComponent.locVideoPlayerClosedCaptions.waitFor();
    expect(pplsiBusinessSolutionsOrientationVideoComponent.locVideoPlayerClosedCaptions).toBeVisible();
  });
  await test.step('Turn Closed Captioning off', async () => {
    await pplsiBusinessSolutionsOrientationVideoComponent.selectClosedCaptionOption('Off');
  });
  await test.step('Assert Closed Captions setting', async () => {
    await pplsiBusinessSolutionsOrientationVideoComponent.assertClosedCaptionSetting('Off');
  });
});

test('User can change the Quality Setting for the Compensation Overview video on the Business Solutions Orientation Overview Page', async ({
  page,
}) => {
  await test.step('Set the Quality to 1080p', async () => {
    await pplsiBusinessSolutionsOrientationVideoComponent.selectQualitySetting('1080p');
  });
  await test.step('Assert Quality is set to 1080p', async () => {
    await pplsiBusinessSolutionsOrientationVideoComponent.assertQualitySetting('1080p');
  });
});

test('User can change the Speed Setting for the Compensation Overview video on the Business Solutions Orientation Page', async ({ page }) => {
  await test.step(`Navigate to PPLSI.com Business Solutions Orientation Page`, async () => {
    await page.goto(`${UrlsUtils.pplsiUrls.home.url}/business-solutions-orientation/`);
  });
  await test.step('Set the Speed to 1.25x', async () => {
    await pplsiBusinessSolutionsOrientationVideoComponent.selectSpeedSetting('1.25x');
  });
  await test.step('Assert Speed is set to 1.25x', async () => {
    await pplsiBusinessSolutionsOrientationVideoComponent.assertSpeedSetting('1.25x');
  });
});
