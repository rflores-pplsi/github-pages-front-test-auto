import { test } from '@playwright/test';
import DataUtils from '../../utils/Tests.Data';
import * as dotenv from 'dotenv';
import { WalsAssociateWebsitePage } from '../../page-objects-refactored/wals/wals-associate-website.page';
import { WalsAssociateGetAPlanPage } from '../../page-objects-refactored/wals/wals-associate-get-a-plan.component';
import { WalsBenefitsPage } from '../../page-objects-refactored/wals/wals-benefits.page';
import UrlsUtils from '../../utils/urls.utils';
dotenv.config();

let walsAssociateWebsitePage: WalsAssociateWebsitePage;
let walsAssociateGetAPlanPage: WalsAssociateGetAPlanPage;
let walsBenefitsPage: WalsBenefitsPage;

test.describe('Test CTA buttons', () => {
  test.beforeEach(async ({ page }) => {
    walsAssociateWebsitePage = new WalsAssociateWebsitePage(page);
    walsAssociateGetAPlanPage = new WalsAssociateGetAPlanPage(page);
    walsBenefitsPage = new WalsBenefitsPage(page);
    test.slow();
  });
  test('User can click on all members CTA button and be redirected to the right page and checkout correctly', async () => {
    test.slow;
    await test.step('Navigate to legalshield marketing site', async () => {
      await walsAssociateWebsitePage.navigateToEnglishWalsUSPage(UrlsUtils.wals.urls.urlBenefits);
    });
    await test.step('Choose a region', async () => {
      await walsAssociateWebsitePage.changeStateinformation(DataUtils.data.testingHarness.us.city.VA);
    });
    await test.step('Click on logo', async () => {
      await walsAssociateWebsitePage.clickOnLogo();
    });
    await test.step('Verify Hero Banners for All Memberships button', async () => {
      await walsBenefitsPage.assertBannerHeader('Business Builder');
      await walsBenefitsPage.assertBannerPlanPrice('$49.90/month + $49.00 one time fee');
    });
    await test.step('Verify the Get Plan button changes to Added after click and pick a plan', async () => {
      await walsAssociateGetAPlanPage.addAPlan('BLD', 0);
    });
    await test.step('Assert checkout products and prices', async () => {
      await walsAssociateGetAPlanPage.associateWebsiteCartItem('LPUS21', 'name', 'LegalShield Plan', 0);
      await walsAssociateGetAPlanPage.associateWebsiteCartItem('LPUS21', 'price', '$ 29.95', 0);
      await walsAssociateGetAPlanPage.associateWebsiteCartItem('IDSI3', 'name', 'IDShield 3 Bureau Individual', 0);
      await walsAssociateGetAPlanPage.associateWebsiteCartItem('IDSI3', 'price', '$ 19.95', 0);
      await walsAssociateGetAPlanPage.associateWebsiteCartItem('ASSOC1', 'name', 'Associate Start Up Kit', 0);
      await walsAssociateGetAPlanPage.associateWebsiteCartItem('ASSOC1', 'price', '$ 49.00', 0);
      await walsAssociateGetAPlanPage.associateWebsiteCartTotalAmt([29.95, 19.95, 49.0]);
    });
  });
  test.only('User can click on business builder CTA button and be redirected to the right page and checkout correctly', async () => {
    await test.step('Navigate to legalshield marketing site', async () => {
      await walsAssociateWebsitePage.navigateToEnglishWalsUSPage(UrlsUtils.wals.urls.urlBenefits);
    });
    await test.step('Choose a region', async () => {
      await walsAssociateWebsitePage.changeStateinformation(DataUtils.data.testingHarness.us.city.VA);
    });
    await test.step('Click on logo', async () => {
      await walsAssociateWebsitePage.clickOnLogo();
    });
    await test.step('Verify Hero Banners for Business Builder button', async () => {
      await walsAssociateWebsitePage.clickOnCTAButton('business-builder', 1);
      await walsBenefitsPage.assertBannerHeader('Business Builder');
      await walsBenefitsPage.assertBannerPlanPrice('$49.90/month + $49.00 one time fee');
    });
    await test.step('Verify the Get Plan button changes to Added after click and pick a plan', async () => {
      await walsAssociateGetAPlanPage.addAPlan('BLD', 0);
    });
    await test.step('Assert checkout products and prices', async () => {
      await walsAssociateGetAPlanPage.associateWebsiteCartItem('LPUS21', 'name', 'LegalShield Plan', 0);
      await walsAssociateGetAPlanPage.associateWebsiteCartItem('LPUS21', 'price', '$ 29.95', 0);
      await walsAssociateGetAPlanPage.associateWebsiteCartItem('IDSI3', 'name', 'IDShield 3 Bureau Individual', 0);
      await walsAssociateGetAPlanPage.associateWebsiteCartItem('IDSI3', 'price', '$ 19.95', 0);
      await walsAssociateGetAPlanPage.associateWebsiteCartItem('ASSOC1', 'name', 'Associate Start Up Kit', 0);
      await walsAssociateGetAPlanPage.associateWebsiteCartItem('ASSOC1', 'price', '$ 49.00', 0);
      await walsAssociateGetAPlanPage.associateWebsiteCartTotalAmt([29.95, 19.95, 49.0]);
    });
  });
});
