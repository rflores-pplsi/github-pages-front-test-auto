import type { Reporter, FullConfig, Suite, TestCase, TestResult, FullResult } from '@playwright/test/reporter';

interface reportData {
  duration: number;
  status: string;
  title: string;
}
class MyReporter implements Reporter {
  private apiNewRelicUrl = 'https://insights-collector.newrelic.com/v1/accounts/124794/events';
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
    const summaryObject = this.buildSummaryObject(result);
    
    await this.sendReport(summaryObject);
    // Implement your Logic to send this message whenever you want.
    // e.i. Send to New Relic Here...
    // // console.log(`onEnd:: Finished the run: status: ${status}, startTime: ${startTime}, duration: ${duration}, reportData: ${allResults}`);
  }

  private buildSummaryObject(result: FullResult) {
    let resultsMessage = '';
    if (this.failed === 0) {
      resultsMessage = 'All tests passed!';
    } else if (this.failed === 1 && this.failsMessage) {
      // Try to extract the first failed test title from failsMessage
      const match = this.failsMessage.match(/Test Case: ([^\n]+)/);
      if (match && match[1]) {
        resultsMessage = `${match[1]} failed.`;
      } else {
        resultsMessage = '1 test failed.';
      }
    } else if (this.failed > 1) {
      resultsMessage = `${this.failed} tests failed.`;
    }
    // Format duration as Xm Ys
    const totalSeconds = (result.duration / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = (totalSeconds - minutes * 60).toFixed(2);
    const durationString = `${minutes}m ${seconds}s`;
    return {
      duration: durationString,
      status: this.failed > 0 ? 'failed' : 'passed',
      passed: this.passed,
      failed: this.failed,
      skipped: this.skipped,
      interrupted: this.interrupted,
      failures: this.failsMessage,
      'Results Message': resultsMessage,
      // Optionally add more fields as needed
    };
  }

  private async sendReport(summaryObject: Record<string, unknown>) {
    const apiKey = process.env.API_NEW_RELIC_INGEST_KEY || '';
    const headersInfo = {
      'Content-Type': 'application/json',
      'X-Insert-Key': apiKey,
    };
    const body = JSON.stringify([
      {
        eventType: 'PlaywrightFullReport',
        ...summaryObject,
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

  private addFailMessage(message: string) {
    this.failsMessage += `\n${message}`;
  }
}
export default MyReporter;
