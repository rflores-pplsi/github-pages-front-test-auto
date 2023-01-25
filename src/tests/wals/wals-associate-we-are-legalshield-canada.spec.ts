import { test } from '@playwright/test';
import { WalsAssociateWebsitePage } from '../../page-objects-refactored/wals/wals-associate-website.page';
import UrlsUtils from '../../utils/urls.utils';
import RegionsUtils from '../../utils/regions.utils';

// define the instance of Page declaration
let walsAssociateWebsitePage: WalsAssociateWebsitePage;

test.describe('Affiliated We are LegalShield - Canada', () => {
  // Setup environment before each test
  test.beforeEach(async ({ page }) => {
    test.slow();
    walsAssociateWebsitePage = new WalsAssociateWebsitePage(page);
  });

  for (const province of RegionsUtils.caProvinces) {
    const expectedProductNames = province.expectedWalsProducts;
    test.only(`For ${province.name} 'Affiliated wals page displays correct plans for the selected region'`, async () => {
      test.slow;
      await test.step('Navigate to legalshield CA marketing site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserEnCa);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(province.name);
        console.log(province.name);
        await test.step('Verify correct plans are Displayed', async () => {
          const actualProductNames = await walsAssociateWebsitePage.captureProductArray();
          await walsAssociateWebsitePage.assertTwoArraysOfStringsHaveSameValues(actualProductNames, expectedProductNames);
        });
      });
    });
  }
});
