import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { createHtmlReport } from 'axe-html-reporter';
import UrlsUtils from '../utils/urls.utils';
//import { legalshieldServiceData } from './functional/component-ui/legalshield/legalshield-service.data';

test.describe('Playwright web page accessibility test', () => {
  test('run accessibility', async ({ page }) => {
    await page.goto(UrlsUtils.legalshieldService.baseUrl);
    const pageName = await page.title();
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    if (accessibilityScanResults.violations.length > 0) {
      createHtmlReport({
        options: {
          outputDir: 'axe-reports',
          reportFileName: `${pageName.toString().replace(/ /g, '-')}.html`,
        },
        results: accessibilityScanResults,
      });
    }

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
