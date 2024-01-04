import { test, expect, Page, Response } from '@playwright/test';
import UrlsUtils from '../../../../utils/urls.utils';
import { LegalshieldService } from '../../../../page-objects/marketing-sites/legalshield/legalshield-service';
import { headerTwoLinksData, headerThreeLinksData } from './headerLinks.data';

let legalshieldService: LegalshieldService;

test.beforeEach(async ({ context, page }) => {
  test.slow();
  legalshieldService = new LegalshieldService(page, context);
  await legalshieldService.navigateToUrl(UrlsUtils.legalshieldService.baseUrl);
});

for (const testCase of headerTwoLinksData.filter((testCase) => testCase.disabled == false)) {
  test(`${testCase.testCaseName} @LegalShieldHeader`, async ({ page }) => {
    console.log(`Test Case: ${testCase.testCaseName}`);
    let response: Response;

    await test.step(`Click on the ${testCase.secondLevelLink} link`, async () => {
      [response] = await Promise.all([
        page.waitForResponse((response) => response.url().includes(testCase.expectedUrl)),
        await legalshieldService.marketingSiteHeaderComponent.clickMenuLinkWithTwoLevels(testCase.firstLevelLink, testCase.secondLevelLink),
      ]);
    });
    await test.step('Verify URL and Response Status Code', async () => {
      await test.step(`Verify Status: 200`, async () => {
        expect.soft(response.status()).toBe(200);
        await page.goBack();
      });
    });
  });
}

for (const testCase of headerThreeLinksData.filter((testCase) => testCase.disabled == false)) {
  test(`${testCase.testCaseName} @LegalShieldHeader`, async ({ page }) => {
    console.log(`Test Case: ${testCase.testCaseName}`);
    let response: Response;

    await test.step(`Click on the ${testCase.thirdLevelLink} link`, async () => {
      [response] = await Promise.all([
        page.waitForResponse((response) => response.url().includes(testCase.expectedUrl)),
        await legalshieldService.marketingSiteHeaderComponent.clickMenuLinkWithThreeLevels(
          testCase.firstLevelLink,
          testCase.secondLevelLink,
          testCase.thirdLevelLink
        ),
      ]);
    });
    await test.step('Verify URL and Response Status Code', async () => {
      await test.step(`Verify Status: 200`, async () => {
        expect.soft(response.status()).toBe(200);
        await page.goBack();
      });
    });
  });
}
