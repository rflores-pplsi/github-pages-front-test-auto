import { test } from '@playwright/test';
import { WalsBenefitsPage } from '../../../../archived/page-objects-oldest/wals/wals-benefits.page';

// define the instance of Page declaration
let walsBenefitsPage: WalsBenefitsPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  test.slow();
  walsBenefitsPage = new WalsBenefitsPage(page);
});

test('I can review information on the hero banners.', async () => {
  await test.step('Navigate to WALS Benefits', async () => {
    await walsBenefitsPage.navigateToWALSBenefitsUrl();
  });
  await test.step('Verify that the banner header says Business Builder and the price says $49.90/month + $99.00 one time fee', async () => {
    await walsBenefitsPage.assertBannerHeader('Business Builder');
    await walsBenefitsPage.assertBannerPlanPrice('Business Builder', '$29.95/month + $49.00 one time fee');
  });
  await test.step('Verify that the banner header says Legal Plan and the price says $29.95/month', async () => {
    await walsBenefitsPage.assertBannerHeader('Legal Plan');
    await walsBenefitsPage.assertBannerPlanPrice('Legal Plan', '$29.95/month');
  });
  await test.step('Verify that the banner header says IDShield and the price says $14.95/month', async () => {
    await walsBenefitsPage.assertBannerHeader('IDShield');
    await walsBenefitsPage.assertBannerPlanPrice('IDShield', '$14.95/month');
  });
  await test.step('Verify that the banner header says Small Business Plan and the price says $49.00/month', async () => {
    await walsBenefitsPage.assertBannerHeader('Small Business Plan');
    await walsBenefitsPage.assertBannerPlanPrice('Small Business Plan', '$49.00/month');
  });
  await test.step('Verify that the banner header says Commercial Drivers Legal Plan and the price says $32.95/month', async () => {
    await walsBenefitsPage.assertBannerHeader('Commercial Drivers Legal Plan');
    await walsBenefitsPage.assertBannerPlanPrice('Commercial Drivers Legal Plan', '$32.95/month');
  });
  await test.step('Verify that the banner header says Commercial Associate Startup and the price says $ 99.00 as a one time fee', async () => {
    await walsBenefitsPage.assertBannerHeader('Associate Startup');
    await walsBenefitsPage.assertBannerPlanPrice('Associate Startup', '$ 49.00 as a one time fee');
  });
  await test.step('Verify that the banner header says Legal & Identity and the price says $49.90/month', async () => {
    await walsBenefitsPage.assertBannerHeader('Legal & Identity');
    await walsBenefitsPage.assertBannerPlanPrice('Legal & Identity', '$49.90/month');
  });
});
