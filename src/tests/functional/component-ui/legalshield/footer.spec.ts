import { expect, Page } from '@playwright/test';
import UrlsUtils from '../../../../utils/urls.utils';
import { test } from '../../../../fixtures/frontend-ui.fixture';

test.describe(`LegalShield Footer Links`, () => {
  test.beforeEach(async ({ page, legalshieldService }) => {
    await test.step('GIVEN: a user is on a page with the legalshield footer', async () => {
      await page.goto(UrlsUtils.marketingSitesUrls.legalShieldUSUrl);
      await legalshieldService.blockKetchConsentBannerFromDisplaying();
    });
  });

  test(`Customer can see the copyright text in the footer for @regression @legalshield-footer`, async ({ page, legalshieldService }) => {
    console.log(`Test Case: Customer can see the copyright text in the footer`);
    await test.step(`THEN: the copyright text is visible`, async () => {
      await expect(legalshieldService.marketingFooterComponent.locCopyrightText).toBeVisible();
    });
  });
  
  test(`Customer can use the footer to open the Privacy Policy page in a new Tab @regression @legalshield-footer`, async ({
    legalshieldService,
  }) => {
    console.log(`Test Case: Customer can use the footer to open the Privacy Policy page in a new Tab}`);
    let newPage: Page;
    await test.step(`When: a user clicks on the Privacy Policy Link`, async () => {
      newPage = await legalshieldService.marketingFooterComponent.clickPrivacyPolicyLink();
    });
    await test.step(`Then: the Privacy Policy opens in a new tab`, async () => {      
      await expect(newPage).toHaveURL(new RegExp('/privacy-policy'));
    });
    await test.step('AND: the header is visible', async () => {
      legalshieldService.headerComponent.assertHeaderIsVisible();
    });
    await test.step('AND: the title does not contain 404', async () => {
      expect.soft(newPage.title).not.toContain('404');
    });
  });

  test(`Customer can use the footer to open the Privacy Settings overlay in a new Tab @regression @legalshield-footer`, async ({
    legalshieldService,
  }) => {
    console.log(`Test Case: Customer can use the footer to open the Privacy Settings overlay in a new Tab`);
    await test.step(`When: a user clicks on the Privacy Settings Link`, async () => {
      await legalshieldService.marketingFooterComponent.clickPrivacySettingsLink();
    });
    await test.step(`Verify the Privacy Settings overlay is visible`, async () => {
      await legalshieldService.legalshieldPage.assertPrivacySettingsHeaderIsVisible();
    });
  });

  test(`Customer can use the footer to open the Terms of Service page in a new Tab @regression @legalshield-footer`, async ({
    legalshieldService,
  }) => {
    console.log(`Test Case: Customer can use the footer to open the Terms of Service page in a new Tab`);
    let newPage: Page;
    await test.step('When: a user clicks on the Terms of Service link', async () => {
      newPage = await legalshieldService.marketingFooterComponent.clickTermsOfServiceLink();
    });
    await test.step(`Then: the Terms of Service page opens in a new tab`, async () => {
      await expect(newPage).toHaveURL(new RegExp('/terms-of-service'));
    });
    await test.step('AND: the header is visible', async () => {
      legalshieldService.headerComponent.assertHeaderIsVisible();
    });
    await test.step('AND: the title does not contain 404', async () => {
      expect.soft(newPage.title).not.toContain('404');
    });
  });

  test(`Customer can use the footer to open the Legal Disclaimer page in a new Tab @lsus-footer @legalshield-footer`, async ({ page, legalshieldService }) => {
    console.log('Test Case: Customer can use the footer to open the Legal Disclaimer page in a new Tab');
    let newPage: Page;
    await test.step(`WHEN: a user clicks the Disclaimer Link`, async () => {
      newPage = await legalshieldService.marketingFooterComponent.clickLegalLink();
    });
    await test.step(`THEN: the Legal Disclaimer opens in a new tab`, async () => {
      await expect(newPage).toHaveURL(new RegExp('/disclaimer'));
    });
    await test.step('AND: the header is visible', async () => {
      legalshieldService.headerComponent.assertHeaderIsVisible();
    });
    await test.step('AND: the title does not contain 404', async () => {
      expect.soft(newPage.title).not.toContain('404');
    });
  });

  test(`Customer can use the footer to open the SOC3 report in a new Tab @regression @legalshield-footer`, async ({ legalshieldService, isHeadless }) => {
    console.log(`Test Case: Customer can use the footer to open the SOC3 report in a new Tab`);
    await test.step(`When: a user clicks the SOC3 link THEN: it opens in new tab with h1 displayed and no 404 in title`, async () => {
      await legalshieldService.marketingFooterComponent.clickSoc3linkAndVerify(isHeadless);
    });
  });

});

  // Legalshield.com
  // test(`Customer can use the footer to open the Legal Disclaimer page in a new Tab from Legalshield @regression @legalshield-footer`, async ({ page, legalshieldService }) => {
  //   console.log('Test Case: Customer can use the footer to open the Legal Disclaimer page in a new Tab from Legalshield');
  //   let newPage: Page;
  //   await test.step(`Navigate to legalshield`, async () => {
  //     await page.goto(UrlsUtils.marketingSitesUrls.legalShieldUSUrl);
  //   });
  //   await test.step(`Click the Disclaimer Link`, async () => {
  //     newPage = await legalshieldService.marketingFooterComponent.clickLegalLink();
  //   });
  //   await test.step(`Verify the Legal Disclaimer opens in a new tab`, async () => {
  //     await expect(newPage).toHaveURL(new RegExp('/disclaimer'));
  //   });
  // });

  // // Idshield.com
  // test(`Customer can use the footer to open the Privacy Settings overlay from IDshield @regression @legalshield-footer`, async ({ page, idshieldService }) => {
  //   console.log('Test Case: Customer can use the footer to open the Privacy Settings overlay from IDshield');
  //   await test.step(`Navigate to legalshield`, async () => {
  //     await page.goto(UrlsUtils.marketingSitesUrls.idShieldUSUrl);
  //   });
  //   await test.step(`Click the Privacy Settings Link`, async () => {
  //     await idshieldService.marketingFooterComponent.clickPrivacySettingsLink();
  //   });
  //   await test.step(`Verify the Privacy Settings overlay is visible`, async () => {
  //     await expect(idshieldService.idshieldPage.locPrivacyCenterHeading).toBeVisible();
  //   });
  // });

  // test(`Customer can use the footer to open the Code of Ethics page in a new Tab from Idshield @regression @legalshield-footer`, async ({ page, idshieldService }) => {
  //   console.log('Test Case: Customer can use the footer to open the Code of Ethics page in a new Tab from Idshield');
  //   let newPage: Page;
  //   await test.step(`Navigate to idshield`, async () => {
  //     await page.goto(UrlsUtils.marketingSitesUrls.idShieldUSUrl);
  //   });
  //   await test.step(`Click the Code of Ethics Link`, async () => {
  //     newPage = await idshieldService.marketingFooterComponent.clickCodeOfEthicsLink();
  //   });
  //   await test.step(`Verify the Code of Ethics opens in a new tab`, async () => {
  //     await expect(newPage).toHaveURL(new RegExp('/code-of-ethics'));
  //   });
  // });
