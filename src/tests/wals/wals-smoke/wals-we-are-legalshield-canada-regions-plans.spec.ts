import { expect, test } from '@playwright/test';
import * as dotenv from 'dotenv';
import { WalsAssociateWebsitePage } from '../../../page-objects-refactored/wals/wals-associate-website.page';
import UrlsUtils from '../../../utils/urls.utils';
import RegionsUtils from '../../../utils/regions.utils';
dotenv.config();

let walsAssociateWebsitePage: WalsAssociateWebsitePage;

test.describe('Test nous sommes legalshield.ca Plans', () => {
  test.beforeEach(async ({ page }) => {
    walsAssociateWebsitePage = new WalsAssociateWebsitePage(page);
    test.slow();
  });
  for (const stte of RegionsUtils.caFrenchProvinces.filter((ste) => ['NB', 'NL', 'NT', 'NS', 'NU', 'PE', 'QC', 'YT'].includes(ste.abbrv))) {
    test(`${stte.name} User is able to confirm that state does't provide Legal Plans`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.listPans();
        await walsAssociateWebsitePage.changeRegion(stte.name);
        await walsAssociateWebsitePage.listPans();
        await walsAssociateWebsitePage.listCta();
        console.log(walsAssociateWebsitePage.assertPlan('Legal Plan'));
        console.log(walsAssociateWebsitePage.assertPlan("Bâtisseur d'Entreprise"));
        console.log(walsAssociateWebsitePage.assertPlan('Plan IDShield'));
        console.log(walsAssociateWebsitePage.assertPlan('Plan pour les petites entreprises'));
        console.log(walsAssociateWebsitePage.assertPlan('Démarrage pour Associés'));
        console.log(walsAssociateWebsitePage.assertPlan('Juridique & Identité'));
        console.log(walsAssociateWebsitePage.assertCta("Bâtisseur d'Entreprise"));
        console.log(walsAssociateWebsitePage.assertCta('LegalShield'));
        console.log(walsAssociateWebsitePage.assertCta('IDShield'));
        console.log(walsAssociateWebsitePage.assertCta('Petite Entreprise'));
        console.log(walsAssociateWebsitePage.assertCta('Devenez Associé'));
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocLogo.click();
        await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText(
          'Une couverture simple et intelligente, ça commence ici!'
        );
      });
    });
  }
  for (const stte of RegionsUtils.caFrenchProvinces.filter((ste) => ['AB', 'BC', 'MB', 'ON', 'SK'].includes(ste.abbrv))) {
    test(`${stte.name} User is able to confirm that state provides Legal Plans`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.listPans();
        await walsAssociateWebsitePage.changeRegion(stte.name);
        await walsAssociateWebsitePage.listPans();
        console.log(walsAssociateWebsitePage.assertPlan('Legal Plan'));
        console.log(walsAssociateWebsitePage.assertPlan("Bâtisseur d'Entreprise"));
        console.log(walsAssociateWebsitePage.assertPlan('Plan IDShield'));
        console.log(walsAssociateWebsitePage.assertPlan('Plan pour les petites entreprises'));
        console.log(walsAssociateWebsitePage.assertPlan('Démarrage pour Associés'));
        console.log(walsAssociateWebsitePage.assertPlan('Juridique & Identité'));
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocLogo.click();
        await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText(
          'Une couverture simple et intelligente, ça commence ici!'
        );
      });
    });
  }
});
