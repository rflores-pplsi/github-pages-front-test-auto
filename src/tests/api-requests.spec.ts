import * as dotenv from 'dotenv';
import { expect, test, request } from '@playwright/test';
import { Reporter, TestResult } from '@playwright/test/reporter';
import { LegalshieldService } from '../page-objects/marketing-sites/legalshield/legalshield-service';
import { legalshieldServiceData } from '../tests/functional/component-ui/legalshield/legalshield-service.data';
let legalshieldService: LegalshieldService;
const API_NEW_RELIC_URL = 'https://insights-collector.newrelic.com/v1/accounts/124794/events';

test.beforeEach(async ({ context, page }) => {
  legalshieldService = new LegalshieldService(page, context);
  test.setTimeout(200000);
});
const testResults: Array<{ pageName: string; status: string; title: string }> = [];
// eslint-disable-next-line no-empty-pattern
test.afterEach(async ({ page }, testInfo) => {
  const testResult = {
    pageName: 'HomePage',
    status: 'passed',
    title: 'Test Title',
  };
  const testPage = await page.title();
  const testResultStatus = (testResult.status = 'failed' ? testResult.status : '');

  const testTitle = testInfo.title;
  // add title to status message
  testResults.push({ pageName: testPage, status: testResultStatus, title: testTitle });
  // testTitles.push({ title: test.title });
  // testResults.push(testTitles[testStatus]);
});
for (const pageUnderTest of legalshieldServiceData.filter((pageUnderTest) => pageUnderTest.disabled == false)) {
  test(`${pageUnderTest.pageName} page: Click links that navigate to another page, verify status code:200`, async () => {
    await legalshieldService.navigateToUrl(pageUnderTest.url);
    test.skip((await legalshieldService.locLinksThatNavigateToNewPage.count()) == 0, 'No links that navigate to a new tab found');
    console.log(`Test Case: ${pageUnderTest.pageName} page: Click links that navigate to another page, verify status code:200`);
    await test.step(`Click All Navigation Links and verify 200 response`, async () => {
      await legalshieldService.clickNavigationLocatorsAndVerifyResponseCodes(
        pageUnderTest.url,
        legalshieldService.locLinksThatNavigateToNewPage,
        200
      );
    });
    // testResults.push(test.info().status);
  });
}
// TODO: collect all test results then send them to New Relic
test.afterAll(() => {
  // TODO gather all test results
  const results = JSON.stringify(testResults);
  const apiKey = process.env.API_NEW_RELIC_INGEST_KEY || '';
  const headersInfo = {
    'Content-Type': 'application/json',
    'X-Insert-Key': apiKey,
  };
  const body = JSON.stringify([
    {
      eventType: 'PlaywrightEvent',
      result: `testResult: ${results}`,
    },
  ]);

  fetch(API_NEW_RELIC_URL, { body: body, headers: headersInfo, method: 'POST' })
    .then((response) => response.json())
    .then((data) => console.log('data sent to NewRelic:' + JSON.stringify(testResults)))
    .catch((error) => {
      console.error('Error:', error);
    });
});
