import type { Reporter, FullConfig, Suite, TestCase, TestResult, FullResult } from '@playwright/test/reporter';
import * as dotenv from 'dotenv';
class MyReporter implements Reporter {
  private apiNewRelicUrl = 'https://insights-collector.newrelic.com/v1/accounts/124794/events';
  onBegin(config: FullConfig, suite: Suite) {
    console.log(`onBegin:: Starting the run with ${suite.allTests().length} tests`);
  }

  onTestBegin(test: TestCase) {
    console.log(`onTestBegin:: Starting test ${test.title}`);
  }
  private reportData = [
    {
      duration: 0,
      status: 'default',
      title: 'Test Result Title',
    },
  ];

  //  Test Case Properties
  //  annotations: test.description
  //  expectedStatus: "passed"|"failed"|"timedOut"|"skipped"|"interrupted"
  //  id: string
  //  location: where test is defined
  //  parent: suite this test belongs to
  //  repeatEachIndex: number
  //  results: TestResult array
  //  retries: number
  //  timeout: number
  //  title: string
  onTestEnd(test: TestCase, result: TestResult) {
    this.reportData.push({
      duration: result.duration,
      status: result.status,
      title: test.title,
    });
    console.log(`onTestEnd:: Finished test ${test.title}: ${result.status}`);
  }

  onEnd(result: FullResult) {
    const testResults = JSON.stringify(result);
    const status = result.status;
    const startTime = result.startTime;
    const duration = result.duration;
    const allResults = JSON.stringify(this.reportData);
    // Send to New Relic Ingestion API
    const apiKey = process.env.API_NEW_RELIC_INGEST_KEY || '';
    const headersInfo = {
      'Content-Type': 'application/json',
      'X-Insert-Key': apiKey,
    };
    const body = JSON.stringify([
      {
        eventType: 'PlaywrightReporter',
        result: `reportData: ${allResults}`,
      },
    ]);

    fetch(this.apiNewRelicUrl, { body: body, headers: headersInfo, method: 'POST' })
      .then((response) => response.json())
      .then((data) => console.log('data sent to NewRelic:' + allResults))
      .catch((error) => {
        console.error('Error:', error);
      });
    console.log(`onEnd:: Finished the run: status: ${status}, startTime: ${startTime}, duration: ${duration}, reportData: ${allResults}`);
  }
}
export default MyReporter;
