import { expect, Page } from '@playwright/test';
import UrlsUtils from '../../../../utils/urls.utils';
import { test } from '../../../../fixtures/frontend-ui.fixture';

test('Common Footer displays the appropriate links and copyright info', async ({ page, commonFooterComponent }) => {
  console.log('Test Case: Common Footer displays the appropriate links and copyright info');
  test.slow();
  await test.step(`Navigate to login service`, async () => {
    await page.goto(UrlsUtils.legalshieldUrls.login.url);
  });
  await test.step(`Verify the the Footer contents`, async () => {
    await expect.soft(commonFooterComponent.locTermsOfServiceLink).toBeVisible();
    await expect.soft(commonFooterComponent.locPrivacyPolicyLink).toBeVisible();
    await expect.soft(commonFooterComponent.locLegalLink).toBeVisible();
    await expect.soft(commonFooterComponent.locCopyrightText).toBeVisible();
  });
});

test('User can click the Terms of Service Link from the Login service and open the Terms of Service in a new Tab', async ({
  page,
  commonFooterComponent,
}) => {
  console.log('Test Case: User can click the Terms of Service Link from the Login service and open the Terms of Service in a new Tab');
  test.slow();
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

test('User can click the Privacy Policy Link from the Login service and open the Privacy Policy in a new Tab', async ({
  page,
  commonFooterComponent,
}) => {
  console.log('Test Case: User can click the Privacy Policy Link from the Login service and open the Privacy Policy in a new Tab');
  test.slow();
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

test('User can click the Legal Link from the Login service and open the Legal Disclaimer in a new Tab', async ({ page, commonFooterComponent }) => {
  console.log('Test Case: User can click the Legal Link from the Login service and open the Legal Disclaimer  in a new Tab');
  test.slow();
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
