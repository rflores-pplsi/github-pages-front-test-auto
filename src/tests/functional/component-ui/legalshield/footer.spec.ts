import { expect, Page } from '@playwright/test';
import UrlsUtils from '../../../../utils/urls.utils';
import { test } from '../../../../fixtures/frontend-ui.fixture';

const urlsUnderTest = [
  UrlsUtils.marketingSitesUrls.legalShieldUSUrl,
  UrlsUtils.marketingSitesUrls.idShieldUSUrl,
];

for (const urlUnderTest of urlsUnderTest) {
  test(`User can click the Terms of Service Link from ${urlUnderTest} and open the Terms of Service in a new Tab @marketingFooter`, async ({
    page,
    legalshieldService,
  }) => {
    console.log(`Test Case: User can click the Terms of Service Link from ${urlUnderTest} and open the Terms of Service in a new Tab`);
    let newPage: Page;
    await test.step(`Navigate to ${urlUnderTest}`, async () => {
      await page.goto(urlUnderTest);
      await page.waitForLoadState();
    });
    await test.step('Navigate to Terms of Service page', async () => {
      newPage = await legalshieldService.marketingFooterComponent.clickTermsOfServiceLink();
    });
    await test.step(`Verify the the Terms of Service opens in a new tab`, async () => {
      await expect(newPage).toHaveURL(new RegExp('/terms-of-service'));
    });
  });
}

for (const urlUnderTest of urlsUnderTest) {
  test(`User can click the Privacy Policy Link from ${urlUnderTest} and open the Privacy Policy in a new Tab @marketingFooter`, async ({
    page,
    legalshieldService,
  }) => {
    console.log(`Test Case: User can click the Privacy Policy Link from ${urlUnderTest} and open the Privacy Policy in a new Tab`);
    let newPage: Page;
    await test.step(`Navigate to ${urlUnderTest}`, async () => {
      await page.goto(urlUnderTest);
    });
    await test.step(`Click the Privacy Policy Link`, async () => {
      newPage = await legalshieldService.marketingFooterComponent.clickPrivacyPolicyLink();
    });
    await test.step(`Verify the the Privacy Policy opens in a new tab`, async () => {      
      await expect(newPage).toHaveURL(new RegExp('/privacy-policy'));
    });
  });
}

for (const urlUnderTest of urlsUnderTest) {
  test(`User can click the SOC3 Link from ${urlUnderTest} and open the SOC3 report in a new Tab @marketingFooter`, async ({ page, legalshieldService, isHeadless }) => {
    console.log(`User can click the SOC3 Link from ${urlUnderTest} and open the SOC3 report in a new Tab`);
    await test.step(`Navigate to ${urlUnderTest}`, async () => {
      await page.goto(urlUnderTest);
    });
    await test.step(`Click and verify SOC3 link`, async () => {
      await legalshieldService.marketingFooterComponent.clickSoc3linkAndVerify(isHeadless);
    });
  });
}

for (const urlUnderTest of urlsUnderTest) {
  test(`Copyright text is displayed in for ${urlUnderTest} @marketingFooter`, async ({ page, legalshieldService }) => {
    console.log('Test Case: Copyright text is displayed in for ${urlUnderTest}');
    await test.step(`Navigate to ${urlUnderTest}`, async () => {
      await page.goto(urlUnderTest);
    });
    await test.step(`Verify the the SOC3 report opens in a new tab`, async () => {
      await expect(legalshieldService.marketingFooterComponent.locCopyrightText).toBeVisible();
    });
  });
}

// Legalshield.com
test(`User can click the Disclaimer Link from Legalshield and open the Legal Disclaimer in a new Tab @marketingFooter`, async ({ page, legalshieldService }) => {
  console.log('Test Case: User can click the Disclaimer Link from Legalshield and open the Legal Disclaimer in a new Tab');
  let newPage: Page;
  await test.step(`Navigate to legalshield`, async () => {
    await page.goto(UrlsUtils.marketingSitesUrls.legalShieldUSUrl);
  });
  await test.step(`Click the Disclaimer Link`, async () => {
    newPage = await legalshieldService.marketingFooterComponent.clickLegalLink();
  });
  await test.step(`Verify the the Legal Disclaimer opens in a new tab`, async () => {
    await expect(newPage).toHaveURL(new RegExp('/disclaimer'));
  });
});

// Idshield.com
test(`User can click the Privacy Settings Link from IDshield and open Privacy Settings overlay @marketingFooter`, async ({ page, idshieldService }) => {
  console.log('Test Case: User can click the Privacy Settings Link from IDshield and open Privacy Settings overlay');
  await test.step(`Navigate to legalshield`, async () => {
    await page.goto(UrlsUtils.marketingSitesUrls.idShieldUSUrl);
  });
  await test.step(`Click the Disclaimer Link`, async () => {
    await idshieldService.marketingFooterComponent.clickPrivacySettingsLink();
  });
  await test.step(`Verify the the Legal Disclaimer opens in a new tab`, async () => {
    await expect(idshieldService.idshieldPage.locPrivacyCenterHeading).toBeVisible();
  });
});

test(`User can click the Code of Ethics Link from Idshield and open the Code of Ethics in a new Tab @marketingFooter`, async ({ page, idshieldService }) => {
  console.log('Test Case: User can click the Code of Ethics Link from Idshield and open the Code of Ethics in a new Tab');
  let newPage: Page;
  await test.step(`Navigate to idshield`, async () => {
    await page.goto(UrlsUtils.marketingSitesUrls.idShieldUSUrl);
  });
  await test.step(`Click the Code of Ethics Link`, async () => {
    newPage = await idshieldService.marketingFooterComponent.clickCodeOfEthicsLink();
  });
  await test.step(`Verify the the Code of Ethics opens in a new tab`, async () => {
    await expect(newPage).toHaveURL(new RegExp('/code-of-ethics'));
  });
});

//TODO: Social Media links
