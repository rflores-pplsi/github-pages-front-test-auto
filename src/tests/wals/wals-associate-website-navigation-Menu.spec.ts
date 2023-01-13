import { expect, test } from '@playwright/test';
import * as dotenv from 'dotenv';
import { WalsAssociateWebsitePage } from '../../page-objects-refactored/wals/wals-associate-website.page';
import UrlsUtils from '../../utils/urls.utils';
import RegionsUtils from '../../utils/regions.utils';
dotenv.config();

let walsAssociateWebsitePage: WalsAssociateWebsitePage;

test.describe('Somos legalshield', () => {
  test.beforeEach(async ({ page }) => {
    walsAssociateWebsitePage = new WalsAssociateWebsitePage(page);
    test.slow();
  });
  for (const stte of RegionsUtils.usSpanishStates.filter((ste) => ste.abbrv == 'VA')) {
    test(`${stte.name} User s able to click on  Nosotros  menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToEnglishWalsUSPage(UrlsUtils.wals.urls.urlSpUS);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeStateinformation(stte.name);
      });
      await test.step('Nosotros menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Nosotros', 'Nosotros');
      });

      await test.step('Confirm  Nosotros  sub-menu', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(walsAssociateWebsitePage.aboutPageLocLblWhyLegalShield, 'Por qué LegalShield');
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocLogo.click();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText(
          'La cobertura simple e inteligente comienza aquí'
        );
      });
    });
  }
  for (const stte of RegionsUtils.usSpanishStates.filter((ste) => ste.abbrv == 'VA')) {
    test(`${stte.name} User s able to click on Executive Team menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToEnglishWalsUSPage(UrlsUtils.wals.urls.urlSpUS);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeStateinformation(stte.name);
      });
      await test.step('Executive Team sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Nosotros', 'Equipo ejecutivo');
      });

      await test.step('Confirm an Executive Team member', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(walsAssociateWebsitePage.aboutPageExecutiveTeamLocHeader, 'Kathy Pinson');
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocLogo.click();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText(
          'La cobertura simple e inteligente comienza aquí'
        );
      });
    });
  }
});
test.describe('Test We are LegalShield', () => {
  test.beforeEach(async ({ page }) => {
    walsAssociateWebsitePage = new WalsAssociateWebsitePage(page);
    test.slow();
  });
  for (const stte of RegionsUtils.usStates.filter((ste) => ste.abbrv == 'VA')) {
    test(`${stte.name} User s able to click on About Us menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToEnglishWalsUSPage(UrlsUtils.wals.urls.urlEnUS);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeStateinformation(stte.name);
      });
      await test.step('About Us menu item', async () => {
        await walsAssociateWebsitePage.menuItems('About Us', 'About Us');
      });

      await test.step('Confirm About us sub-menu', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(walsAssociateWebsitePage.aboutPageLocLblWhyLegalShield, 'Why LegalShield');
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocLogo.click();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText('Smart, Simple Coverage Starts Here');
      });
    });
  }
  for (const stte of RegionsUtils.usStates.filter((ste) => ste.abbrv == 'VA')) {
    test(`${stte.name} User s able to click on Executive Team menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToEnglishWalsUSPage(UrlsUtils.wals.urls.urlEnUS);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeStateinformation(stte.name);
      });
      await test.step('Executive Team sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('About Us', 'Executive Team');
      });

      await test.step('Confirm an Executive Team member', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(walsAssociateWebsitePage.aboutPageExecutiveTeamLocHeader, 'Kathy Pinson');
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocLogo.click();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText('Smart, Simple Coverage Starts Here');
      });
    });
  }
});
test.describe('Test nous sommes legalshield.ca', () => {
  test.beforeEach(async ({ page }) => {
    walsAssociateWebsitePage = new WalsAssociateWebsitePage(page);
    test.slow();
  });
  for (const stte of RegionsUtils.caFrenchProvinces.filter((ste) => ste.abbrv == 'ON')) {
    test(`${stte.name} User s able to click on  À propos de nous  menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToEnglishWalsUSPage(UrlsUtils.wals.urls.urlAppTestUserFrCa);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeStateinformation(stte.name);
      });
      await test.step('À propos de nous menu item', async () => {
        await walsAssociateWebsitePage.menuItems('À propos de nous', 'À propos de nous');
      });

      await test.step('Confirm  À propos de nous  sub-menu', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.aboutPageLocLblWhyLegalShield,
          "Notre raison d'être et notre histoire"
        );
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocFrLogo.click();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText(
          'Une couverture simple et intelligente, ça commence ici!'
        );
      });
    });
    test(`${stte.name} User s able to click on  Équipe de direction   menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToEnglishWalsUSPage(UrlsUtils.wals.urls.urlAppTestUserFrCa);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeStateinformation(stte.name);
      });
      await test.step('À propos de nous menu item', async () => {
        await walsAssociateWebsitePage.menuItems('À propos de nous', 'Équipe de direction ');
      });

      await test.step('Confirm an Executive Team member', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(walsAssociateWebsitePage.aboutPageExecutiveTeamLocHeader, 'Kathy Pinson');
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocFrLogo.click();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText('Smart, Simple Coverage Starts Here');
      });
    });
  }
});
