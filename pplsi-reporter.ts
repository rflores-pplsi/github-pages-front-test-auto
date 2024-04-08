import type { Reporter, FullConfig, Suite, TestCase, TestResult, FullResult } from '@playwright/test/reporter';
import * as dotenv from 'dotenv';

interface reportData {
  duration: number;
  status: string;
  title: string;
}
class MyReporter implements Reporter {
  private apiNewRelicUrl = 'https://insights-collector.newrelic.com/v1/accounts/124794/events';
  private reportData: reportData[] = []; // Add reportData property

  onBegin(config: FullConfig, suite: Suite) {
    // console.log(`onBegin:: Starting the run with ${suite.allTests().length} tests`);
  }

  onTestBegin(test: TestCase) {
    // console.log(`onTestBegin:: Starting test ${test.title}`);
  }
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
    // Send to New Relic Ingestion API
    const apiKey = process.env.API_NEW_RELIC_INGEST_KEY || '';
    const headersInfo = {
      'Content-Type': 'application/json',
      'X-Insert-Key': apiKey,
    };
    const body = JSON.stringify([
      {
        duration: result.duration,
        eventType: 'Playwright',
        status: result.status,
        title: test.title,
      },
    ]);

    fetch(this.apiNewRelicUrl, { body: body, headers: headersInfo, method: 'POST' })
      //.then((response) => response.json())
      .then((response) => console.log(`Test: ${test.title} send successfully? ` + response.ok))
      .catch((error) => {
        console.error('Error:', error);
      });
    // console.log(`onEnd:: Finished the run: status: ${status}, startTime: ${startTime}, duration: ${duration}, reportData: ${allResults}`);
    // console.log(`onTestEnd:: Finished test ${test.title}: ${result.status}`);
  }

  onEnd(result: FullResult) {
    // const allResults = JSON.stringify(this.reportData);
    // const allResultsString = allResults.toString();
    // // Send to New Relic Ingestion API
    // const apiKey = process.env.API_NEW_RELIC_INGEST_KEY || '';
    // const headersInfo = {
    //   'Content-Type': 'application/json',
    //   'X-Insert-Key': apiKey,
    // };
    // const body = JSON.stringify([
    //   {
    //     eventType: 'PlaywrightReporter',
    //     result: allResultsString,
    //   },
    // ]);
    // fetch(this.apiNewRelicUrl, { body: body, headers: headersInfo, method: 'POST' })
    //   //.then((response) => response.json())
    //   .then((data) => console.log('data sent to NewRelic success? ' + allResultsString))
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
    // // console.log(`onEnd:: Finished the run: status: ${status}, startTime: ${startTime}, duration: ${duration}, reportData: ${allResults}`);
  }
}
export default MyReporter;
