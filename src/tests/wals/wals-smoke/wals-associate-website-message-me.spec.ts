import { expect, test } from '@playwright/test';
import * as dotenv from 'dotenv';
import { WalsAssociateWebsitePage } from '../../../page-objects/wals/wals-associate-website.page';
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
    test(`${stte.name} User s able to click on  Nosotros  menu item`, async () => {
      test.slow;
      await test.step('Navigate to legalshield WALS site', async () => {
        await walsAssociateWebsitePage.navigateToUrl(UrlsUtils.wals.urls.urlSpUS);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeRegion(stte.name);
      });
      await test.step('Click on Message me link, then fillout the form', async () => {
        await walsAssociateWebsitePage.associateWebsiteLocLnkMessageMe.click();
        await walsAssociateWebsitePage.filloutMessageMeForm('Abdel', 'M', '2223334444', '8am-11am', 'ad@yahoo.com', 'Test message');
      });

      await test.step('Confirm that message has been sent!', async () => {
        await walsAssociateWebsitePage.associateWebsiteLocMsgConfirmationMessage.waitFor();
        await expect(walsAssociateWebsitePage.associateWebsiteLocMsgConfirmationMessage).toHaveText(
          '¡Su información ha sido enviada! Nos pondremos en contacto con usted pronto.'
        );
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocLogo.waitFor();
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
      await test.step('Click on Message me link, then fillout the form', async () => {
        await walsAssociateWebsitePage.associateWebsiteLocLnkMessageMe.click();
        await walsAssociateWebsitePage.filloutMessageMeForm('Abdel', 'M', '2223334444', '8am-11am', 'ad@yahoo.com', 'Test message');
      });

      await test.step('Confirm that message has been sent!', async () => {
        await walsAssociateWebsitePage.associateWebsiteLocMsgConfirmationMessage.waitFor();
        await expect(walsAssociateWebsitePage.associateWebsiteLocMsgConfirmationMessage).toHaveText(
          'Your information has been sent! We will contact you soon.'
        );
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocLogo.click();
        await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText('Smart, Simple Coverage Starts Here');
        await walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage.waitFor();
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
      await test.step('Click on Message me link, then fillout the form', async () => {
        await walsAssociateWebsitePage.associateWebsiteLocLnkMessageMe.click();
        await walsAssociateWebsitePage.filloutMessageMeForm('Abdel', 'M', '2223334444', '8am-11am', 'ad@yahoo.com', 'Test message');
      });

      await test.step('Confirm that message has been sent!', async () => {
        await walsAssociateWebsitePage.associateWebsiteLocMsgConfirmationMessage.waitFor();
        await expect(walsAssociateWebsitePage.associateWebsiteLocMsgConfirmationMessage).toHaveText(
          'Vos informations ont été envoyées! Nous vous contacterons bientôt.'
        );
      });
      await test.step('Verify that user navigates back to home page by clicking on the logo', async () => {
        await walsAssociateWebsitePage.aboutPageLocLogo.click();
        await expect(walsAssociateWebsitePage.associateWebsiteLocLblSmartSimpleCoverage).toHaveText('Smart, Simple Coverage Starts Here');
      });
    });
  }
});
