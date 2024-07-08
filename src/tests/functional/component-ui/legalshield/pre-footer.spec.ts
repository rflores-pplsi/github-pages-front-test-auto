import { Locator, Page, expect, Response } from '@playwright/test';
import UrlsUtils from '../../../../utils/urls.utils';
import { test } from '../../../../fixtures/frontend-ui.fixture';

// Pre-Footer Navigation Links Testing
test.only(`LSUS Home page: Check Pre-Footer navigation links, verify status code:200 @prod-daily-health`, async ({ legalshieldService, page }) => {
  await page.goto(UrlsUtils.marketingSitesUrls.legalShieldUSUrl);
  test.skip((await legalshieldService.locPreFooterNavigation.count()) == 0, 'No Pre-Footer navigation links found');
  console.log(`Test Case: Home page: Check Pre-Footer navigation links, verify status code:200`);
  const navLinks = await legalshieldService.locPreFooterNavigation.all();
  await test.step(`Click All Pre-Footer Navigation Links and verify 200 response`, async () => {
    console.log(`Found ${navLinks.length} pre-footer navigation links`);
    let response: Response;
    for (const navLink of navLinks) {
      const navText = await navLink.textContent({ timeout: 5000 });
      const expectedURL = await navLink.getAttribute('href');
      await test.step(`Click Pre-Footer Navigation Link - ${navText}`, async () => {
        [response] = await Promise.all([page.waitForResponse((response) => response.url().includes(`${expectedURL}`)), navLink.click()]);
        await test.step(`Verify Status:200`, async () => {
          expect.soft([200, 301]).toContain(response.status());
        });
      });
    } // end for loop
  });
});
