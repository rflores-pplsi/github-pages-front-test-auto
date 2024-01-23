import { expect } from '@playwright/test';
import UrlsUtils from '../../../../utils/urls.utils';
import { test } from '../../../../fixtures/frontend-ui.fixture';

test('User can navigate to Business Solutions Orientation page by clicking the Business Opportunity link in the PPLSI footer', async ({
  page,
  pplsiService,
}) => {
  console.log(`Test Case: User can navigate to Business Solutions Orientation page by clicking the Business Opportunity link in the PPLSI footer`);
  await test.step(`Navigate to PPLSI.com`, async () => {
    await page.goto(UrlsUtils.pplsiUrls.home.url);
  });
  await test.step(`Click on the Business Opportunity link`, async () => {
    await pplsiService.pplsiPage.pplsiFooterComponent.locBusinessOpportunityLink.click();
  });
  await test.step(`Assert the Business Solutions Orientation page URL`, async () => {
    expect(page).toHaveURL(new RegExp('/business-solutions-orientation/'));
  });
});

test('User is redirected to Business Solutions Orientation Overview page after Clicking Get Started button', async ({ page, pplsiService }) => {
  await test.step(`Navigate to PPLSI.com Business Solutions Orientation Page`, async () => {
    await page.goto(`${UrlsUtils.pplsiUrls.home.url}/business-solutions-orientation/`);
  });
  await test.step('Click on the Get Started Button', async () => {
    await pplsiService.businessSolutionsOrientationPage.locGetStartedLink.click();
  });
  await test.step('Assert the Business Solutions Orientation Overview Page', async () => {
    expect(page).toHaveURL(new RegExp('/business-solutions-orientation/overview'));
  });
});

test('User is redirected to Business Solutions Orientation Overview page after Clicking Get Started link in Picture', async ({
  page,
  pplsiService,
}) => {
  await test.step(`Navigate to PPLSI.com Business Solutions Orientation Page`, async () => {
    await page.goto(`${UrlsUtils.pplsiUrls.home.url}/business-solutions-orientation/`);
  });
  await test.step('Click on the Get Started Link', async () => {
    await pplsiService.businessSolutionsOrientationPage.locGetStartedLink.click();
  });
  await test.step('Assert the Business Solutions Orientation Overview Page', async () => {
    expect(page).toHaveURL(new RegExp('/business-solutions-orientation/overview'));
  });
});

test('User can play the introduction video on the Business Solutions Orientation Page', async ({ page, pplsiService }) => {
  await test.step(`Navigate to PPLSI.com Business Solutions Orientation Page`, async () => {
    await page.goto(`${UrlsUtils.pplsiUrls.home.url}/business-solutions-orientation/`);
  });
  await test.step('Click on Introduction Video play button', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerPlayButton.click();
  });
  await test.step('Assert the Video has played', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerTimeCode1Second.waitFor();
    await pplsiService.businessSolutionsOrientationPage.videoComponent.assertVideoPlayerHasPlayed();
  });
});

test('User can pause the Introduction video on the Business Solutions Orientation Page', async ({ page, pplsiService }) => {
  await test.step(`Navigate to PPLSI.com Business Solutions Orientation Page`, async () => {
    await page.goto(`${UrlsUtils.pplsiUrls.home.url}/business-solutions-orientation/`);
  });
  await test.step('Click on Introduction Video play button', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerPlayButton.click();
  });
  await test.step('Click on Introduction Video pause button', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerPauseButton.click();
  });
  await test.step('Assert the play button is displayed again', async () => {
    expect(pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerPlayButton).toBeVisible;
  });
});

test('User can skip ahead and back in the introduction video on the Business Solutions Orientation Page', async ({ page, pplsiService }) => {
  await test.step(`Navigate to PPLSI.com Business Solutions Orientation Page`, async () => {
    await page.goto(`${UrlsUtils.pplsiUrls.home.url}/business-solutions-orientation/`);
  });
  await test.step('Click on middle of the Introduction Video slider button', async () => {
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

test('User can mute/unmute the introduction video on the Business Solutions Orientation Page', async ({ page, pplsiService }) => {
  await test.step(`Navigate to PPLSI.com Business Solutions Orientation Page`, async () => {
    await page.goto(`${UrlsUtils.pplsiUrls.home.url}/business-solutions-orientation/`);
  });
  await test.step('Click on Introduction Video volume button', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerVolumeButton.click();
  });
  await test.step('Assert the volume is set to 0', async () => {
    await expect(pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerVolumeSlider).toHaveAttribute('aria-valuenow', '0');
  });
  await test.step('Click on Introduction Video volume button', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerVolumeButton.click();
  });
  await test.step('Assert the volume is set to 1', async () => {
    await expect(pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerVolumeSlider).toHaveAttribute('aria-valuenow', '1');
  });
});

test('User can turn Closed Captioning on/off for the introduction video on the Business Solutions Orientation Page', async ({
  page,
  pplsiService,
}) => {
  await test.step(`Navigate to PPLSI.com Business Solutions Orientation Page`, async () => {
    await page.goto(`${UrlsUtils.pplsiUrls.home.url}/business-solutions-orientation/`);
  });
  await test.step('Choose the English Closed Captioning option', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.selectClosedCaptionOption('English');
  });
  await test.step('Close Closed Captioning menu', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.locVideoPlayerClosedCaptionButton.click();
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

test('User can change the Quality Setting for the introduction video on the Business Solutions Orientation Page', async ({ page, pplsiService }) => {
  await test.step(`Navigate to PPLSI.com Business Solutions Orientation Page`, async () => {
    await page.goto(`${UrlsUtils.pplsiUrls.home.url}/business-solutions-orientation/`);
  });
  await test.step('Set the Quality to 1080p', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.selectQualitySetting('1080p');
  });
  await test.step('Assert Quality is set to 1080p', async () => {
    await pplsiService.businessSolutionsOrientationPage.videoComponent.assertQualitySetting('1080p');
  });
});

test('User can change the Speed Setting for the introduction video on the Business Solutions Orientation Page', async ({ page, pplsiService }) => {
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
