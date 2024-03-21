import { expect, Response } from '@playwright/test';
import UrlsUtils from '../../../../utils/urls.utils';
import { headerTwoLinksData, headerThreeLinksData } from './plusHeaderLinks.data';
import { test } from '../../../../fixtures/frontend-ui.fixture';

test.describe('Legalshield Associate Header Menu', () => {
  for (const testCase of headerTwoLinksData.filter((testCase) => testCase.disabled == false)) {
    test(`${testCase.testCaseName} @legalshieldassociatesplus-component`, async ({ page, legalshieldService }) => {
      console.log(`Test Case: ${testCase.testCaseName}`);
      test.slow();
      let response: Response;
      await test.step(`Navigate to lsa plus page`, async () => {
        await page.goto(`https://${testCase.associate}.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
      });
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

  test('Verify Phone Number in Business Card is in header @legalshieldassociatesplus-component', async ({ page, legalshieldService }) => {
    console.log('Test Case: Verify Phone Number in Business Card Info is displayed in header ');
    await test.step(`Navigate to Legal Associate Plus page`, async () => {
      await page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
    });
    await test.step('Verify Associate Phone Number is Displayed ', async () => {
      expect(legalshieldService.legalshieldPlusStickyHeaderComponent.locAssociatePhoneNumber).toBeVisible;
    });
  });

  test('Verify Associate Name Displayed matches one in URL @legalshieldassociatesplus-component', async ({ page, legalshieldService }) => {
    console.log('Test Case: Verify Associate Name Displayed matches one in URL ');
    let formattedName: string;
    await test.step(`Navigate to Legal Associate Plus page`, async () => {
      await page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
    });
    await test.step('Get Formatted Display Name', async () => {
      formattedName = await legalshieldService.legalshieldPlusStickyHeaderComponent.getFormattedDisplayName();
    });
    await test.step('Verify Associate Name Displayed matches one in URL', async () => {
      expect(page.url()).toContain(formattedName);
    });
  });

  test('Verify Associate Image in Business Card Info is in header @legalshieldassociatesplus-component', async ({ page, legalshieldService }) => {
    console.log('Test Case: Verify Associate Image in Business Card Info is displayed in header ');
    await test.step(`Navigate to Legal Associate Plus page`, async () => {
      await page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
    });
    await test.step('Verify Associate image is displayed in teh header', async () => {
      expect(legalshieldService.legalshieldPlusStickyHeaderComponent.locAssociateImage).toBeVisible;
    });
  });
});
