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
    test(`${stte.name} User s able to click on  Recursos  menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlSpUS);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Última voluntad y testamento sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Recursos', 'Última voluntad y testamento');
      });

      await test.step('Confirm Última voluntad y testamento page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.lastWillAndTestamentLocHeaderHelpAvoidFamilyConflict,
          'Ayude a evitar conflictos familiares'
        );
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
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
      await test.step('Testamento vital sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Recursos', 'Testamento vital');
      });

      await test.step('Confirm Testamento vital page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.livingWillLocHeaderGetPeaceOfMind,
          'Consiga la paz de la mente'
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
    test(`${stte.name} User s able to click on ¡Su tiempo es ahora! video`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlSpUS);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Poder legal sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Recursos', 'Poder legal');
      });

      await test.step('Confirm Poder legal page', async () => {
        await walsAssociateWebsitePage.successPageLocLblProfilesOfSuccess.waitFor();
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.successPageLocLblProfilesOfSuccess,
          '5 tipos de poderes notariales'
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
    test(`${stte.name} Gane dinero y ayude a otros video`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlSpUS);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Fideicomisos sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Recursos', 'Fideicomisos');
      });

      await test.step('Confirm Fideicomisos page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(walsAssociateWebsitePage.successPageLocLblProfilesOfSuccess, 'Cuida de tus hijos');
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
    test(`${stte.name} Test Blog sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlSpUS);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Blog sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Recursos', 'Blog');
      });

      await test.step('Confirm Blog page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(walsAssociateWebsitePage.blogLocHeaderBlog, 'Blog');
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
    test(`${stte.name} Test Revista sub-menu`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlSpUS);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Revista sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Recursos', 'Revista');
      });

      await test.step('Confirm Revista page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.magazineLocWhyBecomeAnEntrepreneur,
          '¿Por qué convertirse en empresario?'
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
    test(`${stte.name} User s able to click on Personal Plans sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlEnUS);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Personal Plans sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Memberships', 'Personal Plans');
      });

      await test.step('Confirm Personal Plans page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.lastWillAndTestamentLocHeaderHelpAvoidFamilyConflict,
          'Affordable Legal Help For All'
        );
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
        // await walsAssociateWebsitePage.listPans();
        await walsAssociateWebsitePage.changeRegion(stte.name);
        await walsAssociateWebsitePage.listPans();
      });
      await test.step('List plans', async () => {
        console.log(walsAssociateWebsitePage.assertPlan('Legal Plan'));
      });
      // await test.step('Living Will sub-menu item', async () => {
      //   await walsAssociateWebsitePage.menuItems('Memberships', 'Living Will');
      // });

      // await test.step('Confirm Living Will', async () => {
      //   await walsAssociateWebsitePage.assertContainTextLabel(walsAssociateWebsitePage.livingWillLocHeaderGetPeaceOfMind, 'Get Peace of Mind');
      // });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocLogo.click();
        await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText('Smart, Simple Coverage Starts Here');
      });
    });
  }
  for (const stte of RegionsUtils.usStates.filter((ste) => ste.abbrv == 'VA')) {
    test(`${stte.name} User s able to click on Power of Attorney sub-menu`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlBenefits);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Power of Attorney', async () => {
        await walsAssociateWebsitePage.menuItems('Memberships', 'Power of Attorney');
      });

      await test.step('Confirm Power of Attorney', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(walsAssociateWebsitePage.powerOfAttorneyLocHeader, 'Power of Attorney');
      });

      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocLogo.click();
        await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText('Smart, Simple Coverage Starts Here');
      });
    });
  }
  for (const stte of RegionsUtils.usStates.filter((ste) => ste.abbrv == 'VA')) {
    test(`${stte.name} User is able to click on Trusts menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlBenefits);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Trusts', async () => {
        await walsAssociateWebsitePage.menuItems('Memberships', 'Trusts');
      });

      await test.step('Confirm Trusts', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.trustLocHeaderTakeCareOfYourChildren,
          'Take Care of Your Children'
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
      await test.step('Magazine', async () => {
        await walsAssociateWebsitePage.menuItems('Memberships', 'Magazine');
      });

      await test.step('Confirm Magazine', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.magazineLocWhyBecomeAnEntrepreneur,
          'Why Become an Entrepreneur?'
        );
      });
    });
  }
  for (const stte of RegionsUtils.usStates.filter((ste) => ste.abbrv == 'VA')) {
    test(`${stte.name} User is able to click on Blog menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlBenefits);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Click on Blog', async () => {
        await walsAssociateWebsitePage.menuItems('Memberships', 'Blog');
      });

      await test.step('Confirm Blog', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(walsAssociateWebsitePage.blogLocHeaderBlog, 'Blog');
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
  for (const stte of RegionsUtils.caFrenchProvinces.filter((ste) => ['ON', 'AB', 'SK', 'MB', 'BC'].includes(ste.abbrv))) {
    test(`${stte.name} User s able to click on  Magazine sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Magazine sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Ressources', 'Magazine');
      });

      await test.step('Confirm Magazine page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.magazineLocWhyBecomeAnEntrepreneur,
          'Pourquoi devenir entrepreneur ?'
        );
      });
    });
    test(`${stte.name} User s able to click on Blogue sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
        await walsAssociateWebsitePage.listPans();
      });
      await test.step('List plans', async () => {
        console.log(walsAssociateWebsitePage.assertPlanIsNotProvided('Legal Plan'));
      });
      // await test.step('Click on Blogue sub-menu item', async () => {
      //   await walsAssociateWebsitePage.menuItems('Ressources', 'Blogue');
      // });

      // await test.step('Confirm Blogue page', async () => {
      //   await walsAssociateWebsitePage.assertContainTextLabel(walsAssociateWebsitePage.blogLocHeaderBlog, 'Blog ');
      // });
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
