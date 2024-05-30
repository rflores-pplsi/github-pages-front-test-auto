import type { Reporter, FullConfig, Suite, TestCase, TestResult, FullResult } from '@playwright/test/reporter';
import * as dotenv from 'dotenv';

interface reportData {
  duration: number;
  status: string;
  title: string;
}
class MyReporter implements Reporter {
  private apiNewRelicUrl = 'https://insights-collector.newrelic.com/v1/accounts/124794/events';
  private async sendReport(message: unknown) {
    const apiKey = process.env.API_NEW_RELIC_INGEST_KEY || '';
    const headersInfo = {
      'Content-Type': 'application/json',
      'X-Insert-Key': apiKey,
    };
    const body = JSON.stringify([
      {
        eventType: 'PlaywrightFullReport',
        testResults: message,
      },
    ]);
    try {
      const response = await fetch(this.apiNewRelicUrl, { body: body, headers: headersInfo, method: 'POST' });
      const jsonResponse = await response.json();
      return jsonResponse;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  private reportData: reportData[] = []; // Add reportData property
  failsMessage = '';
  passed = 0;
  failed = 0;
  skipped = 0;
  interrupted = 0;

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
    switch (result.status) {
      case 'passed':
        this.passed++;
        break;
      case 'failed':
      case 'timedOut':
        this.failed++;
        this.addFailMessage(`Test Case: ${test.title}\n:thumbsdown: Failed:\n>${result.error?.message}`);
        break;
      case 'skipped':
        this.skipped++;
        this.addFailMessage(`Test Case: ${test.title} skipped`);
        break;
    }
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
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error:', error);
      });
    // console.log(`onTestEnd:: Finished test ${test.title}: ${result.status}`);
  }

  async onEnd(result: FullResult) {
    const message = await this.buildMessage(result);
    this.sendReport(message);
    // Implement your Logic to send this message whenever you want.
    // e.i. Send to New Relic Here...

    // // console.log(`onEnd:: Finished the run: status: ${status}, startTime: ${startTime}, duration: ${duration}, reportData: ${allResults}`);
  }

  private addFailMessage(message: string) {
    this.failsMessage += `\n${message}`;
  }
  private async buildMessage(result: FullResult) {
    const status = this.failed > 0 ? 'failed' : 'passed';
    const duration = result.duration;
    const allResults = JSON.stringify(this.reportData);
    const resultMarkdownMessage = `
      Test Run Summary: 
      - Duration: ${duration}
      - Passed: ${this.passed}
      - Failed: ${this.failed}
      - Skipped: ${this.skipped}
      - Interrupted: ${this.interrupted}
      
      ${this.failsMessage ? `Failures: ${this.failsMessage}` : ':thumbsup: All tests passed!'}`;
    //console.log(resultMarkdownMessage);
    return resultMarkdownMessage;
  }
}
export default MyReporter;
