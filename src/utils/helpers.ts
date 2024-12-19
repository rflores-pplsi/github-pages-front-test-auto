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
