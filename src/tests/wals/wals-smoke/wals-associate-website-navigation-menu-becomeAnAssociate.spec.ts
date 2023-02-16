import { expect, test } from '@playwright/test';
import * as dotenv from 'dotenv';
import { WalsAssociateWebsitePage } from '../../../page-objects-refactored/wals/wals-associate-website.page';
import UrlsUtils from '../../../utils/urls.utils';
import RegionsUtils from '../../../utils/regions.utils';
dotenv.config();

let walsAssociateWebsitePage: WalsAssociateWebsitePage;

test.describe('Somos legalshield', () => {
  test.beforeEach(async ({ page }) => {
    walsAssociateWebsitePage = new WalsAssociateWebsitePage(page);
    test.slow();
  });
  for (const stte of RegionsUtils.usSpanishStates.filter((ste) => ste.abbrv == 'VA')) {
    test(`${stte.name} User is able to click on  Hágase asociado  menu item`, async ({ page }) => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlSpUS);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Únase al equipo menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Hágase asociado', 'Únase al equipo');
      });

      await test.step('Confirm Únase al equipo  sub-menu', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(walsAssociateWebsitePage.opportunityPageLocJoinTheTeam, 'ÚNASE A MI EQUIPO');
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await page.pause();
        await walsAssociateWebsitePage.aboutPageLocSpLogo.waitFor();
        await walsAssociateWebsitePage.aboutPageLocSpLogo.click();
        await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText(
          'La cobertura simple e inteligente comienza aquí'
        );
      });
    });
  }
  for (const stte of RegionsUtils.usSpanishStates.filter((ste) => ste.abbrv == 'VA')) {
    test(`${stte.name} User s able to click on Perfiles del éxito menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlSpUS);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Perfiles del éxito Team sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Hágase asociado', 'Perfiles del éxito');
      });

      await test.step('Confirm Perfiles del éxito', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(walsAssociateWebsitePage.successPageLocLblProfilesOfSuccess, 'Perfiles del éxito');
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocLogo.click();
        await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText(
          'La cobertura simple e inteligente comienza aquí'
        );
      });
    });
  }
  for (const stte of RegionsUtils.usSpanishStates.filter((ste) => ste.abbrv == 'VA')) {
    test(`${stte.name} User s able to click on ¡Su tiempo es ahora! video`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlSpUS);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('¡Su tiempo es ahora! Video', async () => {
        await walsAssociateWebsitePage.menuItems('Hágase asociado', '¡Su tiempo es ahora!');
        await walsAssociateWebsitePage.becomeAnAssociateLocLnkaVideoModal.click();
        await walsAssociateWebsitePage.becomeAnAssociateLocBtnErrorMessageClose.click();
      });

      await test.step('Confirm Perfiles del éxito', async () => {
        await expect(walsAssociateWebsitePage.becomeAnAssociateLocBtnCloseVideo).toBeVisible();
        await walsAssociateWebsitePage.becomeAnAssociateLocBtnCloseVideo.click();
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocLogo.click();
        await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText(
          'La cobertura simple e inteligente comienza aquí'
        );
      });
    });
  }
  for (const stte of RegionsUtils.usSpanishStates.filter((ste) => ste.abbrv == 'VA')) {
    test(`${stte.name} Gane dinero y ayude a otros video`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlSpUS);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Gane dinero y ayude a otros ', async () => {
        await walsAssociateWebsitePage.menuItems('Hágase asociado', 'Gane dinero y ayude a otros');
      });

      await test.step('Gane dinero y ayude a otros', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.becomeAnAssociateLocHdrMakingMoneyWhileHelpingOthers,
          '¿Ganar dinero mientras ayuda a otros? ¡Si es posible!'
        );
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocLogo.click();
        await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText(
          'La cobertura simple e inteligente comienza aquí'
        );
      });
    });
  }
  for (const stte of RegionsUtils.usSpanishStates.filter((ste) => ste.abbrv == 'VA')) {
    test(`${stte.name} Trabaja desde cualquier lugar video`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlSpUS);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Trabaja desde cualquier lugar ', async () => {
        await walsAssociateWebsitePage.menuItems('Hágase asociado', 'Trabaja desde cualquier lugar');
        const vd = await walsAssociateWebsitePage.becomeAnAssociateLocLnkVideo('1');
        await vd.click();
        await walsAssociateWebsitePage.becomeAnAssociateLocBtnErrorMessageClose.click();
      });

      await test.step('Gane dinero y ayude a otros', async () => {
        await expect(walsAssociateWebsitePage.becomeAnAssociateLocBtnCloseVideo).toBeVisible();
        await walsAssociateWebsitePage.becomeAnAssociateLocBtnCloseVideo.click();
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocLogo.click();
        await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
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
    test(`${stte.name} User s able to click on Become an Associate menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlEnUS);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Join the Team menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Become an Associate', 'Join the Team');
      });

      await test.step('Confirm Join The Team link', async () => {
        await walsAssociateWebsitePage.opportunityPageLocJoinTheTeam.waitFor();
        await walsAssociateWebsitePage.assertContainTextLabel(walsAssociateWebsitePage.opportunityPageLocJoinTheTeam, 'JOIN MY TEAM');
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocFrLogo.click();
        await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText('Smart, Simple Coverage Starts Here');
      });
    });
  }
  for (const stte of RegionsUtils.usStates.filter((ste) => ste.abbrv == 'VA')) {
    test(`${stte.name} User s able to click on Profiles of Success menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlBenefits);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Profiles of Success menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Become an Associate', 'Profiles of Success');
      });

      await test.step('Confirm Profiles of Success page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(walsAssociateWebsitePage.successPageLocLblProfilesOfSuccess, 'Profiles of Success');
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocLogo.click();
        await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText('Smart, Simple Coverage Starts Here');
      });
    });
  }
  for (const stte of RegionsUtils.usStates.filter((ste) => ste.abbrv == 'VA')) {
    test(`${stte.name} User s able to click on Your Time Is Now! video`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlBenefits);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Your Time Is Now! video', async () => {
        await walsAssociateWebsitePage.menuItems('Become an Associate', 'Your Time Is Now!');
        const vd = await walsAssociateWebsitePage.becomeAnAssociateLocLnkVideo('1');
        await vd.click();
        await walsAssociateWebsitePage.becomeAnAssociateLocBtnErrorMessageClose.click();
      });

      await test.step('Confirm Your Time Is Now!', async () => {
        await expect(walsAssociateWebsitePage.becomeAnAssociateLocBtnCloseVideo).toBeVisible();
        await walsAssociateWebsitePage.becomeAnAssociateLocBtnCloseVideo.click();
      });

      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocLogo.click();
        await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText('Smart, Simple Coverage Starts Here');
      });
    });
  }
  for (const stte of RegionsUtils.usStates.filter((ste) => ste.abbrv == 'VA')) {
    test(`${stte.name} User is able to click on Make Money and Help Others menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlBenefits);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Make Money and Help Others sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Become an Associate', 'Make Money and Help Others');
      });

      await test.step('Confirm Make Money and Help Others page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.becomeAnAssociateLocHdrMakingMoneyWhileHelpingOthers,
          'Making Money While Helping Others? Yes, It’s Possible!'
        );
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocLogo.click();
        await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText('Smart, Simple Coverage Starts Here');
      });
    });
  }
  for (const stte of RegionsUtils.usStates.filter((ste) => ste.abbrv == 'VA')) {
    test(`${stte.name} Work From Anywhere video`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlBenefits);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Work From Anywhere ', async () => {
        await walsAssociateWebsitePage.menuItems('Become an Associate', 'Work From Anywhere');
        const vd = await walsAssociateWebsitePage.becomeAnAssociateLocLnkVideo('1');
        await vd.click();
        await walsAssociateWebsitePage.becomeAnAssociateLocBtnErrorMessageClose.click();
      });

      await test.step('Work From Anywhere', async () => {
        await expect(walsAssociateWebsitePage.becomeAnAssociateLocBtnCloseVideo).toBeVisible();
        await walsAssociateWebsitePage.becomeAnAssociateLocBtnCloseVideo.click();
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocLogo.click();
        await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
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
    test(`${stte.name} User s able to click on  Devenez Associé  menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Devenez Associé menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Devenez Associé', "Joignez-vous à l'équipe");
      });

      await test.step('Confirm  À propos de nous  sub-menu', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(walsAssociateWebsitePage.aboutPageLocLblWhyLegalShield, 'Frais uniques de ');
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocFrLogo.click();
        await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText(
          'Une couverture simple et intelligente, ça commence ici!'
        );
      });
    });
    test(`${stte.name} User s able to click on  Profils de réussite   menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('À propos de nous menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Devenez Associé', 'Profils de réussite');
      });

      await test.step('Confirm Profils de réussite page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(walsAssociateWebsitePage.successPageLocLblProfilesOfSuccess, 'Profils de réussite');
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
  for (const stte of RegionsUtils.caFrenchProvinces.filter((ste) => ste.abbrv == 'ON')) {
    test(`${stte.name} User s able to click on  Votre temps est venu ! video`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Click Votre temps est venu !', async () => {
        await walsAssociateWebsitePage.menuItems('Devenez Associé', 'Votre temps');
        const vd = await walsAssociateWebsitePage.becomeAnAssociateLocLnkVideo('0');
        await vd.click();
        await walsAssociateWebsitePage.becomeAnAssociateLocBtnErrorMessageClose.click();
      });

      await test.step('Confirm Votre temps est venu !', async () => {
        await expect(walsAssociateWebsitePage.becomeAnAssociateLocBtnCloseVideo).toBeVisible();
        await walsAssociateWebsitePage.becomeAnAssociateLocBtnCloseVideo.click();
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
  for (const stte of RegionsUtils.caFrenchProvinces.filter((ste) => ste.abbrv == 'ON')) {
    test(`${stte.name} User s able to click on Gagnez de l'argent depuis chez vous avec LegalShield sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step(`Click on Gagnez de l'argent depuis chez vous avec LegalShield`, async () => {
        await walsAssociateWebsitePage.menuItems('Devenez Associé', "Gagnez de l'argent depuis chez vous avec LegalShield");
      });

      await test.step(`Confirm Gagnez de l'argent depuis chez vous avec LegalShield`, async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.becomeAnAssociateLocHdrMakingMoneyWhileHelpingOthers,
          'Vous recherchez une nouvelle opportunité commerciale? LegalShield est votre solution'
        );
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
