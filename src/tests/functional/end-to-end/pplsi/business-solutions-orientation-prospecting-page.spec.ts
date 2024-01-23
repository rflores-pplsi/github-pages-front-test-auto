import { expect } from '@playwright/test';
import UrlsUtils from '../../../../utils/urls.utils';
import { test } from '../../../../fixtures/frontend-ui.fixture';

test.beforeEach(async ({ page }) => {
  await test.step(`Navigate to PPLSI.com Business Solutions Orientation Prospecting Page`, async () => {
    await page.goto(`${UrlsUtils.pplsiUrls.home.url}/business-solutions-orientation/prospecting`);
  });
});

test('User is redirected to  Next Steps Page after Clicking Next button on Prospecting Page ', async ({ page, pplsiService }) => {
  await test.step('Click on Next Button on Business Solutions Orientation Prospecting Page', async () => {
    await pplsiService.businessSolutionsOrientationPage.progressBarComponent.locNextButton.click();
  });
  await test.step('Assert to the Business Solutions Orientation NextSteps Page', async () => {
    expect(page).toHaveURL(new RegExp('/business-solutions-orientation/next-steps'));
  });
});

test('User is redirected to Business Solutions Orientation Compensation Page after Clicking Back button on Prospecting Page', async ({
  page,
  pplsiService,
}) => {
  await test.step('Click on Back Button on Business Solutions Orientation Prospecting Page', async () => {
    await pplsiService.businessSolutionsOrientationPage.progressBarComponent.locBackButton.click();
  });
  await test.step('Assert to the Business Solutions Orientation Compensation Page', async () => {
    expect(page).toHaveURL(new RegExp('/business-solutions-orientation/compensation'));
  });
});

test('User can play the Prospecting video on the Business Solutions Orientation Prospecting Page ', async ({ pplsiService }) => {
  await test.step('Click on Prospecting Video play button', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerPlayButton.click();
  });
  await test.step('Assert the Video has played', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerTimeCode1Second.waitFor();
    await pplsiService.businessSolutionsOrientationPage.videoComponent.assertVideoPlayerHasPlayed();
  });
});

test('User can pause the Prospecting Overview video on the Business Solutions Orientation Overview Page ', async ({ pplsiService }) => {
  await test.step('Click on Prospecting Overview Video play button', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerPlayButton.click();
  });
  await test.step('Click on Prospecting Overview Video pause button', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerPauseButton.click();
  });
  await test.step('Assert the play button is displayed again', async () => {
    expect(pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerPlayButton).toBeVisible;
  });
});

test('User can skip ahead and back in the Prospecting Overview video on the Business Solutions Orientation Prospecting Page', async ({
  pplsiService,
}) => {
  await test.step('Click on middle of the Prospecting Overview Video slider button', async () => {
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

test('User can mute/unmute the Prospecting Overview video on the Business Solutions Orientation Page', async ({ pplsiService }) => {
  await test.step('Click on Prospecting Overview Video volume button', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerVolumeButton.click();
  });
  await test.step('Assert the volume is set to 0', async () => {
    await expect(pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerVolumeSlider).toHaveAttribute('aria-valuenow', '0');
  });
  await test.step('Click on Prospecting Overview Video volume button', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerVolumeButton.click();
  });
  await test.step('Assert the volume is set to 1', async () => {
    await expect(pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerVolumeSlider).toHaveAttribute('aria-valuenow', '1');
  });
});

test('User can turn Closed Captioning on/off for the Prospecting Overview video on the Business Solutions Orientation Overview Page', async ({
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

test('User can change the Quality Setting for the Prospecting Overview video on the Business Solutions Orientation Overview Page', async ({
  pplsiService,
}) => {
  await test.step('Set the Quality to 1080p', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.selectQualitySetting('1080p');
  });
  await test.step('Assert Quality is set to 1080p', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.assertQualitySetting('1080p');
  });
});

test('User can change the Speed Setting for the Prospecting Overview video on the Business Solutions Orientation Page', async ({
  page,
  pplsiService,
}) => {
  await test.step(`Navigate to PPLSI.com Business Solutions Orientation Page`, async () => {
    await page.goto(`${UrlsUtils.pplsiUrls.home.url}/business-solutions-orientation/`);
  });
  await test.step('Set the Speed to 1.25x', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.selectSpeedSetting('1.25x');
  });
  await test.step('Assert Speed is set to 1.25x', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.assertSpeedSetting('1.25x');
  });
});
