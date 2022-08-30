import { test } from '@playwright/test';

import {  WebBuilderShieldBenefits } from '../../page-objects/web-builder-shieldbenefits/web-builder-shieldbenefits.page';

let webBuilderShieldBenefits: WebBuilderShieldBenefits;

test.beforeEach(async ({ page }) => {
  webBuilderShieldBenefits = new WebBuilderShieldBenefits(page);
});

test('Manage Site button is enabled on the enrollment tab', async ({ page }) => {
  console.log('Manage Site button is enabled on the enrollment tab');
  await webBuilderShieldBenefits.navigateToWebBuilderShieldBenefitsPage('83696');
  await webBuilderShieldBenefits.clickEnrollmentTab();
  await webBuilderShieldBenefits.clickManageSiteButton();
});