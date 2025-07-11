import { test, expect } from '@playwright/test';
import UrlsUtils from '../../../../utils/urls.utils';
import RegionsUtils from '../../../../utils/regions.utils';

RegionsUtils.usStates
  .filter((region) => region.name)
  .forEach((regionUnderTestObject) => {
    // Functional test for LegalShield Advanced Plan contract PDF
    test(`Advanced plan contract PDF opens and is readable for ${regionUnderTestObject.name} @regression`, async ({ page, context }) => {
      // 1. Navigate to the coverage and pricing page
      await page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/personal-plan/coverage-and-pricing?regionChange=true`);

      test.step(`Select region ${regionUnderTestObject.abbrv} from popup selector and reload page`, async () => {
        const regionSelector = page.locator('select[name="locationModalRegion"]');
        await regionSelector.selectOption(regionUnderTestObject.abbrv);
        // click button with Update Region text
        await page.getByRole('button', { name: 'Update Region' }).click();
      });

      // 2. Dismiss privacy banner if present
      const privacyContinue = page.getByRole('button', { name: 'Continue' });
      if (await privacyContinue.isVisible()) {
        await privacyContinue.click();
      }

      // 2. Dismiss chat widget if present
      const chatWidget = page.getByRole('button', { name: /open-chat-widget/i });
      if (await chatWidget.isVisible()) {
        await chatWidget.click();
        const minimizeChat = page.getByRole('button', { name: /minimize-chat-widget/i });
        if (await minimizeChat.isVisible()) {
          await minimizeChat.click();
        }
      }

      // 3. Add Advanced product to the cart
      const addAdvanced = page.getByRole('link', { name: /Add to cart Advanced plan/i }).first();
      await addAdvanced.click();

      // 4. Locate the Advanced product in the cart drawer
      const cartDrawer = page.locator('text=/advanced legal plan/i');
      await expect(cartDrawer).toBeVisible({ timeout: 10000 });

      // 5. Click on View Contract
      const [pdfPage] = await Promise.all([context.waitForEvent('page'), page.getByRole('link', { name: /View Contract/i }).click()]);

      // 6. Ensure a readable PDF is opened in another tab
      await pdfPage.waitForTimeout(2000); // wait for navigation
      // Switch to the new tab and check for the words '404' in the content
      const pdfContent = await pdfPage.content();
      expect(pdfContent).not.toMatch(/404/i);

      // Close the PDF tab
      await pdfPage.close();
    });
  });
