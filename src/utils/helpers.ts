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
    await expect(confirmationLocator).toBeVisible({ timeout: 1500 });
  }).toPass({ intervals: [0.5], timeout: 20000 });
}

export async function addQueryParamToUrl(url: string,param: string, value: string): Promise<string> {
  const urlObj = new URL(url);
  urlObj.searchParams.set(param, value);
  return urlObj.href;
}

