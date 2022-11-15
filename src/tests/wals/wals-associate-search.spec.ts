import { test } from '@playwright/test';
import { WalsAssociateSearchPage } from '../../page-objects-refactored/wals/wals-associate-search.page';

// define the instance of Page declaration
let walsAssociateSearchPage: WalsAssociateSearchPage;

// Setup environment before each test
test.beforeEach(async ({ page }) => {
  test.slow();
  walsAssociateSearchPage = new WalsAssociateSearchPage(page);
});

test('Associate search', async ({ page }) => {
  await test.step('Navigate to WALS', async () => {
    await walsAssociateSearchPage.navigateToUrl();
  });
  await test.step('Search for associate', async () => {
    await walsAssociateSearchPage.searchForAssociate('App test user');
  });
  await test.step('Assert label sales associate', async () => {
    await walsAssociateSearchPage.assertLabelSalesAssociate();
  });
});
