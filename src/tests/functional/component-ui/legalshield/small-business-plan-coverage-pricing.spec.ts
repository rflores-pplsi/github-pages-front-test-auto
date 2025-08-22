import { test, expect } from '@playwright/test';
import { PricingCardComponent } from '../../../../page-objects/marketing-sites/legalshield/pricing-card.component';
import { MarketingSitesCartComponent } from '../../../../page-objects/marketing-sites/marketing-sites-cart-component';
import UrlsUtils from '../../../../utils/urls.utils';

const plans = [
  { name: 'Essentials', shortcode: 'ESS', price: '$49.00', modalQuestions: true },
  { name: 'Plus', shortcode: 'PLUS', price: '$99.00', modalQuestions: true },
  { name: 'Pro', shortcode: 'PRO', price: '$169.00', modalQuestions: true }
];

test.describe('Coverage & Pricing Add to Cart for SMB @smb-pricing', () => {
  for (const plan of plans) {
    test(`Add ${plan.name} plan to cart and verify product shortcode`, async ({ page }) => {
      await page.goto(`${UrlsUtils.marketingSitesUrls.legalShieldUSUrl}/business-plan/coverage-pricing`);
      const pricingCard = new PricingCardComponent(page);
      await pricingCard.clickAddToCartButton(plan.shortcode, 'Monthly', plan.name);
      if (plan.modalQuestions) {
        // Wait for modal to appear
        const modal = page.locator('[role="dialog"], .modal, .cart-modal, [aria-modal="true"]');
        await modal.waitFor({ state: 'visible', timeout: 10000 });
        // Handle modal qualifying questions for each plan
        // Always click "No" for qualifying questions
        const noButton = page.locator('button:has-text("No")');
        while (await noButton.isVisible({ timeout: 2000 }).catch(() => false)) {
          await noButton.click();
        }
        // Wait for and click the final Add to cart button in the modal using aria-label
        const finalAddToCart = page.locator('button[aria-label="Add to cart."]');
        await finalAddToCart.waitFor({ state: 'visible', timeout: 15000 });
        await finalAddToCart.click();
      }
      const cart = new MarketingSitesCartComponent(page);
      await expect(cart.locCartContainerDiv).toBeVisible();
      // Find all cart product elements and verify at least one matches the expected shortcode
      const cartProductElements = await page.locator('.cart-container [data-product-shortcode]').elementHandles();
      const foundShortcodes = await Promise.all(cartProductElements.map(async el => await el.getAttribute('data-product-shortcode')));
      expect(foundShortcodes).toContain(plan.shortcode);
    });
  }
});
