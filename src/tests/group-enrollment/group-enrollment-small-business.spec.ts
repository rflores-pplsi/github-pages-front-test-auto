import { test } from '@playwright/test';
import { GroupEnrollmentSmallBusinessPage } from '../../page-objects/group-enrollment/group-enrollment-small-business.page';

let groupEnrollmentSmallBusinessPage: GroupEnrollmentSmallBusinessPage;

test.beforeEach(async ({ page }) => {
  groupEnrollmentSmallBusinessPage = new GroupEnrollmentSmallBusinessPage(page);
  test.slow();
});

test('Verify functionality on the small business page - Sign In button redirects to accounts V2', async ({ page }) => {
  console.log('Test Case: Verify functionality on the small business page - Sign In button redirects to accounts V2');
  // Navigate to the small business page
  await groupEnrollmentSmallBusinessPage.navigateToGroupEnrollmentSmallBusinessPage();
  // Click on Sign In button
  await groupEnrollmentSmallBusinessPage.clickBtnSignIn();
  // Verify Accounts v2 url displays
  await groupEnrollmentSmallBusinessPage.assertAccountsUrl();
});

test('Verify functionality on the small business page - Law firm information is displayed', async ({ page }) => {
  console.log('Test Case: Verify functionality on the small business page - Law firm information is displayed');
  // Navigate to the small business page
  await groupEnrollmentSmallBusinessPage.navigateToGroupEnrollmentSmallBusinessPage();
  // Type in the law search field zip code and click on Law Firm search button
  await groupEnrollmentSmallBusinessPage.searchLawFirm();
  // Confirm Law Firm information displays on the small business page
  await groupEnrollmentSmallBusinessPage.assertLawFirmInformation();
});

test('Verify functionality on the small business page - App Store link connected to the store site', async ({ page }) => {
  console.log('Test Case: Verify functionality on the small business page - App Store link connected to the store site');
  // Navigate to the small business page
  await groupEnrollmentSmallBusinessPage.navigateToGroupEnrollmentSmallBusinessPage();
  // Click on App Store link
  await groupEnrollmentSmallBusinessPage.clickAppStoreLink();
  // Confirm App store url displays
  await groupEnrollmentSmallBusinessPage.assertAppStoreUrl();
});

test('Verify functionality on the small business page - Back to top button takes users to top of page', async ({ page }) => {
  console.log('Test Case: Verify functionality on the small business page - Back to top button takes users to top of page');
  // Navigate to the small business page
  await groupEnrollmentSmallBusinessPage.navigateToGroupEnrollmentSmallBusinessPage();
  // Click on Back to top button
  await groupEnrollmentSmallBusinessPage.clickBtnBackToTop();
  // Confirm top of page is displayed
  await groupEnrollmentSmallBusinessPage.assertGroupEnrollmentSearchPageSmallBusinessTab();
});
