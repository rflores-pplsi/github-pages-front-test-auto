import { test, expect } from '@playwright/test';
import UrlsUtils from '../../../utils/urls.utils';
import { CommonHeaderComponent } from '../../../page-objects/common-components/common-header.component';
import { CommonLoginService } from '@legalshield/frontend-automation-commons';
import { basicUser } from '../../../utils/user.utils';

let commonHeaderComponent: CommonHeaderComponent;
let commonLoginService: CommonLoginService;

test.beforeEach(async ({ page }) => {
  test.slow();
  commonHeaderComponent = new CommonHeaderComponent(page);
  commonLoginService = new CommonLoginService(page);
});

test('User can reveal the Help options by clicking the Help button', async ({ page }) => {
  console.log('Test Case: User can reveal the Help options by clicking the Help button');
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

test('User can reveal the Language options by clicking the Globe icon', async ({ page }) => {
  console.log('Test Case: User can reveal the Language options by clicking the Globe icon');
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

test('User can select en-US from the Language options menu', async ({ page }) => {
  console.log('Test Case: User can select en-US from the Language options menu');
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

test('User can select es-US from the Language options menu', async ({ page }) => {
  console.log('Test Case: User can select es-US from the Language options menu');
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

test('User can select en-CA from the Language options menu', async ({ page }) => {
  console.log('Test Case: User can select en-CA from the Language options menu');
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

test('User can select fr-CA from the Language options menu', async ({ page }) => {
  console.log('Test Case: User can select fr-CA from the Language options menu');
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

test('Common Header displays the following in the Login service', async ({ page }) => {
  console.log('Test Case: Common Header displays the following in the Login service');
  await test.step(`Navigate to login service`, async () => {
    await page.goto(UrlsUtils.legalshieldUrls.login.url);
  });
  await test.step(`Verify elements and style of Header`, async () => {
    // Header container is different depending on service?
    await expect(commonHeaderComponent.locLoginHeader).toHaveCSS('background-color', 'rgb(63, 63, 63)');
    await expect(commonHeaderComponent.locLargeLogo).toBeVisible();
    await expect(commonHeaderComponent.locPageLabel).toContainText('Sign In');
    await expect(commonHeaderComponent.locPageLabel).toHaveCSS('color', 'rgb(255, 255, 255)');
    await expect(commonHeaderComponent.locHelpButton).toBeVisible();
    await expect(commonHeaderComponent.locHelpButton).toBeVisible();
    await expect(commonHeaderComponent.locGlobeButton).toBeVisible();
  });
});

test('Common Header displays the following in the Accounts service', async ({ page }) => {
  console.log('Test Case: Common Header displays the following in the Accounts service');
  await test.step(`Navigate to login service`, async () => {
    await page.goto(UrlsUtils.legalshieldUrls.login.url);
  });
  await test.step(`Log in to reach Accounts service`, async () => {
    await commonLoginService.loginPage.login(basicUser.email, basicUser.password);
  });
  await test.step(`Verify elements and style of Header`, async () => {
    // Header container is different depending on service?
    await expect(commonHeaderComponent.locAccountsHeader).toHaveCSS('background-color', 'rgb(63, 63, 63)');
    await expect(commonHeaderComponent.locLargeLogo).toBeVisible();
    await expect(commonHeaderComponent.locPageLabel).toContainText('Account');
    await expect(commonHeaderComponent.locPageLabel).toHaveCSS('color', 'rgb(255, 255, 255)');
    await expect(commonHeaderComponent.locHelpButton).toBeVisible();
    await expect(commonHeaderComponent.locHelpButton).toBeVisible();
    await expect(commonHeaderComponent.locAccountMenuDropDown).toBeVisible();
  });
});

test('Common Header displays the following in the Cart-Builder service', async ({ page }) => {
  console.log('Test Case: Common Header displays the following in the Cart-Builder service');
  test.skip(); // remove skip and update test case once cart-builder is finished
  await test.step(`Navigate to login service`, async () => {
    await page.goto(UrlsUtils.legalshieldUrls.login.url);
  });
  await test.step(`Log in to reach Accounts service`, async () => {
    await commonLoginService.loginPage.login(basicUser.email, basicUser.password);
  });
  await test.step(`Verify elements and style of Header`, async () => {
    // Header container is different depending on service?
    await expect(commonHeaderComponent.locAccountsHeader).toHaveCSS('background-color', 'rgb(63, 63, 63)');
    await expect(commonHeaderComponent.locLargeLogo).toBeVisible();
    await expect(commonHeaderComponent.locPageLabel).toContainText('Cart-Builder');
    await expect(commonHeaderComponent.locPageLabel).toHaveCSS('color', 'rgb(255, 255, 255)');
    await expect(commonHeaderComponent.locHelpButton).toBeVisible();
    await expect(commonHeaderComponent.locHelpButton).toBeVisible();
    await expect(commonHeaderComponent.locAccountMenuDropDown).toBeVisible();
  });
});

test('User can reveal the Account menu by clicking on the My Account dropdown', async ({ page }) => {
  console.log('Test Case: User can reveal the Account menu by clicking on the My Account dropdown');
  await test.step(`Navigate to login service`, async () => {
    await page.goto(UrlsUtils.legalshieldUrls.login.url);
  });
  await test.step(`Log in to reach Accounts service`, async () => {
    await commonLoginService.loginPage.login(basicUser.email, basicUser.password);
  });
  await test.step(`Click on the Avatar Dropdown`, async () => {
    await commonHeaderComponent.locAccountMenuDropDown.click();
  });
  await test.step(`Verify Account Menu contents`, async () => {
    await expect(commonHeaderComponent.locAccountMenuName).toBeVisible();
    await expect(commonHeaderComponent.locAccountMenuEmail).toBeVisible();
    await expect(commonHeaderComponent.locAccountMenuMyProductsLink).toBeVisible();
    await expect(commonHeaderComponent.locAccountMenuMyAccountLink).toBeVisible();
    await expect(commonHeaderComponent.locAccountMenuSignOutLink).toBeVisible();
  });
});

test('User can navigate to the Accounts Home page by clicking the Account menu My products link', async ({ page }) => {
  console.log('Test Case: User can navigate to the Accounts Home page by clicking the Account menu My products link');
  await test.step(`Navigate to login service`, async () => {
    await page.goto(UrlsUtils.legalshieldUrls.login.url);
  });
  await test.step(`Log in to reach Accounts service`, async () => {
    await commonLoginService.loginPage.login(basicUser.email, basicUser.password);
  });
  await test.step(`Navigate away from Accounts Home page`, async () => {
    await commonHeaderComponent.navigateToAccountsProfilePageThroughMyAccountsLink();
  });
  await test.step(`Navigate back to the Accounts Home page by clicking the Account menu My products link`, async () => {
    await commonHeaderComponent.navigateToAccountsHomePageThroughMyProductsLink();
  });
  await test.step(`Verify URL contains /home`, async () => {
    await expect(page).toHaveURL(new RegExp('/home'));
  });
});

test('User can navigate to the Accounts Profile page by clicking the Account menu My Account link', async ({ page }) => {
  console.log('Test Case: User can navigate to the Accounts Profile page by clicking the Account menu My Account link');
  await test.step(`Navigate to login service`, async () => {
    await page.goto(UrlsUtils.legalshieldUrls.login.url);
  });
  await test.step(`Log in to reach Accounts service`, async () => {
    await commonLoginService.loginPage.login(basicUser.email, basicUser.password);
  });
  await test.step(`Navigate to the Accounts Profile page by clicking the Account menu My Account link`, async () => {
    await commonHeaderComponent.navigateToAccountsProfilePageThroughMyAccountsLink();
  });
  await test.step(`Verify URL contains /home`, async () => {
    await expect(page).toHaveURL(new RegExp('/profile'));
  });
});

test('User can sign out of their account by clicking the Account menu Sign Out link', async ({ page }) => {
  console.log('Test Case: User can sign out of their account by clicking the Account menu Sign Out link');
  await test.step(`Navigate to login service`, async () => {
    await page.goto(UrlsUtils.legalshieldUrls.login.url);
  });
  await test.step(`Log in to reach Accounts service`, async () => {
    await commonLoginService.loginPage.login(basicUser.email, basicUser.password);
  });
  await test.step(`Sign out of account by clicking the Account menu Sign Out link`, async () => {
    await commonHeaderComponent.signOut();
  });
  await test.step(`Verify URL contains /home`, async () => {
    await expect(page).toHaveURL(new RegExp('/logged-out'));
  });
});
