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
      await walsAssociateGetAPlanPage.addAPlan('BLD', 0, 'All Memberships');
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
  test('User can click on business builder CTA button and be redirected to the right page and checkout correctly', async () => {
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
      await walsAssociateGetAPlanPage.addAPlan('BLD', 0, 'Business Builder');
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
  test('User can click on LegalShield CTA button and be redirected to the right page and checkout correctly', async () => {
    await test.step('Navigate to legalshield marketing site', async () => {
      await walsAssociateWebsitePage.navigateToEnglishWalsUSPage(UrlsUtils.wals.urls.urlBenefits);
    });
    await test.step('Choose a region', async () => {
      await walsAssociateWebsitePage.changeStateinformation(DataUtils.data.testingHarness.us.city.VA);
    });
    await test.step('Click on logo', async () => {
      await walsAssociateWebsitePage.clickOnLogo();
    });
    await test.step('Verify Hero Banners for LegalShield button', async () => {
      await walsAssociateWebsitePage.clickOnCTAButton('legal', 1);
      await walsBenefitsPage.assertBannerHeader('Legal Plan');
      await walsBenefitsPage.assertBannerPlanPrice('$29.95/month');
    });
    await test.step('Verify the Get Plan button changes to Added after click and pick a plan', async () => {
      await walsAssociateGetAPlanPage.addAPlan('ASSOCSTP', 0, 'LegalShield', ['input-TD3', 'input-GSBS', 'input-RS2']);
    });
    await test.step('Assert checkout products and prices', async () => {
      await walsAssociateGetAPlanPage.associateWebsiteCartItemLegalShield('TD3', 'Trial Defense Supplement', '14.95', 0);
      await walsAssociateGetAPlanPage.associateWebsiteCartItemLegalShield('GSBS', 'Business Plus Supplement', '14.95', 0);
      await walsAssociateGetAPlanPage.associateWebsiteCartItemLegalShield('RS2', 'Ride Share Supplement', '14.95', 0);
      await walsAssociateGetAPlanPage.associateWebsiteCartTotalAmt([29.95, 14.95, 14.95, 14.95]);
    });
  });
  test('User can click on IDShield CTA button and be redirected to the right page and checkout correctly', async () => {
    await test.step('Navigate to legalshield marketing site', async () => {
      await walsAssociateWebsitePage.navigateToEnglishWalsUSPage(UrlsUtils.wals.urls.urlBenefits);
    });
    await test.step('Choose a region', async () => {
      await walsAssociateWebsitePage.changeStateinformation(DataUtils.data.testingHarness.us.city.VA);
    });
    await test.step('Click on logo', async () => {
      await walsAssociateWebsitePage.clickOnLogo();
    });
    await test.step('Verify Hero Banners for IDShield button', async () => {
      await walsAssociateWebsitePage.clickOnCTAButton('ids', 1);
      await walsBenefitsPage.assertBannerHeader('IDShield');
      await walsBenefitsPage.assertBannerPlanPrice('$14.95/month');
    });
    await test.step('Verify the Get Plan button changes to Added after click and pick a plan', async () => {
      await walsAssociateGetAPlanPage.addAPlan('IDS', 1, 'IDShield', [], 'IDSF');
    });
    await test.step('Assert checkout products and prices', async () => {
      await walsAssociateGetAPlanPage.associateWebsiteCartItem('IDSF', 'name', 'IDShield Family', 0);
      await walsAssociateGetAPlanPage.associateWebsiteCartItem('IDSF', 'price', '$ 29.95', 0);
      await walsAssociateGetAPlanPage.associateWebsiteCartTotalAmt([29.95]);
    });
  });
  test('User can click on Small Business CTA button and be redirected to the right page and checkout correctly', async () => {
    await test.step('Navigate to legalshield marketing site', async () => {
      await walsAssociateWebsitePage.navigateToEnglishWalsUSPage(UrlsUtils.wals.urls.urlBenefits);
    });
    await test.step('Choose a region', async () => {
      await walsAssociateWebsitePage.changeStateinformation(DataUtils.data.testingHarness.us.city.VA);
    });
    await test.step('Click on logo', async () => {
      await walsAssociateWebsitePage.clickOnLogo();
    });
    await test.step('Verify Hero Banners for Small Business button', async () => {
      await walsAssociateWebsitePage.clickOnCTAButton('biz', 1);
      await walsBenefitsPage.assertBannerHeader('Small Business Plan');
      await walsBenefitsPage.assertBannerPlanPrice('$49.00/month');
    });
    await test.step('Verify the Get Plan button changes to Added after click and pick a plan', async () => {
      await walsAssociateGetAPlanPage.addAPlan('BIZ', 1, 'Small Business', [], 'PLUS');
    });
    await test.step('Assert checkout products and prices', async () => {
      await walsAssociateGetAPlanPage.associateWebsiteCartItemSmallBiz('plan', 'name', 'Small Business Legal Plus');
      await walsAssociateGetAPlanPage.associateWebsiteCartItemSmallBiz('plan', 'price', '$ 99.00');
      await walsAssociateGetAPlanPage.associateWebsiteCartItemSmallBiz('rider', 'name', 'Business Plus Supplement');
      await walsAssociateGetAPlanPage.associateWebsiteCartItemSmallBiz('rider', 'price', '$ 14.95');
      await walsAssociateGetAPlanPage.associateWebsiteCartTotalAmt([99.0, 14.95]);
    });
  });
  test('User can click on Commercial Drivers CTA button and be redirected to the right page and checkout correctly', async () => {
    await test.step('Navigate to legalshield marketing site', async () => {
      await walsAssociateWebsitePage.navigateToEnglishWalsUSPage(UrlsUtils.wals.urls.urlBenefits);
    });
    await test.step('Choose a region', async () => {
      await walsAssociateWebsitePage.changeStateinformation(DataUtils.data.testingHarness.us.city.VA);
    });
    await test.step('Click on logo', async () => {
      await walsAssociateWebsitePage.clickOnLogo();
    });
    await test.step('Verify Hero Banners for Commercial Drivers button', async () => {
      await walsAssociateWebsitePage.clickOnCTAButton('cdlp', 1);
      await walsBenefitsPage.assertBannerHeader('Commercial Drivers Legal Plan');
      await walsBenefitsPage.assertBannerPlanPrice('$32.95/month');
    });
    await test.step('Verify the Get Plan button changes to Added after click and pick a plan', async () => {
      await walsAssociateGetAPlanPage.addAPlan('CDLP', 1, 'Commercial Drivers', [], 'CDLP');
    });
    await test.step('Assert checkout products and prices', async () => {
      await walsAssociateGetAPlanPage.associateWebsiteCartItem('CDLP', 'name', 'Commercial Drivers', 0);
      await walsAssociateGetAPlanPage.associateWebsiteCartItem('CDLP', 'price', '$ 32.95', 0);
      await walsAssociateGetAPlanPage.associateWebsiteCartTotalAmt([32.95]);
    });
  });
});
