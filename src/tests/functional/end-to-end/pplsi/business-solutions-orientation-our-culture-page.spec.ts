import { expect } from '@playwright/test';
import UrlsUtils from '../../../../utils/urls.utils';
import { test } from '../../../../fixtures/frontend-ui.fixture';

test.beforeEach(async ({ page }) => {
  await test.step(`Navigate to PPLSI.com Business Solutions Orientation Page Our Culture Page`, async () => {
    await page.goto(`${UrlsUtils.pplsiUrls.home.url}/business-solutions-orientation/our-culture/`);
  });
});

test('User Clicks Complete Button is redirected back to Business Solutions Orientation Page', async ({ page, pplsiService }) => {
  await test.step('Click on Complete Button on Business Solutions Orientation OurCulture Page', async () => {
    await pplsiService.businessSolutionsOrientationPage.progressBarComponent.locCompleteButton.click();
  });
  await test.step('Assert the Business Solutions Orientation Page', async () => {
    expect(page).toHaveURL(new RegExp('/business-solutions-orientation'));
  });
});

test('User can play the Our Culture video on the Business Solutions Orientation Our Culture Page ', async ({ pplsiService }) => {
  await test.step('Click on Our Culture Video play button', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerPlayButton.click();
  });
  await test.step('Assert the Video has played', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerTimeCode1Second.waitFor();
    await pplsiService.businessSolutionsOrientationPage.videoComponent.assertVideoPlayerHasPlayed();
  });
});

test('User can pause the Our Culture video on the Business Solutions Orientation Our Culture Page ', async ({ pplsiService }) => {
  await test.step('Click on Our Culture Video play button', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerPlayButton.click();
  });
  await test.step('Click on Our Culture Video pause button', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerPauseButton.click();
  });
  await test.step('Assert the play button is displayed again', async () => {
    expect(pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerPlayButton).toBeVisible;
  });
});

test('User can skip ahead and back in the Our Culture video on the Business Solutions Orientation Our Culture Page', async ({ pplsiService }) => {
  await test.step('Click on middle of the Our Culture Video slider button', async () => {
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

test('User can mute/unmute the Our Culture video on the Business Solutions Orientation Our Culture Page', async ({ pplsiService }) => {
  await test.step('Click on Our Culture Video volume button', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerVolumeButton.click();
  });
  await test.step('Assert the volume is set to 0', async () => {
    await expect(pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerVolumeSlider).toHaveAttribute('aria-valuenow', '0');
  });
  await test.step('Click on Our Culture Video volume button', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerVolumeButton.click();
  });
  await test.step('Assert the volume is set to 1', async () => {
    await expect(pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerVolumeSlider).toHaveAttribute('aria-valuenow', '1');
  });
});

test('User can turn Closed Captioning on/off for the Our Culture video on the Business Solutions Orientation Our Culture Page', async ({
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

test('User can change the Quality Setting for the Our Culture video on the Business Solutions Orientation Our Culture Page', async ({
  pplsiService,
}) => {
  await test.step('Set the Quality to 720p', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.selectQualitySetting('1080p');
  });
  await test.step('Assert Quality is set to 720p', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.assertQualitySetting('1080p');
  });
});

test('User can change the Speed Setting for the Our Culture video on the Business Solutions Orientation Our Culture Page', async ({
  pplsiService,
}) => {
  await test.step('Set the Speed to 1.25x', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.selectSpeedSetting('1.25x');
  });
  await test.step('Assert Speed is set to 1.25x', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.assertSpeedSetting('1.25x');
  });
});
