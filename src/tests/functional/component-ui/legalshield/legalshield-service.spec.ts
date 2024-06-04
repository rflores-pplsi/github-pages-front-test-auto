import { legalshieldServiceData } from './legalshield-service.data';
import { legalshieldServiceGbbData } from './legalshield-service-gbb.data';
import { expect, test } from '../../../../fixtures/frontend-ui.fixture';
import UrlsUtils from '../../../../utils/urls.utils';

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

  test(`${pageUnderTest.pageName} page: Click GBB links that add to cart, verify cart updated @ComponentLegalShield @prod-daily-health @gbb`, async ({
    legalshieldService,
    page,
  }) => {
    test.skip(pageUnderTest.expectCtas === false, 'No add to cart links expected');
    await legalshieldService.navigateToUrl(pageUnderTest.url);
    // Set region cookie to GBB activated region
    await legalshieldService.setCookiesForGBB('pplsi-region', 'GA');
    console.log(`Test Case: ${pageUnderTest.pageName} page: Click GBB links that add to cart, verify cart updated`);
    test.setTimeout(200000);
    await test.step(`Click All add to cart Links and verify cart is updated`, async () => {
      await legalshieldService.clickAllGBBAddToCartLinksAndVerifyCartIsUpdated(legalshieldService.locLinksThatAddToCart);
    });
  });

  test(`${pageUnderTest.pageName} page: Click links that add to cart, verify cart updated @ComponentLegalShield @prod-daily-health`, async ({
    legalshieldService,
    page,
  }) => {
    test.skip(pageUnderTest.expectCtas === false, 'No add to cart links expected');
    await legalshieldService.navigateToUrl(pageUnderTest.url);
    // Set region cookie to GBB not-activated region
    if (pageUnderTest.url.includes('gbb2=true')) {
      await legalshieldService.setCookiesForGBB('pplsi-region', 'HA');
    }
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

for (const stateUnderTest of legalshieldServiceGbbData.filter((stateUnderTest) => stateUnderTest.disabled == false)) {
  test(`Verify ${stateUnderTest.stateName} GBB displayed = ${stateUnderTest.expectedGbb} @GBBDisplay ${stateUnderTest.tag}`, async ({
    page,
    legalshieldService,
  }) => {
    test.slow();
    console.log(`Test Case: Verify ${stateUnderTest.stateName} GBB displayed = ${stateUnderTest.expectedGbb}`);
    await test.step(`Navigate to GBB page`, async () => {
      await legalshieldService.navigateToUrl(UrlsUtils.legalshieldService.baseUrl + '/personal-plan/coverage-and-pricing/?gbb2=true');
    });
    await test.step(`Update state through console`, async () => {
      await legalshieldService.setCookiesForGBB('pplsi-region', `${stateUnderTest.stateAbbreviation}`);
    });
    await test.step(`Verify GBB elements`, async () => {
      if (stateUnderTest.expectedGbb == true) {
        expect(legalshieldService.gbbPricingSectionComponent.locGbbPricingSection).toBeVisible();
      } else {
        expect(legalshieldService.gbbPricingSectionComponent.locGbbPricingSection).not.toBeVisible();
      }
    });
  });
}
