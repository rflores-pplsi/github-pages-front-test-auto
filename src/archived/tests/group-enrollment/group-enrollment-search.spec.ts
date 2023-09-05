import { test } from '@playwright/test';
import { GroupEnrollmentSearchPage } from '../../../archived/page-objects-old/group-enrollment/group-enrollment-search.page';

let groupEnrollmentSearchPage: GroupEnrollmentSearchPage;

test.beforeEach(async ({ page }) => {
  groupEnrollmentSearchPage = new GroupEnrollmentSearchPage(page);
  test.slow();
});

test('Newity group is displayed through the group enrollment search page', async () => {
  console.log('Test Case: Newity group is displayed through the group enrollment search page');
  // Login through Okta
  await groupEnrollmentSearchPage.navigateToGroupEnrollmentSearchPage();
  // Search group
  await groupEnrollmentSearchPage.searchGroup();
  // Copy link and open it in another browser tab
  await groupEnrollmentSearchPage.navigateToGroupEnrollmentGroupURLPage();
  // Verify that small business page is displayed
  await groupEnrollmentSearchPage.assertGroupEnrollmentSearchPageSmallBusinessTab();
});
