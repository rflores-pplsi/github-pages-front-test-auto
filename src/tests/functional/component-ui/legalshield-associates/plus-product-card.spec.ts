import { Page, expect } from '@playwright/test';
import UrlsUtils from '../../../../utils/urls.utils';
import { test } from '../../../../fixtures/frontend-ui.fixture';

test.describe('Legalshield Associate - Product Cards: ', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
  });

  test(`Plan Name Displays @legalshieldassociatesplus-component`, async ({ legalshieldAssociateService }) => {
    console.log(`Test Case: Verify Plan Name is Displayed for each card`);
    await test.step(`Verify Plan Name is Displayed for each card`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.verifyProductCardsDisplayHeading();
    });
  });

  test(`Verify Cost Displayed for each card @legalshieldassociatesplus-component`, async ({ legalshieldAssociateService }) => {
    console.log(`Test Case: Verify Cost Displayed for each card`);
    await test.step(`Verify Cost Displayed for each card`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.verifyProductCardsDisplayCosts();
    });
  });

  test(`Click play button to open movie modal @legalshieldassociatesplus-component`, async ({ legalshieldAssociateService }) => {
    console.log(`Test Case: Click play button to open movie modal`);
    await test.step(`Click the Play button`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.locPlayButton.nth(1).click();
    });
    await test.step(`Verify the movie modal displays`, async () => {
      await legalshieldAssociateService.plusMovieModalComponent.locMovieModalContainer.waitFor({ state: 'visible' });
      expect(legalshieldAssociateService.plusMovieModalComponent.locMovieModalContainer).toBeVisible();
    });
  });

  test(`Click more details to open Plans page in new tab @legalshieldassociatesplus-component`, async ({ legalshieldAssociateService }) => {
    console.log(`Test Case: Click more details to open Products and Benefits page in new tab`);
    let newPage: Page;
    await test.step(`Click more Details link to open plans page`, async () => {
      newPage = await legalshieldAssociateService.plusProductCardComponent.clickMoreDetailsLink('Legal Plan Family');
    });
    await test.step(`Verify Plans page opens in new tab`, async () => {
      await expect(newPage).toHaveURL(new RegExp('plans/legal'));
    });
  });

  test(`Click Get a Plan button to add plan to cart @legalshieldassociatesplus-component`, async ({ legalshieldAssociateService }) => {
    console.log(`Test Case: Click Get a Plan button to add plan to cart`);
    await test.step(`Click get a plan button`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.clickGetAPlanButton('Legal Plan Family');
    });
    await test.step(`Verify Button Text Changes and cart appears`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.verifyAddedButtonIsVisible('Legal Plan Family');
      expect(legalshieldAssociateService.plusCartFooterComponent.locCartFooterContainer).toBeVisible();
    });
  });

  test(`Click Added button to remove plan from cart @legalshieldassociatesplus-component`, async ({ legalshieldAssociateService }) => {
    console.log(`Test Case: Click Added button to remove plan from art cart`);
    await test.step(`Click get a plan button`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.clickGetAPlanButton('Legal Plan Family');
    });
    await test.step(`Click Added button`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.clickAddedButton('Legal Plan Family');
    });

    await test.step(`Verify Button Text Changes and cart disappears`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.verifyGetAPlanButtonIsVisible('Legal Plan Family');
      expect(legalshieldAssociateService.plusCartFooterComponent.locCartFooterContainer).toBeHidden();
    });
  });

  test(`Click in card not on a link or button to add plan to cart @legalshieldassociatesplus-component`, async ({ legalshieldAssociateService }) => {
    console.log(`Test Case: Click Hero Image to add plan to cart`);
    await test.step(`Click Hero Image`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.clickProductCardHeroImage('Legal Plan Family');
    });
    await test.step(`Verify Button Text Changes and cart appears`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.verifyAddedButtonIsVisible('Legal Plan Family');
      expect(legalshieldAssociateService.plusCartFooterComponent.locCartFooterContainer).toBeVisible();
    });
  });

  test(`Features available text displays @legalshieldassociatesplus-component`, async ({ legalshieldAssociateService }) => {
    console.log(`Test Case: Features available text displays`);
    await test.step(`VERIFY Features available text displays`, async () => {
      const featuresAvailableText = await legalshieldAssociateService.plusProductCardComponent.locFeaturesAvailableContainer.allInnerTexts();
      expect(featuresAvailableText).not.toBe('');
    });
  });

  test(`Add multiple plans and verify price-container @legalshieldassociatesplus-component`, async ({ legalshieldAssociateService }) => {
    console.log(`Test Case: Add multiple plans and verify price-container`);
    await test.step(`Click get a plan button`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.clickGetAPlanButton('Legal Plan Family');
    });
    await test.step(`Click get a plan button`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.clickGetAPlanButton('IDShield Family');
    });
    await test.step(`Click get a plan button`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.clickGetAPlanButton('IDShield Individual');
    });
    await test.step(`Click get a plan button`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.clickGetAPlanButton('Small Business');
    });
    await test.step(`Verify Button Text Changes and Verify Cart info`, async () => {
      await legalshieldAssociateService.plusProductCardComponent.verifyAddedButtonIsVisible('Legal Plan Family');
      expect(legalshieldAssociateService.plusCartFooterComponent.locCartFooterContainer).toBeVisible();
      expect(legalshieldAssociateService.plusCartFooterComponent.locCartFooterContainer).toContainText('4');
    });
  });
});
