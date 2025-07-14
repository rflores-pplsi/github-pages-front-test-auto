import { test, expect } from '@playwright/test';

// Covers LegalShield homepage: header nav, main CTAs, lead gen form, and footer links

test.describe('LegalShield Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.legalshield.com');
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
    // Use exact heading name to avoid multiple matches
    await expect(page.getByRole('heading', { name: 'Legal Plans Overview' })).toBeVisible();
    await page.goBack();
  });

  test('Main CTA buttons navigate to correct pages @cta', async ({ page }) => {
    // Target the two visible "See details" CTAs above the footer
    const seeDetailsButtons = page.locator('a:has-text("See details")');
    // First is Personal, second is Business
    const personalBtn = seeDetailsButtons.nth(0);
    const businessBtn = seeDetailsButtons.nth(1);
    await expect(personalBtn).toBeVisible();
    await expect(businessBtn).toBeVisible();
    await personalBtn.click();
    await expect(page).toHaveURL(/.*personal-plan\/coverage-and-pricing/);
    await expect(page.getByRole('heading', { name: /personal/i })).toBeVisible();
    await page.goBack();
    await businessBtn.click();
    await expect(page).toHaveURL(/.*business-plan\/coverage-pricing/);
    // Use exact heading name to avoid multiple matches
    await expect(page.getByRole('heading', { name: 'Legal Plans for Small Business - Coverage & Pricing' })).toBeVisible();
    await page.goBack();
  });

  test('Lead generation form can be submitted', async ({ page }) => {
    const firstName = page.getByRole('textbox', { name: 'First Name' });
    const email = page.getByRole('textbox', { name: 'Email Address' });
    const submit = page.getByRole('button', { name: 'Submit' });
    await expect(firstName).toBeVisible();
    await expect(email).toBeVisible();
    await firstName.fill('TestUser');
    await email.fill('testuser@example.com');
    await submit.click();
    // Expect a success message or form reset (site-specific, adjust as needed)
    // await expect(page.getByText('Thank you')).toBeVisible();
  });

  test('Lead generation form shows error on missing required fields', async ({ page }) => {
    const submit = page.getByRole('button', { name: 'Submit' });
    await submit.click();
    // Expect an error message or validation (site-specific, adjust as needed)
    // await expect(page.getByText(/required/i)).toBeVisible();
  });

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

  // Optionally, add a test for a carousel or dynamic section if present
  // test('Homepage carousel is visible and can be navigated', async ({ page }) => {
  //   const carouselNext = page.getByRole('button', { name: /next/i });
  //   await expect(carouselNext).toBeVisible();
  //   await carouselNext.click();
  //   // Add assertion for carousel content change
  // });
});
