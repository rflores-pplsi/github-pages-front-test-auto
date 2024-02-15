import { expect, Response } from '@playwright/test';
import UrlsUtils from '../../../../utils/urls.utils';
import { headerTwoLinksData, headerThreeLinksData } from './headerLinks.data';
import { test } from '../../../../fixtures/frontend-ui.fixture';

test.beforeEach(async ({ legalshieldService }) => {
  await legalshieldService.navigateToUrl(UrlsUtils.legalshieldService.baseUrl);
});

for (const testCase of headerTwoLinksData.filter((testCase) => testCase.disabled == false)) {
  test(`${testCase.testCaseName} @ComponentLegalShieldService`, async ({ page, legalshieldService }) => {
    console.log(`Test Case: ${testCase.testCaseName}`);
    test.slow();
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
  test(`${testCase.testCaseName} @ComponentLegalShieldService`, async ({ page, legalshieldService }) => {
    console.log(`Test Case: ${testCase.testCaseName}`);
    test.slow();
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
