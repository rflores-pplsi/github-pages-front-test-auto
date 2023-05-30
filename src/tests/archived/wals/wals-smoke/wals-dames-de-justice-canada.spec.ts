import { test } from '@playwright/test';
import { WeAreLegalShieldPage } from '../../../../page-objects/wals/wals-we-are-legalshield.page';
import { WeAreLegalShieldHeaderComponent } from '../../../../page-objects/wals/wals-we-are-legalshield-header.component';
import { WeAreLegalShieldOpportunitySuccessPage } from '../../../../page-objects/wals/wals-we-are-legalshield-opportunity-success.page';
import { WeAreLegalShieldExecutiveTeamPage } from '../../../../page-objects/wals/wals-we-are-legalshield-executive-team.page';
import UrlsUtils from '../../../../utils/urls.utils';

// define the instance of Page declaration
let walsAssociateSearchPage: WeAreLegalShieldPage;
let weAreLegalShieldHeaderComponent: WeAreLegalShieldHeaderComponent;
let weAreLegalShieldOpportunitySuccessPage: WeAreLegalShieldOpportunitySuccessPage;
let weAreLegalShieldExecutiveTeamPage: WeAreLegalShieldExecutiveTeamPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  test.slow();
  walsAssociateSearchPage = new WeAreLegalShieldPage(page);
  weAreLegalShieldHeaderComponent = new WeAreLegalShieldHeaderComponent(page);
  weAreLegalShieldOpportunitySuccessPage = new WeAreLegalShieldOpportunitySuccessPage(page);
  weAreLegalShieldExecutiveTeamPage = new WeAreLegalShieldExecutiveTeamPage(page);
  await walsAssociateSearchPage.navigateToUrl(UrlsUtils.wals.urls.urlDamesDeJustice);
});
test.describe('Test Dames de justice', () => {
  test("When I type in Jessen in the search box and click search, I'll be directed to https://www.damesdejustice.ca/opportunity/search?search_api_fulltext=Jessen", async () => {
    await test.step('Search for associate', async () => {
      await walsAssociateSearchPage.searchForAssociate('Jessen');
    });
    await test.step('Assert url https://www.damesdejustice.ca/opportunity/search?search_api_fulltext=Jessen   ', async () => {
      await walsAssociateSearchPage.WeAreLegalShieldAssertUrl(UrlsUtils.wals.urls.urlDamesDeJustice + '/results?queryParam=Jessen');
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
  test('When I click on the Terms of Service Link in the Footer', async () => {
    await test.step('Click on Terms of Service Link', async () => {
      await walsAssociateSearchPage.weAreLegalShieldFooterLocTermsOfServiceLink.click();
    });
    await test.step('Assert url ', async () => {
      await walsAssociateSearchPage.WeAreLegalShieldAssertUrl(UrlsUtils.wals.urls.urlDamesDeJustice + '/terms-service');
    });
  });

  test('When I click on the Privacy Policy Link in the Footer', async () => {
    await test.step('Click on Privacy Policy Link', async () => {
      await walsAssociateSearchPage.weAreLegalShieldFooterLocPrivacyPolicyLink.click();
    });
    await test.step('Assert url ', async () => {
      await walsAssociateSearchPage.WeAreLegalShieldAssertUrl(UrlsUtils.wals.urls.urlDamesDeJustice + '/privacy-policy');
    });
  });

  test('When I click on the Code of Ethics Link in the Footer', async () => {
    await test.step('Click on Code of Ethics Link', async () => {
      await walsAssociateSearchPage.weAreLegalShieldFooterLocCodeOfEthicsLink.click();
    });
    await test.step('Assert url ', async () => {
      await walsAssociateSearchPage.WeAreLegalShieldAssertUrl(UrlsUtils.wals.urls.urlDamesDeJustice + '/code-ethics');
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

  test('Search Profiles of Success by Occupation and displays at least one', async () => {
    await test.step('Navigate to Profiles of Success Page', async () => {
      await walsAssociateSearchPage.weAreLegalShieldHeaderLocProfilesOfSuccessLink.click();
    });
    await test.step('Search by Occupation', async () => {
      await weAreLegalShieldOpportunitySuccessPage.searchForProfile('Business Owner');
    });
    await test.step('Verify search by Occupation returns results and displays tile', async () => {
      await weAreLegalShieldOpportunitySuccessPage.assertNoResultsFoundMessageIsNotDisplayed();
    });
  });

  test('Search Profiles of Success by Name and displays at least one', async () => {
    await test.step('Navigate to Profiles of Success Page', async () => {
      await walsAssociateSearchPage.weAreLegalShieldHeaderLocProfilesOfSuccessLink.click();
    });
    await test.step('Search by Name', async () => {
      await weAreLegalShieldOpportunitySuccessPage.searchForProfile('Jessen');
    });
    await test.step('Verify search by Occupation returns results and displays tile', async () => {
      await weAreLegalShieldOpportunitySuccessPage.assertNoResultsFoundMessageIsNotDisplayed();
    });
  });

  test('When I click on Read Full Bio on the Executive Team page the modal pops up and Name is Displayed', async () => {
    await test.step('Navigate to Executive Team Page', async () => {
      await walsAssociateSearchPage.weAreLegalShieldHeaderLocExecutiveTeamLink.click();
    });
    await test.step('Click on Read Full Bio Link for Name', async () => {
      await weAreLegalShieldExecutiveTeamPage.clickOnReadFullBioLink('Steve Williamson');
    });
    await test.step('Close Bio Modal and assert Not Displayed', async () => {
      await weAreLegalShieldExecutiveTeamPage.closeBioModalAndAssertNotVisible();
    });
  });

  test('When I select English (US) from the Header Language Dropdown I am redirected to wearelegalshield.com', async () => {
    await test.step('Select English (US) from the Header Language Dropdown', async () => {
      await weAreLegalShieldHeaderComponent.selectLanguageFromHeader('Anglais (US)');
    });
    await test.step('Assert wearelegalshield.com', async () => {
      await walsAssociateSearchPage.WeAreLegalShieldAssertUrlContains(UrlsUtils.wals.urls.urlAssociate);
    });
  });

  test('When I select Español (ES) from the Header Language Dropdown I am redirected to somoslegalshield', async () => {
    await test.step('Select Español (ES) from the Header Language Dropdown', async () => {
      await weAreLegalShieldHeaderComponent.selectLanguageFromHeader('Español (ES)');
    });
    await test.step('Assert somoslegalshield url', async () => {
      await walsAssociateSearchPage.WeAreLegalShieldAssertUrlContains(UrlsUtils.wals.urls.urlSomos);
    });
  });

  test('When I select Français Canadien (fr-CA) from the Header Language Dropdown I am redirected to noussommeslegalshield.ca', async () => {
    await test.step('Select Français Canadien (fr-CA)from the Header Language Dropdown', async () => {
      await weAreLegalShieldHeaderComponent.selectLanguageFromHeader('Français Canadien (fr-CA)');
    });
    await test.step('Assert Français Canadien (fr-CA) url', async () => {
      await walsAssociateSearchPage.WeAreLegalShieldAssertUrlContains(UrlsUtils.wals.urls.urlNous);
    });
  });
  test('When I click on Member Login I am redirected to the accounts service', async () => {
    await test.step('Click on the Member Login Link', async () => {
      await weAreLegalShieldHeaderComponent.weAreLegalShieldHeaderMemberLoginLink.click();
    });
    await test.step('Assert accounts url', async () => {
      await walsAssociateSearchPage.WeAreLegalShieldAssertUrlContains(UrlsUtils.legalshieldUrls.accounts.url);
    });
  });
  test('When I click on the Executive Team Link am redirected to the the executive team page', async () => {
    await test.step('Click on the Executive Team Link', async () => {
      await weAreLegalShieldHeaderComponent.weAreLegalShieldHeaderLocExecutiveTeamLink.click();
    });
    await test.step('Assert executive team url', async () => {
      await walsAssociateSearchPage.WeAreLegalShieldAssertUrlContains(UrlsUtils.wals.urls.urlDamesDeJustice + '/executive-team');
    });
  });

  test('When I click on the About Us Link am redirected to the the about us page', async () => {
    await test.step('Click on the About Us Link', async () => {
      await weAreLegalShieldHeaderComponent.weAreLegalShieldHeaderLocAboutUsLink.click();
    });
    await test.step('Assert about us url', async () => {
      await walsAssociateSearchPage.WeAreLegalShieldAssertUrlContains(UrlsUtils.wals.urls.urlDamesDeJustice + '/about');
    });
  });

  test('When I click on the Profiles of Success Link am redirected to the the opportunity success page', async () => {
    await test.step('Click on the Profiles of Success Link', async () => {
      await weAreLegalShieldHeaderComponent.weAreLegalShieldHeaderLocProfilesOfSuccessLink.click();
    });
    await test.step('Assert opportunity success url', async () => {
      await walsAssociateSearchPage.WeAreLegalShieldAssertUrlContains(UrlsUtils.wals.urls.urlDamesDeJustice + '/opportunity/success');
    });
  });

  test('When I click on the Ladies of Justice logo I am returned to noussommeslegalshield.ca', async () => {
    await test.step('Navigate away from noussommeslegalshield.ca', async () => {
      await weAreLegalShieldHeaderComponent.weAreLegalShieldHeaderLocExecutiveTeamLink.click();
    });
    await test.step('Click on the Ladies of Justice logo', async () => {
      await weAreLegalShieldHeaderComponent.damesDeJusticeHeaderLocLadiesOfJusticeLogo.click();
    });
    await test.step('Assert damesdejustice.ca url', async () => {
      await walsAssociateSearchPage.WeAreLegalShieldAssertUrlContains(UrlsUtils.wals.urls.urlDamesDeJustice);
    });
  });
});
