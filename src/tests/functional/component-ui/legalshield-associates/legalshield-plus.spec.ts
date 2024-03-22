import UrlsUtils from '../../../../utils/urls.utils';
import { expect, test } from '../../../../fixtures/frontend-ui.fixture';
import { Page } from '@playwright/test';

test.describe('Legalshield Associate - Product Cards: ', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
  });

  test(`Plan Name Displays @legalshieldassociatesplus-component`, async ({ legalshieldService }) => {
    console.log(`Test Case: Verify Plan Name is Displayed for each card`);
    await test.step(`Verify Plan Name is Displayed for each card`, async () => {
      await legalshieldService.legalshieldPlusPage.legalshieldPlusProductCardComponent.verifyProductCardsDisplayHeading();
    });
  });

  test(`Verify Cost Displayed for each card @legalshieldassociatesplus-component`, async ({ legalshieldService }) => {
    console.log(`Test Case: Verify Cost Displayed for each card`);
    await test.step(`Verify Cost Displayed for each card`, async () => {
      await legalshieldService.legalshieldPlusPage.legalshieldPlusProductCardComponent.verifyProductCardsDisplayCosts();
    });
  });

  test(`Click play button to open movie modal @legalshieldassociatesplus-component`, async ({ legalshieldService }) => {
    console.log(`Test Case: Click play button to open movie modal`);
    await test.step(`Click the Play button`, async () => {
      await legalshieldService.legalshieldPlusPage.legalshieldPlusProductCardComponent.locPlayButton.nth(1).click();
    });
    await test.step(`Verify the movie modal displays`, async () => {
      await legalshieldService.legalshieldPlusPage.legalshieldPlusMovieModalComponent.locMovieModalContainer.waitFor({ state: 'visible' });
      expect(legalshieldService.legalshieldPlusPage.legalshieldPlusMovieModalComponent.locMovieModalContainer).toBeVisible();
    });
  });

  test(`Click close on movie modal closes modal @legalshieldassociatesplus-component`, async ({ legalshieldService }) => {
    console.log(`Test Case: Click play button to open movie modal`);
    await test.step(`Click the Play button`, async () => {
      await legalshieldService.legalshieldPlusPage.legalshieldPlusProductCardComponent.locPlayButton.nth(1).click();
    });
    await test.step(`Wait for movie modal to display`, async () => {
      await legalshieldService.legalshieldPlusPage.legalshieldPlusMovieModalComponent.locMovieModalContainer.waitFor({ state: 'visible' });
    });
    await test.step(`Click movie modal close button`, async () => {
      await legalshieldService.legalshieldPlusPage.legalshieldPlusMovieModalComponent.locMovieModalCloseButton.click();
    });
    await test.step(`Verify the movie modal disappears`, async () => {
      await legalshieldService.legalshieldPlusPage.legalshieldPlusMovieModalComponent.locMovieModalCloseButton.waitFor({ state: 'hidden' });
      expect(legalshieldService.legalshieldPlusPage.legalshieldPlusMovieModalComponent.locMovieModalCloseButton).toBeHidden();
    });
  });

  test.fixme(`Clicking play on movie modal plays movie @legalshieldassociatesplus-component`, async ({ legalshieldService }) => {
    console.log(`Test Case: Clicking play on movie modal plays movie`);
    // video player broken on lsaplus at the moment
    await test.step(`Click the Play button to open modal`, async () => {
      await legalshieldService.legalshieldPlusPage.legalshieldPlusProductCardComponent.locPlayButton.nth(1).click();
    });
    await test.step(`Wait for movie modal to display`, async () => {
      await legalshieldService.legalshieldPlusPage.legalshieldPlusMovieModalComponent.locMovieModalContainer.waitFor({ state: 'visible' });
    });
    await test.step(`Click the video player play button to play video`, async () => {
      await legalshieldService.legalshieldPlusPage.legalshieldPlusMovieModalComponent.locMovieModalPlayButton.click();
    });
    await test.step(`Verify movie has played some`, async () => {
      await legalshieldService.legalshieldPlusPage.legalshieldPlusMovieModalComponent.locVideoPlayerTimeCode1Second.waitFor();
      await legalshieldService.legalshieldPlusPage.legalshieldPlusMovieModalComponent.assertVideoPlayerHasPlayed();
    });
  });

  test(`Click more details to open Plans page in new tab @legalshieldassociatesplus-component`, async ({ legalshieldService }) => {
    console.log(`Test Case: Click more details to open Products and Benefits page in new tab`);
    let newPage: Page;
    await test.step(`Click more Details link to open plans page`, async () => {
      newPage = await legalshieldService.legalshieldPlusPage.legalshieldPlusProductCardComponent.clickMoreDetailsLink('Legal Plan Family');
    });
    await test.step(`Verify Plans page opens in new tab`, async () => {
      await expect(newPage).toHaveURL(new RegExp('plans/legal'));
    });
  });

  test(`Click Get a Plan button to add plan to cart @legalshieldassociatesplus-component`, async ({ legalshieldService }) => {
    console.log(`Test Case: Click Get a Plan button to add plan to cart`);
    await test.step(`Click get a plan button`, async () => {
      await legalshieldService.legalshieldPlusPage.legalshieldPlusProductCardComponent.clickGetAPlanButton('Legal Plan Family');
    });
    await test.step(`Verify Button Text Changes and cart appears`, async () => {
      await legalshieldService.legalshieldPlusPage.legalshieldPlusProductCardComponent.verifyAddedButtonIsVisible('Legal Plan Family');
      expect(legalshieldService.legalshieldPlusPage.legalshieldPlusPriceFooterComponent.locPriceFooterContainer).toBeVisible();
    });
  });

  test(`Click Added button to remove plan from cart @legalshieldassociatesplus-component`, async ({ legalshieldService }) => {
    console.log(`Test Case: Click Added button to remove plan from art cart`);
    await test.step(`Click get a plan button`, async () => {
      await legalshieldService.legalshieldPlusPage.legalshieldPlusProductCardComponent.clickGetAPlanButton('Legal Plan Family');
    });
    await test.step(`Click Added button`, async () => {
      await legalshieldService.legalshieldPlusPage.legalshieldPlusProductCardComponent.clickAddedButton('Legal Plan Family');
    });

    await test.step(`Verify Button Text Changes and cart disappears`, async () => {
      await legalshieldService.legalshieldPlusPage.legalshieldPlusProductCardComponent.verifyGetAPlanButtonIsVisible('Legal Plan Family');
      expect(legalshieldService.legalshieldPlusPage.legalshieldPlusPriceFooterComponent.locPriceFooterContainer).toBeHidden();
    });
  });

  test(`Click in card not on a link or button to add plan to cart @legalshieldassociatesplus-component`, async ({ legalshieldService }) => {
    console.log(`Test Case: Click Hero Image to add plan to cart`);
    await test.step(`Click Hero Image`, async () => {
      await legalshieldService.legalshieldPlusPage.legalshieldPlusProductCardComponent.clickProductCardHeroImage('Legal Plan Family');
    });
    await test.step(`Verify Button Text Changes and cart appears`, async () => {
      await legalshieldService.legalshieldPlusPage.legalshieldPlusProductCardComponent.verifyAddedButtonIsVisible('Legal Plan Family');
      expect(legalshieldService.legalshieldPlusPage.legalshieldPlusPriceFooterComponent.locPriceFooterContainer).toBeVisible();
    });
  });

  test(`Features available text displays @legalshieldassociatesplus-component`, async ({ legalshieldService }) => {
    console.log(`Test Case: Features available text displays`);
    await test.step(`VERIFY Features available text displays`, async () => {
      const featuresAvailableText =
        await legalshieldService.legalshieldPlusPage.legalshieldPlusProductCardComponent.locFeaturesAvailableContainer.allInnerTexts();
      expect(featuresAvailableText).not.toBe('');
    });
  });

  test(`Add multiple plans and verify price-container @legalshieldassociatesplus-component`, async ({ legalshieldService }) => {
    console.log(`Test Case: Add multiple plans and verify price-container`);
    await test.step(`Click get a plan button`, async () => {
      await legalshieldService.legalshieldPlusPage.legalshieldPlusProductCardComponent.clickGetAPlanButton('Legal Plan Family');
    });
    await test.step(`Click get a plan button`, async () => {
      await legalshieldService.legalshieldPlusPage.legalshieldPlusProductCardComponent.clickGetAPlanButton('IDShield Family');
    });
    await test.step(`Click get a plan button`, async () => {
      await legalshieldService.legalshieldPlusPage.legalshieldPlusProductCardComponent.clickGetAPlanButton('IDShield Individual');
    });
    await test.step(`Click get a plan button`, async () => {
      await legalshieldService.legalshieldPlusPage.legalshieldPlusProductCardComponent.clickGetAPlanButton('Small Business');
    });
    await test.step(`Verify Button Text Changes and Verify Cart info`, async () => {
      await legalshieldService.legalshieldPlusPage.legalshieldPlusProductCardComponent.verifyAddedButtonIsVisible('Legal Plan Family');
      expect(legalshieldService.legalshieldPlusPage.legalshieldPlusPriceFooterComponent.locPriceFooterContainer).toBeVisible();
      expect(legalshieldService.legalshieldPlusPage.legalshieldPlusPriceFooterComponent.locPriceFooterContainer).toContainText('4');
    });
  });
});

