import { legalshieldServiceData } from './legalshield-service.data';
import { test } from '../../../../fixtures/frontend-ui.fixture';

for (const pageUnderTest of legalshieldServiceData.filter((pageUnderTest) => pageUnderTest.disabled == false)) {
  test(`${pageUnderTest.pageName} page: Click links that navigate to another page, verify status code:200 @ComponentLegalShield @prod-daily-health`, async ({
    legalshieldService,
  }) => {
    await legalshieldService.navigateToUrl(pageUnderTest.url);
    test.skip((await legalshieldService.locLinksThatNavigateToNewPage.count()) == 0, 'No links that navigate to a new tab found');
    console.log(`Test Case: ${pageUnderTest.pageName} page: Click links that navigate to another page, verify status code:200`);
    test.setTimeout(200000);
    await test.step(`Click All Navigation Links and verify 200 response`, async () => {
      await legalshieldService.clickNavigationLocatorsAndVerifyResponseCodes(
        pageUnderTest.url,
        legalshieldService.locLinksThatNavigateToNewPage,
        200
      );
    });
  });

  test(`${pageUnderTest.pageName} page: Click links that navigate to a new tab, verify URL without Page Not Found @ComponentLegalShield @prod-daily-health`, async ({
    legalshieldService,
  }) => {
    await legalshieldService.navigateToUrl(pageUnderTest.url);
    test.skip((await legalshieldService.locLinksThatNavigateToNewTab.count()) == 0, 'No links that navigate to a new tab found');
    console.log(`Test Case: ${pageUnderTest.pageName} page: Click links that navigate to a new tab, verify URL without Page Not Found`);
    test.setTimeout(200000);
    await test.step(`Click All Navigation Links and verify New Tab Url without Page Not Found`, async () => {
      await legalshieldService.clickNavigationLocatorsAndVerifyNewTabURLWithoutError(legalshieldService.locLinksThatNavigateToNewTab);
    });
  });

  test(`${pageUnderTest.pageName} page: Click links that add to cart, verify cart updated @ComponentLegalShield @prod-daily-health @gbb`, async ({
    legalshieldService,
  }) => {
    await legalshieldService.navigateToUrl(pageUnderTest.url);
    // set cookies if GBB pages are enabled
    if (pageUnderTest.url.includes('gbb2=true')) {
      await legalshieldService.setCookiesForGBB();
    }

    test.skip((await legalshieldService.locLinksThatAddToCart.count()) == 0, 'No add to cart links found');
    console.log(`Test Case: ${pageUnderTest.pageName} page: Click links that add to cart, verify cart updated`);
    test.setTimeout(200000);
    await test.step(`Click All add to cart Links and verify cart is updated`, async () => {
      await legalshieldService.clickAllAddToCartLinksAndVerifyCartIsUpdated(legalshieldService.locLinksThatAddToCart);
    });
  });

  test(`${pageUnderTest.pageName} page: Click links that trigger Pop Up, verify Pop Up displayed @ComponentLegalShield @prod-daily-health`, async ({
    legalshieldService,
  }) => {
    await legalshieldService.navigateToUrl(pageUnderTest.url);
    test.skip((await legalshieldService.locLinksThatTriggerPopUps.count()) == 0, 'No links that trigger Pop Ups found');
    console.log(`Test Case: ${pageUnderTest.pageName} page: Click links that trigger Pop Up, verify Pop Up displayed`);
    test.setTimeout(200000);
    await test.step(`Click All Links that trigger Pop Ups,verify Pop Up Displayed`, async () => {
      await legalshieldService.clickAllPopUpLinksAndVerifyPopUpDisplays(legalshieldService.locLinksThatTriggerPopUps);
    });
  });

  test(`${pageUnderTest.pageName} page: Click anchor links, verify scroll @ComponentLegalShield @prod-daily-health`, async ({
    legalshieldService,
  }) => {
    await legalshieldService.navigateToUrl(pageUnderTest.url);
    test.skip((await legalshieldService.locAnchorLinks.count()) == 0, 'No anchor links found');
    console.log(`Test Case: ${pageUnderTest.pageName} page: Click anchor links, verify scroll`);
    test.setTimeout(200000);
    await test.step(`Click all anchor links, verify scroll`, async () => {
      await legalshieldService.clickAllAnchorLinksAndVerifyScroll(legalshieldService.locAnchorLinks);
    });
  });
  test(`${pageUnderTest.pageName} page: Find and submit email forms, verify successful submission @ComponentLegalShield @prod-daily-health`, async ({
    legalshieldService,
  }) => {
    await legalshieldService.navigateToUrl(pageUnderTest.url);
    test.skip((await legalshieldService.locEmailCaptureSection.count()) == 0, 'No email forms found');
    console.log(`Test Case: ${pageUnderTest.pageName} page: Find and submit email forms, verify successful submission`);
    test.setTimeout(200000);
    await test.step(`Fill out email form, then submit`, async () => {
      await legalshieldService.fillOutEmailFormAndSubmit(legalshieldService.locEmailCaptureSection);
    });
  });
}
