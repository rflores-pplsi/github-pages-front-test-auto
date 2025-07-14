import { expect, Response } from '@playwright/test';
import UrlsUtils from '../../../../utils/urls.utils';
import { navigationLinks } from './header.data';
import { test } from '../../../../fixtures/frontend-ui.fixture';

test.beforeEach(async ({ legalshieldService }) => {
  test.step('GIVEN: a user is on a page with the legalshield header', async () => {
    await legalshieldService.navigateToUrl(UrlsUtils.legalshieldService.baseUrl);
  });
});

// test.describe('LegalShield Header Navigation Links', () => {
//   for (const testCase of navigationLinks.filter((testCase) => testCase.disabled == false)) {
//     test.only(`${testCase.testCaseName} ${testCase.tags} @navigation`, async ({ page, legalshieldService }) => {
//       console.log(`Test Case: ${testCase.testCaseName}`);
//       let response: Response;
//       await test.step(`WHEN: a user clicks on the ${testCase.parentLink} ${testCase.childLink} link`, async () => {
//         [response] = await Promise.all([
//           page.waitForResponse((response) => response.url().includes(testCase.expectedUrl)),
//           await legalshieldService.headerComponent.clickMenuLink(testCase.parentLink, testCase.childLink),
//         ]);
//       });
//       await test.step('THEN: the Response Status Code is 200', async () => {
//           expect.soft(response.status()).toBe(200);
//       });
//       await test.step(`AND: the URL contains ${testCase.expectedUrl}`, async () => {
//         expect.soft(response.url()).toContain(testCase.expectedUrl);
//       });
//     });
//   }
// });

test.describe('LegalShield Header Navigation Links', () => {
  for (const testCase of navigationLinks.filter((testCase) => testCase.disabled == false)) {
    test.only(`${testCase.testCaseName} ${testCase.tags} @navigation`, async ({ page, legalshieldService }) => {
      console.log(`Test Case: ${testCase.testCaseName}`);
      await test.step(`WHEN: a user clicks on the ${testCase.parentLink} ${testCase.childLink} link`, async () => {
          await legalshieldService.headerComponent.clickMenuLink(testCase.parentLink, testCase.childLink);
      });
      await test.step(`THEN: the URL contains ${testCase.expectedUrl}`, async () => {
        expect.soft(page.url()).toContain(testCase.expectedUrl);
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
