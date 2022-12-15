import { test } from '@playwright/test';
import { WeAreLegalShieldPage } from '../../page-objects-refactored/wals/wals-we-are-legalshield.page';
import UrlsUtils from '../../utils/urls.utils';

// define the instance of Page declaration
let walsAssociateSearchPage: WeAreLegalShieldPage;
test.describe('Test We are LegalShield', () => {
  // Setup environment before each test
  test.beforeEach(async ({ page }) => {
    test.slow();
    walsAssociateSearchPage = new WeAreLegalShieldPage(page);
    await walsAssociateSearchPage.navigateToUrl(UrlsUtils.wals.urls.urlAssociate);
  });
  test.only("When I type in Jessen in the search box and click search, I'll be directed to https://www.wearelegalshield.com/opportunity/search?search_api_fulltext=Jessen", async () => {
    await test.step('Search for associate', async () => {
      await walsAssociateSearchPage.searchForAssociate('Jessen');
    });
    await test.step('Assert url https://www.wearelegalshield.com/opportunity/search?search_api_fulltext=Jessen   ', async () => {
      await walsAssociateSearchPage.WeAreLegalShieldAssertUrl(UrlsUtils.wals.urls.urlAssociate + '/results?queryParam=Jessen');
    });
  });
  test('When I type in a name in the search box and click search, I am given a result and can view the associates website.', async () => {
    await test.step('Search for associate', async () => {
      await walsAssociateSearchPage.searchForAssociate('App test user');
    });
    await test.step('Assert label sales associate', async () => {
      await walsAssociateSearchPage.assertMsgAssociate('APP TESTER');
    });
  });
  test('When I type zip code in the search box and click search, I am given a result and can view the associates website.', async () => {
    await test.step('Search for associate', async () => {
      await walsAssociateSearchPage.searchForAssociate('80134');
    });
    await test.step('Assert label sales associate', async () => {
      await walsAssociateSearchPage.assertMsgAssociate('SUSAN M ALLEY');
    });
  });
  test('When I type in a nonexisting zip code in the search box and click search, I receive Results not Found message.', async () => {
    await test.step('Search for associate', async () => {
      await walsAssociateSearchPage.searchForAssociate('11111');
    });
    await test.step('Assert label sales associate', async () => {
      await walsAssociateSearchPage.assertMsgAssociate('Sorry, we did not find any results for 11111');
    });
  });
});
test.describe('Test Somos legalshield', () => {
  // Setup environment before each test
  test.beforeEach(async ({ page }) => {
    test.slow();
    walsAssociateSearchPage = new WeAreLegalShieldPage(page);
    await walsAssociateSearchPage.navigateToUrl(UrlsUtils.wals.urls.urlSomos);
  });
  test.only("When I type in Jessen in the search box and click search, I'll be directed to https://www.somoslegalshield.com/opportunity/search?search_api_fulltext=Jessen", async () => {
    await test.step('Search for associate', async () => {
      await walsAssociateSearchPage.searchForAssociate('Jessen');
    });
    await test.step('Assert url https://www.somoslegalshield.com/opportunity/search?search_api_fulltext=Jessen   ', async () => {
      await walsAssociateSearchPage.WeAreLegalShieldAssertUrl(UrlsUtils.wals.urls.urlAssociate + '/results?queryParam=Jessen');
    });
  });
  test('When I type in a name in the search box and click search, I am given a result and can view the associates website.', async () => {
    await test.step('Search for associate', async () => {
      await walsAssociateSearchPage.searchForAssociate('App test user');
    });
    await test.step('Assert label sales associate', async () => {
      await walsAssociateSearchPage.assertMsgAssociate('APP TESTER');
    });
  });
  test('When I type zip code in the search box and click search, I am given a result and can view the associates website.', async () => {
    await test.step('Search for associate', async () => {
      await walsAssociateSearchPage.searchForAssociate('80134');
    });
    await test.step('Assert label sales associate', async () => {
      await walsAssociateSearchPage.assertMsgAssociate('SUSAN M ALLEY');
    });
  });
  test('When I type in a nonexisting zip code in the search box and click search, I receive Results not Found message.', async () => {
    await test.step('Search for associate', async () => {
      await walsAssociateSearchPage.searchForAssociate('11111');
    });
    await test.step('Assert label sales associate', async () => {
      await walsAssociateSearchPage.assertMsgAssociate('Lo sentimos, no encontramos ningún resultado para 11111');
    });
  });
});
test.describe('Test Nous Sommes legalshield', () => {
  // Setup environment before each test
  test.beforeEach(async ({ page }) => {
    test.slow();
    walsAssociateSearchPage = new WeAreLegalShieldPage(page);
    await walsAssociateSearchPage.navigateToUrl(UrlsUtils.wals.urls.urlNous);
  });
  test.only("When I type in Jessen in the search box and click search, I'll be directed to https://www.noussommeslegalshield.com/opportunity/search?search_api_fulltext=Jessen", async () => {
    await test.step('Search for associate', async () => {
      await walsAssociateSearchPage.searchForAssociate('Jessen');
    });
    await test.step('Assert url https://www.noussommeslegalshield.com/opportunity/search?search_api_fulltext=Jessen   ', async () => {
      await walsAssociateSearchPage.WeAreLegalShieldAssertUrl(UrlsUtils.wals.urls.urlAssociate + '/results?queryParam=Jessen');
    });
  });
  test('When I type in a name in the search box and click search, I am given a result and can view the associates website.', async () => {
    await test.step('Search for associate', async () => {
      await walsAssociateSearchPage.searchForAssociate('App test user');
    });
    await test.step('Assert label sales associate', async () => {
      await walsAssociateSearchPage.assertMsgAssociate('APP TESTER');
    });
  });
  test('When I type zip code in the search box and click search, I am given a result and can view the associates website.', async () => {
    await test.step('Search for associate', async () => {
      await walsAssociateSearchPage.searchForAssociate('80134');
    });
    await test.step('Assert label sales associate', async () => {
      await walsAssociateSearchPage.assertMsgAssociate('SUSAN M ALLEY');
    });
  });
  test('When I type in a nonexisting zip code in the search box and click search, I receive Results not Found message.', async () => {
    await test.step('Search for associate', async () => {
      await walsAssociateSearchPage.searchForAssociate('11111');
    });
    await test.step('Assert label sales associate', async () => {
      await walsAssociateSearchPage.assertMsgAssociate("Désolé, nous n'avons trouvé aucun résultat pour 11111");
    });
  });
});
test.describe('Test We Are LegalShield CA', () => {
  // Setup environment before each test
  test.beforeEach(async ({ page }) => {
    test.slow();
    walsAssociateSearchPage = new WeAreLegalShieldPage(page);
    await walsAssociateSearchPage.navigateToUrl(UrlsUtils.wals.urls.urlEnCanada);
  });
  test.only("When I type in Jessen in the search box and click search, I'll be directed to https://www.wearelegalshield.com/opportunity/search?search_api_fulltext=Jessen", async () => {
    await test.step('Search for associate', async () => {
      await walsAssociateSearchPage.searchForAssociate('Jessen');
    });
    await test.step('Assert url https://www.wearelegalshield.com/opportunity/search?search_api_fulltext=Jessen   ', async () => {
      await walsAssociateSearchPage.WeAreLegalShieldAssertUrl(UrlsUtils.wals.urls.urlAssociate + '/results?queryParam=Jessen');
    });
  });
  test('When I type in a name in the search box and click search, I am given a result and can view the associates website.', async () => {
    await test.step('Search for associate', async () => {
      await walsAssociateSearchPage.searchForAssociate('App test user');
    });
    await test.step('Assert label sales associate', async () => {
      await walsAssociateSearchPage.assertMsgAssociate('APP TESTER');
    });
  });
  test('When I type zip code in the search box and click search, I am given a result and can view the associates website.', async () => {
    await test.step('Search for associate', async () => {
      await walsAssociateSearchPage.searchForAssociate('80134');
    });
    await test.step('Assert label sales associate', async () => {
      await walsAssociateSearchPage.assertMsgAssociate('SUSAN M ALLEY');
    });
  });
  test('When I type in a nonexisting zip code in the search box and click search, I receive Results not Found message.', async () => {
    await test.step('Search for associate', async () => {
      await walsAssociateSearchPage.searchForAssociate('11111');
    });
    await test.step('Assert label sales associate', async () => {
      await walsAssociateSearchPage.assertMsgAssociate('Sorry, we did not find any results for 11111');
    });
  });
});
test.describe('Test Ladies of Justice US', () => {
  // Setup environment before each test
  test.beforeEach(async ({ page }) => {
    test.slow();
    walsAssociateSearchPage = new WeAreLegalShieldPage(page);
    await walsAssociateSearchPage.navigateToUrl(UrlsUtils.wals.urls.urlLadies);
  });
  test.only("When I type in Jessen in the search box and click search, I'll be directed to https://www.ladiesofjustice.com/opportunity/search?search_api_fulltext=Jessen", async () => {
    await test.step('Search for associate', async () => {
      await walsAssociateSearchPage.searchForAssociate('Jessen');
    });
    await test.step('Assert url https://www.ladiesofjustice.com/opportunity/search?search_api_fulltext=Jessen   ', async () => {
      await walsAssociateSearchPage.WeAreLegalShieldAssertUrl(UrlsUtils.wals.urls.urlAssociate + '/results?queryParam=Jessen');
    });
  });
  test('When I type in a name in the search box and click search, I am given a result and can view the associates website.', async () => {
    await test.step('Search for associate', async () => {
      await walsAssociateSearchPage.searchForAssociate('App test user');
    });
    await test.step('Assert label sales associate', async () => {
      await walsAssociateSearchPage.assertMsgAssociate('APP TESTER');
    });
  });
  test('When I type zip code in the search box and click search, I am given a result and can view the associates website.', async () => {
    await test.step('Search for associate', async () => {
      await walsAssociateSearchPage.searchForAssociate('80134');
    });
    await test.step('Assert label sales associate', async () => {
      await walsAssociateSearchPage.assertMsgAssociate('SUSAN M ALLEY');
    });
  });
  test('When I type in a nonexisting zip code in the search box and click search, I receive Results not Found message.', async () => {
    await test.step('Search for associate', async () => {
      await walsAssociateSearchPage.searchForAssociate('11111');
    });
    await test.step('Assert label sales associate', async () => {
      await walsAssociateSearchPage.assertMsgAssociate('Sorry, we did not find any results for 11111');
    });
  });
});
test.describe('Test Ladies of Justice CA', () => {
  // Setup environment before each test
  test.beforeEach(async ({ page }) => {
    test.slow();
    walsAssociateSearchPage = new WeAreLegalShieldPage(page);
    await walsAssociateSearchPage.navigateToUrl(UrlsUtils.wals.urls.urlLadiesCa);
  });
  test.only("When I type in Jessen in the search box and click search, I'll be directed to https://www.ladiesofjustice.ca/opportunity/search?search_api_fulltext=Jessen", async () => {
    await test.step('Search for associate', async () => {
      await walsAssociateSearchPage.searchForAssociate('Jessen');
    });
    await test.step('Assert url https://www.ladiesofjustice.ca/opportunity/search?search_api_fulltext=Jessen   ', async () => {
      await walsAssociateSearchPage.WeAreLegalShieldAssertUrl(UrlsUtils.wals.urls.urlAssociate + '/results?queryParam=Jessen');
    });
  });
  test('When I type in a name in the search box and click search, I am given a result and can view the associates website.', async () => {
    await test.step('Search for associate', async () => {
      await walsAssociateSearchPage.searchForAssociate('App test user');
    });
    await test.step('Assert label sales associate', async () => {
      await walsAssociateSearchPage.assertMsgAssociate('APP TESTER');
    });
  });
  test('When I type zip code in the search box and click search, I am given a result and can view the associates website.', async () => {
    await test.step('Search for associate', async () => {
      await walsAssociateSearchPage.searchForAssociate('80134');
    });
    await test.step('Assert label sales associate', async () => {
      await walsAssociateSearchPage.assertMsgAssociate('SUSAN M ALLEY');
    });
  });
  test('When I type in a nonexisting zip code in the search box and click search, I receive Results not Found message.', async () => {
    await test.step('Search for associate', async () => {
      await walsAssociateSearchPage.searchForAssociate('11111');
    });
    await test.step('Assert label sales associate', async () => {
      await walsAssociateSearchPage.assertMsgAssociate('Sorry, we did not find any results for 11111');
    });
  });
});
test.describe('Test Dames de justice', () => {
  // Setup environment before each test
  test.beforeEach(async ({ page }) => {
    test.slow();
    walsAssociateSearchPage = new WeAreLegalShieldPage(page);
    await walsAssociateSearchPage.navigateToUrl(UrlsUtils.wals.urls.urlDamesOfJustice);
  });

  test('When I type in a name in the search box and click search, I am given a result and can view the associates website.', async () => {
    await test.step('Search for associate', async () => {
      await walsAssociateSearchPage.searchForAssociate('App test user');
    });
    await test.step('Assert label sales associate', async () => {
      await walsAssociateSearchPage.assertMsgAssociate('APP TESTER');
    });
  });
  test('When I type zip code in the search box and click search, I am given a result and can view the associates website.', async () => {
    await test.step('Search for associate', async () => {
      await walsAssociateSearchPage.searchForAssociate('80134');
    });
    await test.step('Assert label sales associate', async () => {
      await walsAssociateSearchPage.assertMsgAssociate('SUSAN M ALLEY');
    });
  });
  test('When I type in a nonexisting zip code in the search box and click search, I receive Results not Found message.', async () => {
    await test.step('Search for associate', async () => {
      await walsAssociateSearchPage.searchForAssociate('11111');
    });
    await test.step('Assert label sales associate', async () => {
      await walsAssociateSearchPage.assertMsgAssociate("Désolé, nous n'avons trouvé aucun résultat pour 11111");
    });
  });
});
