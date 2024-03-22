import { expect, Response } from '@playwright/test';
import UrlsUtils from '../../../../utils/urls.utils';
import { headerTwoLinksData, headerThreeLinksData } from './plusHeaderLinks.data';
import { test } from '../../../../fixtures/frontend-ui.fixture';

test.describe('Legalshield Associate - Header Menu:', () => {
  test.fixme('Verify Click on Logo Returns User back to Home Page @legalshieldassociatesplus-component', async ({ page, legalshieldService }) => {
    console.log('Test Case: Verify Click on Logo Returns User back to Home Page ');
    await test.step(`Navigate to Legal Associate Plus page`, async () => {
      await page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
    });
    await test.step('Navigate to how it works page', async () => {
      await page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/personal-plan/how-it-works?lsaplus=true`);
    });
    await test.step('Click on Logo of Legalshield and IDshield', async () => {
      await legalshieldService.legalshieldPlusPage.legalshieldPlusHeaderComponent.locHeaderLogo.click();
    });
    await test.step('Verify user is redirected to Home Page of lsa Plus Page', async () => {
      expect(page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`));
    });
  });

  for (const testCase of headerTwoLinksData.filter((testCase) => testCase.disabled == false)) {
    test.skip(`${testCase.testCaseName} @legalshieldassociatesplus-component`, async ({ page, legalshieldService }) => {
      console.log(`Test Case: ${testCase.testCaseName}`);
      let response: Response;
      await test.step(`Navigate to lsa plus page`, async () => {
        await page.goto(`https://${testCase.associate}.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
      });
      await test.step(`Click on the ${testCase.secondLevelLink} link`, async () => {
        [response] = await Promise.all([
          page.waitForResponse((response) => response.url().includes(testCase.expectedUrl)),
          await legalshieldService.legalshieldPlusHeaderComponent.clickMenuLinkWithTwoLevels(testCase.firstLevelLink, testCase.secondLevelLink),
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
    test.skip(`${testCase.testCaseName} @legalshieldassociatesplus-component`, async ({ page, legalshieldService }) => {
      console.log(`Test Case: ${testCase.testCaseName}`);
      let response: Response;
      await test.step(`Navigate to lsa plus page`, async () => {
        await page.goto(`https://${testCase.associate}.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
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

  test('Verify Logo of Legalshield and IDshield is Displayed  @legalshieldassociatesplus-component', async ({ page, legalshieldService }) => {
    console.log('Test Case: Verify Logo of Legalshield and IDshield is Displayed ');
    await test.step(`Navigate to Legal Associate Plus page`, async () => {
      await page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
    });
    await test.step('Verify Logo of Legalshield and IDshield is Displayed in Header', async () => {
      expect(legalshieldService.legalshieldPlusPage.legalshieldPlusHeaderComponent.locHeaderLogo).toBeVisible;
    });
  });

  test('Click My Products from dropdown and go to Login Page @legalshieldassociatesplus-component', async ({ page, legalshieldService }) => {
    console.log('Test Case: Click My Products from dropdown and go to Login Page ');
    await test.step(`Navigate to Legal Associate Plus page`, async () => {
      await page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
    });
    await test.step('Click on My Products in the User Icon Dropdown Header', async () => {
      await legalshieldService.legalshieldPlusPage.legalshieldPlusHeaderComponent.locUserIconDropdown.click();
      await legalshieldService.legalshieldPlusPage.legalshieldPlusHeaderComponent.locUserMenuMyProductsLink.click();
    });
    await test.step('Verify user is redirected to Login Page', async () => {
      await expect(page).toHaveURL(new RegExp('login'));
    });
  });
});
