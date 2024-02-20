/* eslint-disable const-case/uppercase */
import { expect, test } from '@playwright/test';
import UrlsUtils from '../utils/urls.utils';

interface Page {
  id: number;
  title: {
    rendered: string;
  };
  link: string;
  content: {
    rendered: string;
  };
  // Add other fields as needed based on the actual post structure
}

/**
 * Fetches all the pages that are assigned to the DS2 templating structure.
 * @param {number} pageNo
 * @param {number} perPage
 * @return {Array} allPages
 */
async function fetchPages(pageNo = 1, perPage = 10): Promise<Array<Page[]>> {
  const apiUrl = `${UrlsUtils.legalshieldService.baseUrl}/wp-json/wp/v2/pages`;
  const pageTemplate = 'lsus_pages.php';
  const status = 'publish';
  const fetchUrl = `${apiUrl}/?per_page=${perPage}&template=${pageTemplate}&page=${pageNo}&status=${status}`;
  const allPages: Array<Page[]> = [];

  try {
    const response = await fetch(fetchUrl);
    const pages: Page[] = await response.json();
    if (pages.length === 0) {
      return allPages;
    }
    allPages.push(pages);

    return await fetchPages(pageNo + 1, perPage);
  } catch (error: unknown) {
    console.error('error fetching posts: ', error instanceof Error ? error.message : error);
    throw error;
  }
}
/**
 * Collects all the pages
 *
 */
fetchPages()
  .then((allPages) => {
    console.log(allPages);
  })
  .catch((error) => {
    console.error('error fetching pages: ', error);
  });
// @TODO add test for each set of ten simulataneously ( 10 workers )
// test.describe('Testing out the collection of pages from WP Rest API', () => {
//   test.setTimeout(800000);
//   test('testing fetchPages function', async () => {
//     // expect(await fetchPages()).toBeDefined();
//     // console.log(`count: ${counter} pages`);
//     expect(
//       await fetchPages()
//         .then((allPages) => {
//           console.log(allPages);
//         })
//         .catch((error) => {
//           console.error('error fetching pages: ', error);
//         })
//     ).toBeTruthy();
//   });
// });
