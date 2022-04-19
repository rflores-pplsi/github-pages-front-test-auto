import { test } from '@playwright/test';
import { ClassicShieldAtWork } from '../../page-objects/classic-shield-at-work/classic-login.page';

let classicShieldAtWork: ClassicShieldAtWork;

test.beforeEach(async ({ page }) => {
  classicShieldAtWork = new ClassicShieldAtWork(page);
  await classicShieldAtWork.navigateToClassicShieldAtWork();
});

test('Login with credentials', async ({ page }) => {
  // Login with your credentials
  await classicShieldAtWork.loginWithCredentials();
});
