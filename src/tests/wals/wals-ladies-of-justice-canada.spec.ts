import { test } from '@playwright/test';
import { WeAreLegalShieldPage } from '../../page-objects-refactored/wals/wals-we-are-legalshield.page';
import UrlsUtils from '../../utils/urls.utils';

// define the instance of Page declaration
let walsAssociateSearchPage: WeAreLegalShieldPage;
// Setup environment before each test
test.beforeEach(async ({ page }) => {
  test.slow();
  walsAssociateSearchPage = new WeAreLegalShieldPage(page);
  await walsAssociateSearchPage.navigateToUrl(UrlsUtils.wals.urls.urlAssociate);
});

test.describe('Test Ladies of Justice CA', () => {
  // Setup environment before each test
  test.beforeEach(async ({ page }) => {
    test.slow();
    walsAssociateSearchPage = new WeAreLegalShieldPage(page);
    await walsAssociateSearchPage.navigateToUrl(UrlsUtils.wals.urls.urlLadiesCa);
  });
  test("When I type in Jessen in the search box and click search, I'll be directed to https://www.ladiesofjustice.ca/opportunity/search?search_api_fulltext=Jessen", async () => {
    await test.step('Search for associate', async () => {
      await walsAssociateSearchPage.searchForAssociate('Jessen');
    });
    await test.step('Assert url https://www.ladiesofjustice.ca/opportunity/search?search_api_fulltext=Jessen   ', async () => {
      await walsAssociateSearchPage.WeAreLegalShieldAssertUrl(UrlsUtils.wals.urls.urlLadiesCa + '/results?queryParam=Jessen');
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
  test('When I click on the Terms of Service Link in the Footer', async () => {
    await test.step('Click on Terms of Service Link', async () => {
      await walsAssociateSearchPage.weAreLegalShieldFooterLocTermsOfServiceLink.click();
    });
    await test.step('Assert url ', async () => {
      await walsAssociateSearchPage.WeAreLegalShieldAssertUrl(UrlsUtils.wals.urls.urlLadiesCa + '/terms-service');
    });
  });

  test('When I click on the Privacy Policy Link in the Footer', async () => {
    await test.step('Click on Privacy Policy Link', async () => {
      await walsAssociateSearchPage.weAreLegalShieldFooterLocPrivacyPolicyLink.click();
    });
    await test.step('Assert url ', async () => {
      await walsAssociateSearchPage.WeAreLegalShieldAssertUrl(UrlsUtils.wals.urls.urlLadiesCa + '/privacy-policy');
    });
  });

  test('When I click on the Code of Ethics Link in the Footer', async () => {
    await test.step('Click on Code of Ethics Link', async () => {
      await walsAssociateSearchPage.weAreLegalShieldFooterLocCodeOfEthicsLink.click();
    });
    await test.step('Assert url ', async () => {
      await walsAssociateSearchPage.WeAreLegalShieldAssertUrl(UrlsUtils.wals.urls.urlLadiesCa + '/code-ethics');
    });
  });

  test('When I click on the LegalShield SOC 3 Link in the Footer', async ({ page, browserName, headless }) => {
    if ((browserName === 'chromium' && headless === true) || browserName === 'firefox') {
      test.skip; // cannot navigate to pdf for headless chrome test configs or any firefox automation
      console.log('Skipped test for Firefox or Chromium/Headless configuration, as it downloads the pdf instead of navigating to it');
    } else {
      await test.step('Click on LegalShield SOC 3 Link', async () => {
        await walsAssociateSearchPage.weAreLegalShieldFooterLocLegalShieldSOC3Link.click();
      });
      await test.step('Assert url ', async () => {
        await walsAssociateSearchPage.WeAreLegalShieldAssertUrlContains('LegalShield_SOC_3_Issued_Report.pdf');
        await page.waitForLoadState();
      });
    }
  });
});
