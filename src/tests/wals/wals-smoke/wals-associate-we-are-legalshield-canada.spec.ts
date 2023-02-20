import { test } from '@playwright/test';
import { WalsAssociateWebsitePage } from '../../../page-objects/wals/wals-associate-website.page';
import UrlsUtils from '../../../utils/urls.utils';
import RegionsUtils from '../../../utils/regions.utils';

// define the instance of Page declaration
let walsAssociateWebsitePage: WalsAssociateWebsitePage;

test.describe('Affiliated We are LegalShield - Canada', () => {
  // Setup environment before each test
  test.beforeEach(async ({ page }) => {
    test.slow();
    walsAssociateWebsitePage = new WalsAssociateWebsitePage(page);
  });

  for (const province of RegionsUtils.caProvinces.filter((ste) => ste.name == 'New Brunswick')) {
    const expectedProductNames = province.expectedWalsProducts;
    test(`For ${province.name} 'Affiliated wals page displays correct plans for the selected region'`, async () => {
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

test.describe('Affiliated We are LegalShield - French Canada', () => {
  // Setup environment before each test
  test.beforeEach(async ({ page }) => {
    test.slow();
    walsAssociateWebsitePage = new WalsAssociateWebsitePage(page);
  });

  for (const province of RegionsUtils.caFrenchProvinces.filter((ste) => ste.name == 'Terre-Neuve-et-Labrador')) {
    const expectedProductNames = province.expectedWalsProducts;
    test(`For ${province.name} 'Affiliated wals page displays correct plans for the selected French region'`, async () => {
      test.slow;
      await test.step('Navigate to legalshield CA French marketing site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
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

test.describe('Affiliated Ladies of Justice - Canada', () => {
  // Setup environment before each test
  test.beforeEach(async ({ page }) => {
    test.slow();
    walsAssociateWebsitePage = new WalsAssociateWebsitePage(page);
  });

  for (const province of RegionsUtils.caProvinces.filter((ste) => ste.name == 'Nova Scotia')) {
    const expectedProductNames = province.expectedWalsProducts;
    test(`For ${province.name} 'Affiliated loj page displays correct plans for the selected region'`, async () => {
      test.slow;
      await test.step('Navigate to LOJ CA English marketing site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserLadiesCa);
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

test.describe('Affiliated Ladies of Justice - French Canada', () => {
  // Setup environment before each test
  test.beforeEach(async ({ page }) => {
    test.slow();
    walsAssociateWebsitePage = new WalsAssociateWebsitePage(page);
  });

  for (const province of RegionsUtils.caFrenchProvinces.filter((ste) => ste.name == 'Nunavut')) {
    const expectedProductNames = province.expectedWalsProducts;
    test(`For ${province.name} 'Affiliated loj page displays correct plans for the selected French region'`, async () => {
      test.slow;
      await test.step('Navigate to LOJ CA French marketing site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserDamesDeJusticeCa);
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
