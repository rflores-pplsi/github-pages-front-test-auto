import { test } from '@playwright/test';

import {  WebBuilderShieldBenefits } from '../../page-objects/web-builder-shieldbenefits/web-builder-shieldbenefits.page';

let webBuilderShieldBenefits: WebBuilderShieldBenefits;

test.beforeEach(async ({ page }) => {
  webBuilderShieldBenefits = new WebBuilderShieldBenefits(page);
});

test('Web-builder ShieldBenefits page : Verify funtionality on the customize section,', async ({ page }) => {
  console.log('Verify funtionality on the web-builder ShieldBenefits page, Customize section');
  await webBuilderShieldBenefits.navigateToWebBuilderShieldBenefitsPage('83696');
  await webBuilderShieldBenefits.clickEnrollmentTab();
  await webBuilderShieldBenefits.clickManageSiteButton();
  await webBuilderShieldBenefits.assertButtonSaveIsDisplayed();
  await webBuilderShieldBenefits.assertNewGroupUrlIsDisplayed();
  await webBuilderShieldBenefits.assertDisplayMemberPerksIsDisplayed();
  await webBuilderShieldBenefits.assertSpecialInstructionsIsDisplayed();
  await webBuilderShieldBenefits.assertAddLinkButtonIsDisplayed();
  await webBuilderShieldBenefits.assertUserNameAndPasswordAreDisabled();
});

test('Web-builder ShieldBenefits page : Verify funtionality on the checkout section', async ({ page }) => {
  console.log('Web-builder ShieldBenefits page : Verify funtionality on the checkout section');
  await webBuilderShieldBenefits.navigateToWebBuilderShieldBenefitsPage('83696');
  await webBuilderShieldBenefits.clickEnrollmentTab();
  await webBuilderShieldBenefits.clickManageSiteButton();
  await webBuilderShieldBenefits.assertPlansAndPricingUrlIsDisplayed();
  await webBuilderShieldBenefits.assertSelectCheckoutTypeIsDisplayed();
  await webBuilderShieldBenefits.assertCheckoutMessageIsDisabled();
  });

  test('Web-builder ShieldBenefits page : Verify funtionality on the contact information section', async ({ page }) => {
   console.log('Web-builder ShieldBenefits page : Verify funtionality on the contact information section');
  await webBuilderShieldBenefits.navigateToWebBuilderShieldBenefitsPage('83696');
  await webBuilderShieldBenefits.clickEnrollmentTab();
  await webBuilderShieldBenefits.clickManageSiteButton();
  await webBuilderShieldBenefits.assertSelectTypeIsDisplayed();
  await webBuilderShieldBenefits.assertPhoneNumberAndEmailAreDisplayed();
  await webBuilderShieldBenefits.assertAssociateInformationIsDisplayed();
  });