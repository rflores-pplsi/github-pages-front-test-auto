import { test } from '@playwright/test';
import { WalsAssociateSearchPage } from '../../page-objects-refactored/wals/wals-associate-search.page';

// define the instance of Page declaration
let walsAssociateSearchPage: WalsAssociateSearchPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  test.slow();
  walsAssociateSearchPage = new WalsAssociateSearchPage(page);
});

test('When I type in a name in the search box and click search, I am given a result and can view the associates website.', async ({}) => {
  await test.step('Navigate to WALS', async () => {
    await walsAssociateSearchPage.navigateToUrl();
  });
  await test.step('Search for associate', async () => {
    await walsAssociateSearchPage.searchForAssociate('App test user');
  });
  await test.step('Assert label sales associate', async () => {
    await walsAssociateSearchPage.assertMsgAssociate('APP TESTER');
  });
});
test('When I type zip code in the search box and click search, I am given a result and can view the associates website.', async ({}) => {
  await test.step('Navigate to WALS', async () => {
    await walsAssociateSearchPage.navigateToUrl();
  });
  await test.step('Search for associate', async () => {
    await walsAssociateSearchPage.searchForAssociate('80134');
  });
  await test.step('Assert label sales associate', async () => {
    await walsAssociateSearchPage.assertMsgAssociate('SUSAN M ALLEY');
  });
});
test('When I type in a nonexisting zip code in the search box and click search, I receive Results not Found message.', async ({}) => {
  await test.step('Navigate to WALS', async () => {
    await walsAssociateSearchPage.navigateToUrl();
  });
  await test.step('Search for associate', async () => {
    await walsAssociateSearchPage.searchForAssociate('11111');
  });
  await test.step('Assert label sales associate', async () => {
    await walsAssociateSearchPage.assertMsgAssociate('Sorry, we did not find any results for 11111');
  });
});
