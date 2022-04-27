import { test } from '@playwright/test';
import { GroupEnrollmentSearchPage } from '../../page-objects/group-enrollment/group-enrollment-search.page';

let groupEnrollmentSearchPage: GroupEnrollmentSearchPage;

test.beforeEach(async ({ page }) => {
  groupEnrollmentSearchPage = new GroupEnrollmentSearchPage(page);
});

test('Newity group phase 5', async ({ page }) => {
  // Login with your credentials
  await groupEnrollmentSearchPage.navigateToGroupEnrollmentSearchPage();
  await groupEnrollmentSearchPage.searchNewityGroup();
});
