import { expect } from '@playwright/test';
import UrlsUtils from '../../../../utils/urls.utils';
import { navigationLinks } from './header.data';
import { test } from '../../../../fixtures/frontend-ui.fixture';

test.beforeEach(async ({ legalshieldService }) => {
  await test.step('GIVEN: a user is on a page with the legalshield header', async () => {
    await legalshieldService.navigateToUrl(UrlsUtils.legalshieldService.baseUrl);
    await legalshieldService.blockKetchConsentBannerFromDisplaying();
    await legalshieldService.legalshieldPage.page.setViewportSize({ width: 1920, height: 1080 });
  });
});

test.describe('LegalShield Header Navigation Links', () => {
  for (const testCase of navigationLinks.filter((testCase) => testCase.disabled == false)) {
    test(`${testCase.testCaseName} ${testCase.tags} @lsus-header @legalshield-header`, async ({ page, legalshieldService }) => {
      console.log(`Test Case: ${testCase.testCaseName}`);
      await test.step(`WHEN: a user clicks on the ${testCase.parentLink} ${testCase.href} link`, async () => {
          await legalshieldService.headerComponent.clickMenuLink(testCase.parentLink, testCase.href);
      });
      await test.step(`THEN: the URL contains ${testCase.href}`, async () => {
        expect.soft(page.url()).toContain(testCase.href);
      });
      await test.step('AND: the header is visible', async () => {
        legalshieldService.headerComponent.assertHeaderIsVisible();
      });
      await test.step('AND: the title does not contain 404', async () => {
        expect.soft(page.title).not.toContain('404');
      });
    });
  }
});