test.describe('Legalshield Associate - Sticky Footer: ', () => {
  test(`Click continue in sticky footer and redirected to cartbuilder @legalshieldassociatesplus-component`, async ({ page, legalshieldService }) => {
    console.log(`Test Case: Click Get a Plan button to add plan to cart`);
    await test.step(`Click get a plan button`, async () => {
      await legalshieldService.legalshieldPlusPage.legalshieldPlusProductCardComponent.clickGetAPlanButton('Legal Plan Family');
    });
    await test.step(`Click Continue Button`, async () => {
      await legalshieldService.legalshieldPlusPage.legalshieldPlusPriceFooterComponent.locPriceFooterContinueButton.click();
    });
    await test.step(`Verify Cart Service reached`, async () => {
      expect(page).toHaveURL(new RegExp('cart'));
    });
  });
});

test.describe('Legalshield Associate - Sticky Header: ', () => {
  test('Verify Phone Number in Business Card is in header @legalshieldassociatesplus-component', async ({ page, legalshieldService }) => {
    console.log('Test Case: Verify Phone Number in Business Card Info is displayed in header ');
    await test.step(`Navigate to Legal Associate Plus page`, async () => {
      await page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
    });
    await test.step('Verify Associate Phone Number is Displayed ', async () => {
      expect(legalshieldService.legalshieldPlusStickyHeaderComponent.locAssociatePhoneNumber).toBeVisible;
    });
  });

  test('Verify Associate Name Displayed matches one in URL @legalshieldassociatesplus-component', async ({ page, legalshieldService }) => {
    console.log('Test Case: Verify Associate Name Displayed matches one in URL ');
    let formattedName: string;
    await test.step(`Navigate to Legal Associate Plus page`, async () => {
      await page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
    });
    await test.step('Get Formatted Display Name', async () => {
      formattedName = await legalshieldService.legalshieldPlusStickyHeaderComponent.getFormattedDisplayName();
    });
    await test.step('Verify Associate Name Displayed matches one in URL', async () => {
      expect(page.url()).toContain(formattedName);
    });
  });

  test('Verify Associate Image in Business Card Info is in header @legalshieldassociatesplus-component', async ({ page, legalshieldService }) => {
    console.log('Test Case: Verify Associate Image in Business Card Info is displayed in header ');
    await test.step(`Navigate to Legal Associate Plus page`, async () => {
      await page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
    });
    await test.step('Verify Associate image is displayed in teh header', async () => {
      expect(legalshieldService.legalshieldPlusStickyHeaderComponent.locAssociateImage).toBeVisible;
    });
  });
});
