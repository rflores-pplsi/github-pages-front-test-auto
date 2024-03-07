/* eslint-disable const-case/uppercase */
import { expect, test } from '@playwright/test';
import UrlsUtils from '../utils/urls.utils';

interface Page {
  id: number;
  title: {
    rendered: string;
  };
  link: string;
  // Add other fields as needed based on the actual post structure
}

/**
 * Fetches all the pages that are assigned to the DS2 templating structure.
 * @param {number} pageNo
 * @param {number} perPage
 * @return {Promise} Page object
 */
async function fetchPages(pageNo: number, perPage: number): Promise<Page[]> {
  const apiUrl = `${UrlsUtils.legalshieldService.baseUrl}/wp-json/wp/v2/pages`;
  const pageTemplate = 'lsus_pages.php';
  const status = 'publish';
  const fetchUrl = `${apiUrl}/?per_page=${perPage}&template=${pageTemplate}&page=${pageNo}&status=${status}`;
  const allPages: Page[] = [];
  try {
    const response = await fetch(fetchUrl);
    const pages: Page[] = await response.json();
    if (pages.length === 0) {
      return allPages;
    }
    pages.forEach((page) => {
      allPages.push(page);
    });

    return allPages; // testing the return value of single fetchPages method
    // return await fetchPages(pageNo + 1, perPage);
  } catch (error: unknown) {
    console.error('error fetching posts: ', error instanceof Error ? error.message : error);
    throw error;
  }
}
// @TODO add test for each set of ten simulataneously ( 10 workers )
// test.describe.configure({ mode: 'parallel', timeout: 50_000, workers: 10 }, ({ page }) => {
//   test('test 1', async ({ page }) => {
//     // Test implementation
//   });

//   test('test 2', async ({ page }) => {
//     // Test implementation
//   });
// });
// configure parallel mode for all subsequent tests
// test.describe.configure({ mode: 'parallel', timeout: 50_000 });
// test 1
// test('test 1: run all tests at once in parallel mode', async ({ page }) => {
//   const allPages = await fetchPages(1, 5);
//   console.log(allPages);
//   // Add your tests here
//   const links = allPages.map((newPage) => newPage.link);
//   for (const link of links) {
//     await page.goto(link);
//     console.log('pageURL: ', page.url());
//     console.log('link: ', link);
//     expect(page.url()).toBe(link);
//   }
// });
