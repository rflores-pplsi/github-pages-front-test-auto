import { test, expect } from '@playwright/test';
import UrlsUtils from '../../utils/urls.utils';
import { CommonHeaderComponent } from '../../page-objects-refactored/common-components/common-header.component';

let commonHeaderComponent: CommonHeaderComponent;

test.beforeEach(async ({ page }) => {
  test.slow();
  commonHeaderComponent = new CommonHeaderComponent(page);
});

test('Verify Help Drop Down options', async ({ page }) => {
  console.log('Test Case: Verify Help Drop Down options');
  await test.step(`Navigate to login service`, async () => {
    await page.goto(UrlsUtils.legalshieldUrls.login.url);
  });
  await test.step(`Click on the Help button in the Header of Login Service`, async () => {
    await commonHeaderComponent.locHelpButton.click();
  });
  await test.step(`Verify the Help Menu contents`, async () => {
    await expect(commonHeaderComponent.locSalesAndCustomerServicePhoneLink).toBeVisible();
    await expect(commonHeaderComponent.locMemberServicesEmailLink).toBeVisible();
    await expect(commonHeaderComponent.locAssociateSupportPhoneLink).toBeVisible();
  });
});

test('Verify Language Drop Down options', async ({ page }) => {
  console.log('Test Case: Verify Language Drop Down options');
  await test.step(`Navigate to login service`, async () => {
    await page.goto(UrlsUtils.legalshieldUrls.login.url);
  });
  await test.step(`Click on the Globe button in the Header of Login Service`, async () => {
    await commonHeaderComponent.locGlobeButton.click();
  });
  await test.step(`Verify the Help Menu contents`, async () => {
    await expect(commonHeaderComponent.locUnitedStatesEnglishOption).toBeVisible();
    await expect(commonHeaderComponent.locEstadosUnidosOption).toBeVisible();
    await expect(commonHeaderComponent.locCanadaEnglishOption).toBeVisible();
    await expect(commonHeaderComponent.locCanadaFrancaisOption).toBeVisible();
  });
});

test('Selecting United States - English option from Market-Language adds /?market=en-US query string to the URL', async ({ page }) => {
  console.log('Test Case: Selecting United States - English option from Market-Language adds /?market=en-US query string to the URL');
  await test.step(`Navigate to login service`, async () => {
    await page.goto(UrlsUtils.legalshieldUrls.login.url);
  });
  await test.step(`Select different Market-Language Option`, async () => {
    await commonHeaderComponent.selectMarketLanguage('Estados Unidos - Español');
  });
  await test.step(`Select United States - English Option`, async () => {
    await commonHeaderComponent.selectMarketLanguage('United States - English');
  });
  await test.step(`Verify the URL contains the /?market=en-US`, async () => {
    await expect(page).toHaveURL(new RegExp('/?market=en-US'));
  });
});

test('Selecting Estados Unidos - Español option from Market-Language adds /?market=es-US query string to the URL', async ({ page }) => {
  console.log('Test Case: Selecting Estados Unidos - Español option from Market-Language adds /?market=es-US query string to the URL');
  await test.step(`Navigate to login service`, async () => {
    await page.goto(UrlsUtils.legalshieldUrls.login.url);
  });
  await test.step(`Select Estados Unidos - Español Option`, async () => {
    await commonHeaderComponent.selectMarketLanguage('Estados Unidos - Español');
  });
  await test.step(`Verify the URL contains the /?market=es-US`, async () => {
    await expect(page).toHaveURL(new RegExp('/?market=es-US'));
  });
});

test('Selecting Canada - English - Español option from Market-Language adds /?market=en-CA query string to the URL', async ({ page }) => {
  console.log('Test Case: Selecting Canada - English - Español option from Market-Language adds /?market=en-CA query string to the URL');
  await test.step(`Navigate to login service`, async () => {
    await page.goto(UrlsUtils.legalshieldUrls.login.url);
  });
  await test.step(`Select Canada - English Market-Language Option`, async () => {
    await commonHeaderComponent.selectMarketLanguage('Canada - English');
  });
  await test.step(`Verify the URL contains the /?market=en-CA`, async () => {
    await expect(page).toHaveURL(new RegExp('/?market=en-CA'));
  });
});

test('Selecting Canada - Français option from Market-Language adds /?market=fr-CA query string to the URL', async ({ page }) => {
  console.log('Test Case: Selecting Canada - Français option from Market-Language adds /?market=fr-CA query string to the URL');
  await test.step(`Navigate to login service`, async () => {
    await page.goto(UrlsUtils.legalshieldUrls.login.url);
  });
  await test.step(`Select Canada - Français Option`, async () => {
    await commonHeaderComponent.selectMarketLanguage('Canada - Français');
  });
  await test.step(`Verify the URL contains the /?market=fr-CA`, async () => {
    await expect(page).toHaveURL(new RegExp('/?market=fr-CA'));
  });
});
