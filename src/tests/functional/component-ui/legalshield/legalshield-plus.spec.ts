import { expect, Response } from '@playwright/test';
import UrlsUtils from '../../../../utils/urls.utils';
import { headerTwoLinksData, headerThreeLinksData } from './plusHeaderLinks.data';
import { test } from '../../../../fixtures/frontend-ui.fixture';

for (const testCase of headerTwoLinksData.filter((testCase) => testCase.disabled == false)) {
  test(`${testCase.testCaseName} @legalshieldassociatesplus-component`, async ({ page, legalshieldService }) => {
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
  test(`${testCase.testCaseName} @legalshieldassociatesplus-component`, async ({ page, legalshieldService }) => {
    console.log(`Test Case: ${testCase.testCaseName}`);
    test.slow();
    let response: Response;
    await test.step(`Navigate to lsa plus page`, async () => {
      await legalshieldService.legalshieldPlusPage.page.goto(
        `https://${testCase.associate}.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`
      );
    });
    await test.step(`Click on the ${testCase.thirdLevelLink} link`, async () => {
      [response] = await Promise.all([
        page.waitForResponse((response) => response.url().includes(testCase.expectedUrl)),
        await legalshieldService.legalshieldPlusHeaderComponent.clickMenuLinkWithThreeLevels(
          testCase.firstLevelLink,
          testCase.secondLevelLink,
          testCase.thirdLevelLink
        ),
      ]);
    });
    await test.step('Verify URL and Response Status Code', async () => {
      await test.step(`Verify Status: 200`, async () => {
        expect.soft(response.status()).toBe(200);
      });
    });
  });
}
