import { test } from '@playwright/test';
import { WeAreLegalShieldPage } from '../../../page-objects/wals/wals-we-are-legalshield.page';
import UrlsUtils from '../../../utils/urls.utils';
import RegionsUtils from '../../../utils/regions.utils';
// define the instance of Page declarationlet
let walsAssociateSearchPage: WeAreLegalShieldPage;
// Setup environment before each test
test.beforeEach(async ({ page }) => {
  test.slow();
  walsAssociateSearchPage = new WeAreLegalShieldPage(page);
});
for (const stte of RegionsUtils.usStates.filter((ste) => ste.name == 'New York')) {
  test(`${stte.name} User is able to click on  Profiles of Success an Search by State`, async () => {
    test.slow;
    await test.step('Navigate to URL', async () => {
      await walsAssociateSearchPage.navigateToUrl(UrlsUtils.wals.urls.urlAssociate);
    });
    await test.step('Click on Profiles of Success and search for State', async () => {
      await walsAssociateSearchPage.clickOnNavigationMenuTab('Profiles of Success');
      await walsAssociateSearchPage.searchForAssociate(stte.name);
    });
    await test.step('Assert label sales associate', async () => {
      await walsAssociateSearchPage.assertReadFullBioText();
    });
    await test.step('Assert title', async () => {
      await walsAssociateSearchPage.assertPageTitle('Profiles of Success Search | We Are LegalShield');
    });
  });
}
for (const stte of RegionsUtils.usSpanishStates.filter((ste) => ste.name == 'California')) {
  test(`${stte.name} User is able to click on  Profiles of Success an Search by State For Spanish`, async () => {
    test.slow;
    await test.step('Navigate to URL', async () => {
      await walsAssociateSearchPage.navigateToUrl(UrlsUtils.wals.urls.urlSomos);
    });
    await test.step('Click on Profiles of Success and search for State', async () => {
      await walsAssociateSearchPage.clickOnNavigationMenuTab(' Perfiles del éxito ');
      await walsAssociateSearchPage.searchForAssociate(stte.name);
    });
    await test.step('Assert label sales associate', async () => {
      await walsAssociateSearchPage.assertReadFullBioText();
    });
    await test.step('Assert title', async () => {
      await walsAssociateSearchPage.assertPageTitle('Búsqueda de asociados | Somos LegalShield');
    });
  });
}
for (const stte of RegionsUtils.caFrenchProvinces.filter((ste) => ste.name == 'Québec')) {
  test(`${stte.name} User is able to click on  Profiles of Success an Search by State For Dame de Justice`, async () => {
    test.slow;
    await test.step('Navigate to URL', async () => {
      await walsAssociateSearchPage.navigateToUrl(UrlsUtils.wals.urls.urlDamesDeJustice);
    });
    await test.step('Click on Profiles of Success and search for State', async () => {
      await walsAssociateSearchPage.clickOnNavigationMenuTab('Profils de réussite');
      await walsAssociateSearchPage.searchForAssociate(stte.name);
    });
    await test.step('Assert label sales associate', async () => {
      await walsAssociateSearchPage.assertReadFullBioText();
    });
    await test.step('Assert title', async () => {
      await walsAssociateSearchPage.assertPageTitle('Profils de recherche de succès | Nous sommes LegalShield');
    });
  });
}
for (const stte of RegionsUtils.usStates.filter((ste) => ste.name == 'Texas')) {
  test(`${stte.name} User is able to click on  Profiles of Success an Search by State For Ladies of Justice US`, async () => {
    test.slow;
    await test.step('Navigate to URL', async () => {
      await walsAssociateSearchPage.navigateToUrl(UrlsUtils.wals.urls.urlLadies);
    });
    await test.step('Click on Profiles of Success and search for State', async () => {
      await walsAssociateSearchPage.clickOnNavigationMenuTab('Profiles of Success');
      await walsAssociateSearchPage.searchForAssociate(stte.name);
    });
    await test.step('Assert label sales associate', async () => {
      await walsAssociateSearchPage.assertReadFullBioText();
    });
    await test.step('Assert title', async () => {
      await walsAssociateSearchPage.assertPageTitle('Profiles of Success Search | We Are LegalShield');
    });
  });
}
for (const stte of RegionsUtils.caProvinces.filter((ste) => ste.name == 'British Columbia')) {
  test(`${stte.name} User is able to click on  Profiles of Success an Search by State For Ladies of Justice CA`, async () => {
    test.slow;
    await test.step('Navigate to URL', async () => {
      await walsAssociateSearchPage.navigateToUrl(UrlsUtils.wals.urls.urlLadiesCa);
    });
    await test.step('Click on Profiles of Success and search for State', async () => {
      await walsAssociateSearchPage.clickOnNavigationMenuTab('Profiles of Success');
      await walsAssociateSearchPage.searchForAssociate(stte.name);
    });
    await test.step('Assert label sales associate', async () => {
      await walsAssociateSearchPage.assertReadFullBioText();
    });
    await test.step('Assert title', async () => {
      await walsAssociateSearchPage.assertPageTitle('Profiles of Success Search | We Are LegalShield');
    });
  });
}
for (const stte of RegionsUtils.caFrenchProvinces.filter((ste) => ste.name == 'Alberta')) {
  test(`${stte.name} User is able to click on  Profiles of Success an Search by State For Nous Sommes Legalshield CA`, async () => {
    test.slow;
    await test.step('Navigate to URL', async () => {
      await walsAssociateSearchPage.navigateToUrl(UrlsUtils.wals.urls.urlNous);
    });
    await test.step('Click on Profiles of Success and search for State', async () => {
      await walsAssociateSearchPage.clickOnNavigationMenuTab('Profils de réussite');
      await walsAssociateSearchPage.searchForAssociate(stte.name);
    });
    await test.step('Assert label sales associate', async () => {
      await walsAssociateSearchPage.assertReadFullBioText();
    });
    await test.step('Assert title', async () => {
      await walsAssociateSearchPage.assertPageTitle('Profils de recherche de succès | Nous sommes LegalShield');
    });
  });
}
for (const stte of RegionsUtils.caProvinces.filter((ste) => ste.name == 'Manitoba')) {
  test(`${stte.name} User is able to click on  Profiles of Success an Search by State`, async ({ page }) => {
    test.slow;
    await test.step('Navigate to URL', async () => {
      await walsAssociateSearchPage.navigateToUrl(UrlsUtils.wals.urls.urlEnCanada);
    });
    await test.step('Click on Profiles of Success and search for State', async () => {
      await walsAssociateSearchPage.clickOnNavigationMenuTab('Profiles of Success');
      await walsAssociateSearchPage.searchForAssociate(stte.name);
    });
    await test.step('Assert label sales associate', async () => {
      await walsAssociateSearchPage.assertReadFullBioText();
    });
    await test.step('Assert title', async () => {
      await walsAssociateSearchPage.assertPageTitle('Profiles of Success Search | We Are LegalShield');
    });
  });
}
