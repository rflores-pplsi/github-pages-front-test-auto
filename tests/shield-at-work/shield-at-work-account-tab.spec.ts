import { test, expect, chromium } from '@playwright/test';

import { ShieldAtWorkAccountTab } from '../../page-objects/shield-at-work/shield-at-work-account-tab.page';




let shieldAtWorkAccountTab:ShieldAtWorkAccountTab;

test.beforeEach(async ({ page }) => {
    shieldAtWorkAccountTab = new ShieldAtWorkAccountTab(page)
    await shieldAtWorkAccountTab.navigateToShieldAtWorkAccountTab();

});

test('Account information is displayed on the account tab', async ({ page }) => {
    // Type in the search field 111452 group number and click on Search button
    await shieldAtWorkAccountTab.navigateToShieldAtWorkAccountTab();
    // Find group 111452 
    await shieldAtWorkAccountTab.groupSearchByGroupNumber();
    // Click on View Group button 
    await shieldAtWorkAccountTab.clickViewGroup();
    // Verify that account information is displayed
    await shieldAtWorkAccountTab.assertAccountInformation();
    

});