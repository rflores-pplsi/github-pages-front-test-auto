import { test } from '@playwright/test';

import {  WebBuilderShieldBenefits } from '../../page-objects/web-builder-shieldbenefits/web-builder-shieldbenefits.page';

let webBuilderShieldBenefits: WebBuilderShieldBenefits;

test.beforeEach(async ({ page }) => {
  webBuilderShieldBenefits = new WebBuilderShieldBenefits(page);
});

test.skip('Verify funtionality on the web-builder ShieldBenefits page', async ({ page }) => {
  console.log('Verify funtionality on the web-builder ShieldBenefits page');
  await webBuilderShieldBenefits.navigateToWebBuilderShieldBenefitsPage('83696');
  await webBuilderShieldBenefits.clickEnrollmentTab();
  await webBuilderShieldBenefits.clickManageSiteButton();
  await webBuilderShieldBenefits.clickSaveButton();
});