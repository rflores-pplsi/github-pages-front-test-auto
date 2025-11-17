import { expect, Locator } from '@playwright/test';

/**
 *
 *
 * @export
 * @param {Locator} locatorToClick
 * @param {string} confirmationLocator
 * @return {*}  {Promise<void>}
 */
export async function clickLocatorWithRetry(locatorToClick: Locator, confirmationLocator: Locator): Promise<void> {
  await expect(async () => {
    await locatorToClick.click();
    await expect(confirmationLocator).toBeVisible({ timeout: 3000 });
  }).toPass({ intervals: [0.5], timeout: 25000 });
}

export async function clickLocatorWithReload(locatorToClick: Locator, confirmationLocator: Locator): Promise<void> {
  const page = locatorToClick.page();
  
  try {
    await locatorToClick.click();
    await expect(confirmationLocator).toBeVisible({ timeout: 3000 });
  } catch (error) {
    // If the expect fails, reload and try again
    console.log('Click failed, reloading page and retrying...');
    await page.reload({ waitUntil: 'load' });
    await page.waitForTimeout(3000);
    await locatorToClick.click();
    await expect(confirmationLocator).toBeVisible({ timeout: 3000 });
  }
}

export async function addQueryParamToUrl(url: string,param: string, value: string): Promise<string> {
  const urlObj = new URL(url);
  urlObj.searchParams.set(param, value);
  return urlObj.href;
}

