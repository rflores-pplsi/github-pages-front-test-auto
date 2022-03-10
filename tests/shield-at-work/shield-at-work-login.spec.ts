import { test, expect, chromium } from '@playwright/test';
import { LsWorkLoginPage } from '../../page-objects/shield-at-work/shield-at-work-login.page';



let lsWorkLoginPage: LsWorkLoginPage;

test.beforeEach(async ({ page }) => {
    lsWorkLoginPage = new LsWorkLoginPage(page)
    await lsWorkLoginPage.navigateToShieldAtWork();

});

test('Login with credentials', async ({ page }) => {
    // Login with your credentials
    await lsWorkLoginPage.loginWithCredentials();
    // Verify that group management is displayed
    await lsWorkLoginPage.assertTextGroup();

});


