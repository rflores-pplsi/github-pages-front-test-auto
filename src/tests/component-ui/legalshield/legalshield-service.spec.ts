import { test, expect } from '@playwright/test';
import { LegalshieldService } from '../../../page-objects/marketing-sites/legalshield/legalshield-service';
import { legalshieldServiceData } from './legalshield-service.data';
let legalshieldService: LegalshieldService;

for (const pageUnderTest of legalshieldServiceData.filter((legalshieldPage) => legalshieldPage.disabled == false)) {
  // test.beforeEach(async ({ context, page }) => {
  //   //TODO: understand why this was not working with the test cases nested under if blocks, extract the goto to the beforeEach if possible
  //   // await page.goto(pageUnderTest.url);
  // });
  test.slow();
  test.describe('Hero Section', async () => {
    test.beforeEach(async ({ context, page }) => {
      legalshieldService = new LegalshieldService(page, context);
      await test.step(`Navigate to the ${pageUnderTest.pageName} page`, async () => {
        await page.goto(pageUnderTest.url);
      });
    });

    if (pageUnderTest.heroSection.included == true) {
      test(`${pageUnderTest.pageName} page: Verify Hero Section`, async ({ page }) => {
        console.log(`Test Case: ${pageUnderTest.pageName} page: Verify Hero Section`);
        if (pageUnderTest.heroSection.expectedHeader != '') {
          await test.step(`Verify Hero Header`, async () => {
            await expect(legalshieldService.heroSectionComponent.header).toContainText(pageUnderTest.heroSection.expectedHeader);
          });
        }
        if (pageUnderTest.heroSection.expectedDescription != '') {
          await test.step(`Verify Hero Description`, async () => {
            await expect(legalshieldService.heroSectionComponent.description).toContainText(pageUnderTest.heroSection.expectedDescription);
          });
        }
        if (pageUnderTest.heroSection.button.included) {
          await test.step(`Legalshield Hero Section Click On Button`, async () => {
            await legalshieldService.heroSectionComponent.locCallToActionButton.click();
            await expect(page).toHaveURL(new RegExp(`${pageUnderTest.heroSection.button.expectedUrl}`));
            await expect(page).toHaveTitle(pageUnderTest.heroSection.button.expectedTitle);
          });
        }
      });
    }
  });

  test.describe('Grid Section', async () => {
    test.beforeEach(async ({ context, page }) => {
      legalshieldService = new LegalshieldService(page, context);
      await test.step(`Navigate to the ${pageUnderTest.pageName} page`, async () => {
        await page.goto(pageUnderTest.url);
      });
    });

    if (pageUnderTest.gridSection.included == true) {
      test(`${pageUnderTest.pageName} page: Verify Grid Section`, async () => {
        console.log(`Test Case: ${pageUnderTest.pageName} page: Verify Grid Section} page`);
        await test.step(`Verify headers of expected Cards`, async () => {
          expect(await legalshieldService.gridSectionComponent.locGridCardTitle.allInnerTexts()).toStrictEqual(
            pageUnderTest.gridSection.expectedHeaders
          );
          await test.step(`Click on all links and Verify the URL and Title`, async () => {
            const locator = legalshieldService.gridSectionComponent.locGridCardLink;
            await legalshieldService.clickAllLinksAndVerifyExpectedUrlAndTitle(locator, pageUnderTest.gridSection.links.expectedUrlsAndTitles);
          });
        });
      });
    }
  });

  test.describe('Pricing Section', async () => {
    test.beforeEach(async ({ context, page }) => {
      legalshieldService = new LegalshieldService(page, context);
      await test.step(`Navigate to the ${pageUnderTest.pageName} page`, async () => {
        await page.goto(pageUnderTest.url);
      });
    });
    if (pageUnderTest.pricingSection.included == true) {
      test(`${pageUnderTest.pageName} page: Verify Pricing Section`, async () => {
        console.log(`Test Case: ${pageUnderTest.pageName} page: Verify Pricing Section`);
        await test.step(`Verify headers of expected Cards`, async () => {
          expect(await legalshieldService.pricingSectionComponent.locCardHeader.allInnerTexts()).toStrictEqual(
            pageUnderTest.pricingSection.expectedHeaders
          );
        });
        if (pageUnderTest.pricingSection.links.addToCart == true) {
          await test.step(`Click on all links and Verify the cart is updated`, async () => {
            const locator = legalshieldService.pricingSectionComponent.locPricingSectionCardButtonLink;
            await legalshieldService.clickAllLinksAndVerifyThCartIsUpdated(locator, pageUnderTest.pricingSection.links.expectedPlanNameCostInCart);
          });
        } else {
          await test.step(`Click on all links and Verify the URL and Title`, async () => {
            const locator = legalshieldService.pricingSectionComponent.locPricingSectionCardButtonLink;
            await legalshieldService.clickAllLinksAndVerifyExpectedUrlAndTitle(locator, pageUnderTest.pricingSection.links.expectedUrlsAndTitles);
          });
        }
      });
    }
  });

  test.describe('Nav List Section', async () => {
    test.beforeEach(async ({ context, page }) => {
      legalshieldService = new LegalshieldService(page, context);
      await test.step(`Navigate to the ${pageUnderTest.pageName} page`, async () => {
        await page.goto(pageUnderTest.url);
      });
    });
    if (pageUnderTest.navListSection.included == true) {
      test(`${pageUnderTest.pageName} page: Verify Nav List Section`, async () => {
        console.log(`Test Case: ${pageUnderTest.pageName} page: Verify Nav List Section`);
        await test.step(`Verify headers of expected Cards`, async () => {
          expect(await legalshieldService.navListSectionComponent.locListsHeader.allInnerTexts()).toStrictEqual(
            pageUnderTest.navListSection.expectedHeaders
          );
        });
        await test.step(`Click on all links and Verify the URL and Title`, async () => {
          const locator = legalshieldService.navListSectionComponent.locListsLinks;
          await legalshieldService.clickAllLinksAndVerifyExpectedUrlAndTitle(locator, pageUnderTest.navListSection.links.expectedUrlsAndTitles);
        });
      });
    }
  });

  test.describe(`Features Grid Section`, async () => {
    test.beforeEach(async ({ context, page }) => {
      legalshieldService = new LegalshieldService(page, context);
      await test.step(`Navigate to the ${pageUnderTest.pageName} page`, async () => {
        await page.goto(pageUnderTest.url);
      });
    });
    if (pageUnderTest.featuresGridSection.included == true) {
      test(`${pageUnderTest.pageName} page: Verify Features Grid Section`, async () => {
        console.log(`Test Case: ${pageUnderTest.pageName} page: Verify Features Grid Section page`);
        await test.step(`Verify headers of expected Cards`, async () => {
          if (pageUnderTest.featuresGridSection.expectedHeaders.length > 0) {
            expect(await legalshieldService.featuresGridSectionComponent.locFeatureGridCardHeadline.allInnerTexts()).toStrictEqual(
              pageUnderTest.featuresGridSection.expectedHeaders
            );
          }
          await test.step(`Click on all links and Verify the URL and Title`, async () => {
            const locator = legalshieldService.featuresGridSectionComponent.locFeatureGridCardLink;
            await legalshieldService.clickAllLinksAndVerifyExpectedUrlAndTitle(
              locator,
              pageUnderTest.featuresGridSection.links.expectedUrlsAndTitles
            );
          });
        });
      });
    }
  });
  test.describe(`Call To Action Section`, async () => {
    test.beforeEach(async ({ context, page }) => {
      legalshieldService = new LegalshieldService(page, context);
      await test.step(`Navigate to the ${pageUnderTest.pageName} page`, async () => {
        await page.goto(pageUnderTest.url);
      });
    });
    if (pageUnderTest.callToActionSection.included == true) {
      test(`${pageUnderTest.pageName} page: Verify Call To Action Section`, async ({ page }) => {
        console.log(`Test Case: ${pageUnderTest.pageName} page: Verify Call To Action Section`);
        if (pageUnderTest.callToActionSection.expectedHeader != '') {
          await test.step(`Verify Call To Action Header`, async () => {
            await expect(legalshieldService.callToActionSectionComponent.header).toContainText(pageUnderTest.callToActionSection.expectedHeader);
          });
        }
        if (pageUnderTest.callToActionSection.expectedDescription != '') {
          await test.step(`Verify Call To Action Description`, async () => {
            await expect(legalshieldService.callToActionSectionComponent.description).toContainText(
              pageUnderTest.callToActionSection.expectedDescription
            );
          });
        }
        if (pageUnderTest.callToActionSection.button.included) {
          await test.step(`Legalshield Call To Action Section Click On Button`, async () => {
            await legalshieldService.callToActionSectionComponent.locCallToActionButton.click();
            await expect(page).toHaveURL(new RegExp(`${pageUnderTest.callToActionSection.button.expectedUrl}`));
            await expect(page).toHaveTitle(pageUnderTest.callToActionSection.button.expectedTitle);
          });
        }
      });
    }
  });
}
