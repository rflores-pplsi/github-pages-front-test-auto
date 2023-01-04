import { test } from '@playwright/test';
import { WeAreLegalShieldPage } from '../../page-objects-refactored/wals/wals-we-are-legalshield.page';
import { WeAreLegalShieldOpportunitySuccessPage } from '../../page-objects-refactored/wals/wals-we-are-legalshield-opportunity-success.page';
import { WeAreLegalShieldExecutiveTeamPage } from '../../page-objects-refactored/wals/wals-we-are-legalshield-executive-team.page';

import UrlsUtils from '../../utils/urls.utils';

// define the instance of Page declaration
let walsAssociateSearchPage: WeAreLegalShieldPage;
let weAreLegalShieldOpportunitySuccessPage: WeAreLegalShieldOpportunitySuccessPage;
let weAreLegalShieldExecutiveTeamPage: WeAreLegalShieldExecutiveTeamPage;
// Setup environment before each test
test.beforeEach(async ({ page }) => {
  test.slow();
  walsAssociateSearchPage = new WeAreLegalShieldPage(page);
  weAreLegalShieldOpportunitySuccessPage = new WeAreLegalShieldOpportunitySuccessPage(page);
  weAreLegalShieldExecutiveTeamPage = new WeAreLegalShieldExecutiveTeamPage(page);
  await walsAssociateSearchPage.navigateToUrl(UrlsUtils.wals.urls.urlAssociate);
});

test.describe('Test We are LegalShield', () => {
  test("When I type in Jessen in the search box and click search, I'll be directed to https://www.wearelegalshield.com/opportunity/search?search_api_fulltext=Jessen", async () => {
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

  test('When I click on the Terms of Service Link in the Footer ', async () => {
    await test.step('Click on Terms of Service Link', async () => {
      await walsAssociateSearchPage.weAreLegalShieldFooterLocTermsOfServiceLink.click();
    });
    await test.step('Assert url ', async () => {
      await walsAssociateSearchPage.WeAreLegalShieldAssertUrl(UrlsUtils.wals.urls.urlAssociate + '/terms-service');
    });
  });

  test('When I click on the Privacy Policy Link in the Footer ', async () => {
    await test.step('Click on Privacy Policy Link', async () => {
      await walsAssociateSearchPage.weAreLegalShieldFooterLocPrivacyPolicyLink.click();
    });
    await test.step('Assert url ', async () => {
      await walsAssociateSearchPage.WeAreLegalShieldAssertUrl(UrlsUtils.wals.urls.urlAssociate + '/privacy-policy');
    });
  });

  test('When I click on the Code of Ethics Link in the Footer ', async () => {
    await test.step('Click on Code of Ethics Link', async () => {
      await walsAssociateSearchPage.weAreLegalShieldFooterLocCodeOfEthicsLink.click();
    });
    await test.step('Assert url ', async () => {
      await walsAssociateSearchPage.WeAreLegalShieldAssertUrl(UrlsUtils.wals.urls.urlAssociate + '/code-ethics');
    });
  });

  test('When I click on the LegalShield SOC 3 Link in the Footer ', async ({ page, browserName, headless }) => {
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

  test('Search Profiles of Success by Occupation and displays at least one', async () => {
    await test.step('Navigate to Profiles of Success Page', async () => {
      await walsAssociateSearchPage.WeAreLegalShieldHeaderLocProfilesOfSuccessLink.click();
    });
    await test.step('Search by Occupation', async () => {
      await weAreLegalShieldOpportunitySuccessPage.searchForProfile('Business Owner');
    });
    await test.step('Verify search by Occupation returns results and displays tile', async () => {
      await weAreLegalShieldOpportunitySuccessPage.assertNoResultsFoundMessageIsNotDisplayed();
    });
  });

  test('When I click on Read Full Bio on the Executive Team page the modal pops up and Name is Displayed', async () => {
    await test.step('Navigate to Executive Team Page', async () => {
      await walsAssociateSearchPage.WeAreLegalShieldHeaderLocExecutiveTeamLink.click();
    });
    await test.step('Click on Read Full Bio Link for Name', async () => {
      await weAreLegalShieldExecutiveTeamPage.clickOnReadFullBioLink('Steve Williamson');
    });
    await test.step('Close Bio Modal and assert Not Displayed', async () => {
      await weAreLegalShieldExecutiveTeamPage.closeBioModalAndAssertNotVisible();
    });
  });
  test('Search Profiles of Success by Name and displays at least one', async () => {
    await test.step('Navigate to Profiles of Success Page', async () => {
      await walsAssociateSearchPage.WeAreLegalShieldHeaderLocProfilesOfSuccessLink.click();
    });
    await test.step('Search by Name', async () => {
      await weAreLegalShieldOpportunitySuccessPage.searchForProfile('Jessen');
    });
    await test.step('Verify search by Occupation returns results and displays tile', async () => {
      await weAreLegalShieldOpportunitySuccessPage.assertNoResultsFoundMessageIsNotDisplayed();
    });
  });
});
