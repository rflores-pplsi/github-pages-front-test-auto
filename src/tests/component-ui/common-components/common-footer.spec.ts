import { test, expect, Page } from '@playwright/test';
import UrlsUtils from '../../../utils/urls.utils';
import { CommonFooterComponent } from '../../../page-objects/common-components/common-footer.component';

let commonFooterComponent: CommonFooterComponent;

test.beforeEach(async ({ context, page }) => {
  test.slow();
  commonFooterComponent = new CommonFooterComponent(context, page);
});

test('Common Footer displays the appropriate links and copyright info', async ({ page }) => {
  console.log('Test Case: Common Footer displays the appropriate links and copyright info');
  await test.step(`Navigate to login service`, async () => {
    await page.goto(UrlsUtils.legalshieldUrls.login.url);
  });
  await test.step(`Verify the the Footer contents`, async () => {
    await expect(commonFooterComponent.locTermsOfServiceLink).toBeVisible();
    await expect(commonFooterComponent.locPrivacyPolicyLink).toBeVisible();
    await expect(commonFooterComponent.locLegalLink).toBeVisible();
    await expect(commonFooterComponent.locCopyrightText).toBeVisible();
  });
});

test('User can click the Terms of Service Link from the Login service and open the Terms of Service in a new Tab', async ({ page }) => {
  console.log('Test Case: User can click the Terms of Service Link from the Login service and open the Terms of Service in a new Tab');
  let newPage: Page;
  await test.step(`Navigate to login service`, async () => {
    await page.goto(UrlsUtils.legalshieldUrls.login.url);
  });
  await test.step('Navigate to Terms of Service page', async () => {
    newPage = await commonFooterComponent.clickTermsOfServiceLink();
  });
  await test.step(`Verify the the Terms of Service opens in a new tab`, async () => {
    await expect(newPage).toHaveURL(new RegExp('pplsi.com/terms-service/'));
  });
});

test('User can click the Privacy Policy Link from the Login service and open the Privacy Policy in a new Tab', async ({ page }) => {
  console.log('Test Case: User can click the Privacy Policy Link from the Login service and open the Privacy Policy in a new Tab');
  let newPage: Page;
  await test.step(`Navigate to login service`, async () => {
    await page.goto(UrlsUtils.legalshieldUrls.login.url);
  });
  await test.step(`Click the Privacy Policy Link`, async () => {
    newPage = await commonFooterComponent.clickPrivacyPolicyLink();
  });
  await test.step(`Verify the the Privacy Policy opens in a new tab`, async () => {
    await expect(newPage).toHaveURL(new RegExp('pplsi.com/privacy-policy'));
  });
});

test('User can click the Legal Link from the Login service and open the Legal Disclaimer in a new Tab', async ({ page }) => {
  console.log('Test Case: User can click the Legal Link from the Login service and open the Legal Disclaimer  in a new Tab');
  let newPage: Page;
  await test.step(`Navigate to login service`, async () => {
    await page.goto(UrlsUtils.legalshieldUrls.login.url);
  });
  await test.step(`Click the Legal Link`, async () => {
    newPage = await commonFooterComponent.clickLegalLink();
  });
  await test.step(`Verify the the Legal Disclaimer opens in a new tab`, async () => {
    await expect(newPage).toHaveURL(new RegExp('pplsi.com/disclaimer/'));
  });
});
