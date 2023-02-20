import { test } from '@playwright/test';

import { WebBuilderShieldBenefits } from '../../page-objects (Archived)/web-builder-shieldbenefits/web-builder-shieldbenefits.page';

let webBuilderShieldBenefits: WebBuilderShieldBenefits;

test.beforeEach(async ({ page }) => {
  webBuilderShieldBenefits = new WebBuilderShieldBenefits(page);
});

test('Web-builder ShieldBenefits page : Verify functionality on the customize section,', async () => {
  console.log('Verify functionality on the web-builder ShieldBenefits page, Customize section');
  await webBuilderShieldBenefits.navigateToWebBuilderShieldBenefitsPage();
  await webBuilderShieldBenefits.clickEnrollmentTab();
  await webBuilderShieldBenefits.clickManageSiteButton();
  await webBuilderShieldBenefits.assertButtonSaveIsDisplayed();
  await webBuilderShieldBenefits.assertNewGroupUrlIsDisplayed();
  await webBuilderShieldBenefits.assertDisplayMemberPerksIsDisplayed();
  await webBuilderShieldBenefits.assertSpecialInstructionsIsDisplayed();
  await webBuilderShieldBenefits.assertAddLinkButtonIsDisplayed();
  await webBuilderShieldBenefits.assertUserNameAndPasswordAreDisabled();
});

test('Web-builder ShieldBenefits page : Verify functionality on the checkout section', async () => {
  console.log('Web-builder ShieldBenefits page : Verify functionality on the checkout section');
  await webBuilderShieldBenefits.navigateToWebBuilderShieldBenefitsPage();
  await webBuilderShieldBenefits.clickEnrollmentTab();
  await webBuilderShieldBenefits.clickManageSiteButton();
  await webBuilderShieldBenefits.assertPlansAndPricingUrlIsDisplayed();
  await webBuilderShieldBenefits.assertSelectCheckoutTypeIsDisplayed();
  await webBuilderShieldBenefits.assertCheckoutMessageIsDisabled();
});

test('Web-builder ShieldBenefits page : Verify functionality on the contact information section', async () => {
  console.log('Web-builder ShieldBenefits page : Verify functionality on the contact information section');
  await webBuilderShieldBenefits.navigateToWebBuilderShieldBenefitsPage();
  await webBuilderShieldBenefits.clickEnrollmentTab();
  await webBuilderShieldBenefits.clickManageSiteButton();
  await webBuilderShieldBenefits.assertSelectTypeIsDisplayed();
  await webBuilderShieldBenefits.assertPhoneNumberAndEmailAreDisplayed();
  await webBuilderShieldBenefits.assertAssociateInformationIsDisplayed();
});
