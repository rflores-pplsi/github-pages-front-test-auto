import { expect } from '@playwright/test';
import UrlsUtils from '../../../../utils/urls.utils';
import { test } from '../../../../fixtures/frontend-ui.fixture';

test.describe('Legalshield Associate - Movie Modal: ', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
  });

  test.fixme(`Clicking play on movie modal plays movie @legalshieldassociatesplus-component`, async ({ legalshieldAssociateService }) => {
    console.log(`Test Case: Clicking play on movie modal plays movie`);
    // video player broken on lsaplus at the moment
    await test.step(`Click the Play button to open modal`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.locPlayButton.nth(1).click();
    });
    await test.step(`Wait for movie modal to display`, async () => {
      await legalshieldAssociateService.plusMovieModalComponent.locMovieModalContainer.waitFor({ state: 'visible' });
    });
    await test.step(`Click the video player play button to play video`, async () => {
      await legalshieldAssociateService.plusMovieModalComponent.locMovieModalPlayButton.click();
    });
    await test.step(`Verify movie has played some`, async () => {
      await legalshieldAssociateService.plusMovieModalComponent.locVideoPlayerTimeCode1Second.waitFor();
      await legalshieldAssociateService.plusMovieModalComponent.assertVideoPlayerHasPlayed();
    });
  });

  test(`Click close on movie modal closes modal @legalshieldassociatesplus-component`, async ({ legalshieldAssociateService }) => {
    console.log(`Test Case: Click play button to open movie modal`);
    await test.step(`Click the Play button`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.locPlayButton.nth(1).click();
    });
    await test.step(`Wait for movie modal to display`, async () => {
      await legalshieldAssociateService.plusMovieModalComponent.locMovieModalContainer.waitFor({ state: 'visible' });
    });
    await test.step(`Click movie modal close button`, async () => {
      await legalshieldAssociateService.plusMovieModalComponent.locMovieModalCloseButton.click();
    });
    await test.step(`Verify the movie modal disappears`, async () => {
      await legalshieldAssociateService.plusMovieModalComponent.locMovieModalCloseButton.waitFor({ state: 'hidden' });
      expect(legalshieldAssociateService.plusMovieModalComponent.locMovieModalCloseButton).toBeHidden();
    });
  });
});
