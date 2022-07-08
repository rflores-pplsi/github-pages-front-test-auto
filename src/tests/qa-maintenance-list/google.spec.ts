import { test } from '@playwright/test';
test('test', async ({ page }) => {
  // Go to https://www.google.com/?gws_rd=ssl
  await page.goto('https://www.google.com/?gws_rd=ssl');
  // Click [aria-label="Search"]
  await page.locator('[aria-label="Search"]').click();
  // Fill [aria-label="Search"]
  await page.locator('[aria-label="Search"]').fill('saucelabs');
  // Press Enter
  await Promise.all([
    page.waitForNavigation(/* { url: 'https://www.google.com/search?q=saucelabs&source=hp&ei=Hra9YuWuItC7qtsPpO2mwAk&iflsig=AJiK0e8AAAAAYr3ELmllv5hkzgEuacE1p1oHvCDK2Vq4&ved=0ahUKEwjlta-htNX4AhXQnWoFHaS2CZgQ4dUDCAk&uact=5&oq=saucelabs&gs_lcp=Cgdnd3Mtd2l6EAMyEQguEIAEELEDEIMBEMcBENEDMgcIABCABBAKMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6DggAEI8BEOoCEIwDEOUCOg4ILhCPARDqAhCMAxDlAjoLCAAQgAQQsQMQgwE6EQguEIAEELEDEIMBEMcBEKMCOgsILhCABBCxAxCDAToICC4QsQMQgwE6DgguEIAEEMcBEKMCENQCOhQILhCABBCxAxCDARDHARCjAhDUAjoOCC4QgAQQsQMQxwEQowI6DgguELEDEIMBEMcBEKMCOggILhCABBCxAzoICC4QgAQQ1AI6CwguEIAEEMcBEKMCOg4ILhCABBCxAxDHARDRAzoLCC4QgAQQxwEQrwE6CAgAEIAEELEDOgUIABCxAzoLCC4QgAQQxwEQ0QM6BwguELEDEApQsRlYv0JgjFJoAXAAeACAAXmIAaoHkgEDNC41mAEAoAEBsAEK&sclient=gws-wiz' }*/),
    page.locator('[aria-label="Search"]').press('Enter'),
  ]);
});
