import { expect, test } from '@playwright/test';
import * as dotenv from 'dotenv';
import { WalsAssociateWebsitePage } from '../../../../archived/page-objects-oldest/wals/wals-associate-website.page';
import UrlsUtils from '../../../../utils/urls.utils';
import RegionsUtils from '../../../../utils/regions.utils';
dotenv.config();

let walsAssociateWebsitePage: WalsAssociateWebsitePage;

test.describe('Somos legalshield', () => {
  test.beforeEach(async ({ page }) => {
    walsAssociateWebsitePage = new WalsAssociateWebsitePage(page);
    test.slow();
  });
  for (const stte of RegionsUtils.usSpanishStates.filter((ste) => ste.abbrv == 'VA')) {
    test(`${stte.name} User s able to click on  Planes personales  sub-menu item`, async ({ page }) => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlSpUS);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Planes personales sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Membresías', 'Planes personales');
      });

      await test.step('Confirm Planes personales page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.lastWillAndTestamentLocHeaderHelpAvoidFamilyConflict,
          'Ayuda legal asequible para todos'
        );
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocSpLogo2.waitFor();
        await walsAssociateWebsitePage.aboutPageLocSpLogo2.click();
        await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText(
          'La cobertura simple e inteligente comienza aquí'
        );
      });
    });
  }
  for (const stte of RegionsUtils.usSpanishStates.filter((ste) => ste.abbrv == 'VA')) {
    test(`${stte.name} User s able to click on Cómo funciona sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlSpUS);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Cómo funciona sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Membresías', 'Cómo funciona');
      });

      await test.step('Confirm Cómo funciona  page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.lastWillAndTestamentLocHeaderHelpAvoidFamilyConflict,
          '¿Para qué sirve?'
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
    test(`${stte.name} User s able to click on Declaración de derechos para miembros`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlSpUS);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Declaración de derechos para miembros sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Membresías', 'Declaración de derechos para miembros');
      });

      await test.step('Confirm Declaración de derechos para miembros  page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.membershipsLocLblHeading,
          'Declaración de derechos para miembros'
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
    test(`${stte.name} Transporte Compartido y Entrega`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlSpUS);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Transporte Compartido y Entrega sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Membresías', 'Transporte Compartido y Entrega');
      });

      await test.step('Confirm Transporte Compartido y Entrega  page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(walsAssociateWebsitePage.membershipsLocLblHeading, 'Transporte Compartido y Entrega');
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
    test(`${stte.name} Test IDShield sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlSpUS);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('IDShield sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Membresías', 'IDShield');
      });

      await test.step('Confirm IDShield  page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.membershipsLocLblHeading,
          'Protección inteligente para todas las formas en que se conecta.'
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
    test(`${stte.name} Test Legal + Identity Dual Plan sub-menu`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlSpUS);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Legal + Identity Dual Plan sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Membresías', 'Legal + Identity Dual Plan');
      });

      await test.step('Confirm Legal + Identity Dual Plan page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.membershipsLocLblHeading,
          'Nuestra misión es proteger y capacitar a las personas con las herramientas y los servicios necesarios para vivir una vida justa y segura de manera asequible.'
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
    test(`${stte.name} User s able to click on How it Works sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlBenefits);
      });
      await test.step('Choose a region', async () => {
        // await walsAssociateWebsitePage.listPans();
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('How it Works sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Memberships', 'How it Works');
      });

      await test.step('Confirm How it Works page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(walsAssociateWebsitePage.livingWillLocHeaderGetPeaceOfMind, 'What is it for?');
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocLogo.click();
        await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText('Smart, Simple Coverage Starts Here');
      });
    });
  }
  for (const stte of RegionsUtils.usStates.filter((ste) => ste.abbrv == 'VA')) {
    test(`${stte.name} User s able to click on Member Bill of Rights sub-menu`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlBenefits);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Member Bill of Rights', async () => {
        await walsAssociateWebsitePage.menuItems('Memberships', 'Member Bill of Rights');
      });

      await test.step('Confirm Member Bill of Rights page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(walsAssociateWebsitePage.powerOfAttorneyLocHeader, 'Legal Matters');
      });

      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocLogo.click();
        await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText('Smart, Simple Coverage Starts Here');
      });
    });
  }
  for (const stte of RegionsUtils.usStates.filter((ste) => ste.abbrv == 'VA')) {
    test(`${stte.name} User is able to click on Gun Owner Supplement sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlBenefits);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Gun Owner Supplement', async () => {
        await walsAssociateWebsitePage.menuItems('Memberships', 'Gun Owner Supplement');
      });

      await test.step('Confirm Gun Owner Supplement page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.trustLocHeaderTakeCareOfYourChildren,
          'Gun ownership means more liability'
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
    test(`${stte.name} User is able to click on Home Business Supplement`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlBenefits);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Home Business Supplement', async () => {
        await walsAssociateWebsitePage.menuItems('Memberships', 'Home Business Supplement');
      });

      await test.step('Confirm Home Business Supplement page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage,
          'You don’t have to run your business alone!'
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
    test(`${stte.name} User is able to click on Trial Defense Supplement sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlBenefits);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Click on Trial Defense Supplement', async () => {
        await walsAssociateWebsitePage.menuItems('Memberships', 'Trial Defense Supplement');
      });

      await test.step('Confirm Trial Defense Supplement page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage,
          'Be prepared with more attorney time.'
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
    test(`${stte.name} User is able to click on Ride Share Delivery Supplement sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlBenefits);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Click on Ride Share Delivery Supplement', async () => {
        await walsAssociateWebsitePage.menuItems('Memberships', 'Ride Share Delivery Supplement');
      });

      await test.step('Confirm Ride Share Delivery Supplement page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage,
          'Protect your driving record and your livelihood'
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
    test(`${stte.name} User is able to click on IDShield sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlBenefits);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Click on IDShield', async () => {
        await walsAssociateWebsitePage.menuItems('Memberships', 'IDShield');
      });

      await test.step('Confirm IDShield page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage,
          'Protect you or your entire family'
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
    test(`${stte.name} User is able to click on Legal + Identity Dual Plan sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlBenefits);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Click on ILegal + Identity Dual Plan', async () => {
        await walsAssociateWebsitePage.menuItems('Memberships', 'Legal + Identity Dual Plan');
      });

      await test.step('Confirm Legal + Identity Dual Plan page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage,
          'LegalShield + IDShield Dual Plan'
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
    test(`${stte.name} User is able to click on IDShield for Business sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlBenefits);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Click on IDShield for Business', async () => {
        await walsAssociateWebsitePage.menuItems('Memberships', 'IDShield for Business');
      });

      await test.step('Confirm IDShield for Business page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage,
          'In partnership with Guard Street Cybersecurity, we are excited to offer this cyber protection plan for your business for less!'
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
    test(`${stte.name} User is able to click on Small Business Plans sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlBenefits);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Click on Small Business Plans', async () => {
        await walsAssociateWebsitePage.menuItems('Memberships', 'Small Business Plans');
      });

      await test.step('Confirm Small Business Plans page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage,
          'A plan that fits your business'
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
    test(`${stte.name} User is able to click on How It Works sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlBenefits);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Click on How It Works', async () => {
        await walsAssociateWebsitePage.menuItems('Memberships', 'How It Works');
      });

      await test.step('Confirm How It Works page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage,
          'Protect Your Bottom Line'
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
    test(`${stte.name} User is able to click on Business Plus Supplement sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlBenefits);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Click on Business Plus Supplement', async () => {
        await walsAssociateWebsitePage.menuItems('Memberships', 'Business Plus Supplement');
      });

      await test.step('Confirm Business Plus Supplement page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage,
          'Big Business Tools Without a Big  Business Budget'
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
    test(`${stte.name} User is able to click on Business Trial Defense Supplement sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlBenefits);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Click on Business Trial Defense Supplement', async () => {
        await walsAssociateWebsitePage.menuItems('Memberships', 'Business Trial Defense Supplement');
      });

      await test.step('Confirm Business Trial Defense Supplement page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage,
          'Courtroom Protection for Your Business '
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
    test(`${stte.name} User is able to click on Plans sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlBenefits);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Click on Plans', async () => {
        await walsAssociateWebsitePage.menuItems('Memberships', 'Plans');
      });

      await test.step('Confirm Plans page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage, 'Starting at');
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocLogo.click();
        await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText('Smart, Simple Coverage Starts Here');
      });
    });
  }
  for (const stte of RegionsUtils.usStates.filter((ste) => ste.abbrv == 'VA')) {
    test(`${stte.name} User is able to click on Commercial Drivers sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlBenefits);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Click on Commercial Drivers', async () => {
        await walsAssociateWebsitePage.menuItems('Memberships', 'Commercial Drivers');
      });

      await test.step('Confirm Commercial Drivers page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage,
          'We have a plan to fit your needs'
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
    test(`${stte.name} User is able to click on HR Benefits sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlBenefits);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Click on HR Benefits', async () => {
        await walsAssociateWebsitePage.menuItems('Memberships', 'HR Benefits');
      });

      await test.step('Confirm HR Benefits page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage,
          'Improve and empower the lives of your employees'
        );
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocLogo.click();
        await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText('Smart, Simple Coverage Starts Here');
      });
    });
  }
});
test.describe('Test nous sommes legalshield.ca', async () => {
  test.beforeEach(async ({ page }) => {
    walsAssociateWebsitePage = new WalsAssociateWebsitePage(page);
    test.slow();
  });
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
    test(`${stte.name} User s able to click on Plans personnels sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
        await walsAssociateWebsitePage.listPans();
      });
      // await test.step(`confirm ${plan}`, async () => {
      //   console.log(walsAssociateWebsitePage.assertPlanIsProvided(plan));
      // });
      await test.step('Plans personnels sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Abonnements', 'Plans personnels');
      });

      await test.step('Confirm Plans personnels page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.membershipsLocLblHeading,
          'Les questions juridiques peuvent être coûteuses. Nous avons égalisé les règles du jeu.'
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
    test(`${stte.name} User s able to click on Comment ça fonctionne sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
        await walsAssociateWebsitePage.listPans();
      });
      await test.step('Comment ça fonctionne sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Abonnements', 'Comment ça fonctionne');
      });

      await test.step('Confirm Comment ça fonctionne page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(walsAssociateWebsitePage.membershipsLocLblHeading, 'Comment ça fonctionne');
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocLogo.click();
        await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText(
          'Une couverture simple et intelligente, ça commence ici!'
        );
      });
    });
    test(`${stte.name} User s able to click on Déclaration des droits des membres sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
        await walsAssociateWebsitePage.listPans();
      });
      await test.step('Déclaration des droits des membres sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Abonnements', 'Déclaration des droits des membres');
      });

      await test.step('Confirm Déclaration des droits des membres page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.membershipsLocLblHeading,
          'Déclaration des droits des membres'
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
    test(`${stte.name} User s able to click on Supplément entreprise à domicile sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
        await walsAssociateWebsitePage.listPans();
      });
      await test.step('Supplément entreprise à domicile sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Abonnements', 'Supplément entreprise à domicile');
      });

      await test.step('Confirm Supplément entreprise à domicile page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(walsAssociateWebsitePage.membershipsLocLblHeading, 'Supplément entreprise à domicile');
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocLogo.click();
        await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText(
          'Une couverture simple et intelligente, ça commence ici!'
        );
      });
    });
    test(`${stte.name} User s able to click on Supplément pour la défense du procès sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
        await walsAssociateWebsitePage.listPans();
      });
      await test.step('Supplément pour la défense du procès sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Abonnements', 'Supplément pour la défense du procès');
      });

      await test.step('Confirm Supplément pour la défense du procès page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.membershipsLocLblHeading,
          'Supplément pour la défense du procès'
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
    test(`${stte.name} User s able to click on Supplément de livraison de covoiturage sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
        await walsAssociateWebsitePage.listPans();
      });
      await test.step('Supplément de livraison de covoiturage sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Abonnements', 'Supplément de livraison de covoiturage');
      });

      await test.step('Confirm Supplément de livraison de covoiturage page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.membershipsLocLblHeading,
          'Supplément de livraison de covoiturage'
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
    test(`${stte.name} User s able to click on IDShield sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
        await walsAssociateWebsitePage.listPans();
      });
      await test.step('IDShield sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Abonnements', 'IDShield');
      });

      await test.step('Confirm IDShield page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.membershipsLocLblHeading,
          'Your Privacy is Your Business. Protecting it is Ours.'
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
    test(`${stte.name} User s able to click on Legal + Identity Dual Plan sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
        await walsAssociateWebsitePage.listPans();
      });
      await test.step('Legal + Identity Dual Plan sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Abonnements', 'Legal + Identity Dual Plan');
      });

      await test.step('Confirm Legal + Identity Dual Plan page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.membershipsLocLblHeading,
          'Notre mission est de protéger et de responsabiliser les gens avec les outils et les services nécessaires pour mener une vie juste et sûre à un prix abordable.'
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
    test(`${stte.name} User s able to click on Petite Entreprise sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
        await walsAssociateWebsitePage.listPans();
      });
      await test.step('Petite Entreprise sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Abonnements', 'Petite Entreprise');
      });

      await test.step('Confirm Petite Entreprise page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.membershipsLocLblHeading,
          'Conseils juridiques pour votre entreprise'
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
    test(`${stte.name} User is able to click on Comment ça fonctionne sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
        await walsAssociateWebsitePage.listPans();
      });
      await test.step('Comment ça fonctionne sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Abonnements', 'Comment ça fonctionne');
      });

      await test.step('Confirm Comment ça fonctionne page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(walsAssociateWebsitePage.membershipsLocLblHeading, 'Comment ça fonctionne');
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocLogo.click();
        await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText(
          'Une couverture simple et intelligente, ça commence ici!'
        );
      });
    });
    test(`${stte.name} User is able to click on Supplément Business Plus sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
        await walsAssociateWebsitePage.listPans();
      });
      await test.step('Supplément Business Plus sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Abonnements', 'Supplément Business Plus');
      });

      await test.step('Confirm Supplément Business Plus page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(walsAssociateWebsitePage.membershipsLocLblHeading, 'Supplément Business Plus');
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocLogo.click();
        await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText(
          'Une couverture simple et intelligente, ça commence ici!'
        );
      });
    });
    test(`${stte.name} User is able to click on Supplément de défense contre les procès commerciaux sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
        await walsAssociateWebsitePage.listPans();
      });
      await test.step('Supplément de défense contre les procès commerciaux sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Abonnements', 'Supplément de défense contre les procès commerciaux');
      });

      await test.step('Confirm Supplément de défense contre les procès commerciaux page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.membershipsLocLblHeading,
          'Défense de procès pour les entreprises'
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
    // test(`${stte.name} User s able to click on Plans personnels sub-menu item`, async () => {
    //   test.slow;
    //   await test.step('Navigate to legalshield WALS site', async () => {
    //     await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
    //   });
    //   await test.step('Choose a region', async () => {
    //     await walsAssociateWebsitePage.changeRegion(stte.name);
    //     await walsAssociateWebsitePage.listPans();
    //   });
    //   await test.step('Plans personnels sub-menu item', async () => {
    //     await walsAssociateWebsitePage.menuItems('Abonnements', 'Plans personnels');
    //   });

    //   await test.step('Confirm Plans personnels page', async () => {
    //     await walsAssociateWebsitePage.assertContainTextLabel(
    //       walsAssociateWebsitePage.membershipsLocLblHeading,
    //       'Les questions juridiques peuvent être coûteuses. Nous avons égalisé les règles du jeu.'
    //     );
    //   });
    //   await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
    //     await walsAssociateWebsitePage.aboutPageLocLogo.click();
    //     await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
    //     await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText(
    //       'Une couverture simple et intelligente, ça commence ici!'
    //     );
    //   });
    // });
    // test(`${stte.name} User s able to click on Comment ça fonctionne sub-menu item`, async () => {
    //   test.slow;
    //   await test.step('Navigate to legalshield WALS site', async () => {
    //     await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
    //   });
    //   await test.step('Choose a region', async () => {
    //     await walsAssociateWebsitePage.changeRegion(stte.name);
    //     await walsAssociateWebsitePage.listPans();
    //   });
    //   await test.step('Comment ça fonctionne sub-menu item', async () => {
    //     await walsAssociateWebsitePage.menuItems('Abonnements', 'Comment ça fonctionne');
    //   });

    //   await test.step('Confirm Comment ça fonctionne page', async () => {
    //     await walsAssociateWebsitePage.assertContainTextLabel(walsAssociateWebsitePage.membershipsLocLblHeading, 'Comment ça fonctionne');
    //   });
    //   await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
    //     await walsAssociateWebsitePage.aboutPageLocLogo.click();
    //     await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
    //     await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText(
    //       'Une couverture simple et intelligente, ça commence ici!'
    //     );
    //   });
    // });
    // test(`${stte.name} User s able to click on Déclaration des droits des membres sub-menu item`, async () => {
    //   test.slow;
    //   await test.step('Navigate to legalshield WALS site', async () => {
    //     await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
    //   });
    //   await test.step('Choose a region', async () => {
    //     await walsAssociateWebsitePage.changeRegion(stte.name);
    //     await walsAssociateWebsitePage.listPans();
    //   });
    //   await test.step('Déclaration des droits des membres sub-menu item', async () => {
    //     await walsAssociateWebsitePage.menuItems('Abonnements', 'Déclaration des droits des membres');
    //   });

    //   await test.step('Confirm Déclaration des droits des membres page', async () => {
    //     await walsAssociateWebsitePage.assertContainTextLabel(
    //       walsAssociateWebsitePage.membershipsLocLblHeading,
    //       'Déclaration des droits des membres'
    //     );
    //   });
    //   await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
    //     await walsAssociateWebsitePage.aboutPageLocLogo.click();
    //     await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
    //     await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText(
    //       'Une couverture simple et intelligente, ça commence ici!'
    //     );
    //   });
    // });
    // test(`${stte.name} User s able to click on Supplément entreprise à domicile sub-menu item`, async () => {
    //   test.slow;
    //   await test.step('Navigate to legalshield WALS site', async () => {
    //     await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
    //   });
    //   await test.step('Choose a region', async () => {
    //     await walsAssociateWebsitePage.changeRegion(stte.name);
    //     await walsAssociateWebsitePage.listPans();
    //   });
    //   await test.step('Supplément entreprise à domicile sub-menu item', async () => {
    //     await walsAssociateWebsitePage.menuItems('Abonnements', 'Supplément entreprise à domicile');
    //   });

    //   await test.step('Confirm Supplément entreprise à domicile page', async () => {
    //     await walsAssociateWebsitePage.assertContainTextLabel(walsAssociateWebsitePage.membershipsLocLblHeading, 'Supplément entreprise à domicile');
    //   });
    //   await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
    //     await walsAssociateWebsitePage.aboutPageLocLogo.click();
    //     await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
    //     await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText(
    //       'Une couverture simple et intelligente, ça commence ici!'
    //     );
    //   });
    // });
    // test(`${stte.name} User s able to click on Supplément pour la défense du procès sub-menu item`, async () => {
    //   test.slow;
    //   await test.step('Navigate to legalshield WALS site', async () => {
    //     await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
    //   });
    //   await test.step('Choose a region', async () => {
    //     await walsAssociateWebsitePage.changeRegion(stte.name);
    //     await walsAssociateWebsitePage.listPans();
    //   });
    //   await test.step('Supplément pour la défense du procès sub-menu item', async () => {
    //     await walsAssociateWebsitePage.menuItems('Abonnements', 'Supplément pour la défense du procès');
    //   });

    //   await test.step('Confirm Supplément pour la défense du procès page', async () => {
    //     await walsAssociateWebsitePage.assertContainTextLabel(
    //       walsAssociateWebsitePage.membershipsLocLblHeading,
    //       'Supplément pour la défense du procès'
    //     );
    //   });
    //   await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
    //     await walsAssociateWebsitePage.aboutPageLocLogo.click();
    //     await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
    //     await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText(
    //       'Une couverture simple et intelligente, ça commence ici!'
    //     );
    //   });
    // });
    // test(`${stte.name} User s able to click on Supplément de livraison de covoiturage sub-menu item`, async () => {
    //   test.slow;
    //   await test.step('Navigate to legalshield WALS site', async () => {
    //     await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
    //   });
    //   await test.step('Choose a region', async () => {
    //     await walsAssociateWebsitePage.changeRegion(stte.name);
    //     await walsAssociateWebsitePage.listPans();
    //   });
    //   await test.step('Supplément de livraison de covoiturage sub-menu item', async () => {
    //     await walsAssociateWebsitePage.menuItems('Abonnements', 'Supplément de livraison de covoiturage');
    //   });

    //   await test.step('Confirm Supplément de livraison de covoiturage page', async () => {
    //     await walsAssociateWebsitePage.assertContainTextLabel(
    //       walsAssociateWebsitePage.membershipsLocLblHeading,
    //       'Supplément de livraison de covoiturage'
    //     );
    //   });
    //   await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
    //     await walsAssociateWebsitePage.aboutPageLocLogo.click();
    //     await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
    //     await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText(
    //       'Une couverture simple et intelligente, ça commence ici!'
    //     );
    //   });
    // });
    test(`${stte.name} User s able to click on IDShield sub-menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
        await walsAssociateWebsitePage.listPans();
      });
      await test.step('IDShield sub-menu item', async () => {
        await walsAssociateWebsitePage.menuItems('Abonnements', 'IDShield');
      });

      await test.step('Confirm IDShield page', async () => {
        await walsAssociateWebsitePage.assertContainTextLabel(
          walsAssociateWebsitePage.membershipsLocLblHeading,
          'Your Privacy is Your Business. Protecting it is Ours.'
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
    // test(`${stte.name} User s able to click on Legal + Identity Dual Plan sub-menu item`, async () => {
    //   test.slow;
    //   await test.step('Navigate to legalshield WALS site', async () => {
    //     await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
    //   });
    //   await test.step('Choose a region', async () => {
    //     await walsAssociateWebsitePage.changeRegion(stte.name);
    //     await walsAssociateWebsitePage.listPans();
    //   });
    //   await test.step('Legal + Identity Dual Plan sub-menu item', async () => {
    //     await walsAssociateWebsitePage.menuItems('Abonnements', 'Legal + Identity Dual Plan');
    //   });

    //   await test.step('Confirm Legal + Identity Dual Plan page', async () => {
    //     await walsAssociateWebsitePage.assertContainTextLabel(
    //       walsAssociateWebsitePage.membershipsLocLblHeading,
    //       'Notre mission est de protéger et de responsabiliser les gens avec les outils et les services nécessaires pour mener une vie juste et sûre à un prix abordable.'
    //     );
    //   });
    //   await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
    //     await walsAssociateWebsitePage.aboutPageLocLogo.click();
    //     await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
    //     await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText(
    //       'Une couverture simple et intelligente, ça commence ici!'
    //     );
    //   });
    // });
    // test(`${stte.name} User s able to click on Petite Entreprise sub-menu item`, async () => {
    //   test.slow;
    //   await test.step('Navigate to legalshield WALS site', async () => {
    //     await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
    //   });
    //   await test.step('Choose a region', async () => {
    //     await walsAssociateWebsitePage.changeRegion(stte.name);
    //     await walsAssociateWebsitePage.listPans();
    //   });
    //   await test.step('Petite Entreprise sub-menu item', async () => {
    //     await walsAssociateWebsitePage.menuItems('Abonnements', 'Petite Entreprise');
    //   });

    //   await test.step('Confirm Petite Entreprise page', async () => {
    //     await walsAssociateWebsitePage.assertContainTextLabel(
    //       walsAssociateWebsitePage.membershipsLocLblHeading,
    //       'Conseils juridiques pour votre entreprise'
    //     );
    //   });
    //   await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
    //     await walsAssociateWebsitePage.aboutPageLocLogo.click();
    //     await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
    //     await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText(
    //       'Une couverture simple et intelligente, ça commence ici!'
    //     );
    //   });
    // });
    // test(`${stte.name} User is able to click on Comment ça fonctionne sub-menu item`, async () => {
    //   test.slow;
    //   await test.step('Navigate to legalshield WALS site', async () => {
    //     await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
    //   });
    //   await test.step('Choose a region', async () => {
    //     await walsAssociateWebsitePage.changeRegion(stte.name);
    //     await walsAssociateWebsitePage.listPans();
    //   });
    //   await test.step('Comment ça fonctionne sub-menu item', async () => {
    //     await walsAssociateWebsitePage.menuItems('Abonnements', 'Comment ça fonctionne');
    //   });

    //   await test.step('Confirm Comment ça fonctionne page', async () => {
    //     await walsAssociateWebsitePage.assertContainTextLabel(walsAssociateWebsitePage.membershipsLocLblHeading, 'Comment ça fonctionne');
    //   });
    //   await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
    //     await walsAssociateWebsitePage.aboutPageLocLogo.click();
    //     await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
    //     await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText(
    //       'Une couverture simple et intelligente, ça commence ici!'
    //     );
    //   });
    // });
    // test(`${stte.name} User is able to click on Supplément Business Plus sub-menu item`, async () => {
    //   test.slow;
    //   await test.step('Navigate to legalshield WALS site', async () => {
    //     await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
    //   });
    //   await test.step('Choose a region', async () => {
    //     await walsAssociateWebsitePage.changeRegion(stte.name);
    //     await walsAssociateWebsitePage.listPans();
    //   });
    //   await test.step('Supplément Business Plus sub-menu item', async () => {
    //     await walsAssociateWebsitePage.menuItems('Abonnements', 'Supplément Business Plus');
    //   });

    //   await test.step('Confirm Supplément Business Plus page', async () => {
    //     await walsAssociateWebsitePage.assertContainTextLabel(walsAssociateWebsitePage.membershipsLocLblHeading, 'Supplément Business Plus');
    //   });
    //   await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
    //     await walsAssociateWebsitePage.aboutPageLocLogo.click();
    //     await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
    //     await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText(
    //       'Une couverture simple et intelligente, ça commence ici!'
    //     );
    //   });
    // });
    // test(`${stte.name} User is able to click on Supplément de défense contre les procès commerciaux sub-menu item`, async () => {
    //   test.slow;
    //   await test.step('Navigate to legalshield WALS site', async () => {
    //     await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlAppTestUserFrCa);
    //   });
    //   await test.step('Choose a region', async () => {
    //     await walsAssociateWebsitePage.changeRegion(stte.name);
    //     await walsAssociateWebsitePage.listPans();
    //   });
    //   await test.step('Supplément de défense contre les procès commerciaux sub-menu item', async () => {
    //     await walsAssociateWebsitePage.menuItems('Abonnements', 'Supplément de défense contre les procès commerciaux');
    //   });

    //   await test.step('Confirm Supplément de défense contre les procès commerciaux page', async () => {
    //     await walsAssociateWebsitePage.assertContainTextLabel(
    //       walsAssociateWebsitePage.membershipsLocLblHeading,
    //       'Défense de procès pour les entreprises'
    //     );
    //   });
    //   await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
    //     await walsAssociateWebsitePage.aboutPageLocLogo.click();
    //     await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
    //     await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText(
    //       'Une couverture simple et intelligente, ça commence ici!'
    //     );
    //   });
    // });
  }
});
