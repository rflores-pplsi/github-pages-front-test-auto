import { test } from '@playwright/test';
import { legalShieldPageUrls } from './legalshield-service.pageurls';
import { thresholds } from './lighthouse-thresholds';
import { playAudit } from 'playwright-lighthouse';
import lighthouseDesktopConfig from 'lighthouse/lighthouse-core/config/lr-desktop-config';

legalShieldPageUrls.forEach((pageData) => {
  test.slow();
  test.describe(`Lighthouse test for ${pageData.url}`, async () => {
    test.beforeEach(async ({ context, page }) => {
      await test.step(`Navigate to the ${pageData.pageName} page`, async () => {
        await page.goto(pageData.url);
      });
    });
    test(`Lighthouse performance test for ${pageData.pageName}`, async ({ page, context }) => {
      const newPage = await context.newPage();
      await newPage.goto(pageData.url);
      await playAudit({
        config: lighthouseDesktopConfig,
        ignoreError: true,
        opts: {
          loglevel: 'info',
        },
        page: newPage,
        port: 9222,
        reports: {
          directory: `${process.cwd()}/lighthouse`,
          formats: {
            html: true,
          },
          name: `lighthouse-${pageData.pageName}-${new Date().toISOString()}`,
        },
        thresholds: thresholds,
      });
      await page.close();
    });
  });
});
