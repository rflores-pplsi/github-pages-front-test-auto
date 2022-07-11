import { test } from '@playwright/test';
import { ClassicShieldAtWork } from '../../page-objects/classic-shield-at-work/classic-login.page';

let classicShieldAtWork: ClassicShieldAtWork;

test.beforeEach(async ({ page }) => {
  classicShieldAtWork = new ClassicShieldAtWork(page);
  await classicShieldAtWork.navigateToClassicShieldAtWork();
});

test('Login with credentials', async ({ page }) => {
  await classicShieldAtWork.loginWithCredentials();
});

test('Type Form Url is displayed after clicking on Sign Up link', async ({ page }) => {
  await classicShieldAtWork.assertTypeFormPageUrl();
});
