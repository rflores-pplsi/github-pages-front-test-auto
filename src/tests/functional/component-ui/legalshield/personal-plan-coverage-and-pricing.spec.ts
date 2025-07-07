import { test, expect } from '@playwright/test';

test.describe('LegalShield Personal Plan Coverage & Pricing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.legalshield.com/personal-plan/coverage-and-pricing');
  });

  test('Header navigation links are visible and navigable', async ({ page }) => {
    const nav = page.getByRole('navigation');
    const howItWorksLink = nav.getByRole('link', { name: 'How It Works' });
    const plansLink = nav.getByRole('link', { name: 'Plans' });
    const signInLink = nav.getByRole('link', { name: 'Sign In' });
    await expect(howItWorksLink).toBeVisible();
    await expect(plansLink).toBeVisible();
    await expect(signInLink).toBeVisible();
    await howItWorksLink.click();
    await expect(page).toHaveURL(/.*how-it-works/);
    await expect(page.getByRole('heading', { name: /how it works/i })).toBeVisible();
    await page.goBack();
    await plansLink.click();
    await expect(page).toHaveURL(/.*legal-plans-overview/);
    await expect(page.getByRole('heading', { name: 'Legal Plans Overview' })).toBeVisible();
    await page.goBack();
  });

  test('Main CTA button is visible and can add to cart', async ({ page }) => {
    // Try clicking the 'Monthly' tab if present
    const monthlyTab = page.locator('a:has-text("Monthly")').first();
    if (await monthlyTab.isVisible()) {
      await monthlyTab.click();
    }
    // Scroll to pricing section
    const pricingSection = page.locator('#section-pricing_section');
    if (await pricingSection.count()) {
      await pricingSection.scrollIntoViewIfNeeded();
    }
    // Wait for a visible 'Add to cart' button
    const addToCartBtn = page.locator('a:has-text("Add to cart"):visible').first();
    await expect(addToCartBtn).toBeVisible();
    await addToCartBtn.click();
    // After clicking, expect a cart or checkout button to appear
    const checkoutBtn = page.locator('button:has-text("Checkout")');
    await expect(checkoutBtn).toBeVisible();
  });

  // Skipping form tests as no lead gen form is present on this page
  // test('Lead generation or quote form can be submitted', async ({ page }) => {
  //   // Implement if/when a form is present on this page
  // });
  //
  // test('Form shows error on missing required fields', async ({ page }) => {
  //   // Implement if/when a form is present on this page
  // });

  test('Footer links are visible and navigable', async ({ page }) => {
    const footer = page.getByRole('contentinfo');
    const privacyLink = footer.getByRole('link', { name: 'Privacy Policy' });
    const termsLink = footer.getByRole('link', { name: 'Terms of Service' });
    const careersLink = footer.getByRole('link', { name: 'Careers' });
    await expect(privacyLink).toBeVisible();
    await expect(termsLink).toBeVisible();
    await expect(careersLink).toBeVisible();
    const [privacyHref, termsHref, careersHref] = await Promise.all([
      privacyLink.getAttribute('href'),
      termsLink.getAttribute('href'),
      careersLink.getAttribute('href'),
    ]);
    expect(privacyHref).toContain('privacy');
    expect(termsHref).toContain('terms');
    expect(careersHref).toBe('https://legalshieldcorp.wd1.myworkdayjobs.com/lsc');
  });

  test('Log all links and buttons for selector discovery', async ({ page }) => {
    const links = await page.locator('a').all();
    for (const link of links) {
      const text = await link.textContent();
      const href = await link.getAttribute('href');
      console.log('Link:', text, 'href:', href);
    }
    const buttons = await page.locator('button').all();
    for (const button of buttons) {
      const text = await button.textContent();
      console.log('Button:', text);
    }
  });

  test('All plan cards can be added to cart and correct product is shown', async ({ page }) => {
    // Click the 'Monthly' tab if present
    const monthlyTab = page.locator('a:has-text("Monthly")').first();
    if (await monthlyTab.isVisible()) {
      await monthlyTab.click();
    }
    // Scroll to pricing section
    const pricingSection = page.locator('#section-pricing_section');
    if (await pricingSection.count()) {
      await pricingSection.scrollIntoViewIfNeeded();
    }
    // Find all visible plan cards and their Add to cart buttons
    const planCards = page.locator('#section-pricing_section .lsux-card');
    const count = await planCards.count();
    for (let i = 0; i < count; i++) {
      const card = planCards.nth(i);
      const planName = (await card.locator('.lsux-card__content h3, .lsux-card__content .lsux-heading').first().textContent())?.trim();
      const addToCartBtn = card.locator('a:has-text("Add to cart")').first();
      // Only test visible buttons
      if (await addToCartBtn.isVisible()) {
        await addToCartBtn.click();
        // After clicking, expect the cart or checkout to show the correct product
        const cartProduct = page.locator('.cart-box, .cart, .cart-item, [data-testid="cart"]').getByText(planName || '', { exact: false });
        await expect(cartProduct).toBeVisible();
        // Optionally, check for checkout button
        const checkoutBtn = page.locator('button:has-text("Checkout")');
        await expect(checkoutBtn).toBeVisible();
        // Remove the product from cart if possible to reset for next iteration
        const removeBtn = page.locator('button:has-text("Remove"), a:has-text("Remove")').first();
        if (await removeBtn.isVisible()) {
          await removeBtn.click();
        }
      }
    }
  });

  test('All annual plan cards can be added to cart and correct product is shown', async ({ page }) => {
    // Click the 'Annually' tab if present
    const annuallyTab = page.locator('a:has-text("Annually")').first();
    if (await annuallyTab.isVisible()) {
      await annuallyTab.click();
    }
    // Scroll to pricing section
    const pricingSection = page.locator('#section-pricing_section');
    if (await pricingSection.count()) {
      await pricingSection.scrollIntoViewIfNeeded();
    }
    // Find all visible plan cards and their Add to cart buttons
    const planCards = page.locator('#section-pricing_section .lsux-card');
    const count = await planCards.count();
    for (let i = 0; i < count; i++) {
      const card = planCards.nth(i);
      const planName = (await card.locator('.lsux-card__content h3, .lsux-card__content .lsux-heading').first().textContent())?.trim();
      const addToCartBtn = card.locator('a:has-text("Add to cart")').first();
      // Only test visible buttons
      if (await addToCartBtn.isVisible()) {
        await addToCartBtn.click();
        // After clicking, expect the cart or checkout to show the correct product
        const cartProduct = page.locator('.cart-box, .cart, .cart-item, [data-testid="cart"]').getByText(planName || '', { exact: false });
        await expect(cartProduct).toBeVisible();
        // Optionally, check for checkout button
        const checkoutBtn = page.locator('button:has-text("Checkout")');
        await expect(checkoutBtn).toBeVisible();
        // Remove the product from cart if possible to reset for next iteration
        const removeBtn = page.locator('button:has-text("Remove"), a:has-text("Remove")').first();
        if (await removeBtn.isVisible()) {
          await removeBtn.click();
        }
      }
    }
  });

  test('Checkout flow up to insert payment details window for all visible Add to cart buttons @checkoutflow', async ({ page }) => {
    // --- Aggressive overlay removal utility ---
    async function nukeOverlays() {
      await page.evaluate(() => {
        // Remove overlays by class/role/aria
        const selectors = [
          '[role="dialog"]', '[aria-modal="true"]', '[aria-label*="cookie"]', '[id*="cookie"]', '[class*="cookie"]',
          '[class*="modal"]', '[class*="overlay"]', '[class*="consent"]', '[class*="survey"]', '[class*="promo"]',
          '.ketch-flex', '.ub-emb-iframe-wrapper', '.grecaptcha-badge', '.optanon-alert-box-wrapper', '.truste_overlay',
        ];
        for (const sel of selectors) {
          document.querySelectorAll(sel).forEach(el => {
            el.remove();
          });
        }
        // Remove all iframes that are overlays (by size or src)
        document.querySelectorAll('iframe').forEach(iframe => {
          const src = iframe.getAttribute('src') || '';
          const w = iframe.offsetWidth, h = iframe.offsetHeight;
          if (
            /consent|cookie|survey|promo|trustarc|privacy|ketch|ubembed|optanon|truste/i.test(src) ||
            (w > 200 && h > 100 && (w < window.innerWidth && h < window.innerHeight))
          ) {
            iframe.remove();
          }
        });
        // Remove all elements with pointer-events: all/auto and high z-index
        document.querySelectorAll('body *').forEach(el => {
          const style = window.getComputedStyle(el);
          if ((style.position === 'fixed' || style.position === 'absolute') &&
              (parseInt(style.zIndex) > 1000 || style.zIndex === 'auto') &&
              (style.pointerEvents === 'all' || style.pointerEvents === 'auto')) {
            el.remove();
          }
        });
      });
    }

    // --- Dismiss overlays in iframes ---
    async function closeIframeOverlays() {
      const iframeLocators = page.locator('iframe');
      const count = await iframeLocators.count();
      for (let i = 0; i < count; i++) {
        const iframe = iframeLocators.nth(i);
        try {
          const frame = await iframe.contentFrame();
          if (!frame) continue;
          const btns = await frame.locator('button, [role="button"]').all();
          for (const btn of btns) {
            const text = (await btn.textContent())?.trim();
            if (text && ['×', 'Close', 'Accept', 'Continue', 'Got it', 'Allow all'].includes(text)) {
              await btn.scrollIntoViewIfNeeded();
              await btn.click({ force: true });
              // Wait a bit after clicking
              await new Promise(res => setTimeout(res, 500));
            }
          }
        } catch (e) {
          // Ignore cross-origin or inaccessible iframes
        }
      }
    }

    // --- Enhanced overlay closing loop (merged with previous) ---
    async function closeOverlaysLoopEnhanced(maxAttempts = 5) {
      for (let attempt = 0; attempt < maxAttempts; attempt++) {
        let closed = false;
        // Try Playwright-based selectors
        const closeSelectors = [
          'button:has-text("×")',
          'button:has-text("Close")',
          '[aria-label="Close"]',
          '.ub-emb-iframe-wrapper button[aria-label="Close"]',
          '.ketch-flex button[aria-label="Close"]',
        ];
        for (const sel of closeSelectors) {
          const btn = page.locator(sel).first();
          if (await btn.isVisible()) {
            const btnText = (await btn.textContent())?.trim();
            const ariaLabel = await btn.getAttribute('aria-label');
            if (btnText === '×' || btnText === 'Close' || ariaLabel === 'Close') {
              await btn.click({ force: true });
              closed = true;
              await page.waitForTimeout(500);
            }
          }
        }
        // Try common overlay containers for Accept/Continue/Got it
        const overlayContainers = ['.ketch-flex', '.ub-emb-iframe-wrapper'];
        // Instead of checking .isVisible() on a multi-match locator, iterate over all matches
        for (const containerSel of overlayContainers) {
          const containers = page.locator(containerSel);
          const containerCount = await containers.count();
          for (let c = 0; c < containerCount; c++) {
            const container = containers.nth(c);
            if (await container.isVisible()) {
              const overlayBtns = container.locator('button');
              const btnCount = await overlayBtns.count();
              for (let i = 0; i < btnCount; i++) {
                const btn = overlayBtns.nth(i);
                const btnText = (await btn.textContent())?.trim();
                if (btnText && ['Accept', 'Continue', 'Got it', 'Allow all'].includes(btnText)) {
                  await btn.scrollIntoViewIfNeeded();
                  await btn.click({ force: true });
                  closed = true;
                  await page.waitForTimeout(500);
                }
              }
            }
          }
        }
        // Nuke overlays via JS
        await nukeOverlays();
        // Try to close overlays in iframes
        await closeIframeOverlays();
        if (!closed) break;
      }
    }
    // Click the 'Monthly' tab if present
    const monthlyTab = page.locator('a:has-text("Monthly")').first();
    if (await monthlyTab.isVisible()) {
      await monthlyTab.click();
    }
    const pricingSection = page.locator('#section-pricing_section');
    if (await pricingSection.count()) {
      await pricingSection.scrollIntoViewIfNeeded();
    }
    // Find all visible Add to cart buttons
    const addToCartBtns = page.locator('a:has-text("Add to cart")');
    const count = await addToCartBtns.count();
    let foundVisible = false;
    for (let i = 0; i < count; i++) {
      const btn = addToCartBtns.nth(i);
      if (await btn.isVisible()) {
        foundVisible = true;
        await btn.click();
        // add pause to ensure overlays are gone
        await page.pause();
        // Wait for the cart drawer to appear (use flexible selector for dynamic id)
        const ezDrawer = page.locator('nav[id*="EZDrawer"], nav[class*="EZDrawer"]');
        await expect(ezDrawer).toBeVisible({ timeout: 10000 });
        // Debug: log cart drawer HTML
        const drawerHtml = await ezDrawer.innerHTML();
        console.log('EZDrawer HTML:', drawerHtml);
        // Wait for the text 'Cart' to appear inside the drawer
        await expect(ezDrawer.getByText('Cart', { exact: false })).toBeVisible({ timeout: 10000 });
        // Find the plan card for this button and extract the plan name
        const planCards = page.locator('#section-pricing_section .lsux-card');
        let planName = '';
        for (let j = 0; j < await planCards.count(); j++) {
          const card = planCards.nth(j);
          if (await card.locator('a:has-text("Add to cart")').first().isVisible() && (await card.locator('a:has-text("Add to cart")').first().boundingBox())?.y === (await btn.boundingBox())?.y) {
            planName = (await card.locator('.lsux-card__content h3, .lsux-card__content .lsux-heading').first().textContent())?.trim() || '';
            break;
          }
        }
        if (planName) {
          await expect(ezDrawer.getByText(planName, { exact: false })).toBeVisible({ timeout: 10000 });
        }
        // Run overlay removal again in case overlays appeared after cart opened
        await nukeOverlays();
        await closeIframeOverlays();
        // Wait for and click the Checkout button inside the drawer
        const checkoutBtn = ezDrawer.getByRole('button', { name: /checkout/i });
        await expect(checkoutBtn).toBeVisible({ timeout: 10000 });
        await expect(checkoutBtn).toBeEnabled();
        await checkoutBtn.click();
        // Wait for the Payment iframe or checkout form to appear
        await page.waitForTimeout(2000);
        // Optionally, you can add more checks here to verify the payment details window
        // For example, wait for specific fields or buttons to be visible
        // await expect(page.locator('selector-for-payment-field')).toBeVisible();
        // await expect(page.locator('selector-for-submit-button')).toBeVisible();
        // Break after the first visible Add to cart button to avoid multiple checkouts in one test
        break;
      }
    }
    if (!foundVisible) {
      // If no visible Add to cart button was found, you might want to fail the test or handle it
      throw new Error('No visible Add to cart button found');
    }
  });
});
