import { test } from '@playwright/test';
import { ClassicShieldAtWork } from '../../../archived/page-objects-old/classic-shield-at-work/classic-login.page';

let classicShieldAtWork: ClassicShieldAtWork;

test.beforeEach(async ({ page }) => {
  classicShieldAtWork = new ClassicShieldAtWork(page);
  await classicShieldAtWork.navigateToClassicShieldAtWork();
});

test('Login with credentials', async () => {
  await classicShieldAtWork.loginWithCredentials();
});

test('Type Form Url is displayed after clicking on Sign Up link', async () => {
  await classicShieldAtWork.assertTypeFormPageUrl();
});
