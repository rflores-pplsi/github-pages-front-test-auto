import { test } from '@playwright/test';
import { GroupEnrollmentSearchPage } from '../../page-objects/group-enrollment/group-enrollment-search.page';

let groupEnrollmentSearchPage: GroupEnrollmentSearchPage;

test.beforeEach(async ({ page }) => {
  groupEnrollmentSearchPage = new GroupEnrollmentSearchPage(page);
});

test('Newity group is displayed through the group enrollment search page', async ({ page }) => {
  console.log('Test Case: Newity group is displayed through the group enrollment search page');
  // Login through Okta
  await groupEnrollmentSearchPage.navigateToGroupEnrollmentSearchPage();
  // Search Newity group
  await groupEnrollmentSearchPage.searchNewityGroup();
  // Verify that small business page is displayed
  await groupEnrollmentSearchPage.assertGroupEnrollmentSearchPageSmallBusinessTab();
});
