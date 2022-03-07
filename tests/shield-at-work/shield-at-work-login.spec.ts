import { test, expect, chromium } from '@playwright/test';
import { LsWorkLoginPage } from '../../page-objects/shield-at-work/shield-at-work-login.page';



let lsWorkLoginPage: LsWorkLoginPage;

test.beforeEach(async ({ page }) => {
    lsWorkLoginPage = new LsWorkLoginPage(page)
    await lsWorkLoginPage.navigateToLsAtWork();

});

test('Login with credentials', async ({ page }) => {
    // Login with your credentials
    await lsWorkLoginPage.loginWithCredentials();

});

test('Search group by group number', async ({ page }) => {
    test.setTimeout(120000);
    // Login with your credentials
    await lsWorkLoginPage.loginWithCredentials();
    // Type in the search field 111452 group number and click on Search button
    await lsWorkLoginPage.groupSearchByGroupNumber();
    // Verify that the group is displayed on the group management page
    await lsWorkLoginPage.assertTextGroup();

});