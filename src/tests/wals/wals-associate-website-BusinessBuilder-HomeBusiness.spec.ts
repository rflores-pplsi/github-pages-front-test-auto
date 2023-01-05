import { test } from '@playwright/test';
import { Page } from 'playwright-core';
import DataUtils from '../../utils/Tests.Data';
import * as dotenv from 'dotenv';
import { WalsAssociateWebsitePage } from '../../page-objects-refactored/wals/wals-associate-website.page';
import UrlsUtils from '../../utils/urls.utils';
import RegionsUtils from '../../utils/regions.utils';
dotenv.config();

let page: Page;
let walsAssociateWebsitePage: WalsAssociateWebsitePage;

// test.describe('Somos legalshield', () => {
//   test.beforeEach(async ({ page }) => {
//     walsAssociateWebsitePage = new WalsAssociateWebsitePage(page);
//     test.slow();
//   });
//   for (const stte of RegionsUtils.usSpanishStates) {
//     test(`${stte.name} User is able to purchase Associate Startup for Business at $49 instead of $99 in`, async () => {
//       test.slow;
//       await test.step('Navigate to legalshield marketing site', async () => {
//         await walsAssociateWebsitePage.navigateToEnglishWalsUSPage(UrlsUtils.wals.urls.urlAppTestUserSpUS);
//       });
//       await test.step('Choose a region', async () => {
//         await walsAssociateWebsitePage.changeStateinformation(stte.name);
//       });
//       await test.step('Business Builder', async () => {
//         await walsAssociateWebsitePage.businessBuilder();
//       });
//       await test.step('Pick a plan', async () => {
//         test.slow;
//         await walsAssociateWebsitePage.associateWebsiteLocBtnBusinessBuilderGetAPlan.click();
//         // await (await walsAssociateWebsitePage.associateWebsiteRdBtn(6)).click();
//         await walsAssociateWebsitePage.associateWebsiteLocChkBAddHomeBusinessSupplement.waitFor();
//         await walsAssociateWebsitePage.associateWebsiteLocChkBAddHomeBusinessSupplement.click({ force: true });
//         await walsAssociateWebsitePage.associateWebsiteLocBtnNext.click();
//         await (await walsAssociateWebsitePage.associateWebsiteRdBtn(8)).click();
//         await walsAssociateWebsitePage.associateWebsiteLocBtnNextWithForm.click();
//         await (await walsAssociateWebsitePage.associateWebsiteRdBtn(9)).click();
//         await walsAssociateWebsitePage.associateWebsiteLocBtnContinueWithForm.click();
//         await walsAssociateWebsitePage.associateWebsiteLocBtnCheckout.click();
//       });
//       await test.step('Fill out personal, security info, and family info', async () => {
//         await walsAssociateWebsitePage.filloutSpanishUsContactInformationForm(stte.name, 'enepa@gmail.com', 'TesterF', 'TesterL', '5714001234', '2');
//         await walsAssociateWebsitePage.filloutSecurityInfo('01011999', '5555');
//         await walsAssociateWebsitePage.filloutFamilyCoverageInfo('TesterDependF', 'TesterdependL', '01011999', 'Dependent', 'dep@gmail.com');
//         try {
//           await walsAssociateWebsitePage.associateWebsiteLocBtnContinuePersonalInfoForm.click();
//         } catch (error) {
//           page.keyboard.press('Tab');
//           page.keyboard.press('Enter');
//         }
//       });
//       await test.step('Create user', async () => {
//         await walsAssociateWebsitePage.createAUser('Hello@358!', 'Hello@358!');
//       });
//       await test.step('Use a Check', async () => {
//         await walsAssociateWebsitePage.commissionOptions();
//       });
//       await test.step('Verify the one time fee and total due today prices ', async () => {
//         await walsAssociateWebsitePage.assertCartSummary('$49.00', '$49.00');
//       });
//       await test.step('Use bank draft payment method', async () => {
//         await walsAssociateWebsitePage.filloutBankAccountInfo(
//           DataUtils.data.testingHarness.us.bd.name,
//           DataUtils.data.testingHarness.us.bd.Routing,
//           DataUtils.data.testingHarness.us.bd.Account
//         );
//       });
//       await test.step('Confirm payment', async () => {
//         await walsAssociateWebsitePage.assertWelcomelabel('Welcome to the LegalShield Family!');
//       });
//     });
//   }
// });
test.describe('Test We are LegalShield', () => {
  test.beforeEach(async ({ page }) => {
    walsAssociateWebsitePage = new WalsAssociateWebsitePage(page);
    test.slow();
  });
  for (const stte of RegionsUtils.usStates) {
    test(`${stte.name} User is able to purchase Associate Startup for Business at $49 instead of $99`, async () => {
      test.slow;
      await test.step('Navigate to legalshield marketing site', async () => {
        await walsAssociateWebsitePage.navigateToEnglishWalsUSPage(UrlsUtils.wals.urls.urlEnUS);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeStateinformation(stte.name);
      });
      await test.step('Business Builder', async () => {
        await walsAssociateWebsitePage.businessBuilder();
      });
      await test.step('Pick a plan', async () => {
        test.slow;
        await walsAssociateWebsitePage.associateWebsiteLocBtnBusinessBuilderGetAPlan.click();
        // await (await walsAssociateWebsitePage.associateWebsiteRdBtn(6)).click();
        await walsAssociateWebsitePage.associateWebsiteLocChkBAddHomeBusinessSupplement.waitFor();
        await walsAssociateWebsitePage.associateWebsiteLocChkBAddHomeBusinessSupplement.click({ force: true });
        await walsAssociateWebsitePage.associateWebsiteLocBtnNext.click();
        await (await walsAssociateWebsitePage.associateWebsiteRdBtn(8)).click();
        await walsAssociateWebsitePage.associateWebsiteLocBtnNextWithForm.click();
        await (await walsAssociateWebsitePage.associateWebsiteRdBtn(9)).click();
        await walsAssociateWebsitePage.associateWebsiteLocBtnContinueWithForm.click();
        await walsAssociateWebsitePage.associateWebsiteLocBtnCheckout.click();
      });
      await test.step('Fill out personal, security info, and family info', async () => {
        await walsAssociateWebsitePage.filloutUsContactInformationForm(stte.name, 'enepa@gmail.com', 'TesterF', 'TesterL', '5714001234', '2');
        await walsAssociateWebsitePage.filloutSecurityInfo('01011999', '5555');
        await walsAssociateWebsitePage.filloutFamilyCoverageInfo('TesterDependF', 'TesterdependL', '01011999', 'Dependent', 'dep@gmail.com');
        try {
          await walsAssociateWebsitePage.associateWebsiteLocBtnContinuePersonalInfoForm.click();
        } catch (error) {
          page.keyboard.press('Tab');
          page.keyboard.press('Enter');
        }
      });
      await test.step('Create user', async () => {
        await walsAssociateWebsitePage.createAUser('Hello@358!', 'Hello@358!');
      });
      await test.step('Use a Check', async () => {
        await walsAssociateWebsitePage.commissionOptions();
      });
      await test.step('Verify the one time fee and total due today prices ', async () => {
        await walsAssociateWebsitePage.assertCartSummary('$49.00', '$128.85');
      });
      await test.step('Use bank draft payment method', async () => {
        await walsAssociateWebsitePage.filloutBankAccountInfo(
          DataUtils.data.testingHarness.us.bd.name,
          DataUtils.data.testingHarness.us.bd.Routing,
          DataUtils.data.testingHarness.us.bd.Account
        );
      });
      await test.step('Confirm payment', async () => {
        await walsAssociateWebsitePage.assertWelcomelabel('Welcome to the LegalShield Family!');
      });
    });
  }
});
test.describe('Test nous sommes legalshield.ca', () => {
  test.beforeEach(async ({ page }) => {
    walsAssociateWebsitePage = new WalsAssociateWebsitePage(page);
    test.slow();
  });
  for (const stte of RegionsUtils.caFrenchProvinces) {
    test.fixme(`${stte.name} User is able to purchase Associate Startup for Business at $49 instead of $99`, async () => {
      test.slow;
      await test.step('Navigate to legalshield CA marketing site', async () => {
        await walsAssociateWebsitePage.navigateToEnglishWalsUSPage(UrlsUtils.wals.urls.urlAppTestUserFrCa);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeStateinformation(stte.name);
      });
      await test.step('Business Builder', async () => {
        await walsAssociateWebsitePage.businessBuilder();
      });
      await test.step('Pick a plan', async () => {
        test.slow;
        await walsAssociateWebsitePage.associateWebsiteLocBtnBusinessBuilderGetAPlan.click();
        // await (await walsAssociateWebsitePage.associateWebsiteRdBtn(6)).click();
        await walsAssociateWebsitePage.associateWebsiteLocChkBAddHomeBusinessSupplement.waitFor();
        await walsAssociateWebsitePage.associateWebsiteLocChkBAddHomeBusinessSupplement.click({ force: true });
        await walsAssociateWebsitePage.associateWebsiteLocBtnNext.click();
        await (await walsAssociateWebsitePage.associateWebsiteRdBtn(8)).click();
        await walsAssociateWebsitePage.associateWebsiteLocBtnNextWithForm.click();
        await (await walsAssociateWebsitePage.associateWebsiteRdBtn(9)).click();
        await walsAssociateWebsitePage.associateWebsiteLocBtnContinueWithForm.click();
        await walsAssociateWebsitePage.associateWebsiteLocBtnCheckout.click();
      });
      await test.step('Fill out personal, security info, and family info', async () => {
        await walsAssociateWebsitePage.filloutFrenchCaContactInformationForm(stte.name, 'enepa@gmail.com', 'TesterF', 'TesterL', '5714001234', '2');
        await walsAssociateWebsitePage.filloutSecurityInfo('01011999', '5555');
        await walsAssociateWebsitePage.filloutFamilyCoverageInfo('TesterDependF', 'TesterdependL', '01011999', 'Dépendant', 'dep@gmail.com');
        try {
          await walsAssociateWebsitePage.associateWebsiteLocBtnContinuePersonalInfoForm.click();
        } catch (error) {
          page.keyboard.press('Tab');
          page.keyboard.press('Enter');
        }
      });
      await test.step('Create user', async () => {
        await walsAssociateWebsitePage.createAUser('Hello@358!', 'Hello@358!');
      });
      await test.step('Use a Check', async () => {
        await walsAssociateWebsitePage.commissionOptions();
      });
      await test.step('Verify the one time fee and total due today prices ', async () => {
        await walsAssociateWebsitePage.assertCartSummary('$49.00', '$126.85');
      });
      await test.step('Use bank draft payment method', async () => {
        await walsAssociateWebsitePage.filloutCABankAccountInfo(
          DataUtils.data.testingHarness.ca.bd.name,
          DataUtils.data.testingHarness.ca.bd.Transit,
          DataUtils.data.testingHarness.ca.bd.Institution,
          DataUtils.data.testingHarness.ca.bd.Account
        );
      });
      await test.step('Confirm payment', async () => {
        await walsAssociateWebsitePage.assertWelcomelabel('Bienvenue dans la Famille LegalShield!');
      });
    });
  }
});
test.describe('Test We Are legalshield.ca', () => {
  test.beforeEach(async ({ page }) => {
    walsAssociateWebsitePage = new WalsAssociateWebsitePage(page);
    test.slow();
  });
  for (const stte of RegionsUtils.caProvinces.filter((ste) => ste.abbrv == 'QC')) {
    test(`${stte.name} User is able to purchase Associate Startup for Business at $49 instead of $99`, async () => {
      test.slow;
      await test.step('Navigate to legalshield CA marketing site', async () => {
        await walsAssociateWebsitePage.navigateToEnglishWalsUSPage(UrlsUtils.wals.urls.urlAppTestUserEnCa);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeStateinformation(stte.name);
      });
      await test.step('Business Builder', async () => {
        await walsAssociateWebsitePage.businessBuilder();
      });
      await test.step('Pick a plan', async () => {
        test.slow;
        await walsAssociateWebsitePage.associateWebsiteLocBtnBusinessBuilderGetAPlan.click();
        // await (await walsAssociateWebsitePage.associateWebsiteRdBtn(6)).click();
        await walsAssociateWebsitePage.associateWebsiteLocChkBAddHomeBusinessSupplement.waitFor();
        await walsAssociateWebsitePage.associateWebsiteLocChkBAddHomeBusinessSupplement.click({ force: true });
        await walsAssociateWebsitePage.associateWebsiteLocBtnNext.click();
        await (await walsAssociateWebsitePage.associateWebsiteRdBtn(8)).click();
        await walsAssociateWebsitePage.associateWebsiteLocBtnNextWithForm.click();
        await (await walsAssociateWebsitePage.associateWebsiteRdBtn(9)).click();
        await walsAssociateWebsitePage.associateWebsiteLocBtnContinueWithForm.click();
        await walsAssociateWebsitePage.associateWebsiteLocBtnCheckout.click();
      });
      await test.step('Fill out personal, security info, and family info', async () => {
        await walsAssociateWebsitePage.filloutCaContactInformationForm(stte.name, 'enepa@gmail.com', 'TesterF', 'TesterL', '5714001234', '2');
        await walsAssociateWebsitePage.filloutSecurityInfo('01011999', '5555');
        await walsAssociateWebsitePage.filloutFamilyCoverageInfo('TesterDependF', 'TesterdependL', '01011999', 'Dependent', 'dep@gmail.com');
        try {
          await walsAssociateWebsitePage.associateWebsiteLocBtnContinuePersonalInfoForm.click();
        } catch (error) {
          page.keyboard.press('Tab');
          page.keyboard.press('Enter');
        }
      });
      await test.step('Create user', async () => {
        await walsAssociateWebsitePage.createAUser('Hello@358!', 'Hello@358!');
      });
      await test.step('Use a Check', async () => {
        await walsAssociateWebsitePage.commissionOptions();
      });
      await test.step('Verify the one time fee and total due today prices ', async () => {
        await walsAssociateWebsitePage.assertCartSummary('$49.00', '$126.85');
      });
      await test.step('Use bank draft payment method', async () => {
        await walsAssociateWebsitePage.filloutCABankAccountInfo(
          DataUtils.data.testingHarness.ca.bd.name,
          DataUtils.data.testingHarness.ca.bd.Transit,
          DataUtils.data.testingHarness.ca.bd.Institution,
          DataUtils.data.testingHarness.ca.bd.Account
        );
      });
      await test.step('Confirm payment', async () => {
        await walsAssociateWebsitePage.assertWelcomelabel('Welcome to the LegalShield Family!');
      });
    });
  }
});
test.describe('Test Ladies of justice US', () => {
  test.beforeEach(async ({ page }) => {
    walsAssociateWebsitePage = new WalsAssociateWebsitePage(page);
    test.slow();
  });
  for (const stte of RegionsUtils.usStates.filter((ste) => ste.abbrv == 'VA')) {
    test(`${stte.name} User is able to purchase Associate Startup for Business at $49 instead of $99`, async () => {
      test.slow;
      await test.step('Navigate to legalshield marketing site', async () => {
        await walsAssociateWebsitePage.navigateToEnglishWalsUSPage(UrlsUtils.wals.urls.urlAppTestUserLadiesUs);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeStateinformation(stte.name);
      });
      await test.step('Business Builder', async () => {
        await walsAssociateWebsitePage.businessBuilder();
      });
      await test.step('Pick a plan', async () => {
        test.slow;
        await walsAssociateWebsitePage.associateWebsiteLocBtnBusinessBuilderGetAPlan.click();
        // await (await walsAssociateWebsitePage.associateWebsiteRdBtn(6)).click();
        await walsAssociateWebsitePage.associateWebsiteLocChkBAddHomeBusinessSupplement.waitFor();
        await walsAssociateWebsitePage.associateWebsiteLocChkBAddHomeBusinessSupplement.click({ force: true });
        await walsAssociateWebsitePage.associateWebsiteLocBtnNext.click();
        await (await walsAssociateWebsitePage.associateWebsiteRdBtn(8)).click();
        await walsAssociateWebsitePage.associateWebsiteLocBtnNextWithForm.click();
        await (await walsAssociateWebsitePage.associateWebsiteRdBtn(9)).click();
        await walsAssociateWebsitePage.associateWebsiteLocBtnContinueWithForm.click();
        await walsAssociateWebsitePage.associateWebsiteLocBtnCheckout.click();
      });
      await test.step('Fill out personal, security info, and family info', async () => {
        await walsAssociateWebsitePage.filloutUsContactInformationForm(stte.name, 'enepa@gmail.com', 'TesterF', 'TesterL', '5714001234', '2');
        await walsAssociateWebsitePage.filloutSecurityInfo('01011999', '5555');
        await walsAssociateWebsitePage.filloutFamilyCoverageInfo('TesterDependF', 'TesterdependL', '01011999', 'Dependent', 'dep@gmail.com');
        try {
          await walsAssociateWebsitePage.associateWebsiteLocBtnContinuePersonalInfoForm.click();
        } catch (error) {
          page.keyboard.press('Tab');
          page.keyboard.press('Enter');
        }
      });
      await test.step('Create user', async () => {
        await walsAssociateWebsitePage.createAUser('Hello@358!', 'Hello@358!');
      });
      await test.step('Use a Check', async () => {
        await walsAssociateWebsitePage.commissionOptions();
      });
      await test.step('Verify the one time fee and total due today prices ', async () => {
        await walsAssociateWebsitePage.assertCartSummary('$49.00', '$128.85');
      });
      await test.step('Use bank draft payment method', async () => {
        await walsAssociateWebsitePage.filloutBankAccountInfo(
          DataUtils.data.testingHarness.us.bd.name,
          DataUtils.data.testingHarness.us.bd.Routing,
          DataUtils.data.testingHarness.us.bd.Account
        );
      });
      await test.step('Confirm payment', async () => {
        await walsAssociateWebsitePage.assertWelcomelabel('Welcome to the LegalShield Family!');
      });
    });
  }
});
test.describe('Test Dames de justice ca', () => {
  test.beforeEach(async ({ page }) => {
    walsAssociateWebsitePage = new WalsAssociateWebsitePage(page);
    test.slow();
  });
  for (const stte of RegionsUtils.caFrenchProvinces.filter((ste) => ste.abbrv == 'QC')) {
    test(`${stte.name} User is able to purchase Associate Startup for Business at $49 instead of $99`, async () => {
      test.slow;
      await test.step('Navigate to legalshield CA marketing site', async () => {
        await walsAssociateWebsitePage.navigateToEnglishWalsUSPage(UrlsUtils.wals.urls.urlAppTestUserDamesDeJusticeCa);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeStateinformation(stte.name);
      });
      await test.step('Business Builder', async () => {
        await walsAssociateWebsitePage.businessBuilder();
      });
      await test.step('Pick a plan', async () => {
        test.slow;
        await walsAssociateWebsitePage.associateWebsiteLocBtnBusinessBuilderGetAPlan.click();
        // await (await walsAssociateWebsitePage.associateWebsiteRdBtn(6)).click();
        await walsAssociateWebsitePage.associateWebsiteLocChkBAddHomeBusinessSupplement.waitFor();
        await walsAssociateWebsitePage.associateWebsiteLocChkBAddHomeBusinessSupplement.click({ force: true });
        await walsAssociateWebsitePage.associateWebsiteLocBtnNext.click();
        await (await walsAssociateWebsitePage.associateWebsiteRdBtn(8)).click();
        await walsAssociateWebsitePage.associateWebsiteLocBtnNextWithForm.click();
        await (await walsAssociateWebsitePage.associateWebsiteRdBtn(9)).click();
        await walsAssociateWebsitePage.associateWebsiteLocBtnContinueWithForm.click();
        await walsAssociateWebsitePage.associateWebsiteLocBtnCheckout.click();
      });
      await test.step('Fill out personal, security info, and family info', async () => {
        await walsAssociateWebsitePage.filloutFrenchCaContactInformationForm(stte.name, 'enepa@gmail.com', 'TesterF', 'TesterL', '5714001234', '2');
        await walsAssociateWebsitePage.filloutSecurityInfo('01011999', '5555');
        await walsAssociateWebsitePage.filloutFamilyCoverageInfo('TesterDependF', 'TesterdependL', '01011999', 'Dépendant', 'dep@gmail.com');
        try {
          await walsAssociateWebsitePage.associateWebsiteLocBtnContinuePersonalInfoForm.click();
        } catch (error) {
          page.keyboard.press('Tab');
          page.keyboard.press('Enter');
        }
      });
      await test.step('Create user', async () => {
        await walsAssociateWebsitePage.createAUser('Hello@358!', 'Hello@358!');
      });
      await test.step('Use a Check', async () => {
        await walsAssociateWebsitePage.commissionOptions();
      });
      await test.step('Verify the one time fee and total due today prices ', async () => {
        await walsAssociateWebsitePage.assertCartSummary('$49.00', '121.85');
      });
      await test.step('Use bank draft payment method', async () => {
        await walsAssociateWebsitePage.filloutCABankAccountInfo(
          DataUtils.data.testingHarness.ca.bd.name,
          DataUtils.data.testingHarness.ca.bd.Transit,
          DataUtils.data.testingHarness.ca.bd.Institution,
          DataUtils.data.testingHarness.ca.bd.Account
        );
      });
      await test.step('Confirm payment', async () => {
        await walsAssociateWebsitePage.assertWelcomelabel('Bienvenue dans la Famille LegalShield!');
      });
    });
  }
});
test.describe('Test Ladies of justice ca', () => {
  test.beforeEach(async ({ page }) => {
    walsAssociateWebsitePage = new WalsAssociateWebsitePage(page);
    test.slow();
  });
  for (const stte of RegionsUtils.caProvinces.filter((ste) => ste.abbrv == 'QC')) {
    test(`${stte.name} User is able to purchase Associate Startup for Business at $49 instead of $99`, async () => {
      test.slow;
      await test.step('Navigate to legalshield CA marketing site', async () => {
        await walsAssociateWebsitePage.navigateToEnglishWalsUSPage(UrlsUtils.wals.urls.urlAppTestUserLadiesCa);
      });
      await test.step('Choose a region', async () => {
        await walsAssociateWebsitePage.changeStateinformation(stte.name);
      });
      await test.step('Business Builder', async () => {
        await walsAssociateWebsitePage.businessBuilder();
      });
      await test.step('Pick a plan', async () => {
        test.slow;
        await walsAssociateWebsitePage.associateWebsiteLocBtnBusinessBuilderGetAPlan.click();
        // await (await walsAssociateWebsitePage.associateWebsiteRdBtn(6)).click();
        await walsAssociateWebsitePage.associateWebsiteLocChkBAddHomeBusinessSupplement.waitFor();
        await walsAssociateWebsitePage.associateWebsiteLocChkBAddHomeBusinessSupplement.click({ force: true });
        await walsAssociateWebsitePage.associateWebsiteLocBtnNext.click();
        await (await walsAssociateWebsitePage.associateWebsiteRdBtn(8)).click();
        await walsAssociateWebsitePage.associateWebsiteLocBtnNextWithForm.click();
        await (await walsAssociateWebsitePage.associateWebsiteRdBtn(9)).click();
        await walsAssociateWebsitePage.associateWebsiteLocBtnContinueWithForm.click();
        await walsAssociateWebsitePage.associateWebsiteLocBtnCheckout.click();
      });
      await test.step('Fill out personal, security info, and family info', async () => {
        await walsAssociateWebsitePage.filloutCaContactInformationForm(stte.name, 'enepa@gmail.com', 'TesterF', 'TesterL', '5714001234', '2');
        await walsAssociateWebsitePage.filloutSecurityInfo('01011999', '5555');
        await walsAssociateWebsitePage.filloutFamilyCoverageInfo('TesterDependF', 'TesterdependL', '01011999', 'Dependent', 'dep@gmail.com');
        try {
          await walsAssociateWebsitePage.associateWebsiteLocBtnContinuePersonalInfoForm.click();
        } catch (error) {
          page.keyboard.press('Tab');
          page.keyboard.press('Enter');
        }
      });
      await test.step('Create user', async () => {
        await walsAssociateWebsitePage.createAUser('Hello@358!', 'Hello@358!');
      });
      await test.step('Use a Check', async () => {
        await walsAssociateWebsitePage.commissionOptions();
      });
      await test.step('Verify the one time fee and total due today prices ', async () => {
        await walsAssociateWebsitePage.assertCartSummary('$49.00', '$121.85');
      });
      await test.step('Use bank draft payment method', async () => {
        await walsAssociateWebsitePage.filloutCABankAccountInfo(
          DataUtils.data.testingHarness.ca.bd.name,
          DataUtils.data.testingHarness.ca.bd.Transit,
          DataUtils.data.testingHarness.ca.bd.Institution,
          DataUtils.data.testingHarness.ca.bd.Account
        );
      });
      await test.step('Confirm payment', async () => {
        await walsAssociateWebsitePage.assertWelcomelabel('Welcome to the LegalShield Family!');
      });
    });
  }
});
