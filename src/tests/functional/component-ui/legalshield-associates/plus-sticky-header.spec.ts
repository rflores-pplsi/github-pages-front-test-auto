import { expect } from '@playwright/test';
import UrlsUtils from '../../../../utils/urls.utils';
import { test } from '../../../../fixtures/frontend-ui.fixture';

test.describe('Legalshield Associate - Sticky Header: ', () => {
  test('Verify Phone Number in Business Card is in header @legalshieldassociatesplus-component', async ({ page, legalshieldAssociateService }) => {
    console.log('Test Case: Verify Phone Number in Business Card Info is displayed in header ');
    await test.step(`Navigate to Legal Associate Plus page`, async () => {
      await page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
    });
    await test.step('Verify Associate Phone Number is Displayed ', async () => {
      expect(legalshieldAssociateService.plusStickyHeaderComponent.locAssociatePhoneNumber).toBeVisible;
    });
  });

  test('Verify Associate Name Displayed matches one in URL @legalshieldassociatesplus-component', async ({ page, legalshieldAssociateService }) => {
    console.log('Test Case: Verify Associate Name Displayed matches one in URL ');
    let formattedName: string;
    await test.step(`Navigate to Legal Associate Plus page`, async () => {
      await page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
    });
    await test.step('Get Formatted Display Name', async () => {
      formattedName = await legalshieldAssociateService.plusStickyHeaderComponent.getFormattedDisplayName();
    });
    await test.step('Verify Associate Name Displayed matches one in URL', async () => {
      expect(page.url()).toContain(formattedName);
    });
  });

  test('Verify Associate Image in Business Card Info is in header @legalshieldassociatesplus-component', async ({
    page,
    legalshieldAssociateService,
  }) => {
    console.log('Test Case: Verify Associate Image in Business Card Info is displayed in header ');
    await test.step(`Navigate to Legal Associate Plus page`, async () => {
      await page.goto(`https://cartb1all.${UrlsUtils.legalshieldAssociateService.baseUrlNoSubdomain}/?lsaplus=true`);
    });
    await test.step('Verify Associate image is displayed in teh header', async () => {
      expect(legalshieldAssociateService.plusStickyHeaderComponent.locAssociateImage).toBeVisible;
    });
  });
});
